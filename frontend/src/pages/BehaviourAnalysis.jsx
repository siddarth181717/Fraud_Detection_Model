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
    <div className="space-y-6 pb-8 text-[#3D3328]">
      {/* Header Banner & User Selector */}
      <div className="p-6 rounded-2xl glass-card border border-[#E8DEC9] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#FFFDF9]">
        <div>
          <h1 className="text-xl font-extrabold text-[#251E17] tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#D96B43] animate-pulse" />
            BEHAVIOUR INTELLIGENCE
          </h1>
          <p className="text-xs text-[#7F6F59] mt-0.5">
            Monitor how user behaviour changes over time and identify anomalies.
          </p>
        </div>

        {/* User Dropdown Selector */}
        <div className="flex items-center gap-2 bg-[#F5EFE4] p-2 rounded-xl border border-[#E1D5C2] text-xs">
          <UserCheck className="w-4 h-4 text-[#D96B43]" />
          <span className="text-[#7F6F59] font-bold">User:</span>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="glass-input text-xs font-mono font-bold rounded-lg px-3 py-1.5 border border-[#E1D5C2] focus:border-[#D96B43] text-[#251E17] bg-[#FAF7F2] cursor-pointer"
          >
            <option value="U1842">U1842 (High Risk Spike)</option>
            <option value="U1024">U1024 (Normal Activity)</option>
            <option value="U2190">U2190 (Medium Deviation)</option>
          </select>
        </div>
      </div>

      {loading && (
        <div className="p-3.5 rounded-2xl bg-[#FAF0EB] border border-[#E67B5E]/30 text-[#C5542E] text-xs flex items-center justify-center gap-2 font-mono font-medium">
          <RefreshCw className="w-4 h-4 animate-spin text-[#D96B43]" />
          Fetching User Behaviour Profile from FastAPI/Supabase...
        </div>
      )}

      {error && (
        <div className="p-3.5 rounded-2xl bg-[#FDF7EA] border border-[#F5E2B8] text-[#8A5608] text-xs flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#8A5608]" />
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

