import { functions } from '../firebase';

import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

// Model imports
import { RiserGameModel } from '../routes/eventPages/RiserGame.model';

export async function setRiserGameData(data: RiserGameModel) {
  const setData = httpsCallable(functions, 'setRiserData');
  console.log({ ...data });
  try {
    setData({
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
  }
}

export async function getRiserLeaderboard() {
  return [];
}
