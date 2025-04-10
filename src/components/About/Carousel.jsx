'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let startX = 0;
  let isDragging = false;

  const testimonials = [
    { image: '/About/carousel-1.png', text: 'We truly appreciate the exceptional services provided by the consultants from Dhanvantri Paints. From the initial consultation to the final coat of paint, every step of our painting project was handled with great professionalism and attention to detail. The team of specialists coordinated the entire process seamlessly...', author: 'Mr. Pravin Kadam – Dhokali Thane West' },
    { image: '/About/carousel-1.png', text: 'The painting project carried out by the skilled professionals of Dhanvantri Paints at my home was nothing short of excellent. Right from the initial assessment to the final finishing touches, every phase was handled with utmost care and precision. The painters demonstrated a high level of ...', author: 'Milind Sir – G.B road Thane West' },
    { image: '/About/carousel-1.png', text: 'The level of professionalism and commitment demonstrated by Dhanvantri Paints throughout the entire process has been truly commendable. From the very first interaction, their team showcased a deep understanding of customer needs and maintained consistent communication.The team of specialists coordinated the entire process seamlessly w...', author: 'Vikram Reddy – House Owner' },
    { image: '/About/carousel-1.png', text: 'The dedication and professionalism displayed by Dhanvantri Paints truly exceeded my expectations. Their unwavering commitment to delivering high-quality service and ensuring complete customer satisfaction is admirable. What impressed me most was their attention to detail, efficient execution...', author: 'Aditya Jain – Customer, Navi Mumbai' },
    { image: '/About/carousel-1.png', text: 'I am genuinely pleased with the overall experience I had with Dhanvantri Paints. The entire painting project was handled with remarkable professionalism and efficiency. What truly stood out to me was their commitment to timelines — the project was completed right on schedule, without any unnecessary delays...', author: 'Neha Bansal – Customer, Pune' },
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
              <div className=' bg-white h-[450px]  shadow-sm rounded-[5px] overflow-hidden text-left max-w-full mx-auto flex flex-col justify-between'>
                <Image src={testimonial.image} alt='Building' width={1250} height={1200} className='w-full mx-auto' />
                <p className='text-gray-600 p-2 text-sm'>{testimonial.text}</p>
                <p className='font-normal p-2 text-1xl'>{testimonial.author}</p>
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

