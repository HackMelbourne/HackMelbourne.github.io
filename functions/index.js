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

exports.getHackiethonBrackets = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async () => {
    const databaseId = "12bce78ac62e42daaf6d68423f92ac1e";

    try {
      // Fetching Notion Data
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Live",
          checkbox: {
            equals: true,
          },
        },
      });

      // Parsing Notion Data
      const result = [];

      response.results.map((value) => {
        const props = value.properties;

        // Getting data into format required by frontend
        const calendarItem = {
          title: props.Name.title[0].plain_text,
          link: props.Link.url,
        };
        result.push(calendarItem);
      });

      return result;
    } catch (e) {
      return e;
    }
  },
);

exports.getMeetTheTeam = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async () => {
    const databaseId = "892b8414893b4e58a387cafb0a80a58a";

    try {
      // Fetching Notion Data
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Live",
          checkbox: {
            equals: true,
          },
        },
      });

      // Parsing Notion Data
      const result = [];

      response.results.map((value) => {
        const props = value.properties;

        // Getting data into format required by frontend
        const memberItem = {
          name: props.Name.title[0].plain_text,
          teamName: props.Team.select.name,
          role: props.Role.select.name,
          about: props.About.rich_text[0].plain_text,
          imageUrl: props.Image.files[0].file.url,
          socialLinks: props.Socials.rich_text.map((obj) => obj.plain_text),
        };
        result.push(memberItem);
      });

      return result;
    } catch (e) {
      return e;
    }
  },
);

exports.getLinksPage = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async () => {
    const databaseId = "fae9fb8433d540fe97cb4c4445936e41";

    try {
      // Fetching Notion Data
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "isLive",
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: "Priority",
            direction: "ascending",
          },
        ],
      });

      // Parse Notion Data to required format

      const result = [];

      response.results.map((value) => {
        const props = value.properties;

        // Getting data into format required by frontend
        const linkItem = {
          title: props.Title.title[0].plain_text,
          link: props.Link.url,
          category: props.Type.select.name,
        };
        result.push(linkItem);
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
