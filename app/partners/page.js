import { Metadata } from 'next';
import PartnersClient from './partners-client';

export const metadata = {
  title: "Mitra Kerjasama - Scover Bimbel",
  description: "Jaringan kerjasama Scover Bimbel dengan sekolah, universitas, dan institusi pendidikan terpercaya di Malang dan sekitarnya.",
};

export default function Partners() {
  return <PartnersClient />;
}
