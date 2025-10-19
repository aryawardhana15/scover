'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PartnersClient() {
  const partners = [
    {
      category: 'Sekolah Menengah Atas',
      schools: [
        { name: 'SMA Ar-Rohmah', type: 'SMA Swasta', location: 'Malang', logo: '🏫' },
        { name: 'SMA Negeri 1 Malang', type: 'SMA Negeri', location: 'Malang', logo: '🏫' },
        { name: 'SMA Negeri 3 Malang', type: 'SMA Negeri', location: 'Malang', logo: '🏫' },
        { name: 'SMA Negeri 5 Malang', type: 'SMA Negeri', location: 'Malang', logo: '🏫' },
        { name: 'SMA Katolik Frateran', type: 'SMA Swasta', location: 'Malang', logo: '🏫' },
        { name: 'SMA Islam Al-Ma\'arif', type: 'SMA Swasta', location: 'Malang', logo: '🏫' }
      ]
    },
    {
      category: 'Sekolah Menengah Pertama',
      schools: [
        { name: 'SMP Negeri 1 Malang', type: 'SMP Negeri', location: 'Malang', logo: '🏫' },
        { name: 'SMP Negeri 2 Malang', type: 'SMP Negeri', location: 'Malang', logo: '🏫' },
        { name: 'SMP Negeri 4 Malang', type: 'SMP Negeri', location: 'Malang', logo: '🏫' },
        { name: 'SMP Islam Al-Ma\'arif', type: 'SMP Swasta', location: 'Malang', logo: '🏫' },
        { name: 'SMP Katolik Frateran', type: 'SMP Swasta', location: 'Malang', logo: '🏫' }
      ]
    },
    {
      category: 'Madrasah',
      schools: [
        { name: 'MAN 1 Kota Malang', type: 'MAN', location: 'Malang', logo: '🕌' },
        { name: 'MAN 2 Kota Malang', type: 'MAN', location: 'Malang', logo: '🕌' },
        { name: 'MTs Negeri 1 Malang', type: 'MTs', location: 'Malang', logo: '🕌' },
        { name: 'MTs Al-Ma\'arif', type: 'MTs Swasta', location: 'Malang', logo: '🕌' }
      ]
    },
    {
      category: 'Sekolah Kejuruan',
      schools: [
        { name: 'SMK Telkom Malang', type: 'SMK Negeri', location: 'Malang', logo: '🔧' },
        { name: 'SMK Negeri 1 Malang', type: 'SMK Negeri', location: 'Malang', logo: '🔧' },
        { name: 'SMK Negeri 3 Malang', type: 'SMK Negeri', location: 'Malang', logo: '🔧' },
        { name: 'SMK Muhammadiyah 1 Malang', type: 'SMK Swasta', location: 'Malang', logo: '🔧' }
      ]
    },
    {
      category: 'Universitas & Perguruan Tinggi',
      schools: [
        { name: 'Universitas Brawijaya', type: 'Universitas Negeri', location: 'Malang', logo: '🎓' },
        { name: 'Universitas Negeri Malang', type: 'Universitas Negeri', location: 'Malang', logo: '🎓' },
        { name: 'Universitas Muhammadiyah Malang', type: 'Universitas Swasta', location: 'Malang', logo: '🎓' },
        { name: 'Politeknik Negeri Malang', type: 'Politeknik', location: 'Malang', logo: '🎓' }
      ]
    },
    {
      category: 'Institusi Pendidikan Lainnya',
      schools: [
        { name: 'Dinas Pendidikan Kota Malang', type: 'Pemerintah', location: 'Malang', logo: '🏛️' },
        { name: 'Kantor Cabang Dinas Pendidikan Jatim', type: 'Pemerintah', location: 'Malang', logo: '🏛️' },
        { name: 'Lembaga Penjaminan Mutu Pendidikan', type: 'LPMP', location: 'Malang', logo: '🏛️' }
      ]
    }
  ];

  const benefits = [
    {
      illustration: '/images/logo/kerjasama strategis.png',
      title: 'Kerjasama Strategis',
      description: 'Menjalin kemitraan yang saling menguntungkan dengan institusi pendidikan terpercaya'
    },
    {
      illustration: '/images/logo/Program khusus.png',
      title: 'Program Khusus',
      description: 'Menyediakan program khusus untuk siswa dari sekolah mitra dengan harga khusus'
    },
    {
      illustration: '/images/logo/targeted learning.png',
      title: 'Targeted Learning',
      description: 'Pembelajaran yang disesuaikan dengan kurikulum dan kebutuhan sekolah mitra'
    },
    {
      illustration: '/images/logo/laporan berkala.png',
      title: 'Laporan Berkala',
      description: 'Memberikan laporan progress siswa secara berkala kepada sekolah mitra'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 px-6 bg-gradient-to-br from-[#003049] to-[#0c5681] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/education-pattern.png')] bg-repeat bg-[length:300px] mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Mitra <span className="text-[#fabe49]">Kerjasama</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Bekerjasama dengan sekolah, universitas, dan institusi pendidikan terpercaya untuk memberikan pendidikan terbaik
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Keuntungan <span className="text-[#003049]">Kerjasama</span>
            </h2>
            <p className="text-xl text-gray-600">
              Mengapa sekolah memilih bekerjasama dengan Scover Bimbel?
            </p>
          </div>

          {/* Horizontal Banner Layout */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-8 text-center group hover:bg-gray-50 transition-all duration-300">
                  {/* Illustration */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-32 h-32">
                      <Image
                        src={benefit.illustration}
                        alt={benefit.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-32 h-32 bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-2xl flex items-center justify-center">
                              <div class="text-white text-4xl font-bold">${benefit.title.charAt(0)}</div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#003049] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jaringan <span className="text-[#003049]">Kerjasama</span> Kami
            </h2>
            <p className="text-xl text-gray-600">
              Lebih dari 50 institusi pendidikan telah mempercayai Scover Bimbel
            </p>
          </div>

          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.schools.map((school, schoolIndex) => (
                  <div key={schoolIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[#003049] p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-lg flex items-center justify-center text-2xl mr-4">
                        {school.logo}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{school.name}</h4>
                        <p className="text-sm text-gray-600">{school.type}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-[#003049] rounded-full mr-2"></span>
                        <span>Lokasi: {school.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-[#fabe49] rounded-full mr-2"></span>
                        <span>Status: Mitra Aktif</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proses <span className="text-[#003049]">Kerjasama</span>
            </h2>
            <p className="text-xl text-gray-600">
              Langkah-langkah untuk menjadi mitra Scover Bimbel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Kontak Awal',
                description: 'Hubungi tim kami untuk diskusi awal tentang kebutuhan kerjasama'
              },
              {
                step: '02',
                title: 'Presentasi Program',
                description: 'Kami akan mempresentasikan program dan keuntungan kerjasama'
              },
              {
                step: '03',
                title: 'Kesepakatan',
                description: 'Menandatangani MoU dan menentukan detail kerjasama'
              },
              {
                step: '04',
                title: 'Implementasi',
                description: 'Memulai program kerjasama dan monitoring berkala'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#003049] to-[#0c5681]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ingin Menjadi Mitra Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan jaringan kerjasama Scover Bimbel dan berikan yang terbaik untuk siswa Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="bg-white text-[#003049] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300">
                Hubungi Tim Kerjasama
              </button>
            </Link>
            <Link href="/programs">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#003049] transition-all duration-300">
                Lihat Program Kerjasama
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
