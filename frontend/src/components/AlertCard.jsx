import React from 'react';
import { AlertOctagon, ShieldAlert, ArrowRight } from 'lucide-react';

export const AlertCard = ({ alert, onInvestigate }) => {
  if (!alert) return null;

  const isCritical = alert.severity === 'CRITICAL' || alert.riskScore >= 85;

  return (
    <div className={`glass-card p-6 rounded-2xl border space-y-4 transition-all ${
      isCritical 
        ? 'border-[#F4C5B9] bg-gradient-to-r from-[#FDF0ED] via-[#FFFDF9] to-[#FFFDF9] shadow-sm' 
        : 'border-[#F5E2B8] bg-[#FFFDF9]'
    }`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertOctagon className={`w-5 h-5 ${isCritical ? 'text-[#C94A29] animate-pulse' : 'text-[#8A5608]'}`} />
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase font-mono border ${
            isCritical ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' : 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]'
          }`}>
            {alert.severity || (isCritical ? 'HIGH RISK' : 'MEDIUM RISK')}
          </span>
        </div>

        <span className="font-mono text-xs text-[#8C7D70]">{alert.time || 'Just now'}</span>
      </div>

      {/* Main Details */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#D96B43] block">{alert.id || 'TXN-1048'}</span>
          <h3 className="text-xl font-extrabold text-[#251E17] font-mono mt-0.5">{alert.amount || '₹48,500'}</h3>
          <p className="text-xs text-[#5B4E3E] mt-1">
            User: <strong className="text-[#251E17]">{alert.user || 'U-1842'}</strong> • {alert.location || 'Mumbai'} • {alert.timeDetails || '03:17 AM'}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2] text-center sm:text-right shrink-0">
          <span className="text-[10px] text-[#8C7D70] uppercase font-extrabold block">Risk Score</span>
          <span className="text-2xl font-extrabold font-mono text-[#251E17]">{alert.riskScore || 89} <span className="text-xs font-normal text-[#8C7D70]">/ 100</span></span>
        </div>
      </div>

      {/* Reasons Bullet List */}
      <div className="space-y-1.5 text-xs pt-2 border-t border-[#EFE6D7]">
        <span className="text-[10px] uppercase font-extrabold text-[#8C7D70] block mb-1">Trigger Reasons:</span>
        {(alert.reasons || [
          "New device",
          "Unusual amount",
          "Unusual time",
          "Location deviation"
        ]).map((reason, idx) => (
          <div key={idx} className="flex items-center gap-2 text-[#5B4E3E]">
            <span className="text-[#C94A29] text-xs font-bold">•</span>
            <span>{typeof reason === 'string' ? reason : reason.title}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end pt-3 border-t border-[#EFE6D7]">
        <button 
          onClick={() => onInvestigate && onInvestigate(alert)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3E3128] hover:bg-[#2A2019] text-xs font-bold text-white shadow-glow-warm transition-all active:scale-95"
        >
          Investigate <ArrowRight className="w-3.5 h-3.5 text-[#DCBC79]" />
        </button>
      </div>
    </div>
  );
};

export default AlertCard;

