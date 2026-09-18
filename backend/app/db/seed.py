import os
import sys
import joblib
from datetime import datetime
import pandas as pd
import numpy as np

backend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from app.db.database import engine, Base, SessionLocal
from app.db.models import User, Transaction, BehaviourProfile, Alert

# Path to transactions dataset CSV
CSV_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../ml/data/transactions.csv"))
MODEL_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../ml/models/fraud_model.pkl"))

def seed_database():
    print("Initializing Database tables...")
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        # Check if full dataset is already seeded
        existing_txns = db.query(Transaction).count()
        if existing_txns >= 1000:
            print(f"Database already contains {existing_txns} transactions. Skipping re-seed.")
            return

        print(f"Seeding Database with full dataset from {CSV_PATH}...")

        # If partial sample exists (<1000), clear tables to avoid duplicates
        if existing_txns > 0:
            db.query(Alert).delete()
            db.query(Transaction).delete()
            db.query(BehaviourProfile).delete()
            db.query(User).delete()
            db.commit()

        # 1. Load ML Model & Preprocess CSV
        rf_model = None
        feature_cols = []
        if os.path.exists(MODEL_PATH):
            art = joblib.load(MODEL_PATH)
            rf_model = art.get('model')
            feature_cols = art.get('feature_cols', [])

        if os.path.exists(CSV_PATH):
            df_raw = pd.read_csv(CSV_PATH)
            df_raw['timestamp'] = pd.to_datetime(df_raw['timestamp'], format='%d-%m-%Y %H:%M')
            df = df_raw.sort_values('timestamp').reset_index(drop=True)

            df['hour'] = df['timestamp'].dt.hour
            df['user_avg_amount'] = df.groupby('customer_id')['amount'].transform(lambda x: x.expanding().mean().shift(1)).fillna(df['amount'].median())
            df['amount_deviation'] = df['amount'] / (df['user_avg_amount'] + 1e-5)
            df['user_avg_hour'] = df.groupby('customer_id')['hour'].transform(lambda x: x.expanding().mean().shift(1)).fillna(14.0)
            df['time_deviation'] = (df['hour'] - df['user_avg_hour']).abs()
            df['is_unusual_time'] = df['hour'].isin([0, 1, 2, 3, 4, 5]).astype(int)
            df['is_suspicious_beneficiary'] = df['beneficiary_id'].astype(str).str.contains('SUSP', case=False).astype(int)
            df['user_txn_count'] = df.groupby('customer_id').cumcount() + 1

            category_dummies = pd.get_dummies(df['merchant_category'], prefix='cat', drop_first=False)
            df = pd.concat([df, category_dummies], axis=1)

            # Feature inference
            if rf_model and len(feature_cols) > 0:
                for col in feature_cols:
                    if col not in df.columns:
                        df[col] = 0
                X = df[feature_cols]
                probs = rf_model.predict_proba(X)[:, 1]
                df['ml_prob'] = probs
            else:
                df['ml_prob'] = 0.0

            df['risk_score'] = (df['ml_prob'] * 65.0) + (np.minimum(df['amount_deviation'], 10.0) * 2.5) + (df['is_unusual_time'] * 12.0)
            df['risk_score'] = df['risk_score'].clip(5.0, 96.0).round(1)

            def calc_level(s):
                if s >= 71.0: return 'HIGH'
                if s >= 31.0: return 'MEDIUM'
                return 'LOW'

            df['risk_level'] = df['risk_score'].apply(calc_level)

            # Seed Users
            preset_users = [
                ('U1842', 'Rahul Sharma', 'rahul@example.com', 'Delhi', 'Device-A'),
                ('U1023', 'Aman Verma', 'aman@example.com', 'Mumbai', 'Device-B'),
                ('U2045', 'Priya Singh', 'priya@example.com', 'Bangalore', 'Device-C'),
                ('U1024', 'Ananya Roy', 'ananya@example.com', 'Delhi', 'Device-Phone'),
                ('U2190', 'Vikas Verma', 'vikas@example.com', 'Delhi', 'Device-Laptop')
            ]
            unique_custs = df['customer_id'].unique().tolist()
            user_objs = [User(user_id=u[0], name=u[1], email=u[2], usual_location=u[3], usual_device=u[4]) for u in preset_users]

            for c in unique_custs:
                if c not in [u[0] for u in preset_users]:
                    num = int(c.split('_')[1]) if '_' in c else 1
                    loc = 'Delhi' if num % 2 == 0 else ('Mumbai' if num % 3 == 0 else 'Bangalore')
                    user_objs.append(User(user_id=c, name=f'Customer {c}', email=f'{c.lower()}@example.com', usual_location=loc, usual_device='Trusted Device'))

            db.add_all(user_objs)

            # Seed Profiles
            profile_objs = []
            for cust_id, group in df.groupby('customer_id'):
                avg_amt = float(group['amount'].mean())
                num = int(cust_id.split('_')[1]) if '_' in cust_id else 1
                loc = 'Delhi' if num % 2 == 0 else ('Mumbai' if num % 3 == 0 else 'Bangalore')
                profile_objs.append(BehaviourProfile(
                    user_id=cust_id,
                    average_amount=round(avg_amt, 2),
                    usual_time_start='10:00:00',
                    usual_time_end='21:00:00',
                    usual_location=loc,
                    trusted_devices=2,
                    average_daily_transactions=float(round(len(group) / 30.0, 1))
                ))

            for u in ['U1842', 'U1023', 'U2045', 'U1024', 'U2190']:
                if u not in [p.user_id for p in profile_objs]:
                    profile_objs.append(BehaviourProfile(
                        user_id=u, average_amount=2800.0, usual_time_start='10:00:00', usual_time_end='21:00:00', usual_location='Delhi', trusted_devices=2, average_daily_transactions=6.0
                    ))

            db.add_all(profile_objs)

            # Seed Transactions & Alerts
            txn_objs = []
            alert_objs = []
            for _, row in df.iterrows():
                t_id = row['transaction_id']
                u_id = row['customer_id']
                amt = float(row['amount'])
                t_time = row['timestamp']
                score = float(row['risk_score'])
                level = row['risk_level']
                cat = row['merchant_category']
                is_fraud = bool(level == 'HIGH' or row['fraud_label'] == 1.0)
                loc = 'Mumbai' if (is_fraud or level == 'HIGH') else ('Delhi' if int(u_id.split('_')[1]) % 2 == 0 else 'Bangalore')
                dev = 'New Device' if is_fraud else 'Trusted Device'

                t_obj = Transaction(
                    transaction_id=t_id,
                    user_id=u_id,
                    amount=amt,
                    transaction_time=t_time,
                    location=loc,
                    device=dev,
                    merchant=cat,
                    transaction_type='wire' if amt > 1000.0 else 'ecom',
                    fraud=is_fraud,
                    risk_score=score,
                    risk_level=level
                )
                txn_objs.append(t_obj)

                if level == 'HIGH':
                    alert_objs.append(Alert(
                        transaction_id=t_id,
                        user_id=u_id,
                        risk_score=score,
                        risk_level=level,
                        reason='Unusually high transaction amount, Location deviation, High ML risk probability',
                        status='unresolved'
                    ))

            db.add_all(txn_objs)
            db.add_all(alert_objs)
            db.commit()

            print(f"Database Seeding Completed! Seeded {len(txn_objs)} transactions and {len(alert_objs)} alerts.")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
