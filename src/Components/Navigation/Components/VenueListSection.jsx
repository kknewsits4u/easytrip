import React from 'react'
import { vanueData } from '../../Store/DataStore'

const VenueListSection = () => {
  return (
    <div
      className="flex flex-wrap items-start justify-start w-[60vw] h-fit rounded-md absolute top-14 left-0
                   opacity-0 translate-y-5 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                   transition-all duration-300 ease-in-out z-50 p-5 shadow-xl"
      style={{ backgroundColor: "rgb(255,255,255)" }}
    >
      <div className=" w-full flex h-120 items-start justify-between gap-5">
        <div className=" w-1/4 flex flex-col h-fit gap-3">
          {vanueData.slice(0, 1).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 text-md text-left"
            >
              <h1 className="text-[#FA812F] font-semibold  text-md">
                {data.category}
              </h1>
              {data.p.map((d, index) => (
              <a href={`venue/${d.type}`}  >   <p
              key={index}
              className="text-gray-600 hover:text-[#FA812F]"
              style={{
                fontWeight:
                  index === data.p.length - 1 ? "700" : "500",
              }}
            >
              {d.type}
            </p></a>
              ))}
            </div>
          ))}
        </div>

        <div className=" w-1/4  flex flex-col h-full gap-3   ">
          {vanueData.slice(1, 2).map((data, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
            >
              <h1 className="text-[#FA812F] font-semibold  text-md">
                {data.category}
              </h1>
              {data.p.map((d, index) => (
               <a href={`vendor/${d.type}`} ><p
               key={index}
               className="text-gray-600 text-light hover:text-[#FA812F] "
             >
               {d.type}
             </p></a>
              ))}
            </div>
          ))}
        </div>

        <div className=" w-1/2 flex flex-col h-fit gap-3 items-start">
          <h1 className="text-[#FA812F] font-semibold text-md ">
            Destination Wedding Venues
          </h1>
          <div className=" w-full grid grid-cols-3 items-center justify-center h-fit gap-5">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className=" h-30 w-30">
                <div className=" w-full h-25  rounded flex items-center justify-center ">
                  <img
                    src="https://i.pinimg.com/736x/e3/0e/fe/e30efee2ae10f6fed8f95d870d2b4c9b.jpg"
                    alt="vanues img"
                    className=" object-fit  w-full h-full object-cover rounded  "
                  />
                </div>
                <p className="text-gray-600">Goa</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VenueListSection