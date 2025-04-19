import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

/**
 * Footer exibe o rodapé do site com navegação rápida, informações de contato e redes sociais.
 */
export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#F5F5F5] py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Links rápidos */}
        <div>
          <h3 className="font-bold mb-4">Navegação</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-[#FFC107]">Home</a></li>
            <li><a href="#propriedades" className="hover:text-[#FFC107]">Propriedades</a></li>
            <li><a href="#sobre" className="hover:text-[#FFC107]">Sobre</a></li>
            <li><a href="#contato" className="hover:text-[#FFC107]">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-bold mb-4">Contato</h3>
          <p className="mb-2">📍 Rua dos Imóveis, 123 - Florianópolis, SC</p>
          <p className="mb-2">📞 (48) 99999-0000</p>
          <p>✉️ contato@larideal-imoveis.com.br</p>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-bold mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#FFC107]">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-[#FFC107]">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[#FFC107]">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Linha de copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LarIdeal Imóveis. Todos os direitos reservados.
      </div>
    </footer>
  );
}
