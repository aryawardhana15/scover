'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/programs", label: "Program" },
    { href: "/tutors", label: "Pengajar" },
    { href: "/gallery", label: "Galeri" },
    { href: "/timeline", label: "Timeline" },
    { href: "/partners", label: "Partner" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white shadow-2xl backdrop-blur-md bg-white/95' 
          : 'bg-transparent'
      }`}
      ref={menuRef}
    >
      {/* Animated Border Bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#fabe49] transform origin-left transition-transform duration-700 ${
        scrolled ? 'scale-x-100' : 'scale-x-0'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo dengan animasi */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group"
              onMouseEnter={() => setActiveLink('logo')}
              onMouseLeave={() => setActiveLink('')}
            >
              <div className="relative">
                <Image
                  src="/images/logo/logo2.png"
                  alt="Scover Bimbel"
                  width={140}
                  height={45}
                  className={`h-10 w-auto transition-all duration-500 ${
                    scrolled ? 'scale-95' : 'scale-100'
                  } group-hover:scale-105`}
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#ffdc30] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                    activeLink === link.href 
                      ? 'text-[#003049]' 
                      : scrolled 
                        ? 'text-gray-700 hover:text-[#003049]' 
                        : 'text-white hover:text-[#ffdc30]'
                  }`}
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink('')}
                >
                  {link.label}
                  {/* Hover underline effect */}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ffdc30] transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10 ${
                    activeLink === link.href ? 'w-4/5 left-1/10' : ''
                  }`}></span>
                  
                  {/* Dot indicator */}
                  <span className={`absolute -top-1 -right-1 w-2 h-2 bg-[#fabe49] rounded-full transform scale-0 transition-transform duration-300 ${
                    activeLink === link.href ? 'scale-100' : 'group-hover:scale-100'
                  }`}></span>
                </Link>
              </div>
            ))}
            
            {/* CTA Button dengan gradient */}
            <div className="ml-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ffdc30] to-[#fabe49] rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              <Link
                href="/registration"
                className="relative bg-gradient-to-r from-[#003049] to-[#0c5681] text-white px-6 py-3 rounded-xl text-sm font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Daftar Sekarang</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu button dengan animasi */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`relative w-10 h-10 flex flex-col items-center justify-center transition-all duration-300 ${
                scrolled ? 'text-[#003049]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
              }`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 mt-1 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
              }`}></span>
            </button>
          </div>
        </div>

         {/* Mobile Navigation Menu dengan animasi slide */}
         {isMenuOpen && (
           <div className="lg:hidden">
             <div className="px-4 pt-4 pb-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-2xl rounded-2xl mt-3 border border-gray-100">
               {/* Header dengan logo */}
               <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                 <div className="flex items-center">
                   <Image
                     src="/images/logo/logo2.png"
                     alt="Scover Bimbel"
                     width={120}
                     height={35}
                     className="h-8 w-auto"
                   />
                 </div>
                 <button
                   onClick={() => setIsMenuOpen(false)}
                   className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                 >
                   <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
               </div>

               {/* Navigation Links dengan icon */}
               <div className="space-y-3 mb-6">
                 {navLinks.map((link, index) => (
                   <Link
                     key={link.href}
                     href={link.href}
                     className="flex items-center px-4 py-3 text-gray-700 hover:text-[#003049] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 text-base font-medium rounded-xl transition-all duration-300 group"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     <div className="w-2 h-2 bg-gradient-to-r from-[#003049] to-[#0c5681] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <span className="flex-1">{link.label}</span>
                     <svg className="w-4 h-4 text-gray-400 group-hover:text-[#003049] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </Link>
                 ))}
               </div>
               
               {/* Mobile CTA Button dengan gradient */}
               <div className="pt-4 border-t border-gray-200">
                 <Link
                   href="/registration"
                   className="block w-full bg-gradient-to-r from-[#003049] via-[#0c5681] to-[#003049] text-white px-6 py-4 rounded-xl text-base font-bold text-center hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-[#ffdc30] to-[#fabe49] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                   <span className="relative flex items-center justify-center space-x-2">
                     <span>Daftar Sekarang</span>
                     <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                     </svg>
                   </span>
                 </Link>
               </div>
             </div>
           </div>
         )}
      </div>

    </nav>
  );
}