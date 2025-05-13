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
    <div className="relative min-h-screen bg-gradient-to-b from-[#1C2526] to-[#4A2C2A]/10">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern.png')] bg-repeat bg-[length:200px] animate-pattern-scroll md:bg-[length:300px]"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="animate-float-slow absolute top-1/4 left-4 w-16 h-16 opacity-20 md:w-24 md:h-24 md:left-10">
        <Image src="/images/ornament2.png" alt="" width={96} height={96} />
      </div>
      <div className="animate-float-fast absolute bottom-1/4 right-4 w-20 h-20 opacity-20 md:w-32 md:h-32 md:right-16">
        <Image src="/images/ornament3.png" alt="" width={128} height={128} />
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

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8">
        <div className="inline-flex rounded-full bg-[#1C2526] shadow-lg p-1 border border-[#D4A017]/20">
          <button
            onClick={() => setActiveTab('general')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'general'
                ? 'bg-[#D4A017] text-[#1C2526]'
                : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
            }`}
          >
            Kontak Umum
          </button>
          <button
            onClick={() => setActiveTab('sponsorship')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === 'sponsorship'
                ? 'bg-[#D4A017] text-[#1C2526]'
                : 'text-[#F4E1B9] hover:bg-[#4A2C2A]/50'
            }`}
          >
            Sponsorship
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {activeTab === 'general' ? (
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
                    content: 'Jawa Timur, Indonesia',
                    link: 'https://www.google.com/maps/place/Jawa+Timur,+Indonesia',
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
                  <iframe
                    src="https://www.google.com/maps?q=Jawa+Timur,+Indonesia&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526]/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <form
                action="https://formspree.io/f/mjkwpbdg"
                method="POST"
                className="bg-[#F4E1B9] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(74,44,42,0.15)] border border-[#D4A017]/20"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
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
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full relative py-3 px-6 rounded-lg font-lora font-semibold text-base md:text-lg transition-all duration-300 shadow-lg bg-[#F28C38] text-[#1C2526] hover:bg-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden"
                  >
                    <span className="relative z-10">Kirim Pesan</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Sponsorship Info */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#D4A017] mb-8">
                Sponsorship Duta Budaya
              </h2>
              <p className="text-lg md:text-xl text-[#F4E1B9] mb-8 font-lora leading-relaxed">
                Jadilah bagian dari pelestarian budaya Jawa Timur dengan menjadi sponsor program Duta Budaya Narapati & Kencana. Kami menawarkan berbagai peluang kerjasama yang dapat memberikan nilai tambah bagi brand Anda.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '💎',
                    title: 'Keuntungan Sponsorship',
                    content: 'Eksposur brand di seluruh Jawa Timur, kesempatan networking dengan komunitas budaya, dan citra positif sebagai pendukung pelestarian budaya.',
                  },
                  {
                    icon: '🤝',
                    title: 'Bentuk Kerjasama',
                    content: 'Sponsorship bisa berupa dana, produk, atau layanan yang mendukung program Duta Budaya Jawa Timur.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-[#F4E1B9] rounded-xl shadow-[0_8px_30px_rgba(74,44,42,0.15)] border border-[#D4A017]/20"
                  >
                    <div className="text-2xl md:text-3xl text-[#F28C38]">{item.icon}</div>
                    <div>
                      <h3 className="font-playfair font-semibold text-[#6B2D2F] mb-2 text-lg md:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-[#1C2526] font-lora text-sm md:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sponsorship Benefits */}
              <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-[#D4A017] mb-4">
                  Manfaat Sponsorship
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Logo di semua materi promosi',
                    'Branding di acara utama',
                    'Kesempatan product placement',
                    'Konten eksklusif di media sosial',
                    'Tiket VIP untuk acara final',
                    'Kesempatan menjadi juri tamu'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start bg-[#F4E1B9]/90 p-3 rounded-lg">
                      <span className="text-[#D4A017] mr-2">✓</span>
                      <span className="text-[#1C2526] font-lora">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sponsorship Form */}
            <div className="animate-fade-in-right">
              <div className="bg-[#F4E1B9] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(74,44,42,0.15)] border border-[#D4A017]/20">
                <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-[#6B2D2F] mb-6">
                  Minat Menjadi Sponsor?
                </h3>
                <p className="text-[#1C2526] font-lora mb-6">
                  Isi formulir berikut ini dan tim kami akan menghubungi Anda untuk membahas peluang kerjasama sponsorship.
                </p>

                <form
                  action="https://formspree.io/f/mjkwpbdg"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="form_type" value="sponsorship" />
                  
                  <div>
                    <label htmlFor="company" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                      Nama Perusahaan/Organisasi
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                      placeholder="Nama perusahaan/organisasi Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact_person" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                      Nama Kontak
                    </label>
                    <input
                      type="text"
                      id="contact_person"
                      name="contact_person"
                      required
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                      placeholder="Nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="sponsor_email" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                      Email
                    </label>
                    <input
                      type="email"
                      id="sponsor_email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                      placeholder="Alamat email Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                      Nomor Telepon/WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                      placeholder="Nomor telepon Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="sponsor_message" className="block text-sm md:text-base font-medium text-[#1C2526] mb-1 font-lora">
                      Pesan Tambahan
                    </label>
                    <textarea
                      id="sponsor_message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:ring-2 focus:ring-[#F28C38] focus:border-transparent transition-all duration-300 bg-[#F4E1B9] text-[#1C2526] placeholder-[#4A2C2A]/50"
                      placeholder="Tulis pesan tambahan Anda..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full relative py-3 px-6 rounded-lg font-lora font-semibold text-base md:text-lg transition-all duration-300 shadow-lg bg-[#F28C38] text-[#1C2526] hover:bg-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.7)] group overflow-hidden"
                  >
                    <span className="relative z-10">Kirim Permohonan Sponsorship</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#F28C38] to-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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