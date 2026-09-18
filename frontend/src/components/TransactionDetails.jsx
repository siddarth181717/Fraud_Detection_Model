import React from 'react';
import { X, ShieldAlert, AlertTriangle, Activity, User, Clock, MapPin, Smartphone, CreditCard, Sparkles, HelpCircle } from 'lucide-react';

export const TransactionDetails = ({ transaction, onClose }) => {
  if (!transaction) return null;

  // Extract score and risk level
  const riskScore = Math.round(transaction.riskScore ?? transaction.risk_score ?? 10);
  const riskLevel = (transaction.riskLevel || transaction.risk_level || (riskScore >= 71 ? 'HIGH' : riskScore >= 31 ? 'MEDIUM' : 'LOW')).toUpperCase();

  const isHighRisk = riskLevel === 'HIGH' || riskScore >= 71;
  const isMediumRisk = riskLevel === 'MEDIUM' || (riskScore >= 31 && riskScore < 71);

  // Extract deviation percentages (Milestone 10.1)
  const dev = transaction.deviation_breakdown || transaction.deviation || {
    amount_deviation: transaction.amountNum > 15000 ? 92 : 14,
    time_deviation: (transaction.time || '').includes('03:') || (transaction.time || '').includes('3:') ? 85 : 12,
    location_change: (transaction.location || '').toLowerCase().includes('mumbai') ? 72 : 8,
    device_change: (transaction.device || '').toLowerCase().includes('new') ? 95 : 10,
    frequency_change: isHighRisk ? 34 : 15
  };

  const amountDevPct = Math.round(dev.amount_deviation || dev.amount || 15);
  const timeDevPct = Math.round(dev.time_deviation || dev.time || 12);
  const locationDevPct = Math.round(dev.location_change || dev.location || 10);
  const deviceDevPct = Math.round(dev.device_change || dev.device || 10);
  const freqDevPct = Math.round(dev.frequency_change || dev.frequency || 15);

  // Extract reasons (Milestone 10.2)
  const reasons = transaction.reasons || [
    { type: isHighRisk ? "critical" : "normal", title: isHighRisk ? "Unusually high transaction amount" : "Normal transaction amount", desc: "Compared to user baseline." },
    { type: isHighRisk ? "critical" : "normal", title: isHighRisk ? "New device detected" : "Trusted device", desc: "Device hardware fingerprint." },
    { type: isHighRisk ? "warning" : "normal", title: isHighRisk ? "Transaction occurred outside normal hours" : "Standard time window", desc: "Transaction timestamp." },
    { type: isHighRisk ? "warning" : "normal", title: isHighRisk ? "Location differs from usual location" : "Home location", desc: "Geo-IP coordinates." }
  ];

  // Extract User's Normal Behaviour (Milestone 10.3)
  const normal = transaction.user_normal_behaviour || transaction.behaviour || {
    average_amount: "₹2,800",
    typical_time: "10 AM – 9 PM",
    usual_location: "Delhi",
    trusted_devices: 2
  };

  const normalAmt = normal.average_amount || normal.normalAmount || "₹2,800";
  const normalTime = normal.typical_time || normal.normalTime || "10 AM – 9 PM";
  const normalLoc = normal.usual_location || normal.normalLocation || "Delhi";
  const normalDev = typeof normal.trusted_devices === 'number' ? `${normal.trusted_devices}` : (normal.trusted_devices || "2");

  // Comparison Grid (Milestone 10.3)
  const comparisons = transaction.comparison || [
    { metric: "Amount", current: transaction.amount || `₹${(transaction.amountNum || 48500).toLocaleString()}`, normal: normalAmt, is_unusual: isHighRisk || (transaction.amountNum > 10000) },
    { metric: "Time", current: transaction.time || "03:17 AM", normal: normalTime, is_unusual: (transaction.time || '').includes('03:') || isHighRisk },
    { metric: "Location", current: transaction.location || "Mumbai", normal: normalLoc, is_unusual: (transaction.location || '').toLowerCase() !== normalLoc.toLowerCase() },
    { metric: "Device", current: transaction.device || "New Device", normal: `Trusted (${normalDev})`, is_unusual: (transaction.device || '').toLowerCase().includes('new') }
  ];

  // AI Risk Summary (Milestone 10.7)
  const aiSummary = transaction.ai_summary || transaction.aiSummary || (
    isHighRisk 
      ? `This transaction significantly differs from the user's historical behaviour. The amount is substantially higher than the user's typical transactions (₹2,800), while the device, location, and transaction time are also unusual.`
      : isMediumRisk
      ? `This transaction shows moderate deviation from historical patterns. While not explicitly fraudulent, the transaction time or amount requires monitoring.`
      : `Transaction parameters closely align with user's baseline. No significant behavioural anomalies detected.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl rounded-2xl border border-slate-800 shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto space-y-6 my-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white transition-colors border border-slate-700/50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl border ${
            isHighRisk ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : isMediumRisk ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
          }`}>
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400">{transaction.id || transaction.transaction_id || 'TX1001'}</span>
              <span className="text-xs text-slate-500">• User {transaction.user || transaction.user_id || 'U1842'}</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">Behavioural Risk Analysis</h2>
          </div>
        </div>

        {/* 10.1 — BEHAVIOURAL RISK ANALYSIS & SCORE */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-cyan-400" />
              BEHAVIOURAL RISK ANALYSIS
            </h3>
            <span className="text-[10px] text-slate-500 font-mono">Model Engine: Random Forest</span>
          </div>

          {/* Deviation Progress Bars */}
          <div className="space-y-3 font-mono text-xs">
            {/* Amount Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-sans font-medium text-slate-300">Amount Deviation</span>
                <span className={`font-bold ${amountDevPct > 50 ? 'text-rose-400' : 'text-slate-400'}`}>{amountDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${amountDevPct > 70 ? 'bg-rose-500' : amountDevPct > 40 ? 'bg-amber-500' : 'bg-cyan-500'}`} 
                  style={{ width: `${Math.min(amountDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Time Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-sans font-medium text-slate-300">Time Deviation</span>
                <span className={`font-bold ${timeDevPct > 50 ? 'text-rose-400' : 'text-slate-400'}`}>{timeDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${timeDevPct > 70 ? 'bg-rose-500' : timeDevPct > 40 ? 'bg-amber-500' : 'bg-cyan-500'}`} 
                  style={{ width: `${Math.min(timeDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Location Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-sans font-medium text-slate-300">Location Deviation</span>
                <span className={`font-bold ${locationDevPct > 50 ? 'text-rose-400' : 'text-slate-400'}`}>{locationDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${locationDevPct > 70 ? 'bg-rose-500' : locationDevPct > 40 ? 'bg-amber-500' : 'bg-cyan-500'}`} 
                  style={{ width: `${Math.min(locationDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Device Change */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-sans font-medium text-slate-300">Device Change</span>
                <span className={`font-bold ${deviceDevPct > 50 ? 'text-rose-400' : 'text-slate-400'}`}>{deviceDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${deviceDevPct > 70 ? 'bg-rose-500' : deviceDevPct > 40 ? 'bg-amber-500' : 'bg-cyan-500'}`} 
                  style={{ width: `${Math.min(deviceDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Frequency Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-slate-300">
                <span className="font-sans font-medium text-slate-300">Frequency Deviation</span>
                <span className="font-bold text-slate-400">{freqDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full transition-all duration-700 rounded-full bg-cyan-500" 
                  style={{ width: `${Math.min(freqDevPct, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* OVERALL RISK SCORE BANNER */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isHighRisk ? 'bg-rose-500/10 border-rose-500/30' : isMediumRisk ? 'bg-amber-500/10 border-amber-500/30' : 'bg-emerald-500/10 border-emerald-500/30'
          }`}>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">OVERALL RISK SCORE</span>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-extrabold font-mono ${isHighRisk ? 'text-rose-400' : isMediumRisk ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {riskScore} <span className="text-base text-slate-400 font-normal">/ 100</span>
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isHighRisk ? 'bg-rose-500 text-slate-950' : isMediumRisk ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950'
                }`}>
                  {riskLevel} RISK
                </span>
              </div>
            </div>

            {/* Risk Scale Indicator (3. Milestone 9 / 10 score understanding) */}
            <div className="text-right text-[11px] font-mono text-slate-400 space-y-1 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-emerald-400">Low (0-30)</span>
                <span className="text-slate-500">Normal behaviour</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-amber-400">Medium (31-70)</span>
                <span className="text-slate-500">Some unusual behaviour</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-rose-400">High (71-100)</span>
                <span className="text-slate-500">Strong deviation</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10.2 — WHY WAS THIS TRANSACTION FLAGGED? */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            WHY WAS THIS TRANSACTION FLAGGED?
          </h3>
          <div className="space-y-2">
            {reasons.map((r, idx) => {
              const isCrit = r.type === 'critical' || r.type === 'high';
              const isWarn = r.type === 'warning' || r.type === 'medium';
              return (
                <div 
                  key={idx} 
                  className={`p-3.5 rounded-xl border text-xs flex items-start gap-3 ${
                    isCrit ? 'bg-rose-500/10 border-rose-500/20 text-rose-200' : isWarn ? 'bg-amber-500/10 border-amber-500/20 text-amber-200' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'
                  }`}
                >
                  <span className="text-sm mt-0.5">{isCrit ? '⚠' : isWarn ? '⚠' : '✓'}</span>
                  <div>
                    <h4 className="font-bold text-white text-xs">{r.title || r}</h4>
                    {r.desc && <p className="text-slate-400 text-[11px] mt-0.5 leading-relaxed">{r.desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10.3 — TRANSACTION vs USER NORMAL BEHAVIOUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* TRANSACTION Details */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5" /> TRANSACTION
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Transaction ID</span>
                <span className="font-mono font-bold text-white">{transaction.id || transaction.transaction_id || 'TX1001'}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">User ID</span>
                <span className="font-mono font-bold text-white">{transaction.user || transaction.user_id || 'U1842'}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Amount</span>
                <span className="font-mono font-bold text-emerald-400">{transaction.amount || `₹${(transaction.amountNum || 48500).toLocaleString()}`}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Time</span>
                <span className="font-mono text-slate-200">{transaction.time || '03:17 AM'}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Location</span>
                <span className="text-slate-200">{transaction.location || 'Mumbai'}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Device</span>
                <span className="text-slate-200">{transaction.device || 'New Device'}</span>
              </div>
            </div>
          </div>

          {/* USER'S NORMAL BEHAVIOUR */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> USER'S NORMAL BEHAVIOUR
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Average transaction</span>
                <span className="font-mono font-bold text-slate-200">{normalAmt}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Typical time</span>
                <span className="font-mono text-slate-200">{normalTime}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Usual location</span>
                <span className="text-slate-200">{normalLoc}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block font-semibold">Trusted devices</span>
                <span className="text-slate-200 font-semibold">{normalDev}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10.3 — CURRENT vs NORMAL COMPARISON GRID */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">CURRENT vs NORMAL</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
            {comparisons.map((c, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-xl border flex flex-col justify-between ${
                  c.is_unusual ? 'bg-rose-500/10 border-rose-500/30' : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <span className="text-[10px] font-sans font-semibold text-slate-400 uppercase">{c.metric}</span>
                <div className="mt-1">
                  <span className={`block font-bold text-sm ${c.is_unusual ? 'text-rose-400' : 'text-white'}`}>{c.current}</span>
                  <span className="text-[10px] text-slate-500 block">vs {c.normal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10.7 — AI RISK SUMMARY */}
        <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">AI RISK SUMMARY</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {aiSummary}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
