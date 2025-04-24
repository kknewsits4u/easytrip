import React from 'react'

import HeroSection from '../Herosection/HeroSection'
import PopularVenuesCities from "../Sliders/PopularVenuesCities"
import PopularVenues from "../Sliders/PopularVenues"
import PopularSearch from "../Sliders/PopularSearch"
import FeaturedVendors from "../Sliders/FeaturedVendors"
import PhotoGallery from "../Sliders/PhotoGallery"
import Blogs from "../Blogs/Blogs.jsx"


const Homepage = () => {
  return (
      <div className='flex flex-col h-fit items-center justify-start w-full'  >
      <HeroSection/>
      <PopularVenuesCities/>
      <PopularVenues/>
      <PopularSearch/>
      <FeaturedVendors/>
      <PhotoGallery/>
      <Blogs/>
      </div>
  )
}

export default Homepage

