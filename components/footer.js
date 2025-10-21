import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#003049] via-[#0a4a6e] to-[#003049] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffdc30] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fabe49] rounded-full translate-x-1/3 translate-y-1/3 opacity-5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info - Enhanced */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative group">
                <Image
                  src="/images/logo/logo2.png"
                  alt="Scover Bimbel"
                  width={140}
                  height={45}
                  className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#ffdc30] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="ml-3 px-3 py-1 bg-[#ffdc30]/20 text-[#ffdc30] text-sm font-bold rounded-full border border-[#ffdc30]/30">
                EDUKASI
              </span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Membentuk generasi berprestasi melalui bimbingan belajar berkualitas dengan metode pembelajaran yang menyenangkan dan efektif.
            </p>
            
            {/* Social Media dengan design baru */}
            <div className="flex space-x-3">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ), 
                  label: "Instagram",
                  color: "hover:bg-pink-600"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href="https://instagram.com/scover.idn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffdc30] to-[#fabe49] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links dengan design edukasi */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#ffdc30] rounded-full mr-3"></span>
              Menu Utama
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Beranda" },
                { href: "/about", label: "Tentang Kami" },
                { href: "/programs", label: "Program Belajar" },
                { href: "/gallery", label: "Galeri Scover" },
                { href: "/partners", label: "Partner" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#ffdc30] transition-all duration-300 flex items-center group py-2"
                  >
                    <svg className="w-3 h-3 mr-3 text-[#fabe49] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info dengan icon yang lebih edukatif */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#fabe49] rounded-full mr-3"></span>
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="p-2 bg-[#ffdc30]/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-[#ffdc30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Jl. Danau Toba No.24 Blok E6, Sawojajar, 
                  Kota Malang, Jawa Timur
                </span>
              </li>
              <li className="flex items-start group">
                <div className="p-2 bg-[#fabe49]/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-[#fabe49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +62 896-9705-3591
                </span>
              </li>
              <li className="flex items-start group">
                <div className="p-2 bg-[#0c5681]/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-[#0c5681]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                connect@scover.org
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/registration"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#ffdc30] to-[#fabe49] text-[#003049] px-6 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Daftar Sekarang</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar dengan design yang ditingkatkan */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <p className="text-gray-400">
                © {currentYear} <span className="text-[#ffdc30] font-bold">Scover Indonesia</span>. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-gray-400 hover:text-[#ffdc30] transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-[#ffdc30] transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Buka: Senin - Sabtu, 08:00 - 17:00 WIB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}