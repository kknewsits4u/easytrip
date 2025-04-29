import React from 'react'
import { citiesData } from '../../Store/DataStore'
import { Button, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";


const SideDrawer = () => {

  const [city, setCity] = React.useState("delhi");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className=" flex flex-col w-full h-full items-center  justify-start">
      <div className=" flex relative w-full h-40 mr-1">
        <img
          src="https://i.pinimg.com/736x/99/68/ba/9968ba222fe2b9123607529fda81c316.jpg"
          alt="menu image"
          className=" w-full h-full object-center object-cover  "
        />
        <div className=" flex flex-col  items-start justify-end gap-5  w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.356)]  pl-5 p-3">
          <div className=" flex items-center justify-center w-12 h-12 rounded-full ">
            <img
              src="/dummy.png"
              alt="profile image"
              className=" w-full h-full object-center object-cover rounded-full shadow-md shadow-white"
            />
          </div>
          <h1 className=" font-semibold text-white text-xl  ">
            Aarambhs Wedding
          </h1>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-5">
        <h1 className=" text-md  font-semibold ">City :</h1>
        <div className=" flex items-center justify-center  ">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={city}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ height: 35 }}
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

      <div className=" flex w-full border-t-2 py-2 border-gray-500 h-fit ">
        <ul className=" flex flex-col w-full">
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Venues
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Vendors
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Corporate Meeting
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Banquet Halls
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Real Wedding
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Blogs
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Photos
          </li>
        </ul>
      </div>
      <div className=" flex w-full border-t-2 border-gray-500 h-fit py-2 ">
        <ul className=" flex flex-col w-full">
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Deals
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2 relative">
            Aarambh Assured
            <div className=" flex items-center justify-center px-3  rounded bg-orange-600 absolute top-1 right-3 text-white  text-sm">
              New
            </div>
          </li>
        </ul>
      </div>

      <div className=" flex w-full border-t-2 border-gray-500 h-fit py-2 ">
        <ul className=" flex flex-col w-full">
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Testimonials
          </li>
          <li className="w-full hover:text-[#780C28] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Why choose Aarambh
          </li>
        </ul>
      </div>
      <div className=" flex items-center justify-center  w-full border-t-2 border-gray-500 h-fit px-5 py-2  ">
        <Button
          fullWidth
          variant="outlined "
          sx={{
            border: "1px solid orange",
            color: "orange",
            marginTop: "5px",
          }}
        >
          List Your Business
        </Button>
      </div>
    </div>
  )
}

export default SideDrawer