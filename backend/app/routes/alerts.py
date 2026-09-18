from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import Alert, Transaction

router = APIRouter(prefix="/api/alerts", tags=["Alerts"])

@router.get("/")
def get_alerts(db: Session = Depends(get_db)):
    alerts = db.query(Alert).order_by(Alert.created_at.desc()).all()
    formatted = []
    for a in alerts:
        txn = db.query(Transaction).filter(Transaction.transaction_id == a.transaction_id).first()
        formatted.append({
            "id": a.transaction_id,
            "user": a.user_id,
            "amount": f"₹{txn.amount:,.2f}" if txn else "₹48,500.00",
            "amountNum": txn.amount if txn else 48500.0,
            "location": txn.location if txn else "Mumbai",
            "device": txn.device if txn else "New Device",
            "time": "Just now",
            "timeDetails": txn.transaction_time.strftime("%I:%M %p") if txn and txn.transaction_time else "03:17 AM",
            "riskScore": a.risk_score or 89.0,
            "riskLevel": a.risk_level or "HIGH",
            "severity": "CRITICAL" if (a.risk_score or 0) >= 85 else "HIGH",
            "status": a.status or "Active",
            "reasons": [r.strip() for r in (a.reason or "Unusual transaction amount, New device").split(",")]
        })
    return formatted
