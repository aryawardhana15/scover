"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState("visi");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#DF6E21]/10 min-h-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:300px]"></div>
      </div>

      {/* Floating traditional elements */}
      <div className="animate-float-slow absolute top-20 left-10 w-24 h-24 opacity-20">
        <Image src="/images/javanese-ornament-1.png" alt="" width={96} height={96} />
      </div>
      
      <div className="animate-float-fast absolute bottom-40 right-16 w-32 h-32 opacity-20">
        <Image src="/images/javanese-ornament-2.png" alt="" width={128} height={128} />
      </div>

      <div className="relative py-28 px-4 md:px-16 max-w-7xl mx-auto">
        {/* Animated title */}
        <div className={`transition-all duration-1000 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 text-[#DF6E21] animate-fade-in">
              Tentang Kami
            </h1>
            <div className="w-24 h-1 bg-[#EAB82C] mx-auto animate-scale-x" />
          </div>
        </div>

        {/* Interactive tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-white shadow-md p-1">
            <button
              onClick={() => setActiveTab("visi")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "visi" 
                  ? "bg-[#DF6E21] text-white" 
                  : "text-[#BF7519] hover:bg-[#DF6E21]/10"
              }`}
            >
              Visi
            </button>
            <button
              onClick={() => setActiveTab("misi")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "misi" 
                  ? "bg-[#DF6E21] text-white" 
                  : "text-[#BF7519] hover:bg-[#DF6E21]/10"
              }`}
            >
              Misi
            </button>
            <button
              onClick={() => setActiveTab("sejarah")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === "sejarah" 
                  ? "bg-[#DF6E21] text-white" 
                  : "text-[#BF7519] hover:bg-[#DF6E21]/10"
              }`}
            >
              Sejarah
            </button>
          </div>
        </div>

        {/* Content with parallax effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image section */}
          <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 ${
            scrolled ? "opacity-100" : "opacity-0 translate-y-10"
          }`}>
            <Image 
              src="/images/javanese-culture.jpg" 
              alt="Budaya Jawa Timur"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-lora italic">Melestarikan Keindahan Budaya Jawa Timur</p>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            {activeTab === "visi" && (
              <div className={`bg-white p-8 rounded-xl shadow-lg border border-[#DF6E21]/10 transition-all duration-700 delay-300 ${
                scrolled ? "opacity-100" : "opacity-0 translate-y-10"
              }`}>
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#DF6E21] flex items-center">
                  <span className="mr-3">🌄</span> Visi Kami
                </h2>
                <p className="text-lg font-lora leading-relaxed text-gray-700">
                  Menjadi pelopor dalam pelestarian dan promosi budaya Jawa Timur yang kaya dan beragam, dengan sentuhan keanggunan dan inovasi yang membawa warisan budaya ke era modern tanpa kehilangan esensinya.
                </p>
              </div>
            )}

            {activeTab === "misi" && (
              <div className={`bg-white p-8 rounded-xl shadow-lg border border-[#DF6E21]/10 transition-all duration-700 delay-300 ${
                scrolled ? "opacity-100" : "opacity-0 translate-y-10"
              }`}>
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#DF6E21] flex items-center">
                  <span className="mr-3">🎯</span> Misi Kami
                </h2>
                <ul className="space-y-4 text-lg font-lora text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-[#EAB82C]/20 text-[#BF7519] rounded-full p-2 mr-3">1</span>
                    Meningkatkan kesadaran masyarakat terhadap kekayaan budaya Jawa Timur melalui program edukasi dan publikasi.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#EAB82C]/20 text-[#BF7519] rounded-full p-2 mr-3">2</span>
                    Mendukung generasi muda dalam mengenal, mencintai, dan melestarikan tradisi melalui kegiatan kreatif.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#EAB82C]/20 text-[#BF7519] rounded-full p-2 mr-3">3</span>
                    Mengadakan kegiatan budaya yang inovatif, inklusif, dan relevan dengan perkembangan zaman.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "sejarah" && (
              <div className={`bg-white p-8 rounded-xl shadow-lg border border-[#DF6E21]/10 transition-all duration-700 delay-300 ${
                scrolled ? "opacity-100" : "opacity-0 translate-y-10"
              }`}>
                <h2 className="text-4xl font-playfair font-semibold mb-6 text-[#DF6E21] flex items-center">
                  <span className="mr-3">📜</span> Sejarah Kami
                </h2>
                <p className="text-lg font-lora leading-relaxed text-gray-700">
                  Berdiri sejak 2010, kami memulai perjalanan dengan sekelompok pecinta budaya Jawa Timur yang peduli terhadap pelestarian warisan leluhur. Dari acara kecil di komunitas lokal, kini kami telah berkembang menjadi organisasi budaya dengan jaringan nasional.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Team showcase */}
        <div className={`mt-24 text-center transition-all duration-700 delay-500 ${
          scrolled ? "opacity-100" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl font-playfair font-bold mb-6 text-[#DF6E21]">Tim Kami</h2>
          <p className="text-xl font-lora text-gray-600 max-w-3xl mx-auto mb-12">
            Dikembangkan oleh individu-individu yang penuh semangat dalam melestarikan budaya Jawa Timur.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#EAB82C]/10 overflow-hidden border-2 border-[#BF7519]/30">
                  <Image 
                    src={`/images/team-${item}.jpg`}
                    alt={`Team member ${item}`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#BF7519]">Nama Anggota</h3>
                <p className="font-lora text-gray-600">Peran</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add these styles in your global CSS */}
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
      `}</style>
    </div>
  );
}