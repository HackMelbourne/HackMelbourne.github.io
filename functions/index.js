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

// Application Management Functions
exports.getApplications = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async () => {
    const databaseId = process.env.NOTION_APPLICATIONS_DATABASE_ID || "your-applications-database-id";

    try {
      // Fetching Notion Data
      const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
          {
            property: "Submission Date",
            direction: "descending",
          },
        ],
      });

      // Parse Notion Data to required format
      const result = [];

      response.results.map((value) => {
        const props = value.properties;

        // Getting data into format required by frontend
        const applicationItem = {
          id: value.id,
          name: props.Name?.title[0]?.plain_text || "",
          email: props.Email?.email || "",
          position: props.Position?.select?.name || "",
          university: props.University?.select?.name || "",
          status: props.Status?.select?.name || "Pending",
          submissionDate: props["Submission Date"]?.date?.start || "",
          notes: props.Notes?.rich_text[0]?.plain_text || "",
        };
        result.push(applicationItem);
      });

      return result;
    } catch (e) {
      console.error("Error fetching applications:", e);
      return [];
    }
  },
);

exports.updateApplicationStatus = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async (req) => {
    const { applicationId, status, notes } = req.data;
    const databaseId = process.env.NOTION_APPLICATIONS_DATABASE_ID || "your-applications-database-id";

    try {
      await notion.pages.update({
        page_id: applicationId,
        properties: {
          Status: {
            select: {
              name: status,
            },
          },
          Notes: {
            rich_text: [
              {
                text: {
                  content: notes || "",
                },
              },
            ],
          },
        },
      });

      return { success: true, message: "Application status updated successfully" };
    } catch (e) {
      console.error("Error updating application status:", e);
      return { success: false, message: "Failed to update application status" };
    }
  },
);

// Function to sync new applications from Firestore to Notion
// This would typically be triggered by a Firestore document creation
exports.syncApplicationToNotion = onCall(
  {
    cors: CORSLIST,
    region: SERVERLOCATION,
  },
  async (req) => {
    const { applicationData } = req.data;
    const databaseId = process.env.NOTION_APPLICATIONS_DATABASE_ID || "your-applications-database-id";

    try {
      const response = await notion.pages.create({
        parent: {
          database_id: databaseId,
        },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: `${applicationData.firstName} ${applicationData.lastName}`,
                },
              },
            ],
          },
          Email: {
            email: applicationData.email,
          },
          Phone: {
            phone_number: applicationData.phone,
          },
          "Student ID": {
            rich_text: [
              {
                text: {
                  content: applicationData.studentId || "Not provided",
                },
              },
            ],
          },
          University: {
            select: {
              name: applicationData.university,
            },
          },
          Degree: {
            rich_text: [
              {
                text: {
                  content: applicationData.degree,
                },
              },
            ],
          },
          "Graduation Year": {
            rich_text: [
              {
                text: {
                  content: applicationData.graduationYear,
                },
              },
            ],
          },
          Position: {
            select: {
              name: applicationData.position,
            },
          },
          Motivation: {
            rich_text: [
              {
                text: {
                  content: applicationData.motivation,
                },
              },
            ],
          },
          Experience: {
            rich_text: [
              {
                text: {
                  content: applicationData.experience,
                },
              },
            ],
          },
          Skills: {
            multi_select: applicationData.skills.map(skill => ({ name: skill })),
          },
          Availability: {
            rich_text: [
              {
                text: {
                  content: applicationData.availability,
                },
              },
            ],
          },
          "Time Commitment": {
            select: {
              name: applicationData.timeCommitment,
            },
          },
          Portfolio: {
            url: applicationData.portfolio || null,
          },
          LinkedIn: {
            url: applicationData.linkedin || null,
          },
          GitHub: {
            url: applicationData.github || null,
          },
          Resume: {
            url: applicationData.resume || null,
          },
          Status: {
            select: {
              name: "Pending",
            },
          },
          "Submission Date": {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      });

      return { success: true, notionPageId: response.id };
    } catch (e) {
      console.error("Error syncing application to Notion:", e);
      return { success: false, error: e.message };
    }
  },
);
