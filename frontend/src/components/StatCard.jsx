import React from 'react';

export const StatCard = ({ title, value, subtext, isPositive, color = 'cyan' }) => {
  const colorMap = {
    cyan: {
      border: 'hover:border-[#D96B43]',
      bg: 'bg-[#FAF0EB]',
      text: 'text-[#C5542E]',
    },
    amber: {
      border: 'hover:border-[#C9862B]',
      bg: 'bg-[#FDF7EA]',
      text: 'text-[#8A5608]',
    },
    rose: {
      border: 'hover:border-[#C94A29]',
      bg: 'bg-[#FDF0ED]',
      text: 'text-[#C94A29]',
    },
    emerald: {
      border: 'hover:border-[#3B7A57]',
      bg: 'bg-[#EFF7F2]',
      text: 'text-[#1B5233]',
    }
  };

  const style = colorMap[color] || colorMap.cyan;

  return (
    <div className={`glass-card p-5 rounded-2xl border border-[#E8DEC9] relative overflow-hidden transition-all duration-300 ${style.border}`}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8C7D70]">{title}</span>
        <span className={`w-2 h-2 rounded-full ${style.bg.replace('bg-', 'bg-')}`} />
      </div>

      <div className="mt-1">
        <h3 className="text-3xl font-extrabold tracking-tight text-[#251E17] font-sans">{value}</h3>
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#EFE6D7] flex items-center justify-between text-xs">
        <span className={`font-bold ${
          subtext.includes('+') 
            ? (isPositive ? 'text-[#3B7A57]' : 'text-[#C94A29]') 
            : subtext === 'Attention' ? 'text-[#C94A29] font-bold' : 'text-[#3B7A57] font-bold'
        }`}>
          {subtext}
        </span>
        <span className="text-[10px] text-[#8C7D70] font-mono">vs yesterday</span>
      </div>
    </div>
  );
};

export default StatCard;

