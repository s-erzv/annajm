import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Pendaftaran = () => {
  const primaryPhone = "081290547487";
  const secondaryPhone = "0811914241";
  
  const whatsappLink = `https://wa.me/${primaryPhone}?text=Assalamualaikum%2C%20saya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20di%20TK%20An%20Najm.%20Mohon%20informasi%20selanjutnya.`;

  return (
    <section id="pendaftaran" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-4">
          Pendaftaran Peserta Didik Baru
        </h2>
        <p className="text-lg text-text-base mb-2 font-semibold">
          Tahun Pelajaran 2025/2026
        </p>
        <p className="text-text-base mb-8 max-w-2xl mx-auto">
          Menjadi lembaga tarbiyah yang unggul dalam akademik beraqidah dan beramal dengan meniti jejak Salafus Shalih.
        </p>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <FaWhatsapp className="h-6 w-6" />
            <span>Hubungi Kami via WhatsApp</span>
          </a>
        </div>
        
        <p className="text-lg text-text-base mb-2">Atau hubungi kami melalui telepon:</p>
        <p className="text-lg font-bold text-primary">
          <a href={`tel:${primaryPhone}`} className="hover:underline">{primaryPhone}</a> | <a href={`tel:${secondaryPhone}`} className="hover:underline">{secondaryPhone}</a>
        </p>
      </div>
    </section>
  );
};

export default Pendaftaran;
