import React from 'react';
import { Users as UsersIcon, ShieldAlert, UserCheck, Search, Filter } from 'lucide-react';
import RiskBadge from '../components/RiskBadge';

export const Users = () => {
  const mockUsersList = [
    { name: 'Alex Vance', email: 'alex.vance@example.com', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', trustScore: '24%', riskTier: 'CRITICAL', flaggedTxns: 12, country: 'United Kingdom' },
    { name: 'Sarah Jenkins', email: 'sarah.j@example.com', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', trustScore: '98%', riskTier: 'LOW', flaggedTxns: 0, country: 'United States' },
    { name: 'Michael Chang', email: 'm.chang@example.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', trustScore: '45%', riskTier: 'HIGH', flaggedTxns: 5, country: 'Nigeria' },
    { name: 'Emma Watson', email: 'emma.w@example.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80', trustScore: '99%', riskTier: 'LOW', flaggedTxns: 0, country: 'Canada' },
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="p-5 rounded-2xl glass-card border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <UsersIcon className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Customer Risk Profiling</h1>
            <p className="text-xs text-slate-400">Individual user risk ratings and behavioral trust scores.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mockUsersList.map((usr) => (
          <div key={usr.email} className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={usr.avatar} alt={usr.name} className="w-12 h-12 rounded-2xl object-cover border border-slate-700" />
              <div>
                <h3 className="font-bold text-white text-sm">{usr.name}</h3>
                <p className="text-xs text-slate-400">{usr.email}</p>
                <span className="text-[10px] text-slate-500 font-mono">{usr.country}</span>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="text-xs text-slate-400">Trust Score</div>
              <div className={`font-mono font-bold text-lg ${usr.riskTier === 'CRITICAL' ? 'text-rose-400' : 'text-emerald-400'}`}>
                {usr.trustScore}
              </div>
              <RiskBadge status={usr.riskTier === 'CRITICAL' ? 'Flagged' : 'Approved'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
