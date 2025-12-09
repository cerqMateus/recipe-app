"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchComponent from "./SearchComponent";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [recipeIds, setRecipeIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecipeIds = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        setRecipeIds(data.receitas.map((r: { id: string }) => r.id));
      } catch (error) {
        console.error("Error fetching recipe IDs:", error);
      }
    };
    fetchRecipeIds();
  }, []);

  const handleSurpriseMe = () => {
    if (recipeIds.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipeIds.length);
      router.push(`/full-recipe-page/${recipeIds[randomIndex]}`);
    }
  };

  return (
    <header className="flex-shrink-0">
      <div className="w-full h-5 bg-brand-yellow"></div>
      <div className="flex justify-between items-center mx-7 my-2 mb-2">
        <div>
          <Image
            src={"/logo_img.svg"}
            width={150}
            height={100}
            alt="Delícias à mesa"
          />
        </div>
        <div className="">
          <Button
            className="font-semibold text-lg"
            variant="ghost"
            onClick={() => router.push("/")}
          >
            Home
          </Button>
          <Button
            className="font-semibold text-lg"
            variant="ghost"
            onClick={handleSurpriseMe}
          >
            Me Surpreenda
          </Button>
          <Button
            className="font-semibold text-lg"
            variant="ghost"
            onClick={() => router.push("/about")}
          >
            Sobre nós
          </Button>
        </div>
        <div className="flex gap-1">
          <SearchComponent />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
