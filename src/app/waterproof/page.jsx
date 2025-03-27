"use client";

import Carousel from "@/components/About/Carousel"
import GetSpecial from "@/components/About/GetSpecial"
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import Services_provided from "@/components/services_provided/services_provided";
import OneStop from "@/components/WaterProof/OneStop"
import WaterproofPainting from "@/components/WaterProof/WaterproofPainting";

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WaterproofPainting/>
        <Services_provided/>
        <OneStop/>
        <GetSpecial/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default page