import React from 'react';

const Pendaftaran = () => {
  const primaryPhone = "081290547487";
  const secondaryPhone = "0811914241";
  
  const whatsappLink = `https://wa.me/${primaryPhone}?text=Assalamualaikum%2C%20saya%20tertarik%20untuk%20mendaftarkan%20anak%20saya%20di%20TK%20An%20Najm.%20Mohon%20informasi%20selanjutnya.`;

  return (
    <section id="pendaftaran" className="bg-secondary/40 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-4">
          Pendaftaran Peserta Didik Baru
        </h2>
        <p className="text-lg text-text-base mb-2 font-semibold">
          Tahun Pelajaran 2025/2026
        </p>
        <p className="text-text-base mb-8 max-w-2xl mx-auto">
          "Menjadi lembaga tarbiyah yang unggul dalam akademik beraqidah dan beramal dengan meniti jejak Salafus Shalih."
        </p>

        <div className="flex flex-col items-center space-y-4 mb-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2zm3.642 14.542l-1.353-.883a4.075 4.075 0 01-1.282-.93c-.15-.15-.178-.352-.08-.553l.36-.61c.097-.165.178-.35.25-.536.072-.187-.042-.383-.243-.497l-1.077-.61c-.2-.114-.42-.083-.61.082l-1.288 1.155c-.2.175-.246.47-.113.722.133.25.42.443.743.64l.87.522c.36.216.757.41 1.18.572.423.16.88.29 1.34.385l.79.15c.34.066.69.04.99-.086.29-.12.48-.36.56-.66.08-.3-.02-.62-.24-.91z"/></svg>
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