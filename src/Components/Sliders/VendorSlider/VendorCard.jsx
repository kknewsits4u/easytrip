import React from 'react'

const VendorCard = ({ data }) => {

  return (
    <div className="rounded-lg shadow-md flex flex-col items-start justify-between cursor-pointer  bg-[rgb(255,255,255)] hover:bg-slate-100 h-[240px] sm:h-[260px] md:h-[280px] lg:h-[320px] xl:h-[320px] transition-all duration-300">

      <div className="flex items-center justify-center h-[70%] w-full">
        <img
          src={data.image}
          alt="image"
          className="h-full w-full object-cover object-center rounded-t-lg"
        />
      </div>


      <div className="flex flex-col p-2 w-full h-[30%] justify-evenly text-left gap-1">
        <h1 className="text-[15px]  font-semibold text-slate-700 line-clamp-1">
          {data.heading}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 truncate w-[90%]">
          {data.description}
        </p>
        <span className="text-sm sm:text-base font-semibold text-[#FF512F]">
          {data.price}
        </span>
      </div>
    </div>
  )
}

export default VendorCard