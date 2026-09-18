import React, { useState } from 'react';
import { Search, Bell, Moon, Sun, User, Download, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import NotificationPanel from './NotificationPanel';

export const Navbar = ({ onNavigateAlerts, notifications = [] }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-20 glass-panel border-b border-[#E8DEC9] px-6 md:px-8 flex items-center justify-between sticky top-0 z-20 bg-[#FFFDF9]/90 text-[#3D3328]">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-xl font-extrabold text-[#251E17] tracking-tight">Fraud Risk Overview</h1>
        <p className="text-xs text-[#7F6F59] mt-0.5">
          Monitor transaction behaviour and identify suspicious activity.
        </p>
      </div>

      {/* Right Controls (NexaPay Inspired): 🔍 Search with ⌘F, Filter, Export, 🔔 Notifications */}
      <div className="flex items-center gap-2.5">
        {/* Search Input / Icon 🔍 with ⌘F pill */}
        <div className="relative flex items-center">
          <button 
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F5EFE4] hover:bg-[#EAE0D0] text-[#5B4E3E] hover:text-[#251E17] border border-[#E1D5C2] transition-all text-xs font-semibold"
            title="Search (⌘F)"
          >
            <Search className="w-3.5 h-3.5 text-[#D96B43]" />
            <span className="hidden sm:inline">Search</span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FAF7F2] text-[#8C7D70] border border-[#E7DCCB]">
              ⌘F
            </span>
          </button>
          
          {showSearch && (
            <input
              type="text"
              placeholder="Search transaction ID, user..."
              autoFocus
              className="absolute right-0 top-12 w-72 glass-input text-xs rounded-xl px-3.5 py-2.5 border border-[#DFD4BD] focus:border-[#B58A43] shadow-2xl animate-in fade-in"
            />
          )}
        </div>

        {/* Quick Export Action Button (NexaPay Reference Feature) */}
        <button 
          onClick={() => alert("Exporting current fraud risk audit report...")}
          className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#3E3128] hover:bg-[#2A2019] text-white text-xs font-bold transition-all shadow-glow-warm"
          title="Export CSV Report"
        >
          <Download className="w-3.5 h-3.5 text-[#DCBC79]" />
          <span>Export</span>
        </button>

        {/* Bell Alert Icon 🔔 with NotificationPanel */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl bg-[#EFE7DA] hover:bg-[#DFD4BD] text-[#4D3E2D] hover:text-[#231B12] relative border border-[#DFD4BD] transition-colors"
            title="Notifications"
          >
            <Bell className="w-4 h-4 text-[#4D3E2D]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#B33939] animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#B33939]"></span>
          </button>

          {showNotifications && (
            <NotificationPanel 
              notifications={notifications}
              onViewAll={onNavigateAlerts}
              onClose={() => setShowNotifications(false)}
            />
          )}
        </div>

        {/* User Profile Avatar 👤 */}
        <button 
          className="p-2 rounded-xl bg-[#3D3328] hover:bg-[#251E17] text-[#FAF7F2] border border-[#3D3328] transition-colors flex items-center gap-2"
          title="User Profile"
        >
          <User className="w-4 h-4 text-[#D96B43]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

