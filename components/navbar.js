"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' }
  ];

  return (
    <nav className="bg-terracotta sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-playfair font-bold text-gold1 hover:text-gold2 transition-colors duration-300">
                Duta Budaya
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 text-gold1 font-lora text-lg hover:text-gold2 hover:bg-terracotta/80 rounded-md transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold1 hover:text-gold2 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden animate-slideIn">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block px-3 py-2 text-gold1 font-lora text-lg hover:text-gold2 hover:bg-terracotta/80"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}