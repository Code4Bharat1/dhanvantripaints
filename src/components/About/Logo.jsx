'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className='overflow-hidden w-full my-20'>
      <motion.div 
        className='flex justify-between sm:gap-15 gap-15 h-fit w-max lg:px-10 lg:m-auto lg:my-25'
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 150, ease: 'linear' }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <div className='flex mt-22 gap-15 lg:gap-30'>
            <Image className='w-[60px] h-[30px] lg:w-[200px] lg:h-[80px]' src='/About/logo-1.png' alt='' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-2.png' alt='' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-3.png' alt='' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-4.png' alt='' width={100} height={80} />
            <Image className='w-[60px] h-[40px] lg:w-[200px] lg:h-[80px]' src='/About/logo-5.png' alt='' width={100} height={60} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Logo;