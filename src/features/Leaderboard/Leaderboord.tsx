import React, { useEffect } from 'react';
import Ranking from './Ranking';
import { getRiserLeaderboard } from '../../services/firestoreServices';

const Leaderboord = () => {
  // Will likely need to do some async stuff here
  const leaderboardList = getRiserLeaderboard();

  return (
    <section>
      <h2 className="text-4xl text-center font-bold mb-10">Leaderboard</h2>
      <div className="flex flex-col gap-6">
        {/* Will need to update this */}
        {/* {leaderboardList.map((entry) => (
          <Ranking {...entry} />
        ))} */}
      </div>
    </section>
  );
};

export default Leaderboord;
