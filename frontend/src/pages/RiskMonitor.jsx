import React, { useState, useEffect } from 'react';
import { Activity, Play, Pause, Zap, Send, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import TransactionDetails from '../components/TransactionDetails';
import { apiService } from '../services/api';

export const RiskMonitor = ({ onNewHighRiskAlert }) => {
  const [isSimulating, setIsSimulating] = useState(true);
  const [selectedTxn, setSelectedTxn] = useState(null);
  
  // Custom Transaction Form State
  const [userId, setUserId] = useState('U1842');
  const [amount, setAmount] = useState('48500');
  const [hour, setHour] = useState('3');
  const [location, setLocation] = useState('Mumbai');
  const [device, setDevice] = useState('New Device');
  
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);

  const [liveMetrics, setLiveMetrics] = useState({
    rate: 128,
    highRiskCount: 143,
    mediumRiskCount: 312,
    lowRiskCount: 12027
  });

  const [liveStream, setLiveStream] = useState([
    {
      id: "TX1010",
      user: "U1842",
      amount: "₹48,500",
      amountNum: 48500,
      location: "Mumbai",
      device: "New Device",
      time: "03:17 AM",
      riskScore: 91,
      riskLevel: "HIGH",
      status: "Review",
      reasons: [
        { type: "critical", title: "Unusually high transaction amount", desc: "17.3× higher than normal baseline" },
        { type: "critical", title: "New device detected", desc: "Unrecognized device hardware" },
        { type: "warning", title: "Transaction occurred outside normal hours", desc: "Executed at 03:17 AM" },
        { type: "warning", title: "Location differs from usual location", desc: "Logged in Mumbai (home base: Delhi)" }
      ]
    },
    {
      id: "TX1009",
      user: "U1023",
      amount: "₹8,500",
      amountNum: 8500,
      location: "Mumbai",
      device: "Trusted",
      time: "11:04 AM",
      riskScore: 48,
      riskLevel: "MEDIUM",
      status: "Approved",
      reasons: [{ type: "warning", title: "Elevated transaction amount", desc: "Slight deviation from average" }]
    },
    {
      id: "TX1008",
      user: "U1842",
      amount: "₹1,200",
      amountNum: 1200,
      location: "Delhi",
      device: "Trusted",
      time: "10:32 AM",
      riskScore: 14,
      riskLevel: "LOW",
      status: "Approved",
      reasons: [{ type: "normal", title: "Normal transaction pattern", desc: "Aligned with historical baseline" }]
    }
  ]);

  const [chartData] = useState([
    { time: '11:40', high: 4, medium: 12, low: 45 },
    { time: '11:41', high: 3, medium: 15, low: 52 },
    { time: '11:42', high: 8, medium: 18, low: 48 },
    { time: '11:43', high: 6, medium: 14, low: 58 },
    { time: '11:44', high: 14, medium: 22, low: 62 },
  ]);

  // Demo Presets
  const applyPreset = (scenario) => {
    setApiError(null);
    if (scenario === 1) {
      setUserId('U1842');
      setAmount('2500');
      setHour('14');
      setLocation('Delhi');
      setDevice('Trusted Device');
    } else if (scenario === 2) {
      setUserId('U1842');
      setAmount('12000');
      setHour('23');
      setLocation('Delhi');
      setDevice('Trusted Device');
    } else if (scenario === 3) {
      setUserId('U1842');
      setAmount('48500');
      setHour('3');
      setLocation('Mumbai');
      setDevice('New Device');
    }
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setApiError(null);

    const payload = {
      user_id: userId,
      amount: parseFloat(amount) || 0,
      transaction_hour: parseInt(hour, 10) || 14,
      location: location,
      device: device,
      merchant_category: "electronics"
    };

    try {
      const res = await apiService.predictFraudRisk(payload);
      if (res) {
        const formattedTxn = {
          id: res.transaction_id,
          user: res.user_id,
          amount: `₹${parseFloat(res.amount).toLocaleString()}`,
          amountNum: res.amount,
          location: location,
          device: device,
          time: `${hour.padStart(2, '0')}:00`,
          riskScore: res.risk_score,
          riskLevel: res.risk_level,
          status: res.risk_level === 'HIGH' ? 'Review' : 'Approved',
          reasons: res.reasons,
          deviation_breakdown: res.deviation_breakdown,
          ai_summary: res.ai_summary,
          user_normal_behaviour: res.user_normal_behaviour,
          comparison: res.comparison
        };

        setLiveStream((prev) => [formattedTxn, ...prev.slice(0, 9)]);
        
        setLiveMetrics((prev) => ({
          ...prev,
          highRiskCount: res.risk_level === 'HIGH' ? prev.highRiskCount + 1 : prev.highRiskCount,
          mediumRiskCount: res.risk_level === 'MEDIUM' ? prev.mediumRiskCount + 1 : prev.mediumRiskCount,
          lowRiskCount: res.risk_level === 'LOW' ? prev.lowRiskCount + 1 : prev.lowRiskCount
        }));

        if (res.risk_level === 'HIGH' && onNewHighRiskAlert) {
          onNewHighRiskAlert(formattedTxn);
        }

        setSelectedTxn(formattedTxn);
      } else {
        setApiError('Unable to analyze transaction. Please try again.');
      }
    } catch (err) {
      setApiError('Unable to analyze transaction. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      const scores = [12, 18, 25, 42, 88];
      const randomScore = scores[Math.floor(Math.random() * scores.length)];
      const isHigh = randomScore >= 71;
      const isMedium = randomScore >= 31 && randomScore < 71;
      const idNum = Math.floor(Math.random() * 900) + 1000;

      const autoTxn = {
        id: `TX${idNum}`,
        user: "U1842",
        amount: `₹${(Math.floor(Math.random() * 50) * 100 + 1200).toLocaleString()}`,
        amountNum: 2500,
        location: isHigh ? "Mumbai" : "Delhi",
        device: isHigh ? "New Device" : "Trusted",
        time: "Just now",
        riskScore: randomScore,
        riskLevel: isHigh ? "HIGH" : isMedium ? "MEDIUM" : "LOW",
        status: isHigh ? "Review" : "Approved",
        reasons: isHigh 
          ? [{ type: "critical", title: "Unusually high transaction amount", desc: "Deviates from baseline" }]
          : [{ type: "normal", title: "Normal transaction pattern", desc: "Routine activity" }]
      };

      setLiveStream((prev) => [autoTxn, ...prev.slice(0, 9)]);
    }, 4500);

    return () => clearInterval(interval);
  }, [isSimulating]);

  return (
    <div className="space-y-6 pb-8 text-[#3D3328]">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl glass-card border border-[#E8DEC9] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FFFDF9]">
        <div>
          <h1 className="text-xl font-extrabold text-[#251E17] tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#D96B43] animate-pulse" />
            Live Risk Monitor
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#7F6F59] mt-1">
            <span className="flex items-center gap-1.5 font-bold font-mono text-[#3B7A57]">
              <span className="w-2 h-2 rounded-full bg-[#3B7A57] animate-ping"></span>
              ● LIVE
            </span>
            <span>• Monitoring incoming transactions | Last updated: Just now</span>
          </div>
        </div>

        <button
          onClick={() => setIsSimulating(!isSimulating)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            isSimulating
              ? 'bg-[#FDF0ED] text-[#C94A29] border border-[#F4C5B9] hover:bg-[#FBE6DD]'
              : 'bg-[#EFF7F2] text-[#1B5233] border border-[#C6E6D2] hover:bg-[#E3F2E7]'
          }`}
        >
          {isSimulating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isSimulating ? 'Pause Auto Stream' : 'Resume Auto Stream'}</span>
        </button>
      </div>

      {/* 4 Live KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-[#E8DEC9] bg-[#FFFDF9]">
          <span className="text-[10px] font-extrabold text-[#D96B43] uppercase tracking-wider block">LIVE Rate</span>
          <p className="text-3xl font-extrabold font-mono text-[#251E17] mt-1">{liveMetrics.rate} <span className="text-xs font-sans text-[#7F6F59] font-normal">/ min</span></p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-[#F4C5B9] bg-[#FDF0ED]">
          <span className="text-[10px] font-extrabold text-[#C94A29] uppercase tracking-wider block">HIGH RISK 🔴</span>
          <p className="text-3xl font-extrabold font-mono text-[#C94A29] mt-1">{liveMetrics.highRiskCount}</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-[#F5E2B8] bg-[#FDF7EA]">
          <span className="text-[10px] font-extrabold text-[#8A5608] uppercase tracking-wider block">MEDIUM RISK 🟡</span>
          <p className="text-3xl font-extrabold font-mono text-[#8A5608] mt-1">{liveMetrics.mediumRiskCount}</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-[#C6E6D2] bg-[#EFF7F2]">
          <span className="text-[10px] font-extrabold text-[#1B5233] uppercase tracking-wider block">LOW RISK 🟢</span>
          <p className="text-3xl font-extrabold font-mono text-[#1B5233] mt-1">{liveMetrics.lowRiskCount}</p>
        </div>
      </div>

      {/* Demo Control Panel & Live Prediction Form */}
      <div className="p-5 rounded-2xl glass-card border border-[#E8DEC9] bg-[#FFFDF9] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EFE6D7] pb-3">
          <div>
            <h3 className="text-sm font-extrabold text-[#251E17] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#D96B43]" />
              TEST COMPLETE PREDICTION FLOW (ML + BEHAVIOUR ENGINE)
            </h3>
            <p className="text-xs text-[#7F6F59] mt-0.5">Select a demo scenario or enter custom transaction parameters to test FastAPI prediction endpoint.</p>
          </div>

          {/* Quick Demo Presets */}
          <div className="flex items-center gap-2 pt-1 sm:pt-0">
            <button
              onClick={() => applyPreset(1)}
              className="px-2.5 py-1.5 rounded-xl bg-[#EFF7F2] hover:bg-[#E3F2E7] border border-[#C6E6D2] text-[#1B5233] text-xs font-bold transition-all"
            >
              🟢 Scenario 1 (Normal)
            </button>
            <button
              onClick={() => applyPreset(2)}
              className="px-2.5 py-1.5 rounded-xl bg-[#FDF7EA] hover:bg-[#F7EBD3] border border-[#F5E2B8] text-[#8A5608] text-xs font-bold transition-all"
            >
              🟡 Scenario 2 (Suspicious)
            </button>
            <button
              onClick={() => applyPreset(3)}
              className="px-2.5 py-1.5 rounded-xl bg-[#FDF0ED] hover:bg-[#FBE6DD] border border-[#F4C5B9] text-[#C94A29] text-xs font-bold transition-all"
            >
              🔴 Scenario 3 (Unusual)
            </button>
          </div>
        </div>

        {/* Prediction Form */}
        <form onSubmit={handlePredict} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div>
            <label className="text-[#8C7D70] text-[10px] font-extrabold uppercase block mb-1">User ID</label>
            <input 
              type="text" 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
              className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-[#E1D5C2] text-[#251E17] bg-[#F5EFE4] font-mono font-bold" 
              required 
            />
          </div>

          <div>
            <label className="text-[#8C7D70] text-[10px] font-extrabold uppercase block mb-1">Amount (₹)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-[#E1D5C2] text-[#3B7A57] bg-[#F5EFE4] font-mono font-bold" 
              required 
            />
          </div>

          <div>
            <label className="text-[#8C7D70] text-[10px] font-extrabold uppercase block mb-1">Time (Hour 0-23)</label>
            <input 
              type="number" 
              min="0"
              max="23"
              value={hour} 
              onChange={(e) => setHour(e.target.value)} 
              className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-[#E1D5C2] text-[#251E17] bg-[#F5EFE4] font-mono font-bold" 
              required 
            />
          </div>

          <div>
            <label className="text-[#8C7D70] text-[10px] font-extrabold uppercase block mb-1">Location</label>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-[#E1D5C2] text-[#251E17] bg-[#F5EFE4] font-semibold" 
              required 
            />
          </div>

          <div>
            <label className="text-[#8C7D70] text-[10px] font-extrabold uppercase block mb-1">Device</label>
            <input 
              type="text" 
              value={device} 
              onChange={(e) => setDevice(e.target.value)} 
              className="w-full glass-input text-xs rounded-xl px-3 py-2 border border-[#E1D5C2] text-[#251E17] bg-[#F5EFE4] font-semibold" 
              required 
            />
          </div>

          <div className="col-span-2 sm:col-span-1 flex items-end">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2 px-4 rounded-xl bg-[#3E3128] hover:bg-[#2A2019] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-glow-warm disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#DCBC79]" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-[#DCBC79]" />
                  Predict Fraud Risk
                </>
              )}
            </button>
          </div>
        </form>

        {apiError && (
          <div className="p-3 rounded-xl bg-[#FDF0ED] border border-[#F4C5B9] text-[#7A200B] text-xs flex items-center gap-2 font-medium">
            <AlertTriangle className="w-4 h-4 text-[#C94A29]" />
            {apiError}
          </div>
        )}
      </div>

      {/* Main Grid: LIVE TRANSACTION ACTIVITY FEED + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Feed Stream */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-extrabold text-[#8C7D70] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#D96B43]" />
              LIVE TRANSACTION ACTIVITY
            </h3>
            <span className="text-[11px] text-[#7F6F59] font-mono">Click row for Behaviour Analysis</span>
          </div>

          <div className="glass-card rounded-2xl border border-[#E8DEC9] overflow-hidden bg-[#FFFDF9]">
            <div className="divide-y divide-[#EFE6D7]">
              {liveStream.length > 0 ? (
                liveStream.map((txn, index) => {
                  const isHigh = txn.riskLevel === 'HIGH' || txn.riskScore >= 71;
                  const isMedium = txn.riskLevel === 'MEDIUM' || (txn.riskScore >= 31 && txn.riskScore < 71);
                  const dotColor = isHigh ? 'bg-[#C94A29]' : isMedium ? 'bg-[#C9862B]' : 'bg-[#3B7A57]';
                  const badgeClass = isHigh 
                    ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' 
                    : isMedium 
                    ? 'bg-[#FDF7EA] text-[#8A5608] border-[#F5E2B8]' 
                    : 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]';

                  return (
                    <div 
                      key={`${txn.id}-${index}`}
                      onClick={() => setSelectedTxn(txn)}
                      className="p-4 hover:bg-[#F5EFE4]/80 transition-colors cursor-pointer flex flex-wrap items-center justify-between gap-3 group"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${dotColor} ${isHigh ? 'animate-ping' : ''}`} />
                        <div>
                          <div className="flex items-center gap-2 font-mono">
                            <span className="font-bold text-[#251E17] group-hover:text-[#D96B43] transition-colors text-xs">{txn.id}</span>
                            <span className="text-[#7F6F59] text-xs font-sans">({txn.user})</span>
                          </div>
                          <div className="text-[11px] text-[#7F6F59] font-sans mt-0.5">
                            {txn.location} • {txn.device || 'Trusted Device'}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 font-mono text-xs">
                        <span className="font-bold text-[#251E17] text-sm">{txn.amount}</span>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${badgeClass}`}>
                          {txn.riskLevel || (isHigh ? 'HIGH' : isMedium ? 'MEDIUM' : 'LOW')} ({Math.round(txn.riskScore)})
                        </span>
                        <span className="text-[11px] text-[#8C7D70] font-sans">{txn.time || '10:32 AM'}</span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-xs text-[#8C7D70] font-sans">
                  No transaction activity logged yet.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Risk Activity Chart */}
        <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between h-[420px] bg-[#FFFDF9]">
          <div>
            <h3 className="text-xs font-extrabold text-[#8C7D70] uppercase tracking-wider mb-1">Risk Volume Trend 📈</h3>
            <p className="text-xs text-[#7F6F59]">Live high-risk transaction distribution</p>
          </div>

          <div className="h-60 w-full my-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="highGradLive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C94A29" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#C94A29" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#8C7D70" fontSize={11} tickLine={false} />
                <YAxis stroke="#8C7D70" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={{ background: '#FFFDF9', borderRadius: '14px', border: '1px solid #E8DEC9', color: '#251E17' }} />
                <Area type="monotone" dataKey="high" name="High Risk" stroke="#C94A29" strokeWidth={2.5} fillOpacity={1} fill="url(#highGradLive)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-[#EFE6D7] text-xs text-[#7F6F59] flex items-center justify-between">
            <span>Status: <strong className="text-[#3B7A57]">Model Online</strong></span>
            <span className="font-mono text-[#D96B43] font-bold">FastAPI Connected</span>
          </div>
        </div>
      </div>

      {/* Transaction Inspection Modal */}
      {selectedTxn && (
        <TransactionDetails 
          transaction={selectedTxn} 
          onClose={() => setSelectedTxn(null)} 
        />
      )}
    </div>
  );
};

export default RiskMonitor;
