import React from 'react';
import ProfileCard from './ProfileCard';

const Podium = ({ data }) => {
  // Expect data ordered by rank
  const podium = data.slice(0, 5);

  return (
    <section className="relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-white"></div>

      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
        {/* 2nd */}
        <div className="md:col-span-1 md:order-1 order-2">
          <ProfileCard
            name={podium[1].name}
            rank={podium[1].rank}
            points={podium[1].points}
            avatar={podium[1].avatar}
            size="md"
          />
        </div>

        {/* 1st */}
        <div className="md:col-span-3 md:order-2 order-1">
          <div className="mx-auto max-w-md">
            <ProfileCard
              name={podium[0].name}
              rank={podium[0].rank}
              points={podium[0].points}
              avatar={podium[0].avatar}
              size="lg"
            />
          </div>
        </div>

        {/* 3rd */}
        <div className="md:col-span-1 md:order-3 order-3">
          <ProfileCard
            name={podium[2].name}
            rank={podium[2].rank}
            points={podium[2].points}
            avatar={podium[2].avatar}
            size="md"
          />
        </div>

        {/* 4th and 5th */}
        <div className="md:col-span-2 order-4">
          <ProfileCard
            name={podium[3].name}
            rank={podium[3].rank}
            points={podium[3].points}
            avatar={podium[3].avatar}
            size="sm"
          />
        </div>
        <div className="md:col-span-2 order-5">
          <ProfileCard
            name={podium[4].name}
            rank={podium[4].rank}
            points={podium[4].points}
            avatar={podium[4].avatar}
            size="sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Podium;
