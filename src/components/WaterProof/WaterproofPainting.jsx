import Image from 'next/image'

const WaterproofPainting = () => {
  return (
    <div className='my-10 md:my-20 max-w-[95%] md:max-w-[1400px] px-2 md:px-10 lg:px-20 mx-auto'>
      <div className='flex flex-col gap-8 md:gap-10'>

        {/* Hero Image */}
        <Image 
          src="/WaterProofPainting/waterproofBanner.png" 
          alt='Society Image' 
          width={1600} 
          height={1000} 
          className='w-full object-cover'
        />
        
        <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-10'>

          
           {/* Text & Details Section */}
                <div className="px-1 md:mt-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-5 md:py-2 md:px-6">
                  {/* Internal Painting Details */}
                  <div className="max-w-lg bg-white w-full lg:w-1/2 mt-10 sm:mt-0">
                    <h1 className="text-2xl sm:text-3xl font-bold">Waterproof Painting</h1>
                    <p className="mt-4 md:mt-6 md:text-black max-w-[27rem]">
                    Protect your walls from moisture and damage with waterproof painting. Our advanced coatings create a durable, water-resistant barrier, preventing leaks, dampness, and mold. Keep your home looking fresh and strong in all seasons!
            
                    </p>
                  </div>
                  <Image
                    src="/images/g410.png"
                    alt="Shape"
                    width={40}
                    height={40}
                    className="hidden md:inline-flex absolute left-1/2 transform -translate-x-1/2  translate-y-45"
                  />
          
                  {/* Available Hours Section */}
                  <div className="w-full max-w-md lg:w-1/2 bg-white md:px-3">
                    <p className="font-semibold text-xl md:text-lg">Available Hours*</p>
          
                    <div className="mt-7 space-y-4">
                      {/* Monday - Saturday */}
                      <div className="md:flex md:flex-row justify-between items-center sm:flex-col sm:items-start">
                        <p className="font-semibold mb-4">Monday - Saturday</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Image
                            src="/images/Time-Circle.png"
                            alt="time-circle"
                            height={20}
                            width={20}
          
                          />
                          <p className="text-sm sm:text-base">09:00 AM - 07:00 PM</p>
                        </div>
                      </div>
          
                      <hr className="border-gray-700 w-[100%]" />
          
                      {/* Sunday */}
                      <div className="md:flex md:flex-row md:gap-49 items-center sm:flex-col sm:items-start">
                        <p className="font-semibold mb-4">Sunday</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Image
                            src="/images/Time-Circle.png"
                            alt="time-circle"
                            height={20}
                            width={20}
                          />
                          <p className="text-sm sm:text-base font-bold text-red-700">Holiday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        </div>
      </div>
    </div>
  )
}

export default WaterproofPainting;
