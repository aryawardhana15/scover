"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("pendaftaran");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const registrationEvents = [
    { date: "1 Juni 2025", title: "Pendaftaran Dibuka", desc: "Pendaftaran resmi untuk Duta Budaya Jawa Timur 2025 dimulai." },
    { date: "30 Juni 2025", title: "Pendaftaran Ditutup", desc: "Batas akhir pendaftaran peserta." },
    { date: "15 Juli 2025", title: "Seleksi Awal", desc: "Tahap seleksi awal untuk menentukan kandidat terbaik." },
    { date: "1 Agustus 2025", title: "Pengumuman Finalis", desc: "Pengumuman finalis yang lolos ke tahap akhir." },
    { date: "15 Agustus 2025", title: "Grand Final", desc: "Acara puncak pemilihan Duta Budaya Jawa Timur 2025." },
  ];

  const activityEvents = [
    {
      year: 2024,
      title: "Festival Budaya Jawa Timur",
      description: "Pertunjukan seni dan budaya terbesar di Jawa Timur, menampilkan berbagai kesenian tradisional dan kontemporer.",
      image: "/images/timeline-1.jpg",
      date: "15-20 Maret 2024"
    },
    {
      year: 2024,
      title: "Workshop Batik Tulis",
      description: "Pelatihan teknik membatik tradisional dengan para maestro batik Jawa Timur.",
      image: "/images/timeline-2.jpg",
      date: "5-7 April 2024"
    },
    {
      year: 2024,
      title: "Pertunjukan Wayang Kulit",
      description: "Pertunjukan wayang kulit dengan dalang muda berbakat dari Jawa Timur.",
      image: "/images/timeline-3.jpg",
      date: "20 April 2024"
    },
    {
      year: 2024,
      title: "Pameran Seni Rupa",
      description: "Pameran karya seni rupa kontemporer dengan tema 'Warisan Budaya'.",
      image: "/images/timeline-4.jpg",
      date: "1-15 Mei 2024"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#DF6E21]/10">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/images/timeline-hero.jpg"
          alt="Timeline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-end justify-center pb-16">
          <div className={`transition-all duration-1000 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center">
              Timeline Kegiatan
            </h1>
            <p className="text-xl text-white/90 font-lora text-center mt-4 max-w-2xl mx-auto">
              Jejak perjalanan kami dalam melestarikan budaya Jawa Timur
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8 sticky top-0 z-10 bg-white/90 backdrop-blur-sm py-4 shadow-sm">
        <div className="inline-flex rounded-full bg-white shadow-md p-1 border border-[#EAB82C]/20">
          <button
            onClick={() => setActiveTab("pendaftaran")}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === "pendaftaran" 
                ? "bg-[#DF6E21] text-white" 
                : "text-[#BF7519] hover:bg-[#DF6E21]/10"
            }`}
          >
            Timeline Pendaftaran
          </button>
          <button
            onClick={() => setActiveTab("kegiatan")}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              activeTab === "kegiatan" 
                ? "bg-[#DF6E21] text-white" 
                : "text-[#BF7519] hover:bg-[#DF6E21]/10"
            }`}
          >
            Timeline Kegiatan
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {activeTab === "pendaftaran" && (
          <div className={`transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 h-full w-1 bg-[#EAB82C]/30"></div>
              
              {/* Events */}
              <div className="space-y-8 pl-16">
                {registrationEvents.map((event, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-11 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[#DF6E21] border-4 border-white shadow-[0_0_0_4px_#EAB82C/50]"></div>
                    
                    {/* Event card */}
                    <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(191,117,25,0.1)] hover:shadow-[0_8px_30px_rgba(191,117,25,0.2)] transition-all duration-300 border-l-4 border-[#EAB82C] group-hover:border-[#DF6E21]">
                      <div className="flex items-start">
                        <div className="w-40 flex-shrink-0 font-playfair font-semibold text-[#BF7519] text-right pr-6">
                          {event.date}
                        </div>
                        <div>
                          <h3 className="text-2xl font-playfair font-semibold text-[#DF6E21] mb-2">
                            {event.title}
                          </h3>
                          <p className="font-lora text-gray-700">
                            {event.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "kegiatan" && (
          <div className={`transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#EAB82C]/30"></div>

              {/* Events */}
              <div className="space-y-24">
                {activityEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#DF6E21] border-4 border-white shadow-[0_0_0_4px_#EAB82C/50]"></div>

                    {/* Year marker */}
                    {index === 0 || activityEvents[index-1].year !== event.year ? (
                      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 bg-[#EAB82C] text-white px-6 py-2 rounded-full font-playfair font-bold text-lg shadow-md">
                        {event.year}
                      </div>
                    ) : null}

                    {/* Event card */}
                    <div
                      className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-4 md:pr-16" : "pl-4 md:pl-16"}`}
                    >
                      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(191,117,25,0.12)] hover:shadow-[0_8px_30px_rgba(191,117,25,0.25)] transition-all duration-300 overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-[#BF7519] font-medium mb-2">
                            {event.date}
                          </div>
                          <h3 className="text-2xl font-playfair font-semibold text-[#DF6E21] mb-3">
                            {event.title}
                          </h3>
                          <p className="font-lora text-gray-700">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className={`mt-24 text-center transition-all duration-700 delay-300 ${scrolled ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-playfair font-semibold text-[#DF6E21] mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-lora max-w-2xl mx-auto">
            Jadilah bagian dari perjalanan kami dalam melestarikan dan mengembangkan budaya Jawa Timur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#DF6E21] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#BF7519] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
              Daftar Sekarang
            </button>
            <button className="bg-white text-[#DF6E21] px-8 py-3 rounded-lg font-medium border-2 border-[#DF6E21] hover:bg-[#DF6E21]/10 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
              Lihat Kegiatan Lainnya
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="animate-float-slow absolute top-1/3 left-10 w-24 h-24 opacity-15">
        <Image src="/images/javanese-ornament-1.png" alt="" width={96} height={96} />
      </div>
      <div className="animate-float-fast absolute bottom-1/4 right-16 w-32 h-32 opacity-15">
        <Image src="/images/javanese-ornament-2.png" alt="" width={128} height={128} />
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
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