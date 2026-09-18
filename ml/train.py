import os
import joblib
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix, precision_score, recall_score, f1_score, roc_auc_score

from preprocessing import load_and_preprocess_data
from feature_engineering import create_behaviour_features

def train_fraud_model():
    print("==========================================")
    print("MILESTONE 5: TRAINING FRAUD DETECTION MODEL")
    print("==========================================")

    # 1. Load Preprocess Data
    df_raw = load_and_preprocess_data("ml/data/transactions.csv")
    
    # 2. Apply Behaviour Feature Engineering
    df = create_behaviour_features(df_raw)

    # Select Feature Columns
    feature_cols = [
        'amount', 
        'amount_deviation', 
        'amount_zscore', 
        'hour', 
        'time_deviation', 
        'is_unusual_time', 
        'is_suspicious_beneficiary', 
        'user_txn_count'
    ]
    
    # Add dummy merchant category columns
    cat_cols = [col for col in df.columns if col.startswith('cat_')]
    feature_cols.extend(cat_cols)

    X = df[feature_cols]
    y = df['fraud_label'].astype(int)

    print(f"\nFeature Matrix Shape: {X.shape}")
    print(f"Fraud Class Distribution:\n{y.value_counts()}")

    # 3. Train / Test Split (Stratified)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42, stratify=y
    )

    print(f"Train Set: {X_train.shape[0]} samples | Test Set: {X_test.shape[0]} samples")

    # 4. Train Random Forest Model
    rf_model = RandomForestClassifier(
        n_estimators=150,
        max_depth=12,
        class_weight='balanced',
        random_state=42,
        n_jobs=-1
    )
    
    rf_model.fit(X_train, y_train)

    # 5. Evaluate Model
    y_pred = rf_model.predict(X_test)
    y_proba = rf_model.predict_proba(X_test)[:, 1]

    print("\n------------------------------------------")
    print("MODEL EVALUATION RESULTS")
    print("------------------------------------------")
    
    cm = confusion_matrix(y_test, y_pred)
    print("Confusion Matrix:")
    print(f"TN: {cm[0][0]} | FP: {cm[0][1]}")
    print(f"FN: {cm[1][0]} | TP: {cm[1][1]}")

    print("\nClassification Report:")
    print(classification_report(y_test, y_pred, target_names=['Legitimate (0)', 'Fraud (1)']))

    prec = precision_score(y_test, y_pred, zero_division=0)
    rec = recall_score(y_test, y_pred, zero_division=0)
    f1 = f1_score(y_test, y_pred, zero_division=0)
    roc_auc = roc_auc_score(y_test, y_proba)

    print(f"Precision: {prec:.4f}")
    print(f"Recall:    {rec:.4f} (Fraud Detection Target)")
    print(f"F1 Score:  {f1:.4f}")
    print(f"ROC-AUC:   {roc_auc:.4f}")

    # Feature Importance Breakdown
    importances = rf_model.feature_importances_
    feat_imp = pd.Series(importances, index=feature_cols).sort_values(ascending=False)
    print("\nTop 5 Most Important Features:")
    print(feat_imp.head(5))

    # 6. Save Model Artifacts
    models_dir = "ml/models"
    os.makedirs(models_dir, exist_ok=True)
    model_path = os.path.join(models_dir, "fraud_model.pkl")

    artifact = {
        'model': rf_model,
        'feature_cols': feature_cols,
        'cat_cols': cat_cols,
        'metrics': {
            'precision': prec,
            'recall': rec,
            'f1_score': f1,
            'roc_auc': roc_auc
        }
    }

    joblib.dump(artifact, model_path)
    print(f"\nModel successfully saved to: {model_path}")
    print("==========================================")

    return artifact

if __name__ == "__main__":
    train_fraud_model()
