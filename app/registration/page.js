import { Metadata } from 'next';
import RegistrationClient from './registration-client';

export const metadata = {
  title: "Pendaftaran - Scover Bimbel",
  description: "Daftar sekarang di Scover Bimbel Malang. Pilih program yang sesuai dan raih impian pendidikanmu bersama tim tutor berpengalaman.",
};

export default function Registration() {
  return <RegistrationClient />;
}
