import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Services_provided from "@/components/services_provided/services_provided"
import Society from "@/components/Society/Society"
import Hero from "@/components/hero/hero"
import OneStop from "@/components/WaterProof/OneStop"

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
       <Society/>
       <Services_provided/>
        <OneStop/>
        <Footer/>
    </div>
  )
}

export default page