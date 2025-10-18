# Website Scover Bimbel - Dokumentasi Lengkap

## 🎓 Tentang Project

Website modern dan responsive untuk **Scover Bimbel**, bimbingan belajar terbaik di Malang yang menyediakan program untuk Ujian Nasional, SBMPTN/UTBK, Ujian Kedinasan, dan Studi ke Luar Negeri.

## ✨ Fitur Utama

### 1. **Homepage**
- **Hero Section Baru**: Desain split-screen dengan visual yang menarik
- **Quick Stats**: Tampilan achievement di hero section
- **Why Choose Scover**: Interactive features dengan stats
- **Programs Overview**: Grid program dengan pricing dan features
- **Tutors Showcase**: Preview tim tutor dengan rating dan stats
- **Partners Carousel**: Horizontal scroll logo mitra sekolah
- **CTA Section**: Glass morphism dengan stats counter

### 2. **About Page**
- **Interactive Tabs**: Visi & Misi, Sejarah, Nilai-Nilai
- **Stats Cards**: Pencapaian dan fakta menarik
- **Team Section**: Grid tim profesional dengan roles
- **Modern Layout**: 2-column dengan sidebar info

### 3. **Programs Page**
- **Filter System**: Filter program by kategori
- **Interactive Cards**: Hover effects dengan pricing
- **Detail Modal**: Full-screen modal untuk detail lengkap
- **Features List**: Checklist features per program

### 4. **Tutors Page**
- **Auto Carousel**: Sliding otomatis dengan manual controls
- **Filter by Subject**: Dynamic filtering
- **Tutor Profiles**: Rating, stats, dan subjects
- **Detail Modal**: Comprehensive tutor information

### 5. **Gallery Page**
- **Category Filter**: 4 kategori (Fasilitas, Kegiatan, Prestasi, Acara)
- **View Modes**: Grid dan Masonry layout
- **Image Modal**: Full-screen viewer
- **Stats Counter**: Achievement counters

### 6. **Partners Page**
- **Partner Grid**: Display semua mitra kerjasama
- **Logo Support**: Integrasi gambar logo partner
- **Category Tags**: Type sekolah (SMA, MAN, SMK)

### 7. **Contact Page**
- **Dual Forms**: Konsultasi dan Kerjasama Institusi
- **Map Integration**: Google Maps embed
- **Contact Info**: Email, Phone, Address
- **Social Media**: Links ke social media

## 🎨 Design System

### **Typography**
- **Primary Font**: Inter (body text, UI elements)
- **Secondary Font**: Poppins (headings, titles)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

### **Color Palette**
```css
Primary Blue: #1E40AF
Secondary Blue: #3B82F6
Accent Orange: #F59E0B
Orange Light: #F97316
Success Green: #10B981
Purple: #8B5CF6
```

### **Design Patterns**
- **Glass Morphism**: Backdrop blur dengan transparency
- **Gradient Backgrounds**: Multi-color animated gradients
- **Rounded Corners**: 2xl, 3xl untuk modern look
- **Shadow System**: Layered shadows untuk depth
- **Animations**: Smooth transitions dan hover effects

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Font**: Google Fonts (Inter, Poppins)
- **Icons**: Tabler Icons, SVG Icons
- **Image Optimization**: Next.js Image Component
- **Animations**: CSS Keyframes, Tailwind Animate

## 📁 Struktur Project

```
landing scover/
├── app/
│   ├── page.js                 # Homepage
│   ├── layout.js               # Root layout dengan fonts
│   ├── globals.css             # Global styles & animations
│   ├── about/
│   │   ├── page.js
│   │   └── about-client.js
│   ├── programs/
│   │   ├── page.js
│   │   └── programs-client.js
│   ├── tutors/
│   │   ├── page.js
│   │   └── tutors-client.js
│   ├── gallery/
│   │   ├── page.js
│   │   └── gallery-client.js
│   ├── partners/
│   │   ├── page.js
│   │   └── partners-client.js
│   ├── contact/
│   │   ├── page.js
│   │   └── contact-client.js
│   └── registration/
│       ├── page.js
│       └── registration-client.js
├── components/
│   ├── navbar.js               # Navigation bar dengan logo
│   └── footer.js               # Footer dengan QR code
├── public/
│   └── images/
│       ├── logo/               # Logo Scover
│       ├── tutors/             # Foto mentor
│       ├── partners/           # Logo partner
│       └── *.jpg/png           # Hero & gallery images
└── README-SCOVER.md
```

## 📸 Upload Gambar

### **Logo Scover**
Path: `/public/images/logo/scover-logo.png`
- Format: PNG transparent
- Size: 512x512px atau 1024x1024px

