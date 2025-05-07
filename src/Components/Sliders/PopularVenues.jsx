import React, { useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { venueDetails } from "../Store/DataStore";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import CommonSlider from "./SliderComponent/CommonSlider";

function PopularSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleSearchCity = (city) => {
    navigate(`/city/venues/${city}`);
  };

 

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },

  };

  const getItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    return 2.75;
  };



  const data = venueDetails.slice(1, 20).map((data, i) => (
    <div key={i} className="w-full p-2 ">
      <div
        className="bg-[rgb(255,255,255)] rounded-lg gap-3 pb-2 flex flex-col items-start justify-between text-lg font-semibold text-gray-700 shadow-md   h-90 hover:bg-gray-100 cursor-pointer  "
        onClick={() => handleSearchCity("delhi")}
      >
        <div className=" flex items-center justify-center h-50  w-full">
          <img
            src={data.image}
            alt="image"
            className=" h-full w-full object-cover object-center rounded"
          />
        </div>
        <div className=" flex flex-col items-start justify-between h-40 px-3 w-full  ">
          <div className="  flex w-full  h-fit items-center justify-between text-left ">
            <h1 className="text-[17px] text-slate-700 ">{data.venueName}</h1>
            <div className=" w-fit  h-8   rounded-full">
              <img
                src={data.verified == true ? "/verified.png" : "/envrified.png"}
                alt="verification status"
                className=" h-full w-auto object-cover object-top rounded-full"
              />
            </div>
          </div>
          <div className=" flex items-center justify-start w-full  ">
            <Rating
              name="sread-only"
              value={data.rating}
              sx={{
                fontSize: "20px",
              }}
            />
          </div>
          <p className=" text-sm text-slate-500">
            Starting At :{" "}
            <span className="text-[#FF512F] "> {data.startingPrice} </span>
          </p>
          <div className=" flex w-full gap-2  ">
            <LocationOnIcon
              sx={{ color: "rgb(23,141,241) ", height: "100%" }}
            />
            <p className=" text-[12px] text-left line-clamp-2 ">{data.location} </p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-1 ">
      <div className=" flex items-center justify-between px-2 ">
        <h2 className="text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-600 mb-3 lg:mb-5">
          Popular Venue
        </h2>
      </div>

      <CommonSlider  data={data}  responsive={responsive}  getItemsPerPage={getItemsPerPage}  />
    </div>
  );
}

export default PopularSearch;
