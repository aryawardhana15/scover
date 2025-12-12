import { Metadata } from 'next';
import ResultClient from './result-client';

export const metadata = {
  title: "Hasil Kuis Psikotes - Scover",
  description: "Lihat hasil kuis psikotes digital Anda",
};

export default function Result() {
  return <ResultClient />;
}

