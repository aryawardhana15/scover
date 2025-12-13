/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Hapus output: 'export' karena kita butuh API routes (dynamic)
  // output: 'export', // Commented out karena tidak kompatibel dengan API routes

  // 2. Ini SANGAT PENTING agar <Image> dari Next.js berfungsi
  //    tanpa server optimasi gambar.
  images: {
    unoptimized: true,
  },

  // (Konfigurasi webpack Anda tidak masalah, bisa dibiarkan jika memang dibutuhkan)
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
