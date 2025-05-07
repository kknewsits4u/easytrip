import React, { useEffect, useState } from 'react'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CityDetailsSection from './CityDetailsSection';
import { useLocation } from 'react-router-dom';
import LocationPinIcon from '@mui/icons-material/LocationPin';


const UpperHeader = () => {

  const [showDiv, setShowDiv] = useState(false);
  const [currentCity, setCurrentCity]= useState("All Cities")

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

const location = useLocation();
const city = location.pathname.split("/")[1];

useEffect(() => {
  if (city) {
    setCurrentCity(city );
  }
}, [city]);

  return (
   
     <div className="max-md:hidden flex items-center justify-start h-fit px-2 2xl:px-10
             bg-orange-400 w-full z-50 p-1 gap-5"   >
            <h1 className=" text-sm md:text-base  font-semibold text-white">
              <LocationPinIcon  sx={{
                 fontSize:"18px"
              }}  /> Location
            </h1>
    
            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setShowDiv(true);
              }}
            >
              <div className=" flex items-center justify-between w-50 h-8 p-2 font-semibold bg-[rgb(255,255,255)] rounded">
                <p className=" opacity-70">{currentCity}</p>
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