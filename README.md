# 🎓 Scover Bimbel - Website Bimbingan Belajar Malang

Website resmi Scover Bimbel, bimbingan belajar terpercaya di Malang yang menyediakan program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Proyek](#-struktur-proyek)
- [Persyaratan](#-persyaratan)
- [Instalasi](#-instalasi)
- [Konfigurasi](#-konfigurasi)
- [Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [Fitur Kuis Psikotes](#-fitur-kuis-psikotes)
- [API Endpoints](#-api-endpoints)
- [Database](#-database)
- [Deployment](#-deployment)
- [Kontribusi](#-kontribusi)

## ✨ Fitur Utama

### 🏠 Halaman Website
- **Homepage** - Landing page dengan informasi lengkap tentang Scover Bimbel
- **About** - Tentang kami dan visi misi
- **Programs** - Program bimbingan belajar yang tersedia
- **Tutors** - Daftar pengajar profesional
- **Gallery** - Galeri foto kegiatan
- **Partners** - Mitra kerjasama
- **Contact** - Kontak dan peta lokasi (dengan Leaflet)
- **Registration** - Form pendaftaran

### 🧠 Kuis Psikotes Digital
- **Login/Register** - Sistem autentikasi peserta
- **7 Subtes Psikotes**:
  1. Dimensi (Penalaran Ruang) - 2 menit
  2. Berhitung - 4 menit
  3. Penalaran Logis - 4 menit
  4. Penalaran Numerik - 4 menit
  5. Penalaran Verbal - 4 menit
  6. Penalaran Abstrak - 4 menit
  7. Mekanis-Teknologi - 4 menit
- **Timer Countdown** - Timer untuk setiap subtes
- **Auto-save** - Penyimpanan otomatis jawaban setiap 5 detik
- **Break Time** - Jeda 3 menit antar subtes
- **Hasil & Skor** - Tampilan hasil dan status kelulusan

### 🎨 Fitur Lainnya
- **SEO Optimized** - Meta tags, Open Graph, Structured Data
- **Responsive Design** - Mobile-friendly dengan Tailwind CSS
- **Dark Mode Ready** - Siap untuk dark mode
- **Interactive Map** - Peta lokasi dengan Leaflet

## 🛠 Teknologi yang Digunakan

### Frontend
- **Next.js 13.5.6** - React framework dengan App Router
- **React 18.2.0** - UI library
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Tabler Icons** - Icon library
- **Leaflet** - Interactive maps
- **React Leaflet** - React wrapper untuk Leaflet

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MySQL2** - Database driver untuk MySQL
- **bcryptjs** - Password hashing
- **UUID** - Unique identifier generation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Struktur Proyek

```
landing scover/
├── app/                          # Next.js App Router
│   ├── about/                    # Halaman About
│   ├── api/                      # API Routes
│   │   └── quiz/                 # Quiz API endpoints
│   │       ├── login/
│   │       ├── register/
│   │       ├── session/
│   │       ├── progress/
│   │       ├── answer/
│   │       ├── submit-subtest/
│   │       ├── scores/
│   │       ├── result/
│   │       └── results/
│   ├── contact/                  # Halaman Contact
│   ├── gallery/                  # Halaman Gallery
│   ├── partners/                 # Halaman Partners
│   ├── programs/                 # Halaman Programs
│   ├── quiz/                     # Quiz System
│   │   ├── login/                # Login page
│   │   ├── register/             # Register page
│   │   ├── test/                 # Test page
│   │   │   └── questions-data.js # Data soal psikotes
│   │   ├── result/               # Result page
│   │   └── *.md                  # Dokumentasi quiz
│   ├── registration/             # Halaman Registration
│   ├── tutors/                   # Halaman Tutors
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Homepage
│   └── globals.css               # Global styles
├── components/                   # React Components
│   ├── navbar.js                 # Navigation bar
│   └── footer.js                 # Footer
├── lib/                          # Utility libraries
│   ├── db.js                     # Database service
│   └── quiz-api.js               # Quiz API client
├── database/                     # Database files
│   └── schema-mysql.sql          # MySQL schema
├── public/                       # Static files
│   └── images/                   # Images assets
├── package.json                  # Dependencies
├── next.config.mjs               # Next.js config
├── tailwind.config.js            # Tailwind config
└── README.md                     # Dokumentasi ini
```

## 📦 Persyaratan

- **Node.js** >= 18.x
- **npm** >= 9.x atau **yarn** >= 1.22.x
- **MySQL** >= 8.0 (untuk production) atau in-memory storage (untuk development)

## 🚀 Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd "landing scover"
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Setup environment variables**
Buat file `.env.local` di root project:
```env
# Database (untuk production)
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=scover_bimbel
DB_PORT=3306

# JWT Secret (opsional, untuk autentikasi)
JWT_SECRET=your-secret-key

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## ⚙️ Konfigurasi

### Development Mode (In-Memory Storage)
Untuk development, aplikasi menggunakan in-memory storage. Data akan hilang saat server restart, tapi cocok untuk testing.

### Production Mode (MySQL Database)
1. **Setup MySQL Database**
```bash
# Login ke MySQL
mysql -u root -p

# Buat database
CREATE DATABASE scover_bimbel;

# Import schema
mysql -u root -p scover_bimbel < database/schema-mysql.sql
```

2. **Update `lib/db.js`**
Ganti in-memory storage dengan koneksi MySQL yang sebenarnya.

## 🏃 Menjalankan Aplikasi

### Development Server
```bash
npm run dev
# atau
yarn dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
# Build aplikasi
npm run build

# Jalankan production server
npm start
```

### Linting
```bash
npm run lint
```

## 🧠 Fitur Kuis Psikotes

### Flow Aplikasi Quiz

```
Homepage → Login → Landing Quiz → Aturan (60s) → 
Subtes 1 → Break (3m) → Subtes 2 → Break (3m) → 
... → Subtes 7 → Hasil
```

### Detail Subtes

| Subtes | Nama | Durasi | Jumlah Soal |
|--------|------|--------|-------------|
| 1 | Dimensi (Penalaran Ruang) | 2 menit | 10 |
| 2 | Berhitung | 4 menit | 10 |
| 3 | Penalaran Logis | 4 menit | 10 |
| 4 | Penalaran Numerik | 4 menit | 10 |
| 5 | Penalaran Verbal | 4 menit | 10 |
| 6 | Penalaran Abstrak | 4 menit | 10 |
| 7 | Mekanis-Teknologi | 4 menit | 10 |

### Fitur Quiz
- ✅ Timer countdown per subtes
- ✅ Auto-save jawaban setiap 5 detik
- ✅ Navigasi soal (next/previous)
- ✅ Break time 3 menit antar subtes
- ✅ Perhitungan skor otomatis
- ✅ Status kelulusan per subtes
- ✅ Hasil lengkap di akhir

## 🔌 API Endpoints

### Quiz API

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/quiz/login` | User login |
| POST | `/api/quiz/register` | User registration |
| POST | `/api/quiz/session` | Create/get session |
| GET | `/api/quiz/progress/:sessionId` | Get progress |
| POST | `/api/quiz/progress/:sessionId` | Save progress |
| POST | `/api/quiz/answer` | Save answer |
| POST | `/api/quiz/submit-subtest` | Submit subtest & calculate score |
| GET | `/api/quiz/scores/:sessionId` | Get scores |
| GET | `/api/quiz/result/:sessionId` | Get result |
| GET | `/api/quiz/results` | Get all results (admin) |

### Contoh Request

**Login**
```bash
POST /api/quiz/login
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Save Answer**
```bash
POST /api/quiz/answer
Content-Type: application/json

{
  "sessionId": "uuid",
  "subtestId": 1,
  "questionId": 1,
  "answer": "A"
}
```

## 🗄 Database

### Schema MySQL

Database terdiri dari 4 tabel utama:

1. **users** - Data pengguna
2. **quiz_sessions** - Session kuis
3. **answers** - Jawaban peserta
4. **scores** - Skor per subtes

Lihat `database/schema-mysql.sql` untuk detail lengkap.

### Setup Database

```bash
# Import schema
mysql -u root -p scover_bimbel < database/schema-mysql.sql

# Test connection
node test-database-connection.js
```

## 🚢 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Setup Environment Variables**
Tambahkan environment variables di Vercel dashboard:
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `JWT_SECRET`

### Manual Build

```bash
# Build static files
npm run build

# Output akan di folder 'out/'
# Deploy folder 'out/' ke hosting static
```

## 📚 Dokumentasi Tambahan

- [Backend Setup](./BACKEND_SETUP.md) - Panduan setup backend
- [Backend Implementation](./app/quiz/BACKEND_IMPLEMENTATION.md) - Dokumentasi implementasi backend
- [Flow Documentation](./app/quiz/FLOW_DOCUMENTATION.md) - Dokumentasi flow aplikasi quiz

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk perubahan besar:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Proyek ini adalah proprietary software milik Scover Bimbel.

## 📞 Kontak

- **Website**: [scoverbimbel.com](https://scoverbimbel.com)
- **Email**: info@scoverbimbel.com
- **Lokasi**: Malang, Jawa Timur, Indonesia

## 🙏 Terima Kasih

Terima kasih telah menggunakan Scover Bimbel! Semoga bermanfaat untuk persiapan UTBK, SBMPTN, dan tes lainnya.

---

**Dibuat dengan ❤️ untuk pendidikan Indonesia**
