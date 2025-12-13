'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerUser } from '../../../lib/quiz-api';

export default function RegisterClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Validasi
    if (!formData.name || !formData.email || !formData.password) {
      setError('Nama, Email, dan Password wajib diisi');
      setLoading(false);
      return;
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Format email tidak valid');
      setLoading(false);
      return;
    }

    // Validasi password
    if (formData.password.length < 6) {
      setError('Password minimal 6 karakter');
      setLoading(false);
      return;
    }

    // Validasi konfirmasi password
    if (formData.password !== formData.confirmPassword) {
      setError('Password dan Konfirmasi Password tidak sama');
      setLoading(false);
      return;
    }

    try {
      // Register user via API
      const registerResponse = await registerUser(formData.name, formData.email, formData.password);
      
      if (registerResponse && registerResponse.success) {
        setSuccess(true);
        // Redirect ke login setelah 2 detik
        setTimeout(() => {
          router.push('/quiz/login');
        }, 2000);
      } else {
        const errorMsg = registerResponse?.error || registerResponse?.message || 'Gagal registrasi. Silakan coba lagi.';
        setError(errorMsg);
      }
    } catch (err) {
      console.error('Register error:', err);
      const errorMessage = err.message || 'Terjadi kesalahan. Silakan coba lagi.';
      
      if (errorMessage.includes('already exists') || errorMessage.includes('duplicate') || errorMessage.includes('already registered')) {
        setError('Email sudah terdaftar. Silakan login atau gunakan email lain.');
      } else if (errorMessage.includes('Network') || errorMessage.includes('fetch')) {
        setError('Tidak dapat terhubung ke server. Pastikan server berjalan.');
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#003049] mb-2">Registrasi Berhasil!</h2>
            <p className="text-gray-600">Akun Anda telah dibuat. Mengarahkan ke halaman login...</p>
          </div>
          <div className="mt-6">
            <Link
              href="/quiz/login"
              className="inline-block bg-gradient-to-r from-[#003049] to-[#0c5681] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
            >
              Lanjut ke Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#003049] mb-2">Registrasi Kuis Psikotes</h1>
          <p className="text-gray-600">Daftar untuk mengikuti kuis psikotes digital</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent outline-none transition-all"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent outline-none transition-all"
              placeholder="Masukkan email"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Email akan digunakan untuk login</p>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent outline-none transition-all"
              placeholder="Masukkan password (min. 6 karakter)"
              required
              minLength={6}
            />
            <p className="text-xs text-gray-500 mt-1">Password minimal 6 karakter</p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Konfirmasi Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent outline-none transition-all"
              placeholder="Masukkan ulang password"
              required
              minLength={6}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-[#003049] to-[#0c5681] text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
            }`}
          >
            {loading ? 'Mendaftar...' : 'Daftar'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/quiz/login" className="text-[#003049] hover:text-[#0c5681] font-semibold">
              Login di sini
            </Link>
          </p>
          <Link href="/" className="text-[#003049] hover:text-[#0c5681] text-sm block">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

