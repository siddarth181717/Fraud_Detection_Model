import React, { useState } from 'react';
import { Settings as SettingsIcon, Sliders, Bell, Database, Save, CheckCircle2, Shield, Globe } from 'lucide-react';

export const Settings = () => {
  const [highRiskThreshold, setHighRiskThreshold] = useState(71);
  const [mediumRiskThreshold, setMediumRiskThreshold] = useState(31);
  const [autoBlockHighRisk, setAutoBlockHighRisk] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [webhookUrl, setWebhookUrl] = useState('https://hooks.slack.com/services/fraud-alerts');
  const [apiUrl, setApiUrl] = useState('http://127.0.0.1:8000/api');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <SettingsIcon className="w-5 h-5 text-cyan-400" />
          SYSTEM & RISK SETTINGS
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Configure risk score cutoffs, notification webhooks, API backend routes, and operational parameters.
        </p>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Risk Thresholds Section */}
        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sliders className="w-4 h-4 text-cyan-400" />
            Risk Classification Cutoffs & Rules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1">
                High-Risk Threshold Score (0–100)
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Transactions above this score are flagged 🔴 HIGH risk.</p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="50"
                  max="90"
                  value={highRiskThreshold}
                  onChange={(e) => setHighRiskThreshold(Number(e.target.value))}
                  className="flex-1 accent-rose-500 cursor-pointer"
                />
                <span className="font-mono text-rose-400 font-extrabold text-sm px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20">
                  {highRiskThreshold}
                </span>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1">
                Medium-Risk Threshold Score (0–100)
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Transactions between this score and High Risk are flagged 🟡 MEDIUM risk.</p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="20"
                  max="50"
                  value={mediumRiskThreshold}
                  onChange={(e) => setMediumRiskThreshold(Number(e.target.value))}
                  className="flex-1 accent-amber-500 cursor-pointer"
                />
                <span className="font-mono text-amber-400 font-extrabold text-sm px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  {mediumRiskThreshold}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div>
              <span className="text-xs text-white font-medium block">Auto-Block High Risk Transactions</span>
              <span className="text-[11px] text-slate-400">Automatically assign status 'Review/Block' when risk score ≥ {highRiskThreshold}</span>
            </div>
            <input
              type="checkbox"
              checked={autoBlockHighRisk}
              onChange={(e) => setAutoBlockHighRisk(e.target.checked)}
              className="w-4 h-4 accent-cyan-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Notifications & Alert Integration */}
        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
            <Bell className="w-4 h-4 text-amber-400" />
            Alert Notifications & Webhook Integration
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1">
                Security Team Webhook URL (Slack/Teams)
              </label>
              <input
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-slate-800 text-slate-200 font-mono bg-slate-900"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-white font-medium block">Email Notifications</span>
                  <span className="text-[11px] text-slate-400">Send instant alert summary to security lead email</span>
                </div>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* API Backend Connection */}
        <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
            <Globe className="w-4 h-4 text-purple-400" />
            FastAPI Backend Connection URL
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="text-xs text-slate-300 font-semibold block mb-1">
                API Base Endpoint URL
              </label>
              <input
                type="text"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-slate-800 text-slate-200 font-mono bg-slate-900"
              />
            </div>

            <div className="flex items-center gap-3 pt-4 sm:pt-0">
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs w-full font-mono flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>SQLite DB: Connected (fraud_risk.db)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between pt-2">
          {savedSuccess ? (
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Settings saved successfully!
            </div>
          ) : (
            <span className="text-xs text-slate-500">Changes apply immediately to live prediction engine.</span>
          )}

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            Save Configuration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
