import sys
import os

backend_dir = os.path.abspath("backend")
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from app.db.database import SessionLocal
from app.schemas.transaction import PredictionRequest
from app.services.model_service import predict_fraud_risk

def test_prediction():
    db = SessionLocal()
    req = PredictionRequest(
        user_id='U1842',
        amount=48500.0,
        transaction_hour=3,
        location='Mumbai',
        device='New Device',
        merchant_category='electronics'
    )
    res = predict_fraud_risk(req, db)
    print("Direct Prediction Success!")
    print(f"TX ID: {res.transaction_id}")
    print(f"Risk Score: {res.risk_score}")
    print(f"Risk Level: {res.risk_level}")
    print(f"Recommendation: {res.recommendation}")
    print(f"Reasons count: {len(res.reasons)}")
    db.close()

if __name__ == '__main__':
    test_prediction()
