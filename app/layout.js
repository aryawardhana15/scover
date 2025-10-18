import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GoogleAnalytics, { GoogleSearchConsole } from '../components/GoogleAnalytics';
import LoadingOptimization from '../components/LoadingOptimization';
import WebVitals from '../components/WebVitals';
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
  title: {
    default: "Scover Bimbel - Bimbingan Belajar Terbaik di Malang | UTBK, SBMPTN, Kedinasan",
    template: "%s | Scover Bimbel Malang"
  },
  description: "Scover Bimbel Malang - Bimbingan belajar terpercaya dengan pengajar berkualitas. Program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri. 90% siswa berhasil masuk PTN favorit.",
  keywords: [
    "bimbel malang",
    "bimbingan belajar malang", 
    "UTBK malang",
    "SBMPTN malang",
    "kedinasan malang",
    "TOEFL malang",
    "bimbel terbaik malang",
    "tutor malang",
    "les malang",
    "bimbel UTBK malang"
  ],
  authors: [{ name: "Scover Bimbel" }],
  creator: "Scover Bimbel",
  publisher: "Scover Bimbel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://scoverbimbel.com',
    siteName: 'Scover Bimbel Malang',
    title: 'Scover Bimbel - Bimbingan Belajar Terbaik di Malang',
    description: 'Scover Bimbel Malang - Bimbingan belajar terpercaya dengan pengajar berkualitas. Program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri.',
    images: [
      {
        url: '/images/logo/logo2.png',
        width: 1200,
        height: 630,
        alt: 'Scover Bimbel - Bimbingan Belajar Terbaik di Malang',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scover Bimbel - Bimbingan Belajar Terbaik di Malang',
    description: 'Bimbingan belajar terpercaya dengan pengajar berkualitas. Program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri.',
    images: ['/images/logo/logo2.png'],
  },
  alternates: {
    canonical: 'https://scoverbimbel.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'education',
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Scover Bimbel",
    "alternateName": "Scover Bimbingan Belajar",
    "description": "Bimbingan belajar terpercaya di Malang dengan pengajar berkualitas untuk program UTBK, SBMPTN, Kedinasan, TOEFL, dan Studi Luar Negeri.",
    "url": "https://scoverbimbel.com",
    "logo": "https://scoverbimbel.com/images/logo/logo2.png",
    "image": "https://scoverbimbel.com/images/logo/logo2.png",
    "telephone": "+62-xxx-xxxx-xxxx",
    "email": "info@scoverbimbel.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Contoh Alamat",
      "addressLocality": "Malang",
      "addressRegion": "Jawa Timur",
      "postalCode": "65111",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.9778",
      "longitude": "112.6296"
    },
    "openingHours": "Mo-Su 07:00-21:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Program Bimbingan Belajar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Program UTBK",
            "description": "Bimbingan belajar untuk Ujian Tulis Berbasis Komputer (UTBK)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Program SBMPTN",
            "description": "Persiapan Seleksi Bersama Masuk Perguruan Tinggi Negeri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Program Kedinasan",
            "description": "Persiapan tes masuk perguruan tinggi kedinasan"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#003049" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Search Console */}
        <GoogleSearchConsole GSC_VERIFICATION_ID={process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID} />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* Google Analytics */}
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID} />
        
        {/* Performance Optimizations */}
        <LoadingOptimization />
        <WebVitals />
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}