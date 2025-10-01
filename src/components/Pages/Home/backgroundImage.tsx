import Image from "next/image";
import background from "@/assets/bacground.png";

const BackgroundImage = () => {
  return (
    <div className="relative w-full xl:h-screen lg:h-[70vh] min-h-[200px] md:min-h-[500px]">
      
      <Image
        src={background}
        alt="Background"
        fill
        priority={true}
        className="object-contain"
        sizes="80vw"
      />
    </div>
  );
};

export default BackgroundImage;