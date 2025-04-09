"use client";

import Image from 'next/image';
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Optional: for arrow icons

export default function OurJourney() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full py-3 ">
     
      
     <div className="mb-10">
     <p className="text-center font-semibold text-xl">History</p>
       <h1 className="text-center font-semibold text-4xl">Our Journey:From Humble Beginnings To</h1>
      <h1 className="text-center font-semibold text-4xl">Industry Leaders</h1>
     </div>

      {/* Scrollable Journey Cards */}
      <div
        ref={scrollRef}
        className="flex gap-10 sm:gap-10 px-4 sm:px-10 overflow-x-auto scroll-smooth whitespace-nowrap snap-x snap-mandatory hide-scrollbar"
      >
        {/* Journey Card 1 */}
        <div className="flex flex-col gap-6 sm:gap-10 items-center min-w-[200px] sm:min-w-[250px] snap-center">
          <Image
            src="/About/JourneyImage1.png"
            alt="2010 Journey"
            width={250}
            height={300}
            className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px]"
          />
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2010</p>
            <p className="font-medium text-sm sm:text-lg">A Modest Start</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 items-center min-w-[200px] sm:min-w-[250px] snap-center">
          <Image
            src="/images/history_1.png"
            alt="2010 Journey"
            width={250}
            height={300}
            className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px]"
          />
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2013</p>
            <p className="font-medium text-sm sm:text-lg">Urban Heights</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-6 items-center min-w-[200px] sm:min-w-[250px] snap-center">
          <Image
            src="/images/history2.jpg"
            alt="2010 Journey"
            width={250}
            height={300}
            className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px]"
          />
          <div className="text-center mt-4">
            <p className="font-bold text-2xl sm:text-3xl">2016</p>
            <p className="font-medium text-sm sm:text-lg">Luxury Abode</p>
          </div>
          {/*<div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2013</p>
            <p className="font-medium text-sm sm:text-lg">A Modest Start</p>
          </div> */}
        </div>
        <div className="flex flex-col gap-6 sm:gap-10 items-center min-w-[200px] sm:min-w-[250px] snap-center">
          <Image
            src="/images/history_3.png"
            alt="2010 Journey"
            width={250}
            height={300}
            className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px]"
          />
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2018</p>
            <p className="font-medium text-sm sm:text-lg">Business Hubs</p>
          </div>
        </div>
        {/* Journey Card 2 */}
        <div className="flex flex-col gap-6 sm:gap-10 items-center min-w-[200px] sm:min-w-[250px] snap-center">
          <Image
            src="/About/JourneyImage2.png"
            alt="2020 Journey"
            width={250}
            height={300}
            className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px]"
          />
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2022</p>
            <p className="font-medium text-sm sm:text-lg">A Professional Leap</p>
          </div>
        </div>

        {/* Journey Card 3 */}
        <div className="flex flex-col gap-6 sm:gap-10 items-center min-w-[200px] sm:min-w-[250px] snap-center">
          <Image
            src="/About/JourneyImage3.png"
            alt="2025 Journey"
            width={250}
            height={300}
            className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px]"
          />
          <div className="text-center">
            <p className="font-bold text-2xl sm:text-3xl">2025</p>
            <p className="font-medium text-sm sm:text-lg lg:w-[180px] sm:w-[260px]">
              Industry Paints
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
