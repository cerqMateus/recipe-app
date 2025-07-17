"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchComponent from "./SearchComponent";
import recipes from "../../backend/recipes.json";

const NavBar = () => {
  const router = useRouter();

  const handleSurpriseMe = () => {
    // Gera um índice aleatório baseado no número total de receitas
    const randomIndex = Math.floor(Math.random() * recipes.receitas.length);
    router.push(`/full-recipe-page/${randomIndex}`);
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
