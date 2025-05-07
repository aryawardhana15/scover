'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#DF6E21] to-[#BF7519] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern-light.png')] bg-repeat bg-[length:300px] animate-pattern-scroll"></div>
        </div>
        
        {/* Floating ornaments */}
        <div className="animate-float-slow absolute top-1/4 left-10 w-24 h-24 opacity-15">
          <Image src="/images/javanese-ornament-3.png" alt="" width={96} height={96} />
        </div>
        <div className="animate-float-fast absolute bottom-1/4 right-16 w-32 h-32 opacity-15">
          <Image src="/images/javanese-ornament-4.png" alt="" width={128} height={128} />
        </div>
        
        {/* Hero content */}
        <div className={`relative text-center px-4 z-10 transition-all duration-1000 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(234,184,44,0.5)] animate-text-glow">
            Duta Budaya Jawa Timur
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white font-lora max-w-3xl mx-auto leading-relaxed">
            Melestarikan Warisan Budaya Jawa Timur dengan Keanggunan dan Inovasi
          </p>
          <Link href="/timeline">
            <button className="relative bg-[#EAB82C] text-white px-10 py-5 rounded-full font-semibold text-lg md:text-xl hover:bg-[#BF7519] transition-all duration-300 shadow-[0_0_15px_rgba(234,184,44,0.7)] hover:shadow-[0_0_25px_rgba(234,184,44,1)] group overflow-hidden">
              <span className="relative z-10">Lihat Timeline Pendaftaran</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#EAB82C] to-[#DF6E21] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-[#EAB82C] flex justify-center">
            <div className="w-1 h-3 bg-[#EAB82C] rounded-full mt-2 animate-scroll-pulse"></div>
          </div>
        </div>
      </section>

      {/* Pengenalan Section */}
      <section className={`py-28 px-4 md:px-16 bg-white text-[#DF6E21] transition-all duration-700 delay-200 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#EAB82C]/20">
              <Image 
                src="/images/javanese-tradition.jpg" 
                alt="Budaya Jawa Timur"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-lora italic text-xl">"Melestarikan bukan berarti memuseumkan"</p>
              </div>
            </div>
            
            {/* Text content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 relative">
                <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-[#EAB82C] text-6xl">"</span>
                Tentang Program Kami
              </h2>
              <p className="text-lg md:text-xl font-lora leading-relaxed text-gray-700 mb-6">
                Duta Budaya Jawa Timur adalah wadah bagi generasi muda untuk melestarikan dan mempromosikan kekayaan budaya Jawa Timur melalui seni, tradisi, dan inovasi.
              </p>
              <p className="text-lg md:text-xl font-lora leading-relaxed text-gray-700 mb-8">
                Kami berkomitmen untuk menjaga warisan leluhur dengan sentuhan modern yang elegan, menjembatani masa lalu dan masa depan melalui kreativitas.
              </p>
              <Link href="/about">
                <button className="bg-[#DF6E21] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#BF7519] transition-all duration-300 shadow-md hover:shadow-lg">
                  Pelajari Lebih Lanjut
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-white to-[#DF6E21]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-16 text-center text-[#DF6E21]">
            Keunikan Budaya Jawa Timur
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Seni Tradisional",
                description: "Wayang kulit, ludruk, dan reog ponorogo yang mendunia",
                icon: "🎭"
              },
              {
                title: "Kuliner Khas",
                description: "Rasa autentik dari rawon, soto lamongan, hingga rujak cingur",
                icon: "🍲"
              },
              {
                title: "Adat Istiadat",
                description: "Upacara adat yang sarat makna filosofis kehidupan",
                icon: "🙏"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#EAB82C]"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-playfair font-semibold mb-3 text-[#BF7519]">{item.title}</h3>
                <p className="font-lora text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-16 bg-[#DF6E21] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Siap Menjadi Bagian dari Kami?</h2>
          <p className="text-xl font-lora leading-relaxed mb-10 max-w-3xl mx-auto">
            Bergabunglah dengan Duta Budaya Jawa Timur dan jadilah agen perubahan dalam pelestarian budaya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <button className="bg-[#EAB82C] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#BF7519] transition-all duration-300 shadow-lg hover:shadow-xl">
                Daftar Sekarang
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#DF6E21] transition-all duration-300">
                Kontak Kami
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes patternScroll {
          0% { background-position: 0 0; }
          100% { background-position: 300px 300px; }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 2px 10px rgba(234, 184, 44, 0.5); }
          50% { text-shadow: 0 2px 20px rgba(234, 184, 44, 0.8); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(5px); }
        }
        .animate-pattern-scroll {
          animation: patternScroll 60s linear infinite;
        }
        .animate-text-glow {
          animation: textGlow 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: floatFast 10s ease-in-out infinite 2s;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-scroll-pulse {
          animation: scrollPulse 2s infinite;
        }
      `}</style>
    </div>
  );
}