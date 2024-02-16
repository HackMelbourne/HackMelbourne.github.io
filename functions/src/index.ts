/**
 * Import function triggers from their respective submodules:
 *
 *
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { onRequest } from 'firebase-functions/v2/https';

import { setGlobalOptions } from 'firebase-functions/v2';

import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp();

// Set the maximum instances to 10 for all functions
setGlobalOptions({ maxInstances: 10 });

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const setRiserData = onRequest(
  { cors: [/hack\.Melbourne$/, /.*hackmelbourne\.netlify\.app.*/] },
  async (req, res) => {
    const result = {
      name: req.query.name,
      email: req.query.email,
      studentID: req.query.studentID,
      HMMember: req.query.HMMember,
      gameData: req.query.gameData,
    };

    const writeResult = await getFirestore().collection('riserData').add(result);

    res.json({ result: `Message with ID: ${writeResult.id} added` });
  },
);
