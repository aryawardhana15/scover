export default function FAQSchema({ faqs = [] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Default FAQ data untuk Scover Bimbel
export const defaultFAQs = [
  {
    question: "Apa saja program bimbingan belajar yang tersedia di Scover Bimbel?",
    answer: "Scover Bimbel menyediakan berbagai program bimbingan belajar meliputi UTBK, SBMPTN, Kedinasan, TOEFL, dan persiapan studi ke luar negeri. Semua program dirancang khusus untuk membantu siswa mencapai target akademik mereka."
  },
  {
    question: "Berapa tingkat keberhasilan siswa Scover Bimbel?",
    answer: "Scover Bimbel memiliki tingkat keberhasilan yang sangat tinggi dengan 90% siswa berhasil masuk Perguruan Tinggi Negeri favorit. Hal ini berkat pengajar berkualitas dan metode pembelajaran yang efektif."
  },
  {
    question: "Apakah pengajar di Scover Bimbel berkualitas?",
    answer: "Ya, semua pengajar di Scover Bimbel adalah lulusan perguruan tinggi terbaik dengan pengalaman minimal 4 tahun. Mereka juga memiliki spesialisasi di bidang masing-masing seperti UTBK Fisika, Bahasa Inggris, dan Soshum."
  },
  {
    question: "Bagaimana cara mendaftar di Scover Bimbel?",
    answer: "Anda dapat mendaftar dengan mengunjungi halaman registrasi di website kami atau langsung datang ke lokasi bimbel. Tim kami akan membantu proses pendaftaran dan konsultasi program yang sesuai dengan kebutuhan Anda."
  },
  {
    question: "Dimana lokasi Scover Bimbel?",
    answer: "Scover Bimbel berlokasi di Malang, Jawa Timur. Kami melayani siswa dari berbagai daerah di Malang dan sekitarnya dengan fasilitas pembelajaran yang lengkap dan nyaman."
  }
];
