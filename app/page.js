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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1A0A00] to-[#3A2C1A] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern-light.png')] bg-repeat bg-[length:300px] opacity-10"></div>
        </div>
        
        {/* Floating ornaments */}
        <div className="absolute top-1/4 left-10 w-24 h-24 opacity-15">
          <Image src="/images/javanese-ornament-3.png" alt="" width={96} height={96} className="filter brightness-0 invert opacity-60" />
        </div>
        <div className="absolute bottom-1/4 right-16 w-32 h-32 opacity-15">
          <Image src="/images/javanese-ornament-4.png" alt="" width={128} height={128} className="filter brightness-0 invert opacity-60" />
        </div>
        
        {/* Hero content */}
        <div className={`relative text-center px-4 z-10 transition-all duration-1000 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            <span className="text-[#D4A017]">DUTA</span> BUDAYA JAWA TIMUR
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-[#B0A18F] max-w-3xl mx-auto leading-relaxed">
            Melestarikan Warisan Budaya Jawa Timur dengan <span className="text-[#D4A017] font-semibold">Keanggunan</span> dan <span className="text-[#D4A017] font-semibold">Inovasi</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/timeline">
              <button className="relative bg-gradient-to-r from-[#D4A017] to-[#FF8C00] text-black px-10 py-5 rounded-full font-semibold text-lg md:text-xl hover:from-[#FF8C00] hover:to-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden border-2 border-[#D4A017]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Timeline Pendaftaran</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/gallery">
              <button className="relative bg-transparent text-white px-10 py-5 rounded-full font-semibold text-lg md:text-xl hover:bg-[#800020]/30 transition-all duration-300 border-2 border-[#D4A017] group overflow-hidden">
                <span className="relative z-10">Galeri Budaya</span>
                <span className="absolute inset-0 bg-[#D4A017] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-[#D4A017] flex justify-center">
            <div className="w-1 h-3 bg-[#D4A017] rounded-full mt-2 animate-scroll-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-28 px-4 md:px-16 bg-[#1A0A00] text-white transition-all duration-700 delay-200 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4A017] to-[#800020] rounded-2xl opacity-70 group-hover:opacity-100 blur-md transition-all duration-300"></div>
              <div className="relative h-96 rounded-xl overflow-hidden border-2 border-[#D4A017]/30">
                <Image 
                  src="/images/javanese-tradition.jpg" 
                  alt="Budaya Jawa Timur"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="italic text-xl">"Warisan budaya adalah jembatan antara masa lalu dan masa depan"</p>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div>
              <div className="mb-2 text-[#D4A017] font-semibold uppercase tracking-widest text-sm">Tentang Kami</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
                <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-[#D4A017] text-6xl">"</span>
                Menjaga Tradisi, <span className="text-[#D4A017]">Menginspirasi</span> Masa Depan
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#B0A18F] mb-6">
                Duta Budaya Jawa Timur merupakan platform eksklusif bagi generasi muda untuk melestarikan, mengembangkan, dan mempromosikan kekayaan budaya Jawa Timur dengan sentuhan modern yang elegan.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#B0A18F] mb-8">
                Kami menghadirkan inovasi dalam pelestarian budaya melalui program-program berkualitas tinggi yang memadukan tradisi dan kontemporer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <button className="bg-[#D4A017] text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#FF8C00] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                    <span>Selengkapnya</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
                <Link href="/programs">
                  <button className="bg-transparent border-2 border-[#D4A017] text-[#D4A017] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#800020]/20 transition-all duration-300 flex items-center gap-2">
                    <span>Program Kami</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-20 px-4 md:px-16 bg-[#3A2C1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-[#D4A017] font-semibold uppercase tracking-widest text-sm">Keunggulan</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Keunikan <span className="text-[#D4A017]">Budaya</span> Jawa Timur
            </h2>
            <div className="mx-auto w-24 h-1 bg-[#D4A017]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Seni Tradisional",
                description: "Wayang kulit, ludruk, dan reog ponorogo yang mendunia",
                icon: "🎭",
                color: "from-[#800020] to-[#5A0015]"
              },
              {
                title: "Kuliner Khas",
                description: "Rasa autentik dari rawon, soto lamongan, hingga rujak cingur",
                icon: "🍲",
                color: "from-[#D4A017] to-[#B8860B]"
              },
              {
                title: "Adat Istiadat",
                description: "Upacara adat yang sarat makna filosofis kehidupan",
                icon: "🙏",
                color: "from-[#3A2C1A] to-[#5A4A30]"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[#1A0A00] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#D4A017] group"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-[#D4A017]">{item.title}</h3>
                <p className="text-[#B0A18F]">{item.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-[#1A0A00] to-[#3A2C1A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gold-texture.png')] bg-cover mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Menjadi <span className="text-[#D4A017]">Duta Budaya</span>?
          </h2>
          <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-[#B0A18F]">
            Bergabunglah dengan Duta Budaya Jawa Timur dan jadilah agen perubahan dalam pelestarian budaya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/register">
              <button className="relative bg-gradient-to-r from-[#D4A017] to-[#FF8C00] text-black px-10 py-4 rounded-full font-semibold text-lg hover:from-[#FF8C00] hover:to-[#D4A017] transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden border-2 border-[#D4A017]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Daftar Sekarang</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="relative bg-transparent border-2 border-[#D4A017] text-[#D4A017] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#800020]/20 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Kontak Kami</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(5px); }
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