import QuizQuestion from "../../features/HackiethonQuiz/QuizQuestion";
import HMButton from "../../components/Button/HMButton";

const Quiz = () => {
  const questions = [
    {
      title: "How do you react when you disagree with someone?",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw3u6ZASwoRmAUFhSKXacSnO&ust=1710465957884000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMC8_bDM8oQDFQAAAAAdAAAAABAE",
      alt: "cat",
      selections: [
        {
          title: "Tell them your opinion",
          value1Weight: 1,
          value2Weight: 0,
          value3Weight: 0,
          id: "q1-a1",
          name: "q1",
        },
        {
          title: "Keep it to yourself",
          value1Weight: -1,
          value2Weight: 0,
          value3Weight: 0,
          id: "q1-a2",
          name: "q1",
        }
      ],
    },
    {
      title: "How do you like to tackle hard problems?",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fdomestic-cat&psig=AOvVaw3u6ZASwoRmAUFhSKXacSnO&ust=1710465957884000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMC8_bDM8oQDFQAAAAAdAAAAABAE",
      alt: "cat",
      selections: [
        {
          title: "Jump into it and figure it out as you go",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: 1,
          id: "q2-a1",
          name: "q2",
        },
        {
          title: "Consider all possibilities before starting",
          value1Weight: 0,
          value2Weight: 0,
          value3Weight: -1,
          id: "q2-a2",
          name: "q2",
        }
      ],
    },
  ]
  
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-6">    
      <h2 className="text-3xl font-bold text-center">Questions</h2>
      {questions.map((question) => {
          return (<QuizQuestion {...question}/>)
      })}
      <div>
        <HMButton text="Get results" color="secondary" link="/Hackiethon/quiz/result" />
      </div>
    </div>
  );
}

export default Quiz;