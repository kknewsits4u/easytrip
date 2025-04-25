import React from "react";
import "./FilterCategoryCard.css";
import { useNavigate } from "react-router-dom";

const FilterCategoryCard = ( ) => {

 const navigate = useNavigate();



  return (
    <div  onClick={()=> navigate(`/product/}`)}   className="productCard w-[15rem] shadow-md lg:rounded-sm  h-[25rem] m-4 transition-all cursor-pointer mx-12">
      <div className="h-[20rem] w-full   z-20">
        <img src="" alt=""  className="h-full w-full object-left-top object-cover"  />
      </div>

      <div className=" textPart bg-white p-3 ">
        <div className="flex flex-col text-left">
          <p className="font-bold opacity-60 text-black">Jai Mata Rani</p>
          <p className=" text-black">Jai Shri Ram</p>
        </div>
        <div className="flex gap-3">
          <p className="font-semibold text-black">₹ 87888</p>
          <p className="line-through text-black opacity-50">
            ₹ 25623
          </p>
          <p className="text-green-600 font-semibold">
            10% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterCategoryCard;
