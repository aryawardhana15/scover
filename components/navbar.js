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
    { name: 'Kontak', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#DF6E21]/95 shadow-xl py-0' : 'bg-[#DF6E21] py-2'} backdrop-blur-md`}>
      {/* Decorative border */}
      <div className={`h-1 w-full bg-gradient-to-r from-[#EAB82C] via-[#BF7519] to-[#EAB82C] ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with cultural ornament */}
          <Link href="/" className="flex items-center group">
            <div className="relative flex-shrink-0 flex items-center">
              <div className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image 
                  src="/images/javanese-ornament-small.png" 
                  alt=""
                  width={24}
                  height={24}
                  className="animate-spin-slow"
                />
              </div>
              <span className={`text-2xl font-playfair font-bold text-[#EAB82C] group-hover:text-[#BF7519] transition-all duration-300 ${scrolled ? 'ml-0' : 'ml-4'}`}>
                Duta Budaya
              </span>
              <span className="text-xl text-white font-lora ml-1">Jatim</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 font-lora text-lg transition-all duration-300 group
                  ${scrolled ? 'text-white hover:text-[#EAB82C]' : 'text-[#EAB82C] hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 h-0.5 bg-[#EAB82C] transform -translate-x-1/2 transition-all duration-300 ${scrolled ? 'group-hover:w-3/4' : 'group-hover:w-full'} w-0`}></span>
              </Link>
            ))}
            <Link 
              href="/register" 
              className={`ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg
                ${scrolled ? 'bg-white text-[#DF6E21] hover:bg-[#BF7519]' : 'bg-white text-[#DF6E21] hover:bg-[#EAB82C] hover:text-white'}`}
            >
              Daftar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all ${isOpen ? 'text-[#EAB82C]' : 'text-white'}`}
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
        <div className="pt-2 pb-4 px-4 space-y-2 bg-[#DF6E21]/95 backdrop-blur-md">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-3 py-3 rounded-md text-white font-lora text-lg hover:text-[#EAB82C] hover:bg-[#BF7519]/30 transition-all duration-300 border-b border-[#BF7519]/10 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="block mt-2 px-3 py-3 rounded-md bg-[#EAB82C] text-white font-medium text-center hover:bg-[#BF7519] transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 15s linear infinite;
        }
      `}</style>
    </nav>
  );
}