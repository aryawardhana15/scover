'use client';

import { useState } from 'react';
import Link from 'next/link';

// Program categories with all sub-programs
const programCategories = [
  {
    id: 'primary-secondary',
    title: 'Primary and Secondary Education',
    subtitle: 'Pendidikan Dasar dan Menengah',
    description: 'Program pembelajaran dasar hingga persiapan masuk perguruan tinggi dan kedinasan',
    icon: '🎓',
    color: 'from-[#1E40AF] to-[#3B82F6]',
    textColor: 'text-white',
    programs: [
      {
        id: 'kelas-reguler-sd',
        title: 'Kelas Reguler SD',
        description: 'Program pembelajaran dasar yang dirancang untuk membangun fondasi akademik kuat dengan pendekatan belajar yang seru, interaktif, dan sesuai gaya belajar anak.',
        icon: '📚',
        features: ['Pembelajaran Interaktif', 'Fondasi Akademik Kuat', 'Gaya Belajar Anak', 'Materi Menyenangkan']
      },
      {
        id: 'kelas-reguler-smp',
        title: 'Kelas Reguler SMP',
        description: 'Bimbingan belajar yang fokus pada penguasaan konsep dan strategi belajar efektif agar siswa siap menghadapi ujian sekolah maupun jenjang berikutnya.',
        icon: '📖',
        features: ['Penguasaan Konsep', 'Strategi Belajar Efektif', 'Persiapan Ujian', 'Konsultasi Akademik']
      },
      {
        id: 'kelas-reguler-sma',
        title: 'Kelas Reguler SMA',
        description: 'Program intensif untuk membantu siswa SMA memahami konsep lintas mapel secara mendalam, sekaligus mempersiapkan diri menghadapi masa transisi ke perguruan tinggi.',
        icon: '🎯',
        features: ['Konsep Lintas Mapel', 'Persiapan Perguruan Tinggi', 'Pembelajaran Mendalam', 'Transisi Akademik']
      },
      {
        id: 'persiapan-snbt',
        title: 'Persiapan SNBT',
        description: 'Program unggulan Scover untuk menghadapi seleksi masuk perguruan tinggi negeri. Materi dirancang berdasarkan blueprint terbaru SNBT dengan strategi belajar SPARE Learning khas Scover.',
        icon: '🏆',
        features: ['Blueprint Terbaru SNBT', 'SPARE Learning', 'Strategi Teruji', 'Passing Grade Tinggi']
      },
      {
        id: 'persiapan-kedinasan',
        title: 'Persiapan Kedinasan',
        description: 'Kelas intensif untuk mempersiapkan calon taruna menghadapi ujian seleksi sekolah kedinasan dan TNI/Polri. Fokus pada ketahanan belajar, disiplin, serta latihan soal yang realistis dan menantang.',
    icon: '🏛️',
        features: ['Ketahanan Belajar', 'Disiplin Tinggi', 'Latihan Realistis', 'Persiapan Fisik']
      },
      {
        id: 'scover-codelab',
        title: 'Scover Codelab',
        description: 'Program pembelajaran digital dari Scover yang dirancang untuk mengenalkan dunia teknologi dan pemrograman kepada pelajar dan mahasiswa. Melalui pendekatan project-based learning, peserta belajar coding, membuat website, hingga aplikasi sederhana.',
        icon: '💻',
        features: ['Project-Based Learning', 'Coding & Programming', 'Website Development', 'Problem Solving']
      }
    ]
  },
  {
    id: 'overseas',
    title: 'Scover Overseas Program',
    subtitle: 'Scoverseas',
    description: 'Program persiapan studi dan kerja di luar negeri dengan sertifikasi internasional',
    icon: '✈️',
    color: 'from-[#10B981] to-[#059669]',
    textColor: 'text-white',
    programs: [
      {
        id: 'ausbildung-preparation',
        title: 'Ausbildung Preparation Class',
        description: 'Program persiapan lengkap untuk siswa yang ingin mengikuti program Ausbildung di Jerman. Meliputi bahasa, budaya, dan kesiapan kerja profesional.',
        icon: '🇩🇪',
        features: ['Bahasa Jerman', 'Budaya Jerman', 'Kesiapan Kerja', 'Visa Support']
      },
      {
        id: 'toefl-preparation',
        title: 'TOEFL Preparation Class',
        description: 'Kelas strategi dan latihan intensif untuk mencapai skor TOEFL terbaik. Didesain dengan simulasi tes, tips manajemen waktu, dan pembahasan terarah setiap sesi.',
        icon: '📝',
        features: ['Simulasi Tes', 'Manajemen Waktu', 'Strategi Pengerjaan', 'Target Skor Tinggi']
      },
      {
        id: 'ielts-preparation',
        title: 'IELTS Preparation Class',
        description: 'Program komprehensif untuk meningkatkan kemampuan Listening, Reading, Writing, dan Speaking dengan pendekatan komunikatif dan berbasis praktik nyata.',
        icon: '🗣️',
        features: ['4 Skills Lengkap', 'Pendekatan Komunikatif', 'Praktik Nyata', 'Native Speaker']
      },
      {
        id: 'japanese-class',
        title: 'Japanese Class',
        description: 'Pembelajaran bahasa Jepang yang menyenangkan dan aplikatif, dengan fokus pada komunikasi sehari-hari serta persiapan JLPT bagi yang ingin melanjutkan studi atau bekerja di Jepang.',
        icon: '🇯🇵',
        features: ['Komunikasi Sehari-hari', 'Persiapan JLPT', 'Budaya Jepang', 'Aplikatif']
      },
      {
        id: 'mandarin-class',
        title: 'Mandarin Class',
        description: 'Program bahasa Mandarin interaktif yang menekankan pada pelafalan, kosakata, dan percakapan praktis, cocok untuk kebutuhan akademik maupun karier.',
        icon: '🇨🇳',
        features: ['Pelafalan Akurat', 'Kosakata Lengkap', 'Percakapan Praktis', 'HSK Preparation']
      },
      {
        id: 'arabic-class',
        title: 'Arabic Class',
        description: 'Belajar bahasa Arab dari dasar dengan metode komunikatif. Fokus pada kemampuan membaca, menulis, dan berbicara yang dapat diaplikasikan di dunia akademik dan profesional.',
        icon: '🇸🇦',
        features: ['Metode Komunikatif', 'Reading & Writing', 'Speaking Practice', 'Academic Arabic']
      }
    ]
  },
  {
    id: 'campus-connect',
    title: 'Scover Campus Connect',
    subtitle: 'Professional Development',
    description: 'Program pengembangan profesional untuk mahasiswa dan alumni',
    icon: '🏢',
    color: 'from-[#8B5CF6] to-[#7C3AED]',
    textColor: 'text-white',
    programs: [
      {
        id: 'professional-ready',
        title: 'Scover Professional Ready',
        description: 'Program ini membantu mahasiswa dan alumni mempersiapkan ujian sertifikasi bergengsi seperti CPNS, TOEFL/IELTS, CFA, CPA, dan Ujian Akuntan dengan sistem belajar terarah dan pengajar berpengalaman.',
        icon: '💼',
        features: ['Sertifikasi Bergengsi', 'CPNS Preparation', 'CFA & CPA', 'Pengajar Berpengalaman']
      },
      {
        id: 'class-boost',
        title: 'Scover ClassBoost',
        description: 'Program ini jadi solusi untuk mata kuliah "killer". Melalui pendekatan personal dan tutor ahli, Scover ClassBoost membantu mahasiswa menaklukkan tantangan akademik dan meningkatkan IPK secara signifikan.',
        icon: '📈',
        features: ['Mata Kuliah Killer', 'Pendekatan Personal', 'Tutor Ahli', 'Peningkatan IPK']
      },
      {
        id: 'skill-forge',
        title: 'Scover SkillForge',
        description: 'Dunia kerja butuh lebih dari sekadar nilai akademik. Scover SkillForge membekali mahasiswa dengan keterampilan penting seperti public speaking, leadership, teamwork, dan personal branding.',
        icon: '🎯',
        features: ['Public Speaking', 'Leadership', 'Teamwork', 'Personal Branding']
      },
      {
        id: 'career-bridge',
        title: 'Scover CareerBridge',
        description: 'Scover CareerBridge menghubungkan mahasiswa dengan dunia industri melalui pelatihan rekrutmen, simulasi tes, dan pembekalan karier yang relevan. Kolaborasi ini membantu kampus meningkatkan employment rate.',
        icon: '🌉',
        features: ['Pelatihan Rekrutmen', 'Simulasi Tes', 'Pembekalan Karier', 'Industry Connection']
      },
      {
        id: 'scholar-link',
        title: 'Scover ScholarLink',
        description: 'Scover ScholarLink memberikan dukungan penuh untuk alumni yang ingin melanjutkan studi atau meraih sertifikasi profesional. Program ini memperkuat ikatan antara kampus dan alumninya lewat beasiswa dan pendampingan eksklusif.',
        icon: '🎓',
        features: ['Beasiswa', 'Pendampingan Eksklusif', 'Sertifikasi Profesional', 'Alumni Network']
      }
    ]
  }
];

