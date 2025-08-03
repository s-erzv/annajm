// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo & Mission */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-2">RA An-Najm</h3>
            <p className="text-sm leading-relaxed">
              Mendidik generasi saleh dan cerdas sejak dini dengan manhaj salaf.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a 
                href="https://wa.me/6285717792916" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="hover:text-white transform hover:scale-110 transition-transform duration-300"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a> 
              <a 
                href="https://www.instagram.com/annajm_bekasiutara?igsh=MXdla2pyajBibXg4dA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="hover:text-white transform hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="h-6 w-6" />
              </a> 
              <a
                href="https://www.tiktok.com/@raannajm?_t=ZS-8yYrQ6Lzhys&_r=1"  
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-white transform hover:scale-110 transition-transform duration-300"
              >
                <FaTiktok className="h-6 w-6" />
              </a> 
              <a
                href="https://youtube.com/@annajmbekasiutara?feature=shared"  
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-white transform hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="/program" className="hover:text-white transition-colors duration-300">Program</a>
              </li>
              <li>
                <a href="/ppdb" className="hover:text-white transition-colors duration-300">PPDB</a>
              </li>
              <li>
                <a href="/artikel" className="hover:text-white transition-colors duration-300">Artikel</a>
              </li>
            </ul>
          </div>
          
          {/* Address */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Lokasi</h4>
            <p className="text-sm">
              Jl. Perjuangan, Gg. Cendrawasih No.41
              <br/>
              RT.005/RW.004, Kel. Teluk Pucung,
              <br/>
              Kec. Bekasi Utara, Kota Bekasi
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
            <p className="text-sm">
              Email: info@ra-annajm.sch.id
              <br/>
              Telepon: +62 812-3456-7890
            </p>
          </div>
        </div>
        
        {/* Separator and Copyright */}
        <hr className="my-10 border-gray-700" />
        <div className="text-center text-sm text-gray-500">
          © {currentYear} RA An-Najm Bekasi Utara. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;