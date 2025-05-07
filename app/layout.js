import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';
import { Playfair_Display, Lora } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'] });

export const metadata = {
  title: "Duta Budaya Jawa Timur",
  description: "Official website of Duta Budaya Jawa Timur, promoting East Java's cultural heritage.",
  openGraph: {
    title: "Duta Budaya Jawa Timur",
    description: "Official website of Duta Budaya Jawa Timur, promoting East Java's cultural heritage.",
    url: "https://www.dutabudayajatim.id",
    siteName: "Duta Budaya Jawa Timur",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duta Budaya Jawa Timur",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${lora.className} bg-terracotta text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}