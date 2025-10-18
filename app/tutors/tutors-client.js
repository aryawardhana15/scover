'use client';

import { useState } from 'react';
import Image from 'next/image';

const tutors = [
  {
    id: 1,
    name: 'Kak Aan',
    specialization: 'Matematika',
    experience: '5+ Tahun',
    bio: 'Expert dalam aljabar dan kalkulus dengan metode fun learning yang membuat matematika jadi menyenangkan',
    rating: 4.9,
    students: 150,
    achievements: ['Lulusan S2 Matematika ITB', '10x Juara Olimpiade Matematika', 'Best Tutor 2023'],
    subjects: ['Aljabar', 'Geometri', 'Kalkulus', 'Statistika'],
    color: 'from-[#1E40AF] to-[#3B82F6]'
  },
  {
    id: 2,
    name: 'Kak Adi',
    specialization: 'Fisika',
    experience: '4+ Tahun',
    bio: 'Spesialis fisika UTBK dengan track record 95% siswa lolos PTN favorit',
    rating: 4.8,
    students: 120,
    achievements: ['Lulusan Fisika UI', 'Peneliti di BRIN', '150+ Siswa Lolos PTN'],
    subjects: ['Mekanika', 'Termodinamika', 'Elektromagnetik', 'Fisika Modern'],
    color: 'from-[#10B981] to-[#059669]'
  },
  {
    id: 3,
    name: 'Kak Amri',
    specialization: 'Kimia',
    experience: '6+ Tahun',
    bio: 'Master kimia organik dan anorganik dengan pendekatan praktis dan eksperimen',
    rating: 4.9,
    students: 180,
    achievements: ['PhD Chemistry', 'Author 5 Buku Kimia', 'Pemenang Best Educator Award'],
    subjects: ['Kimia Organik', 'Kimia Anorganik', 'Biokimia', 'Kimia Fisik'],
    color: 'from-[#F59E0B] to-[#F97316]'
  },
  {
    id: 4,
    name: 'Kak Bejo',
    specialization: 'Bahasa Indonesia',
    experience: '7+ Tahun',
    bio: 'Ahli tata bahasa dan sastra dengan metode pembelajaran yang engaging dan kontekstual',
    rating: 4.7,
    students: 200,
    achievements: ['Lulusan Sastra UI', 'Juri Lomba Menulis Nasional', 'Penulis 3 Novel'],
    subjects: ['Tata Bahasa', 'Sastra', 'Penulisan Kreatif', 'PUEBI'],
    color: 'from-[#8B5CF6] to-[#7C3AED]'
  },
  {
    id: 5,
    name: 'Kak Diella',
    specialization: 'Bahasa Inggris',
    experience: '5+ Tahun',
    bio: 'Spesialis TOEFL/IELTS dengan metode praktis untuk speaking, listening, reading & writing',
    rating: 4.9,
    students: 160,
    achievements: ['TOEFL 650+', 'IELTS 8.5', 'Cambridge Certified Teacher'],
    subjects: ['TOEFL', 'IELTS', 'Grammar', 'Business English'],
    color: 'from-[#EC4899] to-[#BE185D]'
  },
  {
    id: 6,
    name: 'Kak Citra',
    specialization: 'Biologi',
    experience: '3+ Tahun',
    bio: 'Membuat biologi menjadi menarik dengan eksperimen dan studi kasus real-world',
    rating: 4.8,
    students: 140,
    achievements: ['Lulusan Biologi UGM', 'Peneliti Bioteknologi', 'Science Olympiad Coach'],
    subjects: ['Biologi Sel', 'Genetika', 'Evolusi', 'Ekologi'],
    color: 'from-[#059669] to-[#047857]'
  },
  {
    id: 7,
    name: 'Kak Doni',
    specialization: 'Sejarah',
    experience: '6+ Tahun',
    bio: 'Storyteller handal yang menghidupkan peristiwa sejarah dengan cara yang menarik',
    rating: 4.6,
    students: 110,
    achievements: ['Lulusan Sejarah Unair', 'Sejarawan Muda', 'History Documentary Writer'],
    subjects: ['Sejarah Indonesia', 'Sejarah Dunia', 'Sejarah Islam', 'Arkeologi'],
    color: 'from-[#DC2626] to-[#B91C1C]'
  },
  {
    id: 8,
    name: 'Kak Eka',
    specialization: 'Geografi',
    experience: '4+ Tahun',
    bio: 'Mengajarkan geografi modern dengan teknologi GIS dan analisis spasial',
    rating: 4.7,
    students: 130,
    achievements: ['Lulusan Geografi UGM', 'GIS Specialist', 'Environmental Consultant'],
    subjects: ['Geografi Fisik', 'Geografi Sosial', 'GIS', 'Peta & Globe'],
    color: 'from-[#0891B2] to-[#0E7490]'
  },
  {
    id: 9,
    name: 'Kak Fajar',
    specialization: 'Ekonomi',
    experience: '5+ Tahun',
    bio: 'Spesialis ekonomi dengan real case studies dan aplikasi praktis di kehidupan',
    rating: 4.8,
    students: 145,
    achievements: ['Lulusan FE UI', 'Financial Analyst', 'Economics Olympiad Mentor'],
    subjects: ['Mikroekonomi', 'Makroekonomi', 'Ekonomi Pembangunan', 'Akuntansi'],
    color: 'from-[#EA580C] to-[#C2410C]'
  },
  {
    id: 10,
    name: 'Kak Gita',
    specialization: 'Sosiologi',
    experience: '3+ Tahun',
    bio: 'Membimbing siswa menganalisis fenomena sosial dengan critical thinking',
    rating: 4.7,
    students: 95,
    achievements: ['Lulusan Sosiologi Unair', 'Social Researcher', 'Community Development Expert'],
    subjects: ['Sosiologi Dasar', 'Sosiologi Politik', 'Perubahan Sosial', 'Metode Penelitian'],
    color: 'from-[#7C3AED] to-[#6D28D9]'
  },
];

