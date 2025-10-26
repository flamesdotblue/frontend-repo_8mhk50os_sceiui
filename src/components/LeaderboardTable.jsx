import React from 'react';

const LeaderboardTable = ({ data }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="overflow-hidden">
        <div className="grid grid-cols-3 rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <div>Name</div>
          <div>Rank</div>
          <div className="text-right">Points</div>
        </div>
        <div className="mt-2 space-y-2">
          {data.map((item, idx) => (
            <div
              key={item.rank}
              className={`grid grid-cols-3 items-center rounded-xl px-4 py-3 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md ${
                idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-10 w-10 rounded-full ring-1 ring-slate-200 shadow-sm object-cover"
                />
                <span className="text-sm font-medium text-slate-900">{item.name}</span>
              </div>
              <div className="text-sm text-slate-700">{item.rank}</div>
              <div className="text-right">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item.points} pts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderboardTable;
