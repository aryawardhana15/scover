'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState('visi');

  const tabContent = {
    visi: {
      title: 'Visi & Misi',
      icon: '🎯',
      content: (
        <>
          <p>
            <strong>Visi:</strong> Menjadi lembaga bimbingan belajar terdepan di Malang yang menghasilkan generasi berprestasi dan berkarakter unggul.
          </p>
          <p>
            <strong>Misi:</strong> Menyediakan pendidikan berkualitas tinggi dengan metode pembelajaran inovatif, tutor berpengalaman, dan fasilitas modern untuk membantu siswa meraih prestasi terbaik dalam ujian nasional, seleksi perguruan tinggi, dan studi ke luar negeri.
          </p>
        </>
      ),
    },
    sejarah: {
      title: 'Sejarah',
      icon: '📚',
      content: (
        <>
          <p>
            <strong>Scover Bimbel</strong> didirikan pada tahun 2014 dengan semangat untuk memberikan pendidikan berkualitas tinggi kepada siswa di Malang dan sekitarnya. Berawal dari keinginan untuk membantu siswa meraih prestasi terbaik dalam berbagai ujian.
          </p>
          <p>
            Selama lebih dari 10 tahun, Scover telah membantu ribuan siswa meraih impian mereka, mulai dari lulus ujian nasional, diterima di perguruan tinggi favorit, hingga berhasil studi ke luar negeri.
          </p>
        </>
      ),
    },
    nilai: {
      title: 'Nilai-Nilai',
      icon: '💎',
      content: (
        <>
          <p>
            <strong>Integritas:</strong> Kami mengutamakan kejujuran dan transparansi dalam setiap aspek pembelajaran.
          </p>
          <p>
            <strong>Kualitas:</strong> Komitmen untuk memberikan pendidikan terbaik dengan standar tinggi.
          </p>
          <p>
            <strong>Inovasi:</strong> Terus mengembangkan metode pembelajaran yang efektif dan modern.
          </p>
          <p>
            <strong>Dedikasi:</strong> Berkomitmen penuh untuk kesuksesan setiap siswa.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#F59E0B]/10 to-[#F97316]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-[#10B981]/10 to-[#059669]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative py-20 px-4 md:px-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-full text-sm font-semibold mb-6 animate-bounce">
            🎓 Tentang Scover Bimbel
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-[#1E40AF] to-gray-900 bg-clip-text text-transparent">
              Cerita Kami
            </span>
            <br />
            <span className="text-[#F59E0B]">Membangun Masa Depan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sejak 2014, Scover Bimbel telah menjadi mitra terpercaya dalam perjalanan pendidikan ribuan siswa di Malang
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-2xl bg-white shadow-2xl p-2 border border-gray-200">
              {['visi', 'sejarah', 'nilai'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab === 'visi' ? '🎯 Visi & Misi' : tab === 'sejarah' ? '📚 Sejarah' : '💎 Nilai-Nilai'}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl flex items-center justify-center text-3xl text-white mr-4">
                    {tabContent[activeTab].icon}
                  </div>
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
              <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Pencapaian Kami</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Siswa Lulus</span>
                    <span className="text-2xl font-bold">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tingkat Kelulusan</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tahun Pengalaman</span>
                    <span className="text-2xl font-bold">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tutor Ahli</span>
                    <span className="text-2xl font-bold">15+</span>
                  </div>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Fakta Menarik</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#1E40AF] rounded-full mr-3"></div>
                    <span className="text-gray-700">Didirikan tahun 2014</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full mr-3"></div>
                    <span className="text-gray-700">Berlokasi di Malang</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></div>
                    <span className="text-gray-700">4 Program Utama</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-3"></div>
                    <span className="text-gray-700">Fasilitas Modern</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-[#1E40AF] to-gray-900 bg-clip-text text-transparent">
                Tim
              </span>
              <span className="text-[#F59E0B]"> Profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dibalik kesuksesan Scover Bimbel, ada tim yang berdedikasi dan berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Direktur", role: "Pendiri & CEO", icon: "👨‍💼", color: "from-[#1E40AF] to-[#3B82F6]" },
              { name: "Manajer Akademik", role: "Kurikulum & Kualitas", icon: "👩‍💼", color: "from-[#10B981] to-[#059669]" },
              { name: "Koordinator Tutor", role: "Pengembangan SDM", icon: "👨‍🏫", color: "from-[#F59E0B] to-[#F97316]" },
              { name: "Marketing Manager", role: "Promosi & Kerjasama", icon: "👩‍💻", color: "from-[#8B5CF6] to-[#7C3AED]" }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {member.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-[#1E40AF] font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bergabunglah dengan <span className="text-[#F59E0B]">Scover Bimbel</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Raih impian pendidikanmu bersama tim tutor berpengalaman dan metode pembelajaran terbaik. Daftar sekarang dan wujudkan prestasi terbaikmu!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/registration" className="inline-block">
                  <button className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
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
          0%, 100% { text-shadow: 0 0 5px rgba(30, 64, 175, 0.5); }
          50% { text-shadow: 0 0 20px rgba(30, 64, 175, 0.8); }
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