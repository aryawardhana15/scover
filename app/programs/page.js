import { Metadata } from 'next';
import ProgramsClient from './programs-client';

export const metadata = {
  title: "Program Bimbel - Scover Bimbel",
  description: "Program bimbingan belajar lengkap untuk Ujian Nasional, SBMPTN, Kedinasan, TOEFL, dan Studi ke Luar Negeri di Scover Bimbel Malang.",
};

export default function Programs() {
  return <ProgramsClient />;
}
