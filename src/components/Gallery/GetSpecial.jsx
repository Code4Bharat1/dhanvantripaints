import Image from 'next/image'
export default function GetSpecial() {
    return (
        <div>
            {/* Promotional Section */}
            <div className="relative w-full h-[200px] sm:h-[450px] md:h-[400px] lg:h-[300px] my-10">
                <Image
                    src="/Home/Promotion.png"
                    alt="Promotion"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                />

                {/* Background Overlay */}
                <div className='absolute top-0 bottom-0 w-full bg-gray-900 z-[-1]'></div>

                {/* Promotional Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                    <h2 className="text-1xl sm:text-2xl md:text-2xl lg:text-4xl w-[90%] max-w-[720px] font-semibold my-4">
                        Get <span className="text-orange-400">Special Offer</span> For Today With Dhannvantri Paints
                    </h2>
                    <button className="mt-3 text-black bg-white rounded-lg shadow-lg px-2 py-1.5 font-semibold hover:bg-gray-200 transition">
                        Let's Try Dhannvantri
                    </button>
                </div>
            </div>
        </div>
    )
}
