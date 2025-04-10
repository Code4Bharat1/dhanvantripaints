import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function OurJourney() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse drag logic
  useEffect(() => {
    const slider = scrollRef.current;

    const handleMouseDown = (e) => {
      isDown.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown.current = false;
    };

    const handleMouseUp = () => {
      isDown.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5; // drag speed
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full py-6">
      <p className="text-center font-semibold text-xl">History</p>
      <div className="md:max-w-4xl mx-auto text-center md:mb-17 mb-15">
        <h1 className="font-semibold text-xl px-4 md:text-3xl leading-tight">
          Our Journey: From Humble Beginnings To <br className="hidden md:inline" />
          Industry Leaders
        </h1>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-10 px-4 sm:px-10 overflow-x-auto scroll-smooth whitespace-nowrap snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing mt-6"
      >
        {/* Map over cards here (for simplicity hardcoded) */}
        {[
          { year: '2010', label: 'A Modest Start', img: '/About/JourneyImage1.png' },
          { year: '2013', label: 'Urban Heights', img: '/images/history_1.png' },
          { year: '2016', label: 'Luxury Abode', img: '/images/history2.jpg' },
          { year: '2018', label: 'Business Hubs', img: '/images/history_3.png' },
          { year: '2022', label: 'A Professional Leap', img: '/About/JourneyImage2.png' },
          { year: '2025', label: 'Industry Paints', img: '/About/JourneyImage3.png' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 items-center min-w-[200px] sm:min-w-[250px] snap-center"
          >
            <Image
              src={item.img}
              alt={`${item.year} Journey`}
              width={250}
              height={300}
              className="w-[180px] sm:w-[250px] md:h-[350px] h-[250px] object-cover"
            />
            <div className="text-center">
              <p className="font-bold text-2xl sm:text-3xl">{item.year}</p>
              <p className="font-medium text-sm sm:text-lg">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Buttons */}
  <div className="hidden sm:flex justify-center gap-4 mt-10 pr-4">
  {/* Left Arrow */}
  <button
    onClick={() => scroll('left')}
    className="rounded-full border-2 border-black w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all"
    aria-label="Scroll Left"
  >
    <FaArrowLeft className="text-black w-5 h-5" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => scroll('right')}
    className="rounded-full border-2 border-black w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all"
    aria-label="Scroll Right"
  >
    <FaArrowRight className="text-black w-5 h-5" />
  </button>
</div>


    </div>
  );
}
