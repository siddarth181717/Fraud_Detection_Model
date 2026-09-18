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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/60 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-3xl rounded-2xl border border-warm-200/80 shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto space-y-6 my-auto bg-warmCard border-cream-200/60 text-warm-900">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-warm-100/80 text-warm-600 hover:text-warm-900 hover:bg-warm-200/80 transition-colors border border-warm-200/80"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl border ${
            isHighRisk ? 'bg-rose-50 text-rose-700 border-rose-200/80' : isMediumRisk ? 'bg-amber-50 text-amber-800 border-amber-200/80' : 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
          }`}>
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-terracotta">{transaction.id || transaction.transaction_id || 'TX1001'}</span>
              <span className="text-xs text-warm-500">• User {transaction.user || transaction.user_id || 'U1842'}</span>
            </div>
            <h2 className="text-xl font-bold text-warm-900 tracking-tight">Behavioural Risk Analysis</h2>
          </div>
        </div>

        {/* 10.1 — BEHAVIOURAL RISK ANALYSIS & SCORE */}
        <div className="p-5 rounded-2xl bg-cream-50/80 border border-warm-200/80 space-y-5">
          <div className="flex items-center justify-between border-b border-warm-200/80 pb-3">
            <h3 className="text-xs font-bold text-warm-600 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-terracotta" />
              BEHAVIOURAL RISK ANALYSIS
            </h3>
            <span className="text-[10px] text-warm-500 font-mono">Model Engine: Random Forest</span>
          </div>

          {/* Deviation Progress Bars */}
          <div className="space-y-3 font-mono text-xs">
            {/* Amount Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-warm-800">
                <span className="font-sans font-medium text-warm-800">Amount Deviation</span>
                <span className={`font-bold ${amountDevPct > 50 ? 'text-rose-600' : 'text-warm-600'}`}>{amountDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-cream-200/60 rounded-full overflow-hidden border border-cream-300">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${amountDevPct > 70 ? 'bg-rose-500' : amountDevPct > 40 ? 'bg-amber-500' : 'bg-terracotta'}`} 
                  style={{ width: `${Math.min(amountDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Time Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-warm-800">
                <span className="font-sans font-medium text-warm-800">Time Deviation</span>
                <span className={`font-bold ${timeDevPct > 50 ? 'text-rose-600' : 'text-warm-600'}`}>{timeDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-cream-200/60 rounded-full overflow-hidden border border-cream-300">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${timeDevPct > 70 ? 'bg-rose-500' : timeDevPct > 40 ? 'bg-amber-500' : 'bg-terracotta'}`} 
                  style={{ width: `${Math.min(timeDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Location Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-warm-800">
                <span className="font-sans font-medium text-warm-800">Location Deviation</span>
                <span className={`font-bold ${locationDevPct > 50 ? 'text-rose-600' : 'text-warm-600'}`}>{locationDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-cream-200/60 rounded-full overflow-hidden border border-cream-300">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${locationDevPct > 70 ? 'bg-rose-500' : locationDevPct > 40 ? 'bg-amber-500' : 'bg-terracotta'}`} 
                  style={{ width: `${Math.min(locationDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Device Change */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-warm-800">
                <span className="font-sans font-medium text-warm-800">Device Change</span>
                <span className={`font-bold ${deviceDevPct > 50 ? 'text-rose-600' : 'text-warm-600'}`}>{deviceDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-cream-200/60 rounded-full overflow-hidden border border-cream-300">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${deviceDevPct > 70 ? 'bg-rose-500' : deviceDevPct > 40 ? 'bg-amber-500' : 'bg-terracotta'}`} 
                  style={{ width: `${Math.min(deviceDevPct, 100)}%` }}
                />
              </div>
            </div>

            {/* Frequency Deviation */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-warm-800">
                <span className="font-sans font-medium text-warm-800">Frequency Deviation</span>
                <span className="font-bold text-warm-600">{freqDevPct}%</span>
              </div>
              <div className="h-2.5 w-full bg-cream-200/60 rounded-full overflow-hidden border border-cream-300">
                <div 
                  className="h-full transition-all duration-700 rounded-full bg-terracotta" 
                  style={{ width: `${Math.min(freqDevPct, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* OVERALL RISK SCORE BANNER */}
          <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isHighRisk ? 'bg-rose-50 border-rose-200/80' : isMediumRisk ? 'bg-amber-50 border-amber-200/80' : 'bg-emerald-50 border-emerald-200/80'
          }`}>
            <div>
              <span className="text-[10px] uppercase font-bold text-warm-500 tracking-wider block">OVERALL RISK SCORE</span>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-extrabold font-mono ${isHighRisk ? 'text-rose-700' : isMediumRisk ? 'text-amber-800' : 'text-emerald-700'}`}>
                  {riskScore} <span className="text-base text-warm-500 font-normal">/ 100</span>
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isHighRisk ? 'bg-rose-600 text-white' : isMediumRisk ? 'bg-amber-600 text-white' : 'bg-emerald-700 text-white'
                }`}>
                  {riskLevel} RISK
                </span>
              </div>
            </div>

            {/* Risk Scale Indicator */}
            <div className="text-right text-[11px] font-mono text-warm-600 space-y-1 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-warm-200/80 pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-emerald-700 font-bold">Low (0-30)</span>
                <span className="text-warm-500">Normal behaviour</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-amber-800 font-bold">Medium (31-70)</span>
                <span className="text-warm-500">Some unusual behaviour</span>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3">
                <span className="text-rose-700 font-bold">High (71-100)</span>
                <span className="text-warm-500">Strong deviation</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10.2 — WHY WAS THIS TRANSACTION FLAGGED? */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-warm-600 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
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
                    isCrit ? 'bg-rose-50/80 border-rose-200/80 text-rose-900' : isWarn ? 'bg-amber-50/80 border-amber-200/80 text-amber-900' : 'bg-emerald-50/80 border-emerald-200/80 text-emerald-900'
                  }`}
                >
                  <span className="text-sm mt-0.5">{isCrit ? '⚠' : isWarn ? '⚠' : '✓'}</span>
                  <div>
                    <h4 className="font-bold text-warm-900 text-xs">{r.title || r}</h4>
                    {r.desc && <p className="text-warm-600 text-[11px] mt-0.5 leading-relaxed">{r.desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10.3 — TRANSACTION vs USER NORMAL BEHAVIOUR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* TRANSACTION Details */}
          <div className="p-4 rounded-xl bg-cream-50/80 border border-warm-200/80 space-y-3">
            <h4 className="text-xs font-bold text-terracotta uppercase tracking-wider flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5" /> TRANSACTION
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Transaction ID</span>
                <span className="font-mono font-bold text-warm-900">{transaction.id || transaction.transaction_id || 'TX1001'}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">User ID</span>
                <span className="font-mono font-bold text-warm-900">{transaction.user || transaction.user_id || 'U1842'}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Amount</span>
                <span className="font-mono font-bold text-emerald-700">{transaction.amount || `₹${(transaction.amountNum || 48500).toLocaleString()}`}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Time</span>
                <span className="font-mono text-warm-800">{transaction.time || '03:17 AM'}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Location</span>
                <span className="text-warm-800">{transaction.location || 'Mumbai'}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Device</span>
                <span className="text-warm-800">{transaction.device || 'New Device'}</span>
              </div>
            </div>
          </div>

          {/* USER'S NORMAL BEHAVIOUR */}
          <div className="p-4 rounded-xl bg-cream-50/80 border border-warm-200/80 space-y-3">
            <h4 className="text-xs font-bold text-warm-700 uppercase tracking-wider flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> USER'S NORMAL BEHAVIOUR
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Average transaction</span>
                <span className="font-mono font-bold text-warm-800">{normalAmt}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Typical time</span>
                <span className="font-mono text-warm-800">{normalTime}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Usual location</span>
                <span className="text-warm-800">{normalLoc}</span>
              </div>
              <div>
                <span className="text-warm-500 text-[10px] block font-semibold">Trusted devices</span>
                <span className="text-warm-800 font-semibold">{normalDev}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 10.3 — CURRENT vs NORMAL COMPARISON GRID */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-warm-600 uppercase tracking-wider">CURRENT vs NORMAL</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
            {comparisons.map((c, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-xl border flex flex-col justify-between ${
                  c.is_unusual ? 'bg-rose-50/90 border-rose-200 text-rose-900' : 'bg-cream-50/80 border-warm-200/80 text-warm-900'
                }`}
              >
                <span className="text-[10px] font-sans font-semibold text-warm-500 uppercase">{c.metric}</span>
                <div className="mt-1">
                  <span className={`block font-bold text-sm ${c.is_unusual ? 'text-rose-700' : 'text-warm-900'}`}>{c.current}</span>
                  <span className="text-[10px] text-warm-500 block">vs {c.normal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10.7 — AI RISK SUMMARY */}
        <div className="p-4 rounded-xl bg-warm-100/70 border border-warm-300/80 space-y-1.5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <h3 className="text-xs font-bold text-terracotta uppercase tracking-wider">AI RISK SUMMARY</h3>
          </div>
          <p className="text-xs text-warm-800 leading-relaxed font-sans">
            {aiSummary}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-warm-200/80">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-terracotta hover:bg-terracotta-dark text-xs font-bold text-white shadow-md transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
