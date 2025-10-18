import { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata = {
  title: "Tentang Kami - Scover Bimbel",
  description: "Pelajari visi, misi, dan sejarah Scover Bimbel dalam memberikan pendidikan berkualitas tinggi di Malang.",
};

export default function About() {
  return <AboutClient />;
}