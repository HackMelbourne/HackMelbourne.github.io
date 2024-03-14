import Quiz from "../../features/HackiethonQuiz/Quiz"; 
import HMButton from "../../components/Button/HMButton";

const HackiethonQuiz = () => {


  return (
    <div className="w-screen max-w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mt-28 w-11/12 mx-auto">Cat Fighter Quiz</h1>
      <p className="mt-4 text-lg font-medium text-center w-10/12 mx-auto">Ever wondered what action hero you'd be if you were in a video game? Find out your fighter profile (cat version... because it's fun) through this quiz!</p>
      <div className="flex justify-center mt-4">
        <HMButton text="Play" color="primary" link="#"/>
      </div>
      
      <div>
        <Quiz />
      </div>
      
    </div>
  );
}

export default HackiethonQuiz;