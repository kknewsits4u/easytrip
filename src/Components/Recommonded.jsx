import { Button } from "@mui/material";
import React from "react";
import { hotelData } from "./Store/HotelsData";

const Recommonded = () => {
  return (
    <div className="flex flex-col  items-center justify-between gap-5 w-full  h-fit bg-white shadow-md rounded-sm  shadow-gray-200 p-5 mt-15 lg:mt-5 ">
      <h1 className=" text-2xl font-semibold w-full text-left py-2 border-b-2 border-blue-500">
        Recommonded Hotels{" "}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full h-fit gap-5">
        {hotelData?.slice(0, 4).map((data, idx) => (
          <div
            key={idx}
            className=" w-full h-[22rem] lg:h-[15rem] flex flex-col lg:flex-row border border-gray-300 rounded  shadow-md   "
          >
            <div className=" flex items-center justify-center rounded w-full lg:w-9/20 h-[50%] lg:h-full">
              <img
                src={data.image}
                alt="hotel image "
                className=" w-full h-full object-cover object-center rounded"
              />
            </div>
            <div className=" flex flex-col text-left lg:px-5 p-2 w-full h-[50%] lg:h-full lg:w-11/20 items-start justify-between  ">
              <h1
                className="text-md xl:text-xl font-semibold"
                style={{ color: "black" }}
              >
                {data.name}
              </h1>
              <p className="text-sm lg:text-md">
                Price  :
                <span className=" text-green-700 font-semibold ml-1">
                  {data.price}
                </span>
              </p>
              <p className="text-sm lg:text-md">
                Location :
                <span className="text-green-700"> {data.location}</span>
              </p>
              <p className="text-sm lg:text-md">{data.details}</p>
              <div className=" flex items-center justify-between w-full gap-5">
                <Button
                  variant="outlined"
                  className="text-nowrap"
                  style={{ border: " 1px solid #dd2476", color: "#dd2476" }}
                >
                  Get Details
                </Button>
                <Button
                  variant="contained"
                  className="text-nowrap"
                  style={{
                    background: "linear-gradient(to right, #ff512f, #dd2476)",
                  }}
                >
                  Book Now{" "}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommonded;
