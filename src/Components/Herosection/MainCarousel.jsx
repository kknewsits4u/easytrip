import React from "react";
import Slider from "react-slick";
import { MainCarouselData } from "../Store/DataStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainCarousel = () => {


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,             
    speed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Slider {...settings}  >
        {MainCarouselData.map((item, index) => (
          <div key={index} className="w-screen h-screen">
            <img
              src={item.image}
              loading="lazy"
              className="w-full h-full object-cover object-center"
              alt="carousel"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
