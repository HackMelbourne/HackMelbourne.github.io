import React, { useEffect } from 'react';
import Ranking from './Ranking';
import { getRiserLeaderboard } from '../../services/firestoreServices';

type Rank = {
  name: string,
  score: number,
  id: string,
};

const RiserLeaderboard = () => {
  // Will likely need to do some async stuff here
  const leaderboardList = getRiserLeaderboard();

  return (
    <section>
      <h2 className="text-4xl text-center font-bold mb-10">Leaderboard</h2>
      <div className="flex flex-col gap-6">
        {/* Will need to update this */}
        {leaderboardList.length > 0 && (leaderboardList.map((entry : Rank, i : number) => {
          const { name, score, id } = entry;
          return (
            <Ranking rank={i} name={name} score={score} />
        )}))}
      </div>
    </section>
  );
};

export default RiserLeaderboard;
