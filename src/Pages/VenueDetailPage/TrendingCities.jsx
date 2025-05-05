import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { citiesData } from "../../Components/Store/DataStore";
import CommonSlider from "../../Components/Sliders/SliderComponent/CommonSlider";

function TrendingCities() {
  const responsive = {
    0: { items: 3 },
    640: { items: 4 },
    768: { items: 5 },
    1024: { items: 6 },
  };

  const data = citiesData.slice(1, 15).map((data, i) => (
    <div key={i} className="px-2">
      <div className="rounded-lg shadow-md flex flex-col items-center justify-center text-sm font-semibold text-gray-600  cursor-pointer overflow-hidden h-[100px] md:h-[130px] lg:h-[150px] xl:h-[200px] relative">
        <div className="h-full w-full">
          <img
            src={data.image}
            alt="photo"
            className="h-full w-full object-cover object-center rounded"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t flex items-end justify-start from-black/70 hover:from-black/90 to-transparent p-2 ">
          <h3 className=" w-full text-left text-white font-normal  leading-relaxed ">
            {data.cityName}, {data.country}{" "}
          </h3>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-2 lg:px-4 py-2 border border-gray-200">
      <h2 className="px-2 text-md lg:text-xl xl:text-lg text-left font-semibold text-slate-600 mb-4">
        Trending Cities
      </h2>
      <CommonSlider
        data={data}
        responsive={responsive}
        getItemsPerPage={null}
      />
    </div>
  );
}

export default TrendingCities;
