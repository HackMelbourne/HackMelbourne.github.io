import React, { useState } from "react";
import { motion } from "framer-motion";
import { QuizQuestionModel, QuizQuestionProps } from "../../routes/eventPages/HackiethonQuiz.model";

const QuizQuestion = ({ title, selections, sendValueChange }: QuizQuestionProps) => {
  const [visible, setVisible] = useState<Boolean>(true);

  // Callback function to update parent
  const handleSelection1 = () => {
    setVisible(false);
    sendValueChange({
      value1: selections[0].value1Weight,
      value2: selections[0].value2Weight,
      value3: selections[0].value3Weight,
    });
  };

  const handleSelection2 = () => {
    setVisible(false);
    sendValueChange({
      value1: selections[1].value1Weight,
      value2: selections[1].value2Weight,
      value3: selections[1].value3Weight,
    });
  };

  if (visible) {
    return (
      <div className="flex flex-col mx-auto h-screen w-full max-w-screen-md px-6 gap-4">
        <p className="text-2xl font-bold text-center">{title}</p>

        <img className="w-full h-96"></img>

        {/* Displaying each selection for the question at hand */}
        <div className="w-full p-6 rounded bg-blue-500/10 border border-blue-500" onClick={handleSelection1}>
          {selections[0].title}
        </div>
        <div className="w-full p-6 rounded bg-yellow-500/10 border border-yellow-500" onClick={handleSelection2}>
          {selections[1].title}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default QuizQuestion;
