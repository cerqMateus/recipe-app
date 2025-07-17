import Image from "next/image";
import recipes from "../backend/recipes.json";
import RecipeCarousel from "./components/RecipeCarousel";

export default function Home() {
  return (
    <div className="w-full min-h-full bg-gray-50">
      <RecipeCarousel recipes={recipes.receitas} />
    </div>
  );
}
