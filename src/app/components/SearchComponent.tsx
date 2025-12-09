"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import type { Recipe } from "@/types/recipe";

export default function SearchComponent() {
  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open && recipes.length === 0) {
      const fetchRecipes = async () => {
        setLoading(true);
        try {
          const response = await fetch("/api/recipes");
          const data = await response.json();
          setRecipes(data.receitas);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchRecipes();
    }
  }, [open, recipes.length]);

  const handleSelectRecipe = (recipeId: string) => {
    setOpen(false);
    router.push(`/full-recipe-page/${recipeId}`);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors duration-200 min-w-[250px] justify-start shadow-sm"
      >
        <Search className="h-4 w-4" />
        <span>Pesquisar receitas...</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-500 opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite o nome da receita..." />
        <CommandList>
          {loading ? (
            <div className="p-4 text-center text-sm text-gray-500">
              Carregando...
            </div>
          ) : (
            <>
              <CommandEmpty>Nenhuma receita encontrada.</CommandEmpty>
              <CommandGroup heading="Receitas">
                {recipes.map((receita) => (
                  <CommandItem
                    key={receita.id}
                    value={receita.nome}
                    onSelect={() => handleSelectRecipe(receita.id)}
                    className="cursor-pointer p-3"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Search className="h-4 w-4 text-gray-400" />
                      <div className="flex flex-col gap-1 flex-1">
                        <span className="font-medium text-gray-900">
                          {receita.nome}
                        </span>
                        <span className="text-sm text-gray-500 line-clamp-1">
                          {receita.descricao}
                        </span>
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
