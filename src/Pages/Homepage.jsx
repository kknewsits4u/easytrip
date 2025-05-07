import React from 'react'

import HeroSection from '../Components/Herosection/HeroSection.jsx'
import PopularVenuesCities from "../Components/Sliders/PopularVenuesCities.jsx"
import PopularVenues from "../Components/Sliders/PopularVenues.jsx"
import PopularSearch from "../Components/Sliders/ExploreCategory.jsx"
import Blogs from "../Components/Blogs/Blogs.jsx"
import WeddingCategories from '../Components/ServiceCategory/ServiceCategories.jsx'
import FeaturedVendors from '../Components/Sliders/VendorSlider/FeaturedVendors.jsx'
import HPhotoSlider from '../Components/Sliders/HPhotoSlider/HPhotoSlider.jsx'


const Homepage = () => {
  return (
      <div className='flex flex-col h-fit items-center justify-start w-full'  >
      <HeroSection/>
      <PopularVenuesCities/>
      <WeddingCategories/>
      <FeaturedVendors/>
      <PopularSearch/>
      <PopularVenues/>
      <HPhotoSlider/>
      <Blogs/>
      </div>
  )
}

export default Homepage

