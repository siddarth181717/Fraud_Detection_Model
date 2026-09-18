import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import BehaviourAnalysis from './pages/BehaviourAnalysis';
import RiskMonitor from './pages/RiskMonitor';
import Alerts from './pages/Alerts';
import Users from './pages/Users';

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

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Sidebar Navigation with dynamic Alert Counter */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} alertCount={alertCount} />

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          onNavigateAlerts={() => setActiveTab('alerts')}
          notifications={notifications}
        />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'overview' && <Dashboard />}
          {activeTab === 'transactions' && <Transactions />}
          {activeTab === 'behaviour' && <BehaviourAnalysis />}
          {activeTab === 'risk-monitor' && <RiskMonitor onNewHighRiskAlert={handleNewHighRiskAlert} />}
          {activeTab === 'alerts' && <Alerts />}
          {activeTab === 'users' && <Users />}
          {['analytics', 'settings', 'help'].includes(activeTab) && (
            <div className="p-8 text-center glass-card rounded-2xl border border-slate-800">
              <h2 className="text-xl font-bold text-white capitalize">{activeTab.replace('-', ' ')} View</h2>
              <p className="text-xs text-slate-400 mt-2">Module active and ready for ML backend connection.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
