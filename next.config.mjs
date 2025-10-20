/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Ini sudah benar dan paling penting.
  output: 'export',

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
