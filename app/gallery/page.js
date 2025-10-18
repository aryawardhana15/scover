import { Metadata } from 'next';
import GalleryClient from './gallery-client';

export const metadata = {
  title: "Galeri - Scover Bimbel",
  description: "Lihat fasilitas, kegiatan belajar, dan prestasi yang telah dicapai di Scover Bimbel Malang.",
};

export default function Gallery() {
  return <GalleryClient />;
}