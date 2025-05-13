'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState('tema');

  // Content data for tabs
  const tabContent = {
    tema: {
      title: 'Tema Pemilihan',
      icon: '🌐',
      content: (
        <>
          <p>
            Tema acara pemilihan <strong>Duta Budaya Jawa Timur 2025</strong> adalah <em>Caraka Darma Abipraya Baswara</em>, yang mencerminkan semangat kepemimpinan dan kejayaan budaya Jawa Timur. Ajang ini diselenggarakan oleh yayasan resmi dengan brand <strong>Narapati & Kencana</strong>, mirip duta wisata, namun berfokus pada pelestarian budaya.
          </p>
        </>
      ),
    },
    makna: {
      title: 'Makna',
      icon: '✨',
      content: (
        <>
          <p>
            <strong>Narapati</strong> berasal dari Sanskerta (<em>nara</em> = manusia, <em>pati</em> = pemimpin), berarti "raja" atau "penguasa manusia" dalam sejarah Jawa Timur, melambangkan kewibawaan dan kebijaksanaan.
          </p>
          <p>
            <strong>Kencana</strong> berarti "emas" dalam bahasa Jawa, simbol keagungan dan kehormatan, sering dikaitkan dengan kekuasaan ilahi raja melalui singgasana, keris, dan pakaian kebesaran.
          </p>
        </>
      ),
    },
    filosofi: {
      title: 'Filosofi',
      icon: '👑',
      content: (
        <>
          <p>
            <strong>Narapati</strong> mencerminkan kepemimpinan bijaksana dalam budaya Jawa Timur, seperti raja Majapahit atau Singasari, yang menggabungkan wibawa, kebijaksanaan, dan perlindungan spiritual, termasuk harmoni kosmik dalam mandala politik.
          </p>
          <p>
            <strong>Kencana</strong> melambangkan kejayaan spiritual, terkait dewa-dewa Hindu-Buddha (seperti Wisnu) dan adaptasi kebangsawanan Islam, seperti mahkota Sunan Surakarta, menunjukkan status tinggi dan perlindungan kosmik.
          </p>
          <p>
            Bersama, <strong>Narapati & Kencana</strong> menjadi wajah budaya Jawa Timur, diemban oleh finalis/pemenang untuk mewakili warisan lokal hingga internasional.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1C2526] to-[#4A2C2A]/20 min-h-screen">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:300px] animate-pattern-scroll"></div>
      </div>

      {/* Floating ornaments with glow */}
      <div className="absolute top-20 left-10 w-28 h-28 opacity-30 animate-float-glow">
        <Image src="/images/ornament2.png" alt="" width={112} height={112} className="animate-glow" />
      </div>
      <div className="absolute bottom-40 right-16 w-36 h-36 opacity-30 animate-float-glow-delayed">
        <Image src="/images/ornament3.png" alt="" width={144} height={144} className="animate-glow" />
      </div>

      <div className="relative py-32 px-4 md:px-16 max-w-7xl mx-auto animate-container">
        {/* Animated title */}
        <div className="text-center mb-16 animate-fade-slide">
          <h1 className="text-6xl md:text-8xl font-playfair font-extrabold mb-6 text-[#D4A017] animate-glow-text">
            Tentang Kami
          </h1>
          <div className="w-32 h-1 bg-[#F28C38] mx-auto animate-scale-x" />
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12 animate-fade-slide delay-200">
          <div className="inline-flex rounded-full bg-[#1C2526] shadow-2xl p-1 border border-[#D4A017]/30">
            {['tema', 'makna', 'filosofi'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-lora text-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                  activeTab === tab
                    ? 'bg-[#D4A017] text-[#1C2526] shadow-[0_0_15px_rgba(212,160,23,0.5)]'
                    : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/70'
                }`}
              >
                {tab === 'tema' ? 'Tema Pemilihan' : tab === 'makna' ? 'Makna' : 'Filosofi'}
              </button>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-container delay-400">
          {/* Image section */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-image">
            <Image
              src={activeTab === 'tema' ? '/images/malampuncak.png' : '/images/yayantasya.png'}
              alt={activeTab === 'tema' ? 'Duta Budaya Jawa Timur' : 'Budaya Jawa Timur'}
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-[#F4E1B9] animate-fade-slide delay-600">
              <p className="font-lora italic text-xl">
                {activeTab === 'tema'
                  ? '"Menjadi Wajah Budaya Jawa Timur yang Berwibawa"'
                  : '"Melestarikan Keindahan Budaya Jawa Timur"'}
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            <div
              className={`bg-[#F4E1B9] p-8 rounded-xl shadow-2xl border border-[#D4A017]/30 tab-content ${
                activeTab ? 'tab-content-active' : 'tab-content-exit'
              }`}
              key={activeTab}
            >
              <h1 className="text-4xl font-playfair font-semibold mb-6 text-[#4A2C2A] flex items-center">
                <span className="mr-3">{tabContent[activeTab].icon}</span> {tabContent[activeTab].title}
              </h1>
              <div className="text-lg font-lora leading-relaxed text-[#1C2526] space-y-4">
                {tabContent[activeTab].content}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center animate-fade-slide delay-800">
          <h2 className="text-4xl font-playfair font-extrabold mb-6 text-[#D4A017] animate-glow-text">
            {activeTab === 'tema' ? 'Jadilah Duta Budaya Jawa Timur' : 'Pelajari Lebih Lanjut'}
          </h2>
          <p className="text-xl font-lora text-[#F4E1B9] max-w-3xl mx-auto mb-12 animate-fade">
            {activeTab === 'tema'
              ? 'Daftarkan diri Anda untuk menjadi bagian dari program Narapati & Kencana dan wujudkan kontribusi nyata bagi pelestarian budaya Jawa Timur.'
              : 'Temukan lebih dalam tentang filosofi dan makna di balik program Duta Budaya Jawa Timur.'}
          </p>
          {activeTab === 'tema' ? (
            <Link 
              href="https://linktr.ee/DutaBudayaJawaTimur2025" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="relative bg-[#F28C38] text-[#1C2526] px-12 py-4 rounded-full font-lora font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden"
              >
                <span className="relative z-10">Daftar Sekarang</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          ) : (
            <Link 
              href="/contact" 
              className="inline-block"
            >
              <button
                className="relative bg-[#F28C38] text-[#1C2526] px-12 py-4 rounded-full font-lora font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden"
              >
                <span className="relative z-10">Kontak Kami</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
          )}
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
        @keyframes tabEnter {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes tabExit {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50px);
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

        /* Delay classes */
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

        /* Tab transition styles */
        .tab-content {
          animation: tabEnter 0.6s cubic-bezier(0.33, 1, 0.68, 1) both;
        }
        .tab-content-exit {
          animation: tabExit 0.6s cubic-bezier(0.33, 1, 0.68, 1) both;
        }
        .tab-content-active {
          animation: tabEnter 0.6s cubic-bezier(0.33, 1, 0.68, 1) both;
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