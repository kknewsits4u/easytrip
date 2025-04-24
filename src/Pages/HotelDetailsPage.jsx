import React from "react";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Switch from '@mui/material/Switch';
import StarIcon from '@mui/icons-material/Star';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const HotelDetailsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-[100vh] bg-gray-100  md:px-5 md:py-2">
      <div className=" grid w-full grid-cols-1 lg:grid-cols-2 h-150 gap-2">
        <div className="flex flex-col w-full h-full  rounded relative"  >
          <div className="w-full h-100  lg:h-120 bg-[rgb(255,255,255)] rounded " >
             <img
                 src="https://image.wedmegood.com/resized/1000X/uploads/member/1349488/1730125126_image6606.jpg?crop=0,600,2048,1151"
                 alt="venue-image"
                 className=" w-full h-full object-cover object-center rounded"
              />
          </div>
          <div className="flex flex-col items-start justify-between bg-[rgb(255,255,255)] w-[90%] h-60 absolute left-1/2 -translate-x-1/2 bottom-0 rounded" >
            <div className="flex w-full h-full items-start justify-between gap-5 " >
                  <div  className=" flex flex-col items-start justify-between w-4/5 h-full py-2 pb-4 px-4 " >
                  <h1 className="  flex w-full  text-lg font-semibold text-gray-600 ">Sanjay Marriage Garden </h1>
                  <p  className=" text-md text-gray-600  " >( Formly known for its better decoration )</p>
                      <p className=" text-md text-gray-600 text-left "  ><LocationOnIcon  sx={{ color :"rgb(239,76,149)" }}  /> Near Bhanwan Takies, Agra, Uttar Pradesh, 282116  </p>
                      <p className=" text-blue-500 font-semibold text-md cursor-pointer" ><PhoneIcon/> Contact </p>
               
                  
                  </div>
                  <div className=" flex items-end justify-start p-2 h-full flex-col gap-3 "  >
                     <div  className="flex items-center justify-center px-3 py-2 text-white font-semibold text-lg  bg-green-700 rounded " ><StarIcon sx={{ marginRight:"5px"}}  /> 5.0 </div>
                     <p className=" text-md text-gray-500 font-semibold "   > 20 Reviews</p>
                  </div>
            </div>
            <div className=" w-full h-[25%] grid grid-cols-3 items-center justify-between divide-x-2 divide-gray-400 "  >
               <div  className=" bg-gray-200 h-full flex items-center justify-center text-md font-semibold cursor-pointer" >
                   62 Photos
               </div>
               <div  className=" bg-gray-200 h-full flex items-center justify-center text-md font-semibold cursor-pointer" >
               Write a review
               </div>
               <div  className=" bg-gray-200 h-full flex items-center justify-center text-md font-semibold cursor-pointer" >
               Share
               </div>
            
           
            </div>
          </div>
        </div>

        <div className=" flex flex-col w-full h-full gap-5 ">
          <div className=" flex flex-col w-full rounded bg-white shadow-md h-30 divide-y divide-gray-300 border border-gray-100   ">
            <div className="  flex w-full px-5 py-3 text-lg font-semibold text-gray-600 ">
              Starting Price
            </div>
            <div className="  flex  items-center justify-between  w-full px-5 py-3  ">
              <p className=" font-semibold text-xl text-[rgb(239,74,107)] ">
                ₹ 2,00,000
              </p>
              <p className=" text-md font-semibold">
                Price ( Planning 100% Free)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-5 w-full h-full bg-white  shadow-md rounded border border-gray-100 px-5 py-3 ">

            <div className=" w-full  flex items-center justify-between p-5">
              <div className=" flex items-center justify-center h-fit w-fit bg-green-600 px-5 py-2  rounded-full text-white text-md font-semibold  ">
                <EmailIcon /> <span className=" ml-3">Send Message </span>
              </div>
              <div className=" flex items-center justify-center h-fit w-fit bg-[rgb(249,109,137)]  px-5 py-2  rounded-full text-white text-md font-semibold ">
                <PhoneIcon /> <span className=" ml-3">View Contact </span>
              </div>
            </div>

            <h1 className=" w-full text-left font-semibold text-md text-gray-600" >Hi, Venue Name </h1>
            <div className=" flex flex-col items-start w-full justify-start  text-left gap-6">
              <div className=" flex flex-col md:flex-row w-full gap-5   ">
                <TextField
                  fullWidth
                  placeholder="Fullname *"
                  variant="standard"
                  required
                />
                <TextField
                  fullWidth
                  placeholder="Contact *  "
                  variant="standard"
                  required
                />
              </div>
              <div className=" flex flex-col md:flex-row w-full gap-5   ">
                <TextField
                  fullWidth
                  placeholder="Email Address *"
                  variant="standard"
                  required
                />
                <TextField
                  fullWidth
                  placeholder="Function Date *  "
                  variant="standard"
                  required
                  type="date"
                />
              </div>
              <div className=" flex w-full gap-5 flex-col md:flex-row  ">
                <TextField
                  multiline
                  fullWidth
                  placeholder="Full details about function *"
                  variant="standard"
                  required
                />
              </div>
              <div className=" flex w-full  items-center  justify-start  gap-10 " >
                  <p  className="font-semibold text-md text-gray-600"  >Notify me on Whatsapp</p>
                  <Switch {...label} defaultChecked  />
              </div>
            </div>
            <div  className="flex items-center justify-center w-full  font-semibold text-md text-gray-600" >   
               <Button fullWidth variant="contained" sx={{ backgroundColor:"rgb(236,92,149)" , color:"rgb(255,255,255)"   }}  >Send Message </Button>
            </div>
          </div>
        </div>

        
      </div>

      <div></div>
    </div>
  );
};

export default HotelDetailsPage;
