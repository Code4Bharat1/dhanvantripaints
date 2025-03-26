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
      <Image src="/Testimonial/logo2.png"
                      alt="/"
                      width={50}
                      height={50}
                      className='hidden sm:inline-flex absolute top-80 lg:left-20'
                      />
      {/*Desktop Image*/}
      <Image
        src="/Contact/Contact-hero.png"
        alt="Gallery"
        width={1300}
        height={500}
        className="w-full hidden md:block h-full object-cover"
      />
      {/*Moible Image*/}
      <Image
        src="/Contact/hero.png"
        alt="Gallery"
        width={1300}
        height={500}
        className="w-full block md:hidden h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col mb-50 md:mb-0 gap-20 lg:gap-7 items-center justify-center text-white px-4 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[45px]">Contact Us</h1>
        <p className="mt-4 lg:w-[1400px] w-[300px] sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg">
          Have questions or need assistance? We're here to help! Reach out to us via email, phone, or the contact form below. Our team will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
