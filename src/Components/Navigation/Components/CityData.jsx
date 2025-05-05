import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { citiesData, internationalCities } from '../../Store/DataStore';

const CityData = ({ searchQuery }) => {

  const [topCitiesCount, setTopCitiesCount] = useState(1);
  const [popularCitiesCount, setPopularCitiesCount] = useState(1);
  const [otherCitiesCount, otherTopCitiesCount] = useState(1);
  const [intCitiesCount, setIntCitiesCount] = useState(1);

  const expendDiv = () => {
    setTotalTopCities(totalTopCities);
  };


  const filterCities = (cities) => {
    return cities.filter(city => {
      const name = city.cityName || city.city || "";
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };


  return (
    <div className="flex max-md:flex-col  flex-row gap-5 max-md:w-full w-[60vw] max-md:h-fit h-[60vh] items-start justify-start max-md:divide-y divide-gray-300 bg-white ">

      <div className="flex flex-col w-full items-start justify-start gap-5 h-fit bg-white p-5">
        <h1 className=" text-lg  text-[#FA812F]  font-semibold">
          Top Cities
        </h1>
        <div className=" grid grid-cols-2 w-full h-fit gap-3">
          {
            filterCities(citiesData.slice(1, 15)).map((data, idx) => (
              <a key={idx} href={`${data.cityName}`}>
                <p className="text-base w-full text-left hover:text-[#FA812F]">
                  {data.cityName}
                </p>
              </a>
            ))
          }
        </div>
        <p className=" text-base font-semibold cursor-pointer">
          View All <KeyboardArrowDownIcon />{" "}
        </p>
      </div>

      <div className="flex flex-col w-full items-start justify-start gap-5 h-fit bg-white px-5 pb-5">
        <h1 className=" text-lg  text-[#FA812F]  font-semibold">
          Popular Cities{" "}
        </h1>
        <div className=" grid grid-cols-2 w-full h-fit gap-3">
          {
            filterCities(citiesData.slice(15, 23)).map((data, idx) => (
              <a key={idx} href={`${data.cityName}`}>
                <p className="text-base w-full text-left hover:text-[#FA812F]">
                  {data.cityName}
                </p>
              </a>
            ))
          }
        </div>
        <p
          className=" text-base font-semibold cursor-pointer"
          onClick={expendDiv}
        >
          View All <KeyboardArrowDownIcon />{" "}
        </p>
      </div>

      <div className="flex flex-col w-full items-start justify-start gap-5 h-fit bg-white px-5 pb-3">
        <h1 className=" text-lg  text-[#FA812F]  font-semibold">
          Other Cities{" "}
        </h1>
        <div className=" grid grid-cols-2 w-full h-fit gap-3">
          {
            filterCities(citiesData.slice(23, 33)).map((data, idx) => (
              <a key={idx} href={`${data.cityName}`}>
                <p className="text-base w-full text-left hover:text-[#FA812F]">
                  {data.cityName}
                </p>
              </a>
            ))
          }
        </div>
        <p
          className=" text-base font-semibold cursor-pointer"
          onClick={expendDiv}
        >
          View All <KeyboardArrowDownIcon />{" "}
        </p>
      </div>

      <div className="flex flex-col w-full items-start justify-start gap-5 h-fit bg-white px-5 pb-5 ">
        <h1 className=" text-lg  text-[#FA812F]  font-semibold">
          International Cities{" "}
        </h1>
        <div className=" grid grid-cols-2 w-full h-fit gap-3">

          {
            filterCities(internationalCities.slice(0, 10)).map((data, idx) => (
              <a key={idx} href={`${data.cityName}`}>
                <p className="text-base w-full text-left hover:text-[#FA812F]">
                  {data.cityName}
                </p>
              </a>
            ))
          }
        </div>
        <p
          className=" text-base font-semibold cursor-pointer"
          onClick={expendDiv}
        >
          View All <KeyboardArrowDownIcon />{" "}
        </p>
      </div>

      
    </div>
  )
}

export default CityData