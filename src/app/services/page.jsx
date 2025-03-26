"use client";

import Carousel from "@/components/About/Carousel";
import GetSpecial from "@/components/About/GetSpecial";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Effortless from "@/components/Services/Effortless";
import Hero from "@/components/Services/Hero";

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Effortless/>
        <GetSpecial/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default page