import React from 'react'
import { citiesData, countryData, stateData } from '../../Store/DataStore'

const CityDetailsSection = () => {


  return (
    <div
      className="flex flex-col items-start justify-start w-[60vw] h-120 bg-white shadow  z-50 rounded p-5 absolute top-10 left-0  gap-5 "
      onClick={(e) => e.stopPropagation()}
    >
      <input
        type="text"
        placeholder="Search city, States"
        className=" border border-gray-300 w-full p-3 rounded  focus:outline-0 text-gray-600 text-md "
      />
      <div className=" grid grid-cols-1 lg:grid-cols-4 items-start justify-between  w-full h-full">
        <div className="px-3  h-full flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[#FA812F] font-semibold">
            Top Cities
          </h1>
          {citiesData.slice(1, 11).map((data, index) => (
            <a href={data.cityName} > <p className=" hover:font-semibold cursor-pointer text-sm">
            {data.cityName}
          </p></a>
          ))}
        </div>
        <div className="h-full px-3  bg-[rgb(248,248,248)]   flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[#FA812F] font-semibold">
            Popular Cities
          </h1>
          {citiesData.slice(11, 21).map((data, index) => (
           <a href={data.cityName} > <p className=" hover:font-semibold cursor-pointer text-sm">
           {data.cityName}
         </p></a>
          ))}
        </div>
        <div className="px-3 h-full flex flex-col items-start justify-start gap-2   ">
          <h1 className="text-[#FA812F] font-semibold">
            Other Cities
          </h1>
          {citiesData.slice(21, 31).map((data, index) => (
           <a href={data.cityName} > <p className=" hover:font-semibold cursor-pointer text-sm">
           {data.cityName}
         </p></a>
          ))}
        </div>
        <div className="p-2 bg-[rgb(248,248,248)] h-full flex flex-col items-start justify-start gap-2  ">
          <div className=" flex flex-col h-1/2 w-full items-start justify-start gap-2">
            <h1 className="text-[#FA812F] font-semibold">States</h1>
              {stateData.slice(0, 5).map((data, index) => 
                <a href={data.name} > <p className=" hover:font-semibold cursor-pointer text-sm">
                {data.name}
              </p></a>

              )
            }
            
          </div>
          <div className=" flex flex-col h-1/2 w-full items-start justify-start gap-2 ">
            <h1 className="text-[#FA812F] font-semibold">
              International Cities
            </h1>
            {countryData.slice(0, 5).map((data, index) => 
                <a href={data.name} > <p className=" hover:font-semibold cursor-pointer text-sm hover:text-[#FA812F] ">
                {data.name}
              </p></a>

              )
            }
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityDetailsSection