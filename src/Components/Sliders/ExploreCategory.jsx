import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { citiesData, popularSearch } from "../Store/DataStore";

function PopularSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
    // 1280: { items: 5 },
  };

  const slidePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = popularSearch.slice(1, 10).map((data, i) => (
    <div key={i} className="w-full p-2 ">
      <div className=" rounded-lg gap-3 pb-2 h-fit flex flex-col items-center justify-center text-lg font-semibold text-gray-600 shadow-md cursor-pointer hover:bg-gray-200 ">
        <div className=" flex items-center justify-center h-70 w-full">
          <img
            src={data.image}
            alt="image"
            className=" h-full w-full object-cover object-center rounded"
          />
        </div>
        <h1>{data.name}</h1>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 ">
      <div className=" flex items-center justify-between px-2">
        <h2 className="text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-600 mb-3 lg:mb-5">
          Explore Category
        </h2>
      </div>

      {/* <div className="relative  "   style={{  gap:"5px"  }} >
        <AliceCarousel
          key={activeIndex}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}

        />

   
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
      </div> */}
      <div className=" grid grid-cols-3 lg:grid-cols-4 px-2 gap-5">
        {popularSearch.map((data, i) => (
          <div key={i} className="rounded-lg gap-2 pb-4 flex flex-col items-center justify-between text-gray-600 shadow-md cursor-pointer hover:bg-gray-200 h-[140px] md:h-[200px] lg:h-[320px]">
            <div className="w-full h-[85%]">
              <img
                src={data.image}
                alt="image"
                className="w-full h-full object-cover object-center rounded-t"
              />
            </div>
            <h1 className="w-full text-center text-[10px] md:text-[12px] lg:text-[16px] h-[15%] flex items-center justify-center font-semibold">
              {data.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSearch;
