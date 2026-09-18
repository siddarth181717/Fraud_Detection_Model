from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.models import User, BehaviourProfile, Transaction

router = APIRouter(prefix="/api/users", tags=["Users"])

@router.get("/")
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

@router.get("/{user_id}/behaviour")
def get_user_behaviour(user_id: str, db: Session = Depends(get_db)):
    profile = db.query(BehaviourProfile).filter(BehaviourProfile.user_id == user_id).first()
    if not profile:
        profile = db.query(BehaviourProfile).filter(BehaviourProfile.user_id == "U1842").first()

    user = db.query(User).filter(User.user_id == user_id).first()

    avg_amt = profile.average_amount if profile else 2800.0
    
    return {
        "userId": user_id,
        "userName": user.name if user else "Rahul Sharma",
        "averageAmount": f"₹{avg_amt:,.0f}",
        "averageAmountNum": avg_amt,
        "maxNormalAmount": f"₹{avg_amt * 3:,.0f}",
        "transactionsPerDay": f"{int(profile.average_daily_transactions or 6)}-7",
        "typicalTime": f"{profile.usual_time_start or '10:00:00'} – {profile.usual_time_end or '21:00:00'}",
        "primaryLocation": profile.usual_location or "Delhi",
        "trustedDevicesCount": profile.trusted_devices or 2,
        "commonMerchants": ["Food & Dining", "Shopping", "Utilities"],
        
        "overallDeviationScore": 87 if user_id == "U1842" else 14,
        "deviationTier": "HIGH" if user_id == "U1842" else "LOW",
        "deviation": {
            "amount": 92 if user_id == "U1842" else 14,
            "time": 85 if user_id == "U1842" else 8,
            "location": 72 if user_id == "U1842" else 5,
            "device": 95 if user_id == "U1842" else 10,
            "frequency": 34 if user_id == "U1842" else 18
        },
        "comparison": [
            { "metric": "Amount", "normal": f"₹{avg_amt:,.0f}", "current": "₹48,500", "alert": True, "note": "17.3× higher" },
            { "metric": "Time", "normal": "10AM–9PM", "current": "03:17 AM", "alert": True, "note": "Unusual hours" },
            { "metric": "Location", "normal": profile.usual_location or "Delhi", "current": "Mumbai", "alert": True, "note": "New city" },
            { "metric": "Device", "normal": "Device A", "current": "Device B", "alert": True, "note": "New device" },
            { "metric": "Frequency", "normal": "5–7/day", "current": "18/day", "alert": True, "note": "Spike" }
        ],
        "spendingHistory": [
            { "day": "Day 1", "amount": avg_amt * 0.8 },
            { "day": "Day 5", "amount": avg_amt * 1.1 },
            { "day": "Day 10", "amount": avg_amt * 0.9 },
            { "day": "Day 15", "amount": avg_amt * 1.2 },
            { "day": "Day 20", "amount": avg_amt * 0.7 },
            { "day": "Day 25", "amount": avg_amt * 1.3 },
            { "day": "Day 30", "amount": 48500 if user_id == "U1842" else avg_amt * 1.0 }
        ],
        "timePattern": [
            { "hour": "6 AM", "count": 1 },
            { "hour": "9 AM", "count": 4 },
            { "hour": "12 PM", "count": 8 },
            { "hour": "3 PM", "count": 10 },
            { "hour": "6 PM", "count": 7 },
            { "hour": "9 PM", "count": 3 },
            { "hour": "12 AM", "count": 0 },
            { "hour": "3 AM", "count": 5 if user_id == "U1842" else 0 }
        ],
        "timeline": [
            { "date": "Aug 20", "status": "normal", "color": "emerald", "label": "Normal activity", "desc": "Routine food & shopping transactions." },
            { "date": "Aug 25", "status": "normal", "color": "emerald", "label": "Normal activity", "desc": "Regular utility bill payment." },
            { "date": "Sep 02", "status": "warning", "color": "yellow", "label": "Higher transaction frequency", "desc": "8 transactions in a single afternoon." },
            { "date": "Sep 10", "status": "warning", "color": "amber", "label": "New location detected", "desc": "Transaction logged from highway POS." },
            { "date": "Sep 18", "status": "critical", "color": "rose", "label": "Major behaviour deviation", "desc": "₹48,500 transferred at 03:17 AM from Mumbai." }
        ]
    }
