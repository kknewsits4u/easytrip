import React, { useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { citiesData } from "../Store/DataStore";
import CommonSlider from "./SliderComponent/CommonSlider";
import { useNavigate } from "react-router-dom";


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
 
  const navigate = useNavigate();


  const handleCitySearch = (city)=>{
    navigate(`/${city}`)
  }


  const data = citiesData.slice(1, 10).map((data, i) => (
    <div key={i} className="w-full p-2">
      <div className=" bg-[rgb(255,255,255)] border border-gray-200 shadow-md rounded-lg gap-3 h-20 md:h-30 lg:h-40  flex flex-col items-center justify-center text-lg font-semibold text-gray-600"  onClick={()=> handleCitySearch(data.cityName) }   >
        <div className="relative flex items-center justify-center h-full w-full overflow-hidden rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <img
            src={data.image}
            alt="image"
            className=" h-full w-auto object-cover object-center transform hover:scale(110) rounded-lg "
          />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/40 to-transparent h-full w-full  pb-1 md:pb-3 flex items-end justify-center text-white text-sm  md:text-base  " >{data.cityName}
        </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 pt-25 lg:py-5  ">
      <div className=" flex items-center justify-between my-1">
        <h2 className="text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-700 mb-3 lg:mb-5">
          Popular Venues City
        </h2>
      </div> 
      <CommonSlider  data={data}  responsive={responsive}  getItemsPerPage={getItemsPerPage}  />
    </div>
  );
}

export default PopularVenues;
