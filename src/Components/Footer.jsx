import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-white h-fit shadow-md shadow-gray-300 rounded-sm p-5 gap-5">
      <div className=" flex flex-col lg:flex-row items-center justify-between h-full w-1/2 gap-5">
        <h1 className="text-2xl font-semibold text-[#dd2476]">
          Aarambh
    
        </h1>
        <ul className=" flex gap-2 lg:gap-5 text-blue-500 text-md font-semibold">
          <li className="cursor-pointer">
            <a href="">Hotels</a>{" "}
          </li>
          <li className="cursor-pointer">
            <a href="">Flights</a>
          </li>
          <li className="cursor-pointer">
            <a href="">Buses</a>
          </li>
          <li className="cursor-pointer">
            <a href="">Cabs</a>
          </li>
          <li className="cursor-pointer">
            <a href="">Trains</a>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col items-center justify-start h-full w-1/2  gap-4">
        <h1 className="font-semibold text-lg lg:text-2xl text-black">
          Follow Us
        </h1>
        <div className=" flex items-center justify-center gap-5 ">
          <div className=" flex items-center justify-center w-10  lg:w-15 h-10 lg:h-15 shadow-md shadow-blue-500 rounded-full">
            <img
              src="/fbicon.png"
              alt="social icon"
              className="w-full h-full object-cover object-center rounded-full "
            />
          </div>
          <div className=" flex items-center justify-center w-10  lg:w-15 h-10 lg:h-15 shadow-md shadow-blue-500 rounded-full">
            <img
              src="/whaicon.png"
              alt="social icon"
              className="w-full h-full object-cover object-center rounded-full "
            />
          </div>
          <div className=" flex items-center justify-center w-10  lg:w-15 h-10 lg:h-15 shadow-md shadow-blue-500 rounded-full">
            <img
              src="/xicon.png"
              alt="social icon"
              className="w-full h-full object-cover object-center rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
