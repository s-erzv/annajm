import React, { useState, useEffect } from 'react';
import articlesData from '../data/articles.json'; 

const ArtikelPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    setArticles(articlesData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="py-16 text-center">
        <p className="text-xl text-text-base">Memuat artikel...</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-heading-dark text-center mb-12">
          Artikel & Berita
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-heading-dark mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-text-base mb-2">
                Oleh: {article.author} | {article.date}
              </p>
              <p className="text-text-base text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline font-semibold"
              >
                Baca Selengkapnya
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
