import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './Components/Navbar'
import Recommonded from './Components/Recommonded'
import MostFamous from './Components/MostFamous'
import BookFlightAds from './Components/Advertisement/BookFlightAds'
import Footer from './Components/Footer'
import Navbar from './Components/Navigation/Navbar'
import HeroSection from './Components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='flex flex-col h-full items-center justify-start w-full gap-5'  >
      <Navbar/>
      <HeroSection/>
      <Recommonded/>
      <BookFlightAds/>
      <MostFamous/>
      <Footer/>
      </div>
  )
}

export default App
