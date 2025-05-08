'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState('visi');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1C2526] to-[#4A2C2A]/10 min-h-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:300px] animate-pattern-scroll"></div>
      </div>

      {/* Floating traditional elements */}
      <div className="animate-float-slow absolute top-20 left-10 w-24 h-24 opacity-25">
        <Image src="/images/javanese-ornament-1.png" alt="" width={96} height={96} />
      </div>
      <div className="animate-float-fast absolute bottom-40 right-16 w-32 h-32 opacity-25">
        <Image src="/images/javanese-ornament-2.png" alt="" width={128} height={128} />
      </div>

      <div className="relative py-28 px-4 md:px-16 max-w-7xl mx-auto">
        {/* Animated title */}
        <div className={`transition-all duration-1000 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 text-[#D4A017] animate-fade-in">
              Tentang Kami
            </h1>
            <div className="w-24 h-1 bg-[#F28C38] mx-auto animate-scale-x" />
          </div>
        </div>

        {/* Interactive tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-[#1C2526] shadow-lg p-1 border border-[#D4A017]/20">
            <button
              onClick={() => setActiveTab('visi')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'visi'
                  ? 'bg-[#D4A017] text-[#1C2526]'
                  : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
              }`}
            >
              Visi
            </button>
            <button
              onClick={() => setActiveTab('misi')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'misi'
                  ? 'bg-[#D4A017] text-[#1C2526]'
                  : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
              }`}
            >
              Misi
            </button>
            <button
              onClick={() => setActiveTab('sejarah')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'sejarah'
                  ? 'bg-[#D4A017] text-[#1C2526]'
                  : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
              }`}
            >
              Sejarah
            </button>
          </div>
        </div>

        {/* Content with parallax effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image section */}
          <div
            className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${
              scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Image
              src="/images/javanese-culture.jpg"
              alt="Budaya Jawa Timur"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#F4E1B9]">
              <p className="font-lora italic text-xl">"Melestarikan Keindahan Budaya Jawa Timur"</p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {activeTab === 'visi' && (
              <div
                className={`bg-[#F4E1B9] p-8 rounded-xl shadow-lg border border-[#D4A017]/20 transition-all duration-700 delay-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#4A2C2A] flex items-center">
                  <span className="mr-3">🌄</span> Visi Kami
                </h2>
                <p className="text-lg font-lora leading-relaxed text-[#1C2526]">
                  Menjadi pelopor dalam pelestarian dan promosi budaya Jawa Timur yang kaya dan beragam, dengan sentuhan keanggunan dan inovasi yang membawa warisan budaya ke era modern tanpa kehilangan esensinya.
                </p>
              </div>
            )}

            {activeTab === 'misi' && (
              <div
                className={`bg-[#F4E1B9] p-8 rounded-xl shadow-lg border border-[#D4A017]/20 transition-all duration-700 delay-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#4A2C2A] flex items-center">
                  <span className="mr-3">🎯</span> Misi Kami
                </h2>
                <ul className="space-y-4 text-lg font-lora text-[#1C2526]">
                  <li className="flex items-start">
                    <span className="bg-[#F28C38]/20 text-[#4A2C2A] rounded-full p-2 mr-3">1</span>
                    Meningkatkan kesadaran masyarakat terhadap kekayaan budaya Jawa Timur melalui program edukasi dan publikasi.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#F28C38]/20 text-[#4A2C2A] rounded-full p-2 mr-3">2</span>
                    Mendukung generasi muda dalam mengenal, mencintai, dan melestarikan tradisi melalui kegiatan kreatif.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#F28C38]/20 text-[#4A2C2A] rounded-full p-2 mr-3">3</span>
                    Mengadakan kegiatan budaya yang inovatif, inklusif, dan relevan dengan perkembangan zaman.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'sejarah' && (
              <div
                className={`bg-[#F4E1B9] p-8 rounded-xl shadow-lg border border-[#D4A017]/20 transition-all duration-700 delay-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#4A2C2A] flex items-center">
                  <span className="mr-3">📜</span> Sejarah Kami
                </h2>
                <p className="text-lg font-lora leading-relaxed text-[#1C2526]">
                  Berdiri sejak 2010, kami memulai perjalanan dengan sekelompok pecinta budaya Jawa Timur yang peduli terhadap pelestarian warisan leluhur. Dari acara kecil di komunitas lokal, kini kami telah berkembang menjadi organisasi budaya dengan jaringan nasional, menginspirasi ribuan individu untuk turut melestarikan budaya.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-24 text-center transition-all duration-700 delay-500 ${
            scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-playfair font-bold mb-6 text-[#D4A017]">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl font-lora text-[#F4E1B9] max-w-3xl mx-auto mb-12">
            Jadilah bagian dari perjalanan kami untuk melestarikan dan mempromosikan budaya Jawa Timur dengan cara yang elegan dan inovatif.
          </p>
          <button
            className="relative bg-[#F28C38] text-[#1C2526] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden"
          >
            <span className="relative z-10">Pelajari Cara Bergabung</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes patternScroll {
          0% { background-position: 0 0; }
          100% { background-position: 300px 300px; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-scale-x {
          animation: scaleX 0.8s ease-out forwards;
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: floatFast 10s ease-in-out infinite 2s;
        }
        .animate-pattern-scroll {
          animation: patternScroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
}