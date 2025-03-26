import React from 'react';
import Image from 'next/image';
export default function Hero() {
    return (
        <div>
            <div className="relative w-full h-[667px] md:h-[700px] sm:h-[600px]">
                <Image
                    src="/Testimonial/Testimonial.png"
                    alt="Testimonial"
                    width={1800}
                    height={1800}
                    className="w-full hidden md:block h-full object-cover rounded-xs"
                />
                {/*Mobile Image*/}
                <Image
                    src="/Testimonial/Testimonial1.png"
                    alt="Testimonial"
                    width={1800}
                    height={1800}
                    className="w-full block md:hidden h-full object-cover rounded-xs"
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
                className='hidden sm:inline-flex absolute top-52 left-24 md:left-34 lg:left-50'
                />
                <Image src="/Testimonial/logo6.png"
                alt="/"
                width={50}
                height={50}
                className='hidden sm:inline-flex absolute bottom-25 left-24 md:left-34 lg:left-20'
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
                className='hidden sm:inline-flex absolute top-52 right-12 md:right-18 lg:right-65'
                />
                
                <Image src="/Testimonial/logo4.png"
                alt="/"
                width={50}
                height={50}
                className='hidden sm:inline-flex absolute bottom-20 left-12 md:left-18 lg:left-80'
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-25 md:mt-40 text-white bg-opacity-60 px-6 md:px-12 text-center rounded-lg">
                    <h2 className="text-4xl md:text-5xl top-[40%] lg:top-[0%] md:mt-0 font-extrabold">Testimonial</h2>
                    <p className="text-md md:text-[15px] mt-4 md:mt-0 max-w-3xl leading-relaxed">
                    Hear from our satisfied customers! Explore testimonials from homeowners and businesses who have transformed their spaces with our expert painting services. Quality, professionalism, and stunning results—see what our clients have to say!</p>
                </div>
            </div>
        </div>
    );
}
