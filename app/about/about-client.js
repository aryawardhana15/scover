'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState('visi');

  const tabContent = {
    visi: {
      title: 'Visi & Misi',
      icon: '',
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-[#003049] mb-3"> Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi pusat bimbingan belajar terkemuka di komunitas, dikenal melalui dukungan akademis yang unggul dan dedikasi terhadap keberhasilan siswa.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-[#003049] mb-3"> Misi</h3>
              <p className="text-gray-700 leading-relaxed">
                Membekali siswa dengan pengetahuan, keterampilan, dan kepercayaan diri untuk tidak hanya lulus ujian, tetapi juga unggul dalam perjalanan akademik dan meraih potensi terbaiknya.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-[#003049] mb-3"> Filosofi</h3>
              <p className="text-gray-700 leading-relaxed">
                Kami percaya bahwa pendidikan bukan sekadar mengajar, tetapi juga menginspirasi dan memberdayakan. Melalui pendekatan personal dan teknologi modern, kami menciptakan tempat belajar yang tidak hanya fokus pada capaian akademik, tetapi juga pada pengembangan karakter dan potensi siswa secara menyeluruh.
              </p>
            </div>
          </div>
        </>
      ),
    },
    sejarah: {
      title: 'Sejarah',
      icon: '📚',
      content: (
        <>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-[#003049] mb-3"> Awal Berdiri</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Scover didirikan pada tanggal <strong>16 Oktober 2023</strong> oleh empat pendidik muda yang memiliki visi besar terhadap masa depan pendidikan di Indonesia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Berlokasi di <strong>Jl. Danau Toba E6-24</strong>, Scover lahir dari semangat untuk menciptakan tempat belajar yang tidak hanya fokus pada capaian akademik, tetapi juga pada pengembangan karakter dan potensi siswa secara menyeluruh.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-[#003049] mb-3"> Program Unggulan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Kelas Reguler jenjang SD hingga SMA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Program Persiapan SNBT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Bimbingan masuk Kedinasan dan TNI/Polri</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Bimbingan CPNS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Program Persiapan Studi Luar Negeri (Scoverseas)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Scover Madrassah Class</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">Scover Ausbildung Preparation</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">🚀 Semangat Kami</h3>
              <p className="leading-relaxed">
                Dengan semangat <strong>"Study and Discover"</strong>, Scover terus melangkah untuk menjadi rumah belajar yang menyenangkan, bermakna, dan berdampak nyata bagi generasi penerus bangsa.
              </p>
            </div>
          </div>
        </>
      ),
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#003049]/10 to-[#0c5681]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#fabe49]/10 to-[#ffdc30]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-[#0c5681]/10 to-[#003049]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative py-20 px-4 md:px-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-full text-sm font-semibold mb-6 animate-bounce">
            🎓 Tentang Scover 
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-[#003049] to-gray-900 bg-clip-text text-transparent">
              Cerita Kami
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#fabe49] to-[#ffdc30] bg-clip-text text-transparent">Membangun Masa Depan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sejak 16 Oktober 2023, Scover  telah menjadi mitra terpercaya dalam perjalanan pendidikan siswa di Malang dengan semangat "Study and Discover"
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl bg-white shadow-2xl p-2 border border-gray-200">
              {['visi', 'sejarah'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#003049] to-[#0c5681] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab === 'visi' ? ' Visi & Misi' : ' Sejarah'}
                </button>
              ))}
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  {/* <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl flex items-center justify-center text-3xl text-white mr-4">
                    {tabContent[activeTab].icon}
                  </div> */}
                  <h2 className="text-3xl font-bold text-gray-900">{tabContent[activeTab].title}</h2>
                </div>
                <div className="text-lg leading-relaxed text-gray-700 space-y-4">
                  {tabContent[activeTab].content}
                </div>
              </div>
            </div>

            {/* Side Info Card */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Pencapaian Kami</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Siswa Lulus</span>
                    <span className="text-2xl font-bold">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tingkat Kelulusan</span>
                    <span className="text-2xl font-bold">86%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tahun Pengalaman</span>
                    <span className="text-2xl font-bold">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tutor Ahli</span>
                    <span className="text-2xl font-bold">80+</span>
                  </div>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Fakta Menarik</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#003049] rounded-full mr-3"></div>
                    <span className="text-gray-700">Didirikan 16 Oktober 2023</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#fabe49] rounded-full mr-3"></div>
                    <span className="text-gray-700">Jl. Danau Toba E6-24, Malang</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#0c5681] rounded-full mr-3"></div>
                    <span className="text-gray-700">3 Program Unggulan</span>
                  </div>
                  {/* <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-3"></div>
                    <span className="text-gray-700">Study and Discover</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

       
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bergabunglah dengan <span className="bg-gradient-to-r from-[#fabe49] to-[#ffdc30] bg-clip-text text-transparent">Scover</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Raih impian pendidikanmu bersama tim tutor berpengalaman dan metode pembelajaran terbaik. Daftar sekarang dan wujudkan prestasi terbaikmu!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/registration" className="inline-block">
                  <button className="bg-gradient-to-r from-[#fabe49] to-[#ffdc30] text-[#003049] px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Daftar Sekarang
                  </button>
                </Link>
                <Link href="/contact" className="inline-block">
                  <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    Konsultasi Gratis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Animation keyframes */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes glowText {
          0%, 100% { text-shadow: 0 0 5px rgba(0, 48, 73, 0.5); }
          50% { text-shadow: 0 0 20px rgba(0, 48, 73, 0.8); }
        }
        @keyframes tabEnter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-fade-slide { animation: fadeSlide 0.8s ease-out forwards; }
        .animate-scale-x { animation: scaleX 0.8s ease-out forwards; transform-origin: center; }
        .animate-glow-text { animation: glowText 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-bounce { animation: bounce 2s infinite; }
        .animate-container { animation: fadeIn 1s ease-out forwards; }
        .animate-image { animation: fadeSlide 1s ease-out forwards; }

        .tab-content {
          animation: tabEnter 0.6s cubic-bezier(0.33, 1, 0.68, 1) both;
        }
        .tab-content-active {
          animation: tabEnter 0.6s cubic-bezier(0.33, 1, 0.68, 1) both;
        }

        /* Glass morphism effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }

        /* Typography */
        .font-bold {
          font-weight: 700;
        }
        .font-medium {
          font-weight: 500;
        }
        .font-semibold {
          font-weight: 600;
        }

        /* Custom shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}