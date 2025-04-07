import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[670px] sm:h-[600px] md:h-[700px] lg:h-[700px]">
      <div className="lg:block hidden absolute top-[30%] left-[30%]">
        <Image src="/About/triangle.png" alt="" width={40} height={40} />
      </div>
      <div className="lg:block hidden absolute bottom-[15%] right-[35%]">
        <Image src="/About/circle.png" alt="" width={30} height={30} />
      </div>
      <div className="lg:block hidden absolute top-[30%] right-[30%]">
        <Image src="/About/circle2.png" alt="" width={30} height={30} />
      </div>
      <div className="lg:block hidden absolute bottom-[15%] left-[20%]">
        <Image src="/About/zic-zac.png" alt="" width={40} height={40} />
      </div>
      <div className="lg:block hidden absolute bottom-[30%] right-[20%]">
        <Image src="/About/rectangle.png" alt="" width={40} height={40} />
      </div>
      {/*Desktop Image*/}
      <Image
        src="/About/about2.png"
        alt="Gallery"
        width={1300}
        height={500}
        className="w-full hidden md:block h-full object-cover"
      />
      {/*Moible Image*/}
      <Image
        src="/About/about1.png"
        alt="Gallery"
        width={1300}
        height={500}
        className="w-full block md:hidden h-full object-cover"
      />

      
      <div className="flex flex-col gap-10 lg:gap-15 sm:gap-6 text-white absolute top-[42%] lg:top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] lg:max-w-[1000px] max-w-[700px] text-center px-6 sm:px-4">
        <h1 className="font-bold text-[30px] sm:text-5xl md:text-6xl">About Us</h1>
        <p className="text-[12px] lg:w-[700px] m-auto sm:text-base md:text-lg font-[400] lg:text-[15px]">
        Our commitment goes beyond just painting walls—we focus on 
        delivering durable, stylish, and innovative solutions tailored to your vision. 
        Whether it's a residential makeover, commercial project, or custom graphic printing, 
        we ensure a flawless finish that stands the test of time. Since 16 years, we have been 
        dedicated to excellence, proudly serving our clients. Located in Thane, we continue to 
        bring creativity and precision to every project.

        </p>
      </div>
    </div>
  );
}