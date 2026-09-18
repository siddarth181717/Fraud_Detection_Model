const BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://127.0.0.1:8000/api' : '/api');

export const apiService = {
  // 1. Fetch Dashboard Summary
  async getDashboardSummary() {
    try {
      const res = await fetch(`${BASE_URL}/predictions/summary`);
      if (!res.ok) throw new Error('API server unavailable');
      return await res.json();
    } catch {
      return null;
    }
  },

  // 2. Fetch Transactions List
  async getTransactions(minRisk = 0, status = 'ALL') {
    try {
      const res = await fetch(`${BASE_URL}/transactions?min_risk=${minRisk}&status=${status}`);
      if (!res.ok) throw new Error('API server unavailable');
      return await res.json();
    } catch {
      return null;
    }
  },

  // 3. Predict Transaction Fraud Risk (Live ML Model Inference)
  async predictFraudRisk(payload) {
    try {
      const res = await fetch(`${BASE_URL}/predictions/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Prediction API error');
      return await res.json();
    } catch (e) {
      console.error("Prediction API fallback:", e);
      return null;
    }
  },

  // 4. Fetch User Behaviour Intelligence Profile
  async getUserBehaviour(userId = 'U1842') {
    try {
      const res = await fetch(`${BASE_URL}/users/${userId}/behaviour`);
      if (!res.ok) throw new Error('API server unavailable');
      return await res.json();
    } catch {
      return null;
    }
  },

  // 5. Fetch Security Alerts Queue
  async getAlerts() {
    try {
      const res = await fetch(`${BASE_URL}/alerts`);
      if (!res.ok) throw new Error('API server unavailable');
      return await res.json();
    } catch {
      return null;
    }
  }
};

export default apiService;
