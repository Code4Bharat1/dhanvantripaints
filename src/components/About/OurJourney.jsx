'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

export default function OurJourney() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const journeyData = [
    { year: '2010', label: 'A Modest Start', img: '/About/JourneyImage1.png' },
    { year: '2013', label: 'Urban Heights', img: '/images/history_1.png' },
    { year: '2016', label: 'Luxury Abode', img: '/images/history2.jpg' },
    { year: '2018', label: 'Business Hubs', img: '/images/history_3.png' },
    { year: '2022', label: 'A Professional Leap', img: '/About/JourneyImage2.png' },
    { year: '2025', label: 'Industry Paints', img: '/About/JourneyImage3.png' },
  ];

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && swiper.autoplay) {
      isPlaying ? swiper.autoplay.start() : swiper.autoplay.stop();
    }
  }, [isPlaying]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <div className="w-full py-6 px-4 sm:px-6 md:px-10">
      <p className="text-center font-semibold text-xl">History</p>
      <div className="text-center mb-10">
        <h1 className="font-semibold text-xl px-4 md:text-3xl leading-tight">
          Our Journey: From Humble Beginnings To <br className="hidden md:inline" />
          Industry Leaders
        </h1>
      </div>

      {/* Swiper with hover-based autoplay control */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView="auto"
          loop={true}
          grabCursor={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          allowTouchMove={false}
          className="!overflow-x-hidden px-4 sm:px-6 md:px-10"
          spaceBetween={16}
          breakpoints={{
            0: { spaceBetween: 16 },
            640: { spaceBetween: 20 },
            768: { spaceBetween: 24 },
            1024: { spaceBetween: 30 },
          }}
        >
          {journeyData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!w-[220px] sm:!w-[250px] flex flex-col items-center text-center"
            >
              <div className="pointer-events-none select-none">
                <Image
                  src={item.img}
                  alt={`${item.year} Journey`}
                  width={250}
                  height={300}
                  className="w-full h-[350px] object-cover rounded-lg shadow"
                  draggable={false}
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-bold text-xl sm:text-2xl">{item.year}</p>
                <p className="font-medium text-sm sm:text-lg text-gray-700">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
