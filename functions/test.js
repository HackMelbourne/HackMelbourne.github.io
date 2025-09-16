// Simple test file for the application API functions
const { createNewPage, getPageByID, deletePage } = require('./index');

// Test data
const testApplicationData = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Education",
  motivation: "I want to help organize amazing hackathons and contribute to the tech community."
};
