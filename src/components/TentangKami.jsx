import React from 'react';

const TentangKami = () => {
  return (
    <section id="tentang" className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center"> 
        <div className="md:w-1/2 order-2 md:order-1">
          <img 
            src="./about.png" 
            alt="Anak-anak sedang belajar" 
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
 
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-4">
            Tentang Kami
          </h2>
          <p className="text-sm mb-4 leading-relaxed">
            Taman Pendidikan Prasekolah Terpadu / Taman Kanak-kanak An-Najm didirikan untuk memberi solusi bagi pendidikan prasekolah alternatif. An-Najm merupakan lembaga tarbiyah yang menerapkan metode pembelajaran dengan mengikuti perkembangan fitrah anak didik.
          </p>
          <p className="text-sm mb-4 leading-relaxed">
            An-Najm mengembangkan pembelajaran yang berorientasi kepada masa depan merujuk kepada sunnah Rasulullah Shallallahu 'alaihi wasallam. An-Najm berikhtiar memberikan pengabdian terbaik kepada Allah Ta'ala melalui bidang pendidikan guna menghantarkan generasi rabbi radliya, generasi yang meraih kemuliaan dan ridla Allah Subhanahu Wa Ta'ala.
          </p>
          <p className="text-sm mb-8 leading-relaxed italic">
            "Bapak dan Ibu, putra-putri kita yang masih bersih dan berfikir hanif, selayaknya kita jaga dengan memberikan pondasi pendidikan Aqidah dan Ibadah yang bersih dari segala sesuatu yang menyelisihi Sunnah..."
          </p>
          
            <h3 className="text-xl font-bold text-heading-dark mb-3">Informasi Kelompok</h3>
            <ul className="list-disc list-inside space-y-1 text-text-base">
              <li>Kelompok A : Usia 3,5 - 4,5 Tahun</li>
              <li>Kelompok B : Usia 4,5 - 5,5 Tahun</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;