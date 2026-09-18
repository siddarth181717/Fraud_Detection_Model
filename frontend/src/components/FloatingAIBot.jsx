import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, X, Search, AlertCircle, ShieldAlert } from 'lucide-react';

export const FloatingAIBot = ({ onQuerySelect, activeTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const quickPrompts = [
    { text: 'Find all transactions above ₹50,000', category: 'high-value', action: 'AMOUNT_50K' },
    { text: 'Detect suspicious location anomalies', category: 'location', action: 'LOCATION_ANOMALY' },
    { text: 'Show unresolved high-risk alerts', category: 'alerts', action: 'HIGH_ALERTS' },
    { text: 'Check model risk overview', category: 'overview', action: 'GO_OVERVIEW' },
  ];

  const handlePromptClick = (prompt) => {
    setInputValue(prompt.text);
    if (onQuerySelect) {
      onQuerySelect(prompt);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (onQuerySelect) {
      onQuerySelect({ text: inputValue, action: 'CUSTOM' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[92%] sm:w-[580px] pointer-events-auto">
      {/* Quick Prompt Popover Pills */}
      {isOpen && (
        <div className="mb-3 p-3 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xl border border-[#E6DEC9] shadow-2xl space-y-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between px-1 pb-1 border-b border-[#EFE6D7]">
            <span className="text-[11px] font-bold text-[#8C7D70] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D96B43]" /> Suggested AI Queries
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#8C7D70] hover:text-[#251E17] p-1 rounded-lg hover:bg-[#F4ECE1]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handlePromptClick(prompt)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#F6F0E5] hover:bg-[#EDE3D4] border border-[#E2D5C2] text-left text-xs text-[#3D3328] font-medium transition-all group"
              >
                <span className="truncate pr-2">{prompt.text}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B58A43] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Floating Input Bar (Matching NexaPay design) */}
      <form 
        onSubmit={handleSubmit}
        className="flex items-center gap-3 p-2 pl-4 rounded-2xl bg-[#231B12]/95 text-white backdrop-blur-xl border border-[#4D3E2D] shadow-2xl transition-all hover:bg-[#231B12] group"
      >
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="cursor-pointer flex items-center justify-center w-7 h-7 rounded-xl bg-[#B58A43] text-white shrink-0 shadow-glow-warm"
          title="Toggle AI Suggestions"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>

        <input
          type="text"
          value={inputValue}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything about your transactions or fraud risks..."
          className="w-full bg-transparent text-xs text-[#F6F1E9] placeholder-[#B8A480] focus:outline-none font-medium"
        />

        <button
          type="submit"
          className="p-2 rounded-xl bg-[#B58A43] hover:bg-[#966E31] text-white text-xs font-bold shrink-0 transition-colors shadow-sm"
        >
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default FloatingAIBot;
