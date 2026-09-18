import React from 'react';

export const StatCard = ({ title, value, subtext, isPositive, color = 'cyan' }) => {
  const colorMap = {
    cyan: {
      border: 'hover:border-cyan-500/40',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
    },
    amber: {
      border: 'hover:border-amber-500/40',
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
    },
    rose: {
      border: 'hover:border-rose-500/40',
      bg: 'bg-rose-500/10',
      text: 'text-rose-400',
    },
    emerald: {
      border: 'hover:border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
    }
  };

  const style = colorMap[color] || colorMap.cyan;

  return (
    <div className={`glass-card p-5 rounded-2xl border border-slate-800 relative overflow-hidden transition-all duration-300 ${style.border}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</span>
      </div>

      <div className="mt-1">
        <h3 className="text-3xl font-extrabold tracking-tight text-white font-sans">{value}</h3>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span className={`font-semibold ${
          subtext.includes('+') 
            ? (isPositive ? 'text-emerald-400' : 'text-rose-400') 
            : subtext === 'Attention' ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'
        }`}>
          {subtext}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
