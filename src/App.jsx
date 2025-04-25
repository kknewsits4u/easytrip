import { useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navigation/Navbar";
import Homepage from "./Pages/Homepage";
import HotelDetailsPage from "./Pages/VenueDeatils";
import CityWiseSearchPage from "./Pages/CityWiseSearchPage";
import ScrollToTop from "./Utils/ScrollToTop";
import FilterCategory from "./Pages/FilterComponent/FilterCategory";
import VenueDetails from "./Pages/VenueDeatils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
       <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/city/venues/:id" element={<VenueDetails />} />
          <Route path="/city/venues" element={<CityWiseSearchPage />} />
          {/* <Route path="/search" element={<FilterCategory />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
