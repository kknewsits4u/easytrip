import React, { useEffect } from 'react'
import { citiesData } from '../../Store/DataStore'
import { Button, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from 'react-router-dom';


const SideDrawer = ({handleCloseDrawer}) => {

  const [city, setCity] = React.useState("delhi");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleCitySearch = (city) => {
      handleCloseDrawer()
      if(city) navigate(`/${city}`);
  }

  const categoryList =[
    {
      name:"Venues",
      value:"venues"
    },
    {
      name:"Vendors",
      value:"vendors"
    },
    {
      name:"Banquet Halls",
      value:"banquets"
    },
    {
      name:"Real Wedding",
      value:"real-weddings"
    },
    {
      name:"Co-Oporate Meeting",
      value:"co-oporate-meeting"
    },
    {
      name:"Blogs",
      value:"blogs"
    },
    {
      name:"Photos",
      value:"photos"
    },
  ]

   const handleCategorySearch = (category) => {
     handleCloseDrawer()
     if(category) navigate(`/${category}`);
   }


  return (
    <div className=" flex flex-col w-full h-full items-center divide-y-2 divide-gray-300   justify-start">
      <div className=" flex relative w-full h-40 mr-1">
        <img
          src="https://i.pinimg.com/736x/99/68/ba/9968ba222fe2b9123607529fda81c316.jpg"
          alt="menu image"
          className=" w-full h-full object-center object-cover  "
        />
        <div className=" flex flex-col  items-start justify-end gap-5  w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/60 to-transparent  pl-5 p-3">
          <div className=" flex items-center justify-center w-12 h-12 rounded-full ">
            <img
              src="/dummy.png"
              alt="profile image"
              className=" w-full h-full object-center object-cover rounded-full shadow-md shadow-white"
            />
          </div>
          <h1 className=" font-semibold text-white text-xl  ">
            Aarambh<span className=' text-red-600' >s</span>.in
          </h1>
        </div>
       

      </div>

      <div className="flex w-full items-center justify-between px-5">
        <h1 className=" text-md text-[#FA812F] font-semibold ">City :</h1>
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
                <MenuItem key={i} value={data.value}  onClick={()=> handleCitySearch(data.value)} >
                  {data.cityName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className=" flex w-full  py-2  h-fit ">
        <ul className=" flex flex-col w-full">
          {
            categoryList.map((data, idx)=>

          <li key={idx} className="w-full hover:text-[#FA812F] hover:font-semibold  cursor-pointer hover:bg-[rgba(250,129,47,0.1)] px-5 p-2"  onClick={()=> handleCategorySearch(data.value)}    >
            {data.name}  
          </li>
           
            )
          }
        </ul>
      </div>

      <div className=" flex w-full  h-fit py-2 ">
        <ul className=" flex flex-col w-full">
          <li className="w-full hover:text-[#FA812F] hover:font-semibold  cursor-pointer hover:bg-white px-5 p-2">
            Deals
          </li>
          <li className="w-full hover:text-[#FA812F] hover:font-semibold  cursor-pointer hover:bg-[rgba(250,129,47,0.1)] px-5 p-2 relative">
            Aarambh Assured
            <div className=" flex items-center justify-center px-3  rounded bg-orange-600 absolute top-1 right-3 text-white  text-sm">
              New
            </div>
          </li>
        </ul>
      </div>

      <div className=" flex w-full  h-fit py-2 ">
        <ul className=" flex flex-col w-full">
          <li className="w-full hover:text-[#FA812F] hover:font-semibold  cursor-pointer hover:bg-[rgba(250,129,47,0.1)] px-5 p-2">
            Testimonials
          </li>
          <li className="w-full hover:text-[#FA812F] hover:font-semibold  cursor-pointer hover:bg-[rgba(250,129,47,0.1)] px-5 p-2">
            Why choose Aarambh
          </li>
        </ul>
      </div>

      <div className="group flex items-center justify-center  w-full  h-fit px-5 py-2  ">
        <Button
          fullWidth
          variant="outlined "
          sx={{
            border: "1px solid rgb(250,129,47)",
            color: "rgb(250,129,47)",
            marginTop: "5px",
            cursor:"pointer",
            transition: "all 0.3s ease",
            '&:hover': {
              backgroundColor: 'rgb(250,129,47)',
              color: 'white',
              borderColor: 'rgb(250,129,47)',
            },
          }}
        >
          List Your Business
        </Button>
      </div>

    </div>
  )
}

export default SideDrawer