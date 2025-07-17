"use client";

import { usePathname } from "next/navigation";
import Banner from "./banner";

const ConditionalBanner = () => {
  const pathname = usePathname();

  // Não mostrar banner nas páginas de receita completa
  if (pathname?.startsWith("/full-recipe-page")) {
    return null;
  }

  return <Banner />;
};

export default ConditionalBanner;
