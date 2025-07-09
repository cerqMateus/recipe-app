import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-5 bg-brand-yellow"></div>
      <div className="space-between justify-between my-3 items-center mx-7 flex mb-4">
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
          <Search width={15} />
          <p>Pesquisar</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
