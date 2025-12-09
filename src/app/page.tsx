import RecipeCarousel from "./components/RecipeCarousel";
import Banner from "./components/banner";

async function getRecipes() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/recipes`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
}

export default async function Home() {
  const data = await getRecipes();

  return (
    <div className="w-full min-h-full bg-gray-50">
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Banner />
      </div>
      <RecipeCarousel recipes={data.receitas} />
    </div>
  );
}
