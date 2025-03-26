"use client";

import Carousel from "@/components/About/Carousel";
import Logo from '@/components/About/Logo';
import GetSpecial from "@/components/Gallery/GetSpecial";
import SpectacularWorks from "@/components/Gallery/SpectacularWorks";
import Hero from "@/components/Home/Hero";
import HomeGallery from "@/components/Home/HomeGallery";
import Luxury from "@/components/Home/Luxury";
import OurTeam from "@/components/Home/OurTeam";
import Paints from "@/components/Home/Paints";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Logo/>
        <Why/>
        <Luxury/>
        {/* Fast, cheap and high component present the folder of about */}
        <Paints/>
        <OurTeam/>
        <GetSpecial/>
        <HomeGallery/>
        <SpectacularWorks/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default page