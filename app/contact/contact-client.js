'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/education-pattern.png')] bg-repeat bg-[length:200px] animate-pattern-scroll md:bg-[length:300px]"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="animate-float-slow absolute top-1/4 left-4 w-16 h-16 opacity-20 md:w-24 md:h-24 md:left-10">
        <div className="w-full h-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center text-white text-2xl">
          📞
        </div>
      </div>
      <div className="animate-float-fast absolute bottom-1/4 right-4 w-20 h-20 opacity-20 md:w-32 md:h-32 md:right-16">
        <div className="w-full h-full bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center text-white text-3xl">
          💬
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(30,64,175,0.5)]">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mt-4 max-w-xl mx-auto px-4">
              Konsultasikan kebutuhan pendidikanmu dengan tim kami
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex rounded-full bg-white shadow-lg p-1 border border-gray-200">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'general'
                ? 'bg-[#1E40AF] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Konsultasi
          </button>
          <button
            onClick={() => setActiveTab('sponsorship')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'sponsorship'
                ? 'bg-[#1E40AF] text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Kerjasama
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {activeTab === 'general' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-8">
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
                    content: 'info@scoverbimbel.com',
                    link: 'mailto:info@scoverbimbel.com',
                  },
                  {
                    icon: '📱',
                    title: 'WhatsApp',
                    content: '+62 896 9705 3591',
                    link: 'https://wa.me/6289697053591',
                  },
                  {
                    icon: '📍',
                    title: 'Alamat',
                    content: 'Malang, Jawa Timur, Indonesia',
                    link: 'https://www.google.com/maps/place/Malang,+Jawa+Timur,+Indonesia',
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group border border-gray-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl md:text-3xl text-[#1E40AF] group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
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
              <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-4">
                  Lokasi Kami
                </h3>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps?q=Malang,+Jawa+Timur,+Indonesia&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <form
                action="https://formspree.io/f/mjkwpbdg"
                method="POST"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full relative py-3 px-6 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:shadow-[0_0_20px_rgba(30,64,175,0.7)] group overflow-hidden"
                  >
                    <span className="relative z-10">Kirim Pesan</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Partnership Info */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] mb-8">
                Kerjasama Institusi
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Bekerjasama dengan sekolah, universitas, dan institusi pendidikan untuk memberikan program bimbingan belajar yang berkualitas. Kami menawarkan berbagai bentuk kerjasama yang saling menguntungkan.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '💎',
                    title: 'Keuntungan Kerjasama',
                    content: 'Program khusus untuk siswa, harga khusus, laporan progress berkala, dan dukungan penuh untuk kesuksesan siswa.',
                  },
                  {
                    icon: '🤝',
                    title: 'Bentuk Kerjasama',
                    content: 'Kerjasama bisa berupa program khusus, diskon khusus, atau layanan tambahan untuk mendukung pembelajaran siswa.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
                  >
                    <div className="text-2xl md:text-3xl text-[#1E40AF]">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg md:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partnership Benefits */}
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-4">
                  Manfaat Kerjasama
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Program khusus untuk siswa',
                    'Harga khusus dan diskon',
                    'Laporan progress berkala',
                    'Konsultasi akademik gratis',
                    'Try out dan simulasi ujian',
                    'Dukungan penuh untuk kesuksesan siswa'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
                      <span className="text-[#1E40AF] mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Partnership Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Minat Kerjasama?
                </h3>
                <p className="text-gray-600 mb-6">
                  Isi formulir berikut ini dan tim kami akan menghubungi Anda untuk membahas peluang kerjasama institusi.
                </p>

  <form
  onSubmit={(e) => e.preventDefault()} // Mencegah pengiriman default
  className="space-y-6"
>
  <input type="hidden" name="form_type" value="partnership" />

  <div>
    <label htmlFor="company" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
      Nama Sekolah/Institusi
    </label>
    <input
      type="text"
      id="company"
      name="company"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
      placeholder="Nama sekolah/institusi Anda"
    />
  </div>

  <div>
    <label htmlFor="contact_person" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
      Nama Kontak
    </label>
    <input
      type="text"
      id="contact_person"
      name="contact_person"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
      placeholder="Nama lengkap Anda"
    />
  </div>

  <div>
    <label htmlFor="sponsor_email" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      type="email"
      id="sponsor_email"
      name="email"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
      placeholder="Alamat email Anda"
    />
  </div>

  <div>
    <label htmlFor="phone" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
      Nomor Telepon/WhatsApp
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
      placeholder="Nomor telepon Anda (contoh: +6281234567890)"
    />
  </div>

  <div>
    <label htmlFor="sponsor_message" className="block text-sm md:text-base font-medium text-gray-700 mb-1">
      Pesan Tambahan
    </label>
    <textarea
      id="sponsor_message"
      name="message"
      rows={3}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
      placeholder="Tulis pesan tambahan Anda..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full relative py-3 px-6 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-lg bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white hover:shadow-[0_0_20px_rgba(30,64,175,0.7)] group overflow-hidden"
    onClick={(e) => {
      e.preventDefault();
      const company = document.getElementById('company').value;
      const contactPerson = document.getElementById('contact_person').value;
      const email = document.getElementById('sponsor_email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('sponsor_message').value;

      // Format pesan WhatsApp yang lebih rapi
      const whatsappMessage = `📩 *Permohonan Kerjasama Scover Bimbel* 📩%0A%0A------------------------%0A*Nama Sekolah/Institusi:* ${company}%0A*Nama Kontak:* ${contactPerson}%0A*Email:* ${email}%0A*Nomor Telepon/WhatsApp:* ${phone}%0A*Pesan Tambahan:* ${message || 'Tidak ada pesan tambahan'}%0A------------------------%0A%0A📌 Terima kasih atas minat Anda!`;
      
      // Nomor WhatsApp tujuan
      const whatsappNumber = '+6285708829751';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Buka WhatsApp di tab/window baru
      window.open(whatsappUrl, '_blank');
    }}
  >
    <span className="relative z-10">Kirim Permohonan Kerjasama</span>
    <span className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </button>
</form>
              </div>
            </div>
          </div>
        )}
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