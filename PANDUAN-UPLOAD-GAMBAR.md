# Panduan Upload Gambar untuk Website Scover Bimbel

## Direktori Gambar

Website ini sudah disiapkan dengan direktori untuk menyimpan berbagai jenis gambar:

### 1. Logo Scover (`/public/images/logo/`)
Simpan logo Scover Bimbel di sini dengan nama:
- `scover-logo.png` - Logo utama untuk navbar dan footer
- Format: PNG dengan background transparan
- Ukuran recommended: 512x512px atau 1024x1024px

### 2. Gambar Mentor/Tutor (`/public/images/tutors/`)
Simpan foto mentor dengan nama sesuai nama mentor (huruf kecil):
- `aan.jpg` - Foto Kak Aan
- `adi.jpg` - Foto Kak Adi
- `amri.jpg` - Foto Kak Amri
- `bejo.jpg` - Foto Kak Bejo
- `diella.jpg` - Foto Kak Diella
- `citra.jpg` - Foto Kak Citra
- `doni.jpg` - Foto Kak Doni
- `eka.jpg` - Foto Kak Eka
- `fajar.jpg` - Foto Kak Fajar
- `gita.jpg` - Foto Kak Gita

Format: JPG atau PNG
Ukuran recommended: 400x400px (square/persegi)
Style: Professional photo dengan background yang clean

### 3. Logo Partner (`/public/images/partners/`)
Simpan logo sekolah/institusi mitra dengan nama yang jelas:
- `sma-ar-rohmah.png`
- `man-1-malang.png`
- `sman-1-tumpang.png`
- `smk-telkom.png`
- `sman-1-malang.png`
- `sman-3-malang.png`
- `sma-katolik-frateran.png`
- `sma-islam-al-maarif.png`

Format: PNG dengan background transparan (preferred) atau JPG
Ukuran recommended: 200x200px atau 300x300px

### 4. QR Code (`/public/images/`)
- `qr-code-scover.png` - QR Code untuk scan info/pendaftaran
Format: PNG
Ukuran: 500x500px atau 1000x1000px

### 5. Hero Image (`/public/images/`)
- `hero-image.jpg` - Gambar utama di homepage hero section
Format: JPG
Ukuran recommended: 1200x900px (landscape)
Konten: Foto siswa belajar/ruang kelas/kegiatan bimbel

### 6. Gallery Images (`/public/images/`)
Untuk halaman gallery, upload gambar dengan kategori:
- **Fasilitas**: `classroom-1.jpg`, `computer-lab.jpg`, `library.jpg`, `consultation-room.jpg`
- **Kegiatan**: `math-class.jpg`, `physics-lab.jpg`, `group-discussion.jpg`, `student-presentation.jpg`
- **Prestasi**: `graduation.jpg`, `high-score.jpg`, `scholarship.jpg`, `civil-service.jpg`
- **Acara**: `open-house.jpg`, `try-out.jpg`, `seminar.jpg`, `graduation-ceremony.jpg`

Format: JPG atau PNG
Ukuran recommended: 800x600px (landscape) atau 600x800px (portrait)

## Cara Upload Gambar

### Melalui File Manager
1. Buka file manager/explorer
2. Navigate ke folder `public/images/` di project
3. Pilih subfolder yang sesuai (logo, tutors, partners)
4. Copy-paste atau drag-drop gambar yang sudah disiapkan
5. Pastikan nama file sesuai dengan nama yang ada di dokumentasi di atas

### Melalui VS Code / Text Editor
1. Buka project di VS Code
2. Di sidebar kiri, expand folder `public/images/`
3. Klik kanan pada subfolder yang sesuai > Upload files
4. Pilih file gambar yang ingin diupload
5. Pastikan nama file sudah benar

## Tips Optimasi Gambar

### Kompresi
Untuk performa website yang lebih baik, compress gambar sebelum upload:
- Tool online: TinyPNG, Squoosh, CompressJPEG
- Target file size: < 200KB untuk profile photos, < 500KB untuk hero images

### Format
- Logo: PNG dengan background transparan
- Foto: JPG dengan quality 80-90%
- QR Code: PNG dengan quality maksimal

### Resolusi
- Profile photos: 400x400px sudah cukup
- Logo partners: 200x200px atau 300x300px
- Hero images: 1200x900px atau 1920x1080px
- Gallery images: 800x600px

## Fallback / Placeholder

Jika gambar belum diupload, website akan menampilkan:
- **Logo**: Huruf "S" dengan background gradient biru
- **Mentor**: Emoji 👨‍🏫 atau 👩‍🏫 sesuai gender
- **Partner**: Emoji 🏫
- **Hero**: Placeholder dengan icon 🎓 dan teks
- **Gallery**: Icon sesuai kategori

## Testing

Setelah upload gambar:
1. Refresh browser (Ctrl+R atau Cmd+R)
2. Clear cache jika perlu (Ctrl+Shift+R atau Cmd+Shift+R)
3. Cek di berbagai halaman:
   - Homepage: Logo di navbar, hero image, partner logos
   - About: Check di header
   - Tutors: Foto mentor
   - Gallery: Gambar fasilitas dan kegiatan
   - Footer: Logo dan QR code

## Kontak

Jika ada pertanyaan atau masalah dengan upload gambar, silakan hubungi tim developer.

---
*Dokumentasi ini dibuat untuk memudahkan proses upload dan maintenance gambar website Scover Bimbel.*

