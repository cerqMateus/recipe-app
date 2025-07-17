import Image from "next/image";
import recipes from "../backend/recipes.json";
import RecipeCarousel from "./components/RecipeCarousel";
import Banner from "./components/banner";

export default function Home() {
  return (
    <div className="w-full min-h-full bg-gray-50">
      <Banner />
      <RecipeCarousel recipes={recipes.receitas} />
    </div>
  );
}
