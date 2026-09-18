from datetime import datetime
from app.db.database import engine, Base, SessionLocal
from app.db.models import User, Transaction, BehaviourProfile, Alert

def seed_database():
    print("Initializing Database tables...")
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    try:
        # 1. Seed Users (Step 3)
        if db.query(User).count() == 0:
            print("Seeding Users...")
            sample_users = [
                User(user_id="U1842", name="Rahul Sharma", email="rahul@example.com", usual_location="Delhi", usual_device="Device-A"),
                User(user_id="U1023", name="Aman Verma", email="aman@example.com", usual_location="Mumbai", usual_device="Device-B"),
                User(user_id="U2045", name="Priya Singh", email="priya@example.com", usual_location="Bangalore", usual_device="Device-C"),
                User(user_id="U1024", name="Ananya Roy", email="ananya@example.com", usual_location="Delhi", usual_device="Device-Phone"),
                User(user_id="U2190", name="Vikas Verma", email="vikas@example.com", usual_location="Delhi", usual_device="Device-Laptop")
            ]
            db.add_all(sample_users)

        # 2. Seed Behaviour Profiles (Step 4)
        if db.query(BehaviourProfile).count() == 0:
            print("Seeding Behaviour Profiles...")
            profiles = [
                BehaviourProfile(
                    user_id="U1842",
                    average_amount=2800.0,
                    usual_time_start="10:00:00",
                    usual_time_end="21:00:00",
                    usual_location="Delhi",
                    trusted_devices=2,
                    average_daily_transactions=6.0
                ),
                BehaviourProfile(
                    user_id="U1023",
                    average_amount=4500.0,
                    usual_time_start="09:00:00",
                    usual_time_end="20:00:00",
                    usual_location="Mumbai",
                    trusted_devices=1,
                    average_daily_transactions=4.0
                ),
                BehaviourProfile(
                    user_id="U2045",
                    average_amount=3200.0,
                    usual_time_start="10:00:00",
                    usual_time_end="22:00:00",
                    usual_location="Bangalore",
                    trusted_devices=2,
                    average_daily_transactions=5.0
                ),
                BehaviourProfile(
                    user_id="U1024",
                    average_amount=950.0,
                    usual_time_start="09:00:00",
                    usual_time_end="20:00:00",
                    usual_location="Delhi",
                    trusted_devices=1,
                    average_daily_transactions=3.0
                )
            ]
            db.add_all(profiles)

        # 3. Seed Sample Transactions
        if db.query(Transaction).count() == 0:
            print("Seeding Transactions...")
            sample_txns = [
                Transaction(transaction_id="TXN-1001", user_id="U1024", amount=850.0, transaction_time=datetime.now(), location="Delhi", device="Trusted Phone", merchant="dining", transaction_type="pos", fraud=False, risk_score=12.0, risk_level="LOW"),
                Transaction(transaction_id="TXN-1002", user_id="U1842", amount=48500.0, transaction_time=datetime.now(), location="Mumbai", device="New Device", merchant="electronics", transaction_type="wire", fraud=True, risk_score=89.0, risk_level="HIGH"),
                Transaction(transaction_id="TXN-1003", user_id="U2190", amount=3200.0, transaction_time=datetime.now(), location="Noida", device="Trusted Laptop", merchant="shopping_online", transaction_type="ecom", fraud=False, risk_score=34.0, risk_level="MEDIUM"),
            ]
            db.add_all(sample_txns)

        # 4. Seed Alerts
        if db.query(Alert).count() == 0:
            print("Seeding Alerts...")
            sample_alerts = [
                Alert(transaction_id="TXN-1002", user_id="U1842", risk_score=89.0, risk_level="HIGH", reason="Unusual transaction amount, New device, Location change", status="unresolved")
            ]
            db.add_all(sample_alerts)

        db.commit()
        print("Database Seeding Completed Successfully!")

    except Exception as e:
        db.rollback()
        print(f"Error seeding database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
