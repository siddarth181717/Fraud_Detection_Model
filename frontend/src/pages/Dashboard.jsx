import React, { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import RiskChart from '../components/RiskChart';
import TransactionTable from '../components/TransactionTable';
import { apiService } from '../services/api';
import { RefreshCw, AlertCircle, AlertTriangle, ArrowRight } from 'lucide-react';

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
<<<<<<< HEAD
          totalTransactions: { title: 'Transactions', value: '12,482', change: '+12.4%', isPositive: true, subtext: 'Total processed' },
          highRiskTransactions: { title: 'High Risk', value: '143', change: '+8.7%', isPositive: false, subtext: 'Flagged anomalies' },
          avgRisk: { title: 'Avg Risk Index', value: '34.7', change: '-1.8 pts', isPositive: true, subtext: 'System Risk Index' },
          alerts: { title: 'Pending Alerts', value: '87', change: '+5', isPositive: false, subtext: 'Pending review' }
=======
          totalTransactions: { title: 'Transactions', value: '2,000', change: '+12.4%', isPositive: true, subtext: 'Total processed' },
          highRiskTransactions: { title: 'High Risk', value: '63', change: '+8.7%', isPositive: false, subtext: 'Flagged anomalies' },
          avgRisk: { title: 'Avg Risk', value: '10.1', change: '-1.8 pts', isPositive: true, subtext: 'System Risk Index' },
          alerts: { title: 'Alerts', value: '63', change: '+5', isPositive: false, subtext: 'Pending review' }
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
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
<<<<<<< HEAD
      title: stats.avgRisk?.title || 'Avg Risk Index',
      value: stats.avgRisk?.value || '34.7',
=======
      title: stats.avgRisk?.title || 'Avg Risk',
      value: stats.avgRisk?.value || '10.1',
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
      subtext: stats.avgRisk?.subtext || 'System Risk Index',
      isPositive: stats.avgRisk?.isPositive ?? true,
      color: 'amber'
    },
    {
<<<<<<< HEAD
      title: stats.alerts?.title || 'Pending Alerts',
      value: stats.alerts?.value || '87',
=======
      title: stats.alerts?.title || 'Alerts',
      value: stats.alerts?.value || '63',
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
      subtext: stats.alerts?.subtext || 'Pending review',
      isPositive: stats.alerts?.isPositive ?? false,
      color: 'rose'
    }
  ] : [];

  return (
    <div className="space-y-6 pb-8 text-[#3D3328]">
      {/* Active System Alert Banner (Orbit Reference Image Feature) */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-900 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-sm">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <span className="font-extrabold font-mono">3 active alerts</span>
            <span className="mx-2">•</span>
            <span className="font-mono text-amber-900 font-bold">fraud-detector-v3</span> is <span className="font-extrabold underline tracking-wide">ALERTING</span>
          </div>
        </div>

        <button 
          onClick={() => window.location.hash = '#alerts'}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-sm shrink-0"
        >
          View alerts <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Loading Bar Banner */}
      {loading && (
        <div className="p-3.5 rounded-2xl bg-cream-100 border border-cream-300 text-cream-800 text-xs flex items-center justify-between font-medium">
          <span className="flex items-center gap-2 font-mono">
            <RefreshCw className="w-4 h-4 animate-spin text-brand-400" />
            Analyzing live database statistics...
          </span>
        </div>
      )}

      {/* Error State Notice */}
      {error && (
        <div className="p-3.5 rounded-2xl bg-[#FDF0ED] border border-[#F4C5B9] text-[#7A200B] text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C94A29]" />
            {error}
          </span>
          <button onClick={fetchSummary} className="px-3 py-1 rounded-xl bg-[#C94A29] hover:bg-[#A82C10] text-xs font-bold text-white">
            Retry
          </button>
        </div>
      )}

      {/* 4 Stat KPI Cards */}
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

