'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let startX = 0;
  let isDragging = false;

  const testimonials = [
    { image: '/About/carousel-1.png', text: 'Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra..', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra..', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra..', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra..', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam dignissim facilisis consequat quisque pharetra..', author: 'Sally Wily - Customer Rona' },
  ];

  const totalCards = testimonials.length + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 < totalCards - 1 ? prevIndex + 1 : prevIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex));
  };

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.clientX;
    if (startX - endX > 50) {
      nextSlide();
    } else if (endX - startX > 50) {
      prevSlide();
    }
  };

  return (

    <div className='relative w-full h-150 overflow-hidden'>

      <div className="lg:block hidden absolute z-[1] bottom-[10%] right-[30%]">
              <Image src="/About/triangle.png" alt="" width={40} height={40} />
      </div>
      <div className="lg:block hidden absolute z-[1] bottom-[15%] right-[4%]">
              <Image src="/About/rectangle2.png" alt="" width={40} height={40} />
      </div>
      <div className="lg:block hidden absolute z-[1] top-[15%] left-[-20px]">
              <Image src="/About/circle.png" alt="" width={40} height={40} />
      </div>
      <div className="lg:block hidden absolute z-[1] bottom-[20%] left-[10%]">
              <Image src="/About/zic-zac.png" alt="" width={40} height={40} />
      </div>

        <div className='lg:w-120 w-40 px-5 lg:p-20 lg:mx-10 pt-30 lg:pt-30'>
            <h2 className='font-[510] text-2xl lg:text-7xl leading-10 lg:leading-23'></h2>
        </div>
        <div className='absolute top-0 right-0 w-full h-fit flex flex-col items-center justify-center p-10'>

        
      {/* Slider Container */}
      <div className='lg:w-full w-[1000px] overflow-auto transparent-scrollbar' ref={carouselRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          
          {/* Empty Transparent Card */}
          <div className='w-[500px] p-2 flex-shrink-0 relative'>
            <div className='bg-white rounded-[5px] overflow-hidden text-left max-w-full mx-auto h-full flex flex-col justify-between'>
              <p className='text-black mt-2 text-3xl absolute p-1 right-0 top-[30%] w-[180px] h-fit font-[600] lg:left-[10%] lg:leading-25 lg:w-[400px] lg:text-7xl lg:top-[10%] ' >What Our Customer Say</p>
              
            </div>
          </div>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className='lg:w-1/3 w-[320px] p-2 flex-shrink-0'>
              <div className=' bg-white shadow-sm rounded-[5px] overflow-hidden text-left max-w-full mx-auto h-fit flex flex-col justify-between'>
                <Image src={testimonial.image} alt='Building' width={1250} height={1200} className='w-full mx-auto' />
                <p className='text-gray-600 mt-2 p-2 text-sm'>{testimonial.text}</p>
                <p className='font-semibold mt-2 p-2 text-1xl'>{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='absolute bottom-1 right-6 flex gap-4'>
        <button onClick={prevSlide} >
        <Image src="/About/Previous.png" alt='Building' width={40} height={50} />
        </button>
        <button onClick={nextSlide} >
            <Image src="/About/Forward.png" alt='' width={40} height={50}/>
        </button>
      </div>
    </div>

    </div>

);
};

export default Carousel;

