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
    <footer className="relative bg-[#DF6E21] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/batik-pattern-light.png')] bg-repeat bg-[length:300px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="fade-in">
            <div className="flex items-center mb-6">
              <Image 
                src="/images/javanese-icon.png"
                alt="Duta Budaya Jawa Timur"
                width={48}
                height={48}
                className="mr-3"
              />
              <span className="text-2xl font-playfair font-bold text-[#EAB82C]">
                Duta Budaya
              </span>
            </div>
            <p className="font-lora text-[#FFEDD5] mb-6">
              Melestarikan dan mempromosikan kekayaan budaya Jawa Timur melalui berbagai program inovatif.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    className={`p-2 rounded-full transition-all duration-300 ${hoveredIcon === index ? 'bg-[#EAB82C] text-[#DF6E21] shadow-lg transform -translate-y-1' : 'bg-[#BF7519]/30 text-[#FFEDD5]'}`}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="fade-in">
            <h3 className="text-xl font-playfair font-semibold mb-6 text-[#EAB82C] border-b border-[#BF7519]/30 pb-2">
              Menu Cepat
            </h3>
            <ul className="space-y-3 font-lora">
              <li><a href="/" className="hover:text-[#EAB82C] transition-colors duration-300">Beranda</a></li>
              <li><a href="/about" className="hover:text-[#EAB82C] transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="/timeline" className="hover:text-[#EAB82C] transition-colors duration-300">Timeline</a></li>
              <li><a href="/gallery" className="hover:text-[#EAB82C] transition-colors duration-300">Galeri</a></li>
              <li><a href="/contact" className="hover:text-[#EAB82C] transition-colors duration-300">Kontak</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="fade-in">
            <h3 className="text-xl font-playfair font-semibold mb-6 text-[#EAB82C] border-b border-[#BF7519]/30 pb-2">
              Kontak Kami
            </h3>
            <address className="not-italic font-lora space-y-3 text-[#FFEDD5]">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#EAB82C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dutabudayajatim.id" className="hover:text-[#EAB82C] transition-colors duration-300">
                  info@dutabudayajatim.id
                </a>
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#EAB82C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+621234567890" className="hover:text-[#EAB82C] transition-colors duration-300">
                  +62 123 456 7890
                </a>
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#EAB82C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jl. Budaya No. 123, Surabaya<br />
                Jawa Timur, Indonesia
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="fade-in">
            <h3 className="text-xl font-playfair font-semibold mb-6 text-[#EAB82C] border-b border-[#BF7519]/30 pb-2">
              Newsletter
            </h3>
            <p className="font-lora text-[#FFEDD5] mb-4">
              Dapatkan update terbaru tentang kegiatan kami langsung ke email Anda.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="w-full px-4 py-2 rounded-lg bg-[#BF7519]/30 border border-[#EAB82C]/50 text-white placeholder-[#FFEDD5]/70 focus:outline-none focus:ring-2 focus:ring-[#EAB82C]"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-[#EAB82C] text-[#DF6E21] font-medium py-2 px-4 rounded-lg hover:bg-[#BF7519] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and bottom section */}
        <div className="mt-16 pt-8 border-t border-[#BF7519]/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-lora text-[#FFEDD5] text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Duta Budaya Jawa Timur. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-lora text-[#FFEDD5] hover:text-[#EAB82C] transition-colors duration-300">Kebijakan Privasi</a>
              <a href="#" className="font-lora text-[#FFEDD5] hover:text-[#EAB82C] transition-colors duration-300">Syarat & Ketentuan</a>
              <a href="#" className="font-lora text-[#FFEDD5] hover:text-[#EAB82C] transition-colors duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-20">
        <Image src="/images/javanese-ornament-1.png" alt="" width={64} height={64} />
      </div>
      <div className="absolute top-10 right-16 w-20 h-20 opacity-20">
        <Image src="/images/javanese-ornament-2.png" alt="" width={80} height={80} />
      </div>
    </footer>
  );
}