import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { citiesData } from "../Store/DataStore";
import CommonSlider from "./SliderComponent/CommonSlider";

function PopularVenues() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 3 },
    650: { items: 5 },
    768: { items: 5.5 },
    968: { items: 6.5 },
    1280: { items: 7 },
  };

  const getItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 6.5;
    if (width >= 968) return 5.5;
    if (width >= 768) return 4.25;
    if (width >= 650) return 4.5;
    return 2.75;
  };

  const data = citiesData.slice(1, 10).map((data, i) => (
    <div key={i} className="w-full p-2">
      <div className=" bg-[rgb(255,255,255)] border border-gray-200 shadow-md rounded-lg gap-3 h-20 md:h-30 lg:h-40 p-2 flex flex-col items-center justify-center text-lg font-semibold text-gray-600">
        <div className=" flex items-center justify-center h-1/2 w-full overflow-hidden">
          <img
            src={i % 2 == 0 ? "b1.jpg" : "b2.jpg"}
            alt="image"
            className=" h-full w-auto object-cover object-center transform hover:scale(110) "
          />
        </div>
        <h1 className=" text-xs lg:text-base">{data.cityName}</h1>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 pt-25 lg:py-5  ">
      <div className=" flex items-center justify-between px-2 my-1">
        <h2 className="text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-600 mb-3 lg:mb-5">
          Popular Venues City
        </h2>
      </div> 
      <CommonSlider  data={data}  responsive={responsive}  getItemsPerPage={getItemsPerPage}  />
    </div>
  );
}

export default PopularVenues;
