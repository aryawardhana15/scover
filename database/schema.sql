-- Database Schema untuk Kuis Psikotes Digital
-- Jalankan script ini di DBeaver untuk membuat tabel-tabel yang diperlukan

-- Tabel Users
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Quiz Sessions
CREATE TABLE IF NOT EXISTS quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status VARCHAR(20) DEFAULT 'in_progress', -- 'in_progress', 'completed', 'abandoned'
  progress JSONB, -- Menyimpan currentSubtest, currentQuestion, timeLeft, dll
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Answers
CREATE TABLE IF NOT EXISTS answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  subtest_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  answer VARCHAR(1) NOT NULL, -- 'A', 'B', 'C', 'D'
  is_correct BOOLEAN,
  answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(session_id, subtest_id, question_id)
);

-- Tabel Scores
CREATE TABLE IF NOT EXISTS scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  subtest_id INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  total_count INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(session_id, subtest_id)
);

-- Index untuk performa
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON quiz_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_status ON quiz_sessions(status);
CREATE INDEX IF NOT EXISTS idx_answers_session_id ON answers(session_id);
CREATE INDEX IF NOT EXISTS idx_answers_subtest ON answers(session_id, subtest_id);
CREATE INDEX IF NOT EXISTS idx_scores_session_id ON scores(session_id);

