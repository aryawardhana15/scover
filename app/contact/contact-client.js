'use client';

import { useState } from 'react';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xyznvqlr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Form Kontak - Scover Bimbel'
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#003049]/5 to-[#0c5681]/10"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-4 w-16 h-16 opacity-20 md:w-24 md:h-24 md:left-10" style={{animation: 'floatSlow 8s ease-in-out infinite'}}>
        <div className="w-full h-full bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-full flex items-center justify-center text-white text-2xl">
          📞
        </div>
      </div>
      <div className="absolute bottom-1/4 right-4 w-20 h-20 opacity-20 md:w-32 md:h-32 md:right-16" style={{animation: 'floatFast 10s ease-in-out infinite 2s'}}>
        <div className="w-full h-full bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center text-white text-3xl">
          💬
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003049] to-[#0c5681] flex items-center justify-center">
          <div className="text-center" style={{animation: 'fadeIn 1s ease-out forwards'}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-white/80 mt-4 max-w-xl mx-auto px-4">
              Konsultasikan kebutuhan pendidikanmu dengan tim kami
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Info */}
          <div style={{animation: 'fadeInLeft 0.8s ease-out forwards'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-8">
              Konsultasi Gratis
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Tim kami siap membantu Anda menentukan program yang tepat sesuai kebutuhan dan tujuan pendidikan. Konsultasi gratis untuk semua calon siswa.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'connect@scover.org',
                  link: 'mailto:connect@scover.org',
                },
                {
                  icon: '📱',
                  title: 'WhatsApp',
                  content: '+62 896-9705-3591',
                  link: 'https://wa.me/6289697053591',
                },
                {
                  icon: '📍',
                  title: 'Alamat',
                  content: 'Jl. Danau Toba No.24 Blok E6, Sawojajar, Kota Malang, Jawa Timur',
                  link: 'https://maps.google.com/?q=Jl+Danau+Toba+24+Blok+E6+Sawojajar+Malang',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200"
                  style={{animation: `fadeInUp 0.8s ease-out forwards ${index * 100}ms`}}
                >
                  <div className="text-2xl md:text-3xl text-[#003049] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Interactive Map */}
            <div className="mt-8" style={{animation: 'fadeInUp 0.8s ease-out forwards 300ms'}}>
              <h3 className="text-2xl md:text-3xl font-bold text-[#003049] mb-4">
                Lokasi Kami
              </h3>
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=Jl+Danau+Toba+24+Blok+E6+Sawojajar+Malang+Jawa+Timur&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Map of Malang"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{animation: 'fadeInRight 0.8s ease-out forwards'}}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Masukkan subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full relative py-3 px-6 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#003049] to-[#0c5681] hover:shadow-[0_0_20px_rgba(0,48,73,0.7)] group overflow-hidden'
                  } text-white`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </span>
                  {!isSubmitting && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#0c5681] to-[#003049] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Pesan berhasil dikirim! Tim kami akan menghubungi Anda segera.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

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
        @media (max-width: 767px) {
          .group:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}