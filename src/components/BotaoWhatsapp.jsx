import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * BotaoWhatsapp exibe um botão flutuante no canto inferior direito
 * com animação de pulso e link para o WhatsApp da empresa.
 */
export default function BotaoWhatsapp() {
  return (
    <a
      href="https://wa.me/5599999999999" // substitua pelo número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-bounce bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1EBE5D] transition"
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
