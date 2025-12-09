import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[270px] rounded-lg overflow-hidden">
        <Image src="/Banner.svg" alt="Banner" fill />
      </div>
    </>
  );
};

export default Banner;