### **Foto Mentor**
Path: `/public/images/tutors/`
- Naming: `[nama].jpg` (lowercase, e.g., `aan.jpg`)
- Format: JPG atau PNG
- Size: 400x400px (square)
- Style: Professional photo

### **Logo Partner**
Path: `/public/images/partners/`
- Naming: `[slug].png` (e.g., `sma-ar-rohmah.png`)
- Format: PNG transparent (preferred)
- Size: 200x200px atau 300x300px

### **QR Code**
Path: `/public/images/qr-code-scover.png`
- Format: PNG
- Size: 500x500px atau 1000x1000px

### **Hero Image**
Path: `/public/images/hero-image.jpg`
- Format: JPG
- Size: 1200x900px (landscape)
- Content: Foto siswa/ruang kelas/kegiatan

Lihat **PANDUAN-UPLOAD-GAMBAR.md** untuk detail lengkap.

## 🎯 Fitur Responsif

### **Mobile (< 768px)**
- Touch-friendly buttons (min 44px)
- Hamburger menu
- Stacked layouts
- Swipe gestures untuk carousel
- Optimized typography sizes

### **Tablet (768px - 1024px)**
- 2-column layouts
- Adjusted spacing
- Tablet-optimized navigation

### **Desktop (> 1024px)**
- Full feature display
- Multi-column layouts
- Hover effects enabled
- Expanded navigation menu

## 🎨 Animasi & Interaksi

### **Entrance Animations**
- Fade In Up/Left/Right
- Scale In
- Slide In Up
- Bounce In

### **Continuous Animations**
- Float (educational icons)
- Pulse (gradient orbs)
- Glow (text & elements)
- Shimmer (loading states)

### **Hover Effects**
- Lift (cards elevate)
- Scale (buttons & images)
- Glow (interactive elements)
- Color transition

### **Scroll Behaviors**
- Smooth scroll
- Sticky navbar
- Scroll indicators
- Parallax effects

## 🔧 Development

### **Install Dependencies**
```bash
npm install
```

### **Run Development Server**
```bash
npm run dev
```

### **Build for Production**
```bash
npm run build
```

### **Start Production Server**
```bash
npm start
```

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component dengan lazy loading
- **Font Optimization**: Google Fonts dengan font-display: swap
- **Code Splitting**: Automatic per-route code splitting
- **Compressed Assets**: Minified CSS & JS
- **Caching Strategy**: Static assets dengan max-age headers

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Social Media Integration

Website terintegrasi dengan:
- Instagram: [@scoverbimbel](https://instagram.com/scoverbimbel)
- Facebook: [Scover Bimbel](https://facebook.com/scoverbimbel)
- YouTube: [@scoverbimbel](https://youtube.com/@scoverbimbel)

## 🔐 SEO Optimization

- **Meta Tags**: Title, description untuk setiap halaman
- **Open Graph**: Social media preview
- **Structured Data**: Schema.org markup
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling rules

## 📝 Content Management

### **Update Tutor Information**
Edit: `app/tutors/tutors-client.js`
- Tambah/edit data tutor dalam array `tutors`
- Upload foto di `/public/images/tutors/`

### **Update Program Information**
Edit: `app/programs/programs-client.js`
- Tambah/edit data program dalam array `programs`
- Sesuaikan pricing dan features

### **Update Partner Information**
Edit: `app/page.js` (Partners Section)
- Tambah/edit data partner
- Upload logo di `/public/images/partners/`

### **Update Contact Information**
Edit: `components/footer.js`
- Email, phone, address
- Social media links
- QR code

## 🎉 Perubahan dari Website Sebelumnya

### **Desain**
✅ Font modern (Inter & Poppins vs Playfair & Lora)
✅ Color scheme fresh (Blue & Orange vs Gold & Terracotta)
✅ Layout variatif (Grid, Carousel, Masonry vs Card-based)
✅ Hero section baru (Split-screen vs Full-screen gradient)

### **Fitur**
✅ Filter & search functionality
✅ Modal detail views
✅ Carousel dengan auto-slide
✅ Interactive stats counters
✅ Gallery dengan multiple views
✅ QR code integration

### **UX**
✅ Touch-optimized untuk mobile
✅ Swipe gestures
✅ Loading states
✅ Better error handling
✅ Accessibility improvements

### **Performance**
✅ Faster page loads
✅ Optimized images
✅ Better animations (60fps)
✅ Reduced bundle size

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: info@scoverbimbel.com
- Phone: +62 857 0882 9751
- Address: Malang, Jawa Timur, Indonesia

---

**© 2025 Scover Bimbel. All rights reserved.**

Website ini dikembangkan dengan ❤️ untuk masa depan pendidikan yang lebih baik.








