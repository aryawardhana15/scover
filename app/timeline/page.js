'use client';

import Image from 'next/image';

const events = [
  {
    year: 2025,
    title: 'Pendaftaran Online',
    description: 'Pendaftaran peserta Duta Budaya Jawa Timur melalui platform online resmi. Peserta diharuskan mengisi formulir dan mengunggah dokumen pendukung.',
    image: '/images/registration-1.jpg',
    date: '1-15 Januari 2025',
  },
  {
    year: 2025,
    title: 'Seleksi Wawancara',
    description: 'Tahap seleksi wawancara untuk menilai pengetahuan budaya, kepribadian, dan komitmen peserta terhadap pelestarian budaya Jawa Timur.',
    image: '/images/registration-2.jpg',
    date: '20-25 Januari 2025',
  },
  {
    year: 2025,
    title: 'Pelatihan Budaya',
    description: 'Pelatihan intensif tentang budaya Jawa Timur, termasuk seni tari, batik, dan etika keraton, untuk mempersiapkan finalis.',
    image: '/images/registration-3.jpg',
    date: '1-10 Februari 2025',
  },
  {
    year: 2025,
    title: 'Grand Final',
    description: 'Acara puncak pemilihan Duta Budaya Jawa Timur dengan penampilan budaya dan pengumuman pemenang Narapati & Kencana.',
    image: '/images/registration-4.jpg',
    date: '15 Februari 2025',
  },
];

export default function TimelineClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C2526] to-[#4A2C2A]/20 relative overflow-hidden">
      {/* Pola latar dekoratif */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:200px] sm:bg-[length:300px] animate-pattern-scroll"></div>
      </div>

      {/* Ornamen mengambang dengan efek glow */}
      <div className="absolute top-10 left-4 sm:left-10 w-20 h-20 sm:w-28 sm:h-28 opacity-30 animate-float-glow animate-fade">
        <Image src="/images/javanese-ornament-1.png" alt="" width={112} height={112} className="animate-glow" />
      </div>
      <div className="absolute bottom-10 right-4 sm:bottom-40 sm:right-16 w-24 h-24 sm:w-36 sm:h-36 opacity-30 animate-float-glow-delayed animate-fade delay-200">
        <Image src="/images/javanese-ornament-2.png" alt="" width={144} height={144} className="animate-glow" />
      </div>

      {/* Bagian Hero */}
      <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden animate-container">
        <Image
          src="/images/timeline-hero.jpg"
          alt="Timeline Pendaftaran"
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-[#1C2526]/60 flex items-center justify-center animate-fade-slide">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-playfair font-extrabold text-[#D4A017] text-center animate-glow-text px-4">
            Timeline Pendaftaran
          </h1>
        </div>
      </div>

      {/* Bagian Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 relative animate-container delay-200">
        {/* Garis Timeline (hanya di desktop) */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4A017]/30 animate-scale-x"></div>

        {/* Event */}
        <div className="space-y-12 sm:space-y-20">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row lg:items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } animate-fade-slide delay-${index * 200 + 400}`}
            >
              {/* Titik Timeline (hanya di desktop) */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#D4A017] border-4 border-[#F4E1B9] animate-glow"></div>

              {/* Konten Event */}
              <div className="w-full lg:w-1/2 lg:pr-10 lg:pl-10">
                <div className="bg-[#F4E1B9] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#D4A017]/20 hover:shadow-[0_8px_30px_rgba(212,160,23,0.3)] transition-all duration-500">
                  <div className="relative h-48 sm:h-56 mb-6 rounded-xl overflow-hidden animate-image">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/40 to-transparent"></div>
                  </div>
                  <div className="text-[#D4A017] font-lora font-medium mb-3 animate-fade text-sm sm:text-base">
                    {event.date}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-[#4A2C2A] mb-3 animate-fade delay-100">
                    {event.title}
                  </h3>
                  <p className="text-[#1C2526] font-lora text-base sm:text-lg leading-relaxed animate-fade delay-200">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bagian CTA */}
        <div className="mt-12 sm:mt-24 text-center animate-fade-slide delay-800">
          <h2 className="text-3xl sm:text-4xl font-playfair font-extrabold text-[#D4A017] mb-6 animate-glow-text">
            Daftar Sekarang!
          </h2>
          <p className="text-base sm:text-xl font-lora text-[#F4E1B9] max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade delay-200">
            Ambil kesempatan menjadi Duta Budaya Jawa Timur dan wujudkan kontribusi nyata untuk pelestarian warisan budaya kita.
          </p>
          <button className="relative bg-[#F28C38] text-[#1C2526] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-lora font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden animate-fade delay-400">
            <span className="relative z-10">Daftar Sekarang</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Keyframe animasi */
        @keyframes patternScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200px 200px;
          }
        }
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(212, 160, 23, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(212, 160, 23, 0.7));
          }
        }
        @keyframes glowText {
          0%, 100% {
            text-shadow: 0 0 10px rgba(212, 160, 23, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(212, 160, 23, 0.8);
          }
        }
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleX {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        @keyframes imageReveal {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes floatGlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Kelas animasi */
        .animate-pattern-scroll {
          animation: patternScroll 60s linear infinite;
        }
        .animate-glow {
          animation: glow 6s ease-in-out infinite;
        }
        .animate-glow-text {
          animation: glowText 4s ease-in-out infinite;
        }
        .animate-float-glow {
          animation: floatGlow 8s ease-in-out infinite, glow 6s ease-in-out infinite;
        }
        .animate-float-glow-delayed {
          animation: floatGlow 8s ease-in-out infinite 2s, glow 6s ease-in-out infinite 2s;
        }
        .animate-container {
          animation: fadeSlide 1.2s cubic-bezier(0.33, 1, 0.68, 1) both;
        }
        .animate-fade-slide {
          animation: fadeSlide 0.8s cubic-bezier(0.33, 1, 0.68, 1) both;
        }
        .animate-image {
          animation: imageReveal 1s cubic-bezier(0.33, 1, 0.68, 1) both;
        }
        .animate-scale-x {
          animation: scaleX 1s ease-out both;
        }
        .animate-fade {
          animation: fade 0.8s ease-out both;
        }

        /* Kelas delay */
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }

        /* Tipografi */
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-lora {
          font-family: 'Lora', serif;
        }

        /* Responsif */
        @media (max-width: 640px) {
          .w-1/2 {
            width: 100%;
          }
          .lg\\:pr-10, .lg\\:pl-10 {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </div>
  );
}