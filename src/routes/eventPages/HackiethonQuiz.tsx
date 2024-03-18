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
        <div className="w-full flex flex-col px-6">
          <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">Which cat fighter are you?</h1>
          <p className="mt-4 text-lg font-medium text-center mx-auto">
            Embark on your journey as a young cat and see where your future leads...
          </p>
          <img src="https://rufusandcoco.com.au/cdn/shop/articles/shutterstock_1942906447_4225x.jpg?v=1635211494"></img>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowQuiz}
              className="px-6 w-full font-bold text-lg  py-4 rounded bg-yellow-500/10 border border-yellow-500">
              Play
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen overflow-hidden">
          <div className="flex flex-col items-center justify-center mt-6">
            {questions.map((question) => {
              return <QuizQuestion {...question} sendValueChange={handleQuizSelection} />;
            })}
            <div className="w-full h-screen flex flex-col gap-4 items-center pt-8 px-6">
              <h2 className=" text-4xl font-bold">5 Years later...</h2>
              <img className="w-full h-96"></img>
              <button
                onClick={handleQuizSubmit}
                className="px-6 w-full font-bold text-lg  py-4 rounded bg-yellow-500/10 border border-yellow-500">
                Get results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HackiethonQuiz;
