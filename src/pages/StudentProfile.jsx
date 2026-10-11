import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function StudentProfile() {
  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-violet-950/30">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-200">Student Portal</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">Rahul Patel</h2>
            <p className="mt-2 text-sm text-indigo-100">Your academic journey, all in one place.</p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-2xl font-black text-white shadow-lg backdrop-blur-sm">
            RP
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-200">Roll Number</p>
            <p className="mt-1 text-sm font-bold text-white">BCA-2026-45</p>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-200">Program</p>
            <p className="mt-1 text-sm font-bold text-white">BCA Honours</p>
          </div>
        </div>
      </div>

      <div className="relative p-5 sm:p-8">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-white">Academic Overview</h3>
          <p className="mt-1 text-sm text-slate-400">Choose a section to explore your progress.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link to="marks" className="group rounded-2xl border border-violet-400/20 bg-violet-400/5 p-4 transition duration-300 hover:border-violet-400/60 hover:bg-violet-400/10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-xl text-violet-300 transition group-hover:scale-110">★</div>
            <p className="text-sm font-bold text-white">My Marks</p>
            <p className="mt-1 text-xs text-slate-400">View academic scores</p>
          </Link>

          <Link to="attendance" className="group rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-xl text-cyan-300 transition group-hover:scale-110">✓</div>
            <p className="text-sm font-bold text-white">Attendance</p>
            <p className="mt-1 text-xs text-slate-400">Check your eligibility</p>
          </Link>
        </div>

        <div className="mt-5 min-h-32 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
          <Outlet />
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <p className="text-xs text-slate-500">Student Dashboard</p>
          <p className="text-xs font-semibold text-violet-300">LEARN · GROW · SUCCEED</p>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;