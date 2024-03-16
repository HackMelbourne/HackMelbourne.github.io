import HMButton from "../../components/Button/HMButton";
import React from 'react';

interface QuizResultsProps {
  context: { value1: number, value2: number, value3: number };
}

const QuizResults: React.FC<QuizResultsProps> = ({ context }) => {
  // Define all the fighter types
  const fighterTypeMappings: Record<string, {name: string, desc: string; imageSrc: string }> = {
    "ATR": {name: "RPG Shooter", desc: "Some description about the type of fighter they are and their personality it's definitely not some pseudosciency result", imageSrc: ""},
    "AHR": {name: "Machine Gunner", desc: "dec", imageSrc: ""},
    "ATM": {name: "Rapier Asuna", desc: "dec", imageSrc: ""},
    "AHM": {name: "Brawler", desc: "dec", imageSrc: ""},
    "PTR": {name: "Sniper", desc: "dec", imageSrc: ""},
    "PTM": {name: "Assassin", desc: "dec", imageSrc: ""},
    "PHM": {name: "Shielder", desc: "dec", imageSrc: ""},
    "PHR": {name: "Necromancer", desc: "dec", imageSrc: ""}
  };

  // Calculate the fighter type based on the context values
  let personalityTraits = "";
  console.log(context.value1);
  console.log(context.value2);
  console.log(context.value3);
  if (context.value1 > 0) {
    personalityTraits += "A";
  } else if (context.value1 < 0) {
    personalityTraits += "P";
  }
  if (context.value2 > 0) {
    personalityTraits += "T";
  } else if (context.value2 < 0) {
    personalityTraits += "H";
  }
  if (context.value3 > 0) {
    personalityTraits += "M";
  } else if (context.value3 < 0) {
    personalityTraits += "R";
  }

  // 
  const fighterType = fighterTypeMappings[personalityTraits];

  // Display an error message if fighterType is not in the map (user must not have answered all the questions)
  if (!fighterType) {
    return (
      <>
        <div>Not enough info. Take the quiz again!</div>
        <button>Take the quiz</button>
      </>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-28">
      <p className="text-xl font-medium text-center w-11/12 mx-auto">You are a...</p>
      <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">{fighterType.name}</h1>
      
      <div className="flex items-center justify-center w-[300px] gap-4">
        <p className="text-center">{fighterType.desc}</p>
        <img src={fighterType.imageSrc} className="h-20"/>
      </div>
      
      <h2 className="text-2xl font-bold text-center">Statistics</h2>
      <h3 className="text-lg font-medium text-center">Aggressive vs Passive</h3>
      <div className="w-28 h-6 border border-white rounded-xl "></div>
      <h3 className="text-lg font-medium text-center">Talented vs Hard-working</h3>
      <div className="w-28 h-6 border border-white rounded-xl "></div>
      <h3 className="text-lg font-medium text-center">Range vs Melee</h3>
      <div className="w-28 h-6 border border-white rounded-xl "></div>
      
      <div className="flex gap-2">
        <HMButton text="Quiz again" color="primary" link="/Hackiethon/quiz" />
        <HMButton text="Back to home" color="primary" link="/" />
      </div>
    </div>
  )
}

export default QuizResults;