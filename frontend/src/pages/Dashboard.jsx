import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import RiskChart from '../components/RiskChart';
import TransactionTable from '../components/TransactionTable';
import { apiService } from '../services/api';
import { RefreshCw, AlertCircle } from 'lucide-react';

export const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSummary = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getDashboardSummary();
      if (data) {
        setStats(data);
      } else {
        // Fallback default structure matching dataset (2,000 transactions)
        setStats({
          totalTransactions: { title: 'Transactions', value: '2,000', change: '+12.4%', isPositive: true, subtext: 'Total processed' },
          highRiskTransactions: { title: 'High Risk', value: '63', change: '+8.7%', isPositive: false, subtext: 'Flagged anomalies' },
          avgRisk: { title: 'Avg Risk', value: '10.1', change: '-1.8 pts', isPositive: true, subtext: 'System Risk Index' },
          alerts: { title: 'Alerts', value: '63', change: '+5', isPositive: false, subtext: 'Pending review' }
        });
      }
    } catch (err) {
      setError('Unable to fetch live dashboard summary.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const cardList = stats ? [
    {
      title: stats.totalTransactions?.title || 'Transactions',
      value: stats.totalTransactions?.value || '2,000',
      subtext: stats.totalTransactions?.subtext || 'Total processed',
      isPositive: stats.totalTransactions?.isPositive ?? true,
      color: 'cyan'
    },
    {
      title: stats.highRiskTransactions?.title || 'High Risk',
      value: stats.highRiskTransactions?.value || '63',
      subtext: stats.highRiskTransactions?.subtext || 'Flagged anomalies',
      isPositive: stats.highRiskTransactions?.isPositive ?? false,
      color: 'rose'
    },
    {
      title: stats.avgRisk?.title || 'Avg Risk',
      value: stats.avgRisk?.value || '10.1',
      subtext: stats.avgRisk?.subtext || 'System Risk Index',
      isPositive: stats.avgRisk?.isPositive ?? true,
      color: 'amber'
    },
    {
      title: stats.alerts?.title || 'Alerts',
      value: stats.alerts?.value || '63',
      subtext: stats.alerts?.subtext || 'Pending review',
      isPositive: stats.alerts?.isPositive ?? false,
      color: 'purple'
    }
  ] : [];

  return (
    <div className="space-y-6 pb-8">
      {/* Loading Bar Banner */}
      {loading && (
        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Analyzing live database statistics...
          </span>
        </div>
      )}

      {/* Error State Notice */}
      {error && (
        <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </span>
          <button onClick={fetchSummary} className="px-2 py-1 rounded bg-rose-900/60 hover:bg-rose-800 text-[11px] text-white">
            Retry
          </button>
        </div>
      )}

      {/* 4 Stat Cards (Milestone 10.4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cardList.map((card) => (
          <StatCard
            key={card.title}
            title={card.title}
            value={card.value}
            subtext={card.subtext}
            isPositive={card.isPositive}
            color={card.color}
          />
        ))}
      </div>

      {/* Risk Overview & Donut Charts */}
      <RiskChart 
        donutData={stats?.riskDonutData}
        trendData={stats?.risk7DayTrendData}
      />

      {/* Transaction Table */}
      <TransactionTable />
    </div>
  );
};

export default Dashboard;
