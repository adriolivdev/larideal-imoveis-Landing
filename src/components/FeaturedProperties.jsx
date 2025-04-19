import React from 'react';
import property1 from '/casa1.jpg';
import property2 from '/casa2.jpg';
import property3 from '/casa3.jpg';

/**
 * FeaturedProperties exibe uma seção com imóveis em destaque.
 * Cada card representa uma propriedade com imagem, título, localização, preço e botão de detalhes.
 */
export default function FeaturedProperties() {
  // Lista fixa de propriedades com imagem importada individualmente
  const properties = [
    {
      id: 1,
      image: property1,
      title: 'Apartamento Moderno',
      location: 'Florianópolis, SC',
      price: 3200,
      link: '#',
    },
    {
      id: 2,
      image: property2,
      title: 'Sala Comercial',
      location: 'Joinville, SC',
      price: 5000,
      link: '#',
    },
    {
      id: 3,
      image: property3,
      title: 'Casa Espaçosa',
      location: 'Blumenau, SC',
      price: 4500,
      link: '#',
    },
  ];

  return (
    <section id="propriedades" className="py-16 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-[#1A237E] mb-8">
          Propriedades em Destaque
        </h2>

        {/* Grid de cards responsivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div
              key={prop.id}
              className="bg-[#F5F5F5] rounded-lg shadow p-4 flex flex-col"
            >
              <img
                src={prop.image}
                alt={prop.title}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                {prop.title}
              </h3>
              <p className="text-gray-600 mb-4">{prop.location}</p>
              <p className="text-lg font-bold text-[#1A237E] mb-4">
                {prop.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                })}
              </p>
              <a
                href={prop.link}
                className="mt-auto inline-block text-center px-4 py-2 bg-[#FFC107] text-[#1A237E] rounded hover:bg-[#E0A800] transition"
              >
                Ver detalhes
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
