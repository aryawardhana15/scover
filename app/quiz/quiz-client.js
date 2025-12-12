'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SUBTES_LIST = [
  {
    id: 1,
    name: 'Dimensi (Penalaran Ruang)',
    duration: 2,
    questionCount: 10,
  },
  {
    id: 2,
    name: 'Berhitung/Aritmatika',
    duration: 4,
    questionCount: 10,
  },
  {
    id: 3,
    name: 'Analogie Kata',
    duration: 2,
    questionCount: 10,
  },
  {
    id: 4,
    name: 'Analogie Hitungan (Deret Angka)',
    duration: 4,
    questionCount: 10,
  },
  {
    id: 5,
    name: 'Konsentrasi (Menghitung Huruf)',
    duration: 2,
    questionCount: 10,
  },
  {
    id: 6,
    name: 'Daya Nalar (Deret Gambar & Kubus)',
    duration: 2,
    questionCount: 10,
  },
  {
    id: 7,
    name: 'Mekanis-Teknologi',
    duration: 4,
    questionCount: 10,
  },
];

export default function QuizClient() {
  const router = useRouter();
  const [showRules, setShowRules] = useState(false);
  const [rulesTimer, setRulesTimer] = useState(60);
  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('quizUser');
    const session = localStorage.getItem('quizSession');
    
    if (!user || !session) {
      router.push('/quiz/login');
      return;
    }

    // Check if already started (check from API or localStorage fallback)
    const quizProgress = localStorage.getItem('quizProgress');
    if (quizProgress) {
      const progress = JSON.parse(quizProgress);
      if (progress.currentSubtest > 0) {
        router.push('/quiz/test');
        return;
      }
    }
  }, [router]);

  useEffect(() => {
    if (showRules && rulesTimer > 0) {
      const timer = setInterval(() => {
        setRulesTimer((prev) => {
          if (prev <= 1) {
            setCanContinue(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showRules, rulesTimer]);

  const handleStart = () => {
    setShowRules(true);
    setRulesTimer(60);
    setCanContinue(false);
  };

  const handleContinue = async () => {
    try {
      const session = JSON.parse(localStorage.getItem('quizSession'));
      if (!session) {
        router.push('/quiz/login');
        return;
      }

      // Initialize quiz progress via API
      const progress = {
        currentSubtest: 1,
        currentQuestion: 1,
        timeLeft: SUBTES_LIST[0].duration * 60,
        isBreak: false,
        breakTime: null,
      };

      // Save to API
      const { saveProgress } = await import('../../lib/quiz-api');
      await saveProgress(session.id, progress);

      // Also save to localStorage for quick access
      localStorage.setItem('quizProgress', JSON.stringify({
        ...progress,
        answers: {},
        startTime: new Date().toISOString(),
      }));

      router.push('/quiz/test');
    } catch (error) {
      console.error('Error initializing quiz:', error);
      // Fallback to localStorage if API fails
      const progress = {
        currentSubtest: 1,
        currentQuestion: 1,
        answers: {},
        startTime: new Date().toISOString(),
      };
      localStorage.setItem('quizProgress', JSON.stringify(progress));
      router.push('/quiz/test');
    }
  };

  if (showRules) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 max-h-[90vh] overflow-y-auto">
          <h2 className="text-2xl font-bold text-[#003049] mb-6 text-center">Aturan Kuis Psikotes Digital</h2>
          
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-[#003049] mb-2">1. Waktu Pengerjaan</h3>
              <p>Setiap subtes memiliki waktu pengerjaan yang berbeda. Timer akan berjalan otomatis dan tes akan berakhir ketika waktu habis.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-[#003049] mb-2">2. Format Soal</h3>
              <p>Semua soal adalah pilihan ganda dengan 4 opsi jawaban (A, B, C, D). Pilih satu jawaban yang paling tepat.</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-bold text-[#003049] mb-2">3. Navigasi</h3>
              <p>Anda dapat berpindah antar soal menggunakan tombol navigasi. Jawaban akan tersimpan otomatis.</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-bold text-[#003049] mb-2">4. Jeda Antar Subtes</h3>
              <p>Setelah menyelesaikan satu subtes, akan ada jeda 2-3 menit sebelum subtes berikutnya dimulai.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-bold text-[#003049] mb-2">5. Kriteria Kelulusan</h3>
              <p>Untuk setiap subtes, Anda dinyatakan lulus jika menjawab benar lebih dari 6 soal (minimal 7 jawaban benar dari 10 soal).</p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-bold text-[#003049] mb-2">6. Penting</h3>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Pastikan koneksi internet stabil</li>
                <li>Jangan menutup browser selama pengerjaan</li>
                <li>Jawaban akan tersimpan otomatis</li>
                <li>Setelah waktu habis, Anda tidak dapat kembali ke subtes sebelumnya</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            {!canContinue && (
              <p className="text-gray-600 mb-4">
                Mohon baca aturan di atas. Anda dapat melanjutkan dalam <span className="font-bold text-[#003049]">{rulesTimer}</span> detik.
              </p>
            )}
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className={`px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 ${
                canContinue
                  ? 'bg-gradient-to-r from-[#003049] to-[#0c5681] text-white hover:scale-105 hover:shadow-xl cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {canContinue ? 'Lanjutkan' : `Tunggu ${rulesTimer} detik`}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#003049] mb-4">Kuis Psikotes Digital</h1>
            <p className="text-gray-600 text-lg">Siapkan diri Anda untuk mengikuti 7 subtes berikut</p>
          </div>

          <div className="space-y-4 mb-8">
            {SUBTES_LIST.map((subtest, index) => (
              <div
                key={subtest.id}
                className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#003049] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      {subtest.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#003049]">{subtest.name}</h3>
                      <p className="text-sm text-gray-600">
                        {subtest.questionCount} soal • {subtest.duration} menit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleStart}
              className="bg-gradient-to-r from-[#003049] to-[#0c5681] text-white px-12 py-4 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              START KUIS
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-[#003049] hover:text-[#0c5681] text-sm">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

