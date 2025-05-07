import { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata = {
  title: "Tentang - Duta Budaya Jawa Timur",
  description: "Pelajari visi dan misi Duta Budaya Jawa Timur dalam melestarikan budaya.",
};

export default function About() {
  return <AboutClient />;
}