import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const serviceData = [
    {
      icon: "/hotel.png",
      name: "Hotels",
    },
    {
      icon: "/flight.png",
      name: "Flights",
    },
    {
      icon: "/train.png",
      name: "Trains",
    },
    {
      icon: "/bus.png",
      name: "Buses",
    },
    {
      icon: "/cab.png",
      name: "Cabs",
    },
  ];

  return (
    <div className="w-full h-[32vw] bg-white flex items-end justify-center relative">
      <img
        src="/homapage.jpg"
        alt="image"
        className=" h-full  w-full object-cover object-center absolute top-0 left-0 "
      />
      <div
        className="z-50 w-full xl:w-4/5  h-20 fixed top-0 left-1/2 -translate-x-1/2 flex items-center justify-between p-5 "
        style={{
          backgroundColor: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div className=" flex items-center justify-center text-blue-500 font-bold z-50  ">
          <h1 className=" text-3xl flex items-center justify-center">
            Easy{" "}
            <span className=" bg-blue-500 ml-3 px-3 rounded-md text-md text-white">
              Trip
            </span>
          </h1>
        </div>

        <div className=" w-fit px-3 p-2 h-fit bg-blue-500 rounded-sm flex justify-center items-center text-white font-semibold cursor-pointer">
          Login{" "}
          <span className="ml-5">
            <KeyboardArrowDownIcon />{" "}
          </span>
        </div>
      </div>
      <div className=" w-[60vw] xl:w-[50vw] h-fit border shadow border-gray-300 flex flex-col item-center justify-center sticky gap-1 p-2 top-10  rounded-sm mb-10">
        <div className=" flex w-full items-center justify-around  rounded-tl-sm rounded-tr-sm gap-2 ">
          {serviceData.map((data, idx) => (
            <div
              key={idx}
              className="flex bg-white flex-col items-center gap-5 text-blue-500 hover:text-green-500 transform hover:scale-105 transition duration-300 ease-in-out w-full"
            >
              <div className="flex items-center justify-center  h-15 w-15 rounded-full ">
                <img
                  src={data.icon}
                  alt="service_type_icon"
                  className=" h-full w-full  object-center object-cover"
                />
              </div>
              <h1 className=" font-semibold text-lg ">{data.name}</h1>
            </div>
          ))}
        </div>
        <div className=" flex w-full bg-white items-center justify-around p-2  rounded-bl-sm rounded-br-sm ">
          <div className=" w-full h-full  flex items-center justify-between gap-5">
            <input
              className="border-b-2 focus:outline-none focus:ring-0 border-blue-500 h-full p-2 w-full"
              placeholder="Search hotel,flight, train etc."
              variant="outlined"
            />
            <Button variant="contained" sx={{ background: "rgb(23,141,241)" }}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
