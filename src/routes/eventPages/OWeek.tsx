import React, { useRef } from 'react';
import RiserGame from '../../features/RiserGame/RiserGame';

const OWeek = () => {
  return (
    <div className="flex flex-col w-screen px-4">
      <RiserGame name="John" email="John@gmail" HMMember={false} studentID="239992"></RiserGame>
    </div>
  );
};

export default OWeek;
