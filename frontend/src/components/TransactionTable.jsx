import React, { useState, useEffect } from 'react';
import { transactions as mockTransactions } from '../data/mockData';
import TransactionDetails from './TransactionDetails';
<<<<<<< HEAD
import { ChevronLeft, ChevronRight, User, ShieldCheck, AlertTriangle, ArrowUpDown, Filter, Smartphone, CreditCard, Clock, MapPin } from 'lucide-react';
=======
import { apiService } from '../services/api';
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b

export const TransactionTable = () => {
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [txnList, setTxnList] = useState(mockTransactions);

  useEffect(() => {
    const fetchTxns = async () => {
      try {
        const data = await apiService.getTransactions();
        if (data && data.length > 0) {
          setTxnList(data);
        }
      } catch (e) {
        // keep fallback mock transactions
      }
    };
    fetchTxns();
  }, []);

  return (
    <div className="glass-card rounded-2xl border border-[#E8DEC9] overflow-hidden bg-[#FFFDF9]">
      {/* Header Bar */}
      <div className="p-5 border-b border-[#EFE6D7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-extrabold text-[#251E17] tracking-tight">Recent Transactions</h3>
          <p className="text-xs text-[#7F6F59]">Click any transaction row to inspect behavioural risk details</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EFE4] hover:bg-[#EAE0D0] text-[#5B4E3E] border border-[#E1D5C2] text-xs font-bold transition-colors">
            <Filter className="w-3.5 h-3.5 text-[#D96B43]" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5EFE4] hover:bg-[#EAE0D0] text-[#5B4E3E] border border-[#E1D5C2] text-xs font-bold transition-colors">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#D96B43]" />
            <span>Sort by</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-[#3D3328]">
          <thead className="bg-[#FAF5EC] text-[#8C7D70] font-extrabold uppercase tracking-wider text-[10px] border-b border-[#E8DEC9]">
            <tr>
              <th className="py-3.5 px-4">Transaction ID</th>
              <th className="py-3.5 px-4">User</th>
              <th className="py-3.5 px-4">Amount</th>
              <th className="py-3.5 px-4">Location</th>
              <th className="py-3.5 px-4">Device</th>
              <th className="py-3.5 px-4">Time</th>
              <th className="py-3.5 px-4">Risk Score</th>
              <th className="py-3.5 px-4">Risk Level</th>
              <th className="py-3.5 px-4">Status</th>
            </tr>
          </thead>
<<<<<<< HEAD
          <tbody className="divide-y divide-[#EFE6D7]">
            {transactions.map((txn, idx) => {
              const isHigh = txn.riskLevel === 'High' || txn.riskScore >= 75;
              const isMedium = txn.riskLevel === 'Medium' || (txn.riskScore >= 30 && txn.riskScore < 75);
=======
          <tbody className="divide-y divide-slate-800/60">
            {txnList.map((txn, idx) => {
              const score = Math.round(txn.riskScore ?? txn.risk_score ?? 10);
              const rLevel = (txn.riskLevel || txn.risk_level || (score >= 71 ? 'HIGH' : score >= 31 ? 'MEDIUM' : 'LOW')).toUpperCase();
              const isHigh = rLevel === 'HIGH' || score >= 71;
              const isMedium = rLevel === 'MEDIUM' || (score >= 31 && score < 71);
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
              const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';
              const deviceStr = txn.device || 'Trusted Device';

              // Generate initials / avatar styling for NexaPay aesthetic
              const initials = txn.user ? txn.user.replace('-', '').slice(0, 3) : `U${idx}`;
              const avatarBg = isHigh ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' : isMedium ? 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]' : 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]';

              return (
                <tr 
                  key={txn.id || txn.transaction_id || idx} 
                  onClick={() => setSelectedTxn(txn)}
                  className="hover:bg-[#F5EFE4]/80 transition-colors cursor-pointer group"
                >
<<<<<<< HEAD
                  <td className="py-3.5 px-4 font-mono font-bold text-[#D96B43] group-hover:underline">{txn.id}</td>
                  <td className="py-3.5 px-4 font-medium text-[#251E17]">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-[10px] border ${avatarBg} shrink-0`}>
                        {initials}
                      </div>
                      <span className="font-bold">{txn.user}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#251E17]">{txn.amount}</td>
                  <td className="py-3.5 px-4 text-[#5B4E3E]">{txn.location}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold border ${
                      txn.device.includes('Trusted') 
                        ? 'bg-[#F4ECE1] text-[#5B4E3E] border-[#E7DCCB]' 
                        : 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]'
=======
                  <td className="py-3.5 px-4 font-mono font-bold text-cyan-400 group-hover:underline">{txn.id || txn.transaction_id}</td>
                  <td className="py-3.5 px-4 font-medium text-white">{txn.user || txn.user_id}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-100">{txn.amount || `₹${(txn.amountNum || 0).toLocaleString()}`}</td>
                  <td className="py-3.5 px-4 text-slate-300">{txn.location || 'Delhi'}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] ${
                      deviceStr.includes('Trusted') 
                        ? 'bg-slate-800 text-slate-300' 
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                    }`}>
                      {deviceStr}
                    </span>
                  </td>
<<<<<<< HEAD
                  <td className="py-3.5 px-4 font-mono text-[#8C7D70]">{txn.time}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 font-mono font-bold">
                      <span>{riskDot}</span>
                      <span className={isHigh ? 'text-[#C94A29]' : isMedium ? 'text-[#8A5608]' : 'text-[#1B5233]'}>
                        {txn.riskScore}
=======
                  <td className="py-3.5 px-4 font-mono text-slate-400">{txn.time || '10:00 AM'}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 font-mono font-bold">
                      <span>{riskDot}</span>
                      <span className={isHigh ? 'text-rose-400' : isMedium ? 'text-amber-400' : 'text-emerald-400'}>
                        {score}
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                      isHigh 
                        ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' 
                        : isMedium 
                        ? 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]' 
                        : 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]'
                    }`}>
                      {rLevel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
<<<<<<< HEAD
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      txn.status === 'Approved' 
                        ? 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]' 
                        : 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]'
=======
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      (txn.status || '').toLowerCase() === 'approved' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                    }`}>
                      {txn.status || 'Approved'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls (NexaPay Reference Image Feature) */}
      <div className="p-4 border-t border-[#EFE6D7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7F6F59] font-medium">
        <span>Viewing <strong className="text-[#251E17] font-bold">16</strong> of <strong className="text-[#251E17] font-bold">1,673</strong> results</span>
        <div className="flex items-center gap-1.5 font-mono">
          <button className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EAE0D0] border border-[#E1D5C2] text-[#5B4E3E] disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-[#D96B43] text-white font-bold text-xs flex items-center justify-center shadow-sm">1</button>
          <button className="w-7 h-7 rounded-lg bg-[#F5EFE4] hover:bg-[#EAE0D0] text-[#5B4E3E] font-bold text-xs flex items-center justify-center">2</button>
          <span className="px-1 text-[#8C7D70]">...</span>
          <button className="w-7 h-7 rounded-lg bg-[#F5EFE4] hover:bg-[#EAE0D0] text-[#5B4E3E] font-bold text-xs flex items-center justify-center">16</button>
          <button className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EAE0D0] border border-[#E1D5C2] text-[#5B4E3E]">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {selectedTxn && (
        <TransactionDetails 
          transaction={selectedTxn} 
          onClose={() => setSelectedTxn(null)} 
        />
      )}
    </div>
  );
};

export default TransactionTable;
