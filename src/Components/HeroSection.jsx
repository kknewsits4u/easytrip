import { Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { citiesData } from "./Store/DataStore";

const HeroSection = () => {
  const [city, setCity] = React.useState(citiesData[0]?.value || "");

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="relative flex items-center justify-center w-[100vw] h-120 xl:h-170 bg-white  overflow-visible">
      <img
        src="https://i.pinimg.com/736x/d8/fa/35/d8fa3503b0ef6fe324bdcc41bfe254ba.jpg"
 
        alt="image"
        className="w-full h-full object-cover object-center"
      />
      <div
        className="block  w-full h-full absolute top-0 left-0  "
        
      ></div>

      <div
        className="flex flex-col items-start justify-between absolute -bottom-20 md:bottom-10 lg:bottom-5  left-1/2 transform -translate-x-1/2 w-[90vw] lg:w-[50vw] h-fit xl:h-50 gap-2  p-2 bg-white  lg:bg-transparent rounded text- border border-gray-300 text-left "
        style={{
          backgroundColor: "rgb(255,255,255,0.156)",
          backdropFilter: "blur(2px)",
        }}
      >
        <h1 className="font-bold text-lg md:text-3xl lg:text-4xl xl:text-4xl text-white ">
          Plan Your Wedding With Aarambh
        </h1>

        <div className="flex flex-col  lg:flex-row items-center justify-between p-5  w-full  min-h-10  xl:h-30 bg-white rounded  gap-5">
          <FormControl fullWidth className="w-1/3">
            <InputLabel id="demo-simple-select-label">Choose City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="Choose City"
              onChange={handleChangeCity}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 400,
                    overflowY: "auto",

                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#666",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#555",
                    },
                  },
                },
              }}
            >
              {citiesData?.map((data, i) => (
                <MenuItem key={i} value={data.value}>
                  {data.cityName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div>
         
      </div>



    </div>
  );
};

export default HeroSection;
