import React from 'react';
import { useLocation } from 'react-router-dom';

import RiserGame from '../../features/RiserGame/RiserGame';
import { RiserUserInput } from '../../features/RiserGame/RiserGame.model';

const OWeekGame = () => {
  let data: RiserUserInput = useLocation().state;

  console.log(useLocation().state);

  return <RiserGame {...data}></RiserGame>;
};

export default OWeekGame;
