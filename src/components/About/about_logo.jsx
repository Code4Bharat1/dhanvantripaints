'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About_logo = () => {
  return (
    <div className='overflow-hidden w-full my-20'>
      <motion.div 
        className='flex h-fit w-max gap-10 lg:px-10 lg:mx-auto'
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 150, ease: 'linear' }}
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className='flex items-center gap-10 lg:gap-20 md:mt-8 md:mb-8 mt-3'>
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-1.png' alt='Logo 1' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-2.png' alt='Logo 2' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-3.png' alt='Logo 3' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-4.png' alt='Logo 4' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-5.png' alt='Logo 5' width={100} height={60} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default About_logo;
