import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '/larIdeal-logo.png';

/**
 * Navbar exibe o cabeçalho fixo com o logo e links de navegação.
 * Inclui menu responsivo para mobile com toggle e destaque de seção ativa.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 96, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'propriedades', 'sobre', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (id) =>
    `${activeSection === id ? 'text-[#FFC107]' : 'text-inherit'} hover:text-[#FFC107] transition`;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1A237E] text-[#F5F5F5] shadow-md z-30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollToSection('home')} className="flex items-center hover:opacity-80 transition">
          <img src={logo} alt="LarIdeal Imóveis" className="h-8 w-auto mr-2" />
          <span className="font-bold text-xl">LarIdeal</span>
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-[#FFC107] transition text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="hidden md:flex space-x-8 font-medium">
          <button onClick={() => scrollToSection('home')} className={linkClass('home')}>Home</button>
          <button onClick={() => scrollToSection('propriedades')} className={linkClass('propriedades')}>Propriedades</button>
          <button onClick={() => scrollToSection('sobre')} className={linkClass('sobre')}>Sobre</button>
          <button onClick={() => scrollToSection('depoimentos')} className={linkClass('depoimentos')}>Depoimentos</button>
          <button onClick={() => scrollToSection('contato')} className={linkClass('contato')}>Contato</button>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#1A237E] px-4 pb-4 space-y-4">
          <button onClick={() => scrollToSection('home')} className={`${linkClass('home')} w-full text-left`}>Home</button>
          <button onClick={() => scrollToSection('propriedades')} className={`${linkClass('propriedades')} w-full text-left`}>Propriedades</button>
          <button onClick={() => scrollToSection('sobre')} className={`${linkClass('sobre')} w-full text-left`}>Sobre</button>
          <button onClick={() => scrollToSection('depoimentos')} className={`${linkClass('depoimentos')} w-full text-left`}>Depoimentos</button>
          <button onClick={() => scrollToSection('contato')} className={`${linkClass('contato')} w-full text-left`}>Contato</button>
        </nav>
      )}
    </header>
  );
}
