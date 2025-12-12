/**
 * Database Service
 * 
 * Untuk production, ganti dengan database sebenarnya (PostgreSQL, MySQL, MongoDB)
 * Saat ini menggunakan in-memory storage untuk development
 * 
 * Setup Database:
 * 1. Install database driver (contoh: npm install pg untuk PostgreSQL)
 * 2. Setup connection string di .env
 * 3. Update fungsi-fungsi di bawah untuk connect ke database
 */

// In-memory storage (untuk development/testing)
// Ganti dengan database connection untuk production
let users = new Map();
let sessions = new Map();
let answers = new Map();
let scores = new Map();

// Helper untuk generate ID
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// ==================== USERS ====================
export async function createUser(name, email) {
  const id = generateId();
  const user = {
    id,
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  users.set(id, user);
  return user;
}

export async function getUser(id) {
  return users.get(id) || null;
}

export async function getUserByEmail(email) {
  for (const user of users.values()) {
    if (user.email === email) {
      return user;
    }
  }
  return null;
}

// ==================== SESSIONS ====================
export async function createSession(userId) {
  const id = generateId();
  const session = {
    id,
    userId,
    startTime: new Date().toISOString(),
    endTime: null,
    status: 'in_progress', // 'in_progress', 'completed', 'abandoned'
    createdAt: new Date().toISOString(),
  };
  sessions.set(id, session);
  return session;
}

export async function getSession(id) {
  return sessions.get(id) || null;
}

export async function updateSession(id, updates) {
  const session = sessions.get(id);
  if (!session) return null;
  
  const updated = { ...session, ...updates };
  sessions.set(id, updated);
  return updated;
}

export async function getSessionsByUser(userId) {
  const userSessions = [];
  for (const session of sessions.values()) {
    if (session.userId === userId) {
      userSessions.push(session);
    }
  }
  return userSessions;
}

// ==================== PROGRESS ====================
export async function saveProgress(sessionId, progress) {
  const session = await getSession(sessionId);
  if (!session) {
    throw new Error('Session not found');
  }
  
  // Simpan progress ke session
  const updated = await updateSession(sessionId, {
    progress: {
      currentSubtest: progress.currentSubtest,
      currentQuestion: progress.currentQuestion,
      timeLeft: progress.timeLeft,
      isBreak: progress.isBreak,
      breakTime: progress.breakTime,
      lastUpdated: new Date().toISOString(),
    },
  });
  
  return updated;
}

export async function getProgress(sessionId) {
  const session = await getSession(sessionId);
  return session?.progress || null;
}

// ==================== ANSWERS ====================
export async function saveAnswer(sessionId, subtestId, questionId, answer, isCorrect = null) {
  const key = `${sessionId}-${subtestId}-${questionId}`;
  const answerData = {
    id: key,
    sessionId,
    subtestId,
    questionId,
    answer,
    isCorrect,
    answeredAt: new Date().toISOString(),
  };
  answers.set(key, answerData);
  return answerData;
}

export async function getAnswers(sessionId, subtestId = null) {
  const result = [];
  for (const answer of answers.values()) {
    if (answer.sessionId === sessionId) {
      if (subtestId === null || answer.subtestId === subtestId) {
        result.push(answer);
      }
    }
  }
  return result;
}

export async function getAnswer(sessionId, subtestId, questionId) {
  const key = `${sessionId}-${subtestId}-${questionId}`;
  return answers.get(key) || null;
}

// ==================== SCORES ====================
export async function saveScore(sessionId, subtestId, correctCount, totalCount, passed) {
  const key = `${sessionId}-${subtestId}`;
  const score = {
    id: key,
    sessionId,
    subtestId,
    correctCount,
    totalCount,
    passed,
    createdAt: new Date().toISOString(),
  };
  scores.set(key, score);
  return score;
}

export async function getScores(sessionId) {
  const result = {};
  for (const score of scores.values()) {
    if (score.sessionId === sessionId) {
      result[score.subtestId] = {
        correct: score.correctCount,
        total: score.totalCount,
        passed: score.passed,
      };
    }
  }
  return result;
}

export async function getScore(sessionId, subtestId) {
  const key = `${sessionId}-${subtestId}`;
  const score = scores.get(key);
  if (!score) return null;
  
  return {
    correct: score.correctCount,
    total: score.totalCount,
    passed: score.passed,
  };
}

// ==================== RESULTS ====================
export async function getAllResults() {
  const results = [];
  for (const session of sessions.values()) {
    if (session.status === 'completed') {
      const user = await getUser(session.userId);
      const sessionScores = await getScores(session.id);
      
      results.push({
        sessionId: session.id,
        user: user ? { name: user.name, email: user.email } : null,
        startTime: session.startTime,
        endTime: session.endTime,
        scores: sessionScores,
      });
    }
  }
  return results;
}

// ==================== EXPORT DATA ====================
export function exportData() {
  return {
    users: Array.from(users.values()),
    sessions: Array.from(sessions.values()),
    answers: Array.from(answers.values()),
    scores: Array.from(scores.values()),
  };
}

// ==================== CLEAR DATA (for testing) ====================
export function clearAllData() {
  users.clear();
  sessions.clear();
  answers.clear();
  scores.clear();
}

