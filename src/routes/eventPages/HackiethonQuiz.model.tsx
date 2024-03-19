export interface QuizSelection {
  title: string;
  value1Weight: number;
  value2Weight: number;
  value3Weight: number;
}

export interface QuizQuestionProps {
  title: string;
  src: string;
  selections: QuizSelection[];
  sendValueChange: CallableFunction;
}

export interface ValueChangeInput {
  value1: number;
  value2: number;
  value3: number;
}

export interface QuizQuestionModel {
  title: string;
  src: string;
  selections: QuizSelection[];
}

export interface ResultsContext {
  category: number;
}
