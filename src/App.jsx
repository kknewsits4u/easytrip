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
import CityWiseDetails from "./Pages/CityDetailsPage/CityWiseDetails";
import AllBlogPage from "./Pages/BlogPage/AllBlogPage";
import AllBanquet from "./Pages/BanquetHallPage/AllBanquet";
import AllVendors from "./Pages/VendorsPage/AllVendors";
import AllRealWedding from "./Pages/RealWeddingPage/AllRealWedding";
import AllPhotos from "./Pages/PhotosPage/AllPhotos";
import Co_operateMettingPage from "./Pages/Co_operatePage/Co_operateMettingPage";


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
            <Route path="/:city" element={<CityWiseDetails />} />
            <Route path="/blogs" element={<AllBlogPage />} />
            <Route path="/banquets" element={<AllBanquet />} />
            <Route path="/vendors" element={<AllVendors />} />
            <Route path="/real-weddings" element={<AllRealWedding />} />
            <Route path="/photos" element={<AllPhotos />} />
            <Route path="/co-oporate-meeting" element={<Co_operateMettingPage />} />
            <Route path="/venues" element={<SearchPage />} />
            <Route path="/venues/:id" element={<VenueDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
