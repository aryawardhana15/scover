# Setup Backend untuk Kuis Psikotes

## ✅ Backend Sudah Dibuat!

Backend sudah dibuat menggunakan **Next.js API Routes** dengan in-memory storage untuk development.

## 📁 Struktur Backend

```
app/api/quiz/
├── login/route.js              # POST - User login
├── session/route.js             # POST - Create/get session
├── progress/[sessionId]/route.js # GET/POST - Get/save progress
├── answer/route.js              # POST - Save answer
├── submit-subtest/route.js      # POST - Submit subtest & calculate score
├── scores/[sessionId]/route.js  # GET - Get scores
├── result/[sessionId]/route.js  # GET - Get result
└── results/route.js             # GET - Get all results (admin)

lib/
├── quiz-api.js                  # Frontend API service
└── db.js                        # Database service (in-memory)
```

## 🚀 Cara Menggunakan

### **1. Development (Current - In-Memory)**

Backend sudah siap digunakan! Data disimpan di memory (akan hilang saat restart server).

**Test API:**
```bash
# Start dev server
npm run dev

# Test login
curl -X POST http://localhost:3000/api/quiz/login \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

### **2. Production - Setup Database**

Untuk production, ganti in-memory storage dengan database sebenarnya.

#### **Opsi A: PostgreSQL (Recommended)**

**Install dependencies:**
```bash
npm install pg
```

**Update `lib/db.js`:**
```javascript
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Replace all Map operations dengan database queries
export async function createUser(name, email) {
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
  return result.rows[0];
}
// ... etc
```

**Database Schema:**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status VARCHAR(20) DEFAULT 'in_progress',
  progress JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES quiz_sessions(id),
  subtest_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  answer VARCHAR(1) NOT NULL,
  is_correct BOOLEAN,
  answered_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(session_id, subtest_id, question_id)
);

CREATE TABLE scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES quiz_sessions(id),
  subtest_id INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  total_count INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(session_id, subtest_id)
);
```

#### **Opsi B: Supabase (Quick Setup)**

**Install:**
```bash
npm install @supabase/supabase-js
```

**Setup:**
1. Buat akun di supabase.com
2. Buat project baru
3. Copy API keys ke `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

**Update `lib/db.js`:**
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function createUser(name, email) {
  const { data, error } = await supabase
    .from('users')
    .insert({ name, email })
    .select()
    .single();
  
  if (error) throw error;
  return data;
}
// ... etc
```

## 🔧 Environment Variables

Buat file `.env.local`:
```env
# Database (jika pakai database)
DATABASE_URL=postgresql://user:password@localhost:5432/quiz_db

# Atau Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key

# API URL (optional, default: /api/quiz)
NEXT_PUBLIC_API_URL=/api/quiz
```

## 📊 API Endpoints

### **POST /api/quiz/login**
```json
Request: { "name": "John Doe", "email": "john@example.com" }
Response: { "success": true, "user": { "id": "...", "name": "...", "email": "..." } }
```

### **POST /api/quiz/session**
```json
Request: { "userId": "..." }
Response: { "success": true, "session": { "id": "...", ... }, "isNew": true }
```

### **GET /api/quiz/progress/:sessionId**
```json
Response: { "success": true, "progress": { "currentSubtest": 1, ... } }
```

### **POST /api/quiz/progress/:sessionId**
```json
Request: { "currentSubtest": 1, "currentQuestion": 1, "timeLeft": 120, ... }
Response: { "success": true, "progress": { ... } }
```

### **POST /api/quiz/answer**
```json
Request: { "sessionId": "...", "subtestId": 1, "questionId": 1, "answer": "A" }
Response: { "success": true, "answer": { ... } }
```

### **POST /api/quiz/submit-subtest**
```json
Request: { "sessionId": "...", "subtestId": 1 }
Response: { "success": true, "score": { "correct": 8, "total": 10, "passed": true } }
```

### **GET /api/quiz/scores/:sessionId**
```json
Response: { "success": true, "scores": { "1": { "correct": 8, "total": 10, "passed": true }, ... } }
```

### **GET /api/quiz/result/:sessionId**
```json
Response: { "success": true, "result": { "user": {...}, "scores": {...}, "totalPassed": 5, "overallStatus": "Lulus Total" } }
```

### **GET /api/quiz/results**
```json
Response: { "success": true, "results": [...], "count": 10 }
```

## 🔒 Security (TODO untuk Production)

1. **Authentication**: Tambahkan JWT atau session-based auth
2. **Authorization**: Validasi user hanya bisa akses session sendiri
3. **Rate Limiting**: Prevent abuse
4. **Input Validation**: Validasi semua input
5. **CORS**: Setup CORS jika perlu

## 📝 Testing

**Test dengan curl:**
```bash
# 1. Login
SESSION=$(curl -X POST http://localhost:3000/api/quiz/login \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com"}' | jq -r '.user.id')

# 2. Create session
curl -X POST http://localhost:3000/api/quiz/session \
  -H "Content-Type: application/json" \
  -d "{\"userId\":\"$SESSION\"}"

# 3. Save answer
curl -X POST http://localhost:3000/api/quiz/answer \
  -H "Content-Type: application/json" \
  -d '{"sessionId":"...","subtestId":1,"questionId":1,"answer":"A"}'
```

## 🎯 Next Steps

1. ✅ Backend API sudah dibuat
2. ✅ Frontend sudah diupdate untuk menggunakan API
3. ⏳ Setup database untuk production
4. ⏳ Add authentication/authorization
5. ⏳ Add error handling & validation
6. ⏳ Add admin dashboard (optional)

## 💡 Catatan

- **Development**: Pakai in-memory storage (current) - data hilang saat restart
- **Production**: Setup database (PostgreSQL/Supabase) untuk data persisten
- **Frontend**: Sudah diupdate untuk call API, dengan fallback ke localStorage

