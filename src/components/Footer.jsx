import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

/**
 * Footer exibe o rodapé do site com navegação rápida, informações de contato e redes sociais.
 */
export default function Footer() {
  return (
    <footer className="bg-[#1A237E] text-[#F5F5F5] py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Links rápidos */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#FFC107] transition">Home</a></li>
            <li><a href="#propriedades" className="hover:text-[#FFC107] transition">Propriedades</a></li>
            <li><a href="#sobre" className="hover:text-[#FFC107] transition">Sobre</a></li>
            <li><a href="#contato" className="hover:text-[#FFC107] transition">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Contato</h3>
          <p className="mb-2 text-sm">📍 Rua dos Imóveis, 123 - Florianópolis, SC</p>
          <p className="mb-2 text-sm">📞 (48) 99999-0000</p>
          <p className="text-sm">✉️ contato@larideal-imoveis.com.br</p>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-bold mb-4 text-lg">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC107] transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Linha de copyright */}
      <div className="mt-10 text-center text-xs text-gray-300">
        &copy; {new Date().getFullYear()} LarIdeal Imóveis. Todos os direitos reservados.
      </div>
    </footer>
  );
}