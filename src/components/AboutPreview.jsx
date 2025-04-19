import React from 'react';
import { FaSearchLocation, FaRegHandshake, FaHome } from 'react-icons/fa';

/**
 * AboutPreview exibe a seção "Sobre Nós" com uma explicação e o processo com ícones.
 */
export default function AboutPreview() {
  return (
    <section className="py-16 bg-[#F5F5F5] scroll-mt-24" id="sobre">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-[#1A237E] mb-6">
          Sobre Nós
        </h2>

        {/* Texto explicativo */}
        <p className="text-lg text-gray-700 mb-10">
          A <strong>Lar Ideal Imóveis</strong> atua com compromisso, transparência e atenção a cada detalhe do seu sonho. 
          Oferecemos um atendimento humanizado, auxiliando você em todas as etapas da compra ou aluguel do seu imóvel ideal.
        </p>

        {/* Etapas do processo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <FaSearchLocation size={40} className="text-[#1A237E] mb-4" />
            <h3 className="font-semibold text-lg text-[#1A237E] mb-2">1. Escolha</h3>
            <p className="text-gray-700 text-sm">
              Você nos conta o que precisa e buscamos imóveis que se encaixem no seu perfil.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaRegHandshake size={40} className="text-[#1A237E] mb-4" />
            <h3 className="font-semibold text-lg text-[#1A237E] mb-2">2. Visita e Negociação</h3>
            <p className="text-gray-700 text-sm">
              Agendamos visitas e auxiliamos em toda a parte de negociação e documentação.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaHome size={40} className="text-[#1A237E] mb-4" />
            <h3 className="font-semibold text-lg text-[#1A237E] mb-2">3. Imóvel Garantido</h3>
            <p className="text-gray-700 text-sm">
              Com tudo certo, entregamos as chaves do seu novo lar com segurança e satisfação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
