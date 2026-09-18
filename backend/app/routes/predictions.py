from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.schemas.transaction import PredictionRequest, PredictionResponse
from app.services.model_service import predict_fraud_risk
from app.db.models import Transaction, Alert

router = APIRouter(prefix="/api/predictions", tags=["Predictions"])

@router.post("/predict", response_model=PredictionResponse)
def predict_transaction(req: PredictionRequest, db: Session = Depends(get_db)):
    """
    Predicts fraud risk score and level for an incoming transaction using the trained ML model & behaviour engine.
    """
    try:
        return predict_fraud_risk(req, db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction engine error: {str(e)}")

@router.get("/summary")
def get_prediction_summary(db: Session = Depends(get_db)):
    """
    Returns aggregated dashboard statistics computed from the database.
    """
    total_count = db.query(Transaction).count()
    high_risk_count = db.query(Transaction).filter(Transaction.risk_level == "HIGH").count()
    medium_risk_count = db.query(Transaction).filter(Transaction.risk_level == "MEDIUM").count()
    alerts_count = db.query(Alert).count()
    
    avg_score_res = db.query(Transaction).all()
    avg_score = round(sum([t.risk_score for t in avg_score_res if t.risk_score]) / max(len(avg_score_res), 1), 1)

    return {
        "totalTransactions": {
            "title": "Transactions",
            "value": f"{total_count:,}",
            "change": "+12.4%",
            "isPositive": True,
            "subtext": "Total processed"
        },
        "highRiskTransactions": {
            "title": "High Risk",
            "value": f"{high_risk_count:,}",
            "change": "+8.7%",
            "isPositive": False,
            "subtext": "Flagged anomalies"
        },
        "avgRisk": {
            "title": "Avg Risk",
            "value": f"{avg_score}",
            "change": "-1.8 pts",
            "isPositive": True,
            "subtext": "System Risk Index"
        },
        "alerts": {
            "title": "Alerts",
            "value": f"{alerts_count:,}",
            "change": "+5",
            "isPositive": False,
            "subtext": "Pending review"
        }
    }
