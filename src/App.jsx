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
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div   className=" w-full flex flex-col items-center  " >
      <BrowserRouter>
      <ScrollToTop/>
       <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/city/venues/:id" element={<VenueDetails />} />
          <Route path="/city/venues" element={<CityWiseSearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
