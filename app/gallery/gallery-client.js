'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Mas Rusydan di Ponorogo',
    description: 'Mas Rusydan melakukan kunjungan ke Aloon-aloon Kab. Ponorogo untuk memberikan edukasi kebudayaan di acara Festival Reog Bulan Purnama.',
    image: '/images/galeri1 (10).png',
    category: 'dbcjt',
  },
  {
    id: 2,
    title: 'Mbak Ivana di Kediri',
    description: 'Mbak Ivana meluncurkan advokasinya dengan memperkenalkan budaya tari pada acara "Pagelaran Budaya Nusantara" di SMP Petra Kediri.',
    image: '/images/galeri1 (9).png',
    category: 'dbcjt',
  },
  {
    id: 3,
    title: 'Mbak Zalora di Pagelaran Wayang',
    description: 'Mbak Zalora telah menghadiri Acara Pagelaran Budaya Wayang Dalam Rangka 100 Tahun Perguruan Taman Siswa.',
    image: '/images/galeri1 (8).png',
    category: 'dbcjt',
  },
  {
    id: 4,
    title: 'Mbak Jasmine di Fashion Event',
    description: 'Mbak Jasmine tampil sebagai Model Runway dalam Muslim Fashion Event. Ia membawa nuansa batik khas, mengemas edukasi budaya melalui fashion.',
    image: '/images/galeri1 (7).png',
    category: 'dbcjt',
  },
  {
    id: 5,
    title: 'Juri DBCJT 2025',
    description: 'Mas Dasega, Mbak Debby, dan Mas Rama menjadi juri kategori bakat dalam ajang Duta Budaya Cilik Jawa Timur 2025.',
    image: '/images/galeri1 (6).png',
    category: 'dbjt',
  },
  {
    id: 6,
    title: 'Mas Yayan & Mbak Najua di Grand Final',
    description: 'Mas Yayan & Mbak Najua hadir dalam Grand Final Mr. Teen & Ms. Teenager Indonesia 2024, ajang mencari figur inspiratif dari kalangan remaja.',
    image: '/images/galeri1 (5).png',
    category: 'dbjt',
  },
  {
    id: 7,
    title: 'Malam Final Putra Putri Brawijaya',
    description: 'Mas Rama & Mbak Debby menghadiri malam Grand Final Putra Putri Brawijaya di Universitas Brawijaya Malang.',
    image: '/images/galeri1 (4).png',
    category: 'dbjt',
  },
  {
    id: 8,
    title: 'Mbak Debby di RRI Malang',
    description: 'Mbak Debby menjadi narasumber di RRI Malang, membahas kekayaan budaya Jawa Timur dan peran generasi muda dalam pelestariannya.',
    image: '/images/galeri1 (3).png',
    category: 'dbjt',
  },
  {
    id: 9,
    title: 'Mas Azhar di Talkshow 4B',
    description: 'Mas Azhar menjadi pembicara dalam Talkshow 4B (Business, Branding, Behavior, Brave) di Universitas Hayam Wuruk Perbanas Surabaya.',
    image: '/images/galeri1 (2).png',
    category: 'dbjt',
  },
  {
    id: 10,
    title: 'Mas Mahdi Jelajah Kota Lama',
    description: 'Mas Mahdi menjelajahi Kota Lama Surabaya, kawasan bersejarah yang menyimpan jejak perkembangan kota dari masa kolonial.',
    image: '/images/galeri1 (1).png',
    category: 'dbjt',
  },
];



 const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'dbjt', name: 'Kegiatan DBJT' },
  { id: 'dbcjt', name: 'Kegiatan DBCJT' },
];


export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1C2526] to-[#4A2C2A]/10 py-12 md:py-20">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:200px] animate-pattern-scroll md:bg-[length:300px]"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="animate-float-slow absolute top-1/4 left-4 w-16 h-16 opacity-20 md:w-24 md:h-24 md:left-10">
        <Image src="/images/javanese-ornament-1.png" alt="" width={96} height={96} />
      </div>
      <div className="animate-float-fast absolute bottom-1/4 right-4 w-20 h-20 opacity-20 md:w-32 md:h-32 md:right-16">
        <Image src="/images/javanese-ornament-2.png" alt="" width={128} height={128} />
      </div>

      {/* Hero Section */}
  <div className="text-center mb-12 md:mb-16 px-4 pt-16 md:pt-0">
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#D4A017] mb-6 animate-fade-in">
    Galeri Budaya
  </h1>
  <p className="text-lg md:text-xl text-[#F4E1B9] max-w-2xl mx-auto animate-fade-in delay-200 font-lora leading-relaxed">
    Jelajahi keindahan dan kekayaan budaya Jawa Timur melalui lensa kami
  </p>
</div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 animate-fade-in-up delay-300">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 font-lora text-sm md:text-base ${
                selectedCategory === category.id
                  ? 'bg-[#D4A017] text-[#1C2526] shadow-lg'
                  : 'bg-[#1C2526] text-[#F4E1B9] hover:bg-[#4A2C2A]/50 border border-[#D4A017]/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#F4E1B9] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(74,44,42,0.15)] hover:shadow-[0_8px_30px_rgba(212,160,23,0.3)] cursor-pointer animate-fade-in-up border border-[#D4A017]/20"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-[#F4E1B9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-[#6B2D2F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#1C2526] font-lora text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#1C2526]/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#F4E1B9] rounded-2xl overflow-hidden animate-scale-in shadow-[0_8px_30px_rgba(212,160,23,0.3)] border border-[#D4A017]/20"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/20 to-transparent"></div>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-[#6B2D2F] mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-[#1C2526] font-lora text-sm md:text-base leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-[#D4A017]/80 rounded-full flex items-center justify-center text-[#1C2526] hover:bg-[#D4A017] transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
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
          100% { background-position: 200px 200px; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
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
        @media (max-width: 767px) {
          .group:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}