import React from 'react';
import Pendaftaran from '../components/Pendaftaran';

const PPDBPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center"> 
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-heading-dark mb-4">
              Informasi Pendaftaran Peserta Didik Baru
            </h1>
            <p className="text-lg text-text-base mb-8">
              Selamat datang calon peserta didik baru. Kami mengundang Bapak/Ibu untuk bergabung
              dengan keluarga besar TK An Najm. Silakan temukan informasi lengkap mengenai
              persyaratan dan prosedur pendaftaran di bawah ini.
            </p>
 
            <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-heading-dark mb-4">Alur Pendaftaran</h3>
              <ul className="list-disc list-inside text-left mx-auto text-text-base space-y-2">
                <li>Mengisi formulir pendaftaran online.</li>
                <li>Menyerahkan berkas-berkas persyaratan.</li>
                <li>Mengikuti tes observasi dan wawancara.</li>
                <li>Pengumuman kelulusan.</li>
              </ul>
            </div>
 
            <Pendaftaran />
          </div>
 
          <div className="md:w-1/2">
            <img
              src="https://picsum.photos/id/1015/800/600"
              alt="Anak-anak sekolah sedang belajar"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPDBPage;
