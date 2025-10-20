'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PartnersClient() {
  const partners = [
    {
      name: 'AR ROHMAH IIBS KAMPUS II',
      logo: '/images/partners/AR ROHMAH IIBS KAMPUS II.png'
    },
    {
      name: 'MA AL UMM',
      logo: '/images/partners/MA AL UMM.png'
    },
    {
      name: 'MAN 1',
      logo: '/images/partners/MAN 1.png'
    },
    {
      name: 'SAMAN 1 TUMPANG',
      logo: '/images/partners/SAMAN 1 TUMPANG.png'
    },
    {
      name: 'SEKOLAH ALAM INSAN MULIA',
      logo: '/images/partners/SEKOLAH ALAM INSAN MULIA.png'
    },
    {
      name: 'SMA BAITUL MANSHURIN',
      logo: '/images/partners/SMA BAITUL MANSHURIN.png'
    },
    {
      name: 'SMA BSS MALANG',
      logo: '/images/partners/SMA BSS MALANG.png'
    },
    {
      name: 'SMA IIBS AL IZZAH',
      logo: '/images/partners/SMA IIBS AL IZZAH.png'
    },
    {
      name: 'SMA WIJAYA PUTRA',
      logo: '/images/partners/SMA WIJAYA PUTRA.png'
    },
    {
      name: 'SMAN 7 MALANG',
      logo: '/images/partners/SMAN 7 MALANG.png'
    },
    {
      name: 'SMK TELKOM MALANG',
      logo: '/images/partners/SMK TELKOM MALANG.png'
    },
    {
      name: 'PARTNER 1',
      logo: '/images/partners/PARTNER 1.png'
    },
    {
      name: 'PARTNER 2',
      logo: '/images/partners/PARTNER 2.png'
    },
    {
      name: 'PARTNER 3',
      logo: '/images/partners/PARTNER 3.png'
    },
    {
      name: 'PARTNER 4',
      logo: '/images/partners/PARTNER 4.png'
    },
    {
      name: 'PARTNER 5',
      logo: '/images/partners/PARTNER 5.png'
    },
    {
      name: 'PARTNER 6',
      logo: '/images/partners/PARTNER 6.png'
    },
    {
      name: 'PARTNER 7',
      logo: '/images/partners/PARTNER 7.png'
    },
    {
      name: 'PARTNER 8',
      logo: '/images/partners/PARTNER 8.png'
    },
    {
      name: 'PARTNER 9',
      logo: '/images/partners/PARTNER 9.png'
    },
    {
      name: 'PARTNER 10',
      logo: '/images/partners/PARTNER 10.png'
    },
    {
      name: 'PARTNER 11',
      logo: '/images/partners/PARTNER 11.png'
    },
    {
      name: 'PARTNER 12',
      logo: '/images/partners/PARTNER 12.png'
    },
    {
      name: 'PARTNER 13',
      logo: '/images/partners/PARTNER 13.png'
    },
    {
      name: 'PARTNER 14',
      logo: '/images/partners/PARTNER 14.png'
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

      {/* Partners Logo Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jaringan <span className="text-[#003049]">Kerjasama</span> Kami
            </h2>
            <p className="text-xl text-gray-600">
              Lebih dari 25 institusi pendidikan telah mempercayai Scover Bimbel
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center border border-gray-100 hover:border-[#003049]/20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="object-contain max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-xl flex items-center justify-center">
                          <div class="text-white text-xs font-bold text-center px-2">${partner.name}</div>
                        </div>
                      `;
                    }}
                  />
                </div>
                {/* <p className="text-xs text-gray-600 mt-2 text-center font-medium">
                  {partner.name}
                </p> */}
              </div>
            ))}
          </div>
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
