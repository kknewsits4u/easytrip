import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Button } from "@mui/material";
import UpperHeader from "./Components/UpperHeader";
import VendorsDetailsSection from "./Components/VendorsDetailsSection";
import VenueListSection from "./Components/VenueListSection";
import RealWeddingSection from "./Components/RealWeddingSection";
import BlogsSection from "./Components/BlogsSection";
import PhotosSection from "./Components/PhotosSection";
import SideDrawer from "./Components/SideDrawer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import CityData from "./Components/CityData";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [citiesDivOpen, setCitiesDivOpen] = React.useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [totalTopCities, setTotalTopCities] = useState(0);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const expendDiv = () => {
    setTotalTopCities(totalTopCities);
  };

  //  city search
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <UpperHeader />

      <div
        className=" flex w-full max-md:px-3 px-5 2xl:px-10 h-16 lg:h-14 items-center justify-between z-40 
               shadow-md max-md:bg-[#FA812F] bg-[rgb(127,137,144)] sticky top-0 left-0 "
      >
        <div className=" flex items-center justify-center text-blue-500 font-bold z-40 max-md:gap-2 gap-5 ">
          <div
            onClick={toggleDrawer(true)}
            className="flex md:hidden text-[rgb(239,74,107)]  font-extrabold items-center justify-center h-fit w-fit "
          >
            <DensityMediumIcon
              sx={{ fontWeight: "700", fontSize: "25px", color: "white" }}
            />
          </div>

          <a href="/">
            <h1 className="text-xl lg:text-2xl flex items-center justify-center  text-white ">
              Aarambh <span className="text-red-500">s</span>.in
            </h1>
          </a>
        </div>

        <div className="hidden relative md:flex w-full xl:w-2/3  items-start justify-start  gap-5 h-full  px-5">
          <ul
            className="flex h-full  items-center text-[rgb(255,255,255)] justify-between gap-5  text-sm lg:text-sm    "
            style={{ fontWeight: "500" }}
          >
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Vanues
              <VenueListSection />
            </li>

            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Real Wedding
              <RealWeddingSection />
            </li>
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Blog
              <BlogsSection />
            </li>

            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Photos
              <PhotosSection />
            </li>
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Vendors
              <div
                className="flex flex-wrap items-start justify-start w-[50vw] h-fit rounded-md absolute top-14 left-0
                   opacity-0 translate-y-5 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                   transition-all duration-300 ease-in-out z-50 p-5 shadow-xl"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                <VendorsDetailsSection />
              </div>
            </li>
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Corporate Meeting
              <PhotosSection />
            </li>
          </ul>
        </div>

        <div
          className=" max-md:flex hidden "
          onClick={() => setCitiesDivOpen(!citiesDivOpen)}
        >
          <p className="text-white">
            All Cities{" "}
            <span>
              {" "}
              <ArrowDropDownIcon />{" "}
            </span>{" "}
          </p>
        </div>
        {citiesDivOpen && (
          <div className=" w-full bg-white h-[100vh] fixed inset-0 top-0 left-0 z-50  overflow-y-auto ">
            <div className="flex flex-col w-full items-center justify-center gap-5  h-30  bg-[#FA812F] px-5 ">
              <div
                className=" flex  w-full items-center justify-start "
                onClick={() => setCitiesDivOpen(!citiesDivOpen)}
              >
                <CloseIcon sx={{ color: "white" }} />
                <p className="text-white text-lg font-semibold ml-3">Cities </p>
              </div>
              <div className=" flex  w-full items-center justify-start ">
                <div className="flex w-full border border-white p-2 rounded-full bg-white">
                  <SearchIcon sx={{ color: "#FA812F" }} />
                  <input
                    type=" text"
                    placeholder="Search Cities"
                    className="focus:outline-none  px-2 "
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>

            <CityData searchQuery={searchQuery} />
          </div>
        )}

        <div className="flex items-center justify-center gap-5 rounded">
          <div className="max-md:hidden flex items-center justify-center px-2 py-1 rounded  border border-white text-[rgb(250,129,47)] font-semibold tranform transition-all hover:scale-105 cursor-pointer text-nowrap max-md:text-sm text-base bg-white">
            <AddIcon /> List Your Business
          </div>
          <div className="flex w-6 h-6 rounded-full cursor-pointer  bg-white items-center justify-center p-1">
            <img
              src="/icons/phone.png"
              alt="phone-icon"
              className="w-full h-full object-cover object-center  rounded-full"
            />
          </div>
          <div
            className="flex w-6 h-6 rounded-full cursor-pointer bg-white"
            onClick={() => setShowButtons(!showButtons)}
          >
            <img
              src="/icons/user.png"
              alt="user"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
        </div>

        <Drawer
          open={open}
          sx={{ marginTop: "15px" }}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "rgb(245,245,245)",
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
          <SideDrawer handleCloseDrawer={() => setOpen(false)} />
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
