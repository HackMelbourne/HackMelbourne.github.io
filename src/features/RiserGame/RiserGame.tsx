import React, { useEffect, useState } from 'react';
import { setRiserGameData } from '../../services/firestoreServices';
import { RiserGameModel, RiserUserInput } from './RiserGame.model';

const RiserGame = ({ name, email, studentID, HMMember }: RiserUserInput) => {
  const GAMEATTEMPTS = 3;
  const GAMEGOAL = 2024;

  const [result, setResult] = useState<number[]>([]);

  let userGameData: RiserGameModel = {
    name: name,
    email: email,
    studentID: studentID,
    HMMember: HMMember,
    gameData: result,
  };

  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [attempts, setAttempts] = useState(0);

  // Timer Function
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive === true) {
      // Random number between 1.0 to 2.0
      // Not sure if this is working
      const timeGap = 1 + (Math.floor(Math.random() * 4) / 10 - 0.15);
      console.log(timeGap);

      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, timeGap);
    } else {
      clearInterval(interval!);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  // Timer start
  const handleStart = () => {
    setTime(0);
    setIsActive(true);
  };

  // Timer end
  const handleEnd = () => {
    setIsActive(false);
    setAttempts(attempts + 1);

    if (time > GAMEGOAL) {
      alert('Oops! You went over 2024! Your score is disqualified');
      result.push(0);
    } else {
      let tempResult = result;
      tempResult.push(time);
      setResult(tempResult);
      console.log(result);
    }

    // When game is finished
    if (attempts == GAMEATTEMPTS - 1) {
      alert('Sent Data');
      userGameData.gameData = result;
      console.log(userGameData);

      setRiserGameData(userGameData);
    }
  };

  // Button press
  const btnPress = () => {
    if (attempts < GAMEATTEMPTS) {
      if (isActive) {
        handleEnd();
      } else {
        handleStart();
      }
    } else {
      alert('You have used all your attempts');
    }
  };

  //Generating Attempts
  const attemptStyle = (id: number) => {
    if (id <= attempts) {
      return ' bg-yellow-500';
    } else {
      return 'bg-transparent';
    }
  };

  const attemptBoxes = [];
  for (let i = 1; i <= GAMEATTEMPTS; i++) {
    attemptBoxes.push(<div className={`border-4 border-yellow-500 rounded-full h-6 w-6 ${attemptStyle(i)}`} />);
  }

  return (
    <div className="mx-auto flex flex-col gap-8 items-center mt-32">
      <div className="">Get to 2024 without going over</div>
      <div className="font-bold text-8xl">{time}</div>
      <button
        onClick={btnPress}
        className="bg-yellow-500/10 border border-yellow-500 rounded-full w-48 h-48 flex content-center justify-center flex-wrap">
        <div className=" font-bold text-4xl">START</div>
      </button>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-row gap-4">{attemptBoxes}</div>
        <p>Attempts</p>
      </div>
    </div>
  );
};

export default RiserGame;
