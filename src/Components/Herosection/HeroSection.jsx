import { Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { citiesData, vendorTypes } from "../Store/DataStore";
import MainCarousel from "./MainCarousel";

const HeroSection = () => {
  const [city, setCity] = React.useState(citiesData[0]?.value || "");

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const [vendorType, setVendorType] = React.useState("Choose Vendor Type");

  const handleVendorType = (event) => {
    setVendorType(event.target.value);
  };

  return (

    <div className="relative flex items-center justify-center w-full h-110 xl:h-120 2xl:h-140 bg-white  overflow-visible shadow-md ">
      <MainCarousel />

      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="flex flex-col items-center justify-between absolute -bottom-20 md:bottom-10 lg:bottom-5  left-1/2 transform -translate-x-1/2 w-[90vw] lg:w-[50vw] h-fit xl:h-30 gap-2 p-2  rounded text-  text-left  ">
         <h1 className="font-bold text-lg md:text-3xl lg:text-4xl xl:text-4xl text-white text-center">
          Plan Your Wedding With Aarambhs
        </h1>
        <div className="flex flex-col  md:flex-row items-center justify-between w-full lg:w-[90%] h-fit md:h-12 bg-[rgb(255,255,255)] rounded gap-2 lg:gap-0 divide-y divide-gray-300  lg:divide-x ">


          <div className=" flex items-center justify-center w-full md:w-2/5 h-full ">
           
            <FormControl sx={{ minWidth: 120, width: "100%" }}>
              <Select
                value={vendorType}
                onChange={handleVendorType}
                displayEmpty
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root": {
                    padding: 0,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                {vendorTypes.map((data, idx) => (
                  <MenuItem key={idx} value={data.type}>
                    {data.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className=" flex items-center justify-center w-full h-full md:w-2/5   ">
            <FormControl sx={{ minWidth: 120, width: "100%" }}>
              <Select
                value={city}
                onChange={handleChangeCity}
                displayEmpty
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: "30vh",
                      overflowY: "auto",
                      "&::-webkit-scrollbar": {
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#ccc",
                        borderRadius: "4px",
                      },
                    },
                  },
                }}
                sx={{
                  width: "100%",
                  maxHeight: "30vh",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root": {
                    padding: 0,
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                {citiesData.map((data, idx) => (
                  <MenuItem key={idx} value={data.value}>
                    {data.cityName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="w-full md:w-[20%] h-[100%]   ">
            <Button
              fullWidth
              variant="conatined"
              className="btn-grad"
               sx={{
                color: "rgb(255,255,255)",
                boxShadow:"none",
                height: "100%",
                borderRadius:0,
                background:" linear-gradient(135deg, #FA812F, rgb(98,110,118))"

              }}
            >
              Search
            </Button>
          </div>


        </div>




      </div>


      
    </div>
  );
};

export default HeroSection;
