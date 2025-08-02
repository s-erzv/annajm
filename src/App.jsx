import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
 
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import PPDBPage from './pages/PPDBPage';
//import ArtikelPage from './pages/ArtikelPage';

function App() {
  return (
    <Router>
      <div className="bg-white text-gray-800 font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/ppdb" element={<PPDBPage />} />
            {/* <Route path="/artikel" element={<ArtikelPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;