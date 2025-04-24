import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const CityWiseSearchPage = () => {
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

  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setSelectedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full h-fit items-center justify-start">
      <div className="flex flex-col w-full items-center justify-between">
        <div className="flex w-full items-center justify-evenly h-12 bg-white shadow z-10 border-b border-gray-300">
          {buttonList.map((data, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer h-full px-4 text-center relative"
              onClick={() => toggleDropdown(index)}
            >
              {data.listElem}
              {selectedIndex === index ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          ))}
        </div>

        {selectedIndex !== null && (
          <div className="flex items-center justify-between h-60 w-full bg-white border-b">
            <p className="text-gray-600 px-4">Dropdown content for "{buttonList[selectedIndex].listElem}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityWiseSearchPage;
