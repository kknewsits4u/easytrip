import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navigation/Navbar";
import Homepage from "./Pages/Homepage";
import ScrollToTop from "./Utils/ScrollToTop";
import "react-datepicker/dist/react-datepicker.css";
import VenueDetails from "./Pages/VenueDetailPage/VenueDeatils";
import SearchPage from "./Pages/SearchPage";
import CityPage from "./Pages/CityDetailsPage/CityDetails";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-full flex flex-col items-center  " >
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:city" element={<CityPage />} />
            <Route path="/:city/:venues" element={<SearchPage />} />
            <Route path="/:city/:venues/:id" element={<VenueDetails />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
