import React from 'react'
import { photoData } from '../../Store/DataStore'

const PhotosSection = () => {
  return (
    <div
      className="flex flex-wrap items-start justify-start w-[50vw] h-fit rounded-md absolute top-14 left-0
                   opacity-0 translate-y-5 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                   transition-all duration-300 ease-in-out z-50 p-5 shadow-xl"
      style={{ backgroundColor: "rgb(255,255,255)" }}
    >
      <div className=" w-full flex h-fit items-start justify-between">
        <div className=" w-1/3 flex flex-col h-fit gap-3">
          {photoData.slice(0, 3).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-1 text-md"
            >
              <h1 className="text-[#FA812F] font-bold ">
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <p key={index} className="text-gray-500 ">{d.type}</p>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/3  flex flex-col h-fit gap-3  ">
          {photoData.slice(3, 6).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1
                className="text-[#FA812F] font-bold "
                style={{ fontSize: "16px" }}
              >
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <p key={index} className="text-gray-500 ">{d.type}</p>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/3 flex flex-col h-fit gap-3">
          {photoData.slice(6, 8).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1
                className="text-[#FA812F] font-bold"
                style={{ fontSize: "16px" }}
              >
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <p key={index} className="text-gray-500 ">{d.type}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotosSection