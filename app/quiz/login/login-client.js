'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginUser, createSession } from '../../../lib/quiz-api';

export default function LoginClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    if (!formData.email || !formData.password) {
      setError('Mohon lengkapi email dan password');
      setLoading(false);
      return;
    }

    try {
      // Login user via API
      const loginResponse = await loginUser(formData.email, formData.password);
      
      if (loginResponse && loginResponse.success) {
        // Create session
        try {
          const sessionResponse = await createSession(loginResponse.user.id);
          
          if (sessionResponse && sessionResponse.success) {
            // Save to localStorage for quick access (optional, bisa dihapus jika full API)
            localStorage.setItem('quizUser', JSON.stringify(loginResponse.user));
            localStorage.setItem('quizSession', JSON.stringify(sessionResponse.session));
            
            // Redirect ke landing page
            router.push('/quiz');
          } else {
            const errorMsg = sessionResponse?.error || 'Gagal membuat session. Silakan coba lagi.';
            setError(errorMsg);
          }
        } catch (sessionError) {
          console.error('Session creation error:', sessionError);
          setError('Gagal membuat session. Silakan coba lagi.');
        }
      } else {
        const errorMsg = loginResponse?.error || 'Email atau password salah';
        setError(errorMsg);
      }
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.message || 'Terjadi kesalahan. Silakan coba lagi.';
      
      if (errorMessage.includes('Email atau password salah') || errorMessage.includes('401')) {
        setError('Email atau password salah');
      } else if (errorMessage.includes('Network') || errorMessage.includes('fetch')) {
        setError('Tidak dapat terhubung ke server. Pastikan server berjalan.');
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#003049] mb-2">Kuis Psikotes Digital</h1>
          <p className="text-gray-600">Silakan login untuk memulai</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
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
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent outline-none transition-all"
              placeholder="Masukkan password"
              required
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
            {loading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Belum punya akun?{' '}
            <Link href="/quiz/register" className="text-[#003049] hover:text-[#0c5681] font-semibold">
              Daftar di sini
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

