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
  ChevronRight
} from 'lucide-react';

export const Sidebar = ({ activeTab, setActiveTab, alertCount = 8 }) => {
  const [collapsed, setCollapsed] = useState(false);

  const mainNav = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'behaviour', label: 'Behaviour Analysis', icon: Activity },
    { id: 'risk-monitor', label: 'Risk Monitor', icon: Eye },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: `🔴 ${alertCount}`, badgeStyle: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    { id: 'users', label: 'Users', icon: UsersIcon },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const secondaryNav = [
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
    { id: 'help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <aside 
      className={`glass-panel h-screen border-r border-slate-800/80 flex flex-col justify-between p-4 sticky top-0 z-30 transition-all duration-300 select-none ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Branding & Collapse Toggle */}
        <div className="flex items-center justify-between px-2 py-3 mb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-glow-cyan">
              <ShieldAlert className="w-5 h-5 text-slate-950 font-extrabold" />
            </div>
            {!collapsed && (
              <span className="font-extrabold text-sm tracking-wider text-white whitespace-nowrap">
                FRAUDGUARD <span className="text-cyan-400">AI</span>
              </span>
            )}
          </div>

          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg glass-card text-slate-400 hover:text-white border border-slate-800 shrink-0"
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1.5">
          {!collapsed && (
            <div className="px-3 mb-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Main Menu
            </div>
          )}
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                  isActive 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
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

        {/* Divider ──────────── */}
        <div className="my-4 border-t border-slate-800/80"></div>

        {/* Secondary Navigation */}
        <nav className="space-y-1.5">
          {secondaryNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group ${
                  isActive 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-slate-200" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Profile Avatar at Bottom */}
      {!collapsed && (
        <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-cyan-400 border border-slate-700 text-xs shrink-0">
            FG
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">Security Lead</p>
            <p className="text-[10px] text-slate-400 truncate">analyst@fraudguard.ai</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
