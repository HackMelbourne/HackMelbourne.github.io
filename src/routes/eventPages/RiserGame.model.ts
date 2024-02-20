export interface RiserGameModel {
  name: string;
  email: string;
  studentID: string;
  HMMember: boolean;
  gameData: number[];
}

export interface RiserUserInput {
  name: string;
  email: string;
  studentID: string;
  HMMember: boolean;
}

export interface RiserOutputData {
  score: number;
  // ranking: number;
}

export interface RankEntry {
  name: string;
  score: number;
  id: string;
}
