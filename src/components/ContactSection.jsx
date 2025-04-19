import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * ContactSection exibe um formulário de contato estilizado com carrossel de imagens otimizado.
 */
export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contato" className="py-20 bg-white scroll-mt-40 pb-32">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {/* Formulário */}
        <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#1A237E] mb-3 flex items-center gap-2">
            📩 Fale Conosco
          </h2>

          <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
            Estamos prontos para te ajudar a encontrar o imóvel ideal. Preencha o formulário e nossa equipe entrará em contato rapidamente para entender suas necessidades.
          </p>

          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
              Obrigado pelo contato! Em breve entraremos em contato.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-semibold block text-[#333] mb-1">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Seu nome completo"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold block text-[#333] mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="voce@email.com"
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-semibold block text-[#333] mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Digite sua mensagem aqui..."
                className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FFC107] hover:bg-[#E0A800] text-[#1A237E] font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-sm"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Carrossel em card maior, com imagem preenchendo tudo */}
        <div className="bg-[#F5F5F5] rounded-xl shadow-lg overflow-hidden w-full">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            swipeable
            emulateTouch
            className="w-full h-full"
          >
            <div className="w-full">
              <img
                src="/familia-image.jpg"
                alt="Cliente satisfeito 1"
                className="w-full object-cover aspect-[3/2] md:aspect-video"
                loading="eager"
              />
            </div>
            <div className="w-full">
              <img
                src="/familia3.jpg"
                alt="Cliente satisfeito 2"
                className="w-full object-cover aspect-[3/2] md:aspect-video"
                loading="eager"
              />
            </div>
            <div className="w-full">
              <img
                src="/familia4.jpg"
                alt="Cliente satisfeito 3"
                className="w-full object-cover aspect-[3/2] md:aspect-video"
                loading="eager"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}