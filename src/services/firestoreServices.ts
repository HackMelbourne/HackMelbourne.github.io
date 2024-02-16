import { functions } from '../firebase';

import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

// Model imports
import { RiserGameModel } from '../features/RiserGame/RiserGame.model';

export async function setRiserGameData(data: RiserGameModel) {
  const addMessage = httpsCallable(functions, 'setRiserData');
  addMessage({ ...data }).then((result) => {
    console.log('Successful');
    return result;
  });
}
