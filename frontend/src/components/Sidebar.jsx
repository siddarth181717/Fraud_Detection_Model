import React, { useState } from 'react';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  ArrowLeftRight, 
  Activity, 
  Eye, 
  Bell, 
  Users as UsersIcon, 
  BarChart3, 
  Settings as SettingsIcon, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  Sparkles,
  Search
} from 'lucide-react';

export const Sidebar = ({ activeTab, setActiveTab, alertCount = 8 }) => {
  const [collapsed, setCollapsed] = useState(false);

  const monitorNav = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'behaviour', label: 'Behaviour Analysis', icon: Activity },
    { id: 'risk-monitor', label: 'Risk Monitor', icon: Eye, statusDot: 'bg-[#3B7A57]' },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: `🔴 ${alertCount}`, badgeStyle: 'bg-[#FDF0ED] text-[#C94A29] border-[#F4C5B9]' },
    { id: 'users', label: 'Users', icon: UsersIcon },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const modelNav = [
    { id: 'risk-monitor', label: 'fraud-detector-v3', isModel: true, status: 'ALERTING', statusDot: 'bg-[#C94A29]' },
    { id: 'behaviour', label: 'churn-predictor-v2', isModel: true, status: 'HEALTHY', statusDot: 'bg-[#3B7A57]' },
    { id: 'overview', label: 'reco-engine-v1', isModel: true, status: 'HEALTHY', statusDot: 'bg-[#3B7A57]' },
  ];

  const platformNav = [
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
    { id: 'help', label: 'Help & Docs', icon: HelpCircle },
  ];

  return (
    <aside 
      className={`glass-panel h-screen border-r border-[#E8DEC9] flex flex-col justify-between p-3.5 sticky top-0 z-30 transition-all duration-300 select-none bg-[#FFFDF9]/95 text-[#3D3328] ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="space-y-4 overflow-y-auto pr-0.5">
        {/* Workspace Brand & Selector Header */}
        <div className="px-1 py-1.5 border-b border-[#EFE6D7] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3E3128] to-[#B58A43] flex items-center justify-center shrink-0 shadow-glow-warm">
                <ShieldAlert className="w-4 h-4 text-white font-extrabold" />
              </div>
              {!collapsed && (
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm tracking-tight text-[#231B12] whitespace-nowrap">
                    NEXUS <span className="text-[#B58A43]">SHIELD</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#EFE7DA] text-[#6E5C44] border border-[#DFD4BD]">
                    v2.4
                  </span>
                </div>
              )}
            </div>

            <button 
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg bg-[#EFE7DA] text-[#6E5C44] hover:text-[#231B12] hover:bg-[#DFD4BD] border border-[#DFD4BD] shrink-0 transition-colors"
              title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Project Dropdown Selector (Orbit Inspired) */}
          {!collapsed && (
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF5EA] border border-[#E6DEC8] text-xs font-semibold text-[#34291D] cursor-pointer hover:border-[#B58A43] transition-colors">
              <div className="flex items-center gap-2 truncate">
                <Layers className="w-3.5 h-3.5 text-[#B58A43]" />
                <span className="truncate">Finova AI Workspace</span>
              </div>
              <span className="text-[10px] font-mono bg-[#B58A43]/15 text-[#966E31] px-1.5 py-0.5 rounded font-bold uppercase">Pro</span>
            </div>
          )}
        </div>

        {/* SECTION 1: MONITOR */}
        <nav className="space-y-1">
          {!collapsed && (
            <div className="px-2.5 my-1 text-[10px] font-bold text-[#8A7A68] uppercase tracking-wider">
              Monitor
            </div>
          )}
          {monitorNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                  isActive 
                    ? 'bg-[#3E3128] text-white shadow-sm' 
                    : 'text-[#4D3E2D] hover:text-[#231B12] hover:bg-[#EFE7DA] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-[#DCBC79]' : 'text-[#6E5C44] group-hover:text-[#231B12]'}`} />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </div>

                {item.badge && !collapsed && (
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* SECTION 3: PLATFORM */}
        <div className="pt-2 border-t border-[#EFE6D7]">
          {!collapsed && (
            <div className="px-2.5 my-1 text-[10px] font-bold text-[#8A7A68] uppercase tracking-wider">
              Platform
            </div>
          )}
          <nav className="space-y-1">
            {platformNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                    isActive 
                      ? 'bg-[#3E3128] text-white' 
                      : 'text-[#4D3E2D] hover:text-[#231B12] hover:bg-[#EFE7DA] border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0 text-[#6E5C44] group-hover:text-[#231B12]" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* User Profile Footer (Orbit & NexaPay Style) */}
      {!collapsed && (
        <div className="pt-3 border-t border-[#EFE6D7] flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3D3328] to-[#5C4E3E] flex items-center justify-center font-bold text-white border border-[#3D3328] text-xs shrink-0 shadow-sm">
              MC
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#251E17] truncate leading-tight">Marcus Chen</p>
              <p className="text-[10px] text-[#8C7D70] truncate">marcus@finova.ai</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

