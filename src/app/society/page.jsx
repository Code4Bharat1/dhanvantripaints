import Navbar from "@/components/layout/navbar"
import Hero from "@/components/Society/Hero"
import Society from "@/components/Society/Society"
import OneStop from "@/components/Society/OneStop" 
import Footer from "@/components/layout/footer"
import Services from "@/components/Society/Services"

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Society/>
        <Services/>
        <OneStop/>
        <Footer/>
    </div>
  )
}

export default page