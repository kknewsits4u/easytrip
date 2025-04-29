import React from 'react'
import { vendorsData } from '../../Store/DataStore'

const VendorsDetailsSection = () => {


  return (
    <div
      className="flex flex-wrap items-start justify-start w-[50vw] h-fit rounded-md absolute top-14 left-0
                   opacity-0 translate-y-5 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                   transition-all duration-300 ease-in-out z-50 p-5 shadow-xl"
      style={{ backgroundColor: "rgb(255,255,255)" }}
    >
      <div className=" w-full flex h-120 items-start justify-between">
        <div className=" w-1/3 flex flex-col h-fit gap-3">
          {vendorsData.slice(0, 5).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-1 text-md"
            >
              <h1 className="text-[#FF512F] font-bold ">
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <p key={index} className="text-gray-600 ">
                  {d.type}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/3  flex flex-col h-full gap-3    ">
          {vendorsData.slice(5, 8).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1
                className="text-[#FF512F] font-bold "
                style={{ fontSize: "16px" }}
              >
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <p key={index} className="text-gray-600 ">{d.type}</p>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/3 flex flex-col h-fit gap-3">
          {vendorsData.slice(9, 11).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1
                className="text-[#FF512F] font-bold"
                style={{ fontSize: "16px" }}
              >
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <p key={index} className="text-gray-600 ">{d.type}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VendorsDetailsSection