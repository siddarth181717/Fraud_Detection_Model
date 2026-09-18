-- Supabase / PostgreSQL Schema Definition for Fraud Risk Detection Platform

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT UNIQUE NOT NULL,
    name TEXT,
    email TEXT,
    usual_location TEXT,
    usual_device TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    transaction_id TEXT UNIQUE NOT NULL,
    user_id TEXT NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    transaction_time TIMESTAMP NOT NULL,
    location TEXT,
    device TEXT,
    merchant TEXT,
    transaction_type TEXT,
    fraud BOOLEAN DEFAULT FALSE,
    risk_score DECIMAL(5,2),
    risk_level TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Behaviour Profiles Table
CREATE TABLE IF NOT EXISTS behaviour_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT UNIQUE NOT NULL,
    average_amount DECIMAL(12,2),
    usual_time_start TIME,
    usual_time_end TIME,
    usual_location TEXT,
    trusted_devices INTEGER DEFAULT 0,
    average_daily_transactions DECIMAL(10,2),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 4. Alerts Table
CREATE TABLE IF NOT EXISTS alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    transaction_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    risk_score DECIMAL(5,2),
    risk_level TEXT,
    reason TEXT,
    status TEXT DEFAULT 'unresolved',
    created_at TIMESTAMP DEFAULT NOW()
);
