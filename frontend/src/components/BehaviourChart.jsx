import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, 
  BarChart, Bar, Cell 
} from 'recharts';
import { TrendingUp, Clock } from 'lucide-react';

export const BehaviourChart = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-[#3D3328]">
      {/* 1. Spending Behaviour Chart 📈 */}
      <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between bg-[#FFFDF9]">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-extrabold text-[#251E17] tracking-tight flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#D96B43]" />
              Spending Behaviour
            </h3>
            <p className="text-xs text-[#7F6F59]">User transaction history over last 30 days</p>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FAF0EB] text-[#D96B43] border border-[#E67B5E]/30">
            30-Day Timeline
          </span>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={profile.spendingHistory} margin={{ top: 15, right: 15, left: -10, bottom: 0 }}>
              <XAxis dataKey="day" stroke="#8C7D70" fontSize={11} tickLine={false} />
              <YAxis 
                stroke="#8C7D70" 
                fontSize={11} 
                tickLine={false}
                tickFormatter={(val) => `₹${val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}`}
              />
              <Tooltip 
                formatter={(val) => [`₹${val.toLocaleString()}`, 'Amount']}
                contentStyle={{ background: '#FFFDF9', borderRadius: '14px', border: '1px solid #E8DEC9', color: '#251E17' }}
              />
              <ReferenceLine 
                y={profile.averageAmountNum} 
                stroke="#D96B43" 
                strokeDasharray="4 4" 
                label={{ value: `Normal Avg (${profile.averageAmount})`, fill: '#D96B43', fontSize: 11, position: 'top' }} 
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#C94A29" 
                strokeWidth={2.5} 
                dot={{ r: 4, fill: '#C94A29' }} 
                activeDot={{ r: 7 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 pt-3 border-t border-[#EFE6D7] text-xs text-[#7F6F59] flex items-center justify-between">
          <span>Baseline: <strong className="text-[#D96B43]">{profile.averageAmount}</strong></span>
          <span className="text-[#C94A29] font-bold font-mono">⚠️ Anomaly detected on Day 30</span>
        </div>
      </div>

      {/* 2. Transaction Time Pattern ⏰ */}
      <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between bg-[#FFFDF9]">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-extrabold text-[#251E17] tracking-tight flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C9862B]" />
              Transaction Time Pattern
            </h3>
            <p className="text-xs text-[#7F6F59]">Hourly activity distribution & anomaly detection</p>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FDF7EA] text-[#8A5608] border border-[#F5E2B8]">
            Typical: {profile.typicalTime}
          </span>
        </div>

        <div className="h-64 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={profile.timePattern} margin={{ top: 15, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="hour" stroke="#8C7D70" fontSize={11} tickLine={false} />
              <YAxis stroke="#8C7D70" fontSize={11} tickLine={false} />
              <Tooltip 
                formatter={(val) => [`${val} transactions`, 'Frequency']}
                contentStyle={{ background: '#FFFDF9', borderRadius: '14px', border: '1px solid #E8DEC9', color: '#251E17' }}
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {profile.timePattern.map((entry, idx) => (
                  <Cell 
                    key={`cell-${idx}`} 
                    fill={entry.hour === '3 AM' ? '#C94A29' : '#D96B43'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 pt-3 border-t border-[#EFE6D7] text-xs text-[#7F6F59] flex items-center justify-between">
          <span>Operating window: <strong className="text-[#251E17]">{profile.typicalTime}</strong></span>
          <span className="text-[#C94A29] font-bold font-mono">⚠️ 3 AM spike outside normal window</span>
        </div>
      </div>
    </div>
  );
};

export default BehaviourChart;

