"use client";

import Carousel from "@/components/About/Carousel";
import GetSpecial from "@/components/About/GetSpecial";
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import RepairPainting from "@/components/Repairing/RepairPainting";
import Services from "@/components/Society/Services";
import OneStop from "@/components/WaterProof/OneStop";

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <RepairPainting/>
        <Services/>
        <OneStop/>
        <GetSpecial/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default page