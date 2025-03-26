"use client";

import Carousel from '@/components/About/Carousel'
import GetSpecial from '@/components/About/GetSpecial';
import ElevatorPainting from '@/components/Gallery/ElevatorPainting';
import ExteriorPainting from '@/components/Gallery/ExteriorPainting'
import Hero from '@/components/Gallery/Hero'
import InteriorPainting from '@/components/Gallery/InteriorPainting'
import SpectacularWorks from '@/components/Gallery/SpectacularWorks'
import WaterProofing from '@/components/Gallery/WaterProofing';
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SpectacularWorks />
      <InteriorPainting />
      <ExteriorPainting />
      <WaterProofing />
      <ElevatorPainting />
      <GetSpecial />
      <Carousel />
      <Footer />
    </div>
  )
}

export default Page