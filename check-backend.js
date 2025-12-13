/**
 * Quick check if backend is running
 */

async function checkBackend() {
  try {
    console.log('🔍 Checking backend server...\n');
    
    // Test register endpoint
    const response = await fetch('http://localhost:3000/api/quiz/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com'
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Backend is running!');
      console.log('✅ API endpoint: /api/quiz/register');
      console.log('✅ Response:', data);
    } else {
      console.log('⚠️  Backend is running but returned error:');
      console.log('   Status:', response.status);
      console.log('   Response:', data);
    }
    
    console.log('\n📋 Available endpoints:');
    console.log('   POST /api/quiz/register - Register user');
    console.log('   POST /api/quiz/login - Login user');
    console.log('   POST /api/quiz/session - Create session');
    console.log('   GET  /api/quiz/progress/:sessionId - Get progress');
    console.log('   POST /api/quiz/progress/:sessionId - Save progress');
    console.log('   POST /api/quiz/answer - Save answer');
    console.log('   POST /api/quiz/submit-subtest - Submit subtest');
    console.log('   GET  /api/quiz/scores/:sessionId - Get scores');
    console.log('   GET  /api/quiz/result/:sessionId - Get result');
    
  } catch (error) {
    console.error('❌ Backend is NOT running or not accessible');
    console.error('   Error:', error.message);
    console.log('\n💡 To start backend, run:');
    console.log('   npm run dev');
  }
}

checkBackend();

