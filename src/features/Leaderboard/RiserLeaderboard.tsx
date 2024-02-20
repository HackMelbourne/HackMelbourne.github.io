import React, { useEffect, useState } from "react";
import Ranking from "./Ranking";
import { getRiserLeaderboard } from "../../services/firestoreServices";

interface RankEntry {
  name: string;
  score: number;
  id: string;
}

const RiserLeaderboard = () => {
  // Will likely need to do some async stuff here
  const [leaderboardList, setLeaderboardList] = useState<RankEntry[]>([]);

  // Code runs when component mounts
  useEffect(() => {
    getRiserLeaderboard().then((result: RankEntry[]) => {
      setLeaderboardList(result);
    });

    console.log(leaderboardList);
  }, []);

  return (
    <section>
      <h2 className="text-4xl text-center font-bold mb-10">Leaderboard</h2>
      <div className="flex flex-col gap-6">
        {leaderboardList.length > 0 &&
          leaderboardList.map((entry: RankEntry, i: number) => {
            const { name, score, id } = entry;
            return <Ranking rank={i + 1} name={name} score={score} />;
          })}
      </div>
    </section>
  );
};

export default RiserLeaderboard;
