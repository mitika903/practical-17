import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentProfile from './pages/StudentProfile';
import MarksView from './pages/MarksView';
import AttendanceView from './pages/AttendanceView';

const App = () => {
  return (
    <div className="min-h-screen bg-[#070b18] px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-violet-400">
          Campus Connect
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Student Dashboard
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Your results. Your progress. Your future.
        </p>
      </div>

      <Routes>
        <Route path="/" element={<StudentProfile />}>
          <Route path="marks" element={<MarksView />} />
          <Route path="attendance" element={<AttendanceView />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;