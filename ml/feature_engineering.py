import pandas as pd
import numpy as np

def create_behaviour_features(df):
    """
    Creates behaviour-aware features comparing current transaction against customer baselines.
    """
    print("Creating Behaviour Features...")
    df = df.copy()

    # 1. Customer Level Historical Baselines (Cumulative / Expanding window)
    # Compute expanding average amount per customer up to previous transaction
    df['user_avg_amount'] = df.groupby('customer_id')['amount'].transform(lambda x: x.expanding().mean().shift(1))
    df['user_std_amount'] = df.groupby('customer_id')['amount'].transform(lambda x: x.expanding().std().shift(1))
    df['user_txn_count'] = df.groupby('customer_id').cumcount() + 1

    # Fill NaNs for initial transactions with overall category medians
    global_avg = df['amount'].median()
    df['user_avg_amount'] = df['user_avg_amount'].fillna(global_avg)
    df['user_std_amount'] = df['user_std_amount'].fillna(1.0)

    # 2. Amount Deviation Feature ⭐
    # Ratio: current amount / user average amount
    df['amount_deviation'] = df['amount'] / (df['user_avg_amount'] + 1e-5)
    
    # Z-Score Amount Deviation
    df['amount_zscore'] = (df['amount'] - df['user_avg_amount']) / (df['user_std_amount'] + 1e-5)

    # 3. Time Pattern & Deviation Feature ⏰
    df['user_avg_hour'] = df.groupby('customer_id')['hour'].transform(lambda x: x.expanding().mean().shift(1))
    df['user_avg_hour'] = df['user_avg_hour'].fillna(14.0)
    
    # Difference between current transaction hour and usual hour
    df['time_deviation'] = (df['hour'] - df['user_avg_hour']).abs()
    
    # Binary flag for unusual midnight/early morning transactions (12 AM - 5 AM)
    df['is_unusual_time'] = df['hour'].isin([0, 1, 2, 3, 4, 5]).astype(int)

    # 4. Beneficiary & Merchant Anomaly Flags
    df['is_suspicious_beneficiary'] = df['beneficiary_id'].astype(str).str.contains('SUSP', case=False).astype(int)
    
    # Frequency Deviation
    df['high_frequency_flag'] = (df['user_txn_count'] > 10).astype(int)

    # Encode Categorical Features
    category_dummies = pd.get_dummies(df['merchant_category'], prefix='cat', drop_first=False)
    df = pd.concat([df, category_dummies], axis=1)

    print("Behaviour Features Created Successfully!")
    return df

def generate_risk_reasons(row):
    """
    Generates human-readable explanations for why a transaction was flagged.
    """
    reasons = []
    
    if row.get('amount_deviation', 1.0) > 3.0 or row.get('amount', 0) > 1000:
        mult = round(row.get('amount_deviation', 1.0), 1)
        reasons.append({
            "type": "critical",
            "title": "Amount deviation",
            "desc": f"Transaction amount is {mult}× higher than the user's normal baseline."
        })
        
    if row.get('is_suspicious_beneficiary', 0) == 1:
        reasons.append({
            "type": "critical",
            "title": "Suspicious Beneficiary ID",
            "desc": "Beneficiary account flagged in security threat intelligence network."
        })

    if row.get('is_unusual_time', 0) == 1 or row.get('time_deviation', 0) > 6:
        reasons.append({
            "type": "warning",
            "title": "Unusual transaction time",
            "desc": "Transaction occurred outside the user's typical operating window."
        })

    if not reasons:
        reasons.append({
            "type": "normal",
            "title": "Standard transaction profile",
            "desc": "Transaction matches user's historical purchasing baseline."
        })

    return reasons

if __name__ == "__main__":
    from preprocessing import load_and_preprocess_data
    df = load_and_preprocess_data()
    df_feat = create_behaviour_features(df)
    print("Selected behaviour features sample:")
    cols = ['transaction_id', 'customer_id', 'amount', 'user_avg_amount', 'amount_deviation', 'time_deviation', 'fraud_label']
    print(df_feat[cols].head())
