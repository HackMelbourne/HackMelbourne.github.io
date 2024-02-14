import React, { useRef } from 'react';
import Ranking from '../../features/Leaderboard/Ranking';

export default function RiserGame() {
  const leaderboard = [
    {
      rank: 1,
      name: 'First Last',
      score: 7999,
    },
    {
      rank: 2,
      name: 'First Last',
      score: 7999,
    }
  ];

  return (
    <div className="w-screen max-w-full pt-28">

      <h2 className="text-4xl text-center font-bold mb-10">Leaderboard</h2>
      <div className="flex flex-col gap-6">
        {leaderboard.map((entry) => (
          <Ranking {...entry} />
        ))}
      </div>
      
    </div>
  );
}
