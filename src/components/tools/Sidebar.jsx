// Ở Sidebar.jsx

import {
  Zap, LayoutGrid, Activity, Users,
  FileKey2, FileBarChart, LogOut, ShieldAlert, BriefcaseBusiness, LogIn
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-[#1c1c1c] border-r border-[#3e3e3e] flex flex-col h-full">
      {/* Logo Section */}
      <div className="h-16 flex items-center gap-2 px-6 border-b border-[#3e3e3e]">
        <Zap className="w-7 h-7 text-[#3ecf8e]" />
        <span className="text-xl font-bold text-white uppercase tracking-tight">
          Flux <span className="text-[#3ecf8e] text-xs font-mono ml-1">v1.0</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <NavItem icon={<LayoutGrid size={20}/>}
          label="Dashboard"
          active={activeTab === 'Dashboard'} 
          onClick={() => setActiveTab('Dashboard')} />

        <NavItem icon={<Activity size={20}/>}
          label="Security Logs" 
          active={activeTab === 'Security Logs'} 
          onClick={() => setActiveTab('Security Logs')}/>

        <NavItem icon={<ShieldAlert size={20}/>}
         label="Current Attacks" 
         active={activeTab === 'Current Attacks'} 
         onClick={() => setActiveTab('Current Attacks')}/>
         
        <NavItem icon={<BriefcaseBusiness size={20}/>} label="Client Management" 
         active={activeTab === 'Client Management'} 
         onClick={() => setActiveTab('Client Management')}/>
        
        <div className="pt-6 pb-2">
          <p className="px-4 text-[10px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em]">Enterprise Admin</p>
        </div>
        
        <NavItem icon={<Users size={20}/>} label="Tenants" />
        <NavItem icon={<FileKey2 size={20}/>} label="Security Policies" />
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-[#3e3e3e] flex items-center gap-3 bg-[#1c1c1c]">
        <div className="w-10 h-10 rounded-full border border-[#3e3e3e] bg-[#2a2a2a] flex items-center justify-center text-[#3ecf8e] font-bold">
          SD
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate text-white">Solo Dev</p>
          <p className="text-xs text-[#a0a0a0] truncate">Enterprise Admin</p>
        </div>
        <button className="text-[#a0a0a0] hover:text-[#f87171] transition">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} // Lắng nghe sự kiện click
    className={`
      flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 w-full
      ${active 
        ? 'bg-[#2a2a2a] text-[#3ecf8e] font-medium shadow-sm border border-[#3e3e3e]' 
        : 'text-[#a0a0a0] hover:text-white hover:bg-[#2a2a2a]/50'}
    `}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);

export default Sidebar;