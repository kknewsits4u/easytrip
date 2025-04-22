import { Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HeroSection = () => {
  const [city, setCity] = React.useState("");

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="relative flex items-center justify-center w-[100vw] h-120 xl:h-150 bg-white  overflow-visible">
      <img
        src="https://img.freepik.com/premium-photo/luxury-modern-house-cottagepunk_921860-167382.jpg?w=1380"
        alt="image"
        className="w-full h-full object-cover object-center"
      />

      <div className="flex flex-col items-start justify-start absolute -bottom-20 md:bottom-10 lg:bottom-5  left-1/2 transform -translate-x-1/2 w-[90vw] lg:w-[70vw] h-fit xl:h-60 gap-2  p-2 bg-white  lg:bg-transparent rounded text- border border-gray-300 shadow-md shadow-gray-500 text-left ">
        <h1 className="font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl text-black lg:text-white ">
          India's Largest{" "}
          <span className=" text-[rgb(239,74,107)] ">Hotel Booking</span>{" "}
          Platform
        </h1>
        <p className=" text-[rgb(239,74,107)]  lg:text-white text-md  xl:text-xl ">
          This is leading platform for hotel booking and trip plans.{" "}
        </p>
        <div className="flex flex-col  lg:flex-row items-center justify-between p-5  w-full  min-h-10  xl:h-30 bg-white rounded  gap-5">
          <FormControl fullWidth className="w-1/3">
            <InputLabel id="demo-simple-select-label">Choose City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="Choose City"
              onChange={handleChangeCity}
            >
              <MenuItem value={"delhi"}>Delhi</MenuItem>
              <MenuItem value={"noida"}>Noida</MenuItem>
              <MenuItem value={"bangluru"}>Bangluru</MenuItem>
            </Select>
          </FormControl>
          <div className="w-full lg:w-1/3 flex items-center justify-center h-full ">
            <Button variant="contained" fullWidth className="h-[70%] w-[60%]" style={{ background: "linear-gradient(to right, #ff512f, #dd2476)" }} >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
