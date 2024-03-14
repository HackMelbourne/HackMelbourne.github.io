interface QuizSelectionProps {
  title: string;
  value1Weight: number;
  value2Weight: number;
  value3Weight: number;
  id: string;
  name: string;
}

interface QuizQuestionProps {
  title: string;
  image: string;
  alt: string;
  selections: QuizSelectionProps[];
}

const QuizQuestion = ({ title, image, alt, selections } : QuizQuestionProps) => {
  return (
    <div className="flex flex-col mx-auto">
      <p className="text-xl font-bold text-center">{title}</p>

      {selections.map((selection) => {
        return (
        <div className="mx-auto">
          <input type="radio" id={selection.id} name={selection.name} className="checked:transform checked:bg-green-300 " required/>
          <label htmlFor="q1-a1" className="inline-block relative cursor-pointer before:h-10 before:bg-green-300  ">{selection.title}
          
          </label>
        </div>
        )
      })}
      
    </div>
  )
}

export default QuizQuestion;