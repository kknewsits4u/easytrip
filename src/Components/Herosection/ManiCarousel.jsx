import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "../Store/DataStore";

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <div key={index} className="w-screen h-screen ">
      <img
        src={item.image}
        role="presentation"
        className="w-full h-full object-cover object-center"
        alt="carousel"
      />
    </div>
  ));

  return (
    <div className="w-full h-full overflow-hidden">
      <AliceCarousel
        items={items}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={1000}
        animationDuration={2000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
