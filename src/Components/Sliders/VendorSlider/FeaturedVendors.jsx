import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { businessData } from "../../Store/DataStore";
import VendorCard from "./VendorCard";

function FeaturedVendors() {

  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1.25 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 }
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const slideNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = businessData.map((data, i) => (
    
    <div key={i} className="w-full p-2">
      <VendorCard  data={data} />
    </div>

  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-600 mb-4">
          Featured Vendors
        </h2>
      </div>

      <div className="relative">
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          mouseTracking
        />

   
        <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 z-10">
          <Button
            onClick={slidePrev}
            variant="contained"
            sx={{
              bgcolor: "white",
              minWidth: "40px",
              height: "55px",
              borderRadius: "50%",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        </div>

        <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10">
          <Button
            onClick={slideNext}
            variant="contained"
            sx={{
              bgcolor: "white",
              minWidth: "40px",
              height: "55px",
              borderRadius: "50%",
              boxShadow: 2,
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "black" }} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedVendors;
