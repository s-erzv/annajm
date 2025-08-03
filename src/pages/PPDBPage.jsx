// src/pages/PPDBPage.jsx
import React from 'react';
import Pendaftaran from '../components/Pendaftaran';
import { FaCheckCircle, FaUserPlus, FaWhatsapp, FaFileAlt } from 'react-icons/fa';

const PPDBPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Bagian Judul Halaman */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-heading-dark mb-4">
            Informasi Pendaftaran Peserta Didik Baru
          </h1>
          <p className="text-lg text-text-base max-w-3xl mx-auto">
            Selamat datang calon peserta didik baru. Kami mengundang Bapak/Ibu untuk bergabung
            dengan keluarga besar TK An Najm. Silakan temukan informasi lengkap mengenai
            persyaratan dan prosedur pendaftaran di bawah ini.
          </p>
        </div>

        {/* Bagian Alur Pendaftaran dengan Card dan Ikon */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-heading-dark text-center mb-8">Tahapan Pendaftaran</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaWhatsapp className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading-dark">1. Hubungi Kami</h3>
                <p className="text-text-base text-sm mt-1">Hubungi kami melalui WhatsApp untuk mendapatkan informasi dan formulir pendaftaran.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaFileAlt className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading-dark">2. Isi Formulir</h3>
                <p className="text-text-base text-sm mt-1">Lengkapi formulir pendaftaran yang akan kami kirimkan.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaUserPlus className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading-dark">3. Penentuan Kelompok</h3>
                <p className="text-text-base text-sm mt-1">Putra/putri Anda akan dikelompokkan ke dalam Kelompok A atau B.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4">
              <FaCheckCircle className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading-dark">4. Selesai</h3>
                <p className="text-text-base text-sm mt-1">Proses pendaftaran selesai. Anda akan menerima informasi lebih lanjut.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Gambar dan Call-to-Action */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="./PPDB.png"
              alt="Anak-anak sekolah sedang belajar"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 text-center md:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-extrabold text-heading-dark mb-4">
              Ayo Bergabung Bersama Kami!
            </h2>
            <p className="text-lg text-text-base">
              Daftarkan putra-putri Anda sekarang juga untuk menjadi bagian dari generasi
              sholeh dan cerdas di RA An-Najm Bekasi Utara.
            </p> */}
            <Pendaftaran />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PPDBPage;
