import pandas as pd
import numpy as np

def load_and_preprocess_data(filepath="ml/data/transactions.csv"):
    """
    Loads raw transaction CSV and performs basic data cleaning and timestamp parsing.
    """
    print(f"Loading data from: {filepath}")
    df = pd.read_csv(filepath)

    # Check missing values
    missing_sum = df.isnull().sum().sum()
    if missing_sum > 0:
        print(f"Handling {missing_sum} missing values...")
        df = df.fillna({
            'amount': df['amount'].median(),
            'merchant_category': 'unknown',
            'beneficiary_id': 'unknown'
        })

    # Convert timestamp to datetime object
    df['timestamp'] = pd.to_datetime(df['timestamp'], format='%d-%m-%Y %H:%M')

    # Sort transactions chronologically
    df = df.sort_values('timestamp').reset_index(drop=True)

    # Extract basic time features
    df['hour'] = df['timestamp'].dt.hour
    df['day_of_week'] = df['timestamp'].dt.dayofweek
    df['is_weekend'] = df['day_of_week'].isin([5, 6]).astype(int)

    print(f"Preprocessed Dataset Shape: {df.shape}")
    return df

if __name__ == "__main__":
    df = load_and_preprocess_data()
    print("Sample preprocessed rows:")
    print(df.head())
