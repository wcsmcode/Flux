import React, { useState } from 'react';
import StatsCard from '/src/components/tools/StatsCard';
import SecurityTable from '/src/components/tools/SecurityTable';
import {Select} from '/src/components/tools/items.jsx';

import {
   ShieldAlert,  LogIn, UserX , Building2, LineChart, ArrowRight, CodeXml
} from 'lucide-react';

const MainScreen = () => {
  const Clients = [
    { value: 'client-a', label: 'Client A' },
    { value: 'client-b', label: 'Client B' },
    { value: 'client-c', label: 'Client C' },
    { value: 'client-d', label: 'Client D' },
  ];
  const [selectedClient, setSelectedClient] = useState(Clients[0].value);

  return (
    <div className="flex-1 p-8 space-y-8 overflow-y-auto">  
          <div className="p-4 w-64">
            <Select 
              label="Clients"
              options={Clients}

            />
          </div>
          {/* STATS SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatsCard title="Total Logins (24h)" value="45,102" trend="+5.2% vs yesterday" icon={<LogIn size={20}/>} color="sbTeal" />
            <StatsCard title="Critical Alerts" value="18" trend="Needs immediate action" icon={<ShieldAlert size={20}/>} color="sbRed" isAlert />
            <StatsCard title="Auto Block (SOAR)" value="112" trend="IP & accounts blocked" icon={<UserX size={20}/>} color="sbYellow" />
            <StatsCard title="Enterprise Customers" value="8 / 10" trend="SOC SaaS ecosystem" icon={<Building2 size={20}/>} color="sbTeal" />
          </section>

          {/* CHARTS & COMPLIANCE SECTION */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-[#2a2a2a] p-6 rounded-xl border border-[#3e3e3e] shadow-lg flex flex-col h-[400px]">
              <div className="flex items-center gap-3 mb-6">
                <LineChart className="text-[#3ecf8e]" size={24} />
                <h2 className="text-lg font-semibold">Failed Login Frequency (Brute-force detect)</h2>
                <button className="ml-auto text-xs text-[#3ecf8e] hover:underline flex items-center gap-1">
                  View details <ArrowRight size={12} />
                </button>
              </div>
              {/* Mockup Chart Area */}
              <div className="flex-1 w-full flex items-end gap-1 relative border-b border-l border-[#3e3e3e]/50 pb-1 pl-1">
                {[20, 35, 45, 60, 40, 95, 70, 55, 45, 20].map((height, i) => (
                  <div 
                    key={i} 
                    style={{ height: `${height}%` }} 
                    className={`flex-1 rounded-t hover:opacity-80 transition-all ${height > 80 ? 'bg-[#f87171] animate-pulse' : 'bg-[#3ecf8e]/20'}`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-[#3e3e3e] shadow-lg flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <CodeXml className="text-[#3ecf8e]" size={24} />
                <h2 className="text-lg font-semibold">Logs</h2>
              </div>
              <div className="flex-1 flex flex-col justify-between bg-black rounded-lg p-4 mb-4">  
                <div className="space-y-1.5 mb-4 font-mono text-[11px] overflow-y-auto">
                  <p className="text-[#3ecf8e]">[2026-03-31 08:30:12] INFO: System integrity check passed.</p>
                  <p className="text-[#f87171] animate-pulse">[2026-03-31 08:31:05] WARN: Multiple failed logins from IP 103.x.x.x</p>
                  <p className="text-[#a0a0a0]">[2026-03-31 08:32:44] TRACE: Tenant 'AcmeCorp' updated Security Policy #4.</p> 
                </div>
                <div className="flex items-center gap-2 group pt-2">
                  <span className="text-[#3ecf8e] font-bold select-none italic">~ $</span>
                  <input 
                    type="text"
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-[#ededed] placeholder:text-[#3e3e3e] caret-[#3ecf8e]"
                    placeholder="Type command (e.g. 'ban ip', 'clear', 'scan')..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        console.log("Mày vừa ra lệnh:", e.target.value);
                        e.target.value = ""; // Xóa sau khi Enter cho giống thật
                      }
                    }}
                  />
                </div>

              </div>
            </div>
          </section>

          {/* SECURITY TABLE */}
          <SecurityTable />
        </div>
  );
};

export default MainScreen;