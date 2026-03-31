import React, { useState } from 'react';
import StatsCard from '/src/components/tools/StatsCard';
import SecurityTable from '/src/components/tools/SecurityTable';

import {
   ShieldAlert,  LogIn, UserX , Building2, LineChart, ArrowRight, Award, Download
} from 'lucide-react';

const MainScreen = () => {
  return (
    <div className="flex-1 p-8 space-y-8 overflow-y-auto">  
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
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#fbbf24]" size={24} />
                <h2 className="text-lg font-semibold">Compliance Status</h2>
              </div>
              <div className="flex-1 flex flex-col justify-around py-4">
                <ComplianceItem label="ISO 27001" status="98% compliant" color="text-[#3ecf8e]" />
                <ComplianceItem label="NIST Cyber Framework" status="2 controls missing" color="text-[#f87171]" />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quarterly audit report</span>
                  <button className="text-xs text-[#3ecf8e] border border-[#3ecf8e] px-3 py-1 rounded hover:bg-[#3ecf8e] hover:text-[#1c1c1c] transition flex items-center gap-1.5">
                    <Download size={14} /> Download PDF
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECURITY TABLE */}
          <SecurityTable />
        </div>
  );
};

const ComplianceItem = ({ label, status, color }) => (
  <div className="flex items-center justify-between border-b border-[#3e3e3e] pb-2">
    <span className="text-sm">{label}</span>
    <span className={`text-xs px-2.5 py-1 rounded-full font-medium bg-opacity-10 ${color} bg-current`}>{status}</span>
  </div>
);

export default MainScreen;