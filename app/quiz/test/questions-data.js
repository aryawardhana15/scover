// Data soal untuk 7 subtes psikotes digital
// Setiap subtes memiliki 10 soal

export const questionsData = {
  1: [
    // Test Dimensi (Penalaran Ruang) - 10 Soal / 2 Menit
    // 5 soal pertama: Lipatan Kubus
    {
      question: "Perhatikan jaring-jaring kubus berikut. Pilih gambar kubus 3D yang benar setelah dilipat.",
      hasImage: true,
      questionImage: "/soal/nomor1.jpeg",
      imageDescription: "Jaring-jaring berbentuk bintang dengan 4 segitiga.",
      options: {
        A: "/soal/nomor1pilihanA.jpeg",
        B: "/soal/nomor1pilihanB.jpeg",
        C: "/soal/nomor1pilihanC.jpeg",
        D: "/soal/nomor1pilihanD.jpeg"
      },
      correctAnswer: "A",
      explanation: "Gambar Soal: Jaring-jaring berbentuk bintang dengan 4 segitiga. Analisis: Jika dilipat, keempat segitiga akan bertemu di satu titik puncak membentuk Limas Segiempat (Pyramid). Jawaban: A (Gambar piramida standar)."
    },
    {
      question: "Perhatikan jaring-jaring kubus berikut. Pilih gambar kubus 3D yang benar setelah dilipat.",
      hasImage: true,
      questionImage: "/soal/nomor2.jpeg",
      imageDescription: "Persegi panjang dengan sisi atas bergelombang (sinusoidal).",
      options: {
        A: "/soal/nomor2pilihanA.jpeg",
        B: "/soal/nomor2pilihanB.jpeg",
        C: "/soal/nomor2pilihanC.jpeg",
        D: "/soal/nomor2pilihanD.jpeg"
      },
      correctAnswer: "B",
      explanation: "Analisis: Ini adalah jaring-jaring selimut tabung yang dipotong miring. Jika digulung, akan membentuk tabung dengan permukaan atas miring/elips. Jawaban: B (Tabung dengan potongan miring)."
    },
    {
      question: "Perhatikan jaring-jaring kubus berikut. Pilih gambar kubus 3D yang benar setelah dilipat.",
      hasImage: true,
      questionImage: "/soal/nomor3.jpeg",
      imageDescription: "Bentuk kerah/kipas melengkung simetris.",
      options: {
        A: "/soal/nomor3pilihanA.jpeg",
        B: "/soal/nomor3pilihanB.jpeg",
        C: "/soal/nomor3pilihanC.jpeg",
        D: "/soal/nomor3pilihanD.jpeg"
      },
      correctAnswer: "D",
      explanation: "Analisis: Jika ujung-ujungnya dipertemukan, akan membentuk kerucut yang terpotong bagian atasnya (Kerucut Terpancung/Frustum Cone). Jawaban: D (Bentuk seperti ember terbalik)."
    },
    {
      question: "Perhatikan jaring-jaring kubus berikut. Pilih gambar kubus 3D yang benar setelah dilipat.",
      hasImage: true,
      questionImage: "/soal/nomor4.jpeg",
      imageDescription: "Tiga buah trapesium yang menyatu.",
      options: {
        A: "/soal/nomor4pilihanA.jpeg",
        B: "/soal/nomor4pilihanB.jpeg",
        C: "/soal/nomor4pilihanC.jpeg",
        D: "/soal/nomor4pilihanD.jpeg"
      },
      correctAnswer: "D",
      explanation: "Analisis: Karena ada 3 sisi, ini akan membentuk bangun dengan alas segitiga. Bentuknya adalah Limas Segitiga Terpancung. Jawaban: D (Bangun ruang terpancung dengan 3 sisi tegak)."
    },
    {
      question: "Perhatikan jaring-jaring kubus berikut. Pilih gambar kubus 3D yang benar setelah dilipat.",
      hasImage: true,
      questionImage: "/soal/nomor5.jpeg",
      imageDescription: "Jaring-jaring bentuk salib (pola dasar kubus/balok).",
      options: {
        A: "/soal/nomor5pilihanA.jpeg",
        B: "/soal/nomor5pilihanB.jpeg",
        C: "/soal/nomor5pilihanC.jpeg",
        D: "/soal/nomor5pilihanD.jpeg"
      },
      correctAnswer: "C",
      explanation: "Analisis: Ini adalah jaring-jaring Balok (Cuboid) yang utuh. Jawaban: C (Balok utuh, bukan potongan atau prisma segitiga)."
    },
    // 5 soal berikutnya: Pasangan Gambar 3D (Identifikasi Bentuk)
    {
      question: "Perhatikan bentuk berikut. Pilih gambar yang paling sesuai atau identik.",
      hasImage: true,
      questionImage: "/soal/5.png",
      imageDescription: "Target: Jajar Genjang (miring ke kanan).",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "B",
      explanation: "Analisis: Di dalam kotak, bentuk yang identik berlabel huruf b (posisi baris atas). Jawaban: B"
    },
    {
      question: "Perhatikan bentuk berikut. Pilih gambar yang paling sesuai atau identik.",
      hasImage: true,
      questionImage: "/soal/1.png",
      imageDescription: "Target: Persegi Panjang (tegak lurus).",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "C",
      explanation: "Analisis: Di dalam kotak, bentuk yang identik berlabel huruf c (posisi tengah bawah). Jawaban: C"
    },
    {
      question: "Perhatikan bentuk berikut. Pilih gambar yang paling sesuai atau identik.",
      hasImage: true,
      questionImage: "/soal/2.png",
      imageDescription: "Target: Segitiga (tegak/sama kaki).",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "C",
      explanation: "Analisis: Huruf b adalah segitiga sembarang (miring). Huruf d adalah segitiga siku-siku. Huruf c adalah segitiga tegak yang dicari. Jawaban: C"
    },
    {
      question: "Perhatikan bentuk berikut. Pilih gambar yang paling sesuai atau identik.",
      hasImage: true,
      questionImage: "/soal/3.png",
      imageDescription: "Target: Lingkaran Kecil.",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "A",
      explanation: "Analisis: Di dalam kotak, bentuk lingkaran berlabel huruf a (pojok kanan atas). Jawaban: A"
    },
    {
      question: "Perhatikan bentuk berikut. Pilih gambar yang paling sesuai atau identik.",
      hasImage: true,
      questionImage: "/soal/4.png",
      imageDescription: "Target: Kubah/Busur (Sisi tegak lurus lalu melengkung di atas).",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "C",
      explanation: "Analisis: Huruf b (bawah kanan) adalah setengah lingkaran murni (bentuk D). Huruf c (atas tengah) adalah bentuk Kubah (ada sisi lurusnya sebelum melengkung). Gambar target memiliki sisi lurus (bentuk kubah/nisan), jadi pasangannya adalah c. Jawaban: C"
    }
  ],

  2: [
    // Test Berhitung/Aritmatika - 10 Soal / 4 Menit
    // 2 soal: Perhitungan Dasar
    {
      question: "Hitunglah: 7.845 + 3.267 = ?",
      hasImage: false,
      options: {
        A: "10.112",
        B: "11.112",
        C: "10.212",
        D: "11.212"
      },
      correctAnswer: "B"
    },
    {
      question: "Hitunglah: 4.532 × 23 = ?",
      hasImage: false,
      options: {
        A: "104.236",
        B: "104.336",
        C: "105.236",
        D: "105.336"
      },
      correctAnswer: "A"
    },
    // 3 soal: Perhitungan Pecahan
    {
      question: "Hitunglah: 3/4 - 1/3 = ?",
      hasImage: false,
      options: {
        A: "5/12",
        B: "1/2",
        C: "4/7",
        D: "2/3"
      },
      correctAnswer: "A"
    },
    {
      question: "Hitunglah: 2 1/2 + 1 3/4 = ?",
      hasImage: false,
      options: {
        A: "3 3/4",
        B: "4 1/4",
        C: "4 1/2",
        D: "4 3/4"
      },
      correctAnswer: "B"
    },
    {
      question: "Hitunglah: 5/6 ÷ 2/3 = ?",
      hasImage: false,
      options: {
        A: "5/4",
        B: "10/18",
        C: "1 1/4",
        D: "1 1/2"
      },
      correctAnswer: "A"
    },
    // 2 soal: Konversi Pecahan ke Desimal
    {
      question: "Konversikan pecahan 13/4 ke bentuk desimal:",
      hasImage: false,
      options: {
        A: "3.20",
        B: "3.25",
        C: "3.30",
        D: "3.35"
      },
      correctAnswer: "B"
    },
    {
      question: "Konversikan pecahan 7/8 ke bentuk desimal:",
      hasImage: false,
      options: {
        A: "0.875",
        B: "0.825",
        C: "0.775",
        D: "0.925"
      },
      correctAnswer: "A"
    },
    // 2 soal: Perbandingan (Soal Cerita)
    {
      question: "Jika 5 pekerja dapat menyelesaikan pekerjaan dalam 12 hari, berapa hari yang dibutuhkan 8 pekerja untuk menyelesaikan pekerjaan yang sama?",
      hasImage: false,
      options: {
        A: "7.5 hari",
        B: "8 hari",
        C: "9 hari",
        D: "10 hari"
      },
      correctAnswer: "A"
    },
    {
      question: "Sebuah mobil menempuh jarak 240 km dengan kecepatan 60 km/jam. Jika kecepatan ditingkatkan menjadi 80 km/jam, berapa waktu yang dibutuhkan?",
      hasImage: false,
      options: {
        A: "2.5 jam",
        B: "3 jam",
        C: "3.5 jam",
        D: "4 jam"
      },
      correctAnswer: "B"
    },
    // 1 soal: Rata-rata (Soal Cerita)
    {
      question: "Nilai rata-rata 5 siswa adalah 85. Jika 4 siswa memiliki nilai 80, 90, 85, dan 88, berapa nilai siswa kelima?",
      hasImage: false,
      options: {
        A: "82",
        B: "83",
        C: "84",
        D: "85"
      },
      correctAnswer: "A"
    }
  ],

  3: [
    // Test Analogie Kata - 10 Soal / 2 Menit
    // 3 soal: Lawan Kata (Antonim)
    {
      question: "Panas : Dingin = Terang : ?",
      hasImage: false,
      options: {
        A: "Gelap",
        B: "Cerah",
        C: "Terang",
        D: "Malam"
      },
      correctAnswer: "A"
    },
    {
      question: "Tinggi : Rendah = Besar : ?",
      hasImage: false,
      options: {
        A: "Kecil",
        B: "Sedang",
        C: "Lebar",
        D: "Panjang"
      },
      correctAnswer: "A"
    },
    {
      question: "Kaya : Miskin = Pintar : ?",
      hasImage: false,
      options: {
        A: "Bodoh",
        B: "Malas",
        C: "Rajin",
        D: "Cerdas"
      },
      correctAnswer: "A"
    },
    // 3 soal: Fungsi/Kegunaan
    {
      question: "Pilot : Pesawat = Nahkoda : ?",
      hasImage: false,
      options: {
        A: "Kapal",
        B: "Mobil",
        C: "Kereta",
        D: "Sepeda"
      },
      correctAnswer: "A"
    },
    {
      question: "Penulis : Buku = Pelukis : ?",
      hasImage: false,
      options: {
        A: "Gambar",
        B: "Kuas",
        C: "Kanvas",
        D: "Cat"
      },
      correctAnswer: "C"
    },
    {
      question: "Dokter : Pasien = Guru : ?",
      hasImage: false,
      options: {
        A: "Sekolah",
        B: "Murid",
        C: "Buku",
        D: "Papan"
      },
      correctAnswer: "B"
    },
    // 2 soal: Tempat/Hubungan Bagian dari Keseluruhan
    {
      question: "Jari : Tangan = Kaki : ?",
      hasImage: false,
      options: {
        A: "Lutut",
        B: "Tubuh",
        C: "Kaki",
        D: "Tungkai"
      },
      correctAnswer: "B"
    },
    {
      question: "Daun : Pohon = Sisik : ?",
      hasImage: false,
      options: {
        A: "Ikan",
        B: "Kulit",
        C: "Tubuh",
        D: "Ekor"
      },
      correctAnswer: "A"
    },
    // 2 soal: Derajat atau Sebab Akibat
    {
      question: "Lelah : Tidur = Lapar : ?",
      hasImage: false,
      options: {
        A: "Makan",
        B: "Minum",
        C: "Istirahat",
        D: "Bekerja"
      },
      correctAnswer: "A"
    },
    {
      question: "Hujan : Banjir = Api : ?",
      hasImage: false,
      options: {
        A: "Air",
        B: "Kebakaran",
        C: "Asap",
        D: "Panas"
      },
      correctAnswer: "B"
    }
  ],

  4: [
    // Test Analogie Hitungan (Deret Angka) - 10 Soal / 4 Menit
    // 3 soal: Deret Hitung (Aritmatika)
    {
      question: "Lanjutkan deret berikut: 5, 9, 13, 17, 21, ?, ?",
      hasImage: false,
      options: {
        A: "25, 29",
        B: "24, 27",
        C: "26, 30",
        D: "25, 28"
      },
      correctAnswer: "A"
    },
    {
      question: "Lanjutkan deret berikut: 20, 17, 14, 11, 8, ?, ?",
      hasImage: false,
      options: {
        A: "5, 2",
        B: "6, 3",
        C: "5, 3",
        D: "6, 2"
      },
      correctAnswer: "A"
    },
    {
      question: "Lanjutkan deret berikut: 3, 7, 11, 15, 19, ?, ?",
      hasImage: false,
      options: {
        A: "23, 27",
        B: "22, 25",
        C: "24, 28",
        D: "23, 26"
      },
      correctAnswer: "A"
    },
    // 2 soal: Deret Bertingkat
    {
      question: "Lanjutkan deret berikut: 2, 4, 7, 11, 16, ?, ?",
      hasImage: false,
      options: {
        A: "22, 29",
        B: "21, 27",
        C: "23, 30",
        D: "22, 28"
      },
      correctAnswer: "A"
    },
    {
      question: "Lanjutkan deret berikut: 1, 3, 6, 10, 15, ?, ?",
      hasImage: false,
      options: {
        A: "21, 28",
        B: "20, 26",
        C: "22, 29",
        D: "21, 27"
      },
      correctAnswer: "A"
    },
    // 3 soal: Deret Kombinasi/Lompat
    {
      question: "Lanjutkan deret berikut: 2, 5, 4, 7, 6, 9, ?, ?",
      hasImage: false,
      options: {
        A: "8, 11",
        B: "10, 12",
        C: "8, 10",
        D: "10, 11"
      },
      correctAnswer: "A"
    },
    {
      question: "Lanjutkan deret berikut: 1, 10, 3, 8, 5, 6, ?, ?",
      hasImage: false,
      options: {
        A: "7, 4",
        B: "6, 5",
        C: "8, 4",
        D: "7, 5"
      },
      correctAnswer: "A"
    },
    {
      question: "Lanjutkan deret berikut: 3, 6, 5, 10, 7, 14, ?, ?",
      hasImage: false,
      options: {
        A: "9, 18",
        B: "8, 16",
        C: "9, 16",
        D: "8, 18"
      },
      correctAnswer: "A"
    },
    // 2 soal: Deret Campuran
    {
      question: "Lanjutkan deret berikut: 2, 4, 8, 12, 24, 28, ?, ?",
      hasImage: false,
      options: {
        A: "56, 60",
        B: "52, 56",
        C: "54, 58",
        D: "56, 62"
      },
      correctAnswer: "A"
    },
    {
      question: "Lanjutkan deret berikut: 3, 6, 12, 15, 30, 33, ?, ?",
      hasImage: false,
      options: {
        A: "66, 69",
        B: "63, 66",
        C: "66, 72",
        D: "64, 68"
      },
      correctAnswer: "A"
    }
  ],

  5: [
    // Test Konsentrasi (Menghitung Huruf 'p') - 10 Soal / 2 Menit
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "10",
        B: "11",
        C: "12",
        D: "13"
      },
      correctAnswer: "B",
      letterString: "dbdpqbdpqpdqdbbqpdbpdqdapdbpdqdapdbbdpqdpdqdbdpqbbd"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "11",
        B: "12",
        C: "13",
        D: "14"
      },
      correctAnswer: "C",
      letterString: "pdqdapbpdqapbdpdbdqapbdqdpdqapbdqdpdqdbbdqapbpdqapb"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "11",
        B: "12",
        C: "13",
        D: "14"
      },
      correctAnswer: "C",
      letterString: "dpdbqbpqdpdqdpbdqbpqdpdqdpbdqbpqdpdqdpbdqbpqdpdqdp"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "13",
        B: "14",
        C: "15",
        D: "16"
      },
      correctAnswer: "C",
      letterString: "dbbpqapdqaapdbbpqapdqaapdbbpqapdqaapdbbpqapdqaapdbbpqapdqaap"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "10",
        B: "11",
        C: "12",
        D: "13"
      },
      correctAnswer: "C",
      letterString: "qpqdbdpqbqpdbdpqbqpdbdpqbqpdbdpqbqpdbdpqbqpdbdpqb"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "14",
        B: "15",
        C: "16",
        D: "17"
      },
      correctAnswer: "C",
      letterString: "bqdpqbbdpqdpdpbqdpqbbdpqdpdpbqdpqbbdpqdpdpbqdpqbbdpqdpdp"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "10",
        B: "11",
        C: "12",
        D: "13"
      },
      correctAnswer: "C",
      letterString: "pdqaqdpbdpbqdpdqbdpdqaqdpbdpbqdpdqbdpdqaqdpbdpbqdpdqbd"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "9",
        B: "10",
        C: "11",
        D: "12"
      },
      correctAnswer: "B",
      letterString: "bddqabdpqbdpdqdbbqpbdpqdbbqpbdpqdbbqpbdpqdbbqpbdp"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "6",
        B: "7",
        C: "8",
        D: "9"
      },
      correctAnswer: "C",
      letterString: "pqqpbqdqdbdpqbqqpbqdqdbdpqbqqpbqdqdbdpqbqqpbqdqdbd"
    },
    {
      question: "Hitunglah jumlah huruf 'p' pada deretan huruf berikut:",
      hasImage: false,
      options: {
        A: "6",
        B: "7",
        C: "8",
        D: "9"
      },
      correctAnswer: "B",
      letterString: "dbdqpbdqpdbdqapdbbdqpdbdqapdbbdqpdbdqapdbbdq"
    }
  ],

  6: [
    // Test Daya Nalar (Deret Gambar & Kubus) - 10 Soal / 2 Menit
    // 5 soal pertama: Deret Gambar (Pola Visual)
    {
      question: "Pilih gambar berikutnya yang melanjutkan pola berikut:",
      hasImage: true,
      questionImage: "/soal/nomor1daya.jpeg",
      imageDescription: "Deret gambar: kotak -> segitiga -> belah ketupat -> lingkaran",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "C",
      explanation: "Pola: bentuk dasar berubah dari kotak → segitiga → belah ketupat (diamond) → lingkaran (jumlah sudut/sisi menurun + bentuk semakin bulat). Jawaban: C"
    },
    {
      question: "Pilih gambar berikutnya yang melanjutkan pola berikut:",
      hasImage: true,
      questionImage: "/soal/nomor2daya.jpeg",
      imageDescription: "Deret gambar pola mirror/rotasi",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "A",
      explanation: "Pola: urutan simbol dalam kotak dibalik (mirror) atau rotasi 180° secara keseluruhan. Jawaban: A"
    },
    {
      question: "Pilih gambar berikutnya yang melanjutkan pola berikut:",
      hasImage: true,
      questionImage: "/soal/nomor3daya.jpeg",
      imageDescription: "Deret gambar garis vertikal bertambah",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "D",
      explanation: "Pola: jumlah garis vertikal bertambah 1 setiap langkah (1 → 2 → 3 → 4), sehingga ? harus memiliki 4 garis vertikal (pilihan D). Jawaban: D"
    },
    {
      question: "Pilih gambar berikutnya yang melanjutkan pola berikut:",
      hasImage: true,
      questionImage: "/soal/nomor4daya.jpeg",
      imageDescription: "Deret gambar rotasi panah",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "B",
      explanation: "Pola: arah panah berputar berlawanan jarum jam 45° setiap langkah. Sebelum panah kanan harus panah atas-kanan (pilihan B). Jawaban: B"
    },
    {
      question: "Pilih gambar berikutnya yang melanjutkan pola berikut:",
      hasImage: true,
      questionImage: "/soal/nomor5daya.jpeg",
      imageDescription: "Deret gambar rotasi simbol lari",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "C",
      explanation: "Pola: rotasi 90° searah jarum jam + mirroring pada beberapa langkah. Pilihan C melanjutkan pola rotasi yang benar. Jawaban: C"
    },
    // 5 soal terakhir: Rotasi Kubus
    {
      question: "Perhatikan posisi kubus 3D berikut. Pilih gambar yang merupakan posisi kubus yang sama setelah diputar/digeser:",
      hasImage: true,
      questionImage: "/soal/dayanalar6.png",
      imageDescription: "Soal dengan angka 9 pada kubus",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "B",
      explanation: "Analisis kubus (Soal angka 9): Jawaban B sesuai dengan rotasi sisi yang valid."
    },
    {
      question: "Perhatikan posisi kubus 3D berikut. Pilih gambar yang merupakan posisi kubus yang sama setelah diputar/digeser:",
      hasImage: true,
      questionImage: "/soal/dayanalar7.png",
      imageDescription: "Soal dengan angka 6 pada kubus",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "C",
      explanation: "Analisis kubus (Soal angka 6): Jawaban C sesuai dengan rotasi sisi yang valid."
    },
    {
      question: "Perhatikan posisi kubus 3D berikut. Pilih gambar yang merupakan posisi kubus yang sama setelah diputar/digeser:",
      hasImage: true,
      questionImage: "/soal/dayanalar8.png",
      imageDescription: "Soal dengan angka 5 pada kubus",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "A",
      explanation: "Analisis kubus (Soal angka 5): Jawaban A sesuai dengan rotasi sisi yang valid."
    },
    {
      question: "Perhatikan posisi kubus 3D berikut. Pilih gambar yang merupakan posisi kubus yang sama setelah diputar/digeser:",
      hasImage: true,
      questionImage: "/soal/dayanalar9.png",
      imageDescription: "Soal dengan angka 10 pada kubus",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "D",
      explanation: "Analisis kubus (Soal angka 10): Jawaban D sesuai dengan rotasi sisi yang valid."
    },
    {
      question: "Perhatikan posisi kubus 3D berikut. Pilih gambar yang merupakan posisi kubus yang sama setelah diputar/digeser:",
      hasImage: true,
      questionImage: "/soal/dayanalar10.png",
      imageDescription: "Soal dengan angka 7 pada kubus",
      options: {
        A: "A",
        B: "B",
        C: "C",
        D: "D"
      },
      correctAnswer: "B",
      explanation: "Analisis kubus (Soal angka 7): Jawaban B sesuai dengan rotasi sisi yang valid."
    }
  ],

  7: [
    // Test Mekanis-Teknologi - 10 Soal / 4 Menit
    {
      question: "Manakah dari ke-4 tabung disamping yang mudah jatuh/tidak seimbang?",
      hasImage: true,
      questionImage: "/soal/1sub6.png",
      imageDescription: "Gambar 4 tabung dengan bentuk berbeda",
      options: {
        A: "Tabung A",
        B: "Tabung B",
        C: "Tabung C",
        D: "Tabung D"
      },
      correctAnswer: "B",
      explanation: "Tabung B memiliki pusat massa paling tinggi (bentuk seperti botol terbalik), sehingga paling tidak stabil dan mudah jatuh."
    },
    {
      question: "Melalui sebuah selang, air mengalir dari tanki kiri ke tanki kanan, sampai tanda manakah air naik di tanki kanan?",
      hasImage: true,
      questionImage: "/soal/2sub6.png",
      imageDescription: "Gambar bejana berhubungan",
      options: {
        A: "Tanda A",
        B: "Tanda B",
        C: "Tanda C",
        D: "Tanda D"
      },
      correctAnswer: "C",
      explanation: "Hukum bejana berhubungan (vas komunikan) → permukaan air di kedua tanki akan sama rata, meskipun bentuk tanki berbeda. Jadi naik sampai tanda C (setinggi permukaan tanki kiri)."
    },
    {
      question: "Manakah Roda - roda yang berputar paling cepat?",
      hasImage: true,
      questionImage: "/soal/3sub6.png",
      imageDescription: "Sistem roda gigi/pulley",
      options: {
        A: "Roda A",
        B: "Roda B",
        C: "Roda C",
        D: "Roda D"
      },
      correctAnswer: "D",
      explanation: "Roda dengan radius terkecil (roda D) akan berputar paling cepat karena kecepatan linier sama (karena dihubungkan sabuk), tapi kecepatan sudut (rpm) berbanding terbalik dengan radius."
    },
    {
      question: "Sebuah benda bulat dari bidang datang akan ditiupkan melalui pipa yang melengkung, tunjukkan jalannya ketika benda bulat keluar dari pipa tersebut?",
      hasImage: true,
      questionImage: "/soal/4sub6.png",
      imageDescription: "Pipa melengkung dan lintasan bola",
      options: {
        A: "Jalan A",
        B: "Jalan B",
        C: "Jalan C",
        D: "Jalan D"
      },
      correctAnswer: "A",
      explanation: "Benda keluar secara tangensial terhadap lengkungan pipa terakhir (hukum inersia + arah keluaran pipa). Jalur A adalah kelanjutan lurus dari arah akhir pipa."
    },
    {
      question: "Ada 4 papan yang digantung, tunjukkan papan yang dapat menerima beban paling berat!",
      hasImage: true,
      questionImage: "/soal/5sub6.png",
      imageDescription: "4 papan gantung dengan variasi tali",
      options: {
        A: "Papan A",
        B: "Papan B",
        C: "Papan C",
        D: "Papan D"
      },
      correctAnswer: "C",
      explanation: "Papan C memiliki penyangga paling banyak dan simetris (segitiga penyangga), sehingga kekuatan struktur dan distribusi beban paling baik."
    },
    {
      question: "Lampu manakah yang akan menyala, bila kedudukan air dalam tanki berkurang?",
      hasImage: true,
      questionImage: "/soal/6sub6.png",
      imageDescription: "Rangkaian listrik dengan pelampung air",
      options: {
        A: "Lampu A",
        B: "Lampu B",
        C: "Lampu C",
        D: "Lampu D"
      },
      correctAnswer: "A",
      explanation: "Saat air berkurang, pelampung turun → saklar pada posisi A akan tertekan/terhubung, sehingga lampu A menyala (sistem indikator level air rendah)."
    },
    {
      question: "Dari gambar disamping, pernyataan yang paling benar adalah?",
      hasImage: true,
      questionImage: "/soal/7sub6.png",
      imageDescription: "Timbangan neraca sengan beban celup",
      options: {
        A: "Berat Massa < 1,7 kg",
        B: "Berat Massa > 1,7 kg",
        C: "Berat Massa = 1,7 kg",
        D: "Tidak terjadi apa-apa"
      },
      correctAnswer: "B",
      explanation: "Gambar menunjukkan neraca dengan beban di satu sisi dan massa 1,7 kg di sisi lain. Karena masih miring ke kiri, berat massa di sisi kiri > 1,7 kg."
    },
    {
      question: "Dari gambar disamping, pernyataan yang benar adalah?",
      hasImage: true,
      questionImage: "/soal/8sub6.png",
      imageDescription: "Optik/Cermin/Lensa",
      options: {
        A: "Object lebih besar",
        B: "Object lebih kecil",
        C: "Object sama besar",
        D: "Tidak tampak (Maya)"
      },
      correctAnswer: "D",
      explanation: "Ini ilusi optik (maya/refleksi). Objek di cermin tampak lebih jauh, padahal jaraknya sama. Jadi objek tidak lebih besar/kecil, hanya tampak (maya)."
    },
    {
      question: "Manakah sketsa-sketsa ini yang merupakan sambungan las?",
      hasImage: true,
      questionImage: "/soal/9sub6.png",
      imageDescription: "4 jenis sambungan logam",
      options: {
        A: "Gbr. A",
        B: "Gbr. B",
        C: "Gbr. C",
        D: "Gbr. D"
      },
      correctAnswer: "C",
      explanation: "Sambungan las ditandai dengan simbol segitiga kecil di atas garis sambungan (standar gambar teknik). Hanya gambar C yang memiliki simbol las yang benar."
    },
    {
      question: "Manakah posisi sayap pesawat terbang untuk posisi take off (naik)?",
      hasImage: true,
      questionImage: "/soal/10sub6.png",
      imageDescription: "Posisi flap sayap pesawat",
      options: {
        A: "Posisi A",
        B: "Posisi B",
        C: "Posisi C",
        D: "Posisi D"
      },
      correctAnswer: "B",
      explanation: "Saat take-off, flap dan slat diturunkan (extended) untuk meningkatkan lift pada kecepatan rendah. Posisi B menunjukkan flap turun (sudut serang besar)."
    }
  ],

  8: [
    // Tes Buta Warna - 9 Soal / 3 Menit
    // Satu gambar untuk semua soal (9 plate dalam 1 gambar) 
    // Urutan: Baris 1 (1-3), Baris 2 (4-6), Baris 3 (7-9)

    // Soal 1
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 1 (Baris 1, Kiri)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 1)",
      options: {
        A: "12",
        B: "8",
        C: "3",
        D: "5"
      },
      correctAnswer: "c"
    },
    // Soal 2
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 2 (Baris 1, Tengah)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 2)",
      options: {
        A: "29",
        B: "6",
        C: "8",
        D: "7"
      },
      correctAnswer: "B"
    },
    // Soal 3
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 3 (Baris 1, Kanan)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 3)",
      options: {
        A: "5",
        B: "3",
        C: "8",
        D: "6"
      },
      correctAnswer: "C"
    },
    // Soal 4
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 4 (Baris 2, Kiri)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 4)",
      options: {
        A: "4",
        B: "8",
        C: "3",
        D: "7"
      },
      correctAnswer: "B"
    },
    // Soal 5
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 5 (Baris 2, Tengah)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 5)",
      options: {
        A: "26",
        B: "25",
        C: "8",
        D: "3"
      },
      correctAnswer: "B"
    },
    // Soal 6
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 6 (Baris 2, Kanan)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 6)",
      options: {
        A: "29",
        B: "28",
        C: "27",
        D: "24"
      },
      correctAnswer: "A"
    },
    // Soal 7
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 7 (Baris 3, Kiri)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 7)",
      options: {
        A: "45",
        B: "46",
        C: "48",
        D: "49"
      },
      correctAnswer: "A"
    },
    // Soal 8
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 8 (Baris 3, Tengah)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 8)",
      options: {
        A: "57",
        B: "56",
        C: "27",
        D: "5"
      },
      correctAnswer: "B"
    },
    // Soal 9
    {
      question: "Angka berapakah yang Anda lihat pada gambar BAGIAN 9 (Baris 3, Kanan)?",
      hasImage: true,
      questionImage: "/soal/butawarna_full.jpeg",
      imageDescription: "Tes Buta Warna Full Plate (Lihat Plate 9)",
      options: {
        A: "5",
        B: "2",
        C: "6",
        D: "8"
      },
      correctAnswer: "A"
    }
  ]
};

