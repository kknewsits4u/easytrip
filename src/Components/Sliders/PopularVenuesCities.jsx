import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { citiesData } from "../Store/DataStore";

function PopularVenues() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 2.75 },
    650: { items: 4.5 },
    768: { items: 4.25 },
    968: { items: 5.5 },
    1280: { items: 6.5 },
  };

  const slidePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };



  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = citiesData.slice(1,10).map((data, i) => (
    <div key={i} className="w-full px-2">
      <div className= " bg-white border border-gray-300 shadow-md rounded-lg gap-5 h-25 md:h-30 lg:h-40 p-2 flex flex-col items-center justify-center text-lg font-semibold text-gray-600">
          <div  className=" flex items-center justify-center h-1/2 w-full overflow-hidden" >
              <img  src={i%2 == 0 ? "b1.jpg":"b2.jpg" }  alt="image" className=" h-full w-auto object-cover object-center transform hover:scale(110) " />
              {/* src="https://i.pinimg.com/474x/20/70/94/2070943ede3c4756187fd657b1a051e8.jpg" */}
          </div>
          <h1 className=" text-sm lg:text-lg"  >{data.cityName}</h1>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 pt-25 lg:py-5 border border-white">
        <div className=" flex items-center justify-between px-2 my-1"  >
      <h2 className="text-md lg:text-xl xl:text-3xl text-left font-extrabold text-gray-800 mb-5 lg:mb-10">
        Popular Venues City
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

        {/* Prev Button */}
        <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 z-10">
          <Button
            onClick={slidePrev}
            disabled={activeIndex === 0}
            variant="contained"
            sx={{
              bgcolor: "white",
              minWidth: "40px",
              height: "55px",
              borderRadius:"50%",
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
            disabled={activeIndex >= items.length - 1}
            variant="contained"
            sx={{
              bgcolor: "white",
              minWidth: "40px",
              borderRadius:"50%",
              height: "55px",
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

export default PopularVenues;
