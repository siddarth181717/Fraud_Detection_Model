import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, 
  BarChart, Bar, Cell 
} from 'recharts';
import { TrendingUp, Clock } from 'lucide-react';

export const BehaviourChart = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 1. Spending Behaviour Chart 📈 */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Spending Behaviour
            </h3>
            <p className="text-xs text-slate-400">User transaction history over last 30 days</p>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            30-Day Timeline
          </span>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={profile.spendingHistory} margin={{ top: 15, right: 15, left: -10, bottom: 0 }}>
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis 
                stroke="#64748b" 
                fontSize={11} 
                tickLine={false}
                tickFormatter={(val) => `₹${val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}`}
              />
              <Tooltip 
                formatter={(val) => [`₹${val.toLocaleString()}`, 'Amount']}
                contentStyle={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }}
              />
              {/* Reference Line for Normal Average */}
              <ReferenceLine 
                y={profile.averageAmountNum} 
                stroke="#06b6d4" 
                strokeDasharray="4 4" 
                label={{ value: `Normal Avg (${profile.averageAmount})`, fill: '#06b6d4', fontSize: 11, position: 'top' }} 
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#ef4444" 
                strokeWidth={2.5} 
                dot={{ r: 4, fill: '#ef4444' }} 
                activeDot={{ r: 7 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
          <span>Baseline: <strong className="text-cyan-400">{profile.averageAmount}</strong></span>
          <span className="text-rose-400 font-semibold font-mono">⚠️ Anomaly detected on Day 30</span>
        </div>
      </div>

      {/* 2. Transaction Time Pattern ⏰ */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              Transaction Time Pattern
            </h3>
            <p className="text-xs text-slate-400">Hourly activity distribution & anomaly detection</p>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Typical: {profile.typicalTime}
          </span>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profile.timePattern} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="hour" stroke="#64748b" fontSize={11} tickLine={false} />
              <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
              <Tooltip 
                formatter={(val) => [`${val} transactions`, 'Frequency']}
                contentStyle={{ background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {profile.timePattern.map((entry, idx) => (
                  <Cell 
                    key={`cell-${idx}`} 
                    fill={entry.hour === '3 AM' ? '#ef4444' : '#06b6d4'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
          <span>Operating window: <strong className="text-slate-200">{profile.typicalTime}</strong></span>
          <span className="text-rose-400 font-semibold font-mono">⚠️ 3 AM spike outside normal window</span>
        </div>
      </div>
    </div>
  );
};

export default BehaviourChart;
