import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[270px]">
        <Image src="/banner.png" alt="Banner" fill priority />
      </div>
    </>
  );
};

export default Banner;
