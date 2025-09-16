// Simple test file for the application API functions
const { createNewPage, getPageByID, deletePage } = require('./index');

// Test data
const testApplicationData = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Education",
  motivation: "I want to help organize amazing hackathons and contribute to the tech community."
};

// Test functions
async function runTests() {
  console.log('🚀 Starting Application API Tests...\n');

  try {
    // Test 1: Create new page
    console.log('📝 Test 1: Creating new application...');
    const createResult = await createNewPage(testApplicationData);
    console.log('Result:', createResult);
    
    if (createResult.success) {
      const pageId = createResult.data.id;
      console.log('✅ Application created successfully!\n');

      // Test 2: Get page by ID
      console.log('📖 Test 2: Retrieving application...');
      const getResult = await getPageByID(pageId);
      console.log('Result:', getResult);
      
      if (getResult.success) {
        console.log('✅ Application retrieved successfully!\n');
      } else {
        console.log('❌ Failed to retrieve application\n');
      }

      // Test 3: Delete (archive) page
      console.log('🗑️  Test 3: Archiving application...');
      const deleteResult = await deletePage(pageId);
      console.log('Result:', deleteResult);
      
      if (deleteResult.success) {
        console.log('✅ Application archived successfully!\n');
      } else {
        console.log('❌ Failed to archive application\n');
      }

    } else {
      console.log('❌ Failed to create application\n');
    }

  } catch (error) {
    console.error('💥 Test failed with error:', error);
  }

  console.log('🏁 Tests completed!');
}

// Test validation
async function testValidation() {
  console.log('🔍 Testing validation...\n');

  // Test missing name
  console.log('Test: Missing name');
  const result1 = await createNewPage({ email: "test@example.com" });
  console.log('Result:', result1);

  // Test missing email
  console.log('\nTest: Missing email');
  const result2 = await createNewPage({ name: "Test User" });
  console.log('Result:', result2);

  // Test invalid email
  console.log('\nTest: Invalid email');
  const result3 = await createNewPage({ name: "Test User", email: "invalid-email" });
  console.log('Result:', result3);

  console.log('\n✅ Validation tests completed!\n');
}

// Run tests
if (require.main === module) {
  console.log('Choose test to run:');
  console.log('1. Full API tests (requires valid Notion setup)');
  console.log('2. Validation tests only');
  
  const testType = process.argv[2] || '2';
  
  if (testType === '1') {
    runTests();
  } else {
    testValidation();
  }
}

module.exports = {
  runTests,
  testValidation
};
