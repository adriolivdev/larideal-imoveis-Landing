import React from 'react';

/**
 * HeroSection exibe a seção de destaque com imagem de fundo, título e chamada para ação.
 */
export default function ContactSection() {
  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat text-white scroll-mt-24 mb-10 md:mb-20"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Conteúdo centralizado mais abaixo */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 text-center pb-20 md:pb-32">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-balance">
          Encontre seu <span className="text-yellow-400">Lar Ideal</span>
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
          Imóveis residenciais e comerciais com atendimento personalizado.
        </p>
        <a
          href="#propriedades"
          className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-300 hover:shadow-xl"
        >
          Encontre um imóvel
        </a>
      </div>
    </section>
  );
}
