import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import ProductGrid from "./components/sections/ProductGrid/ProductGrid"
import SpecSheet from "./components/sections/SpecSheet/SpecSheet"
import Testimonials from "./components/sections/Testimonials/Testimonials"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <SpecSheet />
        <Testimonials />
      </main>
    </>
  )
}

export default App