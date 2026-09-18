from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any

class PredictionRequest(BaseModel):
    user_id: str = Field(default="U1842", description="User ID e.g. U1842")
    amount: float = Field(default=48500.0, description="Transaction Amount in INR")
    transaction_hour: Optional[int] = Field(default=3, description="Hour of day (0-23)")
    location: Optional[str] = Field(default="Mumbai", description="Transaction Location")
    device: Optional[str] = Field(default="New Device", description="Transaction Device")
    merchant_category: Optional[str] = Field(default="electronics", description="Merchant Category")
    beneficiary_id: Optional[str] = Field(default="BENEF_SUSP_9725", description="Beneficiary ID")

class PredictionResponse(BaseModel):
    transaction_id: str
    user_id: str
    amount: float
    risk_score: float
    risk_level: str  # "LOW", "MEDIUM", "HIGH"
    recommendation: str  # "APPROVE", "REVIEW", "BLOCK"
    reasons: List[Dict[str, Any]]
    deviation_breakdown: Dict[str, float]
    ai_summary: Optional[str] = None
    user_normal_behaviour: Optional[Dict[str, Any]] = None
    comparison: Optional[List[Dict[str, Any]]] = None

class TransactionSchema(BaseModel):
    id: Optional[str] = None
    transaction_id: str
    user_id: str
    amount: float
    transaction_time: Optional[str] = None
    location: Optional[str] = None
    device: Optional[str] = None
    merchant: Optional[str] = None
    transaction_type: Optional[str] = None
    fraud: Optional[bool] = False
    risk_score: Optional[float] = 0.0
    risk_level: Optional[str] = "LOW"
