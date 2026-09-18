import React from 'react';
import { User, Shield, Clock, MapPin, Smartphone, ShoppingBag } from 'lucide-react';

export const BehaviourProfile = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="space-y-6">
      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Avg Amount</span>
          <p className="text-2xl font-extrabold text-white font-mono">{profile.averageAmount}</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Transactions</span>
          <p className="text-2xl font-extrabold text-white font-mono">{profile.transactionsPerDay} <span className="text-xs font-sans text-slate-400 font-normal">/ day</span></p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Usual Time</span>
          <p className="text-lg font-bold text-cyan-400 font-mono mt-1">{profile.typicalTime}</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Trusted</span>
          <p className="text-lg font-bold text-emerald-400 font-mono mt-1">Devices: {profile.trustedDevicesCount}</p>
        </div>
      </div>

      {/* Profile Details Card */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold border border-cyan-500/20">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">USER BEHAVIOUR PROFILE</h3>
            <p className="text-xs text-slate-400 font-mono">{profile.userId} — {profile.userName}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Average Transaction</span>
            <span className="font-mono font-bold text-white text-sm">{profile.averageAmount}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Maximum Normal Amount</span>
            <span className="font-mono font-bold text-emerald-400 text-sm">{profile.maxNormalAmount}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Transactions / Day</span>
            <span className="font-mono font-bold text-white text-sm">{profile.transactionsPerDay}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Typical Time</span>
            <span className="font-mono font-bold text-cyan-400 text-sm">{profile.typicalTime}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Primary Location</span>
            <span className="font-bold text-white text-sm">{profile.primaryLocation}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Trusted Devices</span>
            <span className="font-mono font-bold text-emerald-400 text-sm">{profile.trustedDevicesCount} Devices</span>
          </div>

          <div className="sm:col-span-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Common Merchants</span>
            <span className="text-slate-200 font-medium text-sm">{profile.commonMerchants.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviourProfile;
