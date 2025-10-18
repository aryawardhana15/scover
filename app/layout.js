import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Scover Bimbel - Bimbingan Belajar Terbaik di Malang",
  description: "Scover Bimbel menyediakan program bimbingan belajar untuk Ujian Nasional, SBMPTN, Kedinasan, TOEFL, dan Studi ke Luar Negeri di Malang.",
  openGraph: {
    title: "Scover Bimbel - Bimbingan Belajar Terbaik di Malang",
    description: "Scover Bimbel menyediakan program bimbingan belajar untuk Ujian Nasional, SBMPTN, Kedinasan, TOEFL, dan Studi ke Luar Negeri di Malang.",
    url: "https://scoverbimbel.com",
    siteName: "Scover Bimbel",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scover Bimbel",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}