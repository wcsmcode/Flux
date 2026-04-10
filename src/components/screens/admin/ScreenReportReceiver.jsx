import React, { useState } from 'react';
import { 
  Inbox, CheckCircle, Clock, AlertCircle, 
  Search, Filter, MoreVertical, ChevronRight 
} from 'lucide-react';

const ScreenReportReceiver = () => {
  const [reports, setReports] = useState([
    
  ]); // wait for backend

  return (
    <div className="flex h-full w-full overflow-hidden bg-[#0a0a0a] text-[#ededed]">
      
      {/* 1. CỘT TRÁI: DANH SÁCH BÁO CÁO (MASTER) */}
      <aside className="w-[400px] border-r border-[#1e1e1e] flex flex-col shrink-0 bg-[#0d0d0d]">
        
        {/* Header của cột trái & Bộ lọc */}
        <div className="p-4 border-b border-[#1e1e1e] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Incidents</h2>
            <div className="flex gap-1">
              <button className="p-2 hover:bg-[#2a2a2a] rounded-lg text-[#a0a0a0]"><Filter size={18} /></button>
            </div>
          </div>

          {/* Tabs bộ lọc nhanh giống Gmail (Primary, Social,...) */}
          <div className="flex gap-2 p-1 bg-[#161616] rounded-xl border border-[#2a2a2a]">
            <button className="flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg bg-[#3ecf8e]/10 text-[#3ecf8e]">Unread</button>
            <button className="flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg text-[#555] hover:text-[#a0a0a0]">Resolved</button>
            <button className="flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg text-[#555] hover:text-[#a0a0a0]">Flagged</button>
          </div>
        </div>

        {/* Danh sách cuộn */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
        </div>
      </aside>

      {/* 2. CỘT PHẢI: NỘI DUNG CHI TIẾT (DETAIL) */}
      <main className="flex-1 flex flex-col bg-[#0a0a0a]">
        
        {/* Toolbar hành động nhanh */}
        <div className="h-14 border-b border-[#1e1e1e] flex items-center justify-between px-6 bg-[#0d0d0d]/50 shrink-0">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#3e3e3e] text-xs font-medium hover:bg-[#2a2a2a] transition-all">
              <CheckCircle size={14} className="text-[#3ecf8e]" /> Resolve
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#3e3e3e] text-xs font-medium hover:bg-[#2a2a2a] transition-all text-[#f87171]">
              <AlertCircle size={14} /> Escalated
            </button>
          </div>
          <button className="p-2 hover:bg-[#2a2a2a] rounded-lg text-[#555]"><MoreVertical size={18} /></button>
        </div>

        {/* Nội dung báo cáo */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Header báo cáo */}
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold text-white leading-tight">Brute Force Attack on Port 22 Detected</h1>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3ecf8e] text-black font-bold flex items-center justify-center text-xs">GT</div>
                <div>
                  <p className="text-sm font-bold text-white">GlobalTech Corp (IT Manager)</p>
                  <p className="text-[11px] text-[#555]">To: Flux Security Team • flux-soc@support.com</p>
                </div>
              </div>
            </div>

            {/* Nội dung chính */}
            <div className="prose prose-invert max-w-none text-[#a0a0a0] leading-relaxed">
              <p>Chào đội ngũ Flux,</p>
              <p>Hệ thống bên tao vừa ghi nhận hơn 500 yêu cầu đăng nhập thất bại chỉ trong vòng 2 phút nhắm vào SSH của Database Server. Mày kiểm tra giúp xem có cần phải thực hiện <strong>IP Hard-Block</strong> cho dải IP này không?</p>
              
              <div className="my-6 p-4 bg-[#111] rounded-xl border border-[#1e1e1e] font-mono text-[12px] text-[#3ecf8e]">
                [AUTH_FAILURE] user=admin ip=103.21.14.92 timestamp=2026-04-10T09:44:01 <br />
                [AUTH_FAILURE] user=root ip=103.21.14.92 timestamp=2026-04-10T09:44:05
              </div>
            </div>

            {/* Chỗ để gõ phản hồi (Reply box) */}
            <div className="mt-12 p-1 bg-[#161616] border border-[#2a2a2a] rounded-2xl focus-within:border-[#3ecf8e] transition-all">
              <textarea 
                className="w-full bg-transparent border-none p-4 text-sm min-h-[150px] resize-none focus-within:outline-none text-[#ededed] placeholder:text-[#555] caret-[#3ecf8e]"
                placeholder="Click here to Reply..."
              ></textarea>
              <div className="flex justify-end p-2">
                <button className="px-6 py-2 bg-[#3ecf8e] text-black font-bold rounded-xl text-xs hover:brightness-110">Send Response</button>
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
};


export default ScreenReportReceiver;