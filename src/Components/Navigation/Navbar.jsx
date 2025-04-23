import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import HomeIcon from "@mui/icons-material/Home";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import LoginIcon from "@mui/icons-material/Login";
import { Button, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { vendorsData, RealWedding, photosData, citiesData } from "../Store/DataStore";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState("Noida");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconData = [
    { icon: <HomeIcon />, name: "Home" },
    { icon: <HotelIcon />, name: "Hotels" },
    { icon: <FlightIcon />, name: "Flights" },
    { icon: <LocalTaxiIcon />, name: "Cabs" },
    { icon: <LoginIcon />, name: "Login" },
  ];

  return (
    <>
      <div
        className=" flex flex-wrap w-full 2xl:px-20 h-fit xl:h-20 bg-transparent items-center justify-between fixed top-0 left-0 p-5  z-50 "
        style={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
        }}
      >
        <div className="order-1 flex items-center justify-center text-blue-500 font-bold z-50 gap-5 ">
          <div
            onClick={toggleDrawer(true)}
            className=" flex  text-[rgb(239,74,107)]  font-extrabold items-center justify-center h-fit w-fit "
          >
            <DensityMediumIcon
              sx={{ fontWeight: "700", fontSize: "30px", color: "white" }}
            />
          </div>

          <h1 className="text-xl lg:text-3xl flex items-center justify-center  text-white ">
            Aarambh
          </h1>
        </div>
        <div className="order-2 xl:order-3 hidden sm:flex items-center justify-center h-fit w-fit shadow-sm shadow-white rounded   ">
          <Button
            fullWidth
            variant=" outlined "
            sx={{ border: "1px solid rgb(255,255,255)", color: "white" }}
          >
            List Your Business
          </Button>
        </div>
        <div className="hidden md:flex w-full xl:w-2/3  order-3 xl:order-2 items-center justify-start xl:justify-center mt-2 gap-5 ">
          <ul className="flex  items-center text-white justify-between gap-7 text-sm lg:text-md xl:text-lg font-semibold">
            <li className=" cursor-pointer hover:text-[rgb(239,74,107)]">
              Home
            </li>
            <li className="group relative overflow-visible cursor-pointer hover:text-[rgb(239,74,107)]  ">
              Vendors{" "}
              <span>
                <ExpandMoreIcon sx={{ fontWeight: "700", fontSize: "30px" }} />
              </span>
              <div
                className="flex flex-wrap items-start justify-start w-[50vw] h-fit rounded-md absolute top-8 -left-20
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50"
                style={{ backgroundColor: "rgba(55,55,55,0.756)" }}
              >
                {vendorsData.map((d, idx) => (
                  <div
                    key={d.idx}
                    className="border-b  border-gray-600 flex items-center justify-start px-2 text-white text-sm  p-2 w-1/4  hover:bg-gray-500  rounded-md "
                  >
                    {" "}
                    <p>{d.name}</p>{" "}
                  </div>
                ))}
                <div className="flex items-center justify-start w-full p-2  hover:bg-gray-500 ">
                  <p className="text-white text-sm ">
                    All Wedding Vendors{" "}
                    <span>
                      <DoubleArrowIcon />{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className=" cursor-pointer hover:text-[rgb(239,74,107)]">
              Banquet Halls
            </li>
            <li className="group relative cursor-pointer hover:text-[rgb(239,74,107)]">
              Real Wedding{" "}
              <span>
                <ExpandMoreIcon sx={{ fontWeight: "700", fontSize: "30px" }} />
              </span>
              <div
                className="flex flex-wrap items-start justify-start w-[25vw] h-fit rounded-md absolute top-8 -left-20
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50"
                style={{ backgroundColor: "rgba(55,55,55,0.756)" }}
              >
                {RealWedding.map((d, idx) => (
                  <div
                    key={d.idx}
                    className="border-b border-gray-600 flex items-center justify-start rounded-md px-2 text-white text-sm  p-2 w-1/2 hover:bg-gray-500"
                  >
                    {" "}
                    <p>{d.name}</p>{" "}
                  </div>
                ))}
                <div className="flex items-center justify-start w-full p-2  hover:bg-gray-500">
                  <p className="text-white text-sm ">
                    All Real Weddings{" "}
                    <span>
                      <DoubleArrowIcon />{" "}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="relative group cursor-pointer hover:text-[rgb(239,74,107)]">
              Photos{" "}
              <span>
                <ExpandMoreIcon sx={{ fontWeight: "700", fontSize: "30px" }} />
              </span>
              <div
                className="flex flex-wrap items-start justify-start w-[10vw] h-fit rounded-md absolute top-8 -left-10
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50"
                style={{ backgroundColor: "rgba(55,55,55,0.756)" }}
              >
                {photosData.map((d, idx) => (
                  <div
                    key={d.idx}
                    className="border-b border-gray-600 flex items-center justify-start px-2 rounded-md text-white text-sm  p-2 w-full hover:bg-gray-500"
                  >
                    {" "}
                    <p>{d.name}</p>{" "}
                  </div>
                ))}
                <div className="flex items-center justify-start w-full p-2  hover:bg-gray-500">
                  <p className="text-white text-sm ">All </p>
                </div>
              </div>
            </li>
            <li className=" cursor-pointer hover:text-[rgb(239,74,107)]">
              Testimonials
            </li>
          </ul>
        </div>

        <Drawer
          open={open}
          sx={{ marginTop: "15px" }}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(255, 255, 255,0.76)",
              backdropFilter: "blur(20px)",
              width: 250,
              height: "calc(100%)",
            },
          }}
          ModalProps={{
            BackdropProps: {
              sx: {
                backgroundColor: "transparent",
              },
            },
          }}
        >
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
                  Aarambh Wedding
                </h1>
              </div>
            </div>
            <div className="flex w-full items-center justify-between px-5">
              <h1 className=" text-xl ">City :</h1>
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
                <li className="w-full   cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Home
                </li>
                <li className="w-full  cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Vendors
                </li>
                <li className="w-full  cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Banquet Halls
                </li>
                <li className="w-full  cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Real Wedding
                </li>
                <li className="w-full  cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Blogs
                </li>
                <li className="w-full  cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Photos
                </li>
              </ul>
            </div>
            <div className=" flex w-full border-t-2 border-gray-500 h-fit py-2 ">
              <ul className=" flex flex-col w-full">
                <li className="w-full   cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Deals
                </li>
                <li className="w-full relative  cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Aarambh Assured
                  <div className=" flex items-center justify-center px-3  rounded bg-orange-600 absolute top-1 right-3 text-white  text-sm">
                    New
                  </div>
                </li>
              </ul>
            </div>

            <div className=" flex w-full border-t-2 border-gray-500 h-fit py-2 ">
              <ul className=" flex flex-col w-full">
                <li className="w-full   cursor-pointer hover:bg-gray-300 px-5 p-2">
                  Testimonials
                </li>
                <li className="w-full relative  cursor-pointer hover:bg-gray-300 px-5 p-2">
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
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
