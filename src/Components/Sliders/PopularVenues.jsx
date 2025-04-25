import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import { venueDetails } from "../Store/DataStore";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";

function PopularSearch() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleSearchCity = (city) => {
    navigate(`/city/venues/${city}`);
  };

  console.log(activeIndex);

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

  const items = venueDetails.slice(1, 20).map((data, i) => (
    <div key={i} className="w-full p-2 ">
      <div
        className=" rounded-lg gap-3 pb-2 flex flex-col items-start justify-between text-lg font-semibold text-gray-600 shadow-md border border-gray-300  h-90 hover:bg-gray-100 cursor-pointer  "
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
            <h1 className="text-md text-black ">{data.venueName}</h1>
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
                fontSize: "22px",
              }}
            />
          </div>
          <p className=" text-sm ">
            Starting At :{" "}
            <span className="text-[orange] "> {data.startingPrice} </span>
          </p>
          <div className=" flex w-full gap-2  ">
            <LocationOnIcon
              sx={{ color: "rgb(23,141,241) ", height: "100%" }}
            />
            <p className=" text-sm text-left line-clamp-2 ">{data.location} </p>
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

      <div className="relative  " style={{ gap: "5px" }}>
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
            disabled={activeIndex === 0}
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
            disabled={activeIndex >= items.length - 1}
            variant="contained"
            sx={{
              bgcolor: "white",
              minWidth: "40px",
              borderRadius: "50%",
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
