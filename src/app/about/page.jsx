'use client'

import Carousel from "@/components/About/Carousel";
import ExceptionalQuality from "@/components/About/ExceptionalQuality";
import GetSpecial from "@/components/About/GetSpecial";
import Hero from "@/components/About/Hero";
import Image_section from "@/components/About/project_section";
import Logo from "@/components/About/Logo";
import OurJourney from "@/components/About/OurJourney";
import TransformYourPage from "@/components/About/TransformYourPage";
import Welcome from "@/components/About/Welcome";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";


const Page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TransformYourPage/>
      <ExceptionalQuality/>
      <Welcome/>
      <Logo/>
      <OurJourney/>
      <Image_section/>
      <GetSpecial/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Page;
