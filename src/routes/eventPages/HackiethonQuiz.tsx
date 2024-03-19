import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import QuizQuestion from "../../features/HackiethonQuiz/QuizQuestion";
import { QuizQuestionModel, ValueChangeInput } from "./HackiethonQuiz.model";

import fighting from "../../assets/HackiethonQuiz/boxingWaterfall.gif";
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
  };

  // Adding up the values for each question to get our context values to send to QuizResults
  const handleQuizSubmit = () => {
    let myCategory;
    console.log(attributes);

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
      title: "You are a little cat and your parents just left you alone do you:",
      selections: [
        {
          title: "Wait for your parents to come back",
          value1Weight: -1,
          value2Weight: -2,
          value3Weight: 1,
        },
        {
          title: "Jump into the wilderness",
          value1Weight: 2,
          value2Weight: 1,
          value3Weight: -2,
        },
      ],
    },
    {
      title: "You hear a scream in the distance do you:",
      selections: [
        {
          title: "Rush towards where the sound is coming from",
          value1Weight: 2,
          value2Weight: -1,
          value3Weight: -2,
        },
        {
          title: "Grab a weapon and scout the surrounding",
          value1Weight: -2,
          value2Weight: 1,
          value3Weight: 2,
        },
      ],
    },
    {
      title: "You see the Hack Melbourne club president chasing after a fellow cat, do you:",
      selections: [
        {
          title: "Rizz up the president",
          value1Weight: -2,
          value2Weight: -1,
          value3Weight: 1,
        },
        {
          title: "Fight the president",
          value1Weight: 2,
          value2Weight: 1,
          value3Weight: 2,
        },
      ],
    },
    {
      title: "Your actions are ineffective and now the president is chasing after you",
      selections: [
        {
          title: "Jump in the sketchy  looking hole",
          value1Weight: -1,
          value2Weight: 1,
          value3Weight: -1,
        },
        {
          title: "Follow the other cat",
          value1Weight: 1,
          value2Weight: -2,
          value3Weight: 1,
        },
      ],
    },
    {
      title: "You successfully ran away from the president, but you are injured",
      selections: [
        {
          title: "You go to the mountains and learn about the mysteries of essential oils",
          value1Weight: -1,
          value2Weight: -1,
          value3Weight: 0,
        },
        {
          title: "Start a GoFundMe to cover your hospital bills (you’re American)",
          value1Weight: 1,
          value2Weight: 1,
          value3Weight: -1,
        },
      ],
    },
  ];

  return (
    <div className="w-screen max-w-full lg:max-w-screen-lg mx-auto mt-16">
      {!showQuiz ? (
        <div className="w-full h-screen flex flex-col px-6 pt-16 gap-4">
          <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">Which cat fighter are you?</h1>
          <p className="mt-4 text-lg font-medium text-center mx-auto">
            Embark on your journey as a young cat and see where your future leads...
          </p>
          <img className="w-full max-w-sm mx-auto" src={fighting}></img>
          <div className="flex justify-center">
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
