import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata = {
  title: "Kontak - Scover Bimbel",
  description: "Hubungi Scover Bimbel untuk konsultasi gratis atau kerjasama institusi. Tim kami siap membantu kebutuhan pendidikan Anda.",
};

export default function Contact() {
  return <ContactClient />;
}