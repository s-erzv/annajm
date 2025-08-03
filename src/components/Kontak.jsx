import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Kontak = () => {
  return (
    <section id="kontak" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark text-center mb-8">
        Hubungi Kami
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center"> 
        <div className="md:w-1/2">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-heading-dark mb-2">Alamat Sekolah</h3>
            <p className="text-text-base">
              Perumahan Tytyan Kencana Blok M-1 No.3-4<br/>
              Margamulya Bekasi Utara 17142
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-heading-dark mb-2">Telepon/Fax</h3>
            <a href="tel:+622188979052" className="text-primary hover:underline text-lg">(021) 88979052</a>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-heading-dark mb-2">Email</h3>
            <a href="mailto:annajm.bekasiutara@gmail.com" className="text-primary hover:underline text-lg">annajm.bekasiutara@gmail.com</a>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-heading-dark mb-2">Media Sosial</h3>
            <div className="flex space-x-4">
              <a href="https://wa.me/6285717792916" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300"><FaWhatsapp className="h-8 w-8" /></a>
              <a href="https://www.instagram.com/annajm_bekasiutara?igsh=MXdla2pyajBibXg4dA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300"><FaInstagram className="h-8 w-8" /></a>
              <a href="https://www.tiktok.com/@raannajm?_t=ZS-8yYrQ6Lzhys&_r=1" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300"><FaTiktok className="h-8 w-8" /></a>
              <a href="https://youtube.com/@annajmbekasiutara?feature=shared" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors duration-300"><FaYoutube className="h-8 w-8" /></a>
            </div>
          </div>
        </div>
 
        <div className="md:w-1/2 w-full h-80 rounded-2xl shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3553912539096!2d106.99938543140885!3d-6.216776348306648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dfe693c0fa9%3A0x9a5a092583ca391!2sRA%2FRA%20AN-NAJM!5e0!3m2!1sid!2sid!4v1754145123755!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi RA An-Najm"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
