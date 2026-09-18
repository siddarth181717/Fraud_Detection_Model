import React from 'react';
import { AlertTriangle, ShieldAlert, ArrowUpRight, Smartphone, MapPin, Clock, DollarSign } from 'lucide-react';

export const LiveTransaction = ({ transaction, onInspect }) => {
  if (!transaction) return null;

  const isHigh = transaction.riskScore >= 75 || transaction.riskLevel === 'High';
  const isMedium = (transaction.riskScore >= 30 && transaction.riskScore < 75) || transaction.riskLevel === 'Medium';

  return (
    <div 
      onClick={() => onInspect && onInspect(transaction)}
      className={`p-5 rounded-2xl glass-card border relative transition-all duration-300 cursor-pointer group hover:scale-[1.01] ${
        isHigh 
          ? 'border-rose-500/40 bg-gradient-to-r from-rose-950/20 via-slate-900 to-slate-900 shadow-glow-rose/10' 
          : isMedium 
          ? 'border-amber-500/30 bg-slate-900/80' 
          : 'border-slate-800 bg-slate-900/60'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="font-mono font-bold text-sm text-cyan-400">{transaction.id}</span>
          <span className="text-xs text-slate-400 font-mono">({transaction.time})</span>
        </div>

        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider ${
          isHigh 
            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
            : isMedium 
            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
        }`}>
          {isHigh ? '🔴 HIGH' : isMedium ? '🟡 MEDIUM' : '🟢 LOW'}
        </span>
      </div>

      {/* Transaction Content Grid */}
      <div className="py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div>
          <span className="text-slate-400 text-[10px] uppercase block font-semibold">User</span>
          <span className="font-bold text-white text-sm">{transaction.user}</span>
        </div>

        <div>
          <span className="text-slate-400 text-[10px] uppercase block font-semibold">Amount</span>
          <span className="font-mono font-extrabold text-emerald-400 text-sm">{transaction.amount}</span>
        </div>

        <div>
          <span className="text-slate-400 text-[10px] uppercase block font-semibold">Location & Device</span>
          <span className="text-slate-200 font-medium block truncate">{transaction.location} • {transaction.device}</span>
        </div>

        <div>
          <span className="text-slate-400 text-[10px] uppercase block font-semibold">Risk Score</span>
          <span className="font-mono font-extrabold text-base text-white">{transaction.riskScore} <span className="text-xs font-normal text-slate-400">/ 100</span></span>
        </div>
      </div>

      {/* Warning Reasons List */}
      {transaction.reasons && transaction.reasons.length > 0 && (
        <div className="pt-3 border-t border-slate-800/80 space-y-1 text-xs">
          {transaction.reasons.map((r, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300">
              <span className="text-rose-400">⚠</span>
              <span>{typeof r === 'string' ? r : r.title}</span>
            </div>
          ))}
        </div>
      )}

      {/* Hover Inspect Indicator */}
      <div className="mt-3 flex items-center justify-end text-[11px] text-cyan-400 font-semibold group-hover:underline">
        Click to inspect transaction details <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
      </div>
    </div>
  );
};

export default LiveTransaction;
