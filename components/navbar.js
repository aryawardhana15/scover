'use client';
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
    { name: 'Kontak Dan Sponsorship', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0E1618]/95 shadow-xl py-0' : 'bg-[#0E1618] py-2'} backdrop-blur-md border-b border-[#D4A017]/30`}>
      {/* Gold decorative border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#D4A017] to-transparent opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative flex-shrink-0 flex items-center">
              <div className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-[#D4A017] rounded-full filter blur-[8px]"></div>
              </div>
              <div className="flex items-center">
                <span className={`text-2xl font-serif font-bold ${scrolled ? 'ml-0' : 'ml-4'}`}>
                  <span className="text-[#D4A017] group-hover:text-[#F28C38] transition-colors duration-300">DUTA</span> 
                  <span className="text-[#F4E1B9]"> BUDAYA</span>
                </span>
                <span className="text-[#F4E1B9] ml-2 text-sm hidden md:block">Jawa Timur</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 text-lg font-serif transition-all duration-300 group
                  ${scrolled ? 'text-[#F4E1B9] hover:text-[#D4A017]' : 'text-[#F4E1B9] hover:text-[#D4A017]'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 h-[2px] bg-[#D4A017] transform -translate-x-1/2 transition-all duration-300 ${scrolled ? 'group-hover:w-3/4' : 'group-hover:w-full'} w-0`}></span>
              </Link>
            ))}
            <Link 
              href="/register" 
              className={`ml-4 px-6 py-2 rounded-full font-serif font-bold transition-all duration-300 shadow-lg hover:shadow-xl
                ${scrolled ? 'bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] hover:from-[#F28C38] hover:to-[#D4A017]' : 'bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] hover:from-[#F28C38] hover:to-[#D4A017]'}`}
            >
              Daftar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all ${isOpen ? 'text-[#D4A017]' : 'text-[#F4E1B9]'}`}
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
        <div className="pt-2 pb-4 px-4 space-y-2 bg-[#1C2526]/95 backdrop-blur-md border-t border-[#D4A017]/30">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-3 py-3 rounded-md text-[#F4E1B9] text-lg font-serif hover:text-[#D4A017] hover:bg-[#D4A017]/10 transition-all duration-300 border-b border-[#D4A017]/20 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        <a
  href="https://linktr.ee/DutaBudayaJawaTimur2025"
  target="_blank"
  rel="noopener noreferrer"
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