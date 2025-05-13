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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#0E1618] via-[#1C2526] to-[#2A1A1B] overflow-hidden">
        {/* Golden overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/gold-pattern.png')] bg-repeat bg-[length:300px] mix-blend-overlay"></div>
        </div>
        
        {/* Floating royal ornaments */}
        <div className="absolute top-1/4 left-10 w-24 h-24 opacity-20 animate-float-slow">
          <Image src="/images/ornament3.png" alt="" width={96} height={96} className="animate-glow" />
        </div>
        <div className="absolute bottom-1/4 right-16 w-28 h-28 opacity-20 animate-float-fast">
          <Image src="/images/ornament2.png" alt="" width={112} height={112} className="animate-glow" />
        </div>
        
        {/* Hero content */}
        <div className="relative text-center px-4 z-10 animate-hero-fade-in">
          <div className="mb-8">
            <div className="w-24 h-1 bg-[#D4A017] mx-auto mb-6"></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#F4E1B9] tracking-tight">
              <span className="text-[#D4A017]">DUTA BUDAYA</span> JAWA TIMUR
            </h1>
            <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-6"></div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-[#B0A18F] max-w-3xl mx-auto leading-relaxed font-sans">
            <span className="text-[#D4A017] font-medium">Melestarikan Warisan Budaya</span> dengan <span className="text-[#D4A017] font-medium">Keanggunan Keraton</span> dan <span className="text-[#D4A017] font-medium">Inovasi Masa Kini</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/timeline">
              <button className="relative bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:shadow-[0_0_30px_rgba(212,160,23,0.5)] transition-all duration-300 shadow-lg group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Timeline Pendaftaran</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </Link>
            <Link href="/gallery">
              <button className="relative bg-transparent text-[#F4E1B9] px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:bg-[#D4A017]/10 transition-all duration-300 border-2 border-[#D4A017] group overflow-hidden">
                <span className="relative z-10">Galeri Budaya</span>
                <span className="absolute inset-0 bg-[#D4A017] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
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
      <section className={`py-28 px-6 bg-[#1C2526] text-white relative ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] via-[#F28C38] to-[#D4A017]"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4A017] to-[#800020] rounded-2xl opacity-70 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
              <div className="relative h-96 rounded-xl overflow-hidden border-2 border-[#D4A017]/50 shadow-2xl">
                <Image 
                  src="/images/duta1.png" 
                  alt="Budaya Jawa Timur"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1618]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-[#F4E1B9] font-sans italic text-xl">
                  "Warisan budaya adalah jembatan antara masa lalu dan masa depan"
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div>
              <div className="mb-2 text-[#D4A017] font-semibold uppercase tracking-widest text-sm font-sans">Tentang Pemilihan</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 relative">
                <span className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-[#D4A017] text-6xl">"</span>
                <span className="text-[#F4E1B9]">Jadilah Bagian</span> <span className="text-[#D4A017]">Duta Budaya</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#B0A18F] mb-6 font-sans">
                Pemilihan Duta Budaya Jawa Timur Narapati & Kencana adalah ajang bergengsi untuk mencari generasi muda terbaik yang akan menjadi wajah pelestarian budaya di tingkat nasional dan internasional.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#B0A18F] mb-8 font-sans">
                Bergabunglah bersama kami, tunjukkan bakat, pengetahuan, dan dedikasimu untuk budaya Jawa Timur. Jadilah inspirasi melalui program Duta Budaya!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <button className="relative bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] px-8 py-3 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(212,160,23,0.5)] transition-all duration-300 shadow-md group overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Selengkapnya</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link href="/programs">
                  <button className="relative bg-transparent border-2 border-[#D4A017] text-[#D4A017] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#D4A017]/10 transition-all duration-300 group overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Program Kami</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narapati Kencana Section */}
      <section className="py-28 px-6 bg-[#0E1618] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/gold-pattern.png')] bg-repeat bg-[length:300px] mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-[#D4A017] font-semibold uppercase tracking-widest text-sm font-sans">Pemilihan</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#F4E1B9]">
              <span className="text-[#D4A017]">Narapati & Kencana</span> Duta Budaya Jawa Timur
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#D4A017] to-[#F28C38]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Syarat & Ketentuan",
                description: "Persyaratan lengkap untuk mengikuti seleksi Duta Budaya Jawa Timur Narapati & Kencana.",
                icon: "📜",
                color: "from-[#800020] to-[#5A0015]"
              },
              {
                title: "Golden Tiket",
                description: "Keistimewaan bagi peserta terpilih untuk mendapatkan pelatihan khusus dari para ahli budaya.",
                icon: "🏆",
                color: "from-[#D4A017] to-[#B8860B]"
              },
              {
                title: "Pendaftaran",
                description: "Proses pendaftaran untuk menjadi calon Duta Budaya Jawa Timur Narapati & Kencana.",
                icon: "✍️",
                color: "from-[#1C2526] to-[#3A2C1A]"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[#1C2526] p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_30px_rgba(212,160,23,0.3)] transition-all duration-500 hover:-translate-y-2 border-t-4 border-[#D4A017] group relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-[#D4A017] to-[#F28C38] opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500 -z-10"></div>
                <div className="text-5xl mb-6 text-[#D4A017]">{item.icon}</div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-[#F4E1B9]">{item.title}</h3>
                <p className="text-[#B0A18F] font-sans">{item.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-[#1C2526] to-[#2A1A1B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/gold-texture.png')] bg-cover mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4A017] to-[#F28C38] rounded-lg blur opacity-75"></div>
            <div className="relative bg-[#1C2526] px-8 py-8 rounded-lg border border-[#D4A017]/30">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#F4E1B9]">
                Daftarkan Diri Anda <span className="text-[#D4A017]">Sekarang Juga!</span>
              </h2>
              <p className="text-xl leading-relaxed mb-10 max-w-3xl mx-auto text-[#B0A18F] font-sans">
                Bergabunglah dengan Duta Budaya Jawa Timur Narapati & Kencana dan jadilah agen perubahan dalam pelestarian budaya.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="https://linktr.ee/DutaBudayaJawaTimur2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,160,23,0.5)] transition-all duration-300 shadow-lg group overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Daftar Sekarang</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </a>
                <a
                  href="https://wa.me/6285708829751"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative bg-transparent border-2 border-[#D4A017] text-[#D4A017] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#D4A017]/10 transition-all duration-300 group overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Kontak Kami</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global styles */}
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
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(212, 160, 23, 0.5)); }
          50% { filter: drop-shadow(0 0 15px rgba(212, 160, 23, 0.8)); }
        }
        @keyframes heroFadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite;
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
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        .animate-hero-fade-in {
          animation: heroFadeIn 1.2s cubic-bezier(0.33,1,0.68,1) both;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        .font-sans {
          font-family: 'Lora', sans-serif;
        }
      `}</style>
    </div>
  );
}