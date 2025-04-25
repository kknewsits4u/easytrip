import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { photoCollection } from "../Store/DataStore";

function PopularSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1.5 }, // ✅ Mobile: 1.5 cards
    640: { items: 2.5 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const slideNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = photoCollection.slice(0, 8).map((data, i) => (
    <div key={i} className="px-2">
      <div className="rounded-lg shadow-md flex flex-col items-center justify-center text-lg font-semibold text-gray-600 hover:transform transition-all hover:-translate-y-2 cursor-pointer overflow-hidden h-[230px] md:h-[280px] lg:h-[320px]">
        <div className="h-full w-full">
          <img
            src={data.image}
            alt="photo"
            className="h-full w-full object-cover object-center rounded"
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-4">
      <h2 className="px-2 text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-600 mb-4">
        Best Photo Collection
      </h2>

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
          paddingLeft={5}
        />

        {/* Prev Button */}
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

        {/* Next Button */}
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
