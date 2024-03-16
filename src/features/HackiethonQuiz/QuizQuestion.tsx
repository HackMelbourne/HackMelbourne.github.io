import React from 'react';

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

  // Sending the values for one question to the Quiz component
  const handleSelection = (selectedValues: {value1: number, value2: number, value3: number}, qn: number) => {
    sendValueChange(selectedValues, qn);
  };

  return (
    <div className="flex flex-col mx-auto">
      <p className="text-xl font-bold text-center">{title}</p>

      {/* Displaying each selection for the question at hand */}
      {selections.map((selection) => (
        <div className="mx-auto">
          <button className=" " onClick={() => handleSelection({value1: selection.value1Weight, value2: selection.value2Weight, value3: selection.value3Weight}, selection.question)}>
            {selection.title}
          </button>
        </div>
      ))}

    </div>
  );
};

export default QuizQuestion;