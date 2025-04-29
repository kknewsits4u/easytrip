import { Button } from "@mui/material";
import React from "react";

function HotelCard({idx}) {
  return (
    <div className={`border ${idx=== 1 ? "border-orange-400" : 'border-gray-100' }  h-fit min-h-60  overflow-hidden bg-white  shadow w-full `}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-full items-center divide-x divide-gray-300"  >

        <div className="col-span-2 space-y-2 h-full">

          { (idx === 1) &&  <div className="bg-orange-400 text-white font-semibold px-3 py-1 ">
            Lowest price available!
          </div>}

          <ul className="pl-4 text-left text-sm md:text-base p-3 text-slate-600 ">
            <li>Cancellation policy <span title="More info">ℹ️</span></li>
            <li>Book without credit card</li>
            <li>Express check-in</li>
            <li>Free WiFi</li>
          </ul>
        </div>

        <div className="hidden md:flex justify-center h-full">
          <span title="2 guests">
            👥
          </span>
        </div>

        <div className="text-center space-y-1 flex flex-col items-center justify-start gap-2 h-full p-2">
          <div className="text-red-600 text-xs font-semibold">
            🔖 CHEAPEST PRICE YOU'VE SEEN!
          </div>
          <div className="text-2xl md:text-2xl font-bold text-gray-800">
            Rs. 4,194
          </div>
          <div className="text-sm text-gray-500">
            Per night before taxes and fees
          </div>
        </div>

        <div className="flex flex-col items-center justify-start gap-2 h-full p-2">
         
          <Button className="text-nowrap text-white btn-grad   " sx={{ color:'white' }}  >
            Book now
          </Button>
          <div className="text-red-600 text-xs font-semibold">
            Our last 3 rooms!
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
