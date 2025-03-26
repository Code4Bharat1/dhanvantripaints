import Image from 'next/image'
import Link from 'next/link'

const GetSpecial = () => {
  return (
    <div className="relative my-10 ">
      <Image 
        className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-auto object-cover opacity-30" 
        src="/About/PromotionImage.png" 
        alt="Promotion" 
        width={1400} 
        height={1000} 
      />

      <div className="absolute inset-0 bg-gray-900 z-[-1] bg-opacity-70"></div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] text-center text-white px-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[47px] leading-tight">
          Get <span className="text-orange-400">Special Offer</span> For Today <br />
          With Dhanvantri Paints
        </h2>
        <Link
            href="https://wa.me/9167055515"
            target="_blank"
            rel="noopener noreferrer"
            >
          <button className="mt-4 text-black text-sm sm:text-base bg-white px-4 sm:px-6 py-2 rounded-lg font-bold">
            Let's Try Dhanvantri
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetSpecial
