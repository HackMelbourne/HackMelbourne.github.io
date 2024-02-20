/**
 * Import function triggers from their respective submodules:
 *
 *
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const { onCall } = require("firebase-functions/v2/https");

const { setGlobalOptions } = require("firebase-functions/v2");

const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp();

// Set the maximum instances to 10 for all functions
setGlobalOptions({ maxInstances: 10 });

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

exports.setRiserData = onCall(async (req) => {
  console.log(req.data.name);
  const result = {
    name: req.data.name,
    email: req.data.email,
    studentID: req.data.studentID,
    HMMember: req.data.HMMember,
    gameData: req.data.gameData,
  };

  await getFirestore().collection("riserData").add(result);

  return { text: "hi" };
});
