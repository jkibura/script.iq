import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import ProductGrid from "./components/sections/ProductGrid/ProductGrid"
import SpecSheet from "./components/sections/SpecSheet/SpecSheet"
import Testimonials from "./components/sections/Testimonials/Testimonials"
import Faq from "./components/sections/FAQs/FAQs"
import CtaBanner from "./components/sections/CTA/CTA"
import WhatsAppButton from "./components/ui/WhatsAppButton/WhatsAppButton"
import Footer from "./components/layout/Footer/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <SpecSheet />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <WhatsAppButton />
      <Footer/> 
    </>
  )
}

export default App