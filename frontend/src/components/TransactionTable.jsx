import React, { useState } from 'react';
import { transactions } from '../data/mockData';
import TransactionDetails from './TransactionDetails';
import { ChevronLeft, ChevronRight, User, ShieldCheck, AlertTriangle, ArrowUpDown, Filter, Smartphone, CreditCard, Clock, MapPin } from 'lucide-react';

export const TransactionTable = () => {
  const [selectedTxn, setSelectedTxn] = useState(null);

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
          <tbody className="divide-y divide-[#EFE6D7]">
            {transactions.map((txn, idx) => {
              const isHigh = txn.riskLevel === 'High' || txn.riskScore >= 75;
              const isMedium = txn.riskLevel === 'Medium' || (txn.riskScore >= 30 && txn.riskScore < 75);
              const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';

              // Generate initials / avatar styling for NexaPay aesthetic
              const initials = txn.user ? txn.user.replace('-', '').slice(0, 3) : `U${idx}`;
              const avatarBg = isHigh ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' : isMedium ? 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]' : 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]';

              return (
                <tr 
                  key={txn.id} 
                  onClick={() => setSelectedTxn(txn)}
                  className="hover:bg-[#F5EFE4]/80 transition-colors cursor-pointer group"
                >
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
                    }`}>
                      {txn.device}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[#8C7D70]">{txn.time}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 font-mono font-bold">
                      <span>{riskDot}</span>
                      <span className={isHigh ? 'text-[#C94A29]' : isMedium ? 'text-[#8A5608]' : 'text-[#1B5233]'}>
                        {txn.riskScore}
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
                      {txn.riskLevel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      txn.status === 'Approved' 
                        ? 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]' 
                        : 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]'
                    }`}>
                      {txn.status}
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
