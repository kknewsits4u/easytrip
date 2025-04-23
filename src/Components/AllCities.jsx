import { Button } from "@mui/material";
import React from "react";
import { citiesData } from "./Store/DataStore";

const AllCities = () => {
  return (
    <div className="flex flex-col  items-center justify-between gap-5 w-full  h-fit bg-white shadow-md rounded-sm  shadow-gray-200 p-5 mt-15 lg:mt-5 ">
      <h1 className="text-2xl  lg:text-3xl font-bold w-full text-left py-2 ">
        Other Popular Cities
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full h-fit gap-5">
        {citiesData?.map((data, idx) => (
             <div className="flex items-center justify-center w-full h-50 lg:h-60 border border-gray-300 bg-white  shadow-sm shadow-gray-300  relative rounded-md transition-transform duration-300 hover:scale-105  "  >

               <img src={data.image} alt="image"  className=" w-full  h-full object-cover object-center  rounded-md"  />
               <div className=" flex w-full h-full absolute top-0 left-0 rounded-md items-end justify-start  p-5"  style={{  backgroundColor:"rgba(0,0,0,0.05)" , backdropFilter:"blur(1px)" }}  >
                   <h1 className="text-white font-bold text-2xl" style={{    textShadow:" 2px 2px 8px rgba(0, 0, 0, 0.6)"  }} >{data.cityName}</h1>
               </div>
             </div>
        ))}
      </div>
    </div>
  );
};

export default AllCities;
