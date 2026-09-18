import React from 'react';

export const RiskBadge = ({ status, score }) => {
  let badgeStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  let dotStyle = 'bg-emerald-500';
  let text = status || 'Approved';

  if (score !== undefined) {
    if (score >= 80) {
      badgeStyle = 'bg-rose-500/15 text-rose-400 border-rose-500/30 shadow-glow-rose/20';
      dotStyle = 'bg-rose-500 animate-ping';
      text = 'CRITICAL';
    } else if (score >= 50) {
      badgeStyle = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      dotStyle = 'bg-amber-500';
      text = 'HIGH';
    } else if (score >= 25) {
      badgeStyle = 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20';
      dotStyle = 'bg-yellow-400';
      text = 'MEDIUM';
    } else {
      badgeStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      dotStyle = 'bg-emerald-400';
      text = 'LOW';
    }
  } else {
    switch (status?.toLowerCase()) {
      case 'flagged':
      case 'blocked':
        badgeStyle = 'bg-rose-500/15 text-rose-400 border-rose-500/30';
        dotStyle = 'bg-rose-500 animate-pulse';
        break;
      case 'pending':
      case 'reviewing':
        badgeStyle = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
        dotStyle = 'bg-amber-400 animate-pulse';
        break;
      case 'approved':
      default:
        badgeStyle = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
        dotStyle = 'bg-emerald-400';
        break;
    }
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeStyle} backdrop-blur-sm transition-all duration-200`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotStyle}`}></span>
      {text}
      {score !== undefined && <span className="opacity-80 font-mono text-[10px]">({score}%)</span>}
    </span>
  );
};

export default RiskBadge;