export default function ProgramsClient() {
  const [selectedCategory, setSelectedCategory] = useState('primary-secondary');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const currentCategory = programCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-orange-50 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#F59E0B]/10 to-[#F97316]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            📚 Program Unggulan
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-poppins px-4">
            <span className="bg-gradient-to-r from-gray-900 via-[#1E40AF] to-gray-900 bg-clip-text text-transparent">
              Program
            </span>
            <br />
            <span className="text-[#F59E0B]">Terlengkap</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Temukan program yang tepat untuk mencapai tujuan pendidikan dan karier Anda
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programCategories.map((category) => (
              <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
              </button>
            ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentCategory?.programs.map((program, index) => (
            <div
              key={program.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProgram(program)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${currentCategory.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl">{program.icon}</div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold">Detail</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">{program.title}</h3>
                  </div>
                  
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {program.description}
                </p>
                  
                  {/* Features */}
                <div className="space-y-2">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                          <path d="M6.564.75L3.5 3.814 1.436 1.75.75 2.436l2.75 2.75L7.25.75z"/>
                        </svg>
                      </div>
                      <span className="text-xs text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${currentCategory.color}`}></div>
            </div>
          ))}
        </div>

        {/* Program Detail Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className={`bg-gradient-to-br ${currentCategory.color} p-8 text-white relative`}>
              <button
                onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{selectedProgram.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold font-poppins">{selectedProgram.title}</h2>
                    <p className="text-white/90 text-sm">{currentCategory.subtitle}</p>
                </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProgram.description}</p>

                <h3 className="text-lg font-bold mb-4 text-gray-900">Fitur Program:</h3>
                <div className="space-y-3">
                  {selectedProgram.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 8 8">
                          <path d="M6.564.75L3.5 3.814 1.436 1.75.75 2.436l2.75 2.75L7.25.75z"/>
                      </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
              </div>
              
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link 
                    href="/registration"
                    className={`flex-1 bg-gradient-to-r ${currentCategory.color} text-white py-3 px-6 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                      Daftar Sekarang
                  </Link>
                  <Link 
                    href="/contact"
                    className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-bold text-center hover:bg-gray-50 transition-all duration-300"
                  >
                      Konsultasi Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}