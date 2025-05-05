import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { citiesData } from "../Components/Store/DataStore";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';

const SearchPage = () => {
  const buttonList = [
    { listElem: "Locality" },
    { listElem: "No. Of Guests" },
    { listElem: "Room Counts" },
    { listElem: "Price per plates(Rs)" },
    { listElem: "Rental Cost( Per Function )" },
    { listElem: "Venue Type" },
    { listElem: "Space" },
    { listElem: "Rating" },
  ];

  return (
    <div className="flex flex-col w-full h-fit items-center justify-start min-h-[100vh]">
      <div className="flex  overflow-x-scroll scrollbar-hide w-full items-center justify-between h-25 md:h-50  max-w-screen p-5 mt-2 gap-2 md:gap-6 lg:gap-10 2xl:px-20">
        {citiesData.slice(1, 11).map((data, i) => (
          <div
            key={i}
            className=" flex flex-col items-center justify-between gap-2 md:gap-5  h-fit w-fit  p-2 "
          >
            <div className=" flex items-center justify-center rounded-full  w-12 md:w-20 h-12 md:h-20 shadow-lg cursor-pointer">
              <img
                src={data.image}
                alt="city image "
                className=" w-full h-full object-cover rounded-full object-center"
              />
            </div>
            <h1 className="text-sm  md:text-lg  font-semibold text-slate-600">
              {data.cityName}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex max-md:flex-col w-full  items-start  justify-between h-25 md:h-20  max-w-screen p-2  2xl:px-20 border-b  border-slate-300 " >
         <p className="font-semibold text-lg text-slate-700 " >Total Results for "Delhi" </p>
         <div className=" flex items-center justify-center gap-5 w-fit h-fit  " >
            <div  className=" flex items-center justify-center  h-10 w-30 md:w-50 lg:w-100 rounded"  >
             
                <input type="text" placeholder="Search city name" className=" w-full h-full border border-slate-500 rounded px-2 focus:border-0 focus:outline-0 focus:shadow-md   focus:shadow-[rgb(236,92,149)] "  />
   
            </div   >
            <div className="flex items-center justify-center gap-2 text-md  font-semibold text-slate-700 cursor-pointer hover:font-bold hover:text-[rgb(236,92,149)] " >
               <FormatListBulletedIcon/> <span>List</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-md  font-semibold text-slate-700 cursor-pointer hover:font-bold hover:text-[rgb(236,92,149)]  " >
              <AppsIcon/> <span>Grid</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-[1fr_2fr]  w-full items-center justify-between h-25 md:h-50  max-w-screen p-5 mt-2 gap-2 md:gap-6 lg:gap-10 2xl:px-20"  >
          <div className=" w-full h-100 bg-white flex border " >
             
          </div>
          <div className=" w-full h-100 bg-white flex border" >
             
          </div>
 
      </div>
    </div>
  );
};

export default SearchPage;
