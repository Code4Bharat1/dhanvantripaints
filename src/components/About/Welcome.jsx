import Image from 'next/image'

const Welcome = () => {
  return (
    <div className='relative w-full'>
      <div className="lg:block hidden z-[-1] absolute top-[5%] left-[1%]">
        <Image src="/About/circle3.png" alt="" width={40} height={40} />
      </div>
      <div className='relative flex flex-col-reverse sm:flex-row justify-center items-center gap-10 sm:gap-20 max-w-[1000px] mx-auto my-10 px-4'>

        <div className="lg:block hidden z-[-1] absolute top-[5%] left-[40%]">
          <Image src="/About/triangle.png" alt="" width={40} height={40} />
        </div>
        <div className="lg:block hidden absolute bottom-[30%] right-[30%]">
          <Image src="/About/rectangle2.png" alt="" width={70} height={40} />
        </div>


        <div className='w-full sm:w-[60%] flex flex-col gap-6 mt-6 sm:mt-10'>
          <p className='font-medium text-[22px]'>Greetings!</p>
          <h2 className='font-semibold text-2xl sm:text-4xl leading-snug'>
            Welcome to <span className='text-green-500'>Dhanvantri</span> Paints,
            Bringing Colors to Life with Precision & Excellence
          </h2>
          <p className='text-[14px] font-light leading-relaxed'>
            At Dhanvantri Paints, we believe that colors have the power to transform spaces, evoke emotions, and create lasting impressions. With a commitment to quality and innovation, we offer premium painting solutions tailored to your style and needs.
            From residential makeovers to commercial projects, our skilled team ensures flawless execution, durability, and a stunning finish that enhances every space. Let us bring your vision to life with vibrant colors and expert craftsmanship.
          </p>
          <p className="font-semibold text-[14px]">[SANJAY GUPTA] - Founder of Dhanvantri Paints</p>
        </div>

        <div className='w-full sm:w-[40%] flex justify-center'>
          <Image className="max-w-[300px] z-[1] w-full h-auto" src="/About/Maskgroup.png" alt='Welcome Image' width={300} height={300} />
        </div>

      </div>
      <div className="lg:block hidden z-[-1] absolute top-[9%] right-[1%]">
        <Image src="/About/zig.png" alt="" width={80} height={80} />
      </div>
    </div>
  )
}

export default Welcome
