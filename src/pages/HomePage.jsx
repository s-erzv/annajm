import React from 'react';
import Hero from '../components/Hero';
import TentangKami from '../components/TentangKami';
import Program from '../components/Program';
import Fasilitas from '../components/Fasilitas';
import Galeri from '../components/Galeri';
import Pendaftaran from '../components/Pendaftaran';
import Kontak from '../components/Kontak';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TentangKami /> 
      <Fasilitas />
      <Galeri />
      <Pendaftaran />
      <Kontak />
    </>
  );
};

export default HomePage;