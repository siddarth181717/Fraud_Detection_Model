import React from 'react';
import { User, Shield, Clock, MapPin, Smartphone, ShoppingBag } from 'lucide-react';

export const BehaviourProfile = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="space-y-6 text-[#3D3328]">
      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-[#E8DEC9] bg-[#FFFDF9]">
          <span className="text-xs font-extrabold text-[#8C7D70] uppercase tracking-wider block mb-1">Avg Amount</span>
          <p className="text-2xl font-extrabold text-[#251E17] font-mono">{profile.averageAmount}</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-[#E8DEC9] bg-[#FFFDF9]">
          <span className="text-xs font-extrabold text-[#8C7D70] uppercase tracking-wider block mb-1">Transactions</span>
          <p className="text-2xl font-extrabold text-[#251E17] font-mono">{profile.transactionsPerDay} <span className="text-xs font-sans text-[#7F6F59] font-normal">/ day</span></p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-[#E8DEC9] bg-[#FFFDF9]">
          <span className="text-xs font-extrabold text-[#8C7D70] uppercase tracking-wider block mb-1">Usual Time</span>
          <p className="text-lg font-bold text-[#D96B43] font-mono mt-1">{profile.typicalTime}</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-[#E8DEC9] bg-[#FFFDF9]">
          <span className="text-xs font-extrabold text-[#8C7D70] uppercase tracking-wider block mb-1">Trusted</span>
          <p className="text-lg font-bold text-[#3B7A57] font-mono mt-1">Devices: {profile.trustedDevicesCount}</p>
        </div>
      </div>

      {/* Profile Details Card */}
      <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] space-y-4 bg-[#FFFDF9]">
        <div className="flex items-center gap-3 pb-3 border-b border-[#EFE6D7]">
          <div className="w-10 h-10 rounded-xl bg-[#FAF0EB] text-[#D96B43] flex items-center justify-center font-bold border border-[#E67B5E]/30">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-[#251E17] uppercase tracking-wider">USER BEHAVIOUR PROFILE</h3>
            <p className="text-xs text-[#7F6F59] font-mono">{profile.userId} — {profile.userName}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Average Transaction</span>
            <span className="font-mono font-bold text-[#251E17] text-sm">{profile.averageAmount}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Maximum Normal Amount</span>
            <span className="font-mono font-bold text-[#3B7A57] text-sm">{profile.maxNormalAmount}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Transactions / Day</span>
            <span className="font-mono font-bold text-[#251E17] text-sm">{profile.transactionsPerDay}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Typical Time</span>
            <span className="font-mono font-bold text-[#D96B43] text-sm">{profile.typicalTime}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Primary Location</span>
            <span className="font-bold text-[#251E17] text-sm">{profile.primaryLocation}</span>
          </div>

          <div className="p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Trusted Devices</span>
            <span className="font-mono font-bold text-[#3B7A57] text-sm">{profile.trustedDevicesCount} Devices</span>
          </div>

          <div className="sm:col-span-2 p-3 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
            <span className="text-[#8C7D70] block text-[10px] uppercase font-bold">Common Merchants</span>
            <span className="text-[#3D3328] font-semibold text-sm">{profile.commonMerchants.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehaviourProfile;

