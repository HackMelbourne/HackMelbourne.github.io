/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";

import { setGlobalOptions } from "firebase-functions/v2";

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();

// Set the maximum instances to 10 for all functions
setGlobalOptions({ maxInstances: 10 });

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest(
  { cors: [/hack\.melbourne$/, "flutter.com"] },
  async (req, res) => {
    const result = {
      userInfo: req.query.userInfo,
      gameData: req.query.gameData,
    };

    const writeResult = await getFirestore()
      .collection("riserData")
      .add(result);

    res.json({ result: `Message with ID: ${writeResult.id} added` });
  },
);
