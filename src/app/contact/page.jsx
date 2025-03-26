import ContactForm from "@/components/Contact/ContactForm"
import Hero from "@/components/Contact/Hero"
import Footer from "@/components/layout/footer"
import Map from '@/components/Contact/Map'
import Navbar from "@/components/layout/navbar"

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ContactForm/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page