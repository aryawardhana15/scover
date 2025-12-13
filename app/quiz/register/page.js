import { Metadata } from 'next';
import RegisterClient from './register-client';

export const metadata = {
  title: "Registrasi Kuis Psikotes - Scover",
  description: "Daftar untuk mengikuti kuis psikotes digital",
};

export default function Register() {
  return <RegisterClient />;
}

