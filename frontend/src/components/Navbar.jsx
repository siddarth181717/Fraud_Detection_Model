import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, User } from 'lucide-react';
import NotificationPanel from './NotificationPanel';

export const Navbar = ({ onNavigateAlerts, notifications = [] }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-20 glass-panel border-b border-slate-800/80 px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">Fraud Risk Overview</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Monitor transaction behaviour and identify suspicious activity.
        </p>
      </div>

      {/* Right Controls: 🔍 🔔 🌙 👤 */}
      <div className="flex items-center gap-3">
        {/* Search Input / Icon 🔍 */}
        <div className="relative">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/30 transition-colors"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          
          {showSearch && (
            <input
              type="text"
              placeholder="Search transaction ID, user..."
              autoFocus
              className="absolute right-0 top-12 w-64 glass-input text-xs rounded-xl px-3 py-2 border border-slate-800 focus:border-cyan-500 shadow-2xl animate-in fade-in"
            />
          )}
        </div>

        {/* Bell Alert Icon 🔔 with NotificationPanel */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white relative border border-slate-800 hover:border-cyan-500/30 transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
          </button>

          {showNotifications && (
            <NotificationPanel 
              notifications={notifications}
              onViewAll={onNavigateAlerts}
              onClose={() => setShowNotifications(false)}
            />
          )}
        </div>

        {/* Dark/Light Moon Icon 🌙 */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/30 transition-colors"
          title="Toggle Theme"
        >
          {darkMode ? <Moon className="w-4 h-4 text-cyan-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
        </button>

        {/* User Profile Icon 👤 */}
        <button 
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition-colors"
          title="User Profile"
        >
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
