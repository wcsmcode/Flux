import React from 'react';
import { Terminal, Search } from 'lucide-react';

const SecurityLogs = () => (
  <div className="p-8 h-full flex flex-col space-y-6">
    <div className="flex-1 bg-black/40 border border-[#3e3e3e] rounded-xl font-mono text-[11px] p-6 overflow-y-auto flex flex-col shadow-inner">
      {/* DANH SÁCH LOG CŨ */}
      <div className="space-y-1.5 mb-4">
        <p className="text-[#3ecf8e] opacity-80 underline underline-offset-4 decoration-[#3ecf8e]/30 mb-2 font-bold tracking-widest">-- HISTORICAL ACTIVITY --</p>
        <p className="text-[#3ecf8e]">[2026-03-31 08:30:12] INFO: System integrity check passed.</p>
        <p className="text-[#f87171] animate-pulse">[2026-03-31 08:31:05] WARN: Multiple failed logins from IP 103.x.x.x</p>
        <p className="text-[#a0a0a0]">[2026-03-31 08:32:44] TRACE: Tenant 'AcmeCorp' updated Security Policy #4.</p>
      </div>

      {/* PHẦN TERMINAL PROMPT ($ ~) */}
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
);

export default SecurityLogs;