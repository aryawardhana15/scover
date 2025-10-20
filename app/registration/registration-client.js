'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegistrationClient() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    grade: '',
    program: '',
    message: ''
  });

  // Custom form submission with popup

  const programs = [
    'Ujian Nasional SD',
    'Ujian Nasional SMP',
    'Ujian Nasional SMA',
    'SBMPTN Saintek',
    'SBMPTN Soshum',
    'SBMPTN Campuran',
    'CPNS',
    'TNI/Polri',
    'BUMN',
    'TOEFL Preparation',
    'IELTS Preparation',
    'University Application'
  ];

  const grades = [
    'Kelas 6 SD',
    'Kelas 9 SMP',
    'Kelas 12 SMA',
    'Lulusan SMA',
    'Mahasiswa',
    'Umum'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xyznvqlr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Form Pendaftaran - Scover Bimbel'
        })
      });
      
      if (response.ok) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          school: '',
          grade: '',
          program: '',
          message: ''
        });
      } else {
        alert('Terjadi kesalahan saat mengirim form. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim form. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-full flex items-center justify-center text-4xl text-white">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pendaftaran Berhasil!</h2>
          <p className="text-gray-600 mb-6">
            Terima kasih telah mendaftar di Scover Bimbel. Tim kami akan segera menghubungi Anda dalam 1x24 jam.
          </p>
          <div className="space-y-4">
            <Link href="/">
              <button className="w-full bg-gradient-to-r from-[#003049] to-[#0c5681] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Kembali ke Beranda
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full bg-transparent border-2 border-[#003049] text-[#003049] py-3 rounded-lg font-semibold hover:bg-[#003049] hover:text-white transition-all duration-300">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#003049] to-[#0c5681] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/education-pattern.png')] bg-repeat bg-[length:300px] mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pendaftaran <span className="text-[#F59E0B]">Scover Bimbel</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Daftar sekarang dan raih impian pendidikanmu bersama tim tutor berpengalaman
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Form Pendaftaran</h2>
              <p className="text-gray-600">
                Isi form di bawah ini dengan lengkap dan benar
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
                  Asal Sekolah *
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                  placeholder="Nama sekolah Anda"
                />
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-2">
                  Kelas/Jenjang *
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Pilih kelas/jenjang</option>
                  {grades.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
                  Program yang Diinginkan *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Pilih program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan/Kebutuhan Khusus
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003049] focus:border-transparent transition-all duration-300"
                  placeholder="Ceritakan kebutuhan khusus atau pertanyaan Anda..."
                />
              </div>

              <div className="bg-gradient-to-r from-[#003049]/5 to-[#0c5681]/5 border border-[#003049]/20 rounded-lg p-4">
                <h3 className="font-semibold text-[#003049] mb-2">Informasi Penting:</h3>
                <ul className="text-sm text-[#003049]/80 space-y-1">
                  <li>• Tim kami akan menghubungi Anda dalam 1x24 jam</li>
                  <li>• Konsultasi awal gratis untuk menentukan program yang tepat</li>
                  <li>• Pembayaran dapat dilakukan secara bertahap</li>
                  <li>• Garansi uang kembali jika tidak puas dengan pelayanan</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#003049] to-[#0c5681] hover:shadow-lg hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Butuh Bantuan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center text-2xl text-white">
                📞
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600">+62 857 0882 9751</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center text-2xl text-white">
                💬
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+62 857 0882 9751</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center text-2xl text-white">
                📧
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@scoverbimbel.com</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#003049] to-[#0c5681] rounded-full flex items-center justify-center text-4xl text-white">
              ✓
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pendaftaran Berhasil!</h2>
            <p className="text-gray-600 mb-6">
              Terima kasih telah mendaftar di Scover Bimbel. Tim kami akan segera menghubungi Anda dalam 1x24 jam.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full bg-gradient-to-r from-[#003049] to-[#0c5681] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Tutup
              </button>
              <Link href="/contact">
                <button className="w-full bg-transparent border-2 border-[#003049] text-[#003049] py-3 rounded-lg font-semibold hover:bg-[#003049] hover:text-white transition-all duration-300">
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
