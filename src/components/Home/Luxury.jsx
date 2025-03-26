import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // 4 images in total
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-150 overflow-hidden flex flex-col  lg:flex-row items-center lg:items-start">

            {/* Left Side Content */}
            <div className="w-full flex flex-col gap-3 px-10 md:px-30 md:w-1/2 lg:p-10 lg:my-30 lg:mx-20 md:p-6 text-left">
                <h1 className="text-[18px] md:text-3xl font-medium">Interior</h1>
                <h1 className="w-fit font-bold text-[18px] md:text-6xl bg-gradient-to-r from-purple-900 to-orange-600 text-transparent bg-clip-text">
                    Wall Paints
                </h1>
                <p className="text-[12px] md:text-[20px] leading-normal md:leading-relaxed text-justify">
                    Explore a versatile range of interior paint for your home!
                </p>
                <button className="w-25 md:w-40 h-10 text-[13px] md:text-[18px] md:h-12 mt-2 md:mt-6 mb-10 md:mb-0 text-white bg-orange-400 hover:bg-orange-600 rounded-lg shadow-lg">
                    See Details
                </button>
            </div>
            <Image src="/Home/logo1.png"
                alt="/"
                width={80}
                height={65}
                className='hidden sm:inline-flex absolute top-60 left-12 md:left-18 lg:left-125'
            />
            <Image src="/Home/logo5.png"
                alt="/"
                width={70}
                height={30}
                className='hidden h-20 w-11 sm:inline-flex absolute top-20 left-0 md:left-0 lg:left-0'
            />


            {/* Right Side Image Carousel */}
            <div className="relative lg:w-1/2 w-full flex justify-center">
                <div className="overflow-hidden w-[1000px] ml-18 md:ml-30 mt-10 md:mt-0 py-0 md:py-15">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {/* All images inside one div */}
                        <div className="w-full flex-shrink-0">
                            <Image src="/Home/luxury.png" alt="Luxury" width={1250} height={1200} className="w-66 h-75 md:w-105 md:h-120 md:rounded-lg" />
                        </div>
                        <div className="w-full flex-shrink-0">
                            <Image src="/Home/berger.png" alt="Berger" width={1250} height={1200} className="w-55 h-60 md:w-100 md:h-110 md:rounded-lg" />
                        </div>
                        <div className="w-full flex-shrink-0">
                            <Image src="/Home/birla.png" alt="Birla" width={1250} height={1200} className="w-55 h-75 md:w-90 md:h-120 md:rounded-lg" />
                        </div>
                        <div className="w-full flex-shrink-0">
                            <Image src="/Home/nerolac.png" alt="Nerolac" width={1250} height={1200} className="w-55 h-75 md:w-90 md:h-120 md:rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carousel;
