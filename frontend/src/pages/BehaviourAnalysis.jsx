import React, { useState, useEffect } from 'react';
import { Activity, UserCheck, RefreshCw, AlertCircle } from 'lucide-react';
import { userBehaviourData } from '../data/mockData';
import BehaviourProfile from '../components/BehaviourProfile';
import BehaviourChart from '../components/BehaviourChart';
import DeviationScore from '../components/DeviationScore';
import { apiService } from '../services/api';

export const BehaviourAnalysis = () => {
  const [selectedUser, setSelectedUser] = useState('U1842');
  const [profile, setProfile] = useState(userBehaviourData['U-1842']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBehaviour = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiService.getUserBehaviour(selectedUser.replace('-', ''));
        if (data) {
          setProfile(data);
        } else {
          setProfile(userBehaviourData[selectedUser] || userBehaviourData['U-1842']);
        }
      } catch (err) {
        setError('Unable to load user behaviour profile from database.');
        setProfile(userBehaviourData[selectedUser] || userBehaviourData['U-1842']);
      } finally {
        setLoading(false);
      }
    };

    loadBehaviour();
  }, [selectedUser]);

  return (
    <div className="space-y-6 pb-8">
      {/* Header Banner & User Selector */}
      <div className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
            BEHAVIOUR INTELLIGENCE
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Monitor how user behaviour changes over time and identify anomalies.
          </p>
        </div>

        {/* User Dropdown Selector */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-2 rounded-xl border border-slate-800 text-xs">
          <UserCheck className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-400 font-semibold">User:</span>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="glass-input text-xs font-mono font-bold rounded-lg px-3 py-1.5 border border-slate-800 focus:border-cyan-500 text-cyan-300 bg-slate-900 cursor-pointer"
          >
            <option value="U1842">U1842 (High Risk Spike)</option>
            <option value="U1024">U1024 (Normal Activity)</option>
            <option value="U2190">U2190 (Medium Deviation)</option>
          </select>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs flex items-center justify-center gap-2 font-mono">
          <RefreshCw className="w-4 h-4 animate-spin" />
          Fetching User Behaviour Profile from FastAPI/Supabase...
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </span>
        </div>
      )}

      {/* 1. Profile & Quick Stats */}
      <BehaviourProfile profile={profile} />

      {/* 2. Charts (Spending History + Time Pattern) */}
      <BehaviourChart profile={profile} />

      {/* 3. Deviation Score, Comparison Table & Timeline */}
      <DeviationScore profile={profile} />
    </div>
  );
};

export default BehaviourAnalysis;
