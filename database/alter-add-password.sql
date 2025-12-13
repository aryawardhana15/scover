-- ALTER TABLE untuk menambahkan kolom password
-- Jalankan script ini di DBeaver setelah tabel users sudah dibuat

-- Untuk MySQL
ALTER TABLE users 
ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT '' AFTER email;

-- Untuk PostgreSQL (jika pakai PostgreSQL)
-- ALTER TABLE users 
-- ADD COLUMN password VARCHAR(255) NOT NULL DEFAULT '';

-- Catatan: 
-- - Kolom password akan diisi dengan hash password (bcrypt)
-- - Default '' untuk user yang sudah ada (bisa di-update manual jika perlu)
-- - Setelah semua user punya password, bisa hapus DEFAULT ''

