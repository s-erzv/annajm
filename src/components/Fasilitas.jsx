// src/components/Fasilitas.jsx
import React from 'react';
import { FaSnowflake, FaChild, FaTooth, FaBus } from 'react-icons/fa';

const Fasilitas = () => {
  const fasilitasList = [
    { 
      name: 'Ruang Kelas Full AC', 
      icon: <FaSnowflake className="h-10 w-10 text-primary mb-2" /> 
    },
    { 
      name: 'Sarana Bermain Lengkap', 
      icon: <FaChild className="h-10 w-10 text-primary mb-2" /> 
    },
    { 
      name: 'Pemeriksaan Gigi/Kesehatan', 
      icon: <FaTooth className="h-10 w-10 text-primary mb-2" /> 
    },
    { 
      name: 'Kunjungan Pendidikan', 
      icon: <FaBus className="h-10 w-10 text-primary mb-2" /> 
    },
  ];

  return (
    <section id="fasilitas" className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-8">
        Fasilitas Unggulan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fasilitasList.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            {item.icon}
            <h3 className="text-xl font-bold text-heading-dark mt-2">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fasilitas;
