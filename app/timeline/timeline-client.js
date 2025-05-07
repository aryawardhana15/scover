"use client";

import Image from "next/image";

const events = [
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

export default function TimelineClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-terracotta/10">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/timeline-hero.jpg"
          alt="Timeline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center animate-fade-in">
            Timeline Kegiatan
          </h1>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-terracotta/20"></div>

          {/* Events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-terracotta border-4 border-white"></div>

                {/* Event Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-16" : "pl-16"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(191,117,25,0.12)] hover:shadow-[0_8px_30px_rgba(191,117,25,0.25)] transition-all duration-300">
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-terracotta font-medium mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-playfair font-semibold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 font-lora">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <h2 className="text-3xl font-playfair font-semibold text-terracotta mb-4">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-lora max-w-2xl mx-auto">
            Jadilah bagian dari perjalanan kami dalam melestarikan dan mengembangkan budaya Jawa Timur. Bersama, kita bisa membuat perbedaan.
          </p>
          <button className="bg-terracotta text-white px-8 py-3 rounded-lg font-medium hover:bg-terracotta/90 transition-all duration-300 hover:scale-105 active:scale-95">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
} 