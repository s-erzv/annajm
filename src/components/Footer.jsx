import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">RA An-Najm Bekasi Utara</h3>
          <p className="text-sm">
            Mendidik generasi saleh dan cerdas sejak dini dengan manhaj salaf.
          </p>
          <p className="text-xs mt-4">
            &copy; {currentYear} RA An-Najm Bekasi Utara. All rights reserved.
          </p>
        </div>
         
        <div className="md:text-right">
          <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-end space-x-4"> 
            <a 
              href="https://wa.me/6281290547487" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaWhatsapp className="h-8 w-8" />
            </a> 
            <a 
              href="https://instagram.com/annajm_bekasiutara" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaInstagram className="h-8 w-8" />
            </a> 
            <a
              href="#"  
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaTiktok className="h-8 w-8" />
            </a> 
            <a
              href="#"  
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <FaYoutube className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
