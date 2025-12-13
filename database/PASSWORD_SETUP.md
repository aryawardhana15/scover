# Setup Password untuk Kuis Psikotes

## ✅ Password Sudah Ditambahkan!

Sistem password sudah ditambahkan ke registrasi dan login.

## 📋 Langkah Setup Database

### **1. Tambahkan Kolom Password ke Tabel Users**

Jalankan SQL berikut di DBeaver:

**Untuk MySQL:**
```sql
ALTER TABLE users 
ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT '' AFTER email;
```

**Untuk PostgreSQL:**
```sql
ALTER TABLE users 
ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT '';
```

**Atau jalankan file:**
- `database/alter-add-password.sql` (sudah dibuat)

### **2. Update User yang Sudah Ada (Opsional)**

Jika ada user yang sudah terdaftar tanpa password, Anda bisa:
- Biarkan mereka registrasi ulang dengan password
- Atau update manual di database

## 🔐 Fitur Password

### **Registrasi:**
- ✅ Field password (minimal 6 karakter)
- ✅ Field konfirmasi password
- ✅ Validasi password match
- ✅ Password di-hash dengan bcrypt sebelum disimpan

### **Login:**
- ✅ Field email dan password
- ✅ Verifikasi password dengan bcrypt
- ✅ Error message jika email/password salah

### **Keamanan:**
- ✅ Password di-hash dengan bcrypt (salt rounds: 10)
- ✅ Password tidak pernah dikirim atau disimpan dalam plain text
- ✅ Password tidak dikembalikan di API response

## 📝 Form Registrasi

Sekarang form registrasi memiliki:
1. **Nama Lengkap** (wajib)
2. **Email** (wajib)
3. **Password** (wajib, min. 6 karakter)
4. **Konfirmasi Password** (wajib, harus sama dengan password)

## 📝 Form Login

Sekarang form login memiliki:
1. **Email** (wajib)
2. **Password** (wajib)

## 🧪 Test

1. **Registrasi:**
   - Buka `/quiz/register`
   - Isi nama, email, password, dan konfirmasi password
   - Submit → Password akan di-hash dan disimpan ke database

2. **Login:**
   - Buka `/quiz/login`
   - Masukkan email dan password yang sudah didaftarkan
   - Submit → Password akan di-verify

## ⚠️ Catatan Penting

- **User lama** yang tidak punya password tidak bisa login (perlu registrasi ulang)
- **Password minimal 6 karakter**
- **Password di-hash** dengan bcrypt sebelum disimpan
- **Kolom password** harus ditambahkan ke database dulu sebelum bisa digunakan

## 🔧 Troubleshooting

### **Error: "Column 'password' doesn't exist"**
- Pastikan sudah menjalankan ALTER TABLE untuk menambahkan kolom password
- Cek di DBeaver apakah kolom password sudah ada

### **Error: "Cannot read property 'hash' of undefined"**
- Pastikan `bcryptjs` sudah terinstall: `npm install bcryptjs`
- Restart server setelah install

### **Login selalu gagal**
- Pastikan password yang diinput benar
- Pastikan user sudah punya password di database
- Cek console server untuk error detail

