/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Recipe {
  nome: string;
  descricao: string;
  ingredientes: string[];
  modoPreparo: string[];
  informacoesAdicionais: string;
  imageURL: string;
}

interface RecipeCarouselProps {
  recipes: Recipe[];
}

const RecipeCarousel = ({ recipes }: RecipeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  // Responsivo: mais cards em telas maiores
  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm
    }
    return 3; // fallback para SSR
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  // Atualizar itemsPerView quando a tela redimensionar
  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play opcional (descomentando a linha abaixo)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) =>
          prev + itemsPerView >= recipes.length ? 0 : prev + 1
        );
      }
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView, recipes.length, isTransitioning, isPaused]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev + itemsPerView >= recipes.length ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, recipes.length - itemsPerView) : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index * itemsPerView);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div
      className="w-full max-w-7xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Receitas Brasileiras
        </h1>
        <p className="text-gray-600">
          Descubra os sabores autênticos do Brasil
        </p>
      </div>

      <div className="relative">
        {/* Botão Anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={currentIndex === 0 || isTransitioning}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Botão Próximo */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={
            currentIndex + itemsPerView >= recipes.length || isTransitioning
          }
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Container do Carrossel */}
        <div className="overflow-hidden mx-4 sm:mx-8 lg:mx-12 rounded-2xl">
          <div
            className="flex transition-all duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              gap: itemsPerView === 1 ? "0" : "1rem",
            }}
          >
            {recipes.map((receita, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 flex flex-col h-[520px]"
                style={{
                  width: `calc(${100 / itemsPerView}% - ${
                    itemsPerView === 1 ? "0px" : "0.75rem"
                  })`,
                }}
              >
                {/* Imagem da receita */}
                <div className="relative h-48 w-full bg-gray-200 flex-shrink-0">
                  {receita.imageURL ? (
                    <Image
                      src={receita.imageURL}
                      alt={receita.nome}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback para placeholder
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  ) : null}
                  {(!receita.imageURL || receita.imageURL === "") && (
                    <div className="w-full h-full bg-gradient-to-br from-brand-yellow to-yellow-300 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {receita.nome.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Conteúdo do card */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                    {receita.nome}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {receita.descricao}
                  </p>

                  {/* Ingredientes resumidos */}
                  <div className="mb-4 flex-grow">
                    <h4 className="font-semibold text-gray-800 text-sm mb-2">
                      Principais ingredientes:
                    </h4>
                    <div className="text-xs text-gray-600">
                      {receita.ingredientes
                        .slice(0, 3)
                        .map((ingrediente, i) => (
                          <span key={i} className="inline-block mr-2">
                            • {ingrediente.split(" ").slice(0, 3).join(" ")}
                          </span>
                        ))}
                      {receita.ingredientes.length > 3 && (
                        <span className="text-brand-yellow font-medium">
                          +{receita.ingredientes.length - 3} mais
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Informações adicionais */}
                  <div className="text-xs text-gray-500 italic border-t pt-3 mb-4 line-clamp-2">
                    {receita.informacoesAdicionais}
                  </div>

                  {/* Botão Ver Receita - sempre fixo no final */}
                  <button
                    onClick={() => router.push(`/full-recipe-page/${idx}`)}
                    className="w-full bg-brand-yellow hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mt-auto"
                  >
                    Ver Receita Completa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de posição */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: Math.ceil(recipes.length / itemsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`relative overflow-hidden rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "w-8 h-3 bg-brand-yellow"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110"
                }`}
              >
                {Math.floor(currentIndex / itemsPerView) === index &&
                  !isPaused && (
                    <div
                      className="absolute top-0 left-0 h-full bg-yellow-300 transition-all duration-[4000ms] ease-linear"
                      style={{
                        width: isTransitioning ? "100%" : "0%",
                        animation: !isTransitioning
                          ? "progress 4s linear infinite"
                          : "none",
                      }}
                    />
                  )}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCarousel;
