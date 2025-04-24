import { useState } from 'react'
import './App.css'
// import Navbar from './Components/Navbar'
import ExploreSection from './Components/ExploreSection'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navigation/Navbar'
import HeroSection from './Components/Herosection/HeroSection'
import PopularVenues from './Components/Sliders/PopularVenues'
import PopularSearch from './Components/Sliders/PopularSearch'
import FeaturedVendors from './Components/Sliders/FeaturedVendors'
import PhotoGallery from './Components/Sliders/PhotoGallery'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col h-full items-center justify-start w-full'  >
      <Navbar/>
      <HeroSection/>
      <PopularVenues/>
      <PopularSearch/>
      <ExploreSection/>
      <FeaturedVendors/>
      <PhotoGallery/>
      <Footer/>
      </div>
  )
}

export default App
