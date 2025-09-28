import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { setRiserGameData } from "../../services/firestoreServices";
import { RiserGameModel, RiserOutputData, RiserUserInput } from "./RiserGame.model";

const OWeekGame = () => {
  const navigate = useNavigate();
  const data: RiserUserInput = useLocation().state;

  // If data is empty
  useEffect(() => {
    window.scrollTo(0, 0);

    if (data == null) {
      navigate("/O-Week");
    }
  }, []);

  const GAMEATTEMPTS = 3;
  const GAMEGOAL = 2024;

  const [result, setResult] = useState<number[]>([]);

  const userGameData: RiserGameModel = {
    name: data.name,
    email: data.email,
    studentID: data.studentID,
    HMMember: data.HMMember,
    gameData: result,
  };

  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [btnText, setBtnText] = useState("Start");

  // Timer Function
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive === true) {
      // Random number between 1.0 to 2.0
      // Does not work
      // const timeGap = 1 + (Math.floor(Math.random() * 4) / 10 - 0.15);
      // console.log(timeGap);

      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1);
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
    setBtnText("Stop");
  };

  // Timer end
  const handleEnd = () => {
    setIsActive(false);
    setAttempts(attempts + 1);
    setBtnText("Start");

    if (time > GAMEGOAL) {
      alert("Oops! You went over 2024! Your score is disqualified");
      result.push(0);
    } else {
      const tempResult = result;
      tempResult.push(time);
      setResult(tempResult);
      console.log(result);
    }

    // When game is finished
    if (attempts == GAMEATTEMPTS - 1) {
      userGameData.gameData = result;
      console.log(userGameData);

      // Need to make sure setRiserGameData comes back before navigate
      setRiserGameData(userGameData).then((value) => {
        console.log("posted", value);

        // Change this when backend returns values
        const tempValue: RiserOutputData = { ...value };

        navigate("/O-Week/complete", { state: { ...tempValue } });
      });

      setBtnText("Sending...");
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
      alert("You have used all your attempts");
    }
  };

  //Generating Attempts
  const attemptStyle = (id: number) => {
    if (id <= attempts) {
      return " bg-yellow-500";
    } else {
      return "bg-transparent";
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
        <div className=" font-bold text-4xl">{btnText}</div>
      </button>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-row gap-4">{attemptBoxes}</div>
        <p>Attempts</p>
      </div>
    </div>
  );
};

export default OWeekGame;
