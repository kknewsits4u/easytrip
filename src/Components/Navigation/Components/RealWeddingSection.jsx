import React from 'react'
import { RealWedding } from '../../Store/DataStore'

const RealWeddingSection = () => {
  return (
    <div
      className="flex flex-wrap items-start justify-start w-[60vw] h-fit rounded-md absolute top-14 left-0
                   opacity-0 translate-y-5 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                   transition-all duration-300 ease-in-out z-50 p-5  shadow-xl "
      style={{ backgroundColor: "rgb(255,255,255)" }}
    >
      <div className=" w-full flex h-fit items-start justify-between">
        <div className=" w-1/4 flex flex-col h-fit gap-3">
          {RealWedding.slice(0, 1).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 text-md"
            >
              <h1 className="text-[#FA812F] font-bold ">
                {data.category}
              </h1>
              {data.p.map((d, index) => (
                <a href={`real-wedding/${d.type}`}  > <p key={index} className="text-gray-600 hover:text-[#FA812F] ">{d.type}</p> </a>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/4  flex flex-col h-fit gap-3">
          {RealWedding.slice(1, 2).map((data, idx) => (
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
                <a href={`real-wedding/${d.type}`}  > <p key={index} className="text-gray-600 hover:text-[#FA812F]">{d.type}</p> </a>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/4 flex flex-col h-fit gap-3">
          {RealWedding.slice(2, 3).map((data, idx) => (
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
                <a href={`real-wedding/${d.type}`}  > <p key={index} className="text-gray-600 hover:text-[#FA812F]">{d.type}</p> </a>
              ))}
            </div>
          ))}
        </div>
        <div className=" w-1/4 flex flex-col h-fit gap-3">
          <h1 className="text-[#FA812F] font-bold text-left">
            Latest Real Wedding
          </h1>
          <div className=" w-full flex flex-col h-fit items-center justify-between gap-2 ">
            <div className=" flex flex-col items-center justify-start w-full h-45  border-black gap-2">
              <div className=" flex  items-center justify-center w-full h-40">
                <img
                  src="https://i.pinimg.com/474x/9b/ca/dc/9bcadcb4b1eca2962d8343e5cd1826a0.jpg"
                  alt="image"
                  className=" w-full h-full object-center object-cover rounded"
                />
              </div>
              <p className=" text-md text-gray-700">Ayesha & Aman</p>
            </div>
            <div className=" flex flex-col items-center justify-start w-full h-45  border-black gap-2 ">
              <div className=" flex  items-center justify-center w-full h-40">
                <img
                  src="https://i.pinimg.com/474x/9b/ca/dc/9bcadcb4b1eca2962d8343e5cd1826a0.jpg"
                  alt="image"
                  className=" w-full h-full object-center object-cover rounded"
                />
              </div>
              <p className=" text-md text-gray-700">
                Priyanka & Ansh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealWeddingSection