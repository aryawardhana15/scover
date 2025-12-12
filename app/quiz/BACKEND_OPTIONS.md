# Opsi Backend untuk Kuis Psikotes

## 📌 Status Saat Ini

**Backend**: ❌ Tidak ada (Client-side only dengan localStorage)

**Data Storage**: Browser localStorage

## 🔄 Flow Data Saat Ini

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT-SIDE ONLY                     │
│                                                          │
│  Browser (Frontend)                                     │
│  ├── React Components                                   │
│  ├── localStorage (Data Storage)                        │
│  │   ├── quizUser                                       │
│  │   ├── quizProgress                                   │
│  │   └── quizScores                                     │
│  └── questions-data.js (Static Data)                    │
│                                                          │
│  ❌ Tidak ada server                                     │
│  ❌ Tidak ada database                                  │
│  ❌ Tidak ada API                                       │
└─────────────────────────────────────────────────────────┘
```

## 💡 Kapan Perlu Backend?

### ✅ **Tetap Pakai localStorage Jika:**
- Development/Testing
- Prototype/MVP
- Single user testing
- Tidak perlu tracking hasil
- Tidak perlu backup data

### ✅ **Perlu Backend Jika:**
- Production dengan banyak user
- Perlu tracking & analitik
- Perlu validasi server-side
- Perlu backup data
- Perlu multi-device access
- Perlu admin dashboard
- Perlu export hasil ke Excel/PDF

## 🏗️ Opsi Backend

### **Opsi 1: Next.js API Routes** ⭐ (Recommended)

**Kelebihan:**
- ✅ Same codebase (tidak perlu server terpisah)
- ✅ Mudah deploy (Vercel/Netlify)
- ✅ Built-in dengan Next.js
- ✅ TypeScript support

**Struktur:**
```
app/
├── api/
│   └── quiz/
│       ├── login/route.js
│       ├── progress/route.js
│       ├── answer/route.js
│       ├── submit/route.js
│       └── result/route.js
└── quiz/
    └── ...
```

**Database:** PostgreSQL, MySQL, atau MongoDB

**Cost:** 
- Vercel: Free tier (hobby)
- Database: Supabase free tier atau Railway $5/month

---

### **Opsi 2: Supabase** ⭐⭐ (Quick Setup)

**Kelebihan:**
- ✅ Setup sangat cepat (5 menit)
- ✅ PostgreSQL database built-in
- ✅ Authentication built-in
- ✅ Real-time subscriptions
- ✅ Free tier generous

**Setup:**
```bash
npm install @supabase/supabase-js
```

**Database Schema:** Auto-generated dari Supabase dashboard

**Cost:** Free tier cukup untuk MVP

---

### **Opsi 3: Firebase**

**Kelebihan:**
- ✅ Google infrastructure
- ✅ Real-time database
- ✅ Authentication built-in
- ✅ Free tier

**Database:** Firestore (NoSQL)

**Cost:** Free tier cukup untuk development

---

### **Opsi 4: Express.js (Separate Server)**

**Kelebihan:**
- ✅ Full control
- ✅ Custom logic
- ✅ Traditional REST API

**Kekurangan:**
- ❌ Perlu server terpisah
- ❌ Perlu setup deployment
- ❌ Lebih kompleks

**Database:** PostgreSQL, MySQL, MongoDB

---

## 📋 Checklist Implementasi Backend

Jika memilih untuk menambahkan backend, berikut yang perlu dibuat:

### **1. Database Setup**
- [ ] Buat database schema
- [ ] Setup migrations
- [ ] Seed data (questions)

### **2. API Endpoints**
- [ ] `POST /api/quiz/login` - User login
- [ ] `GET /api/quiz/progress/:sessionId` - Get progress
- [ ] `POST /api/quiz/progress/:sessionId` - Save progress
- [ ] `POST /api/quiz/answer` - Save answer
- [ ] `POST /api/quiz/submit-subtest` - Submit subtest
- [ ] `GET /api/quiz/scores/:sessionId` - Get scores
- [ ] `GET /api/quiz/result/:sessionId` - Get result

### **3. Frontend Updates**
- [ ] Replace localStorage calls dengan API calls
- [ ] Add loading states
- [ ] Add error handling
- [ ] Add retry logic

### **4. Security**
- [ ] Authentication/Authorization
- [ ] Rate limiting
- [ ] Input validation
- [ ] SQL injection prevention

### **5. Features**
- [ ] Auto-save ke server
- [ ] Resume quiz jika disconnect
- [ ] Admin dashboard (optional)
- [ ] Export results (optional)

---

## 🚀 Quick Start: Supabase (Recommended untuk Quick Setup)

### **Step 1: Setup Supabase**
1. Buat akun di supabase.com
2. Buat project baru
3. Copy API keys

### **Step 2: Install**
```bash
npm install @supabase/supabase-js
```

### **Step 3: Create Database Tables**
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz sessions
CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Answers
CREATE TABLE answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES quiz_sessions(id),
  subtest_id INTEGER,
  question_id INTEGER,
  answer VARCHAR(1),
  is_correct BOOLEAN,
  answered_at TIMESTAMP DEFAULT NOW()
);

-- Scores
CREATE TABLE scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES quiz_sessions(id),
  subtest_id INTEGER,
  correct_count INTEGER,
  total_count INTEGER,
  passed BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Step 4: Create Supabase Client**
```javascript
// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

### **Step 5: Update Frontend**
Replace localStorage calls dengan Supabase calls.

---

## 📊 Perbandingan Opsi

| Feature | localStorage | Next.js API | Supabase | Firebase |
|---------|-------------|-------------|----------|----------|
| Setup Time | ✅ Instant | ⚠️ 2-3 hours | ✅ 30 min | ✅ 30 min |
| Database | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Real-time | ❌ No | ⚠️ Custom | ✅ Yes | ✅ Yes |
| Auth | ❌ No | ⚠️ Custom | ✅ Built-in | ✅ Built-in |
| Cost | ✅ Free | ⚠️ $5-20/mo | ✅ Free tier | ✅ Free tier |
| Scalability | ❌ Limited | ✅ High | ✅ High | ✅ High |
| Best For | Prototype | Production | Quick MVP | Real-time apps |

---

## 🎯 Rekomendasi

### **Untuk Sekarang:**
✅ **Tetap pakai localStorage** - Cukup untuk development & testing

### **Untuk Production:**
✅ **Pilih Supabase** jika:
- Ingin setup cepat
- Butuh real-time features
- Budget terbatas (free tier)

✅ **Pilih Next.js API Routes** jika:
- Ingin full control
- Sudah familiar dengan Next.js
- Butuh custom logic

---

## ❓ Next Steps

Apakah Anda ingin:
1. ✅ Tetap pakai localStorage (current)
2. 🔧 Setup Supabase backend
3. 🔧 Setup Next.js API Routes
4. 📊 Lihat contoh implementasi

Silakan beri tahu pilihan Anda!