export default function TutorsClient() {
  const [selectedTutor, setSelectedTutor] = useState(null);

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
            👨‍🏫 Tim Profesional Kami
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-poppins px-4">
            <span className="bg-gradient-to-r from-gray-900 via-[#1E40AF] to-gray-900 bg-clip-text text-transparent">
              Tutor
            </span>
            <br />
            <span className="text-[#F59E0B]">Berpengalaman</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Kenali tim tutor ahli yang siap membimbing kesuksesan akademikmu dengan dedikasi dan metode terbaik
          </p>
        </div>

        {/* Tutors Grid - Clean & Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tutor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 p-8">
                {/* Profile Photo */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white group-hover:ring-8 group-hover:scale-105 transition-all duration-500">
                    <Image
                      src={`/images/tutors/${tutor.name.toLowerCase().replace('kak ', '')}.jpg`}
                      alt={tutor.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${tutor.color} flex items-center justify-center text-white text-5xl">👨‍🏫</div>`;
                      }}
                    />
                  </div>
                  {/* Rating Badge */}
                  <div className={`absolute -top-2 -right-2 bg-gradient-to-r ${tutor.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    ⭐ {tutor.rating}
                  </div>
                </div>

                {/* Tutor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#1E40AF] transition-colors duration-300 font-poppins">
                    {tutor.name}
                  </h3>
                  <div className={`inline-block bg-gradient-to-r ${tutor.color} bg-clip-text text-transparent font-bold text-lg mb-3`}>
                    {tutor.specialization}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 px-2">
                    {tutor.bio}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center gap-6 mb-6 pb-6 border-b border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF] font-poppins">{tutor.students}+</div>
                    <div className="text-xs text-gray-600">Siswa</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF] font-poppins">{tutor.experience.replace('+ Tahun', '+')}</div>
                    <div className="text-xs text-gray-600">Pengalaman</div>
                  </div>
                </div>

                {/* Subjects Pills */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {tutor.subjects.slice(0, 3).map((subject, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                      {subject}
                    </span>
                  ))}
                  {tutor.subjects.length > 3 && (
                    <span className="text-xs bg-[#1E40AF]/10 text-[#1E40AF] px-3 py-1 rounded-full font-medium">
                      +{tutor.subjects.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedTutor(tutor)}
                  className={`w-full bg-gradient-to-r ${tutor.color} text-white py-3.5 px-6 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn`}
                >
                  <span className="relative z-10">Lihat Profil Lengkap</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tutor.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: '10+', label: 'Tutor Ahli', icon: '👨‍🏫' },
            { number: '1500+', label: 'Siswa Aktif', icon: '👥' },
            { number: '95%', label: 'Success Rate', icon: '⭐' },
            { number: '50+', label: 'Mata Pelajaran', icon: '📚' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#1E40AF] font-poppins mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tutor Detail Modal */}
      {selectedTutor && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedTutor(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full p-8 shadow-2xl animate-scale-in my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 rounded-full p-2"
              onClick={() => setSelectedTutor(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal Content */}
            <div className="text-center mb-8">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <Image
                  src={`/images/tutors/${selectedTutor.name.toLowerCase().replace('kak ', '')}.jpg`}
                  alt={selectedTutor.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${selectedTutor.color} flex items-center justify-center text-white text-5xl">👨‍🏫</div>`;
                  }}
                />
              </div>
              <h2 className="text-4xl font-bold text-[#1E40AF] mb-2 font-poppins">{selectedTutor.name}</h2>
              <div className={`inline-block bg-gradient-to-r ${selectedTutor.color} bg-clip-text text-transparent font-bold text-xl mb-4`}>
                {selectedTutor.specialization}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedTutor.bio}</p>

              {/* Stats */}
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E40AF]">⭐ {selectedTutor.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E40AF]">{selectedTutor.students}+</div>
                  <div className="text-sm text-gray-600">Siswa</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E40AF]">{selectedTutor.experience}</div>
                  <div className="text-sm text-gray-600">Pengalaman</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pencapaian</h3>
              <div className="space-y-3">
                {selectedTutor.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#10B981] mr-3 flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mata Pelajaran</h3>
              <div className="flex flex-wrap gap-3">
                {selectedTutor.subjects.map((subject, idx) => (
                  <span key={idx} className={`bg-gradient-to-r ${selectedTutor.color} text-white px-4 py-2 rounded-xl font-semibold`}>
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className={`bg-gradient-to-r ${selectedTutor.color} text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                Konsultasi dengan {selectedTutor.name.split(' ')[1]}
              </button>
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
            transform: scale(0.95);
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
