import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoAnNajm from '../assets/annajm.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center space-x-4">
          <Link to="/">
            <img src={LogoAnNajm} alt="Logo RA An-Najm" className="h-12" />
          </Link>
          <h1 className="text-sm md:block md:text-lg font-bold text-heading-dark">RA An-Najm Bekasi Utara</h1>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-6 sm:space-x-2">
              <li><Link to="/" className="text-text-base hover:text-primary font-medium transition duration-300">Home</Link></li>
              <li><Link to="/program" className="text-text-base hover:text-primary font-medium transition duration-300">Program</Link></li>
              <li><Link to="/ppdb" className="text-text-base hover:text-primary font-medium transition duration-300">PPDB</Link></li>
              <li><Link to="/artikel" className="text-text-base hover:text-primary font-medium transition duration-300">Artikel</Link></li>
            </ul>
          </nav>
          <Link
            to="/ppdb"
            className="bg-primary hover:bg-blue-700 text-sm text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hidden md:block"
          >
            Daftar Sekarang
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-text-base focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
       
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" onClick={toggleMenu} className="text-text-base hover:text-primary font-medium transition duration-300">Home</Link></li>
            <li><Link to="/program" onClick={toggleMenu} className="text-text-base hover:text-primary font-medium transition duration-300">Program</Link></li>
            <li><Link to="/ppdb" onClick={toggleMenu} className="text-text-base hover:text-primary font-medium transition duration-300">PPDB</Link></li>
            <li><Link to="/artikel" onClick={toggleMenu} className="text-text-base hover:text-primary font-medium transition duration-300">Artikel</Link></li>
            <li>
              <Link to="/ppdb" onClick={toggleMenu} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 mt-2">
                Daftar Sekarang
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
