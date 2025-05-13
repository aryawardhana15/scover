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
              Filosofi
            </button>
            <button
              onClick={() => setActiveTab('misi')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'misi'
                  ? 'bg-[#D4A017] text-[#1C2526]'
                  : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
              }`}
            >
              Makna
            </button>
            <button
              onClick={() => setActiveTab('sejarah')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'sejarah'
                  ? 'bg-[#D4A017] text-[#1C2526]'
                  : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
              }`}
            >
              Program
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
              src={
                activeTab === 'sejarah' 
                  ? "/images/duta-budaya.jpg" 
                  : "/images/javanese-culture.jpg"
              }
              alt={
                activeTab === 'sejarah' 
                  ? "Duta Budaya Jawa Timur" 
                  : "Budaya Jawa Timur"
              }
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#F4E1B9]">
              <p className="font-lora italic text-xl">
                {activeTab === 'sejarah' 
                  ? '"Menjadi Wajah Budaya Jawa Timur yang Berwibawa"' 
                  : '"Melestarikan Keindahan Budaya Jawa Timur"'}
              </p>
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
                  <span className="mr-3">👑</span> Narapati
                </h2>
                <div className="text-lg font-lora leading-relaxed text-[#1C2526] space-y-4">
                  <p>
                    <strong>Narapati</strong> berasal dari bahasa Sanskerta, gabungan <em>nara</em> (manusia) dan <em>pati</em> (pemimpin), yang berarti "penguasa manusia" atau "raja."
                  </p>
                  <p>
                    Dalam sejarah Jawa Timur, istilah ini digunakan untuk menyebut raja yang memimpin dengan kewibawaan, kebijaksanaan, dan perlindungan. Figur Narapati juga muncul dalam serat, babad, hingga wayang sebagai simbol pemimpin yang menjaga harmoni alam dan masyarakat.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'misi' && (
              <div
                className={`bg-[#F4E1B9] p-8 rounded-xl shadow-lg border border-[#D4A017]/20 transition-all duration-700 delay-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#4A2C2A] flex items-center">
                  <span className="mr-3">🌟</span> Kencana
                </h2>
                <div className="text-lg font-lora leading-relaxed text-[#1C2526] space-y-4">
                  <p>
                    <strong>Kencono</strong> dalam bahasa Jawa berarti "emas," melambangkan keagungan, kemuliaan, dan kejayaan.
                  </p>
                  <p>
                    Dalam budaya kerajaan Jawa Timur, emas menjadi simbol kekuasaan ilahi—terwujud dalam singgasana, keris, hingga pakaian kebesaran raja. Warna kencono juga merepresentasikan status sosial tinggi dan perlindungan spiritual dari kekuatan kosmik.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'sejarah' && (
              <div
                className={`bg-[#F4E1B9] p-8 rounded-xl shadow-lg border border-[#D4A017]/20 transition-all duration-700 delay-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#4A2C2A] flex items-center">
                  <span className="mr-3">🌐</span> Duta Budaya Jawa Timur
                </h2>
                <div className="text-lg font-lora leading-relaxed text-[#1C2526] space-y-4">
                  <p>
                    Sebagai brand dari ajang pemilihan <em>Duta Budaya Jawa Timur</em>, <strong>Narapati & Kencana</strong> membawa filosofi mendalam:
                  </p>
                  <ul className="space-y-3 pl-5">
                    <li className="flex items-start">
                      <span className="text-[#D4A017] mr-2">✨</span>
                      <span><em>Narapati</em> melambangkan kepemimpinan dan kebijaksanaan budaya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A017] mr-2">✨</span>
                      <span><em>Kencana</em> mewakili kejayaan dan keagungan warisan Jawa Timur</span>
                    </li>
                  </ul>
                  <p>
                    Konsep ini mirip dengan duta wisata, namun memiliki fokus kuat pada pelestarian budaya. Gelar <strong>Narapati & Kencana</strong> akan disematkan kepada finalis dan pemenang, yang menjadi wajah representatif budaya Jawa Timur di tingkat lokal, nasional, maupun internasional.
                  </p>
                </div>
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
            {activeTab === 'sejarah' ? 'Jadilah Duta Budaya Jawa Timur' : 'Pelajari Lebih Lanjut'}
          </h2>
          <p className="text-xl font-lora text-[#F4E1B9] max-w-3xl mx-auto mb-12">
            {activeTab === 'sejarah' 
              ? 'Daftarkan diri Anda untuk menjadi bagian dari program Narapati & Kencana dan wujudkan kontribusi nyata bagi pelestarian budaya Jawa Timur.' 
              : 'Temukan lebih dalam tentang filosofi dan makna di balik program Duta Budaya Jawa Timur.'}
          </p>
          <button
            className="relative bg-[#F28C38] text-[#1C2526] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden"
          >
            <span className="relative z-10">
              {activeTab === 'sejarah' ? 'Daftar Sekarang' : 'Kontak Kami'}
            </span>
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