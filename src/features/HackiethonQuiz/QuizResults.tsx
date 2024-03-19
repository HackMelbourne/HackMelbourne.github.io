import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HMButton from "../../components/Button/HMButton";
import DynamicLink from "../../components/DynamicLink/DynamicLink";
import { ResultsContext } from "../../routes/eventPages/HackiethonQuiz.model";
import { Category } from "@mui/icons-material";

const QuizResults = () => {
  const navigate = useNavigate();

  // Function that goes back to the quiz questions
  const context: ResultsContext = useLocation().state;
  const [result, setResult] = useState<number>();

  useEffect(() => {
    if (context == null) {
      navigate("/hackiethon/quiz");
    }

    setResult(context.category);
  }, []);

  const renderResult = () => {
    switch (result) {
      case 0:
        return (
          <div>
            <h2>Result 1</h2>
            <p>You got result 1!</p>
          </div>
        );
      case 1:
        return (
          <div>
            <h2>Result 2</h2>
            <p>You got result 2!</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Result 3</h2>
            <p>You got result 3!</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Result 4</h2>
            <p>You got result 4!</p>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Result 5</h2>
            <p>You got result 5!</p>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Result 6</h2>
            <p>You got result 6!</p>
          </div>
        );
      case 6:
        return (
          <div>
            <h2>Result 7</h2>
            <p>You got result 7!</p>
          </div>
        );
      case 7:
        return (
          <div>
            <h2>Result 8</h2>
            <p>You got result 8!</p>
          </div>
        );
      default:
        return (
          <div>
            <h2>Invalid Result</h2>
            <p>The result is not valid.</p>
          </div>
        );
    }
  };

  return <div>{renderResult()}</div>;
};

export default QuizResults;
