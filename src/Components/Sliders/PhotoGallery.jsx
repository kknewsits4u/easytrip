import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { citiesData, photoCollection, popularSearch } from "../Store/DataStore";

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

  const items = photoCollection.slice(0,8).map((data, i) => (
    <div key={i} className="w-full p-2 flex flex-col gap-5">
      <div className= " rounded-lg gap-3 pb-2 h-fit flex flex-col items-center justify-center text-lg font-semibold text-gray-600 shadow-md">
          <div  className=" flex items-center justify-center h-90 w-full" >
              <img src={data.image1} alt="image" className=" h-full w-full object-cover object-center rounded" />
          </div>
        
      </div>
      <div className= " rounded-lg gap-3 pb-2 h-fit flex flex-col items-center justify-center text-lg font-semibold text-gray-600 shadow-md">
          <div  className=" flex items-center justify-center h-90 w-full" >
              <img src={data.image2} alt="image" className=" h-full w-full object-cover object-center rounded" />
          </div>

      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-10">
       <div className=" flex items-center justify-between px-2 my-1"  >
      <h2 className="text-md lg:text-xl xl:text-3xl text-left font-extrabold text-gray-800 mb-5 lg:mb-10">
        Best Photo Collection 
      </h2>
     </div>

      <div className="relative  "   style={{  gap:"5px"  }} >
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}

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
