"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Clock, Users } from "lucide-react";
import recipes from "../../../backend/recipes.json";

export default function FullRecipePage() {
  const params = useParams();
  const router = useRouter();
  const recipeIndex = parseInt(params.id as string);

  // Buscar a receita pelo índice
  const receita = recipes.receitas[recipeIndex];

  if (!receita) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Receita não encontrada
          </h1>
          <button
            onClick={() => router.push("/")}
            className="bg-brand-yellow hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com imagem da receita */}
      <div className="relative w-full h-[400px] bg-gray-200">
        {receita.imageURL ? (
          <Image
            src={receita.imageURL}
            alt={receita.nome}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-yellow to-yellow-300 flex items-center justify-center">
            <span className="text-white font-bold text-6xl">
              {receita.nome.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Botão voltar */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 shadow-lg"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* Título da receita */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            {receita.nome}
          </h1>
          <p className="text-lg text-white opacity-90 drop-shadow">
            {receita.descricao}
          </p>
        </div>
      </div>

      {/* Conteúdo da receita */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Informações gerais */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Tempo de preparo: 45 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{receita.informacoesAdicionais}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Ingredientes */}
            <div className="p-6 border-r border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ingredientes
              </h2>
              <ul className="space-y-3">
                {receita.ingredientes.map((ingrediente, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-brand-yellow rounded-full mt-2"></span>
                    <span className="text-gray-700">{ingrediente}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modo de preparo */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Modo de Preparo
              </h2>
              <ol className="space-y-4">
                {receita.modoPreparo.map((passo, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-brand-yellow text-gray-800 font-bold rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed pt-1">
                      {passo}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Informações adicionais */}
          {receita.informacoesAdicionais && (
            <div className="p-6 bg-yellow-50 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Dicas Especiais
              </h3>
              <p className="text-gray-700 italic">
                {receita.informacoesAdicionais}
              </p>
            </div>
          )}
        </div>

        {/* Botão voltar */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="bg-brand-yellow hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Voltar às Receitas
          </button>
        </div>
      </div>
    </div>
  );
}
