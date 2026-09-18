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
  const lowRiskPct = lowRiskItem ? lowRiskItem.value : 72;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-[#34291D]">
      {/* 1. Transaction Risk Overview (7 Days Trend) */}
      <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-[#E6DEC8] flex flex-col justify-between bg-[#FFFDF8]">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-extrabold text-[#231B12] tracking-tight">Transaction Risk Overview</h3>
            <p className="text-xs text-[#6E5C44]">Low, Medium, and High Risk trend over operating period</p>
          </div>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="lowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B7048" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#3B7048" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="mediumGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C4841D" stopOpacity={0.35}/>
                  <stop offset="95%" stopColor="#C4841D" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="highGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B33939" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#B33939" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#948060" fontSize={11} tickLine={false} />
              <YAxis stroke="#948060" fontSize={11} tickLine={false} />
              <Tooltip 
                contentStyle={{ background: '#FFFDF8', borderRadius: '14px', border: '1px solid #E6DEC8', color: '#231B12', boxShadow: '0 10px 25px -4px rgba(50, 38, 25, 0.08)' }}
              />
              <Area type="monotone" dataKey="low" name="Low Risk" stroke="#3B7048" strokeWidth={2.5} fillOpacity={1} fill="url(#lowGrad)" />
              <Area type="monotone" dataKey="medium" name="Medium Risk" stroke="#C4841D" strokeWidth={2.5} fillOpacity={1} fill="url(#mediumGrad)" />
              <Area type="monotone" dataKey="high" name="High Risk" stroke="#B33939" strokeWidth={2.5} fillOpacity={1} fill="url(#highGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-[#EFE7DA] text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B7048]"></span>
            <span className="text-[#34291D] font-bold">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C4841D]"></span>
            <span className="text-[#34291D] font-bold">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B33939]"></span>
            <span className="text-[#34291D] font-bold">High Risk</span>
          </div>
        </div>
      </div>

      {/* 2. Risk Distribution (Donut Chart) */}
      <div className="glass-card p-6 rounded-2xl border border-[#E6DEC8] flex flex-col justify-between bg-[#FFFDF8]">
        <div>
          <h3 className="text-base font-extrabold text-[#231B12] tracking-tight">Risk Distribution</h3>
          <p className="text-xs text-[#6E5C44]">Share of risk levels</p>
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
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFDF8" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Share']}
                contentStyle={{ background: '#FFFDF8', borderRadius: '14px', border: '1px solid #E6DEC8', color: '#231B12', boxShadow: '0 10px 25px -4px rgba(50, 38, 25, 0.08)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-extrabold text-[#231B12]">{lowRiskPct}%</span>
            <span className="text-[10px] uppercase font-bold text-[#3B7048]">Low Risk</span>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#EFE7DA] text-xs">
          {chartDonut.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 rounded-xl bg-[#FAF5EA] border border-[#E6DEC8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span className="text-[#34291D] font-semibold">{item.name}</span>
              </div>
              <span className="font-mono font-bold text-[#231B12]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskChart;

