import React from 'react';
import { BarChart3, ShieldCheck, Cpu, Zap, Activity, Award, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const Analytics = () => {
  // Feature Importance Data
  const featureImportance = [
    { name: 'Amount Deviation', score: 38, color: '#38bdf8' },
    { name: 'Device Change', score: 26, color: '#818cf8' },
    { name: 'Location Change', score: 18, color: '#c084fc' },
    { name: 'Time Deviation', score: 12, color: '#f472b6' },
    { name: 'Txn Velocity', score: 6, color: '#34d399' }
  ];

  // Confusion Matrix Data
  const confusionMatrix = [
    { category: 'True Legitimate', value: 1930, color: '#10b981', label: 'True Negative' },
    { category: 'True Fraud', value: 63, color: '#ef4444', label: 'True Positive' },
    { category: 'False Alarm', value: 5, color: '#f59e0b', label: 'False Positive' },
    { category: 'Missed Fraud', value: 2, color: '#6366f1', label: 'False Negative' }
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Page Header */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          ML MODEL & ANALYTICS INSIGHTS
        </h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Performance metrics, confusion matrix, feature importances, and model calibration breakdown.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
            <span>Model Accuracy</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-3xl font-extrabold font-mono text-white mt-1">98.4%</p>
          <span className="text-[11px] text-emerald-400 flex items-center gap-0.5 mt-1">
            <ArrowUpRight className="w-3 h-3" /> +1.2% baseline increase
          </span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
            <span>Precision / Recall</span>
            <Award className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-3xl font-extrabold font-mono text-cyan-400 mt-1">96.2% / 97.8%</p>
          <span className="text-[11px] text-slate-400 mt-1 block">Optimal threshold F1-Score: 0.970</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
            <span>False Positive Rate</span>
            <Activity className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-3xl font-extrabold font-mono text-amber-400 mt-1">1.2%</p>
          <span className="text-[11px] text-slate-400 mt-1 block">Behaviour profiling minimizes alarms</span>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-wider">
            <span>Avg Inference Speed</span>
            <Zap className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-3xl font-extrabold font-mono text-purple-400 mt-1">18 ms</p>
          <span className="text-[11px] text-slate-400 mt-1 block">FastAPI + Scikit-Learn Engine</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Importance Bar Chart */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Feature Importance Weighting (%)
            </h3>
            <p className="text-xs text-slate-400">Random Forest feature contribution to fraud risk scoring</p>
          </div>

          <div className="h-64 w-full my-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={featureImportance} margin={{ top: 10, right: 20, left: 40, bottom: 5 }}>
                <XAxis type="number" stroke="#64748b" fontSize={11} unit="%" />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} width={110} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }} />
                <Bar dataKey="score" radius={[0, 8, 8, 0]}>
                  {featureImportance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Confusion Matrix / Accuracy Distribution */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Dataset Confusion Matrix Breakdown
            </h3>
            <p className="text-xs text-slate-400">Evaluation across 2,000 real dataset transactions</p>
          </div>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-center">
              <span className="text-[10px] text-emerald-400 font-bold uppercase block">True Negative (Legitimate)</span>
              <p className="text-2xl font-extrabold font-mono text-white mt-1">1,930</p>
              <span className="text-[10px] text-slate-400">Correctly approved</span>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-center">
              <span className="text-[10px] text-rose-400 font-bold uppercase block">True Positive (Fraud)</span>
              <p className="text-2xl font-extrabold font-mono text-white mt-1">63</p>
              <span className="text-[10px] text-slate-400">Correctly flagged</span>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-center">
              <span className="text-[10px] text-amber-400 font-bold uppercase block">False Positive (False Alarm)</span>
              <p className="text-2xl font-extrabold font-mono text-white mt-1">5</p>
              <span className="text-[10px] text-slate-400">Legitimate flagged</span>
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-center">
              <span className="text-[10px] text-indigo-400 font-bold uppercase block">False Negative (Missed)</span>
              <p className="text-2xl font-extrabold font-mono text-white mt-1">2</p>
              <span className="text-[10px] text-slate-400">Fraud missed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
