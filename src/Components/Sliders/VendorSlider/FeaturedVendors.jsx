import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { businessData } from "../../Store/DataStore";
import VendorCard from "./VendorCard";
import CommonSlider from "../SliderComponent/CommonSlider";

function FeaturedVendors() {


  const responsive = {
    0: { items: 1.25 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 }
  };


  const data = businessData.map((data, i) => (
    <div key={i} className="w-full p-2   ">
      <VendorCard  data={data} />
    </div>
  ));

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-700 mb-3 lg:mb-5">
          Featured Vendors
        </h2>
      </div>

        <CommonSlider  data={data}  responsive={responsive}  getItemsPerPage={null} />

    </div>
  );
}

export default FeaturedVendors;
