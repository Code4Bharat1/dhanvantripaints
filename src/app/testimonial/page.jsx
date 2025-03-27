"use client";

import Carousel from '@/components/About/Carousel'
import GetSpecial from '@/components/About/GetSpecial'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Hero from '@/components/Testimonial/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Carousel/>
        <GetSpecial/>
        <Footer/>
    </div>
  )
}

export default page