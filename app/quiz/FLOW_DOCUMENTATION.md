# Dokumentasi Flow Kuis Psikotes Digital

## 📋 Flow Aplikasi (User Journey)

```
┌─────────────────┐
│   Homepage      │
│  (/ atau /quiz) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Login Page     │ ◄─── User masuk dengan nama & email
│  /quiz/login    │
└────────┬────────┘
         │
         │ [Simpan ke localStorage: quizUser]
         ▼
┌─────────────────┐
│  Landing Page   │ ◄─── Tampilkan daftar 7 subtes
│  /quiz          │      Tombol "START KUIS"
└────────┬────────┘
         │
         │ [Klik "START KUIS"]
         ▼
┌─────────────────┐
│  Pop-up Aturan  │ ◄─── Timer 60 detik (wajib baca)
│  (Modal)        │      Tombol "Lanjutkan" (disabled 60s)
└────────┬────────┘
         │
         │ [Klik "Lanjutkan"]
         │ [Simpan ke localStorage: quizProgress]
         ▼
┌─────────────────┐
│  Test Page      │ ◄─── Subtes 1: Dimensi (2 menit)
│  /quiz/test     │      - Timer countdown
│                 │      - 10 soal
│                 │      - Auto-save setiap 5 detik
│                 │      - Navigasi soal
└────────┬────────┘
         │
         │ [Selesai Subtes 1]
         │ [Hitung skor & simpan ke localStorage: quizScores]
         ▼
┌─────────────────┐
│  Break Page     │ ◄─── Jeda 3 menit (180 detik)
│  (Modal/Screen) │      Countdown timer
│                 │      Info subtes berikutnya
└────────┬────────┘
         │
         │ [Timer habis / Auto-lanjut]
         ▼
┌─────────────────┐
│  Test Page      │ ◄─── Subtes 2: Berhitung (4 menit)
│  /quiz/test     │      ... (ulangi untuk subtes 2-6)
└────────┬────────┘
         │
         │ [Selesai Subtes 2-6]
         │ [Break 3 menit]
         │ [Subtes berikutnya]
         │
         ▼
┌─────────────────┐
│  Test Page      │ ◄─── Subtes 7: Mekanis-Teknologi (4 menit)
│  /quiz/test     │
└────────┬────────┘
         │
         │ [Selesai Subtes 7]
         │ [Hitung semua skor]
         ▼
┌─────────────────┐
│  Result Page    │ ◄─── Tampilkan:
│  /quiz/result   │      - Skor per subtes
│                 │      - Status LULUS/TIDAK LULUS
│                 │      - Status kelulusan total
└─────────────────┘
```

## 🔄 Alur Detail Per Halaman

### 1. **Login Page** (`/quiz/login`)
- **Input**: Nama & Email
- **Validasi**: Field harus diisi
- **Aksi**: 
  - Simpan ke `localStorage.quizUser`
  - Redirect ke `/quiz`

### 2. **Landing Page** (`/quiz`)
- **Check**: Apakah user sudah login?
  - ❌ Tidak → Redirect ke `/quiz/login`
- **Check**: Apakah quiz sudah dimulai?
  - ✅ Ya → Redirect ke `/quiz/test`
- **Tampilkan**: Daftar 7 subtes
- **Aksi**: Klik "START KUIS" → Tampilkan pop-up aturan

### 3. **Pop-up Aturan** (Modal di `/quiz`)
- **Timer**: 60 detik countdown
- **Tombol**: "Lanjutkan" (disabled sampai 60s habis)
- **Aksi**: 
  - Klik "Lanjutkan" → Initialize `quizProgress`
  - Simpan ke `localStorage.quizProgress`
  - Redirect ke `/quiz/test`

### 4. **Test Page** (`/quiz/test`)
- **Check**: Apakah user sudah login?
  - ❌ Tidak → Redirect ke `/quiz/login`
- **Load**: Progress dari `localStorage.quizProgress`
- **Timer**: Countdown sesuai durasi subtes
- **Auto-save**: 
  - Setiap 5 detik
  - Saat pindah soal
  - Saat ubah jawaban
- **Navigasi**: 
  - Tombol Sebelumnya/Selanjutnya
  - Tombol nomor soal (1-10)
- **Selesai Subtes**:
  - Hitung skor
  - Simpan ke `localStorage.quizScores`
  - Jika subtes < 7 → Break 3 menit
  - Jika subtes = 7 → Redirect ke `/quiz/result`

### 5. **Break Page** (Screen di `/quiz/test`)
- **Timer**: 180 detik (3 menit) countdown
- **Tampilkan**: Info subtes berikutnya
- **Auto-lanjut**: Setelah timer habis
- **Aksi**: 
  - Update `currentSubtest` +1
  - Reset `currentQuestion` = 1
  - Set timer sesuai subtes baru

### 6. **Result Page** (`/quiz/result`)
- **Check**: Apakah user sudah login?
  - ❌ Tidak → Redirect ke `/quiz/login`
- **Check**: Apakah ada scores?
  - ❌ Tidak → Redirect ke `/quiz`
- **Load**: Scores dari `localStorage.quizScores`
- **Tampilkan**:
  - Skor per subtes (X/10)
  - Status LULUS/TIDAK LULUS
  - Status kelulusan total
- **Aksi**: 
  - "Ulang Kuis" → Clear semua localStorage → Redirect ke `/quiz/login`
  - "Kembali ke Beranda" → Redirect ke `/`

## 💾 Backend & Data Storage

### **Saat Ini: Client-Side Only (localStorage)**

Sistem saat ini menggunakan **localStorage** untuk menyimpan data. Tidak ada backend server.

#### **Data yang Disimpan di localStorage:**

1. **`quizUser`** (Object)
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  startTime: "2024-01-15T10:30:00.000Z"
}
```

2. **`quizProgress`** (Object)
```javascript
{
  currentSubtest: 3,        // Subtes yang sedang dikerjakan (1-7)
  currentQuestion: 5,       // Soal yang sedang dikerjakan (1-10)
  answers: {               // Jawaban user
    "1-1": "A",
    "1-2": "B",
    "1-3": "C",
    "2-1": "A",
    // ... format: "subtes-question": "answer"
  },
  timeLeft: 120,            // Waktu tersisa (detik)
  isBreak: false,          // Apakah sedang break?
  breakTime: null          // Waktu break tersisa (jika isBreak = true)
}
```

3. **`quizScores`** (Object)
```javascript
{
  "1": {                   // Subtes 1
    correct: 8,
    total: 10,
    passed: true           // > 6 benar = true
  },
  "2": {
    correct: 5,
    total: 10,
    passed: false
  },
  // ... subtes 3-7
}
```

### **Kelebihan localStorage:**
✅ Tidak perlu backend server  
✅ Cepat & sederhana  
✅ Data tersimpan di browser user  
✅ Cocok untuk prototype/MVP  

### **Kekurangan localStorage:**
❌ Data hilang jika clear browser cache  
❌ Tidak bisa tracking multi-device  
❌ Tidak bisa analitik terpusat  
❌ Tidak bisa validasi server-side  
❌ Tidak bisa backup data  

## 🚀 Opsi Backend (Jika Diperlukan)

Jika Anda ingin menambahkan backend server, berikut struktur yang diperlukan:

### **1. Database Schema**

```sql
-- Tabel Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  created_at TIMESTAMP
);

-- Tabel Quiz Sessions
CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  status VARCHAR(20), -- 'in_progress', 'completed', 'abandoned'
  created_at TIMESTAMP
);

-- Tabel Answers
CREATE TABLE answers (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES quiz_sessions(id),
  subtest_id INTEGER, -- 1-7
  question_id INTEGER, -- 1-10
  answer VARCHAR(1), -- 'A', 'B', 'C', 'D'
  is_correct BOOLEAN,
  answered_at TIMESTAMP
);

-- Tabel Scores
CREATE TABLE scores (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES quiz_sessions(id),
  subtest_id INTEGER,
  correct_count INTEGER,
  total_count INTEGER,
  passed BOOLEAN,
  created_at TIMESTAMP
);
```

### **2. API Endpoints yang Diperlukan**

```javascript
// Authentication
POST /api/quiz/login
  Body: { name, email }
  Response: { userId, sessionId }

// Progress
GET  /api/quiz/progress/:sessionId
  Response: { currentSubtest, currentQuestion, answers, timeLeft }

POST /api/quiz/progress/:sessionId
  Body: { currentSubtest, currentQuestion, answers, timeLeft }
  Response: { success: true }

// Answers
POST /api/quiz/answer/:sessionId
  Body: { subtestId, questionId, answer }
  Response: { success: true }

// Submit Subtest
POST /api/quiz/submit-subtest/:sessionId
  Body: { subtestId }
  Response: { score: { correct, total, passed } }

// Scores
GET /api/quiz/scores/:sessionId
  Response: { scores: { 1: {...}, 2: {...}, ... } }

// Result
GET /api/quiz/result/:sessionId
  Response: { 
    user: {...},
    scores: {...},
    totalPassed: 5,
    overallStatus: "Lulus Total"
  }
```

### **3. Teknologi Backend yang Bisa Digunakan**

1. **Next.js API Routes** (Paling mudah, same codebase)
   - File: `app/api/quiz/.../route.js`
   - Database: PostgreSQL, MySQL, atau MongoDB

2. **Express.js** (Separate server)
   - Framework Node.js
   - Database: PostgreSQL/MongoDB

3. **Firebase** (Serverless)
   - Firestore untuk database
   - Authentication built-in
   - Real-time updates

4. **Supabase** (Open-source Firebase alternative)
   - PostgreSQL database
   - Real-time subscriptions
   - Authentication

## 📊 Rekomendasi

### **Untuk Development/Testing:**
✅ **Tetap pakai localStorage** - Cukup untuk testing & development

### **Untuk Production:**
✅ **Tambahkan Backend** jika:
- Perlu tracking hasil user
- Perlu analitik
- Perlu validasi server-side
- Perlu backup data
- Perlu multi-device access

### **Pilihan Backend Terbaik:**
1. **Next.js API Routes + PostgreSQL** (Recommended)
   - Same codebase, mudah deploy
   - Database robust

2. **Supabase** (Quick setup)
   - Setup cepat
   - Real-time features
   - Free tier tersedia

## 🔧 Implementasi Backend (Jika Diperlukan)

Saya bisa membantu membuat:
1. ✅ Next.js API Routes
2. ✅ Database schema & migrations
3. ✅ API endpoints lengkap
4. ✅ Update frontend untuk call API
5. ✅ Error handling & validation

Apakah Anda ingin saya buatkan backend sekarang, atau tetap pakai localStorage dulu?

