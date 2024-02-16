export interface RiserGameModel {
  name: string;
  email: string;
  studentID?: string;
  HMMember: boolean;
  gameData: number[];
}

export interface RiserUserInput {
  name: string;
  email: string;
  studentID?: string;
  HMMember: boolean;
}
