import HMButton from "../../components/Button/HMButton";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import React from 'react';

interface QuizResultsProps {
  context: { value1: number, value2: number, value3: number };
  numCategory: number;
  handleShowQuiz: () => void;
}

interface StatisticsProps {
  trait: string,
  left_width: string,
  right_width: string,
}

const QuizResults: React.FC<QuizResultsProps> = ({ context, numCategory, handleShowQuiz }) => {
  // Function that goes back to the quiz questions
  const retakeQuiz = () => {
    handleShowQuiz();
  }
  
  // Define all the fighter types
  const fighterTypeMappings: Record<string, {name: string, desc: string; img: string, alt: string }> = {
    "ATR": {name: "RPG Shooter", desc: "Some description about the type of fighter they are and their personality it's definitely not some pseudosciency result", img: "", alt: "a cat"},
    "AHR": {name: "Machine Gunner", desc: "dec", img: "", alt: "a cat"},
    "ATM": {name: "Rapier Asuna", desc: "dec", img: "", alt: "a cat"},
    "AHM": {name: "Brawler", desc: "dec", img: "", alt: "a cat"},
    "PTR": {name: "Sniper", desc: "dec", img: "", alt: "a cat"},
    "PTM": {name: "Assassin", desc: "dec", img: "", alt: "a cat"},
    "PHM": {name: "Shielder", desc: "dec", img: "", alt: "a cat"},
    "PHR": {name: "Necromancer", desc: "dec", img: "", alt: "a cat"}
  };

  // Calculate the fighter type based on the context values
  let personalityTraits = "";
  let agg_width: number = 0;
  let pass_width: number = 0;
  let tal_width: number = 0;
  let hw_width: number = 0;
  let mel_width: number = 0;
  let ran_width: number = 0;
  if (context.value1 > 0) {
    personalityTraits += "A";
    agg_width = context.value1 / numCategory;
    pass_width = 1 - agg_width;
  } else if (context.value1 < 0) {
    personalityTraits += "P";
    pass_width = Math.abs(context.value1) / numCategory;
    agg_width = 1 - pass_width;
  }
  if (context.value2 > 0) {
    personalityTraits += "T";
    tal_width = context.value2 / numCategory;
    hw_width = 1 - tal_width;
  } else if (context.value2 < 0) {
    personalityTraits += "H";
     hw_width = Math.abs(context.value2) / numCategory;
     tal_width = 1 - hw_width;
  }
  if (context.value3 > 0) {
    personalityTraits += "M";
     mel_width = context.value3 / numCategory;
     ran_width = 1 - mel_width;
  } else if (context.value3 < 0) {
    personalityTraits += "R";
     ran_width = Math.abs(context.value3) / numCategory;
     mel_width = 1 - ran_width;
  }

  // 
  const fighterType = fighterTypeMappings[personalityTraits];

  // Display an error message if fighterType is not in the map (user must not have answered all the questions)
  if (!fighterType) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">Not enough info. Take the quiz again!</p>
        <button onClick={retakeQuiz}><DynamicLink link='#'>Take quiz again</DynamicLink></button>
      </div>
    );
  }

  const statistics: StatisticsProps[] = [
    {
      trait: "Aggressive vs Passive",
      left_width: (agg_width * 100).toFixed(0),
      right_width: (pass_width * 100).toFixed(0),
    },
    {
      trait: "Talented vs Hard-working",
      left_width: (tal_width * 100).toFixed(0),
      right_width: (hw_width * 100).toFixed(0),
    },
    {
      trait: "Melee vs Range",
      left_width: (mel_width * 100).toFixed(0),
      right_width: (ran_width * 100).toFixed(0),
    }
  ]

  const getBorderRadius = (percentage: string, side: string) => {
    if (percentage == '100') {
      return '10px';
    }
    if (side == 'left') {
      return '10px 0 0 10px';
    }
    if (side == 'right') {
      return '0 10px 10px 0';
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-28">
      <p className="text-xl font-medium text-center w-11/12 mx-auto">You are a...</p>
      <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">{fighterType.name}</h1>
      
      <img src={fighterType.img} alt={fighterType.alt} className="h-20"/>
      <p className="text-center">{fighterType.desc}</p>
      
      <h2 className="text-2xl font-bold text-center">Statistics</h2>
      {statistics.map((stat) => {
        return (
        
          <>
            <h3 className="text-lg font-medium text-center">hi</h3>
            <div className="flex">
              <p>{stat.left_width}%</p>
              <div className="relative w-28 h-6 border border-white rounded-xl ">
                <div className="h-full bg-red-300 absolute top-0 left-0 " style={{width: `${stat.left_width}%`, borderRadius: getBorderRadius(stat.left_width, 'left') }}></div>
                <div className="h-full bg-blue-300 absolute top-0 right-0 " style={{width: `${stat.right_width}%`, borderRadius: getBorderRadius(stat.right_width, 'right')}}></div>
             </div>
              <p>{stat.right_width}%</p>
            </div>
        
          </>
       )
      })}
      
      <div className="flex gap-2">
        <button onClick={retakeQuiz}><DynamicLink link='#'>Take quiz again</DynamicLink></button>        
        <HMButton text="Back to home" color="primary" link="/" />
      </div>
    </div>
  )
}

export default QuizResults;