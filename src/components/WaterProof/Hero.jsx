import Image from 'next/image';
export default function Hero() {
  return (
  <div className="justify-center relative w-[99%] h-auto">
    {/*Top Image */}
  <div className="lg:w-50%">
     
      {/*Image to be displayed on desktop/webpage */}
      <Image
        src="/images/painter2.jpg"
        alt="Paint image"
        width={600}
        height={500}
        className="hidden md:block w-full h-[500px] object-cover"
       
      />
       {/*Image to be displayed on mobile */}
       <Image
        src="/images/mobile_image.png"
        alt="Paint image on mobile phone"
        width={800}  
        height={600}
        className="block md:hidden w-full h-auto object-contain"
      />
      {/* Floating Shape Images */}
      <Image
          src="/images/g312.png"
          alt="Shape"
          width={50}
          height={50}
          className="hidden sm:inline-flex absolute bottom-45 right-12 md:right-18 lg:right-40"
        />
        <Image
          src="/images/g314.png"
          alt="Shape"
          width={40}
          height={40}
          className="hidden md:inline-flex absolute lg:top-38 right-48 sm:top-10 sm:right-12 md:right-36 lg:right-95"
        />
        <Image
          src="/images/g313.png"
          alt="Shape"
          width={30}
          height={30}
          className="hidden md:inline-flex absolute top-74 left-[10%] sm:bottom-8 sm:left-10 md:left-16 lg:left-20"
        />
        <Image
          src="/images/g308.png"
          alt="Shape"
          width={40}
          height={40}
          className="hidden md:inline-flex absolute top-34 left-[10%] sm:left-[15%] md:left-[21%]"
        />
        <Image
          src="/images/g316.png"
          alt="Shape"
          width={50}
          height={50}
          className="hidden md:inline-flex absolute bottom-20 left-[15%] sm:left-[15%] md:left-[15%]"
        />
  </div>

    {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h2 className=" text-2xl md:font-[800] md:text-[40px] font-bold absolute lg:mt-[10%] top-[22%] transform -translate-y-1/2">
      Services Detail
    </h2>
    <p className="font-semibold text-[89%] md:text-[82%] max-w-[18rem] md:max-w-[42rem] mt-[1%] lg:mt-[14%] leading-relaxed">
      Transform your space with our professional painting and repair solutions.
      At Dhannvantri Paint Services, we offer high-quality, durable, and
      aesthetically appealing painting solutions tailored to your needs.
    </p>
  </div>
  </div>
  );
}
//sm:top-[40%]lg:top-[20%]