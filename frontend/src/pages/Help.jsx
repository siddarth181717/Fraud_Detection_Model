import React, { useState } from 'react';
import { HelpCircle, BookOpen, Code, Terminal, ChevronDown, ShieldCheck, Compass, Sliders, Activity } from 'lucide-react';

export const Help = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How does Behaviour-Aware Fraud Risk Scoring work?",
      a: "Our model calculates historical user baselines (average amount, typical transaction hours, usual locations, and trusted device fingerprints). Incoming transactions are passed through a Random Forest Classifier calibrated with weighted deviation scaling to output a precise 0–100 Risk Score."
    },
    {
      q: "What triggers a High Risk 🔴 alert?",
      a: "A transaction score ≥ 71 is classified as High Risk. This occurs when multiple critical parameters deviate simultaneously (e.g., transaction amount > 3× user average, combined with a new device hardware fingerprint and an unexpected transaction hour or location)."
    },
    {
      q: "How does the offline browser ML fallback function?",
      a: "If the FastAPI backend is temporarily offline or unreachable, the frontend seamlessly computes the calibrated Random Forest + Behaviour deviation algorithm locally in the browser so predictions and inspection modals never fail."
    },
    {
      q: "How can security analysts resolve flagged alerts?",
      a: "Navigating to the Alerts tab allows analysts to review full explanation reasons, inspect the user's historical baseline vs current metrics, and click 'Resolve Alert' to mark the anomaly handled in the database."
    }
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          HELP & PLATFORM GUIDE
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Step-by-step user manual on how to use this website, system documentation, and API reference.
        </p>
      </div>

      {/* Platform User Guide: How to Use This Website */}
      <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
          <Compass className="w-4 h-4 text-cyan-400" />
          HOW TO USE THIS WEBSITE (PLATFORM USER GUIDE)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[11px] font-mono font-bold">1</span>
              Overview Dashboard
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              View real-time high-level statistics calculated directly from the 2,000 dataset transactions: Total Transactions, Flagged Anomalies, Average System Risk, Risk Donut percentage, and 7-day risk volume trends.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[11px] font-mono font-bold">2</span>
              Transactions Table
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Explore and filter all 2,000 transactions. Use the search bar, risk level filters, per-page selector (10, 15, 25, 50, 100), and interactive page numbers (1, 2, 3... 200). Click any transaction row to open full behavioural risk details.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[11px] font-mono font-bold">3</span>
              Live Risk Monitor
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Test machine learning predictions live! Enter custom transaction parameters (User ID, Amount, Time, Location, Device) or click quick scenario buttons (🟢 Normal, 🟡 Suspicious, 🔴 Unusual) to inspect real-time ML + Behaviour scoring.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[11px] font-mono font-bold">4</span>
              Behaviour Analysis
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Deep-dive into historical customer baselines vs current deviations. Inspect radar charts, amount multipliers, transaction time windows, and AI-generated explanation summaries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[11px] font-mono font-bold">5</span>
              Security Alerts & Users
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Review flagged security anomalies under <strong>Alerts</strong> and mark items resolved. Inspect customer trust scores, devices, and primary locations under <strong>Users</strong> without stock profile photos.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <h4 className="text-xs font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-lg bg-cyan-500/20 flex items-center justify-center text-[11px] font-mono font-bold">6</span>
              Analytics & Settings
            </h4>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Check model accuracy (98.4%) and feature importance under <strong>Analytics</strong>. Customize risk thresholds (0-100 sliders), webhook URLs, and FastAPI connection endpoints under <strong>Settings</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* System Architecture Step Guide */}
      <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          Fraud Risk Detection Workflow
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-wider block">Step 1</span>
            <h4 className="text-xs font-bold text-white">Baseline Profiling</h4>
            <p className="text-[11px] text-slate-400">Extract user's historical average amount, location, and trusted devices from SQLite dataset.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-wider block">Step 2</span>
            <h4 className="text-xs font-bold text-white">Deviation Ratios</h4>
            <p className="text-[11px] text-slate-400">Compute amount ratio, hour shift, location distance, and device hardware mismatch.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold font-mono text-purple-400 uppercase tracking-wider block">Step 3</span>
            <h4 className="text-xs font-bold text-white">Random Forest Model</h4>
            <p className="text-[11px] text-slate-400">Execute `predict_proba` inference on `ml/models/fraud_model.pkl` decision trees.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider block">Step 4</span>
            <h4 className="text-xs font-bold text-white">Risk Calibration</h4>
            <p className="text-[11px] text-slate-400">Output 0–100 risk score, explainable reasons, AI summary, and database alert persistence.</p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Frequently Asked Questions (FAQ)
        </h3>

        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-4 text-left flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* API Reference & cURL Example */}
      <div className="p-6 rounded-2xl glass-card border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
          <Code className="w-4 h-4 text-purple-400" />
          FastAPI Prediction Endpoint Reference
        </h3>

        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">POST</span>
            <code className="text-xs text-slate-200 font-mono">/api/predictions/predict</code>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-cyan-300 overflow-x-auto space-y-2">
            <div className="flex items-center gap-2 text-slate-500 border-b border-slate-800 pb-1">
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>cURL Request Example</span>
            </div>
            <pre className="text-slate-300">
{`curl -X 'POST' \\
  'http://127.0.0.1:8000/api/predictions/predict' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "user_id": "U1842",
    "amount": 48500,
    "transaction_hour": 3,
    "location": "Mumbai",
    "device": "New Device"
  }'`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
