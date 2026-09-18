import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { risk7DayTrendData as fallbackTrendData, riskDonutData as fallbackDonutData } from '../data/mockData';

export const RiskChart = ({ trendData, donutData }) => {
  const chartTrend = trendData && trendData.length > 0 ? trendData : fallbackTrendData;
  const chartDonut = donutData && donutData.length > 0 ? donutData : fallbackDonutData;

  const lowRiskItem = chartDonut.find(item => item.name.toLowerCase().includes('low'));
  const lowRiskPct = lowRiskItem ? lowRiskItem.value : 96.5;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 1. Transaction Risk Overview (7 Days Trend) */}
      <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Transaction Risk Overview</h3>
            <p className="text-xs text-slate-400">Low, Medium, and High Risk trend over operating period</p>
          </div>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="lowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="mediumGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="highGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip 
                contentStyle={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }}
              />
              <Area type="monotone" dataKey="low" name="Low Risk" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#lowGrad)" />
              <Area type="monotone" dataKey="medium" name="Medium Risk" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#mediumGrad)" />
              <Area type="monotone" dataKey="high" name="High Risk" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#highGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-slate-300 font-medium">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-slate-300 font-medium">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="text-slate-300 font-medium">High Risk</span>
          </div>
        </div>
      </div>

      {/* 2. Risk Distribution (Donut Chart) */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">Risk Distribution</h3>
          <p className="text-xs text-slate-400">Share of risk levels</p>
        </div>

        <div className="h-56 w-full relative flex items-center justify-center my-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartDonut}
                innerRadius={60}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
              >
                {chartDonut.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(15, 23, 42, 0.8)" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Share']}
                contentStyle={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold text-white">{lowRiskPct}%</span>
            <span className="text-[10px] uppercase font-semibold text-emerald-400">Low Risk</span>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
          {chartDonut.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-300 font-medium">{item.name}</span>
              </div>
              <span className="font-mono font-bold text-white">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskChart;
