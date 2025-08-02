import React from 'react';
import Program from '../components/Program';

const ProgramPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading-dark text-center mb-8">
          Program Pembelajaran Kami
        </h1>
        <p className="text-lg text-text-base mb-12 max-w-3xl mx-auto text-center">
          Program pendidikan di TK An Najm dirancang untuk mengembangkan potensi anak secara holistik, mencakup aspek akidah, akhlak, kognitif, motorik, bahasa, dan sosial emosional, dengan landasan Al-Qur'an dan As-Sunnah.
        </p>
        <Program /> 
      </div>
    </div>
  );
};

export default ProgramPage;