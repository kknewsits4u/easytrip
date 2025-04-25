import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { businessData } from "../Store/DataStore";

function PopularSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1.5 },
    768: { items: 2.5 },
    1024: { items: 3.5 },
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
      <div className="rounded-lg shadow-md flex flex-col items-start justify-between cursor-pointer  bg-[rgb(255,255,255)] hover:bg-slate-100 h-[240px] sm:h-[260px] md:h-[280px] lg:h-[320px] xl:h-[380px] transition-all duration-300">
        {/* Image */}
        <div className="flex items-center justify-center h-[65%] w-full">
          <img
            src={data.image}
            alt="image"
            className="h-full w-full object-cover object-center rounded-t-lg"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col p-2 w-full h-[35%] justify-evenly text-left gap-1">
          <h1 className="text-[15px]  font-semibold text-slate-700 line-clamp-1">
            {data.heading}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 truncate w-[90%]">
            {data.description}
          </p>
          <span className="text-sm sm:text-base font-semibold text-[rgb(239,74,107)]">
            {data.price}
          </span>
        </div>
      </div>
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

        {/* Prev */}
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

        {/* Next */}
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

export default PopularSearch;
