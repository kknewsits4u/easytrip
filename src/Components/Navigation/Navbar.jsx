import React, { useEffect, useRef, useState } from "react";
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
import {
  vendorsData,
  RealWedding,
  citiesData,
  vanueData,
  photoData,
} from "../Store/DataStore";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

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


  const [open1, setOpen1] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen1(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="  flex items-center justify-start h-fit px-2 2xl:px-10   bg-[rgb(180,36,93)] w-full  z-50 p-1 gap-5">
        <h1 className=" text-sm font-semibold text-[rgb(255,255,255)]">
          Plan your wedding with India's Largest Plateform
        </h1>

        
        <div ref={dropdownRef} className="relative">
          <div className="relative flex items-center justify-between w-50 h-8 p-2 font-semibold bg-[rgb(255,255,255)] rounded">
            <p className=" opacity-70">All Cities </p>
            <ArrowDropDownIcon
              sx={{ borderRadius: "10px", fontSize: "30px" }}
            />
          </div>

        {  open1 &&  (
          <div className="flex items-start justify-start w-[60vw] h-100 bg-white shadow absolute top-10 -left-20 z-50 rounded p-5">
            <input
              type="text"
              placeholder="Search city, States"
              className=" border border-gray-300 w-full p-3 rounded  focus:outline-0 text-gray-600 text-md "
            />
          </div>
         )}
        </div>
      </div>
      <div className=" flex flex-wrap w-full 2xl:px-10 h-15  items-center justify-between  z-40 bg-[rgb(231,46,119)]   ">
        <div className="order-1 flex items-center justify-center text-blue-500 font-bold z-40 gap-5 ">
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
        <div className="order-2 xl:order-3 hidden sm:flex items-center justify-center rounded  gap-5 ">
          <div
            className=" flex items-center justify-center rounded-full h-10 w-10  border-2 border-[rgb(255,255,255)] text-[rgb(255,255,255)]"
            style={{ boxShadow: "2px 2px 5px rgb(255,255,255)" }}
          >
            <SearchIcon />
          </div>
          <Button
            variant=" outlined "
            sx={{
              border: "1px solid rgb(255,255,255)",
              color: "white",
              boxShadow: "2px 2px 5px rgb(255,255,255)",
            }}
          >
            Login
          </Button>
          <Button
            variant=" outlined "
            sx={{
              border: "1px solid rgb(255,255,255)",
              color: "white",
              textWrap: "nowrap",
              boxShadow: "2px 2px 5px rgb(255,255,255)",
            }}
          >
            Join Us
          </Button>
        </div>

        <div className="hidden relative md:flex w-full xl:w-2/3 order-3 xl:order-2 items-start justify-start  gap-5 h-full  ">
          <ul
            className="flex h-full  items-center text-[rgb(255,255,255)] justify-between gap-10 text-sm lg:text-md    "
            style={{ fontWeight: "500" }}
          >
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Vendors
              <div
                className="flex flex-wrap items-start justify-start w-[50vw] h-fit rounded-md absolute top-15 left-0
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50 p-5 shadow-md"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                <div className=" w-full flex h-fit items-start justify-between">
                  <div className=" w-1/3 flex flex-col h-fit gap-3">
                    {vendorsData.slice(0, 5).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-1 text-md"
                      >
                        <h1 className="text-[rgb(231,46,119)] font-bold ">
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/3  flex flex-col h-fit gap-3">
                    {vendorsData.slice(5, 8).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold "
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/3 flex flex-col h-fit gap-3">
                    {vendorsData.slice(9, 11).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold"
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Vanues
              <div
                className="flex flex-wrap items-start justify-start w-[60vw] h-fit rounded-md absolute top-15 left-0
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50 p-5 shadow-md"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                <div className=" w-full flex h-fit items-start justify-between gap-5">
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    {vanueData.slice(0, 1).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 text-md text-left"
                      >
                        <h1 className="text-[rgb(231,46,119)] font-bold text-lg">
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p
                            className="text-gray-600 "
                            style={{
                              fontWeight:
                                index === data.p.length - 1 ? "700" : "500",
                            }}
                          >
                            {d.type}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className=" w-1/4  flex flex-col h-fit gap-3">
                    {vanueData.slice(1, 2).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1 className="text-[rgb(231,46,119)] font-bold text-lg">
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p
                            className="text-gray-600 "
                            style={{
                              fontWeight:
                                index === data.p.length - 1 ? "700" : "500",
                            }}
                          >
                            {d.type}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className=" w-1/2 flex flex-col h-fit gap-3 items-start">
                    <h1 className="text-[rgb(231,46,119)] font-bold text-lg ">
                      Destination Wedding Venues
                    </h1>
                    <div className=" w-full grid grid-cols-3 items-center justify-center h-fit gap-5">
                      {[1, 1, 1, 1, 1, 1].map((idx) => (
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
            </li>

            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Real Wedding
              <div
                className="flex flex-wrap items-start justify-start w-[60vw] h-fit rounded-md absolute top-15 left-0
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50 p-5"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                <div className=" w-full flex h-fit items-start justify-between">
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    {RealWedding.slice(0, 1).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 text-md"
                      >
                        <h1 className="text-[rgb(231,46,119)] font-bold ">
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/4  flex flex-col h-fit gap-3">
                    {RealWedding.slice(1, 2).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold "
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    {RealWedding.slice(2, 3).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold"
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    <h1 className="text-[rgb(231,46,119)] font-bold text-left">
                      Latest Real Wedding
                    </h1>
                    <div className=" w-full flex flex-col h-fit items-center justify-between gap-2 ">
                      <div className=" flex flex-col items-center justify-start w-full h-45  border-black gap-2">
                        <div className=" flex  items-center justify-center w-full h-40">
                          <img
                            src="https://i.pinimg.com/474x/9b/ca/dc/9bcadcb4b1eca2962d8343e5cd1826a0.jpg"
                            alt="image"
                            className=" w-full h-full object-center object-cover rounded"
                          />
                        </div>
                        <p className=" text-md text-gray-700">Ayesha & Aman</p>
                      </div>
                      <div className=" flex flex-col items-center justify-start w-full h-45  border-black gap-2 ">
                        <div className=" flex  items-center justify-center w-full h-40">
                          <img
                            src="https://i.pinimg.com/474x/9b/ca/dc/9bcadcb4b1eca2962d8343e5cd1826a0.jpg"
                            alt="image"
                            className=" w-full h-full object-center object-cover rounded"
                          />
                        </div>
                        <p className=" text-md text-gray-700">
                          Priyanka & Ansh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Blog
              <div
                className="flex flex-wrap items-start justify-start w-[60vw] h-fit rounded-md absolute top-15 left-0
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50 p-5"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                <div className=" w-full flex h-fit items-start justify-between">
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    {RealWedding.slice(0, 1).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 text-md"
                      >
                        <h1 className="text-[rgb(231,46,119)] font-bold ">
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/4  flex flex-col h-fit gap-3">
                    {RealWedding.slice(1, 2).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold "
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    {RealWedding.slice(2, 3).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold"
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-600 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/4 flex flex-col h-fit gap-3">
                    <h1 className="text-[rgb(231,46,119)] font-bold text-left">
                      Top Blogs
                    </h1>
                    <div className=" w-full flex flex-col h-fit items-center justify-between gap-2 ">
                      <div className=" flex flex-col items-center justify-start w-full h-45  border-black gap-2">
                        <div className=" flex  items-center justify-center w-full h-40">
                          <img
                            src="https://i.pinimg.com/736x/f8/ac/d6/f8acd6e5cc75a5edfeaa44e47b3007ac.jpg"
                            alt="image"
                            className=" w-full h-full object-center object-cover rounded"
                          />
                        </div>
                        <p className=" text-md text-gray-700">
                          Bridal Mehdi Design
                        </p>
                      </div>
                      <div className=" flex flex-col items-center justify-start w-full h-45  border-black gap-2 ">
                        <div className=" flex  items-center justify-center w-full h-40">
                          <img
                            src="https://i.pinimg.com/474x/2f/47/78/2f4778b05e77c352e1e26774dfab884b.jpg"
                            alt="image"
                            className=" w-full h-full object-center object-cover rounded"
                          />
                        </div>
                        <p className=" text-md text-gray-700">USA Trip</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Photos
              <div
                className="flex flex-wrap items-start justify-start w-[50vw] h-fit rounded-md absolute top-15 left-0
               opacity-0 translate-y-5 pointer-events-none
               group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
               transition-all duration-300 ease-in-out z-50 p-5 shadow-md"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                <div className=" w-full flex h-fit items-start justify-between">
                  <div className=" w-1/3 flex flex-col h-fit gap-3">
                    {photoData.slice(0, 3).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-1 text-md"
                      >
                        <h1 className="text-[rgb(231,46,119)] font-bold ">
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-500 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/3  flex flex-col h-fit gap-3">
                    {photoData.slice(3, 6).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold "
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-500 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className=" w-1/3 flex flex-col h-fit gap-3">
                    {photoData.slice(6, 8).map((data, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col  h-auto  items-start justify-start p-2 gap-2 "
                      >
                        <h1
                          className="text-[rgb(231,46,119)] font-bold"
                          style={{ fontSize: "16px" }}
                        >
                          {data.category}
                        </h1>
                        {data.p.map((d, index) => (
                          <p className="text-gray-500 ">{d.type}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
