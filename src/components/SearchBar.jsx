import React, { useState } from 'react';

/**
 * SearchBar exibe um formulário de busca de imóveis com filtros de tipo,
 * localização e faixa de preço. Retorna os valores preenchidos ao componente pai.
 */
export default function SearchBar({ onSearch }) {
  // Estados locais para cada filtro
  const [tipo, setTipo] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [preco, setPreco] = useState('');

  // Função executada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Passa os filtros para o componente pai
    onSearch({ tipo, localizacao, preco });
  };

  return (
    // Container com fundo neutro claro e borda arredondada
    <form
      onSubmit={handleSubmit}
      className="bg-[#F5F5F5] p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4"
    >
      {/* Filtro por tipo de imóvel */}
      <div className="flex-1">
        <label className="block text-[#333333] font-medium mb-1" htmlFor="tipo">
          Tipo
        </label>
        <select
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">Qualquer</option>
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>

      {/* Filtro por localização */}
      <div className="flex-1">
        <label className="block text-[#333333] font-medium mb-1" htmlFor="localizacao">
          Localização
        </label>
        <input
          id="localizacao"
          type="text"
          placeholder="Cidade ou bairro"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      {/* Filtro por faixa de preço */}
      <div className="flex-1">
        <label className="block text-[#333333] font-medium mb-1" htmlFor="preco">
          Faixa de preço
        </label>
        <select
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">Qualquer</option>
          <option value="0-2000">Até R$2.000</option>
          <option value="2000-5000">R$2.000 - R$5.000</option>
          <option value="5000+">Acima de R$5.000</option>
        </select>
      </div>

      {/* Botão de busca com cor de acento dourado */}
      <button
        type="submit"
        className="bg-[#FFC107] text-[#1A237E] font-semibold px-6 py-3 rounded-lg hover:bg-[#E0A800] transition self-end md:self-center"
      >
        Buscar
      </button>
    </form>
  );
}
