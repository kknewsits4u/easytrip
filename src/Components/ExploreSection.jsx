import { Button } from "@mui/material";
import React from "react";
import { blogData, citiesData } from "./Store/DataStore";

const Recommonded = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 my-5">
      <h1 className="text-md lg:text-lg xl:text-2xl text-left font-extrabold text-gray-800 my-3">
        Latest Top Blogs
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full h-fit gap-5">
        {blogData?.map((data, idx) => (
         
            <div className="flexflex-col items-center justify-center w-full h-fit  border-gray-300 bg-white cursor-pointer shadow-sm shadow-gray-300 rounded">
             <div className="flex items-center justify-center w-full h-50 lg:h-60  rounded"  > <img
                src={data.image}
                alt="image"
                className=" w-full  h-full object-cover object-center  rounded-md"
              /></div>
            <div className=" flex flex-col text-left items-start justify-start gap-3 w-full p-2" >
               <h1 className=" text-black font-semibold truncate whitespace-nowrap overflow-hidden w-[90%]  "   >{data.heading}</h1>
               <p className=" line-clamp-2 text-gray-500"  >{data.description}</p>
            </div>
            </div>
        
        ))}
      </div>
    </div>
  );
};

export default Recommonded;
