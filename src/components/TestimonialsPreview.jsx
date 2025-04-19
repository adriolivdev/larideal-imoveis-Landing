import React from 'react';

/**
 * TestimonialsPreview exibe uma seção com depoimentos de clientes.
 * Cada depoimento inclui nome, foto, texto e avaliação de estrelas.
 */
export default function TestimonialsPreview() {
  const testimonials = [
    {
      id: 1,
      name: 'Mariana Souza',
      photo: '/cliente2.png',
      text: 'O atendimento da Lar Ideal foi impecável! Nossa, encontrei meu apartamento dos sonhos rapidamente.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Pereira',
      photo: '/cliente1.png',
      text: 'Super profissionais e transparentes. Eu Recomendo para quem busca confiança no processo.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ana Clara',
      photo: '/cliente3.png',
      text: 'Excelente experiência do início ao fim. A Lar Ideal fez toda a diferença na minha mudança.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-16 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-[#1A237E] mb-8">Depoimentos</h2>

        {/* Grid responsivo de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-lg shadow hover:scale-105 transform transition"
            >
              {/* Foto do cliente */}
              <img
                src={t.photo}
                alt={t.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />

              {/* Texto do depoimento */}
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>

              {/* Estrelas de avaliação */}
              <div className="flex items-center justify-center mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#FFC107] text-xl">★</span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300 text-xl">★</span>
                ))}
              </div>

              {/* Nome do cliente */}
              <p className="text-[#009688] font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}