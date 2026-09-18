import React, { useEffect, useState } from 'react';
import { Search, Download, RefreshCw, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import TransactionDetails from '../components/TransactionDetails';
import { apiService } from '../services/api';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  // Selected Transaction for Drawer Modal
  const [selectedTxn, setSelectedTxn] = useState(null);

  useEffect(() => {
    const fetchTxns = async () => {
      setLoading(true);
      try {
        const data = await apiService.getTransactions();
        if (Array.isArray(data) && data.length > 0) {
          setTransactions(data);
        }
      } catch (err) {
        setError('Unable to fetch live transactions.');
      } finally {
        setLoading(false);
      }
    };

    fetchTxns();
  }, []);

  // Filter Logic
  const filtered = transactions.filter((t) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      (t.id || t.transaction_id || '').toLowerCase().includes(q) ||
      (t.user || t.user_id || '').toLowerCase().includes(q) ||
      (t.location || '').toLowerCase().includes(q);

    const score = t.riskScore ?? t.risk_score ?? 10;
    const isHigh = score >= 71 || (t.riskLevel || '').toUpperCase() === 'HIGH';
    const isMedium = (score >= 31 && score < 71) || (t.riskLevel || '').toUpperCase() === 'MEDIUM';
    const isLow = score < 31 || (t.riskLevel || '').toUpperCase() === 'LOW';

    let matchesRisk = true;
    if (riskFilter === 'HIGH') matchesRisk = isHigh;
    if (riskFilter === 'MEDIUM') matchesRisk = isMedium;
    if (riskFilter === 'LOW') matchesRisk = isLow;

    let matchesStatus = true;
    if (statusFilter !== 'ALL') {
      matchesStatus = (t.status || '').toUpperCase() === statusFilter.toUpperCase();
    }

    return matchesSearch && matchesRisk && matchesStatus;
  });

  // Sort Logic
  if (sortBy === 'RISK_HIGH') {
    filtered.sort((a, b) => (b.riskScore ?? b.risk_score ?? 0) - (a.riskScore ?? a.risk_score ?? 0));
  } else if (sortBy === 'RISK_LOW') {
    filtered.sort((a, b) => (a.riskScore ?? a.risk_score ?? 0) - (b.riskScore ?? b.risk_score ?? 0));
  } else if (sortBy === 'AMOUNT_HIGH') {
    filtered.sort((a, b) => (b.amountNum || 0) - (a.amountNum || 0));
  }

  // Pagination Logic
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = Math.min(startIdx + pageSize, filtered.length);
  const paginatedItems = filtered.slice(startIdx, endIdx);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="space-y-6 pb-8 text-[#34291D]">
      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-[#231B12] tracking-tight">TRANSACTIONS</h1>
          <p className="text-xs text-[#6E5C44] mt-0.5">Filter, search, and inspect individual transaction behaviour across dataset.</p>
        </div>

        <button 
          onClick={() => alert("Exporting transaction dataset...")}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#3E3128] hover:bg-[#2A2019] text-white text-xs font-bold transition-all shadow-glow-warm self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-[#DCBC79]" />
          <span>Export Dataset</span>
        </button>
      </div>

      {/* Control Filters Bar */}
      <div className="p-4 rounded-2xl glass-card border border-[#E6DEC8] flex flex-wrap items-center justify-between gap-4 bg-[#FFFDF8]">
        {/* Search Box */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-[#948060] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transaction/user..."
            className="w-full glass-input text-xs rounded-xl pl-10 pr-4 py-2 border border-[#DFD4BD] focus:border-[#B58A43] text-[#231B12] placeholder-[#948060]"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Risk Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#6E5C44] font-medium">
            <span>Risk:</span>
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#DFD4BD] text-[#231B12] bg-[#EFE7DA] cursor-pointer font-bold"
            >
              <option value="ALL">All Risks</option>
              <option value="HIGH">High Risk (🔴)</option>
              <option value="MEDIUM">Medium Risk (🟡)</option>
              <option value="LOW">Low Risk (🟢)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#6E5C44] font-medium">
            <span>Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#DFD4BD] text-[#231B12] bg-[#EFE7DA] cursor-pointer font-bold"
            >
              <option value="ALL">All Statuses</option>
              <option value="APPROVED">Approved</option>
              <option value="REVIEW">Review</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 text-xs text-[#6E5C44] font-medium">
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#DFD4BD] text-[#231B12] bg-[#EFE7DA] cursor-pointer font-bold"
            >
              <option value="DEFAULT">Default Order</option>
              <option value="RISK_HIGH">Highest Risk First</option>
              <option value="RISK_LOW">Lowest Risk First</option>
              <option value="AMOUNT_HIGH">Highest Amount First</option>
            </select>
          </div>

          {/* Rows Per Page */}
          <div className="flex items-center gap-1.5 text-xs text-[#6E5C44]">
            <span>Per Page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="glass-input text-xs rounded-xl px-3 py-1.5 border border-[#DFD4BD] text-[#231B12] bg-[#EFE7DA] cursor-pointer font-bold"
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
        <div className="p-3.5 rounded-2xl bg-[#EFE7DA] border border-[#DFD4BD] text-[#3E3128] text-xs flex items-center justify-center gap-2 font-mono font-medium">
          <RefreshCw className="w-4 h-4 animate-spin text-[#B58A43]" />
          Loading transactions from database...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            {error}
          </span>
        </div>
      )}

      {/* Main Interactive Table */}
      <div className="glass-card rounded-2xl border border-[#E6DEC8] overflow-hidden bg-[#FFFDF8]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#34291D]">
            <thead className="bg-[#FAF5EA] text-[#6E5C44] font-extrabold uppercase tracking-wider text-[10px] border-b border-[#E6DEC8]">
              <tr>
                <th className="py-3.5 px-4">ID</th>
                <th className="py-3.5 px-4">USER</th>
                <th className="py-3.5 px-4">AMOUNT</th>
                <th className="py-3.5 px-4">LOCATION</th>
                <th className="py-3.5 px-4">RISK SCORE</th>
                <th className="py-3.5 px-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE7DA] font-mono">
              {paginatedItems.length > 0 ? (
                paginatedItems.map((txn, idx) => {
                  const score = txn.riskScore ?? txn.risk_score ?? 10;
                  const isHigh = score >= 71 || (txn.riskLevel || '').toUpperCase() === 'HIGH';
                  const isMedium = (score >= 31 && score < 71) || (txn.riskLevel || '').toUpperCase() === 'MEDIUM';
                  const riskDot = isHigh ? '🔴' : isMedium ? '🟡' : '🟢';

                  const userInitials = (txn.user || txn.user_id || 'U1').replace('-', '').slice(0, 3);
                  const avatarBg = isHigh ? 'bg-rose-50 text-rose-800 border-rose-200' : isMedium ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-emerald-50 text-emerald-800 border-emerald-200';

                  return (
                    <tr 
                      key={txn.id || txn.transaction_id || idx} 
                      onClick={() => setSelectedTxn(txn)}
                      className="hover:bg-[#FAF5EA] transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4 text-[#B58A43] font-bold group-hover:underline">
                        {txn.id || txn.transaction_id}
                      </td>
                      <td className="py-4 px-4 font-sans font-semibold text-[#231B12]">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold border ${avatarBg}`}>
                            {userInitials}
                          </div>
                          <span>{txn.user || txn.user_id}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-bold text-[#231B12]">
                        {txn.amount || `₹${(txn.amountNum || 0).toLocaleString()}`}
                      </td>
                      <td className="py-4 px-4 font-sans text-[#4D3E2D]">
                        {txn.location || 'Delhi'}
                      </td>
                      <td className="py-4 px-4 font-bold">
                        <span className="flex items-center gap-1.5">
                          <span>{riskDot}</span>
                          <span className={isHigh ? 'text-rose-700' : isMedium ? 'text-amber-800' : 'text-emerald-700'}>
                            {Math.round(score)}
                          </span>
                        </span>
                      </td>
                      <td className="py-4 px-4 font-sans">
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
                })
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-[#948060] font-sans text-xs">
                    No transactions found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Dynamic Pagination Controls */}
        <div className="p-4 border-t border-[#EFE7DA] flex flex-wrap items-center justify-between gap-4 text-xs text-[#6E5C44]">
          <span>
            Showing <strong className="text-[#231B12]">{filtered.length > 0 ? startIdx + 1 : 0}–{endIdx}</strong> of <strong className="text-[#231B12]">{filtered.length.toLocaleString()}</strong> transactions
          </span>
          
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2.5 py-1.5 rounded-xl bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#34291D] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 font-medium transition-colors border border-[#DFD4BD]"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <div className="flex items-center gap-1 font-mono">
              {getPageNumbers().map((page, idx) => (
                page === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-1.5 text-[#948060] select-none">...</span>
                ) : (
                  <button
                    key={`page-${page}`}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      currentPage === page
                        ? 'bg-[#3E3128] text-white shadow-md border border-[#231B12] scale-105'
                        : 'bg-[#EFE7DA] border border-[#DFD4BD] text-[#4D3E2D] hover:text-[#231B12] hover:bg-[#DFD4BD]'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2.5 py-1.5 rounded-xl bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#34291D] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 font-medium transition-colors border border-[#DFD4BD]"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
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
