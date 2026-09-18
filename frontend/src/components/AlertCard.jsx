import React from 'react';
import { AlertOctagon, ShieldAlert, ArrowRight } from 'lucide-react';

export const AlertCard = ({ alert, onInvestigate }) => {
  if (!alert) return null;

  const isCritical = alert.severity === 'CRITICAL' || alert.riskScore >= 85;

  return (
    <div className={`glass-card p-6 rounded-2xl border space-y-4 ${
      isCritical 
        ? 'border-rose-500/40 bg-gradient-to-r from-rose-950/20 via-slate-900 to-slate-900 shadow-glow-rose/10' 
        : 'border-amber-500/30 bg-slate-900/80'
    }`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertOctagon className={`w-5 h-5 ${isCritical ? 'text-rose-500 animate-ping' : 'text-amber-400'}`} />
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase font-mono ${
            isCritical ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}>
            {alert.severity || (isCritical ? 'HIGH RISK' : 'MEDIUM RISK')}
          </span>
        </div>

        <span className="font-mono text-xs text-slate-500">{alert.time || 'Just now'}</span>
      </div>

      {/* Main Details */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 block">{alert.id || 'TXN-1048'}</span>
          <h3 className="text-xl font-extrabold text-white font-mono mt-0.5">{alert.amount || '₹48,500'}</h3>
          <p className="text-xs text-slate-300 mt-1">
            User: <strong className="text-white">{alert.user || 'U-1842'}</strong> • {alert.location || 'Mumbai'} • {alert.timeDetails || '03:17 AM'}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center sm:text-right shrink-0">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Risk Score</span>
          <span className="text-2xl font-extrabold font-mono text-white">{alert.riskScore || 89} <span className="text-xs font-normal text-slate-400">/ 100</span></span>
        </div>
      </div>

      {/* Reasons Bullet List */}
      <div className="space-y-1.5 text-xs pt-2 border-t border-slate-800/80">
        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Trigger Reasons:</span>
        {(alert.reasons || [
          "New device",
          "Unusual amount",
          "Unusual time",
          "Location deviation"
        ]).map((reason, idx) => (
          <div key={idx} className="flex items-center gap-2 text-slate-300">
            <span className="text-rose-400 text-xs">•</span>
            <span>{typeof reason === 'string' ? reason : reason.title}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end pt-3 border-t border-slate-800">
        <button 
          onClick={() => onInvestigate && onInvestigate(alert)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-slate-950 shadow-glow-cyan transition-all active:scale-95"
        >
          Investigate <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
