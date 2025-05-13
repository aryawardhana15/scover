'use client';

import Image from 'next/image';

const events = [
  {
    year: 2024,
    title: 'Festival Budaya Jawa Timur',
    description: 'Pertunjukan seni dan budaya terbesar di Jawa Timur, menampilkan berbagai kesenian tradisional dan kontemporer.',
    image: '/images/timeline-1.jpg',
    date: '15-20 Maret 2024',
  },
  {
    year: 2024,
    title: 'Workshop Batik Tulis',
    description: 'Pelatihan teknik membatik tradisional dengan para maestro batik Jawa Timur.',
    image: '/images/timeline-2.jpg',
    date: '5-7 April 2024',
  },
  {
    year: 2024,
    title: 'Pertunjukan Wayang Kulit',
    description: 'Pertunjukan wayang kulit dengan dalang muda berbakat dari Jawa Timur.',
    image: '/images/timeline-3.jpg',
    date: '20 April 2024',
  },
  {
    year: 2024,
    title: 'Pameran Seni Rupa',
    description: "Pameran karya seni rupa kontemporer dengan tema 'Warisan Budaya'.",
    image: '/images/timeline- sounded4.jpg',
    date: '1-15 Mei 2024',
  },
];

export default function TimelineClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4E1B9] to-[#4A2C2A]/10 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:300px] animate-pattern-scroll"></div>
      </div>

      {/* Floating ornaments with glow */}
      <div className="absolute top-10 left-12 w-24 h-24 opacity-30 animate-float-glow">
        <Image src="/images/javanese-ornament-1.png" alt="" width={96} height={96} className="animate-glow" />
      </div>
      <div className="absolute bottom-20 right-16 w-32 h-32 opacity-30 animate-float-glow-delayed">
        <Image src="/images/javanese-ornament-2.png" alt="" width={128} height={128} className="animate-glow" />
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden animate-hero">
        <Image
          src="/images/timeline-hero.jpg"
          alt="Timeline"
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-[#1C2526]/50 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-playfair font-extrabold text-[#D4A017] text-center animate-glow-text">
            Timeline Kegiatan
          </h1>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-24 relative animate-container delay-200">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4A017]/30"></div>

        {/* Events */}
        <div className="space-y-20">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } animate-fade-slide delay-${index * 200 + 400}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#D4A017] border-4 border-[#F4E1B9] animate-glow"></div>

              {/* Event Content */}
              <div
                className={`w-1/2 ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}
              >
                <div className="bg-[#F4E1B9] rounded-2xl p-8 shadow-2xl border border-[#D4A017]/20 hover:shadow-[0_8px_30px_rgba(212,160,23,0.3)] transition-all duration-500">
                  <div className="relative h-56 mb-6 rounded-xl overflow-hidden animate-image">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/30 to-transparent"></div>
                  </div>
                  <div className="text-[#D4A017] font-lora font-medium mb-3 animate-fade">
                    {event.date}
                  </div>
                  <h3 className="text-3xl font-playfair font-semibold text-[#4A2C2A] mb-3 animate-fade delay-100">
                    {event.title}
                  </h3>
                  <p className="text-[#1C2526] font-lora text-lg leading-relaxed animate-fade delay-200">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center animate-fade-slide delay-1000">
          <h2 className="text-4xl font-playfair font-extrabold text-[#D4A017] mb-6 animate-glow-text">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-xl font-lora text-[#1C2526] max-w-3xl mx-auto mb-10 animate-fade delay-200">
            Jadilah bagian dari perjalanan kami dalam melestarikan dan mengembangkan budaya Jawa Timur. Bersama, kita bisa membuat perbedaan.
          </p>
          <button className="relative bg-[#F28C38] text-[#1C2526] px-10 py-4 rounded-full font-lora font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden animate-fade delay-400">
            <span className="relative z-10">Daftar Sekarang</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Animation keyframes */
        @keyframes patternScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 300px 300px;
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
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroReveal {
          0% {
            opacity: 0;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
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
            transform: translateY(-15px);
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

        /* Animation classes */
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
        .animate-hero {
          animation: heroReveal 1.5s cubic-bezier(0.33, 1, 0.68, 1) both;
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
        .animate-fade {
          animation: fade 0.8s ease-out both;
        }

        /* Delay classes */
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
        .delay-1000 {
          animation-delay: 1s;
        }

        /* Typography */
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-lora {
          font-family: 'Lora', serif;
        }
      `}</style>
    </div>
  );
}