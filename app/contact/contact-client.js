"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman form
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset status setelah 3 detik
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-terracotta/10">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center animate-fade-in">
            Hubungi Kami
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h2 className="text-3xl font-playfair font-semibold text-terracotta mb-8">
              Mari Berkolaborasi
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-lora">
              Kami selalu terbuka untuk diskusi, kolaborasi, dan pertanyaan seputar budaya Jawa Timur. Jangan ragu untuk menghubungi kami.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  content: "info@dutabudayajatim.id",
                  link: "mailto:info@dutabudayajatim.id"
                },
                {
                  icon: "📱",
                  title: "Telepon",
                  content: "+62 812 3456 7890",
                  link: "tel:+6281234567890"
                },
                {
                  icon: "📍",
                  title: "Alamat",
                  content: "Jl. Veteran No. 123, Surabaya, Jawa Timur",
                  link: "https://maps.google.com"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-[0_8px_30px_rgba(191,117,25,0.12)] hover:shadow-[0_8px_30px_rgba(191,117,25,0.25)] transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-playfair font-semibold text-terracotta mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-lora">
                      {item.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(191,117,25,0.12)]">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan alamat email Anda"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan subjek pesan"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-terracotta hover:bg-terracotta/90"
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-center animate-fade-in">
                    Pesan berhasil terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 