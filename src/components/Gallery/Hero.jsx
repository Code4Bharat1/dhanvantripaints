import Image from 'next/image'

export default function Hero() {
    return (
        <div>
            <div className="relative w-full h-[610px] sm:h-[600px] md:h-[700px] lg:h-[700px]">
                {/*Desktop Image*/}
                <Image
                    src="/Gallery/Gallery.png"
                    alt="Gallery"
                    width={1300}
                    height={500}
                    className="w-full hidden md:block h-full object-cover"
                />
                {/*Moible Image*/}
                <Image
                    src="/Gallery/Gallery1.png"
                    alt="Gallery"
                    width={1300}
                    height={500}
                    className="w-full block md:hidden h-full object-cover"
                />
                <Image src="/Testimonial/logo5.png"
                                    alt="/"
                                    width={50}
                                    height={50}
                                    className='hidden sm:inline-flex absolute bottom-55 right-12 md:right-18 lg:right-15'
                                />
                                <Image src="/Testimonial/logo1.png"
                                    alt="/"
                                    width={50}
                                    height={50}
                                    className='hidden sm:inline-flex absolute top-32 left-24 md:left-34 lg:left-60'
                                />
                                <Image src="/Testimonial/logo6.png"
                                    alt="/"
                                    width={50}
                                    height={50}
                                    className='hidden sm:inline-flex absolute bottom-35 left-24 md:left-34 lg:left-30'
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
                                    className='hidden sm:inline-flex absolute bottom-25 left-12 md:left-18 lg:left-180'
                                />
                <div className="absolute inset-0 w-full h-fit top-[48%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-10 items-center justify-center text-white bg-opacity-50 p-6  sm:p-8 text-center">
                    <h2 className="text-3xl sm:text-3xl md:text-6xl mb-10 md:mb-0 mt-0 md:mt-40 font-bold">Gallery</h2>
                    <p className="text-[16px] sm:text-center sm:text-lg mb-15 sm:mt-4 max-w-[90%] lg:max-w-4xl sm:max-w-2xl">
                        Explore our vibrant gallery featuring a stunning collection of paints, shades, and finishes. From classic hues to modern textures, find inspiration for your next project. Browse through our expertly curated selections to visualize the perfect color for your space. Let creativity flow with endless possibilities!
                        </p>
                </div>
            </div>
        </div>
    )
}
