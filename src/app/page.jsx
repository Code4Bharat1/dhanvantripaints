"use client";

import Carousel from "@/components/About/Carousel";
import GetSpecial from "@/components/About/GetSpecial";
import Logo from "@/components/About/Logo";
import Hero from "@/components/Home/Hero";
import HomeGallery from "@/components/Home/HomeGallery";
import Luxury from "@/components/Home/Luxury";
import OurTeam from "@/components/Home/OurTeam";
import Paints from "@/components/Home/Paints";
import Why from "@/components/Home/Why";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const page = () => {
  return (
    <div>
        {<Navbar/>}
        <Hero/>
        <Logo/>
        <Luxury/>
        <Why/>
        <Paints/>
        <OurTeam/>
        <GetSpecial/>
        <HomeGallery/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default page