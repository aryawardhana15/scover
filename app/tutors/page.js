import { Metadata } from 'next';
import TutorsClient from './tutors-client';

export const metadata = {
  title: "Tim Tutor - Scover Bimbel",
  description: "Tim tutor berpengalaman dan berkualitas di Scover Bimbel Malang. Dapatkan bimbingan terbaik dari tutor yang ahli di bidangnya.",
};

export default function Tutors() {
  return <TutorsClient />;
}
