import Image from 'next/image';

export default function HomeMain() {
    return (

        <div className="relative w-full h-[750px] lg:h-screen flex flex-col justify-center items-start">

            <div className='w-full absolute top-0 bottom-0 md:top-0 md:bottom-0 overflow-hidden right-0 md:right-120'>
                <Image src="/Home/transparent.png" alt='' height={1000} width={1000} className='absolute top-0 bottom-0 md:top-0 md:bottom-0 w-full h-full  ' />
            </div>

            <div>
                <Image src="/Home/logo1.png" alt='' width={50} height={30} className='absolute right-10 bottom-40 hidden lg:block' />
                <Image src="/Home/logo3.png" alt='' width={120} height={200} className='absolute right-[-1px] top-10 hidden lg:block' />
                <Image src="/Home/logo2.png" alt='' width={40} height={30} className='absolute right-125 top-42 z-[1] hidden lg:block' />

            </div>

            <div className="absolute z-[0] right-[1%] lg:right-[10%] top-[65%] lg:top-[20%]  w-[60%] sm:w-[40%] md:w-[35%] h-[400px] lg:h-[600px] shadow-2xl">
                <Image
                    src="/Home/sq.png"
                    alt="Square Image"
                    width={400}
                    height={700}
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-20 lg:top-30 flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-[20px] md:text-[24px] sm:text-xl font-bold italic text-white leading-tight mb-0 md:mb-10">
                        Enhance your home's interior <br /> with expert painting.
                    </h3>
                    <p className="text-sm sm:text-lg mt-2 italic text-white opacity-80">
                        Book a free consultation and bring your dream design to life.
                    </p>
                    <button className="mt-4 sm:mt-6 px-4 lg:px-10 sm:px-6 py-2 sm:py-3 bg-[#FF9247] rounded-xl lg:rounded-2xl shadow-lg text-white text-sm sm:text-md">
                        Get Quote
                    </button>
                </div>
            </div>
            {/* Background Image */}
            <Image src="/Home/HeroImage.png" width={1000} height={1200} className='h-full w-full hidden lg:block md:block' alt='Hero Image' />

            {/* Floating Trapezium */}
            <div className="absolute  left-0 top-0 w-full h-full -z-[5] md:block">
                <Image
                    src="/Home/HeroImage2.png"
                    alt="Trapezium Background"
                    layout="fill"
                    objectFit="cover"

                />
            </div>

            {/* Content Inside Trapezium */}
            <div className="absolute left-[5%] top-1/4 w-[90%] flex flex-col gap-10 md:w-full max-w-lg p-4 text-white z-10">
                <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-left leading-12 lg:leading-14 md:leading-12">
                    <span className="hidden md:block">"Transform Your Home with &nbsp;&nbsp;Colors That Inspire!"</span>
                    <span className="inline md:hidden">"Transform Your Home &nbsp;&nbsp;with Colors That Inspire!"</span>


                </h2>
                <ul className="mt-2 text-md sm:text-lg">
                    <li>⭐ Personalised Interior Painting</li>
                    <li>⭐ Internal Painting</li>
                    <li>⭐ External Painting</li>
                </ul>
                <button className="mt-4 w-fit lg:w-fit px-6 lg:px-12 py-2 sm:px-6 sm:py-3 bg-[#FF9247] rounded-lg lg:rounded-2xl shadow-lg text-white text-sm sm:text-base">
                    Get Started
                </button>
            </div>



        </div>
    );
}
