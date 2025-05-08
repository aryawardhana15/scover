'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap' });
const lora = Lora({ subsets: ['latin'], display: 'swap' });

// Impor Leaflet secara dinamis untuk menghindari masalah SSR
const MapWithNoSSR = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#1C2526] flex items-center justify-center">
      <div className="text-[#F4E1B9]">Loading map...</div>
    </div>
  ),
});

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Pastikan kode hanya berjalan di sisi klien
  useEffect(() => {
    setIsClient(true);
    
    // Fix Leaflet marker icon issue
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset status setelah 3 detik
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1C2526] to-[#4A2C2A]/10">
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
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover transform hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/70 to-[#1C2526]/20 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#F4E1B9] drop-shadow-[0_2px_10px_rgba(212,160,23,0.5)]">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-[#F4E1B9]/90 font-lora mt-4 max-w-xl mx-auto px-4">
              Mari wujudkan pelestarian budaya Jawa Timur bersama-sama
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#D4A017] mb-8">
              Mari Berkolaborasi
            </h2>
            <p className="text-lg md:text-xl text-[#F4E1B9] mb-8 font-lora leading-relaxed">
              Kami terbuka untuk ide, kolaborasi, dan pertanyaan seputar budaya Jawa Timur. Hubungi kami untuk memulai perjalanan budaya yang menginspirasi.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'info@dutabudayajatim.id',
                  link: 'mailto:info@dutabudayajatim.id',
                },
                {
                  icon: '📱',
                  title: 'Telepon',
                  content: '+62 812 3456 7890',
                  link: 'tel:+6281234567890',
                },
                {
                  icon: '📍',
                  title: 'Alamat',
                  content: 'Jl. Veteran No. 123, Surabaya, Jawa Timur',
                  link: 'https://maps.google.com?q=Jl.+Veteran+No.+123,+Surabaya',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#F4E1B9] rounded-xl shadow-[0_8px_30px_rgba(74,44,42,0.15)] hover:shadow-[0_8px_30px_rgba(212,160,23,0.3)] transition-all duration-300 animate-fade-in-up group border border-[#D4A017]/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl text-[#F28C38] group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div>
                    <h3 className="font-playfair font-semibold text-[#6B2D2F] mb-1 text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-[#1C2526] font-lora text-sm md:text-base">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Interactive Map */}
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-[#D4A017] mb-4">
                Temukan Kami
              </h3>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(74,44,42,0.15)] border border-[#D4A017]/20">
                {isClient && <MapWithNoSSR />}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-[#F4E1B9] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(74,44,42,0.15)] border border-[#D4A017]/20">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                    placeholder="Masukkan subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative py-3 px-6 rounded-lg font-lora font-semibold text-base md:text-lg transition-all duration-300 shadow-lg ${
                    isSubmitting
                      ? 'bg-[#4A2C2A]/50 text-[#F4E1B9]/50 cursor-not-allowed'
                      : 'bg-[#F28C38] text-[#1C2526] hover:bg-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group'
                  } overflow-hidden`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </span>
                  {!isSubmitting && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-[#F28C38] text-center font-lora text-sm md:text-base animate-fade-in bg-[#D4A017]/10 p-3 rounded-lg flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pesan berhasil terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
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
        .leaflet-container {
          background: #1C2526 !important;
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