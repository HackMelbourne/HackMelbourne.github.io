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

// Application Database ID
const APPLICATION_DATABASE_ID = "270dc74ea0ae803e8904e40ebe203011";

// Helper function to create page properties
function createPageProperties(pageData) {
  const properties = {
    Name: {
      title: [{
        text: { content: pageData.name }
      }]
    },
    Email: {
      email: pageData.email
    },
    Status: {
      select: { name: "Pending" }
    },
    "Submission Date": {
      date: { start: new Date().toISOString() }
    }
  };

  // Add optional fields if provided
  if (pageData.role) {
    properties.Role = {
      select: { name: pageData.role }
    };
  }

  if (pageData.motivation && pageData.motivation.trim()) {
    properties["Why are you applying?"] = {
      rich_text: [{
        text: { content: pageData.motivation }
      }]
    };
  }

  return properties;
}

// Helper function to handle API errors
function handleApiError(error, functionName) {
  console.error(`Error in ${functionName}:`, error);
  return {
    success: false,
    error: error.message || 'An unexpected error occurred',
    details: error
  };
}

// POST /api/pages - Create a new page
async function createNewPage(pageData) {
  try {
    // Validate the page data
    if (!pageData.name) {
      throw new Error('Page name is required');
    }
    
    if (!pageData.email) {
      throw new Error('Email is required');
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(pageData.email)) {
      throw new Error('Invalid email format');
    }
    
    // Create the page properties
    const properties = createPageProperties(pageData);
    
    // Create the page in Notion
    const newPage = await notion.pages.create({
      parent: { database_id: APPLICATION_DATABASE_ID },
      properties: properties
    });
    
    return {
      success: true,
      data: {
        id: newPage.id,
        url: newPage.url,
        created_time: newPage.created_time
      },
      message: 'Application submitted successfully'
    };
  } catch (error) {
    return handleApiError(error, 'createNewPage');
  }
}

// GET /api/pages/:id - Get page by ID
async function getPageByID(pageId) {
  try {
    if (!pageId) {
      throw new Error('Page ID is required');
    }

    const page = await notion.pages.retrieve({
      page_id: pageId
    });

    const props = page.properties;
    
    // Parse the page data
    const pageData = {
      id: page.id,
      name: props.Name?.title?.[0]?.plain_text || '',
      email: props.Email?.email || '',
      status: props.Status?.select?.name || '',
      submissionDate: props["Submission Date"]?.date?.start || '',
      role: props.Role?.select?.name || null,
      motivation: props["Why are you applying?"]?.rich_text?.[0]?.plain_text || null,
      created_time: page.created_time,
      last_edited_time: page.last_edited_time,
      url: page.url
    };
    
    return {
      success: true,
      data: pageData,
      message: 'Page retrieved successfully'
    };
  } catch (error) {
    return handleApiError(error, 'getPageByID');
  }
}

// DELETE /api/pages/:id - Delete (archive) a page
async function deletePage(pageId) {
  try {
    if (!pageId) {
      throw new Error('Page ID is required');
    }

    // Soft delete by updating status to "Archived"
    const updatedPage = await notion.pages.update({
      page_id: pageId,
      properties: {
        Status: {
          select: { name: "Archived" }
        }
      }
    });
    
    return {
      success: true,
      data: {
        id: updatedPage.id,
        status: 'Archived'
      },
      message: 'Application archived successfully'
    };
  } catch (error) {
    return handleApiError(error, 'deletePage');
  }
}

// Export the application functions
module.exports = {
  createNewPage,
  getPageByID,
  deletePage,
  createPageProperties,
  handleApiError
};

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