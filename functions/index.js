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

// Notion Data
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

initializeApp();

// Set the maximum instances to 10 for all functions
setGlobalOptions({ maxInstances: 10 });

exports.getEventCalendar = onCall(
  {
    cors: ["https://hackmelbourne.netlify.app", "https://hack.melbourne", "http://localhost:5173"],
    region: "australia-southeast1",
  },
  async (req) => {
    console.log("test");
    const databaseId = "f619a35d55c54430960cc6252308fd74";
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: "Live",
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
    });
    console.log(response.results);
    return response;
  },
);

// exports.setRiserData = onCall(async (req) => {
//   console.log(req.data.name);
//   const result = {
//     name: req.data.name,
//     email: req.data.email,
//     studentID: req.data.studentID,
//     HMMember: req.data.HMMember,
//     gameData: req.data.gameData,
//   };

//   await getFirestore().collection("riserData").add(result);

//   return { text: "hi" };
// });

// exports.setRiserData = onCall(async (req) => {
//   console.log(req.data.name);
//   const result = {
//     name: req.data.name,
//     email: req.data.email,
//     studentID: req.data.studentID,
//     HMMember: req.data.HMMember,
//     gameData: req.data.gameData,
//   };

//   await getFirestore().collection("riserData").add(result);

//   return { text: "hi" };
// });
