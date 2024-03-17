import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HMButton from "../../components/Button/HMButton";
import DynamicLink from '../../components/DynamicLink/DynamicLink';
import QuizQuestion from "../../features/HackiethonQuiz/QuizQuestion";
import QuizResults from '../../features/HackiethonQuiz/QuizResults';

const HackiethonQuiz = () => {
  const navigate = useNavigate();
  
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: {value1: number, value2: number, value3: number} }>({});
  const [context, setContext] = useState<{ value1: number; value2: number; value3: number }>({
    value1: 0,
    value2: 0,
    value3: 0,
  });

  const handleShowQuiz = () => {
    setShowQuiz(true);
  }

  // Keeping track of each question's selection and the values associated with them
  const sendValueChange = (selectedTraits: {value1: number, value2: number, value3: number}, question: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [question]: selectedTraits
    });
  };
  
  // Adding up the values for each question to get our context values to send to QuizResults
  const handleQuizSubmit = () => {
    if (Object.keys(selectedAnswers).length == (NUM_CATEGORY * 3)) {
      let contextValue1 = 0;
      let contextValue2 = 0;
      let contextValue3 = 0;
      
      Object.values(selectedAnswers).forEach(({value1, value2, value3}) => {
        
        contextValue1 += value1
        contextValue2 += value2
        contextValue3 += value3
      });
      const updatedContext = { value1: contextValue1, value2: contextValue2, value3: contextValue3 }
      setContext(updatedContext);
      navigate('/Hackiethon/quiz/results', { state: { context: updatedContext, numCategory: NUM_CATEGORY } });
    } else {
        alert('Please answer all the questions!');
    }
  };
  
  // Define questions and values
  const questions = [
    {
      title: "How do you react when you disagree with someone?",
      selections: [
        {
          title: "Tell them your opinion",
          value1Weight: 1,
          value2Weight: 0,
          value3Weight: 0,
          question: 1
        },
        {
          title: "Keep it to yourself",
          value1Weight: -1,
          value2Weight: 0,
          value3Weight: 0,
          question: 1
        }
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
          question: 2
        },
        {
          title: "Consider all possibilities before starting",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: -1,
          question: 2
        }
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
          question: 3
        },
        {
          title: "Takes you a while to get started",
          value1Weight: 0,
          value2Weight: -1,
          value3Weight: 0,
          question: 3
        }
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
          question: 4
        },
        {
          title: "Keep it to yourself",
          value1Weight: -1,
          value2Weight: 0,
          value3Weight: 0,
          question: 4
        }
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
          question: 5
        },
        {
          title: "Consider all possibilities before starting",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: -1,
          question: 5
        }
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
          question: 6
        },
        {
          title: "Takes you a while to get started",
          value1Weight: 0,
          value2Weight: -1,
          value3Weight: 0,
          question: 6
        }
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
          question: 7
        },
        {
          title: "Keep it to yourself",
          value1Weight: -1,
          value2Weight: 0,
          value3Weight: 0,
          question: 7
        }
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
          question: 8
        },
        {
          title: "Consider all possibilities before starting",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: -1,
          question: 8
        }
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
          question: 9
        },
        {
          title: "Takes you a while to get started",
          value1Weight: 0,
          value2Weight: -1,
          value3Weight: 0,
          question: 9
        }
      ],
    },
  ]
  // NUM_CATEGORY needs to be an odd number so quiz takers can get a definite trait for each category
  const NUM_CATEGORY: number = questions.length / 3;
  
  return (
    <div className="w-screen max-w-full mx-auto mt-28">

            {!showQuiz ? (
                <>
                  <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">Cat Fighter Quiz</h1>
                  <p className="mt-4 text-lg font-medium text-center w-10/12 mx-auto">Ever wondered what action hero you'd be if you were in a video game? Find out your fighter profile (cat version... because it's fun) through this quiz!</p>
                  <img src="https://rufusandcoco.com.au/cdn/shop/articles/shutterstock_1942906447_4225x.jpg?v=1635211494"></img>
                  <div className="flex justify-center mt-4">
                    <button onClick={handleShowQuiz}><DynamicLink link='#'>Play</DynamicLink></button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-4 items-center justify-center mt-6">
                  <h2 className="text-3xl font-bold text-center">Questions</h2>
                  {questions.map((question) => {
                      return (<QuizQuestion {...question} sendValueChange={sendValueChange}/>)
                  })}
                  <button onClick={handleQuizSubmit}><DynamicLink link='#'>Get results</DynamicLink></button>
                </div>
              )}
    </div>
  );
}

export default HackiethonQuiz;