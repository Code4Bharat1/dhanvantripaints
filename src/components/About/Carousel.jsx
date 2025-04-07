'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let startX = 0;
  let isDragging = false;

  const testimonials = [
    { image: '/About/carousel-1.png', text: 'I recently purchased paint from this website, and I must say, I am beyond impressed! The colors are exactly as shown on the website, and the quality is outstanding. The paint has great coverage, dries quickly, and gives a smooth, professional finish. I also appreciate the detailed product descriptions and helpful recommendations...', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'I was hesitant to order paint online, but this website made the process so simple. The ordering system is user-friendly, and I received my paint within just a few days! The packaging was secure, ensuring that nothing spilled or got damaged. Plus, their customer service was quick to answer my queries. Highly recommended!...', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'This paint transformed my living room completely! The texture is smooth, and the coverage is fantastic—I didn’t even need multiple coats. The website also provided great tips on how to apply the paint effectively. I love how my walls look now, and I’ll definitely be using this brand for future projects.The quality of paint is outstanding.....', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'One of the main reasons I chose this website was their eco-friendly paint options, and I’m glad I did! The paint has a low odor, is safe for indoor use, and is highly durable. Even after months, the color still looks fresh, with no signs of fading or peeling. I appreciate a company that values both quality and sustainability!...', author: 'Sally Wily - Customer Rona' },
    { image: '/About/carousel-1.png', text: 'I was searching for high-quality paint at an affordable price, and this website delivered exactly that. The prices are reasonable, and the paint itself is top-notch.the quality of paint is outstanding. I also loved the variety of shades available—it made it so easy to find the perfect color for my home. Definitely a five-star experience!...', author: 'Sally Wily - Customer Rona' },
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

