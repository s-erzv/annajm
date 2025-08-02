import React from 'react';

const Fasilitas = () => {
  const fasilitasList = [
    { name: 'Ruang Kelas Full AC', icon: "ac" },
    { name: 'Sarana Bermain Lengkap', icon: "playground" },
    { name: 'Pemeriksaan Gigi/Kesehatan', icon: "health" },
    { name: 'Kunjungan Pendidikan', icon: "education" },
  ];

  const getIcon = (name) => {
    switch(name) {
      case 'ac': return <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>;
      case 'playground': return <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      case 'health': return <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
      case 'education': return <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13.5m0-13.5a5.5 5.5 0 010 11m0-11a5.5 5.5 0 010 11M6.096 15.656L3.929 18a2 2 0 000 2.828l3.172 3.172a2 2 0 002.828 0l2.167-2.167m-1.768-1.768l2.167 2.167m-2.167-2.167a5.5 5.5 0 100 0z" /></svg>;
      default: return null;
    }
  };

  return (
    <section id="fasilitas" className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-8">
        Fasilitas Unggulan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fasilitasList.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            {getIcon(item.icon)}
            <h3 className="text-xl font-bold text-heading-dark mt-2">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fasilitas;