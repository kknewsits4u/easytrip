import React from 'react'
import Rating from "@mui/material/Rating";
import LocationPinIcon from '@mui/icons-material/LocationPin';

const VendorCard = ({ data }) => {

  return (
    <div className="rounded-lg shadow-md hover:shadow-lg flex flex-col items-start justify-between cursor-pointer  bg-[rgb(255,255,255)] hover:bg-slate-100 h-[280px] md:h-[280px] lg:h-[320px] xl:h-[350px] transition-all duration-300  ">

      <div className="flex items-center justify-center h-[60%] w-full">
        <img
          src={data.image}
          alt="image"
          className="h-full w-full object-cover object-top rounded-t-lg"
        />
      </div>

      <div className="flex flex-col p-2 w-full h-[40%] justify-evenly text-left gap-1">
        <div className=' flex items-center justify-between w-full' >
            <h1 className="text-sm md:text-base  font-semibold text-slate-700 line-clamp-1">
             {data.heading}
            </h1>
            <div className=" w-fit  h-8   rounded-full">
              <img
                src={data.verified == true ? "/verified.png" : "/envrified.png"}
                alt="verification status"
                className=" h-full w-auto object-cover object-top rounded-full"
              />
            </div>
        </div>
        <div className=" flex items-center justify-start w-full  ">
            <Rating
              name="sread-only"
              value={data.rating}
              readOnly
              sx={{
                fontSize: "16px",
              }}
            />
          </div>
        <p className="text-xs sm:text-sm text-gray-600 truncate w-[90%]">
          {data.description}
        </p>
        <div className=' flex items-center justify-between w-full'  >
           <p className="text-xs sm:text-sm md:base text-gray-600  "  > <LocationPinIcon  sx={{ fontSize:"16px", color:"orange" }} />   {data.district}, {data.state}</p>
           <p className="text-xs sm:text-sm md:base font-semibold text-[#FF512F]"  >{data.price}</p>
        </div>
        
      </div>
    </div>
  )
}

export default VendorCard