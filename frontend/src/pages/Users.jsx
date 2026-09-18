import React, { useState } from 'react';
import { Users as UsersIcon, Search, ShieldCheck, ShieldAlert, UserCheck, MapPin, Smartphone, CreditCard } from 'lucide-react';
import RiskBadge from '../components/RiskBadge';

export const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');

  // Real Dataset Customer Profiles (No Stock Profile Pictures)
  const customerList = [
    { id: 'CUST_0036', name: 'Customer CUST_0036', trustScore: '98%', riskTier: 'LOW', flaggedTxns: 0, location: 'Delhi', avgAmount: '₹73.58', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0097', name: 'Customer CUST_0097', trustScore: '98%', riskTier: 'LOW', flaggedTxns: 0, location: 'Bangalore', avgAmount: '₹128.56', device: 'Trusted Device', status: 'Approved' },
    { id: 'U1842', name: 'U1842 (Rahul Sharma)', trustScore: '24%', riskTier: 'CRITICAL', flaggedTxns: 12, location: 'Delhi / Mumbai', avgAmount: '₹48,500.00', device: 'New Device Mismatch', status: 'Flagged' },
    { id: 'CUST_0096', name: 'Customer CUST_0096', trustScore: '97%', riskTier: 'LOW', flaggedTxns: 0, location: 'Delhi', avgAmount: '₹422.50', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0052', name: 'Customer CUST_0052', trustScore: '99%', riskTier: 'LOW', flaggedTxns: 0, location: 'Delhi', avgAmount: '₹36.15', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0021', name: 'Customer CUST_0021', trustScore: '96%', riskTier: 'LOW', flaggedTxns: 0, location: 'Bangalore', avgAmount: '₹256.17', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0074', name: 'Customer CUST_0074', trustScore: '45%', riskTier: 'HIGH', flaggedTxns: 5, location: 'Delhi', avgAmount: '₹12,450.00', device: 'Unrecognized Device', status: 'Flagged' },
    { id: 'CUST_0075', name: 'Customer CUST_0075', trustScore: '98%', riskTier: 'LOW', flaggedTxns: 0, location: 'Bangalore', avgAmount: '₹96.78', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0005', name: 'Customer CUST_0005', trustScore: '99%', riskTier: 'LOW', flaggedTxns: 0, location: 'Bangalore', avgAmount: '₹187.29', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0076', name: 'Customer CUST_0076', trustScore: '97%', riskTier: 'LOW', flaggedTxns: 0, location: 'Delhi', avgAmount: '₹398.29', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0039', name: 'Customer CUST_0039', trustScore: '98%', riskTier: 'LOW', flaggedTxns: 0, location: 'Bangalore', avgAmount: '₹361.05', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0070', name: 'Customer CUST_0070', trustScore: '99%', riskTier: 'LOW', flaggedTxns: 0, location: 'Delhi', avgAmount: '₹239.85', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0077', name: 'Customer CUST_0077', trustScore: '97%', riskTier: 'LOW', flaggedTxns: 0, location: 'Bangalore', avgAmount: '₹186.30', device: 'Trusted Device', status: 'Approved' },
    { id: 'CUST_0071', name: 'Customer CUST_0071', trustScore: '32%', riskTier: 'CRITICAL', flaggedTxns: 8, location: 'Mumbai', avgAmount: '₹1,434.13', device: 'New Device', status: 'Flagged' }
  ];

  const filteredCustomers = customerList.filter((usr) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = usr.id.toLowerCase().includes(q) || usr.name.toLowerCase().includes(q) || usr.location.toLowerCase().includes(q);
    const matchesRisk = riskFilter === 'ALL' || 
                        (riskFilter === 'FLAGGED' && (usr.riskTier === 'CRITICAL' || usr.riskTier === 'HIGH')) || 
                        (riskFilter === 'APPROVED' && usr.riskTier === 'LOW');
    return matchesSearch && matchesRisk;
  });

  return (
<<<<<<< HEAD
    <div className="space-y-6 pb-8 text-[#3D3328]">
      <div className="p-5 rounded-2xl glass-card border border-[#E8DEC9] flex items-center justify-between bg-[#FFFDF9]">
=======
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div className="p-5 rounded-2xl glass-card border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#FAF0EB] text-[#D96B43] border border-[#E67B5E]/30">
            <UsersIcon className="w-5 h-5" />
          </div>
          <div>
<<<<<<< HEAD
            <h1 className="text-xl font-extrabold text-[#251E17] tracking-tight">Customer Risk Profiling</h1>
            <p className="text-xs text-[#7F6F59]">Individual user risk ratings and behavioral trust scores.</p>
=======
            <h1 className="text-xl font-bold text-white tracking-tight">Customer Risk Profiling</h1>
            <p className="text-xs text-slate-400">Individual user risk ratings, transaction baselines, and behavioural trust scores.</p>
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-3">
          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search customer ID..."
              className="w-full glass-input text-xs rounded-xl pl-9 pr-3 py-1.5 border border-slate-800 focus:border-cyan-500 text-slate-200"
            />
          </div>

          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="glass-input text-xs rounded-xl px-3 py-1.5 border border-slate-800 text-slate-200 bg-slate-900 cursor-pointer"
          >
            <option value="ALL">All Customers</option>
            <option value="FLAGGED">Flagged / High Risk</option>
            <option value="APPROVED">Approved / Low Risk</option>
          </select>
        </div>
      </div>

<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mockUsersList.map((usr) => (
          <div key={usr.email} className="glass-card p-5 rounded-2xl border border-[#E8DEC9] flex items-center justify-between bg-[#FFFDF9]">
            <div className="flex items-center gap-3">
              <img src={usr.avatar} alt={usr.name} className="w-12 h-12 rounded-2xl object-cover border border-[#E1D5C2] shadow-sm" />
              <div>
                <h3 className="font-extrabold text-[#251E17] text-sm">{usr.name}</h3>
                <p className="text-xs text-[#7F6F59]">{usr.email}</p>
                <span className="text-[10px] text-[#8C7D70] font-mono font-semibold">{usr.country}</span>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="text-xs text-[#7F6F59] font-bold">Trust Score</div>
              <div className={`font-mono font-extrabold text-lg ${usr.riskTier === 'CRITICAL' ? 'text-[#C94A29]' : 'text-[#3B7A57]'}`}>
                {usr.trustScore}
=======
      {/* Customers List Grid (No stock profile pictures) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCustomers.map((usr) => {
          const isFlagged = usr.riskTier === 'CRITICAL' || usr.riskTier === 'HIGH';

          return (
            <div 
              key={usr.id} 
              className={`glass-card p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                isFlagged ? 'border-rose-500/30 bg-rose-950/10' : 'border-slate-800'
              }`}
            >
              {/* Customer ID & Icon Badge (No Photos) */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                  isFlagged 
                    ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' 
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}>
                  {usr.id.startsWith('CUST_') ? usr.id.replace('CUST_', 'C') : usr.id}
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-white text-xs truncate flex items-center gap-1.5 font-mono">
                    {usr.id}
                    {isFlagged && <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-sans font-semibold">Flagged</span>}
                  </h3>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {usr.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-slate-500" />
                      {usr.device}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Avg Txn: <strong className="text-slate-300">{usr.avgAmount}</strong>
                  </div>
                </div>
              </div>

              {/* Trust Score & Status Badge */}
              <div className="text-right space-y-1 shrink-0">
                <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Trust Score</div>
                <div className={`font-mono font-extrabold text-base ${isFlagged ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {usr.trustScore}
                </div>
                <RiskBadge status={isFlagged ? 'Flagged' : 'Approved'} />
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

