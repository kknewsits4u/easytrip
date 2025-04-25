import { Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { citiesData, vendorTypes } from "../Store/DataStore";
import MainCarousel from "./ManiCarousel";

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

      <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="flex flex-col items-center justify-between absolute -bottom-20 md:bottom-10 lg:bottom-5  left-1/2 transform -translate-x-1/2 w-[90vw] lg:w-[50vw] h-fit xl:h-40 gap-2  p-2  rounded text-  text-left shadow-md">
        <h1 className="font-bold text-md md:text-3xl lg:text-4xl xl:text-4xl text-white text-center">
          Plan Your Wedding With Aarambh
        </h1>
        <p className=" text-semibold text-[rgb(255,255,255)] text-center font-semibold text-sm lg:text-xl   ">
          Find the best vendor and destination with the millions of trusted
          reviews
        </p>
        <div className="flex flex-col  md:flex-row items-center justify-between w-full h-fit bg-white rounded gap-2 lg:gap-0">
          <div className=" flex items-center justify-center w-full md:w-2/5 border-b border-gray-300 ">
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

          <div className=" flex items-center justify-center w-full md:w-2/5  border-b border-gray-300">
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
          <div className="w-full md:w-[20%] h-full">
            <Button
              fullWidth
              variant="conatined"
              sx={{
                backgroundColor: "rgb(231,46,119,0.78)",
                color: "rgb(255,255,255)",
                height: "100%",
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
