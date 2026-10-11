import React from 'react';

function AttendanceView() {
  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 p-5 shadow-xl shadow-emerald-900/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/20 blur-2xl"></div>
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-400/10 text-2xl text-emerald-300">
          ✓
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Attendance Report</p>
          <p className="mt-1 text-2xl font-extrabold text-white">92% <span className="text-sm font-medium text-emerald-200">Eligible</span></p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300"></div>
          </div>
          <p className="mt-2 text-xs text-slate-400">Great consistency · Stay on track!</p>
        </div>
      </div>
    </div>
  );
}

export default AttendanceView;