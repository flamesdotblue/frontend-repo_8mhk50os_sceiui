import React from 'react';
import LeaderboardHeader from './components/LeaderboardHeader';
import Podium from './components/Podium';
import LeaderboardTable from './components/LeaderboardTable';

const data = [
  {
    name: 'Bhanu Chandar',
    rank: 1,
    points: 4580,
    avatar:
      'https://ui-avatars.com/api/?name=Bhanu+Chandar&background=fef3c7&color=92400e&size=128&bold=true',
  },
  {
    name: 'Purushottam Marathe',
    rank: 2,
    points: 1280,
    avatar:
      'https://ui-avatars.com/api/?name=Purushottam+Marathe&background=f1f5f9&color=334155&size=128&bold=true',
  },
  {
    name: 'Tarun Kumar Potnuri',
    rank: 3,
    points: 1020,
    avatar:
      'https://ui-avatars.com/api/?name=Tarun+Kumar+Potnuri&background=ffedd5&color=9a3412&size=128&bold=true',
  },
  {
    name: 'Pavan Mamidipalli',
    rank: 4,
    points: 920,
    avatar:
      'https://ui-avatars.com/api/?name=Pavan+Mamidipalli&background=dbeafe&color=1e40af&size=128&bold=true',
  },
  {
    name: 'Padileti Harikrishna Reddy',
    rank: 5,
    points: 740,
    avatar:
      'https://ui-avatars.com/api/?name=Padileti+Harikrishna+Reddy&background=f1f5f9&color=334155&size=128&bold=true',
  },
];

function App() {
  // Ensure order by rank
  const ordered = [...data].sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,#e0f2fe_0%,transparent_60%),radial-gradient(1000px_600px_at_-20%_0%,#f1f5f9_0%,transparent_50%)]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <LeaderboardHeader />

        <div className="mt-6 space-y-6">
          <Podium data={ordered} />
          <LeaderboardTable data={ordered} />
        </div>
      </div>
    </div>
  );
}

export default App;
