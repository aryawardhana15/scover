import { Metadata } from 'next';
import TestClient from './test-client';

export const metadata = {
  title: "Tes Psikotes - Scover",
  description: "Pengerjaan kuis psikotes digital",
};

export default function Test() {
  return <TestClient />;
}

