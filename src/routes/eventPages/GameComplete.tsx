import React from 'react';
import HMButton from '../../components/Button/HMButton';
import { UMSU_LINK } from '../../constants';
import RiserLeaderboard from '../../features/Leaderboard/RiserLeaderboard';

const GameComplete = () => {
  return (
    <div className="w-screen flex flex-col items-center max-w-2xl pt-32 mx-auto px-8 gap-8">
      <div className="flex flex-col text-center gap-2">
        <p>#3 in Ranking</p>
        <h1 className="text-8xl font-bold text-center">2022</h1>
        <p className="text-xl font-semibold">Your Highscore</p>
      </div>
      <div className="flex flex-col p-8 px-8 bg-blue-600/10 border border-blue-600 rounded-md max-w-sm gap-4">
        <h3 className="text-xl font-semibold text-center">Submitted!</h3>
        <p className="text-center">
          Thanks for playing our game! If you are interested in HM and what we do, you can join our club for free with
          the link below!
        </p>
        <HMButton link={UMSU_LINK} text="Join HM" color="primary" span={true}></HMButton>
      </div>
      <RiserLeaderboard></RiserLeaderboard>
    </div>
  );
};

export default GameComplete;
