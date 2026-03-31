import React, { useState } from 'react';
import Sidebar from '/src/components/tools/Sidebar.jsx';
import Header from '/src/components/tools/Header.jsx';
// screens
import MainScreen from './components/screens/ScreenDashboard.jsx';
import SecurityLogs from './components/screens/ScreenLogs.jsx';
import CurrentAttacks from './components/screens/ScreenAttacks.jsx';
import ClientManagement from './components/screens/ScreenClients.jsx';



const App = () => {
  // Quản lý màn hình nào đang hiển thị
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <MainScreen />;
      case 'Security Logs': return <SecurityLogs />;
      case 'Current Attacks': return <CurrentAttacks />;
      case 'Client Management': return <ClientManagement />;
      // Thêm các case khác khi mày làm xong Tenants, Policies...
      default: return <MainScreen />;
    }
  };

  return (
    <div className="bg-[#1c1c1c] text-[#ededed] flex h-screen overflow-hidden font-sans">
      {/* Truyền hàm setActiveTab vào Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;