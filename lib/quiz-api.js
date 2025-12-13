/**
 * Quiz API Service
 * Handle all API calls to backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api/quiz';

// Helper function untuk API calls
async function apiCall(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.error || data.message || `HTTP error! status: ${response.status}`;
      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    // Re-throw dengan informasi lengkap
    throw error;
  }
}

// Register user
export async function registerUser(name, email, password) {
  return apiCall('/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
}

// Login user
export async function loginUser(email, password) {
  return apiCall('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

// Create quiz session
export async function createSession(userId) {
  return apiCall('/session', {
    method: 'POST',
    body: JSON.stringify({ userId }),
  });
}

// Get quiz progress
export async function getProgress(sessionId) {
  return apiCall(`/progress/${sessionId}`);
}

// Save quiz progress
export async function saveProgress(sessionId, progress) {
  return apiCall(`/progress/${sessionId}`, {
    method: 'POST',
    body: JSON.stringify(progress),
  });
}

// Save answer
export async function saveAnswer(sessionId, subtestId, questionId, answer) {
  return apiCall('/answer', {
    method: 'POST',
    body: JSON.stringify({
      sessionId,
      subtestId,
      questionId,
      answer,
    }),
  });
}

// Submit subtest
export async function submitSubtest(sessionId, subtestId) {
  return apiCall('/submit-subtest', {
    method: 'POST',
    body: JSON.stringify({
      sessionId,
      subtestId,
    }),
  });
}

// Get scores
export async function getScores(sessionId) {
  return apiCall(`/scores/${sessionId}`);
}

// Get result
export async function getResult(sessionId) {
  return apiCall(`/result/${sessionId}`);
}

// Get all results (for admin)
export async function getAllResults() {
  return apiCall('/results');
}

