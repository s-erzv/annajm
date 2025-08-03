import React from 'react';

const Galeri = () => { 
  const galleryImages = [
    "/activity.png",
    "/activity6.png",
    "/activity9.png",
    "/activity3.png",
    "/activity1.png",
    "/activity4.png",
  ];

  return (
    <section id="galeri" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark text-center mb-8">
          Galeri Kegiatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <img src={imageUrl} alt={`Kegiatan TK An Najm ${index + 1}`} className="w-full h-[270px] object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeri;