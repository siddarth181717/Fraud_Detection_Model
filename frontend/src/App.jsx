import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import BehaviourAnalysis from './pages/BehaviourAnalysis';
import RiskMonitor from './pages/RiskMonitor';
import Alerts from './pages/Alerts';
import Users from './pages/Users';
import FloatingAIBot from './components/FloatingAIBot';

export function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [alertCount, setAlertCount] = useState(8);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'critical', text: 'High-risk transaction detected', meta: 'TXN-1048 • 2 min ago' },
    { id: 2, type: 'warning', text: 'Unusual location detected', meta: 'U-1842 • 5 min ago' },
    { id: 3, type: 'medium', text: 'Behaviour deviation increased', meta: 'U-2190 • 12 min ago' }
  ]);

  const handleNewHighRiskAlert = (txn) => {
    setAlertCount((prev) => prev + 1);
    setNotifications((prev) => [
      { id: Date.now(), type: 'critical', text: `High-risk transaction ${txn.id}`, meta: `${txn.user} • Just now` },
      ...prev.slice(0, 4)
    ]);
  };

  const handleAIQuerySelect = (prompt) => {
    if (prompt.action === 'GO_OVERVIEW') {
      setActiveTab('overview');
    } else if (prompt.action === 'HIGH_ALERTS') {
      setActiveTab('alerts');
    } else if (prompt.action === 'AMOUNT_50K' || prompt.action === 'LOCATION_ANOMALY') {
      setActiveTab('transactions');
    } else {
      setActiveTab('risk-monitor');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F6F1E9] text-[#34291D] font-sans selection:bg-[#B58A43] selection:text-white relative">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} alertCount={alertCount} />

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          onNavigateAlerts={() => setActiveTab('alerts')}
          notifications={notifications}
        />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto pb-24">
          {activeTab === 'overview' && <Dashboard />}
          {activeTab === 'transactions' && <Transactions />}
          {activeTab === 'behaviour' && <BehaviourAnalysis />}
          {activeTab === 'risk-monitor' && <RiskMonitor onNewHighRiskAlert={handleNewHighRiskAlert} />}
          {activeTab === 'alerts' && <Alerts />}
          {activeTab === 'users' && <Users />}
          {['analytics', 'settings', 'help'].includes(activeTab) && (
            <div className="p-10 text-center glass-card rounded-2xl border border-[#E6DEC8]">
              <h2 className="text-xl font-extrabold text-[#231B12] capitalize">{activeTab.replace('-', ' ')} View</h2>
              <p className="text-xs text-[#6E5C44] mt-2">Module active and connected with Nexus Shield ML engine.</p>
            </div>
          )}
        </main>
      </div>

      {/* Floating AI Query Assistant Widget (NexaPay Inspired) */}
      <FloatingAIBot onQuerySelect={handleAIQuerySelect} activeTab={activeTab} />
    </div>
  );
}

export default App;

