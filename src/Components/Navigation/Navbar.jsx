import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LoginIcon from '@mui/icons-material/Login';


const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const iconData = [
       {icon: <HomeIcon/>,
        name:"Home"
         },
       {icon: <HotelIcon/>,
        name:"Hotels"
         },
       {icon: <FlightIcon/>,
        name:"Flights"

         },
       {icon: <LocalTaxiIcon/>,
        name:"Cabs"

         },
       {icon: <LoginIcon/>,
        name:"Login"

         }
  ]

  const DrawerList = (
    <Box
      sx={{ width: 150, marginTop:"20px", color:"black" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {iconData.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.name} sx={{ color:"black" }}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div
        className=" flex w-full 2xl:px-20 h-15 lg:h-20 bg-white items-center justify-between fixed top-0 left-0 p-5 shadow-[2px_0px_10px_rgb(0,0,0)] z-50 "
        style={{ backgroundColor: "#F1BA88" }}
      >
        <div className=" flex items-center justify-center text-blue-500 font-bold z-50  ">
          <h1
            className=" text-3xl flex items-center justify-center"
            style={{ color: "rgb(239,74,107)" }}
          >
            Easy{" "}
            <span className=" border-2  ml-3 px-3 rounded-md text-md  text-[rgb(239,74,107)] border-white shadow-md shadow-white  ">
              Trip
            </span>
          </h1>
        </div>
        <div className="hidden md:flex items-center justify-between   ">
          <ul className="flex  items-center justify-between gap-7 text-md xl:text-lg font-semibold">
            <li>Home</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Cabs</li>
            <li>Login</li>
          </ul>
        </div>
        <div
          onClick={toggleDrawer(true)}
          className=" flex md:hidden   items-center justify-center h-fit w-fit "
        >
          <DensityMediumIcon />
        </div>

         <Drawer open={open} sx={{ marginTop:"15px"}} onClose={toggleDrawer(false)}
         
         PaperProps={{
          sx: {
            backgroundColor: "rgba(255, 255, 255,0.76)",
            backdropFilter:"blur(20px)",
            width: 250,
            top: "65px",               
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
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
