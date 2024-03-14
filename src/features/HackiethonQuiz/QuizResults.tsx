import HMButton from "../../components/Button/HMButton";

const QuizResults = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-28">
      <p className="text-xl font-medium text-center w-11/12 mx-auto">You are a...</p>
      <h1 className="text-4xl font-bold text-center w-11/12 mx-auto">Fighter!</h1>
      <div className="flex items-center justify-center w-[300px] gap-4">
        <p className="text-center">Some description about the type of fighter they are and their personality it's definitely not some pseudosciency result</p>
        <img src="https://rufusandcoco.com.au/cdn/shop/articles/shutterstock_1942906447_4225x.jpg?v=1635211494" className="h-20"/>
      </div>
      <h2 className="text-2xl font-bold text-center">Statistics</h2>
      <h3 className="text-lg font-medium text-center">Aggressive vs Passive</h3>
      <div className="w-28 h-6 border border-white rounded-xl "></div>
      <h3 className="text-lg font-medium text-center">Talented vs Hard-working</h3>
      <div className="w-28 h-6 border border-white rounded-xl "></div>
      <h3 className="text-lg font-medium text-center">Range vs Melee</h3>
      <div className="w-28 h-6 border border-white rounded-xl "></div>
      <label></label>
      <div className="flex gap-2">
        <HMButton text="Quiz again" color="primary" link="/Hackiethon/quiz" />
        <HMButton text="Back to home" color="primary" link="/" />
      </div>
    </div>
  )
}

export default QuizResults;