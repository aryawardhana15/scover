'use client';

const events = [
  {
    year: 2025,
    title: 'Open registration',
    description: 'Pendaftaran peserta Duta Budaya Jawa Timur dilakukan secara online melalui platform resmi. Peserta diminta mengisi formulir dan mengunggah dokumen pendukung.',
    date: '5-20 Mei 2025',
    icon: '📝',
  },
  {
    year: 2025,
    title: 'Seleksi Tahap 1',
    description: 'Tes tulis untuk mengukur pengetahuan peserta mengenai budaya Jawa Timur, sejarah, serta isu-isu kebudayaan kontemporer.',
    date: '8 Juni 2025',
    icon: '✍️',
  },
  {
    year: 2025,
    title: 'Seleksi Tahap 2',
    description: 'Wawancara langsung untuk menilai pengetahuan budaya, sikap, dan komitmen peserta terhadap pelestarian budaya Jawa Timur.',
    date: '14 Juni 2025',
    icon: '🗣️',
  },
    {
    year: 2025,
    title: 'Pra karantina online',
    description: 'Pemeriksaan kelengkapan dan keabsahan dokumen peserta yang telah mendaftar secara online.',
    date: '24-25 Juli 2025',
    icon: '📑',
  },
  {
    year: 2025,
    title: 'Karantina',
    description: 'Pelatihan intensif dan pembekalan mengenai budaya Jawa Timur seperti tari tradisional, batik, dan etika budaya. Finalis juga mengikuti pembentukan karakter dan penilaian lanjutan.',
    date: '1-2 Agustus 2025',
    icon: '🏕️',
  },
  {
    year: 2025,
    title: 'Grand Final',
    description: 'Acara puncak pemilihan Duta Budaya Jawa Timur dengan penampilan budaya serta pengumuman pemenang Narapati & Kencana.',
    date: '3 Agustus 2025',
    icon: '👑',
  },
];

