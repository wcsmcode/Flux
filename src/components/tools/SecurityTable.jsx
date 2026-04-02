import React from 'react';
import { Zap, MapPinOff, CheckCircle, KeyRound } from 'lucide-react';
import { useTabs } from '../TabContext.jsx';

const events = [
  {
    id: 1,
    type: 'Brute-force Attack',
    user: 'admin@acme-corp.com',
    client: 'Acme Corp',
    location: 'IP: 103.11.x.x (Hanoi, VN)',
    device: 'Windows 11 / Chrome',
    time: '10:35:02 AM',
    status: 'critical'
  },
  {
    id: 2,
    type: 'Unusual Geography',
    user: 'ketoan02@vingroup.vn',
    client: 'VinGroup',
    location: 'IP: 45.x.x.x (Moscow, RU)',
    device: 'iPhone 13',
    time: '10:32:15 AM',
    status: 'suspicious'
  }
];

const SecurityTable = () => {
  const { navigateTo } = useTabs();
  return (
    <section className="bg-[#2a2a2a] rounded-xl border border-[#3e3e3e] shadow-lg overflow-hidden">
      <div className="p-6 border-b border-[#3e3e3e] flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2"><Zap className="text-[#f87171]" size={20} /> Hot Events Requiring Action</h2>
        <div className="flex gap-2 text-xs">
          <button onClick={() => navigateTo('Current Attacks')} className="bg-[#3e3e3e] px-3 py-1 rounded hover:bg-[#3e3e3e]/50">All</button>
          <button className="text-[#f87171] bg-[#f87171]/10 border border-[#f87171]/30 px-3 py-1 rounded font-medium">Critical</button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead className="bg-[#1c1c1c] text-[#a0a0a0] text-xs uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3">Alert Type</th>
            <th className="px-6 py-3">User / Company</th>
            <th className="px-6 py-3">Location / Device</th>
            <th className="px-6 py-3">Time</th>
            <th className="px-6 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#3e3e3e]">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-[#1c1c1c]/50 transition">
              <td className="px-6 py-4 flex items-center gap-2.5 font-medium">
                {event.status === 'critical' ? (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f87171] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f87171]"></span>
                  </span>
                ) : <MapPinOff className="text-[#fbbf24]" size={18} />}
                {event.type}
              </td>
              <td className="px-6 py-4 text-sm">{event.user} <br/><span className="text-xs text-[#a0a0a0]">Client: {event.client}</span></td>
              <td className="px-6 py-4 text-sm">{event.location} <br/><span className="text-xs text-[#a0a0a0]">{event.device}</span></td>
              <td className="px-6 py-4 text-sm text-[#a0a0a0]">{event.time}</td>
              <td className="px-6 py-4 text-right">
                <button className="text-[#f87171] bg-[#f87171]/10 px-3 py-1 rounded text-xs hover:bg-[#f87171]/30">Mitigate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SecurityTable;