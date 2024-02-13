export interface RiserGameModel {
    userInfo: RiserUserInfo;
    gameData: number[];
}

export interface RiserUserInfo {
    name: string;
    email: string;
    studentID?: string;
    HMMember: boolean;
}