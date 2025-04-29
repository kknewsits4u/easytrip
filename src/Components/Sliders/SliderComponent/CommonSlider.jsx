import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";


function CommonSlider({data, responsive, getItemsPerPage }) {


  const [activeIndex, setActiveIndex] = useState(0);


  const slidePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const slideNext = () => {
    setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);



  return (
  

      <div className="relative">

        <AliceCarousel
          key={activeIndex}
          items={data}
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
            disabled={getItemsPerPage != null ? activeIndex == 0 : false }
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

        <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10">
          <Button
            onClick={slideNext}
            variant="contained"
            disabled={getItemsPerPage != null ? activeIndex >= data.length - getItemsPerPage() : false }
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
  );
}

export default CommonSlider;
