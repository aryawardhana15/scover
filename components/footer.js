"use client";
import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter, IconBrandTiktok, IconBrandYoutube } from '@tabler/icons-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialIcons = [
    { icon: IconBrandInstagram, name: 'Instagram', url: '#' },
    { icon: IconBrandFacebook, name: 'Facebook', url: '#' },
    { icon: IconBrandTwitter, name: 'Twitter', url: '#' },
    { icon: IconBrandTiktok, name: 'TikTok', url: '#' },
    { icon: IconBrandYoutube, name: 'YouTube', url: '#' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-[#D4A017]/30">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/batik-pattern.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4A017] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-13 h-13 mr-2">
                <div className="absolute inset-0 rounded-full opacity-30"></div>
                <Image 
                  src="/images/logo2.png"
                  alt="Duta Budaya Jawa Timur"
                  width={48}
                  height={48}
                  className="relative z-10"
                />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-[#D4A017]">DUTA</span> <span className="text-white">BUDAYA</span>
              </span>
            </div>
            <p className="text-[#B0A18F] mb-6 leading-relaxed">
              Melestarikan warisan budaya Jawa Timur dengan keanggunan dan inovasi.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    className={`p-2 rounded-full transition-all duration-300 ${hoveredIcon === index ? 'bg-[#D4A017] text-black shadow-lg' : 'bg-[#3A2C1A] text-[#B0A18F] hover:text-[#D4A017]'}`}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    aria-label={social.name}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4A017] border-b border-[#800020]/50 pb-2">
              MENU CEPAT
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-[#B0A18F] hover:text-[#D4A017] transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                Beranda
              </a></li>
              <li><a href="/about" className="text-[#B0A18F] hover:text-[#D4A017] transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                Tentang
              </a></li>
              <li><a href="/timeline" className="text-[#B0A18F] hover:text-[#D4A017] transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                Timeline
              </a></li>
              <li><a href="/gallery" className="text-[#B0A18F] hover:text-[#D4A017] transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                Galeri
              </a></li>
              <li><a href="/contact" className="text-[#B0A18F] hover:text-[#D4A017] transition-colors duration-300 flex items-center">
                <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                Kontak
              </a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4A017] border-b border-[#800020]/50 pb-2">
              KONTAK KAMI
            </h3>
            <address className="not-italic space-y-4 text-[#B0A18F]">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dutabudayajatim.id" className="hover:text-[#D4A017] transition-colors duration-300">
                  info@dutabudayajatim.id
                </a>
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+621234567890" className="hover:text-[#D4A017] transition-colors duration-300">
                  +62 123 456 7890
                </a>
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jl. Budaya No. 123, Surabaya<br />
                Jawa Timur, Indonesia
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4A017] border-b border-[#800020]/50 pb-2">
              NEWSLETTER
            </h3>
            <p className="text-[#B0A18F] mb-4 leading-relaxed">
              Dapatkan informasi terbaru tentang kegiatan kami.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="w-full px-4 py-3 rounded-lg bg-[#3A2C1A] border border-[#800020]/50 text-white placeholder-[#B0A18F] focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#D4A017] to-[#FF8C00] text-black font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>BERLANGGANAN</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and bottom section */}
        <div className="mt-16 pt-8 border-t border-[#800020]/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6D5D4B] text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Duta Budaya Jawa Timur. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-[#6D5D4B] hover:text-[#D4A017] transition-colors duration-300">Kebijakan Privasi</a>
              <a href="#" className="text-[#6D5D4B] hover:text-[#D4A017] transition-colors duration-300">Syarat & Ketentuan</a>
              <a href="#" className="text-[#6D5D4B] hover:text-[#D4A017] transition-colors duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}