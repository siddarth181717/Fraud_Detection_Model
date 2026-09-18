from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from app.db.database import get_db
from app.db.models import Transaction

router = APIRouter(prefix="/api/transactions", tags=["Transactions"])

@router.get("/")
def get_all_transactions(
    min_risk: Optional[float] = 0.0,
    status: Optional[str] = None,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    query = db.query(Transaction)
    if min_risk > 0:
        query = query.filter(Transaction.risk_score >= min_risk)
    if status and status.upper() != 'ALL':
        query = query.filter(Transaction.risk_level == status.upper())

    txns = query.order_by(Transaction.transaction_time.desc()).limit(limit).all()
    
    # Format response items
    formatted = []
    for t in txns:
        formatted.append({
            "id": t.transaction_id,
            "user": t.user_id,
            "amount": f"₹{t.amount:,.2f}",
            "amountNum": t.amount,
            "location": t.location or "Delhi",
            "device": t.device or "Trusted Device",
            "time": t.transaction_time.strftime("%I:%M %p") if t.transaction_time else "10:00 AM",
            "riskScore": t.risk_score or 10.0,
            "riskLevel": t.risk_level or "LOW",
            "status": "Review" if t.risk_level == "HIGH" else "Approved"
        })
    return formatted

@router.get("/{txn_id}")
def get_transaction_by_id(txn_id: str, db: Session = Depends(get_db)):
    t = db.query(Transaction).filter(Transaction.transaction_id == txn_id).first()
    if not t:
        raise HTTPException(status_code=404, detail="Transaction not found")
    return {
        "id": t.transaction_id,
        "user": t.user_id,
        "amount": f"₹{t.amount:,.2f}",
        "amountNum": t.amount,
        "location": t.location,
        "device": t.device,
        "time": t.transaction_time.strftime("%I:%M %p") if t.transaction_time else "10:00 AM",
        "riskScore": t.risk_score,
        "riskLevel": t.risk_level,
        "status": "Review" if t.risk_level == "HIGH" else "Approved"
    }
