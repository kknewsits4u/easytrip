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

const Navbar = () => {


  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showButtons, setShowButtons] = useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <>
      <UpperHeader />
      {/* style={{ background: "linear-gradient(90deg, #FF5F6D, #FFC371)" }} */}
      <div className=" flex w-full px-5 2xl:px-10 h-16 lg:h-14 items-center justify-between z-40 
              sticky top-0 left-0 shadow-md bg-[#690B22] "  >
        <div className=" flex items-center justify-center text-blue-500 font-bold z-40 gap-5 ">
          <div
            onClick={toggleDrawer(true)}
            className=" flex  text-[rgb(239,74,107)]  font-extrabold items-center justify-center h-fit w-fit "
          >
            <DensityMediumIcon
              sx={{ fontWeight: "700", fontSize: "25px", color: "white" }}
            />
          </div>

          <h1 className="text-xl lg:text-2xl flex items-center justify-center  text-white ">
            Aarambhs
          </h1>
        </div>

        <div className="hidden relative md:flex w-full xl:w-2/3  items-start justify-start  gap-5 h-full  px-5">
          <ul
            className="flex h-full  items-center text-[rgb(255,255,255)] justify-between gap-5 lg:gap-10 text-sm lg:text-sm    "
            style={{ fontWeight: "500" }}
          >
            <li className="group  overflow-visible cursor-pointer flex  h-full items-center  hover:border-b-4 hover:border-b-white ">
              Vendors
              <VendorsDetailsSection />
            </li>

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
              Corporate Meeting


              <PhotosSection />

            </li>
          </ul>
        </div>



        <div className="flex items-center justify-center gap-5 rounded">

          <div
            className="sm:hidden w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setShowButtons(!showButtons)}
          >
            <img
              src="/profile.png"
              alt="user"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <div className="hidden sm:flex items-center justify-center gap-5 rounded">
            <Button
              variant="outlined"
              className="btn-grad"
              sx={{ color: "white" }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              className="btn-grad"
              sx={{ color: "white", whiteSpace: "nowrap" }}
            >
              Join Us
            </Button>
          </div>

          {(showButtons ) && (
            <div className="absolute right-5 top-16 rounded flex flex-col bg-white border border-gray-300 h-30 w-40 p-3 gap-5" >
              <Button
                variant="outlined"
                className="btn-grad"
                sx={{ color: "white" }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                className="btn-grad"
                sx={{ color: "white", whiteSpace: "nowrap" }}
              >
                Join Us
              </Button>
            </div>
          )}
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
          <SideDrawer />


        </Drawer>


      </div>
    </>
  );
};

export default Navbar;
