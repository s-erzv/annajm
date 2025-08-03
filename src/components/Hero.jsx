import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12"> 
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-heading-dark leading-tight mb-4">
              Mendidik Generasi Saleh <br /> dan Cerdas Sejak Dini
            </h1>
            <p className="text-lg md:text-xl text-text-base mb-8">
              TK An Najm berkomitmen menanamkan nilai-nilai Islam dengan manhaj salaf,
              menciptakan lingkungan belajar yang aman dan penuh kasih sayang.
            </p>
            <a
              href="#pendaftaran"
              className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 inline-block"
            >
              Daftar Sekarang
            </a>
          </div>
           
          <div className="md:w-1/2">
            <img 
              src="./hero.jpg" 
              alt="Anak-anak belajar di TK An Najm" 
              className="rounded-2xl shadow-lg w-full " 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;