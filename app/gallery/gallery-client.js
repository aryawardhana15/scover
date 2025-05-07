"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Tari Remo",
    description: "Tarian khas Jawa Timur yang menggambarkan keperkasaan seorang pangeran",
    image: "/images/gallery/remo.jpg",
    category: "tari"
  },
  {
    id: 2,
    title: "Wayang Kulit",
    description: "Seni pertunjukan wayang kulit yang kaya akan nilai filosofis",
    image: "/images/gallery/wayang.jpg",
    category: "seni"
  },
  {
    id: 3,
    title: "Batik Jombang",
    description: "Kain batik dengan motif khas Jombang yang memukau",
    image: "/images/gallery/batik.jpg",
    category: "kerajinan"
  },
  {
    id: 4,
    title: "Reog Ponorogo",
    description: "Kesenian tradisional yang memadukan tari, musik, dan topeng",
    image: "/images/gallery/reog.jpg",
    category: "seni"
  },
  {
    id: 5,
    title: "Keris Madura",
    description: "Senjata tradisional dengan nilai historis dan artistik tinggi",
    image: "/images/gallery/keris.jpg",
    category: "kerajinan"
  },
  {
    id: 6,
    title: "Ludruk",
    description: "Teater tradisional yang menghibur dengan humor khas Jawa Timur",
    image: "/images/gallery/ludruk.jpg",
    category: "seni"
  }
];

const categories = [
  { id: "all", name: "Semua" },
  { id: "tari", name: "Tari" },
  { id: "seni", name: "Seni" },
  { id: "kerajinan", name: "Kerajinan" }
];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-terracotta/10 py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-terracotta mb-6 animate-fade-in">
          Galeri Budaya
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
          Jelajahi keindahan dan kekayaan budaya Jawa Timur melalui lensa kami
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-terracotta text-white shadow-lg"
                  : "bg-white text-terracotta hover:bg-terracotta/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(191,117,25,0.12)] hover:shadow-[0_8px_30px_rgba(191,117,25,0.25)] cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-terracotta mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-lora">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-playfair font-semibold text-terracotta mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 font-lora">
                {selectedImage.description}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 