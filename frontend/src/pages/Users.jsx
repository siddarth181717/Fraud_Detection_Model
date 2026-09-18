import React, { useState } from 'react';
import { Users as UsersIcon, Search, MapPin, Smartphone } from 'lucide-react';
import RiskBadge from '../components/RiskBadge';

export const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');

  // Real Dataset Customer Profiles
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
    <div className="space-y-6 pb-8 text-[#34291D]">
      {/* Page Header */}
      <div className="p-5 rounded-2xl glass-card border border-[#E6DEC8] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FFFDF8]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#EFE7DA] text-[#3E3128] border border-[#DFD4BD]">
            <UsersIcon className="w-5 h-5 text-[#B58A43]" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-[#231B12] tracking-tight">Customer Risk Profiling</h1>
            <p className="text-xs text-[#6E5C44]">Individual user risk ratings, transaction baselines, and behavioural trust scores.</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-3">
          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-[#948060] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search customer ID..."
              className="w-full glass-input text-xs rounded-xl pl-9 pr-3 py-1.5 border border-[#DFD4BD] focus:border-[#B58A43] text-[#231B12]"
            />
          </div>

          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#DFD4BD] text-[#231B12] bg-[#EFE7DA] cursor-pointer font-semibold"
          >
            <option value="ALL">All Customers</option>
            <option value="FLAGGED">Flagged / High Risk</option>
            <option value="APPROVED">Approved / Low Risk</option>
          </select>
        </div>
      </div>

      {/* Customers List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCustomers.map((usr) => {
          const isFlagged = usr.riskTier === 'CRITICAL' || usr.riskTier === 'HIGH';

          return (
            <div 
              key={usr.id} 
              className={`glass-card p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 bg-[#FFFDF8] ${
                isFlagged ? 'border-rose-300 bg-rose-50/60' : 'border-[#E6DEC8]'
              }`}
            >
              {/* Customer ID & Icon Badge */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                  isFlagged 
                    ? 'bg-rose-100 text-rose-800 border border-rose-200' 
                    : 'bg-[#EFE7DA] text-[#3E3128] border border-[#DFD4BD]'
                }`}>
                  {usr.id.startsWith('CUST_') ? usr.id.replace('CUST_', 'C') : usr.id}
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-[#231B12] text-xs truncate flex items-center gap-1.5 font-mono">
                    {usr.id}
                    {isFlagged && <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 font-sans font-semibold">Flagged</span>}
                  </h3>
                  <div className="text-[11px] text-[#6E5C44] flex items-center gap-2 mt-0.5 font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#948060]" />
                      {usr.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-[#948060]" />
                      {usr.device}
                    </span>
                  </div>
                  <div className="text-[10px] text-[#948060] font-mono mt-0.5">
                    Avg Txn: <strong className="text-[#34291D]">{usr.avgAmount}</strong>
                  </div>
                </div>
              </div>

              {/* Trust Score & Status Badge */}
              <div className="text-right space-y-1 shrink-0">
                <div className="text-[10px] uppercase font-bold text-[#948060] tracking-wider">Trust Score</div>
                <div className={`font-mono font-extrabold text-base ${isFlagged ? 'text-rose-700' : 'text-[#3B7048]'}`}>
                  {usr.trustScore}
                </div>
                <RiskBadge status={isFlagged ? 'Flagged' : 'Approved'} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;

