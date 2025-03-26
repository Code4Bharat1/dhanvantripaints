import Image from 'next/image'
import Link from 'next/link'
export default function Effortless() {
    return (
        <div className='w-[100%]'>
            {/* Heading Below Image */}
            <div className="flex justify-center items-center p-4 mt-20 mb-20 md:mt-20 md:mb-20">
                <h1 className="text-[22px] leading:20 sm:text-6xl md:text-4xl font-semibold w-full max-w-[90%] sm:max-w-2xl text-center">
                    Effortless And Quick Painting Solutions With Dhannvantri Paint Services.
                </h1>
            </div>

            {/* Internal Painting */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-fit md:mx-20  pr-4 pl-0 mt-6 mb-6 md:mt-0 md:mb-0">
                <div className="w-[300px] md:w-1/2 mr-4 md:mr-0 ml-2 md:ml-auto">
                    <Image
                        src="/Services/service1.png"
                        alt="Internal Painting"
                        height={600}
                        width={700}
                        className="relative w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full ml:10 md:w-1/2 px-6 md:px-16 mr-0 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4 md:text-2xl">Internal Painting</h2>
                    <p className="mt-4 text-md md:text-md">
                        Transform your interiors with flawless wall finishes. From vibrant shades to soothing pastels, we enhance your living spaces with colors that reflect your personality.
                    </p>
                    <Link href="/internal"><button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
                        More Info
                    </button></Link>
                </div>
            </div>

            {/* External Painting */}
            <div className="flex flex-col-reverse md:flex-row items-center pr-14 w-full md:w-fit md:mx-20 mt-6 mb-6 md:mt-0 md:mb-0">
                <div className="w-full md:w-1/2 px-6 ml-1 md:mr-0 md:ml-1 md:px-16 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4 md:text-2xl">External Painting</h2>
                    <p className="mt-4 text-md md:text-md">
                        Give your home or commercial building a fresh, weather-resistant look. Our external painting services ensure long-lasting beauty and protection from harsh environmental elements.
                    </p>
                    <Link href="/external"><button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
                        More Info
                    </button></Link>
                </div>
                <div className="w-[300px] ml-8 md:w-1/2">
                    <Image
                        src="/Services/service2.png"
                        alt="External Painting"
                        height={600}
                        width={700}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Waterproof Painting */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-fit md:mx-20  pr-4 pl-0 mt-6 mb-6 md:mt-0 md:mb-0">
                <div className="w-[300px] md:w-1/2 mr-4 md:mr-0 ml-2 md:ml-auto">
                    <Image
                        src="/Services/service3.png"
                        alt="Internal Painting"
                        height={600}
                        width={700}
                        className="relative w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full ml:10 md:w-1/2 px-6 md:px-16 mr-0 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4 md:text-2xl">Waterproof Painting</h2>
                    <p className="mt-4 text-md md:text-md">
                        Prevent leaks and moisture damage with our advanced waterproofing solutions. We use high-quality coatings to protect your walls and ensure longevity. </p>
                    <Link href="/waterproof"><button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
                        More Info
                    </button></Link>
                </div>
            </div>

            {/* Repair Painting */}
            <div className="flex flex-col-reverse md:flex-row items-center pr-14 w-full md:w-fit md:mx-20 mt-6 mb-6 md:mt-0 md:mb-0">
                <div className="w-full md:w-1/2 px-6 ml-1 md:mr-0 md:ml-1 md:px-16 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4 md:text-2xl">Repair Painting</h2>
                    <p className="mt-4 text-md md:text-md">
                        Restore old and worn-out walls with our repair painting services. We fix cracks, peeling paint, and surface imperfections, making your walls look new.
                    </p>
                    <Link href="/repairpainting"><button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
                        More Info
                    </button></Link>
                </div>
                <div className="w-[300px] ml-8 md:w-1/2">
                    <Image
                        src="/Services/service4.png"
                        alt="External Painting"
                        height={600}
                        width={700}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>


            {/* Security & Commercial Painting */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-fit md:mx-20 mb-15 pl-2 mt-6 md:mt-0 md:mb-0">
                <div className="w-[300px] md:w-1/2 mr-10">
                    <Image
                        src="/Services/service5.png"
                        alt="Security & Commercial Painting"
                        height={600}
                        width={700}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 px-6 md:px-16 mr-4 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mt-4 md:text-2xl">Security & Commercial Building Painting</h2>
                    <p className="mt-4 text-md">
                        Enhance the appeal of large residential and commercial spaces with our efficient and high-quality painting services. We cater to societies, offices, and industrial buildings with expertise and precision.
                    </p>
                    <Link href="/society"><button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
                        More Info
                    </button></Link>
                </div>
            </div>
            
            <Image src="/About/circle3.png"
                alt="/"
                width={50}
                height={50}
                className='hidden sm:inline-flex absolute top-260 z-[-1] left-12 md:left-18 lg:left-15'
            />
            <Image src="/Services/logo1.png"
                alt="/"
                width={40}
                height={40}
                className='hidden sm:inline-flex absolute top-410 left-12 md:left-18 lg:left-15'
            />
            <Image src="/Services/logo3.png"
                alt="/"
                width={100}
                height={100}
                className='hidden sm:inline-flex absolute top-285 right-12 md:right-18 lg:right-0'
            />
            <Image src="/Services/trainglegreen.png"
                alt="/"
                width={100}
                height={100}
                className='hidden sm:inline-flex absolute top-580 right-12 md:right-18 lg:right-150 z-[-1]'
            />
            <Image src="/Testimonial/logo1.png"
                alt="/"
                width={50}
                height={50}
                className='hidden sm:inline-flex absolute top-470 right-12 md:right-34 lg:right-20'
            />
        </div>
    )
}
