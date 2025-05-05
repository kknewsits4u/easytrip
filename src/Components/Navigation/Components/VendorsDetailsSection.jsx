import React from "react";
import { vendorsData } from "../../Store/DataStore";

const VendorsDetailsSection = () => {
  return (
      <div className=" w-full grid max-md:grid-cols-1 grid-cols-3 h-120 items-start justify-between p-2 overflow-scroll  scrollbar-hide  ">
        <div className=" w-full flex flex-col h-fit gap-3 ">
          {vendorsData.slice(0, 5).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-1 text-base"
            >
              <h1 className="text-[#FA812F] max-lg:text-sm text-sm  font-semibold">{data.category}</h1>
              {data.p.map((d, index) => (
                <a href={`vendor/${d.type}`} ><p key={index} className="text-gray-600 max-lg:text-sm text-sm text-light text-left hover:text-[#FA812F] ">
                {d.type}
              </p></a>
              
              ))}
            </div>
          ))}
        </div>
        <div className=" w-full  flex flex-col h-full gap-3    ">
          {vendorsData.slice(5, 8).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col max-lg:text-sm text-sm  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1
                className="text-[#FA812F] max-lg:text-sm text-sm  font-semibold "
                
              >
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <a href={`vendor/${d.type}`} ><p key={index} className="text-gray-600 text-light hover:text-[#FA812F] text-left max-lg:text-sm text-sm ">
                {d.type}
              </p></a>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-full flex flex-col h-fit gap-3">
          {vendorsData.slice(9, 11).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1
                className="text-[#FA812F] font-semibold max-lg:text-sm text-sm  "
                style={{ fontSize: "16px" }}
              >
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <a href={`vendor/${d.type}`} ><p key={index} className="text-gray-600 max-lg:text-sm text-sm  text-light hover:text-[#FA812F]">
                {d.type}
              </p></a>
              ))}
            </div>
          ))}
        </div>
      </div>
  );
};

export default VendorsDetailsSection;
