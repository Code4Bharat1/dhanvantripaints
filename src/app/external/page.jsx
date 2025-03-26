import Carousel from "@/components/About/Carousel";
import GetSpecial from "@/components/About/GetSpecial";
import External_painting from "@/components/external_painting/external_painting";
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Services_provided from "@/components/services_provided/services_provided";
import OneStop from "@/components/WaterProof/OneStop";


export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <External_painting/>
        <Services_provided/>
        <OneStop />
        <GetSpecial/>
        <Carousel/>
        <Footer/>
        </>
    )
}