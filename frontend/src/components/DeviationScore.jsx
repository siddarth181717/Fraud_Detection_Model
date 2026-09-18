import React from 'react';
import { AlertTriangle, ShieldAlert, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';

export const DeviationScore = ({ profile }) => {
  if (!profile) return null;

  const { overallDeviationScore, deviationTier, deviation, comparison, timeline } = profile;
  const isHigh = overallDeviationScore >= 75 || deviationTier === 'HIGH';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Behaviour Deviation Progress Bars (Takes 1 Col) */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">BEHAVIOUR DEVIATION ⭐</h3>
                <p className="text-xs text-slate-400">Multi-vector risk scoring</p>
              </div>
            </div>

            {/* Score Display */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center mb-6">
              <span className="text-4xl font-extrabold font-mono text-white">{overallDeviationScore} <span className="text-sm font-normal text-slate-400">/ 100</span></span>
              <div className="mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isHigh ? 'bg-rose-500 text-slate-950 shadow-glow-rose' : 'bg-emerald-500 text-slate-950'
                }`}>
                  {deviationTier} DEVIATION {isHigh ? '🔴' : '🟢'}
                </span>
              </div>
            </div>

            {/* Horizontal Progress Bars */}
            <div className="space-y-3.5 text-xs">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-300 font-semibold">Amount Deviation</span>
                  <span className="font-mono font-bold text-rose-400">{deviation.amount}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-full" style={{ width: `${deviation.amount}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-300 font-semibold">Time Deviation</span>
                  <span className="font-mono font-bold text-amber-400">{deviation.time}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: `${deviation.time}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-300 font-semibold">Location Deviation</span>
                  <span className="font-mono font-bold text-amber-400">{deviation.location}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: `${deviation.location}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-300 font-semibold">Device Deviation</span>
                  <span className="font-mono font-bold text-rose-400">{deviation.device}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-full" style={{ width: `${deviation.device}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-300 font-semibold">Frequency Deviation</span>
                  <span className="font-mono font-bold text-emerald-400">{deviation.frequency}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${deviation.frequency}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Normal vs Current Comparison Card (Takes 2 Cols) */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">NORMAL vs CURRENT COMPARISON</h3>
                <p className="text-xs text-slate-400">Historical user baseline versus latest transaction activity</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/90 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">METRIC</th>
                    <th className="py-3 px-4">NORMAL BASELINE</th>
                    <th className="py-3 px-4">CURRENT ACTIVITY</th>
                    <th className="py-3 px-4 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white font-sans">{row.metric}</td>
                      <td className="py-3.5 px-4 text-slate-400">{row.normal}</td>
                      <td className={`py-3.5 px-4 font-extrabold ${row.alert ? 'text-rose-400' : 'text-emerald-400'}`}>
                        {row.current} {row.alert && '⚠️'}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold font-sans uppercase ${
                          row.alert ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
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

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-xl">
            💡 <strong className="text-slate-200">Key Presentation Pitch:</strong> "Our system doesn't simply look at the transaction amount. It compares the transaction against the user's historical behaviour."
          </div>
        </div>
      </div>

      {/* 3. Behaviour Timeline */}
      <div className="glass-card p-6 rounded-2xl border border-slate-800">
        <h3 className="text-base font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-400" />
          BEHAVIOUR TIMELINE
        </h3>

        <div className="relative pl-6 border-l border-slate-800 space-y-6">
          {timeline.map((event, idx) => {
            const dotColor = 
              event.status === 'critical' ? 'bg-rose-500' :
              event.status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400';
            const icon = event.status === 'critical' ? '🔴' : event.status === 'warning' ? '🟡' : '🟢';

            return (
              <div key={idx} className="relative group">
                <span className={`absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full ${dotColor} ring-4 ring-slate-950`}></span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span>{icon}</span>
                    <span className="font-mono text-xs font-bold text-cyan-400">{event.date}</span>
                    <h4 className="text-sm font-bold text-white">{event.label}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-1 pl-6">{event.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeviationScore;
