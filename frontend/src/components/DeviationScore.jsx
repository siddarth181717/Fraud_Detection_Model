import React from 'react';
import { AlertTriangle, ShieldAlert, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export const DeviationScore = ({ profile }) => {
  if (!profile) return null;

  const { overallDeviationScore, deviationTier, deviation, comparison, timeline } = profile;
  const isHigh = overallDeviationScore >= 75 || deviationTier === 'HIGH';

  return (
    <div className="space-y-6 text-[#3D3328]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Behaviour Deviation Progress Bars */}
        <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between bg-[#FFFDF9]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-extrabold text-[#251E17] uppercase tracking-wider">BEHAVIOUR DEVIATION ⭐</h3>
                <p className="text-xs text-[#7F6F59]">Multi-vector risk scoring</p>
              </div>
            </div>

            {/* Score Display */}
            <div className="p-4 rounded-xl bg-[#F6F0E5] border border-[#E2D5C2] text-center mb-6">
              <span className="text-4xl font-extrabold font-mono text-[#251E17]">{overallDeviationScore} <span className="text-sm font-normal text-[#8C7D70]">/ 100</span></span>
              <div className="mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                  isHigh ? 'bg-[#C94A29] text-white shadow-sm' : 'bg-[#3B7A57] text-white'
                }`}>
                  {deviationTier} DEVIATION {isHigh ? '🔴' : '🟢'}
                </span>
              </div>
            </div>

            {/* Horizontal Progress Bars */}
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#3D3328] font-bold">Amount Deviation</span>
                  <span className="font-mono font-bold text-[#C94A29]">{deviation.amount}%</span>
                </div>
                <div className="w-full bg-[#EFE6D7] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C94A29] h-full rounded-full" style={{ width: `${deviation.amount}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#3D3328] font-bold">Time Deviation</span>
                  <span className="font-mono font-bold text-[#C9862B]">{deviation.time}%</span>
                </div>
                <div className="w-full bg-[#EFE6D7] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C9862B] h-full rounded-full" style={{ width: `${deviation.time}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#3D3328] font-bold">Location Deviation</span>
                  <span className="font-mono font-bold text-[#C9862B]">{deviation.location}%</span>
                </div>
                <div className="w-full bg-[#EFE6D7] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C9862B] h-full rounded-full" style={{ width: `${deviation.location}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#3D3328] font-bold">Device Deviation</span>
                  <span className="font-mono font-bold text-[#C94A29]">{deviation.device}%</span>
                </div>
                <div className="w-full bg-[#EFE6D7] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C94A29] h-full rounded-full" style={{ width: `${deviation.device}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#3D3328] font-bold">Frequency Deviation</span>
                  <span className="font-mono font-bold text-[#3B7A57]">{deviation.frequency}%</span>
                </div>
                <div className="w-full bg-[#EFE6D7] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#3B7A57] h-full rounded-full" style={{ width: `${deviation.frequency}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Normal vs Current Comparison Card */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-[#E8DEC9] flex flex-col justify-between bg-[#FFFDF9]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-extrabold text-[#251E17] uppercase tracking-wider">NORMAL vs CURRENT COMPARISON</h3>
                <p className="text-xs text-[#7F6F59]">Historical user baseline versus latest transaction activity</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF5EC] text-[#8C7D70] font-extrabold uppercase tracking-wider text-[10px] border-b border-[#E8DEC9]">
                  <tr>
                    <th className="py-3 px-4">METRIC</th>
                    <th className="py-3 px-4">NORMAL BASELINE</th>
                    <th className="py-3 px-4">CURRENT ACTIVITY</th>
                    <th className="py-3 px-4 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE6D7] font-mono">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F5EFE4]/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#251E17] font-sans">{row.metric}</td>
                      <td className="py-3.5 px-4 text-[#7F6F59]">{row.normal}</td>
                      <td className={`py-3.5 px-4 font-extrabold ${row.alert ? 'text-[#C94A29]' : 'text-[#3B7A57]'}`}>
                        {row.current} {row.alert && '⚠️'}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-sans uppercase border ${
                          row.alert ? 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' : 'bg-[#EFF7F2] text-[#1B5233] border-[#C6E6D2]'
                        }`}>
                          {row.note}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#EFE6D7] text-xs text-[#7F6F59] bg-[#F5EFE4] p-3 rounded-xl border border-[#E1D5C2]">
            💡 <strong className="text-[#251E17]">Key Presentation Pitch:</strong> "Our system doesn't simply look at the transaction amount. It compares the transaction against the user's historical behaviour."
          </div>
        </div>
      </div>

      {/* 3. Behaviour Timeline */}
      <div className="glass-card p-6 rounded-2xl border border-[#E8DEC9] bg-[#FFFDF9]">
        <h3 className="text-base font-extrabold text-[#251E17] uppercase tracking-wider mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#D96B43]" />
          BEHAVIOUR TIMELINE
        </h3>

        <div className="relative pl-6 border-l border-[#EFE6D7] space-y-6">
          {timeline.map((event, idx) => {
            const dotColor = 
              event.status === 'critical' ? 'bg-[#C94A29]' :
              event.status === 'warning' ? 'bg-[#C9862B]' : 'bg-[#3B7A57]';
            const icon = event.status === 'critical' ? '🔴' : event.status === 'warning' ? '🟡' : '🟢';

            return (
              <div key={idx} className="relative group">
                <span className={`absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full ${dotColor} ring-4 ring-[#FAF7F2]`}></span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span>{icon}</span>
                    <span className="font-mono text-xs font-bold text-[#D96B43]">{event.date}</span>
                    <h4 className="text-sm font-extrabold text-[#251E17]">{event.label}</h4>
                  </div>
                </div>
                <p className="text-xs text-[#7F6F59] mt-1 pl-6">{event.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeviationScore;

