import React from 'react';
import { FaQuran, FaBook, FaLanguage, FaGlobe, FaStar, FaLightbulb, FaBullseye, FaUtensils, FaSwimmer } from 'react-icons/fa';

const programs = [
  {
    title: "Tahfizh Al-Qur'an Juz 30",
    description: "Menghafal Al-Qur'an juz 30 dan hadits-hadits pilihan untuk pondasi keimanan yang kuat.",
    icon: <FaQuran className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Hafal 20 Hadits Pendek & Doa-doa Harian",
    description: "Menanamkan nilai-nilai Islami sejak dini melalui hafalan hadits dan doa sehari-hari.",
    icon: <FaBook className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Bahasa Arab & Inggris",
    description: "Mengenalkan dasar-dasar Bahasa Arab dan Inggris untuk memudahkan pemahaman.",
    icon: <FaLanguage className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Asmaul Husna",
    description: "Mengenal dan menghafal nama-nama indah Allah untuk memperkuat akidah.",
    icon: <FaStar className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Puncak Tema",
    description: "Kegiatan penutup tema pembelajaran dengan metode yang menyenangkan dan berkesan.",
    icon: <FaLightbulb className="h-12 w-12 text-primary mb-4" />
  },
];

const ekstrakurikuler = [
  { title: "Panahan", icon: <FaBullseye className="h-8 w-8 text-primary mb-2" />},
  { title: "Cooking Day", icon: <FaUtensils className="h-8 w-8 text-primary mb-2" />},
  { title: "Renang", icon: <FaSwimmer className="h-8 w-8 text-primary mb-2" />},
];

const Program = () => {
  return (
    <section id="program" className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-4">
          Program Unggulan Kami
        </h2>
        <p className="text-lg text-text-base mb-12 max-w-2xl mx-auto">
          Kami menyediakan kurikulum terpadu yang berfokus pada pembentukan karakter Islami,
          kemampuan akademis dasar, dan pengembangan kreativitas anak.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-heading-dark mb-2">{program.title}</h3>
              <p className="text-text-base text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-heading-dark mb-8">
          Ekstrakurikuler
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ekstrakurikuler.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-heading-dark">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
