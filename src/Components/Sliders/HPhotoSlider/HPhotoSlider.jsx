import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import {photoCollection} from "../../Store/DataStore"
import CommonSlider from "../SliderComponent/CommonSlider";


function HPhotoSlider() {

  const responsive = {
    0: { items: 1.5 }, 
    640: { items: 2.5 },
    768: { items: 3 },
    1024: { items: 4 },
  };


  const data = photoCollection.slice(0, 8).map((data, i) => (
    <div key={i} className="px-2">
      <div className="rounded-lg shadow-md flex flex-col items-center justify-center text-lg font-semibold text-gray-700 hover:transform transition-all hover:-translate-y-2 cursor-pointer overflow-hidden h-[230px] md:h-[280px] lg:h-[320px]">
        <div className="h-full w-full">
          <img
            src={data.image}
            alt="photo"
            className="h-full w-full object-cover object-top rounded"
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-4">
      <h2 className="px-2 text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-600 mb-4">
        Best Photo Collection
      </h2>
      <CommonSlider  data={data}  responsive={responsive}  getItemsPerPage={null}  />
    </div>
  );
}

export default HPhotoSlider;
