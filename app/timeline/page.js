'use client';

const events = [
{
    year: 2025,
    title: 'Pendaftaran Online',
    description: 'Pendaftaran peserta Duta Budaya Jawa Timur dilakukan secara online melalui platform resmi. Peserta diminta mengisi formulir dan mengunggah dokumen pendukung.',
    date: '1-15 Januari 2025',
    icon: '📝'
  },
  {
    year: 2025,
    title: 'Seleksi Pemberkasan',
    description: 'Pemeriksaan kelengkapan dan keabsahan dokumen peserta yang telah mendaftar secara online.',
    date: '16-17 Januari 2025',
    icon: '📑'
  },
  {
    year: 2025,
    title: 'Seleksi Tahap 1 ',
    description: 'Tes tulis untuk mengukur pengetahuan peserta mengenai budaya Jawa Timur, sejarah, serta isu-isu kebudayaan kontemporer.',
    date: '18-19 Januari 2025',
    icon: '✍️'
  },
  {
    year: 2025,
    title: 'Seleksi Tahap 2',
    description: 'Wawancara langsung untuk menilai pengetahuan budaya, sikap, dan komitmen peserta terhadap pelestarian budaya Jawa Timur.',
    date: '20-25 Januari 2025',
    icon: '🗣️'
  },
  {
    year: 2025,
    title: 'Karantina',
    description: 'Pelatihan intensif dan pembekalan mengenai budaya Jawa Timur seperti tari tradisional, batik, dan etika budaya. Finalis juga mengikuti pembentukan karakter dan penilaian lanjutan.',
    date: '1-10 Februari 2025',
    icon: '🏕️'
  },
  {
    year: 2025,
    title: 'Grand Final',
    description: 'Acara puncak pemilihan Duta Budaya Jawa Timur dengan penampilan budaya serta pengumuman pemenang Narapati & Kencana.',
    date: '15 Februari 2025',
    icon: '👑'
  }
];

export default function TimelineClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E1618] to-[#1C2526] relative overflow-hidden">
      {/* Golden borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] via-[#F28C38] to-[#D4A017]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4A017] via-[#F28C38] to-[#D4A017]"></div>

      {/* Hero Section */}
      <div className="relative py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F4E1B9] mb-4">
            <span className="text-[#D4A017]">Timeline</span> Pendaftaran
          </h1>
          <p className="text-lg text-[#B0A18F]">
            Perjalanan Pemilihan Duta Budaya Jawa Timur Narapati & Kencana 2025
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 pb-24">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4A017] via-[#F28C38] to-[#D4A017] transform -translate-x-1/2"></div>

        {/* Events */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center">
              {/* Year */}
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#1C2526] border-4 border-[#D4A017] text-2xl font-bold text-[#D4A017] z-10">
                {event.year}
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mt-6 md:mt-0`}>
                <div className="bg-[#1C2526] p-8 rounded-lg border border-[#D4A017]/30 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{event.icon}</span>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#F4E1B9]">{event.title}</h3>
                      <p className="text-sm text-[#D4A017]">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-[#B0A18F] pl-12">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-[#1C2526] px-8 py-6 rounded-lg border border-[#D4A017]/30 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F4E1B9] mb-4">
              Jadilah Bagian Tradisi Kami
            </h2>
            <p className="text-[#B0A18F] mb-6 max-w-2xl mx-auto">
              Daftarkan diri Anda sekarang untuk mengikuti seleksi Duta Budaya Jawa Timur Narapati & Kencana 2025
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-[#D4A017] to-[#F28C38] text-[#1C2526] font-bold rounded-full hover:shadow-lg transition-all">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}