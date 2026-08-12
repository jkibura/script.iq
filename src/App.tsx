import Header from "./components/layout/Header/Header"
import Hero from "./components/sections/Hero/Hero"
import ProductGrid from "./components/sections/ProductGrid/ProductGrid"
import SpecSheet from "./components/sections/SpecSheet/SpecSheet"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <SpecSheet />
      </main>
    </>
  )
}

export default App