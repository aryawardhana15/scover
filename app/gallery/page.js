import { Metadata } from 'next';
import GalleryClient from './gallery-client';

export const metadata = {
  title: "Galeri - Duta Budaya Jawa Timur",
  description: "Galeri foto Duta Budaya Jawa Timur dari berbagai tahun.",
};

export default function Gallery() {
  return <GalleryClient />;
}