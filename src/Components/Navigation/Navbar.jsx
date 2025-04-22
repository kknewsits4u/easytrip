import React from "react";

const Navbar = () => {
  return (
    <div className=" flex w-full 2xl:px-20 h-15 lg:h-20 bg-white items-center justify-between fixed top-0 left-0 p-5 shadow-[2px_0px_10px_rgb(0,0,0)] z-50 "  style={{backgroundColor:"#F1BA88"  }}    >
      <div className=" flex items-center justify-center text-blue-500 font-bold z-50  ">
        <h1 className=" text-3xl flex items-center justify-center" style={{ color:"rgb(239,74,107)"}}  >
          Easy{" "}
          <span className=" border-2  ml-3 px-3 rounded-md text-md  text-[rgb(239,74,107)] border-white shadow-md shadow-white  "  >
            Trip
          </span>
        </h1>
      </div>
      <div className="hidden lg:flex items-center justify-between   ">
        <ul className="flex  items-center justify-between gap-7 text-md xl:text-lg font-semibold">
          <li>Home</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Cabs</li>
          <li>Login</li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
