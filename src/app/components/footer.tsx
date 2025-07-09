import { Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-brand-yellow p-4 flex-shrink-0">
      <div className="text-center flex space-between justify-between">
        <Image
          src={"/logo_img.svg"}
          alt="Delícias à mesa"
          width={150}
          height={100}
        />
        <div className="flex gap-4 items-center">
          <Instagram
            width={25}
            className="bg-brand-light-yellow p-0.5 rounded-sm"
          />
          <Twitter
            width={25}
            className="bg-brand-light-yellow p-0.5 rounded-sm"
          />
          <Mail width={25} className="bg-brand-light-yellow p-0.5 rounded-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
