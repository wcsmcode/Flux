import React from 'react';
import { Terminal, Search } from 'lucide-react';

const SecurityLogs = () => (
  <div className="p-8 h-full flex flex-col space-y-6">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-2xl font-bold">Security Events Log</h1>
        <p className="text-sm text-[#a0a0a0]">Real-time stream of all system activities</p>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-[#a0a0a0]" size={18} />
        <input className="bg-[#2a2a2a] border border-[#3e3e3e] rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#3ecf8e] w-64" placeholder="Filter logs..." />
      </div>
    </div>
    
    <div className="flex-1 bg-black/40 border border-[#3e3e3e] rounded-xl font-mono text-xs p-6 overflow-y-auto space-y-2">
      <p className="text-[#3ecf8e]">[2026-03-31 08:30:12] INFO: System integrity check passed.</p>
      <p className="text-[#f87171]">[2026-03-31 08:31:05] WARN: Multiple failed logins from IP 103.x.x.x</p>
      <p className="text-[#a0a0a0]">[2026-03-31 08:32:44] TRACE: Tenant 'AcmeCorp' updated Security Policy #4.</p>
      {/* Mày có thể map data thật ở đây */}
    </div>
  </div>
);

export default SecurityLogs;