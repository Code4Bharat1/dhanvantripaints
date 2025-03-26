import Image from 'next/image'

const Society = () => {
  return (
    <div className='relative my-10 md:my-20 max-w-[95%] md:max-w-[1400px] px-5 md:px-10 lg:px-20 mx-auto'>

    <div>
      <Image className='absolute hidden lg:block bottom-0 w-[60px] h-[50px] left-[50%]' src="/Society/zic-zac.png" alt="Element" width={100} height={100} />
    </div>

      <div className='flex flex-col gap-8 md:gap-10'>

        {/* Hero Image */}
        <Image 
          src="/Society/Worker.png" 
          alt='Society Image' 
          width={1600} 
          height={100} 
          className='w-full object-cover rounded-lg'
        />
        
        <div className='flex flex-col lg:flex-row justify-between gap-8 md:gap-10'>

          {/* Left Section */}
          <div className='w-full lg:w-[50%] flex flex-col gap-4 md:gap-6'>
            <h1 className='font-[600] text-2xl md:text-4xl leading-snug md:leading-tight'>
              Society & Commercial Building Painting
            </h1>
            <p className='text-base lg:w-[450px] text-justify md:text-lg text-gray-700 leading-relaxed'>
              Enhance the beauty and durability of your society & commercial buildings with our professional painting services. We provide high-quality, weather-resistant coatings that ensure long-lasting protection and a fresh, vibrant look. Let us transform your space with precision and expertise!
            </p>
          </div>

          {/* Right Section */}
          <div className='w-full lg:w-[35%] flex flex-col gap-4 md:gap-6'>
            <p className='font-semibold text-lg md:text-xl'>Available Hours*</p>
            
            <div>
              {/* Weekday Timing */}
              <div className='flex justify-between items-center border-b border-gray-300 pb-2 md:pb-3'>
                <p className='font-bold text-base md:text-lg'>Monday - Friday</p>
                <div className='flex items-center gap-2'>
                  <Image src="/Society/TimeCircle.png" alt='Time Icon' width={25} height={25} />
                  <p className='text-sm md:text-base'>09.00 am - 07.00 pm</p>
                </div>
              </div>

              {/* Sunday Timing */}
              <div className='flex justify-between items-center pt-2 md:pt-3'>
                <p className='font-bold text-base md:text-lg'>Sunday</p>
                <div className='flex items-center gap-2'>
                  <Image src="/Society/TimeCircle.png" alt='Time Icon' width={25} height={25} />
                  <p className='text-red-500 font-medium lg:w-[145px] text-sm md:text-base'>Holiday</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Society;
