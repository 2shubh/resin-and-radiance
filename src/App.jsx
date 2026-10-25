import { useCallback, useState } from 'react'
import { scrollToId } from './lib/scroll.js'
import AnnouncementBar from './sections/AnnouncementBar.jsx'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Categories from './sections/Categories.jsx'
import FeaturedCreations from './sections/FeaturedCreations.jsx'
import About from './sections/About.jsx'
import Process from './sections/Process.jsx'
import CustomOrders from './sections/CustomOrders.jsx'
import Gallery from './sections/Gallery.jsx'
import WhyChooseUs from './sections/WhyChooseUs.jsx'
import Reviews from './sections/Reviews.jsx'
import FAQ from './sections/FAQ.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import FloatingWhatsApp from './sections/FloatingWhatsApp.jsx'

export default function App() {
  // Shared between "Find Something Beautiful" and the product grid,
  // so picking a category filters Featured Creations.
  const [productFilter, setProductFilter] = useState('all')

  const showCategory = useCallback((categoryId) => {
    setProductFilter(categoryId)
    scrollToId('featured')
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Categories onSelect={showCategory} />
        <FeaturedCreations filter={productFilter} onFilterChange={setProductFilter} />
        <About />
        <Process />
        <CustomOrders />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
