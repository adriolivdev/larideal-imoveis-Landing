import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import FeaturedProperties from './components/FeaturedProperties';
import AboutPreview from './components/AboutPreview';
import TestimonialsPreview from './components/TestimonialsPreview';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BotaoWhatsapp from './components/BotaoWhatsapp';

/**
 * App é o componente principal do LarIdeal Imóveis.
 * Integra as seções principais: Navbar, HeroSection, SearchBar,
 * FeaturedProperties, AboutPreview, TestimonialsPreview,
 * ContactSection e Footer.
 */
export default function App() {
  const allProperties = [
    {
      id: 1,
      image: '/src/assets/property1.jpg',
      title: 'Apartamento Moderno',
      location: 'Florianópolis, SC',
      type: 'residencial',
      price: 3000,
      link: '#',
    },
    {
      id: 2,
      image: '/src/assets/property2.jpg',
      title: 'Sala Comercial',
      location: 'Joinville, SC',
      type: 'comercial',
      price: 5000,
      link: '#',
    },
    {
      id: 3,
      image: '/src/assets/property3.jpg',
      title: 'Casa Espaçosa',
      location: 'Blumenau, SC',
      type: 'residencial',
      price: 4500,
      link: '#',
    },
  ];

  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const handleSearch = ({ tipo, localizacao, preco }) => {
    let results = allProperties;

    if (tipo) {
      results = results.filter((p) => p.type === tipo);
    }

    if (localizacao) {
      results = results.filter((p) =>
        p.location.toLowerCase().includes(localizacao.toLowerCase())
      );
    }

    if (preco) {
      if (preco === '0-2000') {
        results = results.filter((p) => p.price <= 2000);
      } else if (preco === '2000-5000') {
        results = results.filter((p) => p.price > 2000 && p.price <= 5000);
      } else if (preco === '5000+') {
        results = results.filter((p) => p.price > 5000);
      }
    }

    setFilteredProperties(results);
  };

  return (
    <>
      <Navbar />

      <main className="pt-16 font-sans text-[#333333] overflow-x-hidden">
        <HeroSection />

        <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
          <SearchBar onSearch={handleSearch} />
        </div>

        <FeaturedProperties properties={filteredProperties} />
        <AboutPreview />
        <TestimonialsPreview />
        <ContactSection />
        <Footer />
      </main>

      <BotaoWhatsapp />
    </>
  );
}
