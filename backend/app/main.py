from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.db.seed import seed_database
from app.routes import predictions, transactions, users, alerts

# 1. Initialize Database & Seed Baseline Tables
try:
    seed_database()
except Exception as e:
    print(f"Database initialization notice: {e}")

app = FastAPI(
    title="Behaviour-Aware Transaction Fraud Risk API",
    description="AI-powered fraud risk detection API connected to ML Random Forest Model & Supabase PostgreSQL / SQLite Database",
    version="1.0.0"
)

# 2. Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. Register Application API Routers
app.include_router(predictions.router)
app.include_router(transactions.router)
app.include_router(users.router)
app.include_router(alerts.router)

# 4. Global Exception Handler (Edge Case Safety)
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "message": str(exc),
            "path": request.url.path
        }
    )

@app.get("/")
def root():
    return {
        "message": "Behaviour-Aware Fraud Risk API v1.0 is running",
        "documentation": "/docs"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "database": "connected",
        "ml_model": "loaded"
    }
