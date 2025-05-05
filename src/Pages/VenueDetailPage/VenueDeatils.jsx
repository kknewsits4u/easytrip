import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Share, RateReview } from "@mui/icons-material";
import LivingIcon from "@mui/icons-material/Living";
import StarIcon from "@mui/icons-material/Star";
import ImageIcon from "@mui/icons-material/Image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import WifiIcon from "@mui/icons-material/Wifi";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SensorWindowIcon from "@mui/icons-material/SensorWindow";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import BedIcon from "@mui/icons-material/Bed";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RatingComponent from "../../Components/Rating&Review/RatingComponent";
import ReviewComponent from "../../Components/Rating&Review/ReviewComponent";
import HotelCard from "./HotelCard";
import TrendingCities from "./TrendingCities";
import ReviewCard from "./ReviewCard";
import HotelEnquiryForm from "../../Components/HotelEnquiry/HotelEnquiryForm";

const VenueDetails = () => {
  const items = [
    <div
      className=" w-full h-full flex items-start justify-center bg-[#f2f2f2] "
      key="1"
    >
      <img
        src="https://image.wedmegood.com/resized/1000X/uploads/member/1349488/1730125126_image6606.jpg?crop=0,600,2048,1151"
        alt="venue-mage"
        className=" w-full h-full  object-cover object-center rounded"
      />
    </div>,
  ];

  const priceDetails = [
    {
      type: "Veg Food",
      price: "3000 /-",
    },
    {
      type: "Non-Veg Food",
      price: "5000 /-",
    },
  ];

  const packagePlan = [
    {
      package: "Small Package",
      include: "20 Rooms + 2 Meals",
      price: "8,00,000",
    },
    {
      package: "Medium Package",
      include: "25 Rooms + 3 Meals",
      price: "20,00,000",
    },
    {
      package: "Premium Package",
      include: "30 Rooms + 3 Meals",
      price: "35,00,000",
    },
  ];

  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState("PORTFOLIO");

  const handlePriceDivExpend = () => {
    setOpen(!open);
  };

  const areas = [
    {
      seating: "250 Seating | 500 Floating",
      type: "Indoor",
      name: "Mansion Ballroom",
    },
    {
      seating: "70 Seating | 150 Floating",
      type: "Indoor",
      name: "Altitude 1",
    },
    {
      seating: "100 Seating | 200 Floating",
      type: "Indoor",
      name: "Altitude 2",
    },
    {
      seating: "70 Seating | 150 Floating",
      type: "Indoor",
      name: "Altitude 3",
    },
  ];

  const visibleAreas = showMore ? areas : areas.slice(0, 4);

  const portfolioImages = [
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/736x/3e/5b/19/3e5b1940ece06810717316a981d591ad.jpg",
    "https://i.pinimg.com/736x/e6/30/db/e630db9e931df9ea09a6090cf5dbfa89.jpg",
    "https://i.pinimg.com/736x/6d/0e/3a/6d0e3ac0335111f16761088900ba5849.jpg",
    "https://i.pinimg.com/736x/21/fc/72/21fc727f5423dc5f76e5b2ff34ace72a.jpg",
    "https://i.pinimg.com/736x/e6/30/db/e630db9e931df9ea09a6090cf5dbfa89.jpg",
    "https://i.pinimg.com/736x/6d/0e/3a/6d0e3ac0335111f16761088900ba5849.jpg",
    "https://i.pinimg.com/736x/7f/19/3b/7f193b23bfbf647cf5c9495d803daf26.jpg",
    "https://i.pinimg.com/736x/3e/5b/19/3e5b1940ece06810717316a981d591ad.jpg",
    "https://i.pinimg.com/736x/e6/30/db/e630db9e931df9ea09a6090cf5dbfa89.jpg",
    "https://i.pinimg.com/736x/6d/0e/3a/6d0e3ac0335111f16761088900ba5849.jpg",
    "https://i.pinimg.com/736x/21/fc/72/21fc727f5423dc5f76e5b2ff34ace72a.jpg",
  ];

  const photoImages = [
    "https://i.pinimg.com/736x/e5/9d/06/e59d06a864d98fb752875ba989cd73a4.jpg",
    "https://i.pinimg.com/736x/65/01/f6/6501f68cf8e4449a7ecfed68ea0c73ce.jpg",
    "https://i.pinimg.com/736x/56/fd/b3/56fdb3cf6f55ba339c33fd3033f919ff.jpg",
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/736x/9d/85/11/9d8511a1cc09d8e5c5b6c90d47472c81.jpg",
  ];

  const videoThumbnails = [
    "https://i.pinimg.com/736x/8e/44/5e/8e445e6e95285ec48c58800b760d8ade.jpg",
    "https://i.pinimg.com/474x/20/67/11/20671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/20/67/11/20671103d8f4d5dbe819e4c50c7e1c1b.jpg",
  ];

  const getImages = () => {
    if (activeTab === "PORTFOLIO") return portfolioImages;
    if (activeTab === "PHOTOS") return photoImages;
    if (activeTab === "VIDEOS") return videoThumbnails;
    return [];
  };

  const highLights = [
    {
      icon: <LocationPinIcon />,
      text: "Located in Centre of New Delhi",
    },
    {
      icon: <FlightTakeoffIcon />,
      text: "Airport Transfer",
    },
    {
      icon: <SensorWindowIcon />,
      text: "Front desk [24-Hour]",
    },
    {
      icon: <DirectionsBusIcon />,
      text: "240 Meters for public transportation",
    },
    {
      icon: <WifiIcon />,
      text: "Free Wi-Fi in all rooms",
    },
  ];

  // confiration for world famous destionations .......................................

  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-[100vh] gap-2 px-1 md:px-5 py-1 lg:pt-5 max-w-[1280px]">
      <div className="flex max-md:flex-col flex-row w-full min-h-50 h-fit  md:gap-3   ">
        <div className=" flex items-center justify-center h-[250px] sm:h-[280px]  md:h-[330px]  max-md:w-full w-2/5 rounded-md hover:shadow-md ">
          <img
            src="https://image.wedmegood.com/resized/1000X/uploads/member/1349488/1730125126_image6606.jpg?crop=0,600,2048,1151"
            alt="hotelImage"
            className=" h-full w-full object-cover object-center rounded-md"
          />
        </div>
        <div className=" flex items-start justify-start h-fit  max-md:w-full w-3/5  ">
          <div className="max-md:hidden grid grid-cols-3 w-full h-full  gap-3   items-center justify-between ">
            {[1, 2, 3, 4, 5, 6].map((d, idx) => (
              <div className=" w-full border border-gray-200 h-40 rounded-md hover:shadow-sm ">
                <img
                  src="https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg"
                  alt="hotelExtraImages"
                  className=" h-full w-full object-cover object-center rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="max-md:flex hidden min-w-full w-fit h-fit py-2 gap-3  overflow-x-scroll scrollbar-hide bg-slate-200">
            <div className=" flex w-fit h-fit gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, idx) => (
                <div className="flex items-center justify-center w-25 h-25 rounded-md border border-gray-300 ">
                  <img
                    src="https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg"
                    alt="hotelImage"
                    className=" h-full w-full object-cover object-center rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  hightslights start here.................... */}

      <div className=" grid w-full items-start grid-cols-1 lg:grid-cols-[70%_30%] h-fit gap-2  min-h-40">
        <div className=" flex  items-start justify-center flex-col gap-3  ">
          <div className="flex flex-col items-start justify-between bg-[rgb(255,255,255)] w-full h-60  rounded  border border-gray-200 ">
            <div className=" flex  items-start justify-between w-full h-fit py-2 px-2 md:px-4 ">
              <h1 className="flex w-full text-[18px] lg:text-[18px] text-left  font-semibold text-slate-800 ">
                Sanjay Marriage Garden
              </h1>
              <div className="flex items-center justify-center px-2 py-1 bg-[rgb(91,168,41)] rounded text-white font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
                <StarIcon
                  className="mr-1"
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
                />
                5.0
              </div>
            </div>
            <div className=" flex  items-center justify-between w-full  h-fit py-2 px-2 md:px-4 ">
              <p className=" text-[12px] md:text-[14px] lg:text-[16px] text-gray-600  ">
                ( Formly known for its better decoration )
              </p>
              <p className="text-gray-500 font-semibold text-right w-fit  text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px]   ">
                20 Reviews
              </p>
            </div>
            <div className=" flex flex-col items-start justify-between w-full h-fit py-2 pb-4 px-2 md:px-4 gap-5 ">
              <p className=" text-[12px] md:text-[14px] lg:text-[16px] text-gray-600 text-left ">
                <span>
                  <LocationOnIcon
                    sx={{
                      color: "#FF512F",
                      fontSize: " 18px ",
                      marginRight: "3px",
                    }}
                  />
                </span>{" "}
                <span>Near Bhanwan Takies, Agra, Uttar Pradesh, 282116</span>
              </p>
              <p className=" text-blue-500 font-semibold  text-[12px] md:text-[14px] lg:text-[16px] cursor-pointer">
                <PhoneIcon sx={{ fontSize: " 18px ", marginRight: "3px" }} />{" "}
                Contact
              </p>
            </div>

            <div className=" w-full h-[25%] grid grid-cols-3 items-center justify-between divide-x-2 divide-gray-400 ">
              <div className="flex items-center bg-[rgb(238,238,238)] h-full   text-slate-700 text-sm sm:text-md font-semibold  justify-center  ">
                <ImageIcon fontSize="small" />
                <span className="ml-2  text-nowrap  text-[12px]  md:text-[12px] lg:text-[14px] ">
                  View Photos
                </span>
              </div>
              <div className="flex items-center bg-[rgb(238,238,238)] h-full   text-slate-700  text-sm sm:text-md font-semibold justify-center ">
                <Share fontSize="small" />
                <span className="ml-2 text-nowrap text-[12px]  md:text-[12px] lg:text-[14px]  ">
                  Share
                </span>
              </div>
              <div className="flex items-center bg-[rgb(238,238,238)] h-full   text-slate-700   text-sm sm:text-md font-semibold justify-center  ">
                <RateReview fontSize="small" />
                <span className="ml-2  text-nowrap text-[12px]  md:text-[12px] lg:text-[14px] ">
                  Write Review
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-md:p-2 p-4  rounded border border-gray-200 bg-white  ">
            <h2 className="text-lg text-left w-full border-b border-gray-300 pb-2 text-slate-800 font-semibold mb-4 ">
              Areas Available ({areas.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleAreas.map((area, index) => (
                <div key={index} className="flex gap-5 items-start  ">
                  <div className="text-gray-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7m-9 2v6h4v-6m5 4v6h3a2 2 0 002-2v-5a2 2 0 00-2-2h-3.5"
                      />
                    </svg>
                  </div>

                  <div className="w-full flex flex-col text-start ">
                    <p className="text-sm font-semibold text-slate-700">
                      {area.seating}
                    </p>
                    <p className="text-gray-600 text-sm">{area.type}</p>
                    <p className="text-gray-600 text-sm">{area.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="block md:hidden mt-4 text-center">
              {!showMore && areas.length > 4 && (
                <button
                  onClick={() => setShowMore(true)}
                  className="text-red-500 font-medium text-sm"
                >
                  Show More
                </button>
              )}
            </div>
          </div>

          <div className=" flex flex-col w-full rounded bg-white h-fit divide-y divide-gray-300 border border-gray-200   ">
            <div className="  flex items-center justify-between w-full px-2 lg:px-5 py-3 text-lg font-semibold text-slate-600 ">
              <p className="  text-[15px] lg:text-[18px] "> Price Details</p>
              <p
                className="  text-[13px] lg:text-[16px] border px-1 rounded text-[#FF512F]  cursor-pointer"
                onClick={handlePriceDivExpend}
              >
                View {open ? "Less" : "More"}
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </p>
            </div>

            {open && (
              <div className="  flex flex-col md:flex-row items-start md:items-center justify-between w-full px-5 py-2 text-lg font-semibold text-slate-600 bg-[rgb(255,255,255)] h-fit gap-5 ">
                {packagePlan.map((d, i) => (
                  <div
                    key={i}
                    className=" w-1/2 flex flex-col  items-start  justify-center gap-2 h-full "
                  >
                    <h1 className="text-[14px] lg:text-[16px]  text-slate-800 ">
                      {d.package}
                    </h1>
                    <p className="text-[12px] lg:text-[12px]  text-slate-600 ">
                      {d.include}{" "}
                    </p>
                    <p className="text-[12px] lg:text-[12px]  text-[#FF512F] ">
                      {d.price} Per Day
                    </p>
                  </div>
                ))}
              </div>
            )}
            {priceDetails.map((data, i) => (
              <div
                key={i}
                className="  flex  items-center justify-between  w-full px-2 lg:px-5 py-3  "
              >
                <p className=" text-md text-[#FF512F] font-semibold">
                  ₹ {data.price}{" "}
                  <span className=" text-[12px] md:text-[15px] text-[#FF512F]">
                    per plate
                  </span>
                  <span className=" text-[12px] md:text-[15px] text-slate-600 ml-2">
                    ( taxes extra )
                  </span>
                </p>
                <p className=" font-semibold text-[12px] md:text-[15px] text-slate-500 ">
                  {data.type}
                </p>
              </div>
            ))}
          </div>

          <div className=" flex flex-col items-start justify-start gap-3 p-2 lg:p-5 shadow w-full border border-gray-300 rounded">
            <h1 className=" text-slate-800 font-semibold  text-[15px] lg:text-[18px]">
              Highlights
            </h1>
            <ul className=" flex max-md:flex-col flex-row items-start w-full  justify-start gap-3 ">
              {highLights.map((data, i) => (
                <li
                  key={i}
                  className="flex max-md:flex-row flex-col gap-2 md:gap-3"
                >
                  <div>{data.icon} </div>
                  <p className=" text-sm text-slate-600 font-semibold">
                    {data.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex flex-col items-start justify-start gap-3 py-3 px-2 lg:px-5 shadow w-full border border-gray-300 rounded">
            <h1 className=" w-full border-b pb-2 text-left text-slate-800 font-semibold text-lg">
              Space & Rooms
            </h1>

            <div className=" flex flex-col  w-full items-start justify-start gap-2">
              <h1>Apartment/Flat</h1>
              <div className=" flex max-md:flex-col flex-row items-start justify-start gap-5 ">
                <div className=" flex flex-col items-start justify-start gap-3 ">
                  <p className=" text-sm text-slate-700">
                    Max 3 guests | 1 bed
                  </p>
                  <div className=" flex flex-col items-start  justify-between border w-50 border-gray-300 p-2 gap-2 rounded-md ">
                    <h2 className=" text-slate-700 text-base">Bedroom 1</h2>
                    <p className=" text-sm text-slate-700">1 double bed</p>
                    <div>
                      <BedIcon />
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col items-start justify-start gap-3 ">
                  <p className=" text-sm text-slate-600">
                    Max 5 guests | 2 bed
                  </p>
                  <div className=" flex flex-col items-start  justify-between border w-50 border-gray-300 p-2 gap-2 rounded-md ">
                    <h2 className=" text-slate-700 text-base">Bedroom 1</h2>
                    <p className=" text-sm text-slate-500">2 double bed </p>
                    <div className=" gap-3 flex ">
                      <BedIcon />
                      <BedIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex  items-start justify-start flex-col w-full h-fit gap-3">
          <div className=" flex flex-col border border-gray-300 shadow w-full h-30 divide-y divide-gray-300 px-3 rounded ">
            <div className="flex  items-center justify-between w-full h-20">
              <div className="flex flex-col gap-2 items-start justify-center">
                <h1 className="text-base text-slate-700 font-semibold ">
                  Check-In
                </h1>
                <p className=" text-slate-500 text-sm">12:00 PM</p>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <h1 className="text-base text-slate-700 font-semibold ">
                  Check-Out
                </h1>
                <p className=" text-slate-500 text-sm">until 11:00 AM</p>
              </div>
            </div>
            <div className="flex  items-center justify-end w-full ">
              <a href="" className=" text-blue-500 font-semibold">
                See more info
              </a>
            </div>
          </div>

          <div className=" flex flex-col border border-gray-300 shadow w-full h-fit divide-y divide-gray-300 p-2 rounded gap-2">
            <div className=" w-full h-50 lg:h-40 flex items-center justify-center pb-2">
              <img
                src="https://i.pinimg.com/474x/e0/54/bd/e054bdcf455dbee8fef16b7a8d72b2e4.jpg"
                alt="map image"
                className="w-full h-full object-cover object-center rounded  "
              />
            </div>
            <div className=" flex w-full items-center justify-between pb-2">
              <div>
                <LocalParkingIcon
                  sx={{
                    fontSize: "18px",
                    color: "gray",
                    border: "1px solid black",
                    borderRadius: "50%",
                  }}
                />{" "}
                <span className=" text-sm text-slate-700  font-semibold ml-2">
                  Parking
                </span>
              </div>
              <p className=" text-blue-500 text-base">Available Free</p>
            </div>
            <div className=" flex flex-col  w-full items-start gap-3 justify-between pb-2">
              <h1 className=" text-sm text-slate-700  font-semibold ">
                Popular Landmarks
              </h1>
              <ul className="flex flex-col items-start justify-start gap-2 w-full">
                <li className=" flex w-full items-center justify-between">
                  <div>
                    <AccountBalanceIcon
                      sx={{ fontSize: "18px", color: "gray" }}
                    />{" "}
                    <span className="ml-2 text-sm text-slate-700   ">
                      Lotus Temple
                    </span>
                  </div>
                  <p className=" text-blue-500 text-sm">2.8 km</p>
                </li>
                <li className=" flex w-full items-center justify-between ">
                  <div>
                    <AccountBalanceIcon
                      sx={{ fontSize: "18px", color: "gray" }}
                    />{" "}
                    <span className="ml-2 text-sm text-slate-700  ">
                      India Gate
                    </span>
                  </div>
                  <p className=" text-blue-500 text-sm">3.2 km</p>
                </li>
                <li className=" flex w-full items-center justify-between ">
                  <div>
                    <AccountBalanceIcon
                      sx={{ fontSize: "18px", color: "gray" }}
                    />{" "}
                    <span className="ml-2 text-sm text-slate-700  ">
                      Qutub Meenar
                    </span>
                  </div>
                  <p className=" text-blue-500 text-sm">4.5 km</p>
                </li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-co  w-full h-fit divide-y divide-gray-300  border border-gray-300 rounded gap-2">
            <HotelEnquiryForm />
          </div>
        </div>
      </div>

      {/* room details and booking ...................... */}

      <div className="flex flex-col items-start w-full border border-gray-300 bg-white h-fit rounded  ">
        <div className="flex w-full text-start items-center h-15  px-3">
          <h1 className=" text-slate-600 font-semibold text-lg ">
            Deluxe Rooms
          </h1>
        </div>
        <div className=" flex max-sm:flex-col flex-row gap-2 h-fit min-h-50 bg-gray-100 w-full p-2">
          <div className="flex flex-col max-sm:w-full w-[20%]  h-fit ">
            <div className=" flex flex-col w-full items-start  justify-start gap-1 h-fit ">
              <div className="flex items-center justify-center w-full h-40 ">
                <img
                  src="https://i.pinimg.com/474x/f6/bf/2e/f6bf2ead8546606c5da8094f461b7299.jpg"
                  alt="hotel_image"
                  className=" w-full h-full object-cover object-center rounded"
                />
              </div>
              <div className="flex items-center justify-center w-full h-fit  gap-1">
                <div className="flex items-center justify-center w-1/2 h-30 md:h-30 lg:h-20">
                  <img
                    src="https://i.pinimg.com/474x/b5/53/aa/b553aa08c5150b6f9a08795fb2db99ca.jpg"
                    alt="hotel_image"
                    className=" w-full h-full object-cover object-center rounded"
                  />
                </div>
                <div className="flex items-center justify-center w-1/2 h-30 md:h-30 lg:h-20">
                  <img
                    src="https://i.pinimg.com/474x/db/64/50/db64500b75f217ebc90e9a2c62ea6065.jpg"
                    alt="hotel_image"
                    className=" w-full h-full object-cover object-center rounded"
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col w-full items-start py-2 justify-start  h-fit gap-5 px-3">
              <p className=" text-blue-500 font-semibold hover:text-blue-600 ">
                <a href="">See all photos </a>
              </p>
              <ul className="flex flex-col gap-4 ">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
                  <li className="text-sm text-slate-700">
                    {" "}
                    <LivingIcon
                      sx={{
                        fontSize: { xs: "10px", sm: "14px", md: "16px" },
                        color: "rgb(120,120,120)",
                      }}
                    />{" "}
                    <span className=" ml-3">Facility Content</span>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start max-sm:w-full w-[80%] gap-2">
            {[1, 2, 3].map((idx) => (
              <HotelCard idx={idx} />
            ))}
          </div>
        </div>
      </div>

      {/*  hotel photos section ............... */}

      <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-fit rounded px-5 py-2">
        <div className=" flex w-full items-start justify-start  h-10  ">
          <ul className="flex items-center justify-between lg:justify-start h-full gap-5 border-b-2 border-gray-300 w-full text-xs md:text-sm lg:text-md ">
            {["PORTFOLIO", "PHOTOS", "VIDEOS"].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer font-semibold lg:mr-5 ${
                  activeTab === tab
                    ? "text-pink-600 border-b-2 border-pink-500 pb-1"
                    : "text-slate-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} (
                {tab === "PORTFOLIO"
                  ? portfolioImages.length
                  : tab === "PHOTOS"
                  ? photoImages.length
                  : videoThumbnails.length}
                )
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full gap-5  ">
          {getImages().map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-full h-20 md:h-40 lg:h-45 rounded"
            >
              <img
                src={src}
                alt={`image-${idx}`}
                className="w-full h-full object-cover object-center rounded shadow"
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" grid grid-cols-1  lg:grid-cols-2  w-full gap-3  h-fit min-h-50 my-3  ">
        <RatingComponent />
        <ReviewComponent />
      </div>

      {/* all reviews goes here .................................  */}
      <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-fit  rounded p-2 md:p-5">
        <div className="w-full text-left flex items-center  justify-start border-b border-gray-300 pb-3">
          <h1 className="px-2 text-md lg:text-xl xl:text-lg text-left font-semibold text-slate-600 mb-4">
            Most Favourite Reviews
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 md:gap-10 divide-y divide-gray-300 ">
          {[1, 2, 3].map((i) => (
            <ReviewCard key={i} />
          ))}
        </div>
      </div>

      {/* section for tp destinations in the world ..............  */}

      <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-fit  rounded ">
        <TrendingCities />
      </div>
    </div>
  );
};

export default VenueDetails;
