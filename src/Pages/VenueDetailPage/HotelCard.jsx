import { Button } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function HotelCard({ idx }) {
  const [count, setCount] = React.useState("");

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const hotelFacilityList = [
    {
      text: "Cancellation policy",
    },
    {
      text: "Book without credit card",
    },
    {
      text: "Express check-in",
    },
    {
      text: "Free WiFi",
    },
  ];

  return (
    <div
      className={`border ${
        idx === 1 ? "border-orange-400" : "border-gray-100"
      }   h-fit min-h-60  overflow-hidden bg-white  shadow w-full `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 h-full items-center divide-x divide-gray-300">
        <div className=" flex max-md:flex-col flex-row items-start justify-between h-full w-full  ">
          <div className="col-span-3 space-y-2 h-full max-md:w-full max-md:border-b border-gray-200">
            {idx === 1 && (
              <div className="bg-orange-400 text-white font-semibold px-3 py-1 ">
                Lowest price available!
              </div>
            )}

            <ul className="pl-4 text-left text-sm md:text-base p-3 text-slate-600  ">
              {hotelFacilityList.map((d, idx) => (
                <li
                  key={idx}
                  className=" flex  items-center justify-start text-base text-slate-700 mb-2"
                >
                  {" "}
                  <CheckIcon sx={{ color: "rgb(23,141,0)" }} />{" "}
                  <span className=" ml-2 ">{d.text}</span>{" "}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col h-full p-5 gap-2 items-center max-md:items-start text-center max-md:text-left border-b md:border-l border-gray-200  max-md:w-full">
            <div className="text-red-600 text-xs font-semibold">
              🔖 CHEAPEST PRICE YOU'VE SEEN!
            </div>

            <div className="text-lg font-bold text-gray-800 flex flex-col items-center max-md:items-start gap-1">
              <div>
                <span className="text-slate-500 line-through mr-2">
                  Rs. 5199
                </span>
                Rs. 4,194
              </div>
              <div className="text-sm text-green-600 bg-green-100 px-2 py-0.5 rounded-md">
                Rs. 1005 Applied
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Per night before taxes and fees
            </div>
          </div>
        </div>

        <div className="flex max-md:flex-row flex-col items-center justify-center gap-5 h-full  p-2">
          <div className=" max-md:hidden  text-red-600 text-xs font-semibold">
            Our last 3 rooms!
          </div>
          <div className=" flex items-center justify-between border border-gray-300 rounded-md px-2 w-40 py-1 h-10">
            <span className=" mr-2">Rooms </span>
            <FormControl variant="standard" sx={{ minWidth: 40 }}>
              <Select
                value={count}
                onChange={handleChange}
                disableUnderline
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className=" flex items-center justify-between rounded-md  w-40 h-10">
            <Button
              fullWidth
              className="text-nowrap text-white btn-grad   "
              sx={{ color: "white", height: "100%" }}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
