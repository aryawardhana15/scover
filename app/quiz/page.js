import { Metadata } from 'next';
import QuizClient from './quiz-client';

export const metadata = {
  title: "Kuis Psikotes Digital - Scover",
  description: "Ikuti kuis psikotes digital dengan 7 subtes untuk mengukur kemampuan Anda",
};

export default function Quiz() {
  return <QuizClient />;
}

