'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Touch/Swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [partnersScrollPosition, setPartnersScrollPosition] = useState(0);

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (carouselType) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next slide
      if (carouselType === 'hero') {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
      } else if (carouselType === 'partners') {
        // For partners carousel, we can pause animation temporarily or adjust speed
        const partnersWrapper = document.querySelector('.partners-carousel-wrapper');
        if (partnersWrapper) {
          partnersWrapper.style.animationPlayState = 'paused';
          setTimeout(() => {
            partnersWrapper.style.animationPlayState = 'running';
          }, 1000);
        }
      } else if (carouselType === 'alumni') {
        // For alumni carousel, pause all alumni animations temporarily
        const alumniRows = document.querySelectorAll('.alumni-carousel-row-1, .alumni-carousel-row-2, .alumni-carousel-row-3');
        alumniRows.forEach(row => {
          row.style.animationPlayState = 'paused';
        });
        setTimeout(() => {
          alumniRows.forEach(row => {
            row.style.animationPlayState = 'running';
          });
        }, 1000);
      }
    }
    if (isRightSwipe) {
      // Swipe right - previous slide
      if (carouselType === 'hero') {
        setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
      } else if (carouselType === 'partners') {
        // For partners carousel, we can pause animation temporarily or adjust speed
        const partnersWrapper = document.querySelector('.partners-carousel-wrapper');
        if (partnersWrapper) {
          partnersWrapper.style.animationPlayState = 'paused';
          setTimeout(() => {
            partnersWrapper.style.animationPlayState = 'running';
          }, 1000);
        }
      } else if (carouselType === 'alumni') {
        // For alumni carousel, pause all alumni animations temporarily
        const alumniRows = document.querySelectorAll('.alumni-carousel-row-1, .alumni-carousel-row-2, .alumni-carousel-row-3');
        alumniRows.forEach(row => {
          row.style.animationPlayState = 'paused';
        });
        setTimeout(() => {
          alumniRows.forEach(row => {
            row.style.animationPlayState = 'running';
          });
        }, 1000);
      }
    }
  };

  const typingTexts = ['Impian', 'Prestasi', 'Kesuksesan', 'Masa Depan'];

  const programs = [
    {
      title: "Primary and Secondary Education",
      subtitle: "SD • SMP • SMA • SNBT • Kedinasan",
      description: "Program pembelajaran dasar hingga persiapan masuk perguruan tinggi dan kedinasan",
      image: "/images/logo/primary.png",
      stats: [
        { label: "Program", value: "6 Jenis" },
        { label: "Success Rate", value: "86%" }
      ],
      features: ["Kelas Reguler", "Persiapan SNBT", "Kedinasan", "Codelab"],
      color: "from-[#1E3A8A] to-[#1E40AF]",
      popular: true
    },
    {
      title: "Scover Overseas Program",
      subtitle: "TOEFL • IELTS • Bahasa • Ausbildung",
      description: "Program persiapan studi dan kerja di luar negeri dengan sertifikasi internasional",
      image: "/images/logo/overseas.png",
      stats: [
        { label: "Bahasa", value: "6 Jenis" },
        { label: "Countries", value: "15+" }
      ],
      features: ["TOEFL/IELTS", "Bahasa Asing", "Ausbildung"],
      color: "from-[#10B981] to-[#059669]",
      popular: false
    },
    {
      title: "Scover Campus Connect",
      subtitle: "Professional • Academic • Career",
      description: "Program pengembangan profesional untuk mahasiswa dan alumni",
      image: "/images/logo/campus.png",
      stats: [
        { label: "Program", value: "5 Jenis" },
        { label: "Alumni", value: "500+" }
      ],
      features: ["Professional Ready", "ClassBoost", "SkillForge", "CareerBridge"],
      color: "from-[#8B5CF6] to-[#7C3AED]",
      popular: false
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % programs.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, programs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programs.length) % programs.length);
  };

  // Typing Animation Effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      const current = typingTexts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, typingTexts]);

  // Tutors Carousel Control
  useEffect(() => {
    const wrapper = document.getElementById('tutors-carousel-wrapper');
    const prevBtn = document.getElementById('tutors-carousel-prev');
    const nextBtn = document.getElementById('tutors-carousel-next');
    const pagination = document.getElementById('tutors-pagination');
    
    if (!wrapper || !prevBtn || !nextBtn || !pagination) return;
    
    const slides = wrapper.children;
    const totalSlides = slides.length;
    let currentSlide = 0;
    let slidesPerView = 1;
    
    // Detect slides per view based on screen size
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        slidesPerView = 3;
      } else if (window.innerWidth >= 768) {
        slidesPerView = 2;
      } else {
        slidesPerView = 1;
      }
    };
    
    updateSlidesPerView();
    
    const maxSlide = Math.ceil(totalSlides / slidesPerView) - 1;
    
    // Generate pagination dots
    pagination.innerHTML = '';
    for (let i = 0; i <= maxSlide; i++) {
      const dot = document.createElement('button');
      dot.className = `w-4 h-4 rounded-full transition-all duration-500 shadow-lg ${i === 0 ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-12 scale-125' : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'}`;
      dot.addEventListener('click', () => goToSlide(i));
      pagination.appendChild(dot);
    }
    
    const updateCarousel = () => {
      const slideWidth = slides[0].offsetWidth;
      wrapper.style.transform = `translateX(-${currentSlide * slideWidth * slidesPerView}px)`;
      
      // Update pagination with enhanced styling
      const dots = pagination.children;
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = `w-4 h-4 rounded-full transition-all duration-500 shadow-lg ${i === currentSlide ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-12 scale-125' : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'}`;
      }
    };
    
    const goToSlide = (index) => {
      currentSlide = Math.max(0, Math.min(index, maxSlide));
      updateCarousel();
    };
    
    const nextSlide = () => {
      currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
      updateCarousel();
    };
    
    const prevSlide = () => {
      currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
      updateCarousel();
    };
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide
    const autoSlide = setInterval(nextSlide, 5000);
    
    // Handle window resize
    const handleResize = () => {
      updateSlidesPerView();
      updateCarousel();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(autoSlide);
      window.removeEventListener('resize', handleResize);
      prevBtn.removeEventListener('click', prevSlide);
      nextBtn.removeEventListener('click', nextSlide);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Scover Bimbel - Bimbingan Belajar Terbaik di Malang | UTBK, SBMPTN, Kedinasan</title>
        <meta name="description" content="Scover Bimbel Malang - Bimbingan belajar terpercaya dengan pengajar berkualitas. Program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri. 90% siswa berhasil masuk PTN favorit." />
        <meta name="keywords" content="bimbel malang, bimbingan belajar malang, UTBK malang, SBMPTN malang, kedinasan malang, TOEFL malang, bimbel terbaik malang, tutor malang, les malang, bimbel UTBK malang" />
        <meta property="og:title" content="Scover Bimbel - Bimbingan Belajar Terbaik di Malang" />
        <meta property="og:description" content="Bimbingan belajar terpercaya dengan pengajar berkualitas untuk program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri." />
        <meta property="og:image" content="https://scoverbimbel.com/images/logo/logo2.png" />
        <meta property="og:url" content="https://scoverbimbel.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scover Bimbel - Bimbingan Belajar Terbaik di Malang" />
        <meta name="twitter:description" content="Bimbingan belajar terpercaya dengan pengajar berkualitas untuk program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri." />
        <meta name="twitter:image" content="https://scoverbimbel.com/images/logo/logo2.png" />
        <link rel="canonical" href="https://scoverbimbel.com" />
      </Head>
      
      
      <div className="relative overflow-hidden bg-white">
      {/* Hero Section - Educational Focus */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden min-h-screen flex items-center">
        {/* Educational Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Educational Icons */}
          <div className="particle absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl animate-float-slow"></div>
          <div className="particle absolute top-40 right-20 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-xl animate-float-medium"></div>
          <div className="particle absolute bottom-20 left-1/4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-lg animate-float-fast"></div>
          <div className="particle absolute top-1/2 right-1/3 w-18 h-18 bg-purple-100 rounded-full flex items-center justify-center text-2xl animate-float-slow"></div>
          <div className="particle absolute top-1/3 left-1/3 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-sm animate-float-medium"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              {/* Educational Badge */}
              <div className="mb-8 animate-slide-down">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-full px-6 py-3 shadow-lg mb-6">
                <img src="/images/logo/logo.png" alt="Scover Logo" className="w-6 h-6" />
                  <span className="text-sm font-medium">#1 Bimbel Terpercaya di Malang</span>
                </div>
              </div>
        
              {/* Main Heading with Typing Animation */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins font-black text-gray-900 mb-4 sm:mb-6 leading-tight animate-slide-up">
                Raih <span className="typing-text bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#fabe49] bg-clip-text text-transparent">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span><br />
                <span className="text-3xl sm:text-4xl md:text-6xl">Pendidikan Terbaik</span>
              </h1>
              
              {/* Educational Description */}
              {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in">
                Bimbingan belajar berkualitas dengan metode terbukti, tutor berpengalaman, dan fasilitas modern untuk kesuksesan akademikmu.
              </p> */}
              
              {/* Educational Features */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-scale-in">
                {[
                  { icon: "", text: "Tutor Berpengalaman" },
                  { icon: "", text: "86% Success Rate" },
                  { icon: "", text: "Prestasi Terbukti" },
                  { icon: "", text: "Fasilitas Modern" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="text-lg sm:text-2xl">{feature.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                

                <Link href="/programs" className="group relative bg-gradient-to-r from-[#003049] to-[#0c5681] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Lihat Program</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
        
            {/* Right Side - Educational Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className=" rounded-3xl  overflow-hidden  relative">
                  {/* Achievement Badge - Integrated */}
                  {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-xl shadow-lg z-10">
                    <div className="text-sm font-bold">🏆 Terbaik 2024</div>
                  </div> */}
                  
                  {/* Profile Image Only */}
                  <img 
                    src="/images/logo/Profil Scover.png" 
                    alt="Profile Scover" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl animate-bounce delay-300"></div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Schoters Style with Alumni Carousel */}
      <section className="py-20 bg-white relative overflow-hidden">
        
        <div className="container mx-auto px-4">
           
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <div className="space-y-8">
            {/* Badge with floating animation */}
          {/* Educational Badge */}
          <div className="mb-8 animate-slide-down">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#fabe49] to-[#ffdc30] text-white rounded-full px-6 py-3 shadow-lg mb-6">
                 
                  <span className="text-sm font-medium">Sekilas Tentang Kami</span>
                </div>
              </div>
              
            {/* Main Heading with 3D effect */}
            <div className="relative">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-gray-900 mb-2">Mengapa</span>
                <span className="block text-gray-900 mb-2">Memilih</span>
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#fabe49] blur-lg opacity-75"></span>
                  <span className="relative bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#fabe49] bg-clip-text text-transparent">
                  Scover?
                  </span>
                  <div className="absolute -right-8 -top-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl transform rotate-12 animate-bounce">
                    
                  </div>
                </span>
              </h2>
            </div>
              
            {/* Description */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kami memberikan pengalaman belajar yang berbeda dengan pendekatan personal dan teknologi modern untuk mencapai target akademik Anda.
              </p>
                </div>
                
            {/* CTA Button with creative design */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#003049] text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#003049]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fabe49] to-[#ffdc30] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 group-hover:text-[#003049] transition-colors">Pelajari Lebih Lanjut</span>
                <div className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  </div>
              </button>
                  </div>
            </div>
            
            {/* Right Side - Alumni Carousel (3 rows, zig-zag direction) */}
            <div className="space-y-6 relative">
              {/* Row 1 - Scroll Left to Right */}
              <div className="alumni-carousel-container overflow-hidden">
                <div 
                  className="alumni-carousel-row-1 flex animate-scroll-right space-x-4"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd('alumni')}
                >
                  {[
                    { name: "M. Try Radjha Bintang", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/M. Try Radjha Bintang-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "FIRLI HIDAYANI P. U.", university: "Universitas Brawijaya", program: "Bio Informatika", year: "2024", photo: "/images/alumni/FIRLI HIDAYANI P. U.-bio informatika-Universitas Brawijaya.png" },
                    { name: "Moch Rakha Laksayndra", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/rakha.png" },
                    { name: "Haidar Kholid Musyafa", university: "ITS", program: "Teknik Mesin", year: "2024", photo: "/images/alumni/Haidar Kholid Musyafa-teknik mesin-ITS.png" },
                    { name: "Refandra Araya S. M.", university: "Universitas Hasanuddin", program: "Pendidikan Dokter Gigi", year: "2024", photo: "/images/alumni/Refandra Araya S. M.-PENDIDIKAN DOKTER GIGI-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Geonardo Baso", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Geonardo Baso_ P-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Razan Muhammad Ihsan", university: "Universitas Negeri Malang", program: "Manajemen", year: "2024", photo: "/images/alumni/RAZAN MUHAMMAD IHSAN-manajemen-Universitas Negeri Malang.png" },
                    { name: "Ginaya Desembria M", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Ginaya Desembria M-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "M. Riffat Al Fayyadh", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/riffat.png" },
                    { name: "Hanifa Nazira Azwar", university: "Universitas Brawijaya", program: "Kedokteran", year: "2024", photo: "/images/alumni/hanifa nazira azwar-KEDOKTERAN-UNIVERSITAS BRAWIJAYA.png" },
                    { name: "Nurul Mutmainna Munir", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Nurul Mutmainna Munir-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "M. Ismi Rafie H. A.", university: "IT PLN", program: "Sistem Informasi", year: "2024", photo: "/images/alumni/M. ismi rafie h. A.-SISTEM INFORMASI-IT PLN.png" },
                    // Second set with different order to avoid visible loop
                    { name: "Haidar Kholid Musyafa", university: "ITS", program: "Teknik Mesin", year: "2024", photo: "/images/alumni/Haidar Kholid Musyafa-teknik mesin-ITS.png" },
                    { name: "Ginaya Desembria M", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Ginaya Desembria M-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "M. Riffat Al Fayyadh", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/riffat.png" },
                    { name: "FIRLI HIDAYANI P. U.", university: "Universitas Brawijaya", program: "Bio Informatika", year: "2024", photo: "/images/alumni/FIRLI HIDAYANI P. U.-bio informatika-Universitas Brawijaya.png" },
                    { name: "M. Ismi Rafie H. A.", university: "IT PLN", program: "Sistem Informasi", year: "2024", photo: "/images/alumni/M. ismi rafie h. A.-SISTEM INFORMASI-IT PLN.png" },
                    { name: "Refandra Araya S. M.", university: "Universitas Hasanuddin", program: "Pendidikan Dokter Gigi", year: "2024", photo: "/images/alumni/Refandra Araya S. M.-PENDIDIKAN DOKTER GIGI-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Moch Rakha Laksayndra", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/rakha.png" },
                    { name: "Nurul Mutmainna Munir", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Nurul Mutmainna Munir-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Geonardo Baso", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Geonardo Baso_ P-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Hanifa Nazira Azwar", university: "Universitas Brawijaya", program: "Kedokteran", year: "2024", photo: "/images/alumni/hanifa nazira azwar-KEDOKTERAN-UNIVERSITAS BRAWIJAYA.png" },
                    { name: "Razan Muhammad Ihsan", university: "Universitas Negeri Malang", program: "Manajemen", year: "2024", photo: "/images/alumni/RAZAN MUHAMMAD IHSAN-manajemen-Universitas Negeri Malang.png" },
                    { name: "M. Try Radjha Bintang", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/M. Try Radjha Bintang-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" }
                  ].map((alumni, index) => (
                    <div key={index} className="flex-shrink-0 w-72">
                      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-lg">
                <Image 
                                src={alumni.photo}
                                alt={alumni.name}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                  if (e.target && e.target.parentElement) {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-2xl text-white">🎓</div>';
                                  }
                                }}
                              />
                </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 truncate">{alumni.name}</h4>
                            <p className="text-xs text-blue-600 font-semibold mb-1 truncate">{alumni.university}</p>
                            <p className="text-xs text-gray-600 truncate">{alumni.program}</p>
                            {/* <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full mt-2">
                              Lulus {alumni.year}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            
              {/* Row 2 - Scroll Right to Left */}
              <div className="alumni-carousel-container overflow-hidden">
                <div 
                  className="alumni-carousel-row-2 flex animate-scroll-left space-x-4"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd('alumni')}
                >
                  {[
                    { name: "Nurul Mutmainna Munir", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Nurul Mutmainna Munir-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "M. Riffat Al Fayyadh", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/riffat.png" },
                    { name: "Geonardo Baso", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Geonardo Baso_ P-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Haidar Kholid Musyafa", university: "ITS", program: "Teknik Mesin", year: "2024", photo: "/images/alumni/Haidar Kholid Musyafa-teknik mesin-ITS.png" },
                    { name: "M. Ismi Rafie H. A.", university: "IT PLN", program: "Sistem Informasi", year: "2024", photo: "/images/alumni/M. ismi rafie h. A.-SISTEM INFORMASI-IT PLN.png" },
                    { name: "Refandra Araya S. M.", university: "Universitas Hasanuddin", program: "Pendidikan Dokter Gigi", year: "2024", photo: "/images/alumni/Refandra Araya S. M.-PENDIDIKAN DOKTER GIGI-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Ginaya Desembria M", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Ginaya Desembria M-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Hanifa Nazira Azwar", university: "Universitas Brawijaya", program: "Kedokteran", year: "2024", photo: "/images/alumni/hanifa nazira azwar-KEDOKTERAN-UNIVERSITAS BRAWIJAYA.png" },
                    { name: "Razan Muhammad Ihsan", university: "Universitas Negeri Malang", program: "Manajemen", year: "2024", photo: "/images/alumni/RAZAN MUHAMMAD IHSAN-manajemen-Universitas Negeri Malang.png" },
                    { name: "Moch Rakha Laksayndra", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/rakha.png" },
                    { name: "FIRLI HIDAYANI P. U.", university: "Universitas Brawijaya", program: "Bio Informatika", year: "2024", photo: "/images/alumni/FIRLI HIDAYANI P. U.-bio informatika-Universitas Brawijaya.png" },
                    { name: "M. Try Radjha Bintang", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/M. Try Radjha Bintang-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    // Second set with different order to avoid visible loop
                    { name: "Geonardo Baso", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Geonardo Baso_ P-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "M. Ismi Rafie H. A.", university: "IT PLN", program: "Sistem Informasi", year: "2024", photo: "/images/alumni/M. ismi rafie h. A.-SISTEM INFORMASI-IT PLN.png" },
                    { name: "Nurul Mutmainna Munir", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Nurul Mutmainna Munir-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Haidar Kholid Musyafa", university: "ITS", program: "Teknik Mesin", year: "2024", photo: "/images/alumni/Haidar Kholid Musyafa-teknik mesin-ITS.png" },
                    { name: "M. Riffat Al Fayyadh", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/riffat.png" },
                    { name: "Refandra Araya S. M.", university: "Universitas Hasanuddin", program: "Pendidikan Dokter Gigi", year: "2024", photo: "/images/alumni/Refandra Araya S. M.-PENDIDIKAN DOKTER GIGI-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Ginaya Desembria M", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Ginaya Desembria M-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Hanifa Nazira Azwar", university: "Universitas Brawijaya", program: "Kedokteran", year: "2024", photo: "/images/alumni/hanifa nazira azwar-KEDOKTERAN-UNIVERSITAS BRAWIJAYA.png" },
                    { name: "Razan Muhammad Ihsan", university: "Universitas Negeri Malang", program: "Manajemen", year: "2024", photo: "/images/alumni/RAZAN MUHAMMAD IHSAN-manajemen-Universitas Negeri Malang.png" },
                    { name: "Moch Rakha Laksayndra", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/rakha.png" },
                    { name: "FIRLI HIDAYANI P. U.", university: "Universitas Brawijaya", program: "Bio Informatika", year: "2024", photo: "/images/alumni/FIRLI HIDAYANI P. U.-bio informatika-Universitas Brawijaya.png" },
                    { name: "M. Try Radjha Bintang", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/M. Try Radjha Bintang-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" }
                  ].map((alumni, index) => (
                    <div key={index} className="flex-shrink-0 w-72">
                      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-lg">
                              <Image 
                                src={alumni.photo}
                                alt={alumni.name}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                  if (e.target && e.target.parentElement) {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-2xl text-white">🎓</div>';
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 truncate">{alumni.name}</h4>
                            <p className="text-xs text-orange-600 font-semibold mb-1 truncate">{alumni.university}</p>
                            <p className="text-xs text-gray-600 truncate">{alumni.program}</p>
                            {/* <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full mt-2">
                              Lulus {alumni.year}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Row 3 - Scroll Left to Right */}
              <div className="alumni-carousel-container overflow-hidden">
                <div 
                  className="alumni-carousel-row-3 flex animate-scroll-right-slow space-x-4"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd('alumni')}
                >
                  {[
                    { name: "Razan Muhammad Ihsan", university: "Universitas Negeri Malang", program: "Manajemen", year: "2024", photo: "/images/alumni/RAZAN MUHAMMAD IHSAN-manajemen-Universitas Negeri Malang.png" },
                    { name: "Ginaya Desembria M", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Ginaya Desembria M-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "M. Ismi Rafie H. A.", university: "IT PLN", program: "Sistem Informasi", year: "2024", photo: "/images/alumni/M. ismi rafie h. A.-SISTEM INFORMASI-IT PLN.png" },
                    { name: "Moch Rakha Laksayndra", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/rakha.png" },
                    { name: "Refandra Araya S. M.", university: "Universitas Hasanuddin", program: "Pendidikan Dokter Gigi", year: "2024", photo: "/images/alumni/Refandra Araya S. M.-PENDIDIKAN DOKTER GIGI-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Hanifa Nazira Azwar", university: "Universitas Brawijaya", program: "Kedokteran", year: "2024", photo: "/images/alumni/hanifa nazira azwar-KEDOKTERAN-UNIVERSITAS BRAWIJAYA.png" },
                    { name: "M. Try Radjha Bintang", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/M. Try Radjha Bintang-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Nurul Mutmainna Munir", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Nurul Mutmainna Munir-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Haidar Kholid Musyafa", university: "ITS", program: "Teknik Mesin", year: "2024", photo: "/images/alumni/Haidar Kholid Musyafa-teknik mesin-ITS.png" },
                    { name: "Geonardo Baso", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Geonardo Baso_ P-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "M. Riffat Al Fayyadh", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/riffat.png" },
                    { name: "FIRLI HIDAYANI P. U.", university: "Universitas Brawijaya", program: "Bio Informatika", year: "2024", photo: "/images/alumni/FIRLI HIDAYANI P. U.-bio informatika-Universitas Brawijaya.png" },
                    // Second set with different order to avoid visible loop
                    { name: "M. Ismi Rafie H. A.", university: "IT PLN", program: "Sistem Informasi", year: "2024", photo: "/images/alumni/M. ismi rafie h. A.-SISTEM INFORMASI-IT PLN.png" },
                    { name: "Moch Rakha Laksayndra", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/rakha.png" },
                    { name: "Razan Muhammad Ihsan", university: "Universitas Negeri Malang", program: "Manajemen", year: "2024", photo: "/images/alumni/RAZAN MUHAMMAD IHSAN-manajemen-Universitas Negeri Malang.png" },
                    { name: "Ginaya Desembria M", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Ginaya Desembria M-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Refandra Araya S. M.", university: "Universitas Hasanuddin", program: "Pendidikan Dokter Gigi", year: "2024", photo: "/images/alumni/Refandra Araya S. M.-PENDIDIKAN DOKTER GIGI-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Hanifa Nazira Azwar", university: "Universitas Brawijaya", program: "Kedokteran", year: "2024", photo: "/images/alumni/hanifa nazira azwar-KEDOKTERAN-UNIVERSITAS BRAWIJAYA.png" },
                    { name: "M. Try Radjha Bintang", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/M. Try Radjha Bintang-Pendidikan Dokter-UNIVERSITAS HASANUDDIN.png" },
                    { name: "Nurul Mutmainna Munir", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Nurul Mutmainna Munir-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "Haidar Kholid Musyafa", university: "ITS", program: "Teknik Mesin", year: "2024", photo: "/images/alumni/Haidar Kholid Musyafa-teknik mesin-ITS.png" },
                    { name: "Geonardo Baso", university: "Universitas Hasanuddin", program: "Pendidikan Dokter", year: "2024", photo: "/images/alumni/Geonardo Baso_ P-Pendidikan Dokter-Universitas Hasanuddin.png" },
                    { name: "M. Riffat Al Fayyadh", university: "UPN Veteran Jawa Timur", program: "Manajemen", year: "2024", photo: "/images/alumni/riffat.png" },
                    { name: "FIRLI HIDAYANI P. U.", university: "Universitas Brawijaya", program: "Bio Informatika", year: "2024", photo: "/images/alumni/FIRLI HIDAYANI P. U.-bio informatika-Universitas Brawijaya.png" }
                  ].map((alumni, index) => (
                    <div key={index} className="flex-shrink-0 w-72">
                      <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-lg">
                              <Image 
                                src={alumni.photo}
                                alt={alumni.name}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                  if (e.target && e.target.parentElement) {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-2xl text-white">🎓</div>';
                                  }
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 text-sm mb-1 truncate">{alumni.name}</h4>
                            <p className="text-xs text-green-600 font-semibold mb-1 truncate">{alumni.university}</p>
                            <p className="text-xs text-gray-600 truncate">{alumni.program}</p>
                            {/* <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full mt-2">
                              Lulus {alumni.year}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Interactive Design */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header - Enhanced Responsive */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white shadow-lg rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <span className="text-gray-700">3 Program Utama</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 font-poppins leading-tight">
              <span className="text-gray-900">Temukan</span>
              <br />
              <span className="bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#fabe49] bg-clip-text text-transparent">
                Program Impianmu
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pilih jalur kesuksesanmu dengan program yang disesuaikan untuk setiap tujuan
            </p>
          </div>

          {/* Desktop: Grid Layout, Mobile: Carousel */}
          <div className="relative">
            {/* Mobile & Tablet Carousel */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd('hero')}
                >
                  {programs.map((program, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <div className="transform scale-95 sm:scale-100 transition-all duration-300 hover:scale-100">
                      <ProgramCard program={program} />
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>

              {/* Mobile Navigation - Enhanced */}
              <div className="flex justify-center items-center mt-8 gap-6">
                <button 
                  onClick={prevSlide}
                  className="bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#003049] hover:scale-110 group"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6 text-[#003049] group-hover:text-[#0c5681] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  {programs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-500 rounded-full ${
                        idx === currentSlide 
                          ? 'bg-gradient-to-r from-[#003049] to-[#0c5681] w-8 h-4 shadow-md' 
                          : 'bg-gray-300 hover:bg-gray-400 w-4 h-4 hover:scale-110'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#003049] hover:scale-110 group"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6 text-[#003049] group-hover:text-[#0c5681] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop & Large Tablet Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    opacity: 0,
                    animation: 'fadeInUp 0.8s ease-out forwards'
                  }}
                >
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA - Enhanced Responsive */}
          <div className="text-center mt-12 sm:mt-16 px-4">
            <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">Tidak yakin program mana yang cocok?</p>
            {/* DESAIN: Tombol sekunder (outline) dibuat konsisten dan responsif */}
            <Link href="/contact">
              <button className="bg-white border-2 border-[#003049] text-[#003049] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-[#003049]/5 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-[#0c5681] hover:text-[#0c5681] hover:scale-105">
                Konsultasi Gratis
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tutors Section - Schoters Style */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins text-gray-900">
                  Mentor & Tutor Terbaik Scover
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Belajar bersama mentor berpengalaman yang siap membimbing kesuksesan pendidikanmu
                </p>
              </div>
    
              {/* Tutors Carousel */}
              <div className="relative">
                <div className="tutors-carousel-container overflow-hidden">
                  <div id="tutors-carousel-wrapper" className="tutors-carousel-wrapper flex transition-transform duration-500 ease-in-out">
                  {[
                    {
                      name: "Diela",
                      displayName: "Kak Diela",
                      university: "B.Indonesia",
                      badge: "Study Abroad Academy",
                      achievements: [
                        "Lulusan UB Teknik Informatika",
                        "Berpengalaman mengajar 4+ tahun",
                        "Rata-rata kepuasan siswa: 4.9/5.0",
                        "Spesialis Study Abroad Preparation"
                      ],
                      color: "blue",
                      photo: "diela.png"
                    },
                    {
                      name: "Merlyn",
                      displayName: "Kak Merlyn",
                      university: "Psikologi",
                      badge: "Study Abroad Academy",
                      achievements: [
                        "Awardee Australia Awards Scholarship",
                        "Berpengalaman mentoring 3+ tahun",
                        "Rata-rata kepuasan student: 4.9/5.0",
                        "Spesialis Study Abroad Preparation"
                      ],
                      color: "orange",
                      photo: "merlyn.png"
                    },
                    {
                      name: "Budi",
                      displayName: "Kak Budi",
                      university: "B.Inggris",
                      badge: "English Master",
                      achievements: [
                        "Lulusan UI Fisika",
                        "Alumni beasiswa LPDP",
                        "Mentor Olimpiade Fisika",
                        "86% siswa lolos PTN impian"
                      ],
                      color: "green",
                      photo: "budi.png"
                    },
                    {
                      name: "Putri",
                      displayName: "Kak Putri",
                      university: "B.Inggris",
                      badge: "English Master",
                      achievements: [
                        "Lulusan ITB Teknik Informatika",
                        "Berpengalaman mengajar 5+ tahun",
                        "Rata-rata kepuasan siswa: 4.9/5.0",
                        "150+ siswa berhasil masuk PTN favorit"
                      ],
                      color: "blue",
                      photo: "putri.png"
                    },
                    {
                      name: "Agung",
                      displayName: "Kak Agung",
                      university: "Matematika",
                      badge: "Math Pro",
                      achievements: [
                        "Lulusan UNDIP Kimia",
                        "Juara 2 Olimpiade Kimia Nasional",
                        "Berpengalaman 4+ tahun",
                        "Spesialis UTBK Kimia"
                      ],
                      color: "orange",
                      photo: "agung.png"
                    },
                    {
                      name: "Shinta",
                      displayName: "Kak Shinta",
                      university: "Biologi",
                      badge: "Bio Genius",
                      achievements: [
                        "Lulusan UB Matematika",
                        "Alumni beasiswa Unggulan",
                        "Berpengalaman 5+ tahun",
                        "Spesialis UTBK Matematika"
                      ],
                      color: "green",
                      photo: "shinta.png"
                    },
                    {
                      name: "Rizky",
                      displayName: "Kak Rizky",
                      university: "Matematika",
                      badge: "Math Expert",
                      achievements: [
                        "Lulusan ITS Teknik Mesin",
                        "Berpengalaman 3+ tahun",
                        "Spesialis UTBK Fisika",
                        "90% siswa berhasil masuk PTN"
                      ],
                      color: "blue",
                      photo: "rizky.png"
                    },
                    {
                      name: "Maulidya",
                      displayName: "Kak Maulidya",
                      university: "Matematika",
                      badge: "Math Expert",
                      achievements: [
                        "Lulusan UNM Bahasa Inggris",
                        "TOEFL Score 650+",
                        "Berpengalaman 4+ tahun",
                        "Spesialis UTBK Bahasa Inggris"
                      ],
                      color: "orange",
                      photo: "maulidya.png"
                    },
                    {
                      name: "Dion",
                      displayName: "Kak Dion",
                      university: "Matematika",
                      badge: "Math Expert",
                      achievements: [
                        "Lulusan UNEJ Sejarah",
                        "Berpengalaman 5+ tahun",
                        "Spesialis UTBK Soshum",
                        "Penulis buku sejarah populer"
                      ],
                      color: "green",
                      photo: "dion.png"
                    },
                    {
                      name: "Reza",
                      displayName: "Kak Reza",
                      university: "TWK/PPKN",
                      badge: "TWK Master",
                      achievements: [
                        "Lulusan UNS Ekonomi",
                        "Berpengalaman 6+ tahun",
                        "Spesialis UTBK Ekonomi",
                        "Konsultan ekonomi mikro"
                      ],
                      color: "blue",
                      photo: "reza.png"
                    },
                    {
                      name: "Fariha",
                      displayName: "Kak Fariha",
                      university: "Geografi",
                      badge: "Geo Expert",
                      achievements: [
                        "Lulusan UNHAS Sosiologi",
                        "Berpengalaman 3+ tahun",
                        "Spesialis UTBK Sosiologi",
                        "Peneliti sosial budaya"
                      ],
                      color: "orange",
                      photo: "fariha.png"
                    },
                    {
                      name: "Haryo",
                      displayName: "Kak Haryo",
                      university: "B.Inggris",
                      badge: "English Master",
                      achievements: [
                        "Lulusan UNPAD Filsafat",
                        "Berpengalaman 5+ tahun",
                        "Spesialis UTBK Filsafat",
                        "Penulis artikel filsafat"
                      ],
                      color: "green",
                      photo: "haryo.png"
                    },
                    {
                      name: "Ifa",
                      displayName: "Kak Ifa",
                      university: "B.Indonesia",
                      badge: "Language Expert",
                      achievements: [
                        "Lulusan UNNES Psikologi",
                        "Berpengalaman 4+ tahun",
                        "Spesialis UTBK Psikologi",
                        "Konselor remaja"
                      ],
                      color: "blue",
                      photo: "ifa.png"
                    },
                    {
                      name: "Oka",
                      displayName: "Kak Oka",
                      university: "TWK/PPKN",
                      badge: "TWK Master",
                      achievements: [
                        "Lulusan UNESA Sastra Indonesia",
                        "Berpengalaman 6+ tahun",
                        "Spesialis UTBK Sastra",
                        "Penulis puisi dan cerpen"
                      ],
                      color: "orange",
                      photo: "oka.png"
                    },
                    {
                      name: "Wildan",
                      displayName: "Kak Wildan",
                      university: "Matematika",
                      badge: "Math Expert",
                      achievements: [
                        "Lulusan USU Statistika",
                        "Data Analyst di Perusahaan Multinasional",
                        "Spesialis Matematika & Statistika",
                        "Metode pembelajaran data-driven"
                      ],
                      color: "green",
                      photo: "wildan.png"
                    }
                  ].map((tutor, index) => {
                    const colorSchemes = {
                      blue: {
                        badge: "bg-gradient-to-r from-[#0c5681] to-[#003049] text-white",
                        bubble: "bg-gradient-to-br from-[#0c5681] to-[#003049]",
                        sparkle: "text-[#fabe49]",
                        bgGradient: "from-blue-50 to-white"
                      },
                      orange: {
                        badge: "bg-gradient-to-r from-[#fabe49] to-[#ffdc30] text-[#003049]",
                        bubble: "bg-gradient-to-br from-[#fabe49] to-[#ffdc30]",
                        sparkle: "text-[#0c5681]",
                        bgGradient: "from-orange-50 to-white"
                      },
                      green: {
                        badge: "bg-gradient-to-r from-green-400 to-green-600 text-white",
                        bubble: "bg-gradient-to-br from-green-400 to-green-600",
                        sparkle: "text-[#fabe49]",
                        bgGradient: "from-green-50 to-white"
                      }
                    };
                    const colors = colorSchemes[tutor.color];
                    
                    return (
                      <div 
                        key={index}
                        className="tutors-carousel-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                      >
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                          {/* Header with Photo and Bubbles - SCHOTERS EXACT STYLE */}
                          <div className={`relative bg-gradient-to-b ${colors.bgGradient} pt-12 pb-6 px-6 overflow-hidden min-h-[350px]`}>
                            {/* Decorative Bubbles - Large circles like Schoters */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                              {/* Main large bubble top left */}
                              <div className={`absolute -top-20 -left-20 w-64 h-64 ${colors.bubble} rounded-full opacity-40 blur-3xl`}></div>
                              {/* Secondary bubble top right */}
                              <div className={`absolute -top-10 -right-16 w-48 h-48 ${colors.bubble} rounded-full opacity-30 blur-2xl`}></div>
                              {/* Small bubble bottom */}
                              <div className={`absolute -bottom-10 left-1/3 w-40 h-40 ${colors.bubble} rounded-full opacity-25 blur-xl`}></div>
                            </div>
                            
                            {/* Sparkle Icons - Orange stars like Schoters */}
                            <div className={`absolute top-10 left-8 ${colors.sparkle} text-3xl animate-pulse`}>✦</div>
                            <div className={`absolute top-16 right-10 ${colors.sparkle} text-4xl animate-pulse delay-300`}>✦</div>
                            <div className={`absolute bottom-12 right-20 ${colors.sparkle} text-2xl animate-pulse delay-700`}>✦</div>
                            
                            {/* Profile Photo - ENHANCED CIRCULAR DESIGN */}
                            <div className="relative z-10 flex justify-center mb-6">
                              <div className="relative group">
                                {/* Outer glow ring */}
                                <div className="absolute inset-0 w-52 h-52 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                                
                                {/* Middle ring */}
                                <div className="absolute inset-2 w-48 h-48 rounded-full bg-white shadow-inner border-4 border-gradient-to-r from-blue-200 to-purple-200"></div>
                                
                                {/* Main photo container with enhanced effects */}
                                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl transform scale-110 group-hover:scale-115 transition-all duration-300">
                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10"></div>
                                  <img 
                                    src={`/images/tutors/${tutor.photo || tutor.name.toLowerCase().replace(/\s+/g, '-') + '.jpg'}`}
                                    alt={tutor.name}
                                    className="object-cover w-full h-full transform scale-90 group-hover:scale-95 transition-all duration-300"
                                    onError={(e) => {
                                      console.log('Image error for:', tutor.photo);
                                      if (e.target && e.target.parentElement) {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#0c5681] to-[#003049] flex items-center justify-center text-6xl text-white">👨‍🎓</div>`;
                                      }
                                    }}
                                  />
                                  
                                  {/* Overlay with name badge */}
                                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                    <div className="text-white text-center">
                                      <div className="text-sm font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                                        {tutor.displayName || tutor.name}
                                      </div>
                                </div>
                                  </div> */}
                                </div>
                                
                                {/* Floating elements around photo */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-bounce delay-100">⭐</div>
                                <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce delay-300">✓</div>
                                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
                                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-500"></div>
                              </div>
                            </div>
                            
                            {/* Badge */}
                            <div className="relative z-10 flex justify-center">
                              <div className={`${colors.badge} px-5 py-2 rounded-full text-sm font-bold shadow-lg`}>
                                {tutor.badge}
                              </div>
                            </div>
                          </div>
                          
                          {/* Content - White background section */}
                          <div className="px-6 pb-8 pt-4 bg-white">
                            {/* Name */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center font-poppins">
                              {tutor.displayName || tutor.name}
                            </h3>
                            
                            {/* University */}
                            <p className="text-sm text-gray-600 mb-6 text-center font-medium">
                              {tutor.university}
                            </p>
                            
                            {/* Achievements with green checkmarks */}
                            {/* <div className="space-y-3">
                              {tutor.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start">
                                  <div className="flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <p className="ml-3 text-sm text-gray-700 leading-relaxed">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  </div>
                </div>
                
                {/* Carousel Navigation */}
                <div className="flex justify-center items-center mt-12 space-x-4">
                  <button 
                    id="tutors-carousel-prev"
                    className="tutors-carousel-prev bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-[#003049]"
                  >
                    <svg className="w-6 h-6 text-[#003049] hover:text-[#0c5681] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div id="tutors-pagination" className="flex space-x-3 justify-center">
                    {/* Pagination dots will be generated by JS */}
                  </div>
                  
                  <button 
                    id="tutors-carousel-next"
                    className="tutors-carousel-next bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-[#003049]"
                  >
                    <svg className="w-6 h-6 text-[#003049] hover:text-[#0c5681] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
                  </button>
            </div>
              </div>
              
              {/* CTA to See All Tutors - Enhanced with Magnetic Effect */}
              {/* <div className="text-center mt-16">
                <Link href="/tutors">
                  <button className="relative group px-12 py-6 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-3xl font-bold text-lg shadow-2xl hover:shadow-[#003049]/40 transition-all duration-700 hover:scale-110 overflow-hidden cta-tutors-magnetic">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      <span>Lihat Semua Tutor</span>
                      <svg className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                
                  </button>
                </Link>
              </div> */}
            </div>
          </section>

      {/* Gallery Preview Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50 to-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-2xl">📸</span>
              <span className="font-semibold">Galeri Kami</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#1E40AF] to-[#F59E0B] bg-clip-text text-transparent">Momen</span> Berharga
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dokumentasi kegiatan, fasilitas, dan pencapaian di Scover 
            </p>
          </div>

          {/* Unique Gallery Grid - Mobile Optimized with Real Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[100px] sm:auto-rows-[120px] gap-3 sm:gap-4 mb-12">
            {/* Large Featured Image - Mobile: 2x2, Desktop: 2x2 */}
            <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/images/gallery/1.jpg" 
                alt="Kelas Pembelajaran Scover" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2">Kelas Pembelajaran Scover</h3>
                <span className="text-xs sm:text-sm font-semibold bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">Fasilitas</span>
              </div>
            </div>

            {/* Small Images - Mobile: 1x1 each, Desktop: 1x1 each */}
            <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/images/gallery/2.jpg" 
                alt="Sesi Belajar Intensif" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xs sm:text-sm font-bold leading-tight">Sesi Belajar Intensif</h3>
              </div>
            </div>

            <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/images/gallery/3.jpg" 
                alt="Kelas Diskusi Interaktif" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xs sm:text-sm font-bold leading-tight">Kelas Diskusi Interaktif</h3>
              </div>
            </div>

            {/* Medium Images - Mobile: 1x1 each, Desktop: 1x1 and 1x2 */}
            <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/images/gallery/4.JPG" 
                alt="Kehangatan Belajar" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xs sm:text-sm font-bold leading-tight">Kehangatan Belajar</h3>
              </div>
            </div>

            <div className="col-span-1 row-span-1 md:row-span-2 group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/images/gallery/5.jpg" 
                alt="Presentasi Siswa" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 leading-tight">Presentasi Siswa</h3>
                <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-1 sm:px-2 py-1 rounded-full">Kegiatan</span>
              </div>
            </div>

            {/* Wide Image - Mobile: 2x1, Desktop: 2x1 */}
            <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <Image 
                src="/images/gallery/6.jpg" 
                alt="Acara Tahunan" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-sm sm:text-lg font-bold mb-1">Acara Tahunan</h3>
                <span className="text-xs sm:text-sm font-semibold bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">Acara</span>
              </div>
            </div>
          </div>

          {/* Interactive CTA Button - Enhanced with Photo Gallery Effect */}
          <div className="text-center">
            <Link 
              href="/gallery" 
              className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-[#1E40AF]/40 transition-all duration-700 hover:scale-110 overflow-hidden cta-gallery-photo"
            >
              <span className="relative z-10 flex items-center gap-3 sm:gap-4">
                <span>Lihat Semua Galeri</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              {/* Multi-layer Background Animation */}
           
            
            </Link>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-gradient-to-br from-[#F59E0B]/10 to-[#F97316]/10 rounded-full blur-3xl"></div>
            </div>
          </section>

      {/* Partners Section - Infinite Carousel */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-full px-6 py-3 shadow-lg mb-6">
              <span className="text-2xl">🤝</span>
              <span className="font-semibold">Partner Terpercaya</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#003049] to-[#fabe49] bg-clip-text text-transparent">Mitra Kerjasama</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bekerja sama dengan institusi dan organisasi terpercaya untuk memberikan pendidikan terbaik
            </p>
          </div>
          
          {/* Infinite Carousel */}
          <div className="partners-carousel-container overflow-hidden">
            <div 
              className="partners-carousel-wrapper flex animate-scroll"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd('partners')}
            >
              {/* First set of partners */}
              {[
                { name: "SMA Ar-Rohmah", logo: "/images/partners/AR ROHMAH IIBS KAMPUS II.png", type: "Sekolah" },
                { name: "MA AL UMM", logo: "/images/partners/MA AL UMM.png", type: "Sekolah" },
                { name: "MAN 1 KOTA MALANG", logo: "/images/partners/MAN 1.png", type: "Sekolah" },
                { name: "SAMAN 1 TUMPANG", logo: "/images/partners/SAMAN 1 TUMPANG.png", type: "Sekolah" },
                { name: "SEKOLAH ALAM INSAN MULIA", logo: "/images/partners/SEKOLAH ALAM INSAN MULIA.png", type: "Sekolah" },
                { name: "SMA BAITUL MANSHURIN", logo: "/images/partners/SMA BAITUL MANSHURIN.png", type: "Sekolah" },
                { name: "SMA BSS MALANG", logo: "/images/partners/SMA BSS MALANG.png", type: "Sekolah" },
                { name: "SMA IIBS AL IZZAH", logo: "/images/partners/SMA IIBS AL IZZAH.png", type: "Sekolah" },
                { name: "SMA WIJAYA PUTRA", logo: "/images/partners/SMA WIJAYA PUTRA.png", type: "Sekolah" },
                { name: "SMAN 7 MALANG", logo: "/images/partners/SMAN 7 MALANG.png", type: "Sekolah" },
                { name: "SMK TELKOM MALANG", logo: "/images/partners/SMK TELKOM MALANG.png", type: "Sekolah" },
                { name: "Partner 1", logo: "/images/partners/PARTNER 1.png", type: "Mitra" },
                { name: "Partner 2", logo: "/images/partners/PARTNER 2.png", type: "Mitra" },
                { name: "Partner 3", logo: "/images/partners/PARTNER 3.png", type: "Mitra" },
                { name: "Partner 4", logo: "/images/partners/PARTNER 4.png", type: "Mitra" },
                { name: "Partner 5", logo: "/images/partners/PARTNER 5.png", type: "Mitra" },
                { name: "Partner 6", logo: "/images/partners/PARTNER 6.png", type: "Mitra" },
                { name: "Partner 7", logo: "/images/partners/PARTNER 7.png", type: "Mitra" },
                { name: "Partner 8", logo: "/images/partners/PARTNER 8.png", type: "Mitra" },
                { name: "Partner 9", logo: "/images/partners/PARTNER 9.png", type: "Mitra" },
                { name: "Partner 10", logo: "/images/partners/PARTNER 10.png", type: "Mitra" },
                { name: "Partner 11", logo: "/images/partners/PARTNER 11.png", type: "Mitra" },
                { name: "Partner 12", logo: "/images/partners/PARTNER 12.png", type: "Mitra" },
                { name: "Partner 13", logo: "/images/partners/PARTNER 13.png", type: "Mitra" },
                { name: "Partner 14", logo: "/images/partners/PARTNER 14.png", type: "Mitra" }
              ].map((partner, index) => (
                <div key={index} className="partners-carousel-slide flex-shrink-0 mx-4 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={partner.logo}
                      alt={partner.name}
                      width={64}
                      height={64}
                      className="object-contain"
                      onError={(e) => {
                        if (e.target && e.target.parentElement) {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="text-2xl">🏫</div>';
                        }
                      }}
                    />
                  </div>
                </div>
      ))}
              
              {/* Duplicate set for infinite effect */}
              {[
                { name: "SMA Ar-Rohmah", logo: "/images/partners/AR ROHMAH IIBS KAMPUS II.png", type: "Sekolah" },
                { name: "MA AL UMM", logo: "/images/partners/MA AL UMM.png", type: "Sekolah" },
                { name: "MAN 1 KOTA MALANG", logo: "/images/partners/MAN 1.png", type: "Sekolah" },
                { name: "SAMAN 1 TUMPANG", logo: "/images/partners/SAMAN 1 TUMPANG.png", type: "Sekolah" },
                { name: "SEKOLAH ALAM INSAN MULIA", logo: "/images/partners/SEKOLAH ALAM INSAN MULIA.png", type: "Sekolah" },
                { name: "SMA BAITUL MANSHURIN", logo: "/images/partners/SMA BAITUL MANSHURIN.png", type: "Sekolah" },
                { name: "SMA BBS MALANG", logo: "/images/partners/SMA BBS MALANG.png", type: "Sekolah" },
                { name: "SMA IIBS AL IZZAH", logo: "/images/partners/SMA IIBS AL IZZAH.png", type: "Sekolah" },
                { name: "SMA WIJAYA PUTRA", logo: "/images/partners/SMA WIJAYA PUTRA.png", type: "Sekolah" },
                { name: "SMAN 7 MALANG", logo: "/images/partners/SMAN 7 MALANG.png", type: "Sekolah" },
                { name: "SMK TELKOM MALANG", logo: "/images/partners/SMK TELKOM MALANG.png", type: "Sekolah" },
                { name: "Partner 1", logo: "/images/partners/PARTNER 1.png", type: "Mitra" },
                { name: "Partner 2", logo: "/images/partners/PARTNER 2.png", type: "Mitra" },
                { name: "Partner 3", logo: "/images/partners/PARTNER 3.png", type: "Mitra" },
                { name: "Partner 4", logo: "/images/partners/PARTNER 4.png", type: "Mitra" },
                { name: "Partner 5", logo: "/images/partners/PARTNER 5.png", type: "Mitra" },
                { name: "Partner 6", logo: "/images/partners/PARTNER 6.png", type: "Mitra" },
                { name: "Partner 7", logo: "/images/partners/PARTNER 7.png", type: "Mitra" },
                { name: "Partner 8", logo: "/images/partners/PARTNER 8.png", type: "Mitra" },
                { name: "Partner 9", logo: "/images/partners/PARTNER 9.png", type: "Mitra" },
                { name: "Partner 10", logo: "/images/partners/PARTNER 10.png", type: "Mitra" },
                { name: "Partner 11", logo: "/images/partners/PARTNER 11.png", type: "Mitra" },
                { name: "Partner 12", logo: "/images/partners/PARTNER 12.png", type: "Mitra" },
                { name: "Partner 13", logo: "/images/partners/PARTNER 13.png", type: "Mitra" },
                { name: "Partner 14", logo: "/images/partners/PARTNER 14.png", type: "Mitra" }
              ].map((partner, index) => (
                <div key={`duplicate-${index}`} className="partners-carousel-slide flex-shrink-0 mx-4 flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={partner.logo}
                      alt={partner.name}
                      width={64}
                      height={64}
                      className="object-contain"
                      onError={(e) => {
                        if (e.target && e.target.parentElement) {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="text-2xl">🏫</div>';
                        }
                      }}
                    />
                  </div>
                </div>
      ))}
            </div>
    </div>
  </div>
</section>

      {/* CTA Section - Soft Glassmorphism Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-accent/10 py-20">
        {/* Soft Background Elements */}
        <div className="absolute inset-0">
          {/* Soft Geometric Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#1E40AF]/20 rotate-45 animate-spin-slow"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-[#F59E0B]/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-40 w-40 h-40 border-4 border-[#10B981]/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-[#1E40AF]/20 to-[#3B82F6]/20 transform rotate-12 animate-float-slow"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#8B5CF6]/20 transform rotate-45 animate-bounce delay-500"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#EC4899]/20 rounded-full animate-pulse delay-700"></div>
          </div>
          
          {/* Soft Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Soft Floating Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#1E40AF]/10 rounded-full animate-float-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-[#F59E0B]/10 rounded-full animate-float-medium"></div>
            <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#10B981]/10 rounded-full animate-float-fast"></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#8B5CF6]/10 rounded-full animate-float-slow delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Main Content - Glassmorphism Style */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glassmorphism rounded-full px-6 py-3 mb-8 shadow-lg">
              <span className="text-2xl animate-bounce">🚀</span>
              <span className="font-semibold bg-gradient-to-r from-[#003049] to-[#0c5681] bg-clip-text text-transparent">Mari Bergabung</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-poppins">
              <span className="text-gray-900">Siap Raih</span>
              <br />
              <span className="bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#fabe49] bg-clip-text text-transparent">Impian Pendidikan?</span>
              </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan ribuan siswa yang telah meraih kesuksesan bersama Scover. 
              Mari bersama-sama menciptakan dampak positif bagi masa depan pendidikan.
            </p>
          </div>

          {/* Action Cards - Exact Match with Reference Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Primary CTA - Daftar Sekarang */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Illustration Container */}
              <div className="mb-6 relative">
                <div className="w-full h-48 flex items-center justify-center relative">
                  <Image 
                    src="/images/logo/daftar.png" 
                    alt="Daftar Sekarang" 
                    width={200} 
                    height={200} 
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center font-poppins">
                Daftar Sekarang
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base mb-6 text-center leading-relaxed">
                Pilih program yang sesuai dengan kebutuhanmu dan mulai belajar hari ini
              </p>
              
              {/* CTA Button */}
              <Link href="/registration">
                <button className="w-full bg-gradient-to-r from-[#003049] to-[#0c5681] text-white py-4 px-6 rounded-xl font-bold text-base hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Daftar Sekarang</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Secondary CTA - Konsultasi Gratis */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Illustration Container */}
              <div className="mb-6 relative">
                <div className="w-full h-48 flex items-center justify-center relative">
                  <Image 
                    src="/images/logo/konsultasi.png" 
                    alt="Konsultasi Gratis" 
                    width={200} 
                    height={200} 
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center font-poppins">
                Konsultasi Gratis
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base mb-6 text-center leading-relaxed">
                Butuh bantuan memilih program? Tim kami siap membantu kamu menemukan solusi terbaik
              </p>
              
              {/* CTA Button */}
              <Link href="/contact">
                <button className="w-full bg-gradient-to-r from-[#fabe49] to-[#ffdc30] text-[#003049] py-4 px-6 rounded-xl font-bold text-base hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Hubungi Kami</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Global styles */}
      <style jsx global>{`
        /* Scover Brand Colors */
        :root {
          --scover-yellow: #ffdc30;
          --scover-yellow-secondary: #fabe49;
          --scover-blue: #003049;
          --scover-blue-secondary: #0c5681;
          --primary: #003049;
          --secondary: #0c5681;
          --accent: #fabe49;
          --highlight: #ffdc30;
        }
        
        .text-primary { color: var(--primary); }
        .text-accent { color: var(--accent); }
        .text-highlight { color: var(--highlight); }
        .bg-primary { background-color: var(--primary); }
        .bg-accent { background-color: var(--accent); }
        .bg-highlight { background-color: var(--highlight); }
        .from-primary { --tw-gradient-from: var(--primary); }
        .to-accent { --tw-gradient-to: var(--accent); }
        .from-accent { --tw-gradient-from: var(--accent); }
        .to-highlight { --tw-gradient-to: var(--highlight); }
        .from-highlight { --tw-gradient-from: var(--highlight); }
        .border-primary { border-color: var(--primary); }
        
        /* Scover Brand Utilities */
        .bg-scover-yellow { background-color: #ffdc30; }
        .bg-scover-yellow-secondary { background-color: #fabe49; }
        .bg-scover-blue { background-color: #003049; }
        .bg-scover-blue-secondary { background-color: #0c5681; }
        .text-scover-yellow { color: #ffdc30; }
        .text-scover-yellow-secondary { color: #fabe49; }
        .text-scover-blue { color: #003049; }
        .text-scover-blue-secondary { color: #0c5681; }
        .border-scover-yellow { border-color: #ffdc30; }
        .border-scover-blue { border-color: #003049; }
        
        /* Glassmorphism Effect */
        .glassmorphism {
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Alumni Carousel Animations - Zig Zag Effect */
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-right-slow {
          animation: scroll-right 80s linear infinite;
        }
        
        .alumni-carousel-container:hover .animate-scroll-right,
        .alumni-carousel-container:hover .animate-scroll-left,
        .alumni-carousel-container:hover .animate-scroll-right-slow {
          animation-play-state: paused;
        }
        
        /* Etaloka Animations */
        @keyframes slide-down {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-scale-in { animation: scale-in 0.6s ease-out; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        
        /* Particle Animation */
        .particle {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        /* Button 3D Effect */
        .btn-3d {
          box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.2);
        }
        
        /* Carousel Animations */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        
        .partners-carousel-container:hover .animate-scroll {
          animation-play-state: paused;
        }
        
        /* Tutors Carousel */
        .tutors-carousel-container {
          position: relative;
        }
        
        .tutors-carousel-wrapper {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        
        .tutors-carousel-slide {
          flex-shrink: 0;
        }
        
        /* Partners Carousel */
        .partners-carousel-container {
          position: relative;
        }
        
        .partners-carousel-wrapper {
          display: flex;
          width: 200%;
        }
        
        .partners-carousel-slide {
          flex-shrink: 0;
        }
        
        /* DESAIN: Menghapus @keyframes 'bounce', 'glow', 'pulse', 'gradient' yang tidak perlu */
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(5px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes heroFadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        /* DESAIN: Menghapus .animate-bounce (kecuali yang digunakan oleh scroll indicator) */
        @keyframes bounce-scroll {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-15px) translateX(-50%); }
          60% { transform: translateY(-7px) translateX(-50%); }
        }
        .animate-bounce {
          animation: bounce-scroll 2s infinite;
        }
        .animate-scroll-pulse {
          animation: scrollPulse 2s infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite 2s;
        }
        .animate-hero-fade-in {
          animation: heroFadeIn 1.2s cubic-bezier(0.33,1,0.68,1) both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out both;
        }
        /* DESAIN: Menghapus .animate-pulse, .animate-glow, .animate-gradient */

        /* Enhanced CTA Button Animations */
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
        
        @keyframes pulse-ring-slow {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.8);
            opacity: 0;
          }
        }
        
        @keyframes float-particle-1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-5px) translateX(-3px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.7;
          }
        }
        
        @keyframes float-particle-2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          33% {
            transform: translateY(-8px) translateX(-4px);
            opacity: 0.7;
          }
          66% {
            transform: translateY(-12px) translateX(6px);
            opacity: 0.5;
          }
        }
        
        @keyframes float-particle-3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-6px) translateX(3px);
            opacity: 0.8;
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        
        .animate-pulse-ring-slow {
          animation: pulse-ring-slow 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        
        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }
        
        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite;
        }
        
        .animate-float-particle-3 {
          animation: float-particle-3 3.5s ease-in-out infinite;
        }
        
        /* Magnetic Hover Effect */
        .cta-primary-3d:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 48, 73, 0.3);
        }
        
        .cta-secondary-glass:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 48, 73, 0.2);
        }
        
        .cta-program-3d:hover {
          transform: translateY(-4px) scale(1.08);
        }
        
        .cta-tutors-magnetic:hover {
          transform: translateY(-10px) scale(1.12);
          box-shadow: 0 30px 60px rgba(0, 48, 73, 0.4);
        }
        
        .cta-gallery-photo:hover {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 25px 50px rgba(30, 64, 175, 0.3);
        }
        
        .cta-main-daftar:hover {
          transform: translateY(-12px) scale(1.15);
          box-shadow: 0 35px 70px rgba(0, 48, 73, 0.3);
        }
        
        .cta-main-konsultasi:hover {
          transform: translateY(-12px) scale(1.15);
          box-shadow: 0 35px 70px rgba(250, 190, 73, 0.3);
        }
        
        /* Enhanced Button Transitions */
        .cta-main-btn {
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .cta-main-btn:hover {
          transform: translateY(-3px) scale(1.05);
        }
        
        /* Magnetic Cursor Effect */
        .cta-primary-3d,
        .cta-secondary-glass,
        .cta-program-3d,
        .cta-tutors-magnetic,
        .cta-gallery-photo,
        .cta-main-daftar,
        .cta-main-konsultasi {
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Glow Effect on Hover */
        .cta-primary-3d:hover,
        .cta-tutors-magnetic:hover,
        .cta-main-daftar:hover {
          filter: drop-shadow(0 0 20px rgba(0, 48, 73, 0.4));
        }
        
        .cta-secondary-glass:hover,
        .cta-main-konsultasi:hover {
          filter: drop-shadow(0 0 20px rgba(250, 190, 73, 0.4));
        }
        
        .cta-gallery-photo:hover {
          filter: drop-shadow(0 0 20px rgba(30, 64, 175, 0.4));
        }
        
        /* Enhanced Glassmorphism */
        .glassmorphism {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .glassmorphism:hover {
          background: rgba(255, 255, 255, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        /* Scrollbar Hide */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        /* DESAIN: Scrollbar disesuaikan dengan palet warna baru */
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1E40AF, #3B82F6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1E3A8A, #2563EB);
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
          /* DESAIN: Penyesuaian font responsif dibuat lebih sederhana */
          .text-6xl { font-size: 2.5rem; }
          .text-5xl { font-size: 2rem; }
          .text-4xl { font-size: 1.75rem; }
          
          /* Mobile CTA Button Optimizations */
          .cta-primary-3d:hover,
          .cta-secondary-glass:hover,
          .cta-program-3d:hover,
          .cta-tutors-magnetic:hover,
          .cta-gallery-photo:hover,
          .cta-main-daftar:hover,
          .cta-main-konsultasi:hover {
            transform: translateY(-4px) scale(1.02);
          }
          
          /* Reduce animation intensity on mobile */
          .animate-pulse-ring,
          .animate-pulse-ring-slow {
            animation-duration: 3s;
          }
          
          .animate-float-particle-1,
          .animate-float-particle-2,
          .animate-float-particle-3 {
            animation-duration: 6s;
          }
          
          /* Touch-friendly button sizes */
          .cta-main-btn {
            min-height: 48px;
            padding: 12px 16px;
          }
        }

        /* Glass morphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
    </>
  );
}

function ProgramCard({ program }) {
  return (
    <div className="group relative">
      {/* Popular Badge */}
      {program.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-[#fabe49] to-[#ffdc30] text-[#003049] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold shadow-lg">
            ⭐ Paling Populer
          </div>
        </div>
      )}

      <div className={`relative bg-white rounded-3xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
        program.popular ? 'border-[#fabe49] shadow-[#fabe49]/20' : 'border-gray-200 hover:border-[#003049]/30'
      } hover:scale-[1.02] hover:-translate-y-2`}>
        
        {/* Header dengan layout profesional dan warna biru gelap konsisten */}
        <div className="relative bg-gradient-to-br from-[#003049] to-[#0c5681] h-36 sm:h-40 md:h-44 lg:h-48 overflow-visible">
          {/* Image Container - Enhanced Responsive */}
          <div className="absolute left-0 sm:-left-1 md:-left-2 -top-1 sm:-top-2 md:-top-3 lg:-top-4 bottom-0 w-2/5 z-20 flex items-end justify-center">
            <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-end justify-center overflow-visible">
              <img 
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover object-center sm:object-bottom"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
          
          {/* Content - Right Side dengan layout responsif enhanced */}
          <div className="absolute right-0 top-0 bottom-0 w-3/5 p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col justify-center">
            <div className="relative z-10">
              {/* Badge kuning di pojok kanan atas */}
              <div className="flex items-start justify-end mb-1 sm:mb-1.5 md:mb-2 lg:mb-3">
                <div className="bg-[#fabe49] text-[#003049] px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-lg font-bold shadow-md">
                  <span className="text-xs sm:text-sm">{program.stats[0].value}</span>
                </div>
              </div>
              
              {/* Title dengan responsive typography */}
              <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-1.5 md:mb-2 leading-tight text-right">
                {program.title}
              </h3>
              
              {/* Subtitle dengan responsive typography */}
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium text-right leading-relaxed">{program.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content - Background putih bersih dengan shadow subtle */}
        <div className="bg-white p-3 sm:p-4 md:p-5 lg:p-6">
          <p className="text-gray-700 mb-3 sm:mb-4 md:mb-5 leading-relaxed text-xs sm:text-sm md:text-base">
            {program.description}
          </p>

          {/* Stats dengan desain yang lebih profesional dan responsif */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
            {program.stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#003049] mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#0c5681] font-semibold leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features List dengan desain yang lebih profesional dan responsif */}
          <div className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-5 md:mb-6">
            {program.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 border border-green-200 hover:shadow-sm transition-all duration-300">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0 shadow-sm">
                  <svg className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-gray-800 font-semibold leading-tight">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button dengan warna biru gelap konsisten dan responsif */}
          <Link href="/programs">
            <button className="w-full bg-gradient-to-r from-[#003049] to-[#0c5681] text-white py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn">
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <span>Lihat Detail Program</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>

        {/* Bottom Accent Line dengan warna biru gelap konsisten */}
        <div className="h-1 sm:h-1.5 bg-gradient-to-r from-[#003049] to-[#0c5681]"></div>
      </div>
    </div>
  );
}