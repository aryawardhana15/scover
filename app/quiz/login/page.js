import { Metadata } from 'next';
import LoginClient from './login-client';

export const metadata = {
  title: "Login - Kuis Psikotes Digital Scover",
  description: "Login untuk mengakses kuis psikotes digital",
};

export default function QuizLogin() {
  return <LoginClient />;
}

