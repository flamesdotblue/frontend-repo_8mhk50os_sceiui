import React from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const LeaderboardHeader = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          aria-label="Back"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-200"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Leaderboard</h1>
      </div>
      <div>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200">
          <span>All Department</span>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </button>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
