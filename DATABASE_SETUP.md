# Setup Database untuk Kuis Psikotes

## 📋 Langkah-langkah Setup

### **1. Install Database Driver**

Pilih salah satu sesuai database Anda:

**Untuk PostgreSQL:**
```bash
npm install pg uuid
```

**Untuk MySQL:**
```bash
npm install mysql2 uuid
```

### **2. Buat Database di DBeaver**

1. Buka DBeaver
2. Connect ke database server Anda (PostgreSQL atau MySQL)
3. Buat database baru (contoh: `quiz_psikotes`)

### **3. Jalankan SQL Schema**

**Untuk PostgreSQL:**
- Buka file `database/schema.sql` di DBeaver
- Jalankan script tersebut di database yang baru dibuat

**Untuk MySQL:**
- Buka file `database/schema-mysql.sql` di DBeaver
- Jalankan script tersebut di database yang baru dibuat

### **4. Setup Connection String**

Buat file `.env.local` di root project:

**Untuk PostgreSQL:**
```env
DATABASE_URL=postgresql://username:password@localhost:5432/quiz_psikotes
DATABASE_TYPE=postgresql
```

**Untuk MySQL:**
```env
DATABASE_URL=mysql://username:password@localhost:3306/quiz_psikotes
DATABASE_TYPE=mysql
```

**Format Connection String:**
```
postgresql://[user]:[password]@[host]:[port]/[database]
mysql://[user]:[password]@[host]:[port]/[database]
```

**Contoh:**
```
# PostgreSQL
DATABASE_URL=postgresql://postgres:mypassword@localhost:5432/quiz_psikotes

# MySQL
DATABASE_URL=mysql://root:mypassword@localhost:3306/quiz_psikotes
```

### **5. Install UUID Package**

```bash
npm install uuid
```

### **6. Test Connection**

Restart development server:
```bash
npm run dev
```

Jika berhasil, Anda akan melihat di console:
```
✅ Connected to PostgreSQL database
```
atau
```
✅ Connected to MySQL database
```

## 🔍 Cara Mendapatkan Connection String dari DBeaver

### **PostgreSQL:**
1. Klik kanan pada connection di DBeaver
2. Pilih "Edit Connection"
3. Lihat informasi:
   - Host: `localhost` (atau IP server)
   - Port: `5432` (default)
   - Database: nama database Anda
   - Username: username Anda
   - Password: password Anda

**Format:**
```
postgresql://[username]:[password]@[host]:[port]/[database]
```

### **MySQL:**
1. Klik kanan pada connection di DBeaver
2. Pilih "Edit Connection"
3. Lihat informasi:
   - Host: `localhost` (atau IP server)
   - Port: `3306` (default)
   - Database: nama database Anda
   - Username: username Anda
   - Password: password Anda

**Format:**
```
mysql://[username]:[password]@[host]:[port]/[database]
```

## 📊 Struktur Tabel

Setelah menjalankan schema, akan ada 4 tabel:

1. **users** - Data user yang login
2. **quiz_sessions** - Session quiz per user
3. **answers** - Jawaban user per soal
4. **scores** - Skor per subtes

## ✅ Verifikasi Setup

Setelah setup, test dengan:

1. **Login di aplikasi** → Data user akan tersimpan di tabel `users`
2. **Start quiz** → Session akan tersimpan di tabel `quiz_sessions`
3. **Jawab soal** → Jawaban akan tersimpan di tabel `answers`
4. **Submit subtes** → Skor akan tersimpan di tabel `scores`

Cek di DBeaver untuk memastikan data tersimpan!

## 🐛 Troubleshooting

### **Error: "Database not initialized"**
- Pastikan `.env.local` sudah dibuat
- Pastikan `DATABASE_URL` sudah diisi dengan benar
- Restart development server

### **Error: "Connection refused"**
- Pastikan database server berjalan
- Pastikan host dan port benar
- Cek firewall jika database di server remote

### **Error: "Authentication failed"**
- Pastikan username dan password benar
- Pastikan user memiliki akses ke database

### **Error: "Table doesn't exist"**
- Pastikan sudah menjalankan schema SQL
- Cek apakah tabel sudah dibuat di DBeaver

## 📝 Catatan

- File `.env.local` tidak akan di-commit ke Git (sudah di .gitignore)
- Jangan share connection string yang berisi password
- Untuk production, gunakan environment variables di hosting platform

