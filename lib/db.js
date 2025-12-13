/**
 * Database Service
 * 
 * Support untuk PostgreSQL dan MySQL
 * Setup connection string di .env.local
 */

import { v4 as uuidv4 } from 'uuid';
// Use dynamic import for bcryptjs to avoid ESM issues
let bcrypt;
if (typeof window === 'undefined') {
  bcrypt = require('bcryptjs');
}

// Database connection (akan di-initialize di bawah)
let pool = null;
let dbType = null;

// Initialize database connection
function initDatabase() {
  if (pool) return; // Already initialized

  const databaseUrl = process.env.DATABASE_URL;
  const databaseType = process.env.DATABASE_TYPE || 'postgresql';

  if (!databaseUrl) {
    console.warn('DATABASE_URL not set, using in-memory storage');
    return; // Fallback to in-memory
  }

  dbType = databaseType.toLowerCase();

  try {
    if (dbType === 'postgresql' || dbType === 'postgres') {
      // PostgreSQL
      const { Pool } = require('pg');
      pool = new Pool({
        connectionString: databaseUrl,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      });
      console.log('✅ Connected to PostgreSQL database');
    } else if (dbType === 'mysql' || dbType === 'mariadb') {
      // MySQL
      const mysql = require('mysql2/promise');
      pool = mysql.createPool({
        uri: databaseUrl,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log('✅ Connected to MySQL database');
    }
  } catch (error) {
    console.error('Database connection error:', error);
    console.warn('Falling back to in-memory storage');
  }
}

// Initialize on import
initDatabase();

// Helper untuk generate UUID
function generateId() {
  return uuidv4();
}

// Helper untuk convert date ke format MySQL/PostgreSQL
function formatDateTime(date) {
  if (!date) return null;
  
  const d = date instanceof Date ? date : new Date(date);
  
  // Check dbType, default to mysql if not set
  const currentDbType = dbType || 'mysql';
  
  if (currentDbType === 'mysql' || currentDbType === 'mariadb') {
    // MySQL format: 'YYYY-MM-DD HH:MM:SS'
    return d.toISOString().slice(0, 19).replace('T', ' ');
  } else {
    // PostgreSQL bisa pakai ISO string atau timestamp
    return d.toISOString();
  }
}

// Helper untuk convert MySQL placeholder (?) ke PostgreSQL ($1, $2, ...)
function convertPlaceholders(sql, params) {
  if (dbType === 'postgresql' || dbType === 'postgres') {
    let paramIndex = 1;
    return sql.replace(/\?/g, () => `$${paramIndex++}`);
  }
  return sql; // MySQL tetap pakai ?
}

// Helper untuk execute query (support PostgreSQL dan MySQL)
async function query(sql, params = []) {
  if (!pool) {
    // Jika tidak ada pool, berarti menggunakan in-memory atau database belum di-setup
    // Jangan throw error, biarkan fallback ke in-memory
    console.warn('Database pool not initialized, using in-memory fallback');
    return [];
  }

  try {
    // Convert placeholders untuk PostgreSQL
    const convertedSql = convertPlaceholders(sql, params);
    
    if (dbType === 'postgresql' || dbType === 'postgres') {
      const result = await pool.query(convertedSql, params);
      return result.rows;
    } else if (dbType === 'mysql' || dbType === 'mariadb') {
      const [rows] = await pool.execute(convertedSql, params);
      return rows;
    }
  } catch (error) {
    console.error('Database query error:', error.message);
    console.error('SQL:', sql);
    console.error('Converted SQL:', convertPlaceholders(sql, params));
    console.error('Params:', params);
    console.error('Full error:', error);
    throw error;
  }
}

// ==================== USERS ====================
export async function createUser(name, email, password) {
  const id = generateId();
  
  // Hash password
  if (typeof bcrypt === 'undefined') {
    bcrypt = require('bcryptjs');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  
  if (!pool) {
    // Fallback to in-memory
    console.warn('Database not connected, using in-memory storage');
    const user = { 
      id, 
      name, 
      email,
      password: hashedPassword,
      created_at: new Date().toISOString() 
    };
    return user;
  }

  try {
    console.log('Creating user with ID:', id);
    console.log('Database type:', dbType);
    
    if (dbType === 'postgresql' || dbType === 'postgres') {
      await query(
        'INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)',
        [id, name, email, hashedPassword]
      );
    } else {
      await query(
        'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
        [id, name, email, hashedPassword]
      );
    }

    console.log('User inserted, fetching user data...');

    // Get created user (tanpa password untuk security)
    const users = await query('SELECT id, name, email, created_at FROM users WHERE id = ?', [id]);
    console.log('Fetched users:', users);
    
    if (users && users.length > 0) {
      return users[0];
    }
    
    // Fallback jika query tidak return data
    console.warn('User not found after insert, returning fallback data');
    return {
      id,
      name,
      email,
      created_at: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error creating user:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      sqlState: error.sqlState,
      sqlMessage: error.sqlMessage
    });
    // Re-throw untuk ditangani di API route
    throw error;
  }
}

// Verify password
export async function verifyPassword(email, password) {
  if (!pool) {
    console.warn('Database not connected, cannot verify password');
    return null;
  }

  try {
    const users = await query('SELECT id, name, email, password FROM users WHERE email = ?', [email]);
    
    if (!users || users.length === 0) {
      return null; // User not found
    }

    const user = users[0];
    
    // Check if user has password (for backward compatibility with old users)
    if (!user.password || user.password === '') {
      return null; // User doesn't have password set
    }

    // Verify password
    if (typeof bcrypt === 'undefined') {
      bcrypt = require('bcryptjs');
    }
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return null; // Invalid password
    }

    // Return user without password
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    console.error('Error verifying password:', error);
    throw error;
  }
}

export async function getUser(id) {
  if (!pool) return null;

  const users = await query('SELECT * FROM users WHERE id = ?', [id]);
  return users[0] || null;
}

export async function getUserByEmail(email) {
  if (!pool) {
    console.warn('Database not connected, getUserByEmail returning null');
    return null;
  }

  try {
    const users = await query('SELECT * FROM users WHERE email = ?', [email]);
    return users[0] || null;
  } catch (error) {
    console.error('Error getting user by email:', error);
    throw error;
  }
}

// ==================== SESSIONS ====================
export async function createSession(userId) {
  const id = generateId();
  const startTime = formatDateTime(new Date());

  if (!pool) {
    // Fallback to in-memory
    return {
      id,
      user_id: userId,
      start_time: startTime,
      end_time: null,
      status: 'in_progress',
      progress: null,
      created_at: new Date().toISOString(),
    };
  }

  if (dbType === 'postgresql' || dbType === 'postgres') {
    await query(
      'INSERT INTO quiz_sessions (id, user_id, start_time, status) VALUES ($1, $2, $3, $4)',
      [id, userId, startTime, 'in_progress']
    );
  } else {
    await query(
      'INSERT INTO quiz_sessions (id, user_id, start_time, status) VALUES (?, ?, ?, ?)',
      [id, userId, startTime, 'in_progress']
    );
  }

  const sessions = await query('SELECT * FROM quiz_sessions WHERE id = ?', [id]);
  return sessions[0];
}

export async function getSession(id) {
  if (!pool) return null;

  const sessions = await query('SELECT * FROM quiz_sessions WHERE id = ?', [id]);
  return sessions[0] || null;
}

export async function updateSession(id, updates) {
  if (!pool) return null;

  const setClause = [];
  const values = [];
  let paramIndex = 1;

  for (const [key, value] of Object.entries(updates)) {
    if (key === 'progress' && value) {
      // Handle JSON/JSONB
      if (dbType === 'postgresql' || dbType === 'postgres') {
        setClause.push(`progress = $${paramIndex}`);
        values.push(JSON.stringify(value));
      } else {
        setClause.push(`progress = ?`);
        values.push(JSON.stringify(value));
      }
      paramIndex++;
    } else if (key !== 'id') {
      const dbKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      
      // Handle datetime fields (startTime, endTime, dll)
      let finalValue = value;
      if ((key === 'endTime' || key === 'startTime' || dbKey.includes('time') || dbKey.includes('_at')) && value instanceof Date) {
        finalValue = formatDateTime(value);
      } else if ((key === 'endTime' || key === 'startTime' || dbKey.includes('time') || dbKey.includes('_at')) && typeof value === 'string' && value.includes('T')) {
        // Convert ISO string to MySQL format
        finalValue = formatDateTime(value);
      }
      
      if (dbType === 'postgresql' || dbType === 'postgres') {
        setClause.push(`${dbKey} = $${paramIndex}`);
      } else {
        setClause.push(`${dbKey} = ?`);
      }
      values.push(finalValue);
      paramIndex++;
    }
  }

  if (setClause.length === 0) return await getSession(id);

  values.push(id);
  const sql = `UPDATE quiz_sessions SET ${setClause.join(', ')} WHERE id = ?`;
  
  await query(sql, values);
  return await getSession(id);
}

export async function getSessionsByUser(userId) {
  if (!pool) return [];

  return await query('SELECT * FROM quiz_sessions WHERE user_id = ? ORDER BY created_at DESC', [userId]);
}

// ==================== PROGRESS ====================
export async function saveProgress(sessionId, progress) {
  const session = await getSession(sessionId);
  if (!session) {
    throw new Error('Session not found');
  }

  const progressData = {
    currentSubtest: progress.currentSubtest,
    currentQuestion: progress.currentQuestion,
    timeLeft: progress.timeLeft,
    isBreak: progress.isBreak,
    breakTime: progress.breakTime,
    lastUpdated: new Date().toISOString(),
  };

  return await updateSession(sessionId, { progress: progressData });
}

export async function getProgress(sessionId) {
  const session = await getSession(sessionId);
  if (!session || !session.progress) return null;

  // Parse JSON if string
  if (typeof session.progress === 'string') {
    return JSON.parse(session.progress);
  }
  return session.progress;
}

// ==================== ANSWERS ====================
export async function saveAnswer(sessionId, subtestId, questionId, answer, isCorrect = null) {
  const id = generateId();

  if (!pool) {
    return {
      id,
      session_id: sessionId,
      subtest_id: subtestId,
      question_id: questionId,
      answer,
      is_correct: isCorrect,
      answered_at: new Date().toISOString(),
    };
  }

  // Use INSERT ... ON CONFLICT for PostgreSQL or INSERT ... ON DUPLICATE KEY UPDATE for MySQL
  if (dbType === 'postgresql' || dbType === 'postgres') {
    await query(
      `INSERT INTO answers (id, session_id, subtest_id, question_id, answer, is_correct)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (session_id, subtest_id, question_id)
       DO UPDATE SET answer = $5, is_correct = $6, answered_at = CURRENT_TIMESTAMP`,
      [id, sessionId, subtestId, questionId, answer, isCorrect]
    );
  } else {
    await query(
      `INSERT INTO answers (id, session_id, subtest_id, question_id, answer, is_correct)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE answer = ?, is_correct = ?, answered_at = CURRENT_TIMESTAMP`,
      [id, sessionId, subtestId, questionId, answer, isCorrect, answer, isCorrect]
    );
  }

  const answers = await query(
    'SELECT * FROM answers WHERE session_id = ? AND subtest_id = ? AND question_id = ?',
    [sessionId, subtestId, questionId]
  );
  return answers[0];
}

export async function getAnswers(sessionId, subtestId = null) {
  if (!pool) return [];

  if (subtestId !== null) {
    return await query(
      'SELECT * FROM answers WHERE session_id = ? AND subtest_id = ? ORDER BY question_id',
      [sessionId, subtestId]
    );
  }
  return await query('SELECT * FROM answers WHERE session_id = ? ORDER BY subtest_id, question_id', [sessionId]);
}

export async function getAnswer(sessionId, subtestId, questionId) {
  if (!pool) return null;

  const answers = await query(
    'SELECT * FROM answers WHERE session_id = ? AND subtest_id = ? AND question_id = ?',
    [sessionId, subtestId, questionId]
  );
  return answers[0] || null;
}

// ==================== SCORES ====================
export async function saveScore(sessionId, subtestId, correctCount, totalCount, passed) {
  const id = generateId();

  if (!pool) {
    return {
      id,
      session_id: sessionId,
      subtest_id: subtestId,
      correct_count: correctCount,
      total_count: totalCount,
      passed,
      created_at: new Date().toISOString(),
    };
  }

  if (dbType === 'postgresql' || dbType === 'postgres') {
    await query(
      `INSERT INTO scores (id, session_id, subtest_id, correct_count, total_count, passed)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (session_id, subtest_id)
       DO UPDATE SET correct_count = $4, total_count = $5, passed = $6`,
      [id, sessionId, subtestId, correctCount, totalCount, passed]
    );
  } else {
    await query(
      `INSERT INTO scores (id, session_id, subtest_id, correct_count, total_count, passed)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE correct_count = ?, total_count = ?, passed = ?`,
      [id, sessionId, subtestId, correctCount, totalCount, passed, correctCount, totalCount, passed]
    );
  }

  const scores = await query(
    'SELECT * FROM scores WHERE session_id = ? AND subtest_id = ?',
    [sessionId, subtestId]
  );
  return scores[0];
}

export async function getScores(sessionId) {
  if (!pool) return {};

  const scores = await query('SELECT * FROM scores WHERE session_id = ? ORDER BY subtest_id', [sessionId]);
  const result = {};
  for (const score of scores) {
    result[score.subtest_id] = {
      correct: score.correct_count,
      total: score.total_count,
      passed: score.passed,
    };
  }
  return result;
}

export async function getScore(sessionId, subtestId) {
  if (!pool) return null;

  const scores = await query('SELECT * FROM scores WHERE session_id = ? AND subtest_id = ?', [sessionId, subtestId]);
  if (scores.length === 0) return null;

  const score = scores[0];
  return {
    correct: score.correct_count,
    total: score.total_count,
    passed: score.passed,
  };
}

// ==================== RESULTS ====================
export async function getAllResults() {
  if (!pool) return [];

  const sessions = await query("SELECT * FROM quiz_sessions WHERE status = 'completed' ORDER BY end_time DESC");
  const results = [];

  for (const session of sessions) {
    const user = await getUser(session.user_id);
    const sessionScores = await getScores(session.id);

    results.push({
      sessionId: session.id,
      user: user ? { name: user.name, email: user.email } : null,
      startTime: session.start_time,
      endTime: session.end_time,
      scores: sessionScores,
    });
  }

  return results;
}

// ==================== EXPORT DATA ====================
export async function exportData() {
  if (!pool) return { users: [], sessions: [], answers: [], scores: [] };

  return {
    users: await query('SELECT * FROM users'),
    sessions: await query('SELECT * FROM quiz_sessions'),
    answers: await query('SELECT * FROM answers'),
    scores: await query('SELECT * FROM scores'),
  };
}

// ==================== CLEAR DATA (for testing) ====================
export async function clearAllData() {
  if (!pool) return;

  await query('DELETE FROM scores');
  await query('DELETE FROM answers');
  await query('DELETE FROM quiz_sessions');
  await query('DELETE FROM users');
}
