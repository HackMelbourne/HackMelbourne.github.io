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
// const { getFirestore } = require("firebase-admin/firestore");

// Notion Data
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_KEY });

initializeApp();

// Set the maximum instances to 10 for all functions
setGlobalOptions({ maxInstances: 10 });

const CORSLIST = [/hackmelbourne\.netlify\.app$/, "https://hack.melbourne"];
const SERVERLOCATION = "australia-southeast1";

exports.getEventCalendar = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async () => {
    const databaseId = "f619a35d55c54430960cc6252308fd74";

    try {
      // Fetching Notion Data
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

      // Parsing Notion Data
      const result = [];

      response.results.map((value) => {
        const props = value.properties;

        // Getting data into format required by frontend
        const calendarItem = {
          title: props.Title.rich_text[0].plain_text,
          description: props.Description.rich_text[0].plain_text,
          image: props.Image.files[0].file.url,
          date: props.Date.date.start,
          link: props.Link.url,
          color: props.Color.rich_text[0].plain_text,
          venue: props.Venue.rich_text[0].plain_text,
        };
        result.push(calendarItem);
      });

      return result;
    } catch (e) {
      return e;
    }
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
