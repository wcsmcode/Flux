// Ở Sidebar.jsx
import {use, useState} from 'react';
import { ClickOutsideWrapper, DropdownWrapper } from './items';
import {
  Zap, LayoutGrid, Activity, Users,
  FileKey2, FileBarChart, LogOut, ShieldAlert, BriefcaseBusiness, LogIn, Settings, UserPen, BarChart3
} from 'lucide-react';
import { useTabs } from '../TabContext.jsx';

import SettingsModal from './settings.jsx';

const MENU_CONFIG = {
  admin: [
    { icon: <LayoutGrid size={20}/>, label: 'Dashboard', tab: 'Dashboard' },
    { icon: <Activity size={20}/>, label: 'Security Logs', tab: 'Security Logs' },
    { icon: <ShieldAlert size={20}/>, label: 'Current Attacks', tab: 'Current Attacks' },
    { icon: <BriefcaseBusiness size={20}/>, label: 'Client Management', tab: 'Client Management' },
  ],
  client: [
    { icon: <LayoutGrid size={20}/>, label: 'Dashboard', tab: 'Client Dashboard' },
    { icon: <BarChart3 size={20}/>, label: 'Report', tab: 'Client Report' },
    { icon: <ShieldAlert size={20}/>, label: 'Current Attacks', tab: 'Client Current Attacks' },
  ],
  admin_extra: [
    { icon: <Users size={20}/>, label: 'Tenants', tab: null },
    { icon: <FileKey2 size={20}/>, label: 'Security Policies', tab: null },
  ],
};

const Sidebar = ({ type = 'admin' }) => {
  const { activeTab, setActiveTab } = useTabs();
  const [ShowTab, setShowTab] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const showExtra = type === 'admin';
  const menuItems = MENU_CONFIG[type] || MENU_CONFIG.client;

  return (
    <aside className="w-64 bg-[#1c1c1c] border-r border-[#3e3e3e] flex flex-col h-full">
      {/* Logo Section */}
      <div onClick={() => setActiveTab('Dashboard')} className="hover:cursor-pointer h-16 flex items-center gap-2 px-6 border-b border-[#3e3e3e]">
        <Zap className="w-7 h-7 text-[#3ecf8e]" />
        <span className="text-xl font-bold text-white uppercase tracking-tight">
          Flux <span className="text-[#3ecf8e] text-xs font-mono ml-1">v1.0</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="pt-6 pb-2">
          <p className="px-4 text-[10px] font-bold text-[#a0a0a0] uppercase tracking-[0.2em]">
            {type === 'admin' ? 'Control' : 'Dashboard'}
          </p>
        </div>

        {menuItems.map((item) => (
          <NavItem 
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeTab === item.tab}
            onClick={() => item.tab && setActiveTab(item.tab)}
          />
        ))}
      </nav>

      {/* User Profile Section */}
      <div className='relative'>
        <ClickOutsideWrapper onClickOutside={() => setShowTab(false)}>
          <div onClick={() => setShowTab(!ShowTab)} className="p-4 border-t border-[#3e3e3e] hover:bg-[#2a2a2a]/50 flex items-center gap-3 bg-[#1c1c1c]">
              <div className="w-10 h-10 rounded-full border border-[#3e3e3e] bg-[#2a2a2a] flex items-center justify-center text-[#3ecf8e] font-bold">
              SD
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate text-white">Solo Dev</p>
                <p className="text-xs text-[#a0a0a0] truncate">Enterprise Admin</p>
              </div>
              <button onClick={(e) => {e.stopPropagation(); }} className="text-[#a0a0a0] hover:text-[#f87171] transition">
                <LogOut size={18} />
              </button>
              
          </div>
          <DropdownWrapper isOpen={ShowTab} align="top" className="w-56 right-4 mb-2"> 
            <div className="p-2 space-y-1">
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-[#3e3e3e] rounded-md transition text-[#ededed] flex items-center gap-3">
                <UserPen size={18} /> 
                <span>View Profile</span>
              </button>
              <button onClick={() => setIsSettingsOpen(true)} className="w-full text-left px-3 py-2 text-sm hover:bg-[#3e3e3e] rounded-md transition text-[#ededed] flex items-center gap-3">
                <Settings size={18} /> 
                <span>Settings</span>
              </button>
              <div className="h-[1px] bg-[#3e3e3e] my-1"></div>
              <button className="w-full text-left px-3 py-2 text-sm hover:bg-[#f87171]/20 transition text-[#f87171] rounded-md flex items-center gap-3" >
                <LogOut size={18} />
                <span>Sign out</span>
              </button>
            </div>
          </DropdownWrapper>
        </ClickOutsideWrapper>
        <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
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
        ? 'bg-[#2a2a2a] text-[#3ecf8e] font-medium shadow-sm border-[#3e3e3e]' 
        : 'text-[#a0a0a0] hover:text-white hover:bg-[#2a2a2a]/50'}
    `}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);

export default Sidebar;