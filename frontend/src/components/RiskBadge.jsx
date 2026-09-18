import React from 'react';

export const RiskBadge = ({ status, score }) => {
  let badgeStyle = 'bg-emerald-50 text-emerald-800 border-emerald-200/80 shadow-sm';
  let dotStyle = 'bg-emerald-600';
  let text = status || 'Approved';

  if (score !== undefined) {
    if (score >= 80) {
      badgeStyle = 'bg-rose-50 text-rose-800 border-rose-200/80 shadow-glow-terracotta/20';
      dotStyle = 'bg-rose-600 animate-ping';
      text = 'CRITICAL';
    } else if (score >= 50) {
      badgeStyle = 'bg-amber-50 text-amber-900 border-amber-200/80 shadow-sm';
      dotStyle = 'bg-amber-600';
      text = 'HIGH';
    } else if (score >= 25) {
      badgeStyle = 'bg-warm-100/80 text-warm-900 border-warm-300 shadow-sm';
      dotStyle = 'bg-warm-600';
      text = 'MEDIUM';
    } else {
      badgeStyle = 'bg-emerald-50 text-emerald-800 border-emerald-200/80 shadow-sm';
      dotStyle = 'bg-emerald-600';
      text = 'LOW';
    }
  } else {
    switch (status?.toLowerCase()) {
      case 'flagged':
      case 'blocked':
        badgeStyle = 'bg-rose-50 text-rose-800 border-rose-200/80';
        dotStyle = 'bg-rose-600 animate-pulse';
        break;
      case 'pending':
      case 'reviewing':
        badgeStyle = 'bg-amber-50 text-amber-900 border-amber-200/80';
        dotStyle = 'bg-amber-600 animate-pulse';
        break;
      case 'approved':
      default:
        badgeStyle = 'bg-emerald-50 text-emerald-800 border-emerald-200/80';
        dotStyle = 'bg-emerald-600';
        break;
    }
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${badgeStyle} backdrop-blur-sm transition-all duration-200`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyle}`}></span>
      {text}
      {score !== undefined && <span className="opacity-80 font-mono text-[10px]">({score}%)</span>}
    </span>
  );
};

export default RiskBadge;
