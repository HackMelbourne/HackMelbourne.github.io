import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface QuizSelectionProps {
  title: string;
  value1Weight: number;
  value2Weight: number;
  value3Weight: number;
  question: number;
}

interface QuizQuestionProps {
  title: string;
  selections: QuizSelectionProps[];
  sendValueChange: (selectedValues: {value1: number, value2: number, value3: number}, index: number) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ title, selections, sendValueChange }) => {
  const [isToggled, setIsToggled] = useState<boolean[]>([false, false])

  // Changing the button styles after being clicked and sending the values for one question to the Quiz component
  const handleSelection = (selectedValues: {value1: number, value2: number, value3: number}, qn: number, index: number) => {
    const updatedToggles: boolean[] = [];
    updatedToggles[index] = !updatedToggles[index];
    setIsToggled(updatedToggles);
    sendValueChange(selectedValues, qn);
  };

  return (
    <div className="flex flex-col mx-auto">
      <p className="text-xl font-bold text-center">{title}</p>

      {/* Displaying each selection for the question at hand */}
      {selections.map((selection, index) => (
        <div className="mx-auto">
          <motion.button
            onClick={() => handleSelection({value1: selection.value1Weight, value2: selection.value2Weight, value3: selection.value3Weight}, selection.question, index)}
            style={{
              backgroundColor: isToggled[index] ? '#a0cde0' : '#de0f0d',
              color: '#ffffff',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {selection.title}
          </motion.button>
        </div>
      ))}

    </div>
  );
};

export default QuizQuestion;