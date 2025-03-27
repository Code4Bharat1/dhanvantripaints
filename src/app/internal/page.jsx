import Carousel from "@/components/About/Carousel";
import GetSpecial from "@/components/About/GetSpecial";
import Hero from "@/components/hero/hero";
import Internal_painting from "@/components/internal_painting/internal_painting";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Services_provided from "@/components/services_provided/services_provided";
import OneStop from "@/components/WaterProof/OneStop"
export default function Home(){
    return(
        <>
       <Navbar/>
       <Hero/>
       <Internal_painting/>
       <Services_provided/>
       <OneStop/>
       <GetSpecial/>
       <Carousel/>
       <Footer/>
        </>
    )
}