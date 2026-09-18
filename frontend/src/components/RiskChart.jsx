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

<<<<<<< HEAD
export const RiskChart = () => {
  const creamyDonutData = [
    { name: 'Low Risk', value: 72, color: '#3B7A57' },
    { name: 'Medium Risk', value: 19, color: '#C9862B' },
    { name: 'High Risk', value: 9, color: '#C94A29' },
  ];

=======
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#3D3328]">
      {/* 1. Transaction Risk Overview (7 Days Trend) */}
      <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between bg-[#FFFDF9]">
        <div className="flex items-center justify-between mb-2">
          <div>
<<<<<<< HEAD
            <h3 className="text-base font-extrabold text-[#251E17] tracking-tight">Transaction Risk Overview</h3>
            <p className="text-xs text-[#7F6F59]">Low, Medium, and High Risk trend over the last 7 days</p>
=======
            <h3 className="text-base font-bold text-white tracking-tight">Transaction Risk Overview</h3>
            <p className="text-xs text-slate-400">Low, Medium, and High Risk trend over operating period</p>
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
          </div>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="lowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B7A57" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#3B7A57" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="mediumGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C9862B" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#C9862B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="highGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C94A29" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#C94A29" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#8C7D70" fontSize={11} tickLine={false} />
              <YAxis stroke="#8C7D70" fontSize={11} tickLine={false} />
              <Tooltip 
                contentStyle={{ background: '#FFFDF9', borderRadius: '14px', border: '1px solid #E8DEC9', color: '#251E17', boxShadow: '0 10px 25px -4px rgba(50, 38, 22, 0.1)' }}
              />
              <Area type="monotone" dataKey="low" name="Low Risk" stroke="#3B7A57" strokeWidth={2.5} fillOpacity={1} fill="url(#lowGrad)" />
              <Area type="monotone" dataKey="medium" name="Medium Risk" stroke="#C9862B" strokeWidth={2.5} fillOpacity={1} fill="url(#mediumGrad)" />
              <Area type="monotone" dataKey="high" name="High Risk" stroke="#C94A29" strokeWidth={2.5} fillOpacity={1} fill="url(#highGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-[#EFE6D7] text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B7A57]"></span>
            <span className="text-[#3D3328] font-bold">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9862B]"></span>
            <span className="text-[#3D3328] font-bold">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C94A29]"></span>
            <span className="text-[#3D3328] font-bold">High Risk</span>
          </div>
        </div>
      </div>

      {/* 2. Risk Distribution (Donut Chart) */}
      <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between bg-[#FFFDF9]">
        <div>
          <h3 className="text-base font-extrabold text-[#251E17] tracking-tight">Risk Distribution</h3>
          <p className="text-xs text-[#7F6F59]">Share of risk levels</p>
        </div>

        <div className="h-56 w-full relative flex items-center justify-center my-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
<<<<<<< HEAD
                data={creamyDonutData}
=======
                data={chartDonut}
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                innerRadius={60}
                outerRadius={85}
                paddingAngle={4}
                dataKey="value"
              >
<<<<<<< HEAD
                {creamyDonutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFDF9" strokeWidth={3} />
=======
                {chartDonut.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(15, 23, 42, 0.8)" strokeWidth={2} />
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Share']}
                contentStyle={{ background: '#FFFDF9', borderRadius: '14px', border: '1px solid #E8DEC9', color: '#251E17', boxShadow: '0 10px 25px -4px rgba(50, 38, 22, 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<<<<<<< HEAD
            <span className="text-2xl font-extrabold text-[#251E17]">72%</span>
            <span className="text-[10px] uppercase font-bold text-[#3B7A57]">Low Risk</span>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#EFE6D7] text-xs">
          {creamyDonutData.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2]">
=======
            <span className="text-2xl font-extrabold text-white">{lowRiskPct}%</span>
            <span className="text-[10px] uppercase font-semibold text-emerald-400">Low Risk</span>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs">
          {chartDonut.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800">
>>>>>>> 91c65ae64af9e8d444be0e02820acc80d3fc6b2b
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-[#3D3328] font-semibold">{item.name}</span>
              </div>
              <span className="font-mono font-bold text-[#251E17]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskChart;

