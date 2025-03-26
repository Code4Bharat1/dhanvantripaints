import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <div className="relative w-full min-h-[300px] sm:min-h-[200px] md:h-[700px]">

                {/* Desktop Image */}
                <Image
                    src="/Services/service.png"
                    alt="Services"
                    width={1300}
                    height={500}
                    priority
                    className="w-full h-full hidden md:block object-cover min-h-[400px] lg:min-h-[550px]"
                />
                {/* Mobile Image */}
                <Image
                    src="/Services/services.png"
                    alt="Services"
                    width={1300}
                    height={500}
                    priority
                    className="w-full block md:hidden h-full object-cover min-h-[400px] lg:min-h-[550px]"
                />
                <Image src="/Testimonial/logo5.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute bottom-45 right-12 md:right-18 lg:right-40'
                />
                <Image src="/Testimonial/logo1.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute top-42 left-24 md:left-34 lg:left-60'
                />
                <Image src="/Testimonial/logo6.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute bottom-25 left-24 md:left-34 lg:left-60'
                />

                <Image src="/Testimonial/logo2.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute top-80 lg:left-20'
                />

                <Image src="/Testimonial/logo3.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute top-52 right-12 md:right-18 lg:right-45'
                />

                <Image src="/Testimonial/logo4.png"
                    alt="/"
                    width={50}
                    height={50}
                    className='hidden sm:inline-flex absolute bottom-20 left-12 md:left-18 lg:left-120'
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50 p-4 sm:p-8 text-center md:mt-10 gap-10 md:gap-10">
                    <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold">Services</h2>
                    <p className="text-sm sm:text-lg max-w-[90%] sm:max-w-3xl md:text-[22px]">
                        At Dhannvantri Paints, we bring colors to life with precision, durability, and an artistic touch.
                        Our expert team ensures high-quality finishes, using premium materials for long-lasting results.
                    </p>
                </div>
            </div>

        </div>
    );
}


