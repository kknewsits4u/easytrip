import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { businessData, citiesData, popularSearch } from "../Store/DataStore";

function PopularSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
    // 1280: { items: 5 },
  };

  const slidePrev = () => {
    // setActiveIndex((prev) => Math.max(prev - 1, 0));

    setActiveIndex((prev) => activeIndex === 0 ? items.length - 1 : prev-1 );
  };

  const slideNext = () => {
    // setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
    setActiveIndex((prev) => activeIndex === items.length - 1 ? 0 : prev+1 );
  };



  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = businessData.map((data, i) => (
    <div key={i} className="w-full p-2  ">
      <div className= " rounded-lg gap-2 shadow-md h-fit flex flex-col items-start justify-center text-md font-semibold  ">
          <div  className=" flex items-center justify-center h-70 w-full" >
              <img src={data.image} alt="image" className=" h-full w-full object-cover object-center rounded" />
          </div>
       <div className="flex flex-col p-2 w-full items-start justify-between gap-2"  >
          <h1 className=" text-black"  >{data.heading}</h1>
          <h1 className=" text-gray-400  truncate whitespace-nowrap overflow-hidden w-[80%]  " >{data.description}</h1>
          <h1  className="text-[rgb(239,74,107)] " >{data.price}</h1>
    </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-10">
       <div className=" flex items-center justify-between px-2 my-1"  >
      <h2 className="text-md lg:text-lg xl:text-2xl text-left font-extrabold text-gray-800 mb-6">
        Featured Vendors
      </h2>
  
     </div>

      <div className="relative  ">
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
            // disabled={activeIndex === 0}
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
            // disabled={activeIndex >= items.length - 1}
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

export default PopularSearch;
