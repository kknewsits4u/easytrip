import React from 'react'

import HeroSection from '../Herosection/HeroSection'
import PopularVenuesCities from "../Sliders/PopularVenuesCities"
import PopularVenues from "../Sliders/PopularVenues"
import PopularSearch from "../Sliders/ExploreCategory.jsx"
import FeaturedVendors from "../Sliders/FeaturedVendors"
import PhotoGallery from "../Sliders/PhotoGallery"
import Blogs from "../Blogs/Blogs.jsx"
import WeddingCategories from '../ServiceCategory/ServiceCategories.jsx'


const Homepage = () => {
  return (
      <div className='flex flex-col h-fit items-center justify-start w-full'  >
      <HeroSection/>
      <PopularVenuesCities/>
      <PopularVenues/>
      <WeddingCategories/>
      <FeaturedVendors/>
      <PopularSearch/>
      <PhotoGallery/>
      <Blogs/>
      </div>
  )
}

export default Homepage

