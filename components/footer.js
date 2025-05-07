"use client";
import { IconBrandInstagram, IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-terracotta text-gold1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="fade-in">
            <h3 className="text-xl font-playfair font-semibold mb-4">Kontak Kami</h3>
            <p className="font-lora">Email: <a href="mailto:info@dutabudayajatim.id" className="hover:text-gold2">info@dutabudayajatim.id</a></p>
            <p className="font-lora">Telepon: +62 123 456 7890</p>
          </div>
          <div className="fade-in">
            <h3 className="text-xl font-playfair font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gold2 transition-all duration-300 transform hover:scale-110">
                <IconBrandInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gold2 transition-all duration-300 transform hover:scale-110">
                <IconBrandFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gold2 transition-all duration-300 transform hover:scale-110">
                <IconBrandTwitter size={24} />
              </a>
            </div>
          </div>
          <div className="fade-in">
            <h3 className="text-xl font-playfair font-semibold mb-4">Alamat</h3>
            <p className="font-lora">Jl. Budaya No. 123, Surabaya</p>
            <p className="font-lora">Jawa Timur, Indonesia</p>
          </div>
        </div>
        <div className="mt-12 text-center font-lora">
          <p>© 2025 Duta Budaya Jawa Timur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}