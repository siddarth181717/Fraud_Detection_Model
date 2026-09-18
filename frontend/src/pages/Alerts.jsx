import React, { useState, useEffect } from 'react';
import { Bell, RefreshCw, AlertCircle } from 'lucide-react';
import AlertCard from '../components/AlertCard';
import TransactionDetails from '../components/TransactionDetails';
import { apiService } from '../services/api';

export const Alerts = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedTxn, setSelectedTxn] = useState(null);
  const [alertsList, setAlertsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlertsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiService.getAlerts();
      if (data && data.length > 0) {
        setAlertsList(data);
      } else {
        setAlertsList([
          {
            id: "TX1010",
            user: "U1842",
            amount: "₹48,500",
            amountNum: 48500,
            location: "Mumbai",
            device: "New Device",
            time: "2 mins ago",
            timeDetails: "03:17 AM",
            riskScore: 91,
            riskLevel: "HIGH",
            severity: "HIGH",
            status: "Unresolved",
            reasons: [
              "New device",
              "Location deviation",
              "Unusual amount"
            ],
            behaviour: {
              normalAmount: "₹2,800",
              amountComparison: "⚠️ 17.3× higher",
              normalTime: "10 AM – 9 PM",
              timeComparison: "⚠️ Unusual",
              normalLocation: "Delhi",
              locationComparison: "⚠️ Location change",
              normalDevice: "Trusted (2)",
              deviceComparison: "⚠️ New device"
            }
          },
          {
            id: "TX1009",
            user: "U1023",
            amount: "₹8,500",
            amountNum: 8500,
            location: "Mumbai",
            device: "Trusted",
            time: "12 mins ago",
            timeDetails: "11:04 AM",
            riskScore: 48,
            riskLevel: "MEDIUM",
            severity: "MEDIUM",
            status: "Unresolved",
            reasons: [
              "Elevated amount",
              "Cross-city activity"
            ]
          },
          {
            id: "TX1005",
            user: "U3091",
            amount: "₹1,25,000",
            amountNum: 125000,
            location: "Bengaluru",
            device: "Proxy / VPN",
            time: "25 mins ago",
            timeDetails: "11:05 PM",
            riskScore: 94,
            riskLevel: "HIGH",
            severity: "HIGH",
            status: "Unresolved",
            reasons: [
              "Massive amount spike",
              "VPN / Proxy detected",
              "Off-peak execution"
            ]
          }
        ]);
      }
    } catch (err) {
      setError('Unable to fetch alerts from backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlertsData();
  }, []);

  const filteredAlerts = alertsList.filter((a) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'UNRESOLVED') return (a.status || '').toLowerCase() === 'unresolved';
    const lvl = (a.riskLevel || a.severity || '').toUpperCase();
    return lvl === activeTab.toUpperCase();
  });

  return (
    <div className="space-y-6 pb-8 text-[#3D3328]">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl glass-card border border-[#F4C5B9] bg-gradient-to-r from-[#FDF0ED] via-[#FFFDF9] to-[#FFFDF9] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#FDF0ED] text-[#C94A29] border border-[#F4C5B9]">
            <Bell className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-[#251E17] tracking-tight">Fraud Risk Alerts</h1>
            <p className="text-xs text-[#7F6F59]">Security triage queue for flagged high-risk transaction anomalies.</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F5EFE4] p-1.5 rounded-xl border border-[#E1D5C2] text-xs font-mono">
          {['ALL', 'HIGH', 'MEDIUM', 'LOW', 'UNRESOLVED'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#D96B43] text-white shadow-sm'
                  : 'text-[#7F6F59] hover:text-[#251E17]'
              }`}
            >
              {tab === 'UNRESOLVED' ? 'Unresolved' : tab}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="p-4 rounded-2xl bg-[#FAF0EB] border border-[#E67B5E]/30 text-[#C5542E] text-xs flex items-center justify-center gap-2 font-mono">
          <RefreshCw className="w-4 h-4 animate-spin text-[#D96B43]" />
          Fetching security alerts from database...
        </div>
      )}

      {error && (
        <div className="p-4 rounded-2xl bg-[#FDF0ED] border border-[#F4C5B9] text-[#7A200B] text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C94A29]" />
            {error}
          </span>
          <button onClick={fetchAlertsData} className="px-3 py-1 rounded-xl bg-[#C94A29] hover:bg-[#A82C10] text-xs font-bold text-white">
            Retry
          </button>
        </div>
      )}

      {/* Alert Cards List */}
      <div className="space-y-5">
        {!loading && filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert, idx) => (
            <AlertCard 
              key={alert.id || idx} 
              alert={alert} 
              onInvestigate={(a) => setSelectedTxn(a)} 
            />
          ))
        ) : !loading ? (
          <div className="p-8 text-center glass-card rounded-2xl border border-[#E8DEC9] text-xs text-[#8C7D70]">
            No suspicious transactions found for selected filter tab.
          </div>
        ) : null}
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

export default Alerts;

