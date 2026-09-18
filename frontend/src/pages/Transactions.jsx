import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight, RefreshCw, AlertCircle, Filter, ArrowUpDown, Download } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
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

  // Reset to page 1 on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, riskFilter, statusFilter, sortBy, pageSize]);

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

  // Pagination Math
  const totalPages = Math.max(Math.ceil(filtered.length / pageSize), 1);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filtered.length);
  const paginatedItems = filtered.slice(startIdx, endIdx);

  // Helper to generate dynamic page number list with ellipsis
  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [];
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="space-y-6 pb-8 text-[#3D3328]">
      {/* Header Title */}
<<<<<<< HEAD
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-[#251E17] tracking-tight">TRANSACTIONS</h1>
          <p className="text-xs text-[#7F6F59] mt-0.5">Filter, search, and inspect individual transaction behaviour.</p>
        </div>

        <button 
          onClick={() => alert("Exporting transaction dataset...")}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#3E3128] hover:bg-[#2A2019] text-white text-xs font-bold transition-all shadow-glow-warm self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-[#DCBC79]" />
          <span>Export Dataset</span>
        </button>
=======
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">TRANSACTIONS</h1>
        <p className="text-xs text-slate-400 mt-0.5">Filter, search, and inspect individual transaction behaviour across dataset.</p>
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
      </div>

      {/* Control Filters Bar (NexaPay Inspired) */}
      <div className="p-4 rounded-2xl glass-card border border-[#E8DEC9] flex flex-wrap items-center justify-between gap-4 bg-[#FFFDF9]">
        {/* Search Box */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-[#8C7D70] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transaction/user..."
            className="w-full glass-input text-xs rounded-xl pl-10 pr-4 py-2 border border-[#E1D5C2] focus:border-[#D96B43] text-[#251E17] placeholder-[#8C7D70]"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Risk Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#7F6F59] font-medium">
            <span>Risk:</span>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#E1D5C2] focus:border-[#D96B43] text-[#251E17] bg-[#F5EFE4] cursor-pointer font-bold"
            >
              <option value="ALL">All Risks</option>
              <option value="HIGH">High Risk (🔴)</option>
              <option value="MEDIUM">Medium Risk (🟡)</option>
              <option value="LOW">Low Risk (🟢)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#7F6F59] font-medium">
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#E1D5C2] focus:border-[#D96B43] text-[#251E17] bg-[#F5EFE4] cursor-pointer font-bold"
            >
              <option value="ALL">All Statuses</option>
              <option value="APPROVED">Approved</option>
              <option value="REVIEW">Review</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 text-xs text-[#7F6F59] font-medium">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#E1D5C2] focus:border-[#D96B43] text-[#251E17] bg-[#F5EFE4] cursor-pointer font-bold"
            >
              <option value="DEFAULT">Default Order</option>
              <option value="RISK_HIGH">Highest Risk First</option>
              <option value="RISK_LOW">Lowest Risk First</option>
              <option value="AMOUNT_HIGH">Highest Amount First</option>
            </select>
          </div>

          {/* Rows Per Page */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <span>Per Page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-slate-800 focus:border-cyan-500 text-slate-200 bg-slate-900 cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
<<<<<<< HEAD
        <div className="p-3.5 rounded-2xl bg-[#FAF0EB] border border-[#E67B5E]/30 text-[#C5542E] text-xs flex items-center justify-center gap-2 font-mono font-medium">
          <RefreshCw className="w-4 h-4 animate-spin text-[#D96B43]" />
          Loading transactions from FastAPI / Supabase...
=======
        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs flex items-center justify-center gap-2 font-mono">
          <RefreshCw className="w-4 h-4 animate-spin" />
          Loading transactions from FastAPI / Database...
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="p-3.5 rounded-2xl bg-[#FDF0ED] border border-[#F4C5B9] text-[#7A200B] text-xs flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-[#C94A29]" />
            {error}
          </span>
        </div>
      )}

      {/* Main Interactive Table */}
      <div className="glass-card rounded-2xl border border-[#E8DEC9] overflow-hidden bg-[#FFFDF9]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#3D3328]">
            <thead className="bg-[#FAF5EC] text-[#8C7D70] font-extrabold uppercase tracking-wider text-[10px] border-b border-[#E8DEC9]">
              <tr>
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4">USER</th>
                <th className="py-3.5 px-4">AMOUNT</th>
                <th className="py-3.5 px-4">LOCATION</th>
                <th className="py-3.5 px-4">RISK SCORE</th>
                <th className="py-3.5 px-4">STATUS</th>
              </tr>
            </thead>
<<<<<<< HEAD
            <tbody className="divide-y divide-[#EFE6D7] font-mono">
              {filtered.length > 0 ? (
                filtered.map((txn, idx) => {
=======
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {paginatedItems.length > 0 ? (
                paginatedItems.map((txn, idx) => {
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                  const score = txn.riskScore ?? txn.risk_score ?? 10;
                  const isHigh = score >= 71 || (txn.riskLevel || '').toUpperCase() === 'HIGH';
                  const isMedium = (score >= 31 && score < 71) || (txn.riskLevel || '').toUpperCase() === 'MEDIUM';
                  const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';

                  const userInitials = (txn.user || txn.user_id || 'U1').replace('-', '').slice(0, 3);
                  const avatarBg = isHigh ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' : isMedium ? 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]' : 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]';

                  return (
                    <tr 
                      key={txn.id || txn.transaction_id || idx} 
                      onClick={() => setSelectedTxn(txn)}
                      className="hover:bg-[#F5EFE4]/80 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4 text-[#D96B43] font-bold group-hover:underline">
                        {txn.id || txn.transaction_id}
                      </td>
                      <td className="py-4 px-4 font-sans font-semibold text-[#251E17]">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold border ${avatarBg}`}>
                            {userInitials}
                          </div>
                          <span>{txn.user || txn.user_id}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-bold text-[#251E17]">
                        {txn.amount || `₹${(txn.amountNum || 0).toLocaleString()}`}
                      </td>
                      <td className="py-4 px-4 font-sans text-[#5B4E3E]">
                        {txn.location || 'Delhi'}
                      </td>
                      <td className="py-4 px-4 font-bold">
                        <span className="flex items-center gap-1.5">
                          <span>{riskDot}</span>
                          <span className={isHigh ? 'text-[#C94A29]' : isMedium ? 'text-[#8A5608]' : 'text-[#1B5233]'}>
                            {Math.round(score)}
                          </span>
                        </span>
                      </td>
                      <td className="py-4 px-4 font-sans">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                          (txn.status || '').toLowerCase() === 'approved' 
                            ? 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]' 
                            : 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]'
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
<<<<<<< HEAD
                  <td colSpan="6" className="py-8 text-center text-[#8C7D70] font-sans text-xs">
=======
                  <td colSpan="6" className="py-8 text-center text-slate-500 font-sans text-xs">
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                    No transactions found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

<<<<<<< HEAD
        {/* Pagination Controls */}
        <div className="p-4 border-t border-[#EFE6D7] flex items-center justify-between text-xs text-[#7F6F59] font-medium">
          <span>Showing <strong className="text-[#251E17] font-bold">{filtered.length}</strong> transactions</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EAE0D0] border border-[#E1D5C2] text-[#5B4E3E] disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-[#251E17] font-bold">Page 1 of 1</span>
            <button className="p-1.5 rounded-lg bg-[#F5EFE4] hover:bg-[#EAE0D0] border border-[#E1D5C2] text-[#5B4E3E] disabled:opacity-50">
              <ChevronRight className="w-4 h-4" />
=======
        {/* Dynamic Page 1, Page 2 ... Pagination Controls */}
        <div className="p-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <span>
            Showing <strong className="text-white">{filtered.length > 0 ? startIdx + 1 : 0}–{endIdx}</strong> of <strong className="text-white">{filtered.length.toLocaleString()}</strong> transactions
          </span>
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Prev Button */}
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2.5 py-1.5 rounded-xl glass-card border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 font-medium transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            {/* Numeric Page Buttons (Page 1, Page 2, Page 3 ...) */}
            <div className="flex items-center gap-1 font-mono">
              {getPageNumbers().map((page, idx) => (
                page === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-1.5 text-slate-600 select-none">...</span>
                ) : (
                  <button
                    key={`page-${page}`}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 border border-cyan-400/50 scale-105'
                        : 'glass-card border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2.5 py-1.5 rounded-xl glass-card border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 font-medium transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
            </button>

            {/* Quick Page Jump Input */}
            <div className="flex items-center gap-1.5 ml-2 border-l border-slate-800 pl-3">
              <span className="text-slate-500 text-[11px]">Go to:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (!isNaN(val) && val >= 1 && val <= totalPages) {
                    setCurrentPage(val);
                  }
                }}
                className="w-12 glass-input text-xs text-center rounded-lg px-1 py-1 border border-slate-800 text-cyan-400 font-mono focus:border-cyan-500 bg-slate-900"
              />
            </div>
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

