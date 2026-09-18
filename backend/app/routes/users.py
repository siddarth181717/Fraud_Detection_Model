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

    # Fetch latest transaction for this user to compute real deviation
    latest_txn = db.query(Transaction).filter(Transaction.user_id == user_id).order_by(Transaction.transaction_time.desc()).first()

    has_high_dev = (latest_txn and latest_txn.risk_level == "HIGH") or user_id == "U1842"
    has_med_dev = (latest_txn and latest_txn.risk_level == "MEDIUM") or user_id == "U2190"

    curr_amt = latest_txn.amount if latest_txn else (48500.0 if user_id == "U1842" else avg_amt)
    curr_time = latest_txn.transaction_time.strftime("%I:%M %p") if (latest_txn and latest_txn.transaction_time) else ("03:17 AM" if user_id == "U1842" else "10:30 AM")
    curr_loc = latest_txn.location if latest_txn else ("Mumbai" if user_id == "U1842" else (profile.usual_location or "Delhi"))
    curr_dev = latest_txn.device if latest_txn else ("New Device" if user_id == "U1842" else "Trusted Device")

    amt_dev_ratio = curr_amt / max(avg_amt, 1.0)
    amt_alert = amt_dev_ratio > 1.5

    dev_score = int(latest_txn.risk_score) if (latest_txn and latest_txn.risk_score) else (87 if has_high_dev else 34 if has_med_dev else 14)
    dev_tier = "HIGH" if dev_score >= 71 else ("MEDIUM" if dev_score >= 31 else "LOW")

    return {
        "userId": user_id,
        "userName": user.name if user else ("Rahul Sharma" if user_id == "U1842" else f"User {user_id}"),
        "averageAmount": f"₹{avg_amt:,.0f}",
        "averageAmountNum": avg_amt,
        "maxNormalAmount": f"₹{avg_amt * 3:,.0f}",
        "transactionsPerDay": f"{int(profile.average_daily_transactions or 6)}-7",
        "typicalTime": f"{profile.usual_time_start or '10:00:00'} – {profile.usual_time_end or '21:00:00'}",
        "primaryLocation": profile.usual_location or "Delhi",
        "trustedDevicesCount": profile.trusted_devices or 2,
        "commonMerchants": ["Food & Dining", "Shopping", "Utilities"],
        
        "overallDeviationScore": dev_score,
        "deviationTier": dev_tier,
        "deviation": {
            "amount": min(int(amt_dev_ratio * 15), 95) if amt_alert else 14,
            "time": 85 if (has_high_dev or "03:" in curr_time) else 8,
            "location": 72 if curr_loc != (profile.usual_location or "Delhi") else 5,
            "device": 95 if "new" in curr_dev.lower() else 10,
            "frequency": 34 if has_high_dev else 18
        },
        "comparison": [
            { "metric": "Amount", "normal": f"₹{avg_amt:,.0f}", "current": f"₹{curr_amt:,.0f}", "alert": amt_alert, "note": f"{amt_dev_ratio:.1f}× higher" if amt_alert else "Normal" },
            { "metric": "Time", "normal": "10AM–9PM", "current": curr_time, "alert": "03:" in curr_time or has_high_dev, "note": "Unusual hours" if ("03:" in curr_time or has_high_dev) else "Normal" },
            { "metric": "Location", "normal": profile.usual_location or "Delhi", "current": curr_loc, "alert": curr_loc != (profile.usual_location or "Delhi"), "note": "Location change" if curr_loc != (profile.usual_location or "Delhi") else "Same city" },
            { "metric": "Device", "normal": user.usual_device if user and user.usual_device else "Trusted Device", "current": curr_dev, "alert": "new" in curr_dev.lower(), "note": "New device" if "new" in curr_dev.lower() else "Known" },
            { "metric": "Frequency", "normal": "5–7/day", "current": "18/day" if has_high_dev else "5/day", "alert": has_high_dev, "note": "Spike" if has_high_dev else "Normal" }
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
