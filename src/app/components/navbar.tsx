import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="flex-shrink-0">
      <div className="w-full h-5 bg-brand-yellow"></div>
      <div className="space-between justify-between my-2 items-center mx-7 flex mb-2">
        <div className="p-2">
          <Image
            src={"/logo_img.svg"}
            width={150}
            height={100}
            alt="Delícias à mesa"
          />
        </div>
        <div className="">
          <Button className="font-semibold text-md" variant="ghost">
            Home
          </Button>
          <Button className="font-semibold text-md" variant="ghost">
            Receitas
          </Button>
          <Button className="font-semibold text-md" variant="ghost">
            Sobre nós
          </Button>
        </div>
        <div className="flex gap-1">
          <Search width={15} />
          <p>Pesquisar</p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
