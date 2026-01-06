'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SUBTES_LIST = [
  { id: 1, name: 'Dimensi (Penalaran Ruang)' },
  { id: 2, name: 'Berhitung/Aritmatika' },
  { id: 3, name: 'Analogie Kata' },
  { id: 4, name: 'Analogie Hitungan (Deret Angka)' },
  { id: 5, name: 'Konsentrasi (Menghitung Huruf)' },
  { id: 6, name: 'Daya Nalar (Deret Gambar & Kubus)' },
  { id: 7, name: 'Mekanis-Teknologi' },
  { id: 8, name: 'Tes Buta Warna' },
];

export default function ResultClient() {
  const router = useRouter();
  const [scores, setScores] = useState({});
  const [user, setUser] = useState(null);
  const [totalPassed, setTotalPassed] = useState(0);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('quizUser');
    if (!userData) {
      router.push('/quiz/login');
      return;
    }
    setUser(JSON.parse(userData));

    // Load scores
    const savedScores = localStorage.getItem('quizScores');
    if (!savedScores) {
      router.push('/quiz');
      return;
    }

    const scoresData = JSON.parse(savedScores);
    setScores(scoresData);

    // Count passed subtests
    const passed = Object.values(scoresData).filter(score => score.passed).length;
    setTotalPassed(passed);
  }, [router]);

  const handleReset = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    localStorage.removeItem('quizUser');
    localStorage.removeItem('quizProgress');
    localStorage.removeItem('quizScores');
    router.push('/quiz/login');
  };

  if (!user || Object.keys(scores).length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center">
        <div className="text-white text-xl">Memuat hasil...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#003049] mb-4">Hasil Kuis Psikotes Digital</h1>
            <p className="text-gray-600 text-lg">
              Selamat, <span className="font-semibold text-[#003049]">{user.name}</span>! Anda telah menyelesaikan semua subtes.
            </p>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#003049] mb-2">Ringkasan Hasil</h2>
                <p className="text-gray-600">
                  Subtes yang lulus: <span className="font-bold text-[#003049]">{totalPassed} dari 8</span>
                </p>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold ${totalPassed >= 5 ? 'text-green-600' : totalPassed >= 3 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {totalPassed}/8
                </div>
                <p className="text-sm text-gray-600">Subtes Lulus</p>
              </div>
            </div>
          </div>

          {/* Scores List */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-[#003049] mb-4">Detail Skor Per Subtes</h2>
            {SUBTES_LIST.map((subtest) => {
              const score = scores[subtest.id];
              if (!score) return null;

              const percentage = (score.correct / score.total) * 100;
              const isPassed = score.passed;

              return (
                <div
                  key={subtest.id}
                  className={`p-6 rounded-xl border-2 transition-all ${isPassed
                    ? 'bg-green-50 border-green-300'
                    : 'bg-red-50 border-red-300'
                    }`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-[#003049] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {subtest.id}
                        </span>
                        <h3 className="font-bold text-[#003049] text-lg">{subtest.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm ml-11">
                        Skor: {score.correct} dari {score.total} soal benar
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#003049]">{score.correct}/{score.total}</div>
                        <div className="text-sm text-gray-600">{percentage.toFixed(0)}%</div>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-lg font-bold text-sm ${isPassed
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                          }`}
                      >
                        {isPassed ? 'LULUS' : 'TIDAK LULUS'}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 ml-11">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${isPassed ? 'bg-green-500' : 'bg-red-500'
                          }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Kriteria kelulusan: {subtest.id === 8 ? 'Harus menjawab semua soal dengan benar (9/9)' : 'Minimal 7 jawaban benar (lebih dari 6/10)'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall Status */}
          <div className={`rounded-xl p-6 mb-8 border-2 ${totalPassed >= 5
            ? 'bg-green-50 border-green-300'
            : totalPassed >= 3
              ? 'bg-yellow-50 border-yellow-300'
              : 'bg-red-50 border-red-300'
            }`}>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#003049] mb-2">Status Kelulusan Total</h3>
              {totalPassed >= 5 ? (
                <p className="text-green-700 font-semibold text-lg">
                  ✓ Lulus Total - Anda telah lulus minimal 5 subtes
                </p>
              ) : totalPassed >= 3 ? (
                <p className="text-yellow-700 font-semibold text-lg">
                  ⚠ Cukup - Anda telah lulus 3-4 subtes
                </p>
              ) : (
                <p className="text-red-700 font-semibold text-lg">
                  ✗ Belum Lulus - Anda perlu meningkatkan performa
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ulang Kuis
            </button>
            <Link
              href="/"
              className="px-8 py-3 bg-gray-200 text-[#003049] rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003049] mb-2">Ulang Kuis?</h3>
              <p className="text-gray-600 mb-8">
                Apakah Anda yakin ingin mengulang kuis dari awal? <br />
                Semua progres dan skor Anda saat ini akan dihapus permanen.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowResetModal(false)}
                  className="px-6 py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors w-full"
                >
                  Batal
                </button>
                <button
                  onClick={confirmReset}
                  className="px-6 py-3 rounded-xl bg-red-600 font-bold text-white hover:bg-red-700 hover:shadow-lg transition-all w-full"
                >
                  Ya, Ulang Kuis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

