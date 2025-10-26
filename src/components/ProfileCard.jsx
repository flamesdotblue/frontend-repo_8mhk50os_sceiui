import React from 'react';
import { Medal } from 'lucide-react';

const rankStyles = {
  1: {
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    ring: 'ring-amber-200',
    medal: 'text-amber-500',
    gradient: 'from-amber-50 via-white to-sky-50',
  },
  2: {
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    ring: 'ring-slate-200',
    medal: 'text-slate-400',
    gradient: 'from-slate-50 via-white to-sky-50',
  },
  3: {
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    ring: 'ring-orange-200',
    medal: 'text-orange-400',
    gradient: 'from-orange-50 via-white to-sky-50',
  },
  default: {
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    ring: 'ring-sky-200',
    medal: 'text-sky-400',
    gradient: 'from-sky-50 via-white to-slate-50',
  },
};

const ProfileCard = ({ name, rank, points, size = 'md', avatar }) => {
  const styles = rankStyles[rank] || rankStyles.default;
  const isTop3 = rank <= 3;
  const avatarSize = size === 'lg' ? 'h-24 w-24' : size === 'md' ? 'h-20 w-20' : 'h-16 w-16';

  return (
    <div
      className={`relative isolate rounded-2xl ${styles.bg} p-4 shadow-sm ring-1 ${styles.ring} backdrop-blur-[1px] transition hover:shadow-md`}
    >
      <div className={`mx-auto ${avatarSize} rounded-full ring-1 ring-slate-200 shadow-sm overflow-hidden`}> 
        <img
          src={avatar}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {isTop3 && (
          <span
            className={`inline-flex items-center gap-1 rounded-full ${styles.bg} px-2.5 py-1 text-xs font-medium ${styles.color} ring-1 ${styles.ring}`}
          >
            <Medal className={`h-4 w-4 ${styles.medal}`} />
            {rank === 1 ? 'Gold' : rank === 2 ? 'Silver' : 'Bronze'}
          </span>
        )}
        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
          {points} pts
        </span>
      </div>

      <div className="mt-2 text-center">
        <div className="text-sm font-semibold text-slate-900">{name}</div>
        <div className="text-xs text-slate-500">{rank} {rank === 1 ? 'Rank' : 'Rank'}</div>
      </div>

      <div className={`pointer-events-none absolute inset-0 -z-0 rounded-2xl bg-gradient-to-br ${styles.gradient} opacity-70`}></div>
    </div>
  );
};

export default ProfileCard;
