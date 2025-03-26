"use client";

import Carousel from "@/components/About/Carousel"
import GetSpecial from "@/components/About/GetSpecial"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import Hero from "@/components/Society/Hero";
import Services from "@/components/Society/Services"
import OneStop from "@/components/WaterProof/OneStop"
import WaterproofPainting from "@/components/WaterProof/WaterproofPainting"


const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WaterproofPainting/>
        <Services/>
        <OneStop/>
        <GetSpecial/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default page