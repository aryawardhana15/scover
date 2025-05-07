import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata = {
  title: "Kontak - Duta Budaya Jawa Timur",
  description: "Hubungi kami untuk informasi lebih lanjut tentang Duta Budaya Jawa Timur.",
};

export default function Contact() {
  return <ContactClient />;
}