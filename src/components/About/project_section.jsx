'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Project_section() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const projects = [
    {
      title: "Cosmos Habitat A wing",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_habitat_A.png",
      desc: "Cosmos Habitat in Majiwada, Thane, Mumbai, is a residential building project with 2 towers, 16 floors each, and 102 units, known for its spacious housing and basic amenities.",
    },
    {
      title: "Cosmos Habitat",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_habitat.png",
      desc: "Cosmos Habbitat a project by Aryan Builders and Developers, located in Mira Road East, Mumbai, generally receives positive reviews for its peaceful locality, good connectivity.",
    },
    {
      title: "Cosmos Horizon",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_county_magic.jpeg",
      desc: "Cosmos Horizon, a project by Cosmos Group in Thane West, generally receives positive reviews for its location, amenities, and developer reputation, with some users highlighting its value for money and ease of accessibility. ",
    },
    {
      title: "Cosmos Jewel",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_jewel.png",
      desc: "Cosmos jewels,one of the most prominent projects for flats in anand nagar, thane. This residential flat is east-Facing direction. Constructed on a carpet area of 702 sq.Ft., the flat comprises 2 bedroom(s), 1 bathroom and 3 balconies.",
    },
    {
      title: "Cosmos Hawaiian",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_hawaiian.png",
      desc: "Cosmos Hawaiian is well-maintained, conveniently located with 24-hour water supply, and has easy access to public transportation and amenities like a mall and parks. It is safe, clean and less polluted.",
    },
    {
      title: "Cosmos Mary Park",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_mary_park.png",
      desc: "Cosmos Mary Park in Thane West, Mumbai, receives generally positive reviews, with residents highlighting its prime location, good connectivity, and reputed builder. ",
    },
    {
      title: "Sankalp Heights",
      location: "Thane, Maharashtra",
      image: "/images/sankalp_heights.png",
      desc: "Sankalp Heights is a residential project that takes luxuriant living to newer and greater heights. The scenic beauty that nature supplies is abundant in these apartments.",
    },
    {
      title: "Cosmos Springs",
      location: "Thane, Maharashtra",
      image: "/images/cosmos_spring.png",
      desc: "Cosmos Springs,a residential building in Owale, Thane, is generally considered a good society with positive reviews highlighting its nature-friendly environment, well-maintained roads, and proximity to amenities.",
    },
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
    <div className="w-full py-10 px-4 md:px-10">
      <h1 className="text-center font-semibold text-2xl md:text-3xl mb-2">
        Our Signature
      </h1>
      <p className="text-center text-xl md:text-2xl font-semibold mb-8">
        - 10 Highlights That Define Us
      </p>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={3000}
          allowTouchMove={false}
          className="px-2 sm:px-4"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-[240px] sm:!w-[260px] md:!w-[280px] flex-shrink-0"
            >
              <div className="select-none rounded-xl overflow-hidden shadow-md md:h-[450px] h-[300px] bg-white p-4">
                <div className="relative w-full h-[130px] md:h-[200px] mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={250}
                    className="w-full h-full object-cover rounded-md pointer-events-none"
                  />
                  <div
                    className="absolute inset-0 z-10"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
                <h2 className="text-[11px] md:text-xl font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-[10px] md:text-sm text-gray-500 mb-1">
                  {project.location}
                </p>
                <p className="text-[9px] md:text-sm text-gray-600">
                  {project.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
