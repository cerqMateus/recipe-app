"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header com botão de voltar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cabeçalho da página */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Heart className="h-12 w-12 text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossa História
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma jornada que começou na cozinha da vovó e se transformou em amor
            compartilhado
          </p>
        </div>

        {/* História principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Tudo começou em 2018, quando <strong>Maria e João Silva</strong>,
              um casal apaixonado pela culinária brasileira, se reencontraram
              após anos vivendo no exterior. Durante suas viagens pelo mundo,
              eles perceberam como sentiam falta dos sabores de casa - daquele
              pão de queijo quentinho da tarde, do brigadeiro que a avó fazia
              nos aniversários, da feijoada de domingo que reunia toda a
              família.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              De volta ao Brasil, eles começaram a recriar essas receitas em sua
              pequena cozinha em São Paulo. O que era para ser apenas nostalgia,
              logo se transformou em algo maior. Amigos e vizinhos começaram a
              pedir as receitas, e eles perceberam que não eram os únicos com
              saudade desses sabores únicos.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Foi assim que nasceu o <strong>Delícias à Mesa</strong> - não
              apenas como um site de receitas, mas como um lar digital onde cada
              prato conta uma história, onde cada ingrediente carrega memórias
              afetivas, e onde cada receita é um convite para reunir pessoas ao
              redor da mesa.
            </p>
          </div>
        </div>

        {/* Missão e valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="bg-orange-100 rounded-full p-3 w-fit mx-auto mb-4">
              <ChefHat className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Nossa Missão
            </h3>
            <p className="text-gray-600">
              Preservar e compartilhar as tradições culinárias brasileiras,
              tornando cada refeição uma celebração de nossa rica cultura
              gastronômica.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="bg-red-100 rounded-full p-3 w-fit mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Nossos Valores
            </h3>
            <p className="text-gray-600">
              Acreditamos que cozinhar é um ato de amor. Cada receita é testada
              com carinho e compartilhada com a esperança de criar momentos
              especiais.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="bg-yellow-100 rounded-full p-3 w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Nossa Comunidade
            </h3>
            <p className="text-gray-600">
              Mais de 100 mil pessoas já fizeram parte da nossa mesa virtual,
              compartilhando receitas, dicas e principalmente, muito amor pela
              comida brasileira.
            </p>
          </div>
        </div>

        {/* Seção pessoal */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Um Convite Especial</h2>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Hoje, o Delícias à Mesa é mais que um site - é uma grande família
              espalhada pelo Brasil e pelo mundo. Cada pessoa que prepara uma de
              nossas receitas adiciona seu próprio tempero, sua própria
              história, e assim nossa coleção cresce não apenas em número, mas
              em alma.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              <strong>
                Você está convidado(a) a fazer parte desta história.
              </strong>{" "}
              Que tal começar escolhendo uma receita e criando suas próprias
              memórias afetivas? A mesa está posta, e você é sempre
              bem-vindo(a)!
            </p>
          </div>
        </div>

        {/* Chamada para ação */}
        <div className="text-center mt-12">
          <Button
            onClick={() => router.push("/")}
            className="bg-brand-yellow hover:bg-yellow-400 text-gray-800 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Explorar Receitas ❤️
          </Button>
        </div>
      </div>
    </div>
  );
}
