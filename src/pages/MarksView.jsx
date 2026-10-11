import React from 'react';

function MarksView() {
  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-5 shadow-xl shadow-blue-900/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl"></div>
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-2xl text-cyan-300">
          ★
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Academic Performance</p>
          <p className="mt-1 text-2xl font-extrabold text-white">88% <span className="text-sm font-medium text-cyan-200">Grade A</span></p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>
          <p className="mt-2 text-xs text-slate-400">Excellent progress · Keep it up!</p>
        </div>
      </div>
    </div>
  );
}

export default MarksView;