import React from 'react'
import { citiesData } from '../../Store/DataStore'

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
      <div className=" grid grid-cols-4 items-start justify-between  w-full h-full">
        <div className="px-3  h-full flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[rgb(239,74,107)] font-bold">
            Top Cities
          </h1>
          {citiesData.slice(1, 11).map((data, index) => (
            <p className=" hover:font-semibold cursor-pointer text-sm">
              {data.cityName}
            </p>
          ))}
        </div>
        <div className="h-full px-3  bg-[rgb(248,248,248)]   flex flex-col items-start justify-start gap-2 ">
          <h1 className="text-[rgb(239,74,107)] font-bold">
            Popular Cities
          </h1>
          {citiesData.slice(11, 21).map((data, index) => (
            <p className=" hover:font-semibold cursor-pointer text-sm">
              {data.cityName}
            </p>
          ))}
        </div>
        <div className="px-3 h-full flex flex-col items-start justify-start gap-2   ">
          <h1 className="text-[rgb(239,74,107)] font-bold">
            Other Cities
          </h1>
          {citiesData.slice(21, 31).map((data, index) => (
            <p className=" hover:font-semibold cursor-pointer text-sm">
              {data.cityName}
            </p>
          ))}
        </div>
        <div className="p-2 bg-[rgb(248,248,248)] h-full flex flex-col items-start justify-start gap-2  ">
          <div className=" flex flex-col h-1/2 w-full items-start justify-start gap-2">
            <h1 className="text-[rgb(239,74,107)] font-bold">States</h1>
            <p className=" hover:font-semibold cursor-pointer text-sm">
              Rajasthan
            </p>
            <p className=" hover:font-semibold cursor-pointer  text-sm ">
              Gujrat
            </p>
            <p className=" hover:font-semibold cursor-pointer  text-sm ">
              Kerala
            </p>
            <p className=" hover:font-semibold cursor-pointer  text-sm ">
              Uttar Pradesh
            </p>
            <p className=" hover:font-semibold cursor-pointer  text-sm ">
              Punjab
            </p>
          </div>
          <div className=" flex flex-col h-1/2 w-full items-start justify-start gap-2 ">
            <h1 className="text-[rgb(239,74,107)] font-bold">
              International Cities
            </h1>
            <p className=" hover:font-semibold cursor-pointer text-sm ">
              Dubai
            </p>
            <p className=" hover:font-semibold cursor-pointer text-sm ">
              New York
            </p>
            <p className=" hover:font-semibold cursor-pointer text-sm ">
              Bali
            </p>
            <p className=" hover:font-semibold cursor-pointer text-sm ">
              Maldeep
            </p>
            <p className=" hover:font-semibold cursor-pointer text-sm ">
              Abu Dhabi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityDetailsSection