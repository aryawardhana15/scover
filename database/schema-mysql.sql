-- Database Schema untuk Kuis Psikotes Digital (MySQL Version)
-- Jalankan script ini di DBeaver untuk membuat tabel-tabel yang diperlukan

-- Tabel Users
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Quiz Sessions
CREATE TABLE IF NOT EXISTS quiz_sessions (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  start_time TIMESTAMP NULL,
  end_time TIMESTAMP NULL,
  status VARCHAR(20) DEFAULT 'in_progress', -- 'in_progress', 'completed', 'abandoned'
  progress JSON, -- Menyimpan currentSubtest, currentQuestion, timeLeft, dll
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabel Answers
CREATE TABLE IF NOT EXISTS answers (
  id VARCHAR(36) PRIMARY KEY,
  session_id VARCHAR(36) NOT NULL,
  subtest_id INT NOT NULL,
  question_id INT NOT NULL,
  answer VARCHAR(1) NOT NULL, -- 'A', 'B', 'C', 'D'
  is_correct BOOLEAN NULL,
  answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_answer (session_id, subtest_id, question_id),
  FOREIGN KEY (session_id) REFERENCES quiz_sessions(id) ON DELETE CASCADE
);

-- Tabel Scores
CREATE TABLE IF NOT EXISTS scores (
  id VARCHAR(36) PRIMARY KEY,
  session_id VARCHAR(36) NOT NULL,
  subtest_id INT NOT NULL,
  correct_count INT NOT NULL,
  total_count INT NOT NULL,
  passed BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_score (session_id, subtest_id),
  FOREIGN KEY (session_id) REFERENCES quiz_sessions(id) ON DELETE CASCADE
);

-- Index untuk performa
CREATE INDEX idx_sessions_user_id ON quiz_sessions(user_id);
CREATE INDEX idx_sessions_status ON quiz_sessions(status);
CREATE INDEX idx_answers_session_id ON answers(session_id);
CREATE INDEX idx_answers_subtest ON answers(session_id, subtest_id);
CREATE INDEX idx_scores_session_id ON scores(session_id);

