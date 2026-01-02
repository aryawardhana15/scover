'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questionsData } from './questions-data';
import Image from 'next/image';

const SUBTES_LIST = [
  { id: 1, name: 'Dimensi (Penalaran Ruang)', duration: 2 },
  { id: 2, name: 'Berhitung/Aritmatika', duration: 4 },
  { id: 3, name: 'Analogie Kata', duration: 2 },
  { id: 4, name: 'Analogie Hitungan (Deret Angka)', duration: 4 },
  { id: 5, name: 'Konsentrasi (Menghitung Huruf)', duration: 2 },
  { id: 6, name: 'Daya Nalar (Deret Gambar & Kubus)', duration: 2 },
  { id: 7, name: 'Mekanis-Teknologi', duration: 4, questionCount: 10 },
  { id: 8, name: 'Tes Buta Warna', duration: 3, questionCount: 9 },
];

export default function TestClient() {
  const router = useRouter();
  const [currentSubtest, setCurrentSubtest] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(180); // 3 menit dalam detik
  const [isFinished, setIsFinished] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('quizUser');
    if (!user) {
      router.push('/quiz/login');
      return;
    }

    // Load progress
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCurrentSubtest(progress.currentSubtest || 1);
      setCurrentQuestion(progress.currentQuestion || 1);
      setAnswers(progress.answers || {});

      // Check if in break
      if (progress.isBreak) {
        setIsBreak(true);
        setBreakTime(progress.breakTime || 180);
      } else {
        // Initialize timer
        const subtest = SUBTES_LIST.find(s => s.id === progress.currentSubtest || 1);
        if (subtest) {
          const savedTime = progress.timeLeft;
          setTimeLeft(savedTime || subtest.duration * 60);
        }
      }
    } else {
      // First time, start with subtest 1
      const subtest = SUBTES_LIST[0];
      setTimeLeft(subtest.duration * 60);
    }
  }, [router]);

  // Timer countdown
  useEffect(() => {
    if (isBreak) {
      const timer = setInterval(() => {
        setBreakTime((prev) => {
          if (prev <= 1) {
            handleBreakEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Auto-save break progress every 5 seconds
      const saveTimer = setInterval(() => {
        const progress = {
          currentSubtest,
          currentQuestion,
          answers,
          timeLeft: null,
          isBreak: true,
          breakTime,
        };
        try {
          localStorage.setItem('quizProgress', JSON.stringify(progress));
        } catch (error) {
          console.error('Error saving progress:', error);
        }
      }, 5000);

      return () => {
        clearInterval(timer);
        clearInterval(saveTimer);
      };
    } else if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Auto-save every 5 seconds
      const saveTimer = setInterval(() => {
        const progress = {
          currentSubtest,
          currentQuestion,
          answers,
          timeLeft,
          isBreak: false,
          breakTime: null,
        };
        try {
          localStorage.setItem('quizProgress', JSON.stringify(progress));
        } catch (error) {
          console.error('Error saving progress:', error);
        }
      }, 5000);

      return () => {
        clearInterval(timer);
        clearInterval(saveTimer);
      };
    }
  }, [timeLeft, isBreak, isFinished, breakTime]);

  const saveProgress = () => {
    try {
      const progress = {
        currentSubtest,
        currentQuestion,
        answers,
        timeLeft: isBreak ? null : timeLeft,
        isBreak,
        breakTime: isBreak ? breakTime : null,
      };
      localStorage.setItem('quizProgress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const handleAnswerChange = (answer) => {
    const key = `${currentSubtest}-${currentQuestion}`;
    const newAnswers = { ...answers, [key]: answer };
    setAnswers(newAnswers);

    // Auto-save immediately when answer changes
    const progress = {
      currentSubtest,
      currentQuestion,
      answers: newAnswers,
      timeLeft: isBreak ? null : timeLeft,
      isBreak,
      breakTime: isBreak ? breakTime : null,
    };
    try {
      localStorage.setItem('quizProgress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const handleNextQuestion = () => {
    const totalQuestions = SUBTES_LIST.find(s => s.id === currentSubtest)?.questionCount || 10;
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      saveProgress();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      saveProgress();
    }
  };

  const handleSubmitSubtest = () => {
    setShowConfirmModal(true);
  };

  const handleTimeUp = () => {
    handleSubtestComplete();
  };

  const handleSubtestComplete = () => {
    setIsFinished(true);

    // Calculate score
    const subtestQuestions = questionsData[currentSubtest] || [];
    let correct = 0;
    subtestQuestions.forEach((q, index) => {
      const key = `${currentSubtest}-${index + 1}`;
      if (answers[key] === q.correctAnswer) {
        correct++;
      }
    });

    // Check if passed
    let passed = false;
    if (currentSubtest === 8) {
      // For Color Blindness test, must be 100% correct
      passed = correct === subtestQuestions.length;
    } else {
      // For other tests, > 6 correct (7/10)
      passed = correct > 6;
    }

    // Save score
    const scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    scores[currentSubtest] = {
      correct,
      total: subtestQuestions.length,
      passed,
    };
    localStorage.setItem('quizScores', JSON.stringify(scores));

    // Check if all subtests done
    if (currentSubtest >= 8) {
      // All done, go to result
      localStorage.removeItem('quizProgress');
      router.push('/quiz/result');
    } else {
      // Start break
      setIsBreak(true);
      setBreakTime(180);
      setIsFinished(false);
    }
  };

  const handleBreakEnd = () => {
    setIsBreak(false);
    setCurrentSubtest(currentSubtest + 1);
    setCurrentQuestion(1);
    const nextSubtest = SUBTES_LIST.find(s => s.id === currentSubtest + 1);
    if (nextSubtest) {
      setTimeLeft(nextSubtest.duration * 60);
    }
    saveProgress();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isBreak) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-[#003049] mb-4">Jeda Antar Subtes</h2>
          <p className="text-gray-600 mb-6">Subtes {currentSubtest} telah selesai. Istirahat sejenak sebelum melanjutkan ke subtes berikutnya.</p>

          <div className="mb-8">
            <div className="text-6xl font-bold text-[#003049] mb-4">{formatTime(breakTime)}</div>
            <p className="text-gray-600">Subtes berikutnya akan dimulai dalam:</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-[#003049] mb-2">Subtes Berikutnya:</h3>
            <p className="text-lg">
              {currentSubtest + 1}. {SUBTES_LIST.find(s => s.id === currentSubtest + 1)?.name}
            </p>
          </div>

          {currentSubtest + 1 === 8 && (
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-4 text-left">
              <h3 className="font-bold text-[#003049] mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Instruksi Khusus
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                Untuk tes ini, Anda akan disajikan <strong>SATU GAMBAR</strong> yang memuat 9 piringan ishihara sekaligus.
                Mohon perhatikan urutan pengerjaan berikut:
              </p>
              <div className="bg-white p-3 rounded border border-yellow-300 text-sm space-y-2">
                <div className="flex gap-2">
                  <span className="font-bold whitespace-nowrap">No. 1 - 3:</span>
                  <span>Baris Pertama (Kiri → Kanan)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold whitespace-nowrap">No. 4 - 6:</span>
                  <span>Baris Kedua (Kiri → Kanan)</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold whitespace-nowrap">No. 7 - 9:</span>
                  <span>Baris Ketiga (Kiri → Kanan)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentSubtestData = SUBTES_LIST.find(s => s.id === currentSubtest);
  const currentQuestions = questionsData[currentSubtest] || [];
  const currentQ = currentQuestions[currentQuestion - 1];
  const answerKey = `${currentSubtest}-${currentQuestion}`;
  const selectedAnswer = answers[answerKey];

  if (!currentQ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] flex items-center justify-center">
        <div className="text-white text-xl">Memuat soal...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003049] via-[#0c5681] to-[#003049] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#003049]">
                Subtes {currentSubtest}: {currentSubtestData?.name}
              </h1>
              <p className="text-gray-600">Soal {currentQuestion} dari {currentSubtestData?.questionCount || 10}</p>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-[#003049]'}`}>
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-gray-600">Waktu tersisa</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#003049] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / (currentSubtestData?.questionCount || 10)) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#003049] text-white px-4 py-2 rounded-lg font-bold">
                Soal {currentQuestion}
              </span>
            </div>

            <div className="text-lg text-gray-800 mb-6">
              {currentQ.question}
            </div>

            {/* Question Image */}
            {currentQ.hasImage && (
              <div className="mb-6">
                {currentQ.questionImage ? (
                  <div className="relative w-full bg-gray-100 rounded-lg border-2 border-gray-300 overflow-hidden">
                    <div className="relative w-full h-96">
                      <Image
                        src={currentQ.questionImage}
                        alt={currentQ.imageDescription || 'Gambar untuk soal ini'}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.parentElement) {
                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm p-4">Gambar tidak ditemukan</div>';
                          }
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-6 p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
                    <p className="text-gray-500 italic mb-2 text-center">
                      [Gambar akan dimasukkan di sini - {currentQ.imageDescription || 'Gambar untuk soal ini'}]
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 min-h-[200px] flex items-center justify-center">
                      <p className="text-gray-400 text-sm">Tempat untuk gambar soal</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Letter String for Konsentrasi test */}
            {currentQ.letterString && (
              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Deretan huruf:</p>
                <div className="bg-white p-4 rounded border border-yellow-300">
                  <p className="text-lg font-mono text-gray-800 break-all leading-relaxed">
                    {currentQ.letterString}
                  </p>
                </div>
              </div>
            )}

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['A', 'B', 'C', 'D'].map((option) => (
                <label
                  key={option}
                  className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedAnswer === option
                    ? 'border-[#003049] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerChange(option)}
                    className="mt-1 w-5 h-5 text-[#003049] focus:ring-[#003049]"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-[#003049] mr-2">{option}.</span>
                    {(() => {
                      const optionValue = currentQ.options[option];
                      // Check if it's an image path (starts with / and has image extension)
                      const isImagePath = optionValue && (
                        optionValue.startsWith('/') &&
                        /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(optionValue)
                      );
                      // Check if it's a placeholder text
                      const isPlaceholder = optionValue?.includes('[Gambar');

                      if (isImagePath) {
                        return (
                          <div className="mt-2">
                            <div className="relative w-full h-48 bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
                              <Image
                                src={optionValue}
                                alt={`Opsi ${option}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  if (e.target.parentElement) {
                                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm">Gambar tidak ditemukan</div>';
                                  }
                                }}
                              />
                            </div>
                          </div>
                        );
                      } else if (isPlaceholder) {
                        return (
                          <div className="mt-2">
                            <span className="text-gray-600 italic">{optionValue}</span>
                            <div className="mt-2 bg-gray-100 p-3 rounded border border-gray-300 min-h-[100px] flex items-center justify-center">
                              <p className="text-gray-400 text-xs">Tempat untuk gambar opsi {option}</p>
                            </div>
                          </div>
                        );
                      } else {
                        return <span>{optionValue || `[Opsi ${option} akan dimasukkan di sini]`}</span>;
                      }
                    })()}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 1}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${currentQuestion === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-[#003049] hover:bg-gray-300'
                }`}
            >
              ← Sebelumnya
            </button>

            <div className="flex gap-2">
              {Array.from({ length: currentSubtestData?.questionCount || 10 }, (_, i) => i + 1).map((num) => {
                const key = `${currentSubtest}-${num}`;
                const answered = answers[key];
                return (
                  <button
                    key={num}
                    onClick={() => {
                      setCurrentQuestion(num);
                      saveProgress();
                    }}
                    className={`w-10 h-10 rounded-lg font-bold transition-all ${num === currentQuestion
                      ? 'bg-[#003049] text-white'
                      : answered
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>

            {currentQuestion === (currentSubtestData?.questionCount || 10) ? (
              <button
                onClick={handleSubmitSubtest}
                className="px-6 py-3 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
              >
                Selesai Subtes
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-gradient-to-r from-[#003049] to-[#0c5681] text-white rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
              >
                Selanjutnya →
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#003049]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003049] mb-2">Selesaikan Subtes?</h3>
              <p className="text-gray-600 mb-8">
                Apakah Anda yakin ingin menyelesaikan subtes ini? <br />
                Anda tidak dapat kembali mengerjakan soal setelah ini.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="px-6 py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors w-full"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setShowConfirmModal(false);
                    handleSubtestComplete();
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#003049] to-[#0c5681] font-bold text-white hover:shadow-lg transition-all w-full"
                >
                  Ya, Selesaikan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

