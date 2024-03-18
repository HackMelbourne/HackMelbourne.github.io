import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import QuizQuestion from "../../features/HackiethonQuiz/QuizQuestion";
import { QuizQuestionModel, ValueChangeInput } from "./HackiethonQuiz.model";

const HackiethonQuiz = () => {
  const navigate = useNavigate();

  // Setting up the three values
  let attributes = {
    aggression: 0,
    talent: 0,
    range: 0,
  };

  const [showQuiz, setShowQuiz] = useState(false);

  const handleShowQuiz = () => {
    setShowQuiz(true);
  };

  // Keeping track of each question's selection and the values associated with them
  const handleQuizSelection = ({ value1, value2, value3 }: ValueChangeInput) => {
    attributes.aggression += value1;
    attributes.talent += value2;
    attributes.range += value3;
    console.log(attributes);
  };

  // Adding up the values for each question to get our context values to send to QuizResults
  const handleQuizSubmit = () => {
    let myCategory;

    if (attributes.aggression >= 0) {
      if (attributes.talent >= 0) {
        if (attributes.range >= 0) {
          // ATR
          myCategory = 0;
        } else {
          // ATM
          myCategory = 2;
        }
      } else {
        if (attributes.range >= 0) {
          // AHR
          myCategory = 1;
        } else {
          // AHM
          myCategory = 3;
        }
      }
    } else {
      if (attributes.talent >= 0) {
        if (attributes.range >= 0) {
          // PTR
          myCategory = 4;
        } else {
          // PTM
          myCategory = 5;
        }
      } else {
        if (attributes.range >= 0) {
          // PHR
          myCategory = 7;
        } else {
          // PHM
          myCategory = 6;
        }
      }
    }

    navigate("/Hackiethon/quiz/results", { state: { category: myCategory } });
  };

  // Define questions and values
  const questions: QuizQuestionModel[] = [
    {
      title: "How do you react when you disagree with someone?",
      selections: [
        {
          title: "Tell them your opinion",
          value1Weight: 1,
          value2Weight: 0,
          value3Weight: 0,
        },
        {
          title: "Keep it to yourself",
          value1Weight: -1,
          value2Weight: 0,
          value3Weight: 0,
        },
      ],
    },
    {
      title: "How do you like to tackle hard problems?",
      selections: [
        {
          title: "Jump into it and figure it out as you go",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: 1,
        },
        {
          title: "Consider all possibilities before starting",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: -1,
        },
      ],
    },
    {
      title: "What kind of learner are you?",
      selections: [
        {
          title: "Pick things up easily",
          value1Weight: 0,
          value2Weight: 1,
          value3Weight: 0,
        },
        {
          title: "Takes you a while to get started",
          value1Weight: 0,
          value2Weight: -1,
          value3Weight: 0,
        },
      ],
    },
    {
      title: "How do you react when you disagree with someone?",
      selections: [
        {
          title: "Tell them your opinion",
          value1Weight: 1,
          value2Weight: 0,
          value3Weight: 0,
        },
        {
          title: "Keep it to yourself",
          value1Weight: -1,
          value2Weight: 0,
          value3Weight: 0,
        },
      ],
    },
    {
      title: "How do you like to tackle hard problems?",
      selections: [
        {
          title: "Jump into it and figure it out as you go",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: 1,
        },
        {
          title: "Consider all possibilities before starting",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: -1,
        },
      ],
    },
  ];

  return (
    <div className="w-screen max-w-full mx-auto mt-28">
      {!showQuiz ? (
        <>
          <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">Cat Fighter Quiz</h1>
          <p className="mt-4 text-lg font-medium text-center w-10/12 mx-auto">
            Ever wondered what action hero you'd be if you were in a video game? Find out your fighter profile (cat
            version... because it's fun) through this quiz!
          </p>
          <img src="https://rufusandcoco.com.au/cdn/shop/articles/shutterstock_1942906447_4225x.jpg?v=1635211494"></img>
          <div className="flex justify-center mt-4">
            <button onClick={handleShowQuiz}>
              <DynamicLink link="#">Play</DynamicLink>
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center mt-6">
          <h2 className="text-3xl font-bold text-center">Questions</h2>
          {questions.map((question) => {
            return <QuizQuestion {...question} sendValueChange={handleQuizSelection} />;
          })}
          <button onClick={handleQuizSubmit}>
            <DynamicLink link="#">Get results</DynamicLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default HackiethonQuiz;
