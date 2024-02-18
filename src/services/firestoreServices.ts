import { functions } from '../firebase';

import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

// Model imports
import { RiserGameModel, RiserOutputData } from '../routes/eventPages/RiserGame.model';

export async function setRiserGameData(data: RiserGameModel) {
  const setData = httpsCallable(functions, 'setRiserData');
  try {
    return setData({
      name: data.name,
      email: data.email,
      studentID: data.studentID,
      HMMember: data.HMMember,
      gameData: data.gameData,
    }).then((result) => {
      console.log('Successful');
      return result;
    });
  } catch (e) {
    console.log(e);
    alert('Oops something went wrong try again');
  }
}

export async function getRiserLeaderboard() {
  return [];
}
