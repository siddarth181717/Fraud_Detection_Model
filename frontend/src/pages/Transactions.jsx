import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, RefreshCw, AlertCircle } from 'lucide-react';
import { transactions as mockTransactions } from '../data/mockData';
import TransactionDetails from '../components/TransactionDetails';
import { apiService } from '../services/api';

export const Transactions = () => {
  const [txnList, setTxnList] = useState(mockTransactions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');
  const [selectedTxn, setSelectedTxn] = useState(null);

  useEffect(() => {
    const loadTxns = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiService.getTransactions();
        if (data && data.length > 0) {
          setTxnList(data);
        } else {
          setTxnList(mockTransactions);
        }
      } catch (err) {
        setError('Unable to fetch live transactions list from API.');
        setTxnList(mockTransactions);
      } finally {
        setLoading(false);
      }
    };

    loadTxns();
  }, []);

  // Filter Logic
  let filtered = txnList.filter((txn) => {
    const query = searchQuery.toLowerCase();
    const idStr = (txn.id || txn.transaction_id || '').toLowerCase();
    const userStr = (txn.user || txn.user_id || '').toLowerCase();
    const locStr = (txn.location || '').toLowerCase();

    const matchesSearch = idStr.includes(query) || userStr.includes(query) || locStr.includes(query);

    const rLevel = (txn.riskLevel || txn.risk_level || 'LOW').toUpperCase();
    const matchesRisk = riskFilter === 'ALL' || rLevel === riskFilter.toUpperCase();

    const statusStr = (txn.status || 'Approved').toUpperCase();
    const matchesStatus = statusFilter === 'ALL' || statusStr === statusFilter.toUpperCase();

    return matchesSearch && matchesRisk && matchesStatus;
  });

  // Sort Logic
  if (sortBy === 'AMOUNT_HIGH') {
    filtered.sort((a, b) => (b.amountNum || 0) - (a.amountNum || 0));
  } else if (sortBy === 'RISK_HIGH') {
    filtered.sort((a, b) => (b.riskScore || 0) - (a.riskScore || 0));
  } else if (sortBy === 'RISK_LOW') {
    filtered.sort((a, b) => (a.riskScore || 0) - (b.riskScore || 0));
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Header Title */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">TRANSACTIONS</h1>
        <p className="text-xs text-slate-400 mt-0.5">Filter, search, and inspect individual transaction behaviour.</p>
      </div>

      {/* Control Filters Bar */}
      <div className="p-4 rounded-2xl glass-card border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Search Box */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transaction/user..."
            className="w-full glass-input text-xs rounded-xl pl-10 pr-4 py-2 border border-slate-800 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Risk Filter */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Risk:</span>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-slate-800 focus:border-cyan-500 text-slate-200 bg-slate-900 cursor-pointer"
            >
              <option value="ALL">All Risks</option>
              <option value="HIGH">High Risk (🔴)</option>
              <option value="MEDIUM">Medium Risk (🟡)</option>
              <option value="LOW">Low Risk (🟢)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-slate-800 focus:border-cyan-500 text-slate-200 bg-slate-900 cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="APPROVED">Approved</option>
              <option value="REVIEW">Review</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-slate-800 focus:border-cyan-500 text-slate-200 bg-slate-900 cursor-pointer"
            >
              <option value="DEFAULT">Default Order</option>
              <option value="RISK_HIGH">Highest Risk First</option>
              <option value="RISK_LOW">Lowest Risk First</option>
              <option value="AMOUNT_HIGH">Highest Amount First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs flex items-center justify-center gap-2 font-mono">
          <RefreshCw className="w-4 h-4 animate-spin" />
          Loading transactions from FastAPI / Supabase...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </span>
        </div>
      )}

      {/* Main Interactive Table */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4">USER</th>
                <th className="py-3.5 px-4">AMOUNT</th>
                <th className="py-3.5 px-4">LOCATION</th>
                <th className="py-3.5 px-4">RISK</th>
                <th className="py-3.5 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filtered.length > 0 ? (
                filtered.map((txn, idx) => {
                  const score = txn.riskScore ?? txn.risk_score ?? 10;
                  const isHigh = score >= 71 || (txn.riskLevel || '').toUpperCase() === 'HIGH';
                  const isMedium = (score >= 31 && score < 71) || (txn.riskLevel || '').toUpperCase() === 'MEDIUM';
                  const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';

                  return (
                    <tr 
                      key={txn.id || txn.transaction_id || idx} 
                      onClick={() => setSelectedTxn(txn)}
                      className="hover:bg-slate-800/50 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4 text-cyan-400 font-bold group-hover:underline">
                        {txn.id || txn.transaction_id}
                      </td>
                      <td className="py-4 px-4 text-white font-sans font-semibold">
                        {txn.user || txn.user_id}
                      </td>
                      <td className="py-4 px-4 font-bold text-slate-100">
                        {txn.amount || `₹${(txn.amountNum || 0).toLocaleString()}`}
                      </td>
                      <td className="py-4 px-4 font-sans text-slate-300">
                        {txn.location || 'Delhi'}
                      </td>
                      <td className="py-4 px-4 font-bold">
                        <span className="flex items-center gap-1.5">
                          <span>{riskDot}</span>
                          <span className={isHigh ? 'text-rose-400' : isMedium ? 'text-amber-400' : 'text-emerald-400'}>
                            {Math.round(score)}
                          </span>
                        </span>
                      </td>
                      <td className="py-4 px-4 font-sans">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          (txn.status || '').toLowerCase() === 'approved' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {txn.status || 'Approved'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                /* Empty State */
                <tr>
                  <td colSpan="6" className="py-8 text-center text-slate-500 font-sans text-xs">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="p-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>Showing <strong className="text-white">{filtered.length}</strong> transactions</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg glass-card text-slate-400 hover:text-white disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-slate-300">Page 1 of 1</span>
            <button className="p-1.5 rounded-lg glass-card text-slate-400 hover:text-white disabled:opacity-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Transaction Details Modal Drawer */}
      {selectedTxn && (
        <TransactionDetails 
          transaction={selectedTxn} 
          onClose={() => setSelectedTxn(null)} 
        />
      )}
    </div>
  );
};

export default Transactions;
