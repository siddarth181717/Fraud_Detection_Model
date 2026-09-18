import React from 'react';
import { Bell, ArrowRight, X } from 'lucide-react';

export const NotificationPanel = ({ notifications = [], onViewAll, onClose }) => {
  const defaultList = [
    { id: 1, type: 'critical', text: 'High-risk transaction detected', meta: 'TXN-1048 • 2 min ago' },
    { id: 2, type: 'warning', text: 'Unusual location detected', meta: 'U-1842 • 5 min ago' },
    { id: 3, type: 'medium', text: 'Behaviour deviation increased', meta: 'U-2190 • 12 min ago' }
  ];

  const list = notifications.length > 0 ? notifications : defaultList;

  return (
    <div className="absolute right-0 mt-3 w-80 glass-panel rounded-2xl border border-slate-800 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">NOTIFICATIONS</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="space-y-2 max-h-72 overflow-y-auto">
        {list.map((item) => (
          <div 
            key={item.id} 
            className={`p-2.5 rounded-xl border text-xs space-y-1 transition-colors ${
              item.type === 'critical' 
                ? 'bg-rose-500/10 border-rose-500/20 text-rose-300' 
                : item.type === 'warning'
                ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                : 'bg-slate-900/80 border-slate-800 text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 font-semibold">
              <span>{item.type === 'critical' ? '🔴' : item.type === 'warning' ? '🟠' : '🟡'}</span>
              <span>{item.text}</span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 pl-5">{item.meta}</p>
          </div>
        ))}
      </div>

      <div className="pt-3 mt-3 border-t border-slate-800 text-right">
        <button 
          onClick={() => {
            if (onViewAll) onViewAll();
            if (onClose) onClose();
          }}
          className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
        >
          View all alerts <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default NotificationPanel;
