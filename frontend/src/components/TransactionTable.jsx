import React, { useState } from 'react';
import { transactions } from '../data/mockData';
import TransactionDetails from './TransactionDetails';

export const TransactionTable = () => {
  const [selectedTxn, setSelectedTxn] = useState(null);

  return (
    <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
      <div className="p-5 border-b border-slate-800/80">
        <h3 className="text-base font-bold text-white tracking-tight">Recent Transactions</h3>
        <p className="text-xs text-slate-400">Click any transaction row to inspect behavioural risk details</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/90 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-800">
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
          <tbody className="divide-y divide-slate-800/60">
            {transactions.map((txn) => {
              const isHigh = txn.riskLevel === 'High' || txn.riskScore >= 75;
              const isMedium = txn.riskLevel === 'Medium' || (txn.riskScore >= 30 && txn.riskScore < 75);
              const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';

              return (
                <tr 
                  key={txn.id} 
                  onClick={() => setSelectedTxn(txn)}
                  className="hover:bg-slate-800/50 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-cyan-400 group-hover:underline">{txn.id}</td>
                  <td className="py-3.5 px-4 font-medium text-white">{txn.user}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-100">{txn.amount}</td>
                  <td className="py-3.5 px-4 text-slate-300">{txn.location}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[11px] ${
                      txn.device.includes('Trusted') 
                        ? 'bg-slate-800 text-slate-300' 
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                    }`}>
                      {txn.device}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{txn.time}</td>
                  <td className="py-3.5 px-4">
                    <span className="flex items-center gap-1 font-mono font-bold">
                      <span>{riskDot}</span>
                      <span className={isHigh ? 'text-rose-400' : isMedium ? 'text-amber-400' : 'text-emerald-400'}>
                        {txn.riskScore}
                      </span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      isHigh 
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                        : isMedium 
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {txn.riskLevel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      txn.status === 'Approved' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
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