export default function TimelineClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1618] to-[#1C2526] relative overflow-hidden">
      {/* Golden borders with enhanced glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] via-[#F28C38] to-[#D4A017] animate-glow-border"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] via-[#F28C38] to-[#D4A017] animate-glow-border"></div>

      {/* Golden ornaments */}
      <div className="absolute top-8 left-4 w-12 h-12 opacity-50 animate-float-glow">
  <div className="bg-[url('/images/ornament3.png')] bg-cover w-full h-full animate-glow-rotate"></div>
</div>
<div className="absolute top-16 right-4 w-14 h-14 opacity-50 animate-float-glow delay-200">
  <div className="bg-[url('/images/ornament2.png')] bg-cover w-full h-full animate-glow-rotate"></div>
</div>
<div className="absolute bottom-8 left-4 w-12 h-12 opacity-50 animate-float-glow delay-400">
  <div className="bg-[url('/images/ornament4.png')] bg-cover w-full h-full animate-glow-rotate"></div>
</div>
<div className="absolute bottom-16 right-4 w-14 h-14 opacity-50 animate-float-glow delay-600">
  <div className="bg-[url('/images/ornament3.png')] bg-cover w-full h-full animate-glow-rotate"></div>
</div>
<div className="absolute top-1/3 left-2 w-10 h-10 opacity-50 animate-float-glow delay-800 hidden md:block">
  <div className="bg-[url('/images/ornament4.png')] bg-cover w-full h-full animate-glow-rotate"></div>
</div>
<div className="absolute bottom-1/3 right-2 w-10 h-10 opacity-50 animate-float-glow delay-1000 hidden md:block">
  <div className="bg-[url('/images/ornament2.png')] bg-cover w-full h-full animate-glow-rotate"></div>
</div>


      {/* Golden particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-6 text-center animate-fade-slide">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F4E1B9] mb-4 animate-glow-text">
            <span className="text-[#D4A017]">Timeline</span> Pendaftaran
          </h1>
          <p className="text-lg text-[#B0A18F] animate-fade delay-200">
            Perjalanan Pemilihan Duta Budaya Jawa Timur Narapati & Kencana 2025
          </p>
          <div className="w-32 h-0.5 bg-[#D4A017] mx-auto mt-4 animate-scale-x delay-400"></div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 pb-24 animate-fade-slide delay-200">
        {/* Vertical line with decorative dots */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A017] via-[#F28C38] to-[#D4A017] transform -translate-x-1/2 animate-gradient-pulse"></div>

        {/* Events */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:pl-16 md:pr-8' : 'md:pl-8 md:pr-16'
              } animate-fade-slide delay-${index * 200 + 400}`}
            >
              {/* Year with gem effect */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-[#1C2526] border-4 border-[#D4A017] text-xl sm:text-2xl font-bold text-[#D4A017] z-10 animate-pulse shadow-[0_0_15px_rgba(212,160,23,0.5)] hover:shadow-[0_0_25px_rgba(212,160,23,0.8)] transition-shadow clip-permata">
                {event.year}
              </div>

              {/* Content with ornate frame */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mt-6 md:mt-0`}>
                <div className="relative bg-[#1C2526] p-6 sm:p-8 rounded-xl border-2 border-[#D4A017]/40 shadow-lg hover:shadow-[0_10px_40px_rgba(212,160,23,0.6)] transition-all duration-300 animate-scale-up">
                  {/* Ornate corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 bg-[url('/images/corner-ornament.png')] bg-cover opacity-50 animate-glow"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-[url('/images/corner-ornament.png')] bg-cover opacity-50 rotate-90 animate-glow"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-[url('/images/corner-ornament.png')] bg-cover opacity-50 rotate-180 animate-glow"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-[url('/images/corner-ornament.png')] bg-cover opacity-50 rotate-270 animate-glow"></div>

                  <div className="flex items-center mb-4">
                    <span className="text-3xl sm:text-4xl mr-4 animate-sparkle">{event.icon}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F4E1B9] animate-fade delay-100">{event.title}</h3>
                      <p className="text-sm sm:text-base text-[#D4A017] animate-fade delay-200">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-[#B0A18F] pl-12 sm:pl-16 animate-fade delay-300">{event.description}</p>
                </div>
              </div>

              {/* Enhanced golden dot connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#D4A017] rounded-full border-2 border-[#F4E1B9] animate-glow z-20 clip-diamond shadow-[0_0_10px_rgba(212,160,23,0.5)]">
                <div className="absolute inset-0 bg-[url('/images/gold-texture.png')] bg-cover opacity-30 animate-rotate-slow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center animate-fade-slide delay-800">
          <div className="inline-block bg-[#1C2526] px-8 py-6 sm:px-12 sm:py-8 rounded-xl border-2 border-[#D4A017]/40 shadow-lg hover:shadow-[0_15px_50px_rgba(212,160,23,0.7)] transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4E1B9] mb-4 animate-glow-text">
              Jadilah Bagian Tradisi Kami
            </h2>
            <p className="text-[#B0A18F] mb-6 max-w-2xl mx-auto animate-fade delay-200">
              Daftarkan diri Anda sekarang untuk mengikuti seleksi Duta Budaya Jawa Timur Narapati & Kencana 2025
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,160,23,0.9)] transition-all duration-300 animate-pulse">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        @keyframes floatGlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(212, 160, 23, 0.5); }
          50% { box-shadow: 0 0 20px rgba(212, 160, 23, 0.8); }
        }
        @keyframes glowBorder {
          0%, 100% { box-shadow: 0 0 15px rgba(212, 160, 23, 0.5); }
          50% { box-shadow: 0 0 30px rgba(212, 160, 23, 0.9); }
        }
        @keyframes gradientPulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sparkle {
          0% { text-shadow: 0 0 0 rgba(212, 160, 23, 0); }
          50% { text-shadow: 0 0 15px rgba(212, 160, 23, 0.7); }
          100% { text-shadow: 0 0 0 rgba(212, 160, 23, 0); }
        }
        @keyframes scaleX {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes glowRotate {
          0% { transform: rotate(0deg); box-shadow: 0 0 10px rgba(212, 160, 23, 0.5); }
          50% { transform: rotate(15deg); box-shadow: 0 0 20px rgba(212, 160, 23, 0.8); }
          100% { transform: rotate(0deg); box-shadow: 0 0 10px rgba(212, 160, 23, 0.5); }
        }
        @keyframes rotateSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Animation classes */
        .animate-pulse { animation: pulse 8s ease-in-out infinite; }
        .animate-fade { animation: fade 0.8s ease-out; }
        .animate-fade-slide { animation: fadeSlide 1s cubic-bezier(0.33, 1, 0.68, 1) both; }
        .animate-scale-up { animation: scaleUp 0.6s cubic-bezier(0.33, 1, 0.68, 1) both; }
        .animate-float-glow { animation: floatGlow 6s ease-in-out infinite; }
        .animate-glow { animation: glow 5s ease-in-out infinite; }
        .animate-glow-border { animation: glowBorder 6s ease-in-out infinite; }
        .animate-gradient-pulse { animation: gradientPulse 10s linear infinite; background-size: 200% 200%; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-scale-x { animation: scaleX 0.8s ease-out both; }
        .animate-glow-rotate { animation: glowRotate 8s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotateSlow 20s linear infinite; }

        /* Delay classes */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }

        /* Particles */
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(212, 160, 23, 0.8) 0%, rgba(212, 160, 23, 0) 70%);
          border-radius: 50%;
          pointer-events-none;
          animation: floatGlow 10s ease-in-out infinite;
        }
        .particle-1 { width: 6px; height: 6px; top: 15%; left: 10%; }
        .particle-2 { width: 8px; height: 8px; top: 40%; right: 10%; animation-delay: 2s; }
        .particle-3 { width: 10px; height: 10px; bottom: 15%; left: 20%; animation-delay: 4s; }
        .particle-4 { width: 7px; height: 7px; top: 20%; right: 15%; animation-delay: 6s; }
        .particle-5 { width: 9px; height: 9px; bottom: 10%; left: 30%; animation-delay: 8s; }

        /* Custom shapes */
        .clip-permata { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
        .clip-diamond { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }

        /* Responsive */
        @media (max-width: 768px) {
          .text-6xl { font-size: 2.5rem; }
          .text-3xl { font-size: 1.5rem; }
          .text-2xl { font-size: 1.25rem; }
          .w-24 { width: 6rem; }
          .w-20 { width: 5rem; }
          .space-y-16 { margin-top: 1.5rem; }
          .md\\:pl-16 { padding-left: 0; }
          .md\\:pr-16 { padding-right: 0; }
        }
      `}</style>
    </div>
  );
}