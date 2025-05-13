"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Sponsorship dan Kontak', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 shadow-xl py-0' : 'bg-black py-2'} backdrop-blur-md border-b border-[#D4A017]/30`}>
      {/* Gold decorative border */}
      {scrolled && (
        <div className="h-1 w-full bg-gradient-to-r from-[#D4A017] via-[#FF8C00] to-[#D4A017] opacity-90"></div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative flex-shrink-0 flex items-center">
              <div className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-[#D4A017] rounded-full filter blur-[8px]"></div>
              </div>
              <span className={`text-2xl font-bold ${scrolled ? 'ml-0' : 'ml-4'}`}>
                <span className="text-[#D4A017] group-hover:text-[#FF8C00] transition-colors duration-300">DUTA</span> 
                <span className="text-white"> BUDAYA</span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 text-lg transition-all duration-300 group
                  ${scrolled ? 'text-white hover:text-[#D4A017]' : 'text-white hover:text-[#D4A017]'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 h-0.5 bg-[#800020] transform -translate-x-1/2 transition-all duration-300 ${scrolled ? 'group-hover:w-3/4' : 'group-hover:w-full'} w-0`}></span>
              </Link>
            ))}
            <a 
              href="https://linktr.ee/DutaBudayaJawaTimur2025" 
              className={`ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                ${scrolled ? 'bg-gradient-to-r from-[#D4A017] to-[#FF8C00] text-black hover:from-[#FF8C00] hover:to-[#D4A017]' : 'bg-gradient-to-r from-[#D4A017] to-[#FF8C00] text-black hover:from-[#FF8C00] hover:to-[#D4A017]'}`}
            >
              Daftar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all ${isOpen ? 'text-[#D4A017]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2 pb-4 px-4 space-y-2 bg-[#3A2C1A]/95 backdrop-blur-md border-t border-[#800020]/50">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-3 py-3 rounded-md text-white text-lg hover:text-[#D4A017] hover:bg-[#800020]/20 transition-all duration-300 border-b border-[#800020]/30 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://linktr.ee/DutaBudayaJawaTimur2025"
            className="block mt-2 px-3 py-3 rounded-md bg-gradient-to-r from-[#D4A017] to-[#FF8C00] text-black font-medium text-center hover:opacity-90 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}