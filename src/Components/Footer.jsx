import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-between bg-white h-fit shadow-md shadow-gray-300 rounded-sm">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-black h-fit min-h-60  border-b border-gray-500 gap-5  p-5"  >
        <div className=" flex flex-col h-60  w-full text-gray-400 text-md gap-3"  >
          <h1 className=" text-white text-xl mb-2 "  >Delhi</h1>
          <p>Shri Krishna Resort</p>
          <p>The Grand Hotel</p>
          <p>Sanjay Palace</p>
          <p>Radha Rani Garden</p>
          <p>Shri Ram Marriage Home</p>
        </div>
        <div className=" flex flex-col h-60  w-full text-gray-400 text-md gap-3"  >
          <h1 className=" text-white text-xl mb-2 "  >Banglore</h1>
          <p>Shri Krishna Resort</p>
          <p>The Grand Hotel</p>
          <p>Sanjay Palace</p>
          <p>Radha Rani Garden</p>
          <p>Shri Ram Marriage Home</p>
        </div>
        <div className=" flex flex-col h-60  w-full text-gray-400 text-md gap-3"  >
          <h1 className=" text-white text-xl mb-2 "  >Chennai</h1>
          <p>Shri Krishna Resort</p>
          <p>The Grand Hotel</p>
          <p>Sanjay Palace</p>
          <p>Radha Rani Garden</p>
          <p>Shri Ram Marriage Home</p>
        </div>
        <div className=" flex flex-col h-60  w-full text-gray-400 text-md gap-3"  >
          <h1 className=" text-white text-xl mb-2 "  >Mumbai</h1>
          <p>Shri Krishna Resort</p>
          <p>The Grand Hotel</p>
          <p>Sanjay Palace</p>
          <p>Radha Rani Garden</p>
          <p>Shri Ram Marriage Home</p>
        </div>
        <div className=" flex flex-col h-60  w-full text-gray-400 text-md gap-3"  >
          <h1 className=" text-white text-xl mb-2 "  >Kolkata</h1>
          <p>Shri Krishna Resort</p>
          <p>The Grand Hotel</p>
          <p>Sanjay Palace</p>
          <p>Radha Rani Garden</p>
          <p>Shri Ram Marriage Home</p>
        </div>
        <div className=" flex flex-col h-60 w-full text-gray-400 text-md gap-3"  >
          <h1 className=" text-white text-xl mb-2 "  >Gurugram</h1>
          <p>Shri Krishna Resort</p>
          <p>The Grand Hotel</p>
          <p>Sanjay Palace</p>
          <p>Radha Rani Garden</p>
          <p>Shri Ram Marriage Home</p>
        </div>



        

      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between h-fit bg-black w-full border-b border-gray-500 gap-5  p-5">
        <div className="  flex flex-col w-full md:w-1/2 items-center md:items-start justify-start gap-2 p-5 ">
          <div className=" flex items-center justify-start gap-5 ">
            <div className="flex items-center justify-center w-10 h-10 rounded-full ">
              <img
                src="/dummy.png"
                alt="logo"
                className=" w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <h1 className=" text-white text-3xl ">Aarambh</h1>
          </div>
          <p className=" text-white opacity-70 text-sm">
            Call our 24-hour helpline
          </p>
          <h1 className="text-white text-sm">
            <span className=" mr-2">
              <LocalPhoneIcon />
            </span>
            +91-78459 62545
          </h1>
          <h1 className="text-white text-sm">
            <span className=" mr-2">
              <EmailIcon />
            </span>
            info.aarambh@help.com
          </h1>
        </div>
        <div className=" flex items-center md:items-end justify-between flex-col h-fit gap-10  w-full md:w-1/2 ">
        <div className=" flex flex-col h-fit gap-10 w-1/2 items-center justify-between"  >
        <h1 className=" text-white text-lg">Follow Us</h1>
          <div className=" flex items-end justify-center gap-5 ">
            <div className=" flex items-center justify-center w-10  lg:w-15 h-10 lg:h-15 shadow-md shadow-blue-500 rounded-full">
              <img
                src="/fbicon.png"
                alt="social icon"
                className="w-full h-full object-cover object-center rounded-full "
              />
            </div>
            <div className=" flex items-center justify-center w-10  lg:w-15 h-10 lg:h-15 shadow-md shadow-blue-500 rounded-full">
              <img
                src="/whaicon.png"
                alt="social icon"
                className="w-full h-full object-cover object-center rounded-full "
              />
            </div>
            <div className=" flex items-center justify-center w-10  lg:w-15 h-10 lg:h-15 shadow-md shadow-blue-500 rounded-full">
              <img
                src="/instagramLogo.png"
                alt="social icon"
                className="w-full h-full object-cover object-center rounded-full "
              />
            </div>
          </div>
        </div>
        </div>
        <div></div>
      </div>

      <div className=" flex items-center justify-center h-fit bg-black w-full rounded-bl-md  rounded-br-md p-5">
        <p className=" w-full text-white text-md ">
          @Aarambh <span className=" text-red-500 ">2025</span>, All Rights
          Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
