import uuid
from datetime import datetime
from sqlalchemy import Column, String, Float, Integer, Boolean, DateTime, Time, Text
from app.db.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=generate_uuid)
    user_id = Column(String, unique=True, nullable=False, index=True)
    name = Column(String, nullable=True)
    email = Column(String, nullable=True)
    usual_location = Column(String, nullable=True)
    usual_device = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(String, primary_key=True, default=generate_uuid)
    transaction_id = Column(String, unique=True, nullable=False, index=True)
    user_id = Column(String, nullable=False, index=True)
    amount = Column(Float, nullable=False)
    transaction_time = Column(DateTime, nullable=False)
    location = Column(String, nullable=True)
    device = Column(String, nullable=True)
    merchant = Column(String, nullable=True)
    transaction_type = Column(String, nullable=True)
    fraud = Column(Boolean, default=False)
    risk_score = Column(Float, nullable=True)
    risk_level = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class BehaviourProfile(Base):
    __tablename__ = "behaviour_profiles"

    id = Column(String, primary_key=True, default=generate_uuid)
    user_id = Column(String, unique=True, nullable=False, index=True)
    average_amount = Column(Float, nullable=True)
    usual_time_start = Column(String, nullable=True) # e.g. "10:00:00"
    usual_time_end = Column(String, nullable=True)   # e.g. "21:00:00"
    usual_location = Column(String, nullable=True)
    trusted_devices = Column(Integer, default=1)
    average_daily_transactions = Column(Float, nullable=True)
    updated_at = Column(DateTime, default=datetime.utcnow)

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(String, primary_key=True, default=generate_uuid)
    transaction_id = Column(String, nullable=False, index=True)
    user_id = Column(String, nullable=False, index=True)
    risk_score = Column(Float, nullable=True)
    risk_level = Column(String, nullable=True)
    reason = Column(Text, nullable=True)
    status = Column(String, default="unresolved")
    created_at = Column(DateTime, default=datetime.utcnow)
