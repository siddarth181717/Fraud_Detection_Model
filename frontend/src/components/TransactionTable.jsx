import React, { useState, useEffect } from 'react';
import { transactions as mockTransactions } from '../data/mockData';
import TransactionDetails from './TransactionDetails';
import { ChevronLeft, ChevronRight, Filter, ArrowUpDown } from 'lucide-react';
import { apiService } from '../services/api';

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
    <div className="glass-card rounded-2xl border border-[#E6DEC8] overflow-hidden bg-[#FFFDF8]">
      {/* Header Bar */}
      <div className="p-5 border-b border-[#EFE7DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-extrabold text-[#231B12] tracking-tight">Recent Transactions</h3>
          <p className="text-xs text-[#6E5C44]">Click any transaction row to inspect behavioural risk details</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#34291D] border border-[#DFD4BD] text-xs font-bold transition-colors">
            <Filter className="w-3.5 h-3.5 text-[#B58A43]" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#34291D] border border-[#DFD4BD] text-xs font-bold transition-colors">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#B58A43]" />
            <span>Sort by</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-[#34291D]">
          <thead className="bg-[#FAF5EA] text-[#6E5C44] font-extrabold uppercase tracking-wider text-[10px] border-b border-[#E6DEC8]">
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
          <tbody className="divide-y divide-[#EFE7DA]">
            {txnList.map((txn, idx) => {
              const score = Math.round(txn.riskScore ?? txn.risk_score ?? 10);
              const rLevel = (txn.riskLevel || txn.risk_level || (score >= 71 ? 'HIGH' : score >= 31 ? 'MEDIUM' : 'LOW')).toUpperCase();
              const isHigh = rLevel === 'HIGH' || score >= 71;
              const isMedium = rLevel === 'MEDIUM' || (score >= 31 && score < 71);
              const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';
              const deviceStr = txn.device || 'Trusted Device';

              // Generate initials / avatar styling
              const initials = (txn.user || txn.user_id || 'U1').replace('-', '').slice(0, 3);
              const avatarBg = isHigh ? 'bg-rose-50 text-rose-800 border-rose-200' : isMedium ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-emerald-50 text-emerald-800 border-emerald-200';

              return (
                <tr 
                  key={txn.id || txn.transaction_id || idx} 
                  onClick={() => setSelectedTxn(txn)}
                  className="hover:bg-[#FAF5EA] transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-[#B58A43] group-hover:underline">{txn.id || txn.transaction_id}</td>
                  <td className="py-3.5 px-4 font-medium text-[#231B12]">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-[10px] border ${avatarBg} shrink-0`}>
                        {initials}
                      </div>
                      <span className="font-bold">{txn.user || txn.user_id}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#231B12]">{txn.amount || `₹${(txn.amountNum || 0).toLocaleString()}`}</td>
                  <td className="py-3.5 px-4 text-[#4D3E2D]">{txn.location || 'Delhi'}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold border ${
                      deviceStr.includes('Trusted') 
                        ? 'bg-[#EFE7DA] text-[#4D3E2D] border-[#DFD4BD]' 
                        : 'bg-amber-50 text-amber-900 border-amber-200'
                    }`}>
                      {deviceStr}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[#948060]">{txn.time || '10:00 AM'}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 font-mono font-bold">
                      <span>{riskDot}</span>
                      <span className={isHigh ? 'text-rose-700' : isMedium ? 'text-amber-800' : 'text-emerald-700'}>
                        {score}
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                      isHigh 
                        ? 'bg-rose-50 text-rose-800 border-rose-200' 
                        : isMedium 
                        ? 'bg-amber-50 text-amber-900 border-amber-200' 
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}>
                      {rLevel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                      (txn.status || '').toLowerCase() === 'approved' 
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                        : 'bg-amber-50 text-amber-900 border-amber-200'
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

      {/* Pagination Controls */}
      <div className="p-4 border-t border-[#EFE7DA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6E5C44] font-medium">
        <span>Viewing <strong className="text-[#231B12] font-bold">16</strong> of <strong className="text-[#231B12] font-bold">1,673</strong> results</span>
        <div className="flex items-center gap-1.5 font-mono">
          <button className="p-1.5 rounded-lg bg-[#EFE7DA] hover:bg-[#DFD4BD] border border-[#DFD4BD] text-[#34291D] disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-[#3E3128] text-white font-bold text-xs flex items-center justify-center shadow-sm">1</button>
          <button className="w-7 h-7 rounded-lg bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#34291D] font-bold text-xs flex items-center justify-center">2</button>
          <span className="px-1 text-[#948060]">...</span>
          <button className="w-7 h-7 rounded-lg bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#34291D] font-bold text-xs flex items-center justify-center">16</button>
          <button className="p-1.5 rounded-lg bg-[#EFE7DA] hover:bg-[#DFD4BD] border border-[#DFD4BD] text-[#34291D]">
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
