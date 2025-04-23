import { useState } from 'react'
import './App.css'
// import Navbar from './Components/Navbar'
import ExploreSection from './Components/ExploreSection'
import AllCities from './Components/AllCities'
import SpecialOffer from './Components/Advertisement/SpecialOffer'
import Footer from './Components/Footer'
import Navbar from './Components/Navigation/Navbar'
import HeroSection from './Components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col h-full items-center justify-start w-full gap-5'  >
      <Navbar/>
      <HeroSection/>
      <ExploreSection/>
      <SpecialOffer/>
      <AllCities/>
      <Footer/>
      </div>
  )
}

export default App
