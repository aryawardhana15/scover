'use client';

import { useState } from 'react';
import Image from 'next/image';

// All gallery images with varied sizes for dynamic masonry layout
const galleryImages = [
  // Row 1 - Mixed sizes
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Kelas Pembelajaran Scover', category: 'Fasilitas', icon: '🏫', color: 'from-[#1E40AF] to-[#3B82F6]', span: 'col-span-2 row-span-2' },
  { id: 2, src: '/images/gallery/2.jpg', alt: 'Sesi Belajar Intensif', category: 'Kegiatan', icon: '👥', color: 'from-[#10B981] to-[#059669]', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/images/gallery/3.jpg', alt: 'Kelas Diskusi Interaktif', category: 'Kegiatan', icon: '💬', color: 'from-[#F59E0B] to-[#F97316]', span: 'col-span-1 row-span-1' },
  
  // Row 2
  { id: 4, src: '/images/gallery/4.JPG', alt: 'Belajar & Kebersamaan', category: 'Fasilitas', icon: '💻', color: 'from-[#1E40AF] to-[#3B82F6]', span: 'col-span-1 row-span-1' },
  { id: 5, src: '/images/gallery/5.jpg', alt: 'Workshop Pendidikan', category: 'Kegiatan', icon: '📊', color: 'from-[#10B981] to-[#059669]', span: 'col-span-1 row-span-2' },
  { id: 6, src: '/images/gallery/6.jpg', alt: 'Ruang Belajar Nyaman', category: 'Fasilitas', icon: '🏠', color: 'from-[#8B5CF6] to-[#7C3AED]', span: 'col-span-2 row-span-1' },
  
  // Row 3
  { id: 7, src: '/images/gallery/7.jpg', alt: 'Sesi Konsultasi', category: 'Kegiatan', icon: '📚', color: 'from-[#1E40AF] to-[#3B82F6]', span: 'col-span-1 row-span-2' },
  { id: 8, src: '/images/gallery/8.JPG', alt: 'Event Scover', category: 'Acara', icon: '🎉', color: 'from-[#10B981] to-[#059669]', span: 'col-span-2 row-span-1' },
  { id: 9, src: '/images/gallery/9.jpg', alt: 'Keakraban Siswa', category: 'kegiatan', icon: '🏆', color: 'from-[#8B5CF6] to-[#7C3AED]', span: 'col-span-1 row-span-1' },
  
  // Row 4
  { id: 10, src: '/images/gallery/10.jpg', alt: 'Momen Kelulusan', category: 'Acara', icon: '🎓', color: 'from-[#10B981] to-[#059669]', span: 'col-span-1 row-span-1' },
  { id: 11, src: '/images/gallery/11.JPG', alt: 'Aktivitas Tambahan', category: 'Kegiatan', icon: '✨', color: 'from-[#F59E0B] to-[#F97316]', span: 'col-span-1 row-span-1' },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#F59E0B]/10 to-[#F97316]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            📸 Galeri Kami
      </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-poppins px-4">
            <span className="bg-gradient-to-r from-gray-900 via-[#1E40AF] to-gray-900 bg-clip-text text-transparent">
              Momen
            </span>
            <br />
            <span className="text-[#F59E0B]">Kebersamaan</span>
  </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Dokumentasi kegiatan, fasilitas, dan pencapaian di Scover Bimbel
  </p>
</div>

        {/* Dynamic Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative ${image.span} overflow-hidden rounded-3xl cursor-pointer hover:scale-[1.02] transition-all duration-500`}
              onClick={() => setSelectedImage(image)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onLoadingComplete={() => setImageLoaded(prev => ({ ...prev, [image.id]: true }))}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${image.color} flex flex-col items-center justify-center text-white p-6"><div class="text-6xl mb-4">${image.icon}</div><div class="text-lg font-bold text-center">${image.alt}</div></div>`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${image.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 text-white">
                  <div className="text-4xl mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    {image.icon}
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </h3>
                  <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {image.category}
                  </span>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
        </div>
      </div>

              {/* Loading Skeleton */}
              {!imageLoaded[image.id] && (
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-20 animate-pulse`}></div>
              )}
                </div>
          ))}
              </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Foto & Video', icon: '📸' },
            { number: '100+', label: 'Acara', icon: '🎉' },
            { number: '1000+', label: 'Momen Berharga', icon: '⭐' },
            { number: '5+', label: 'Tahun Dokumentasi', icon: '📅' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#1E40AF] font-poppins mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
            <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-3"
              onClick={() => setSelectedImage(null)}
            >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center mb-6">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[calc(90vh-100px)] rounded-2xl animate-scale-in"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="bg-gradient-to-br ${selectedImage.color} rounded-2xl flex flex-col items-center justify-center text-white p-12"><div class="text-8xl mb-6">${selectedImage.icon}</div><div class="text-3xl font-bold">${selectedImage.alt}</div></div>`;
                }}
              />
            </div>

            {/* Info */}
            <div className="text-center text-white">
              <div className={`inline-block bg-gradient-to-r ${selectedImage.color} px-4 py-2 rounded-full text-sm font-semibold mb-3`}>
                {selectedImage.category}
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
