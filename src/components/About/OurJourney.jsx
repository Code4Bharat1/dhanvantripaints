import Image from 'next/image'

const OurJourney = () => {
  return (
    <div className="flex flex-col my-20 max-w-[95%] sm:max-w-[1000px] mx-auto">
      {/* Title Section */}
      <div className="flex flex-col gap-5 text-center max-w-[90%] sm:max-w-[600px] mx-auto">
        <p className="font-[500] lg:text-[18px] sm:text-base">History</p>
        <p className="font-semibold text-xl sm:text-3xl">
          Our Journey: From Humble Beginnings To Industry Leaders
        </p>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-20 my-10">
        <div className="flex flex-col gap-6 sm:gap-10 items-center">
          <Image src="/About/JourneyImage1.png" alt="2013 Journey" width={250} height={300} className="w-[180px] sm:w-[250px] h-auto"/>
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2013</p>
            <p className="font-medium text-sm sm:text-lg">A Modest Start</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-10 items-center">
          <Image src="/About/JourneyImage2.png" alt="2020 Journey" width={250} height={300} className="w-[180px] sm:w-[250px] h-auto"/>
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2020</p>
            <p className="font-medium text-sm sm:text-lg">A Professional Leap</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-10 items-center">
          <Image src="/About/JourneyImage3.png" alt="Present Journey" width={250} height={300} className="w-[180px] sm:w-[250px] h-auto"/>
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2025</p>
            <p className="font-medium text-sm sm:text-lg lg:w-[180px] sm:w-[260px]">
              Industry Leaders in Painting Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurJourney
