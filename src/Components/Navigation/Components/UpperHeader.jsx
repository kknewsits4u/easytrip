import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CityDetailsSection from './CityDetailsSection';

const UpperHeader = () => {

  const [showDiv, setShowDiv] = useState(false);

  const handleClick = (e) => {
    const targetClass = e.target.className;
    if (targetClass !== "toggle-btn" && targetClass !== "toggle-div") {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    
     <div className=" hidden md:flex items-center justify-start h-fit px-2 2xl:px-10
             bg-[#6b0227] w-full border-b border-gray-600  z-50 p-1 gap-5"   >
            <h1 className=" text-sm font-semibold text-[rgb(255,255,255)]">
              Plan your wedding with India's Largest Plateform
            </h1>
    
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setShowDiv(true);
              }}
            >
              <div className=" flex items-center justify-between w-50 h-8 p-2 font-semibold bg-[rgb(255,255,255)] rounded">
                <p className=" opacity-70">All Cities </p>
                <ArrowDropDownIcon
                  sx={{ borderRadius: "10px", fontSize: "30px" }}
                />
              </div>
    
              {showDiv && (

                <CityDetailsSection/>

              )}
            </div>
          </div>
  )
}

export default UpperHeader