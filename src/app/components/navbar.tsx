import { Button } from "@/components/ui/button";
import Image from "next/image";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
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
          <Button className="font-semibold text-lg" variant="ghost">
            Home
          </Button>
          <Button className="font-semibold text-lg" variant="ghost">
            Receitas
          </Button>
          <Button className="font-semibold text-lg" variant="ghost">
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
