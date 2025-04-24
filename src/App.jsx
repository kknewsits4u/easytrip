import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from './Components/Navbar'
import ExploreSection from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navigation/Navbar";
import HeroSection from "./Components/Herosection/HeroSection";
import PopularVenuesCities from "./Components/Sliders/PopularVenuesCities";
import PopularVenues from "./Components/Sliders/PopularVenues";
import PopularSearch from "./Components/Sliders/PopularSearch";
import FeaturedVendors from "./Components/Sliders/FeaturedVendors";
import PhotoGallery from "./Components/Sliders/PhotoGallery";
import Homepage from "./Components/Homepage/Homepage";
import HotelDetailsPage from "./Pages/HotelDetailsPage";
import CityWiseSearchPage from "./Pages/CityWiseSearchPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        
          <Route path="/" element={<Homepage />} />
         <Route path="/city/venues/:id" element={<HotelDetailsPage />} />
         <Route path="/city/venues" element={<CityWiseSearchPage />} />
          {/*   <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
