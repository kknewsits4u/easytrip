import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Share, RateReview } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import StarIcon from "@mui/icons-material/Star";
import AliceCarousel from "react-alice-carousel";
import ImageIcon from "@mui/icons-material/Image";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const label = { inputProps: { "aria-label": "Switch demo" } };

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
  const [showMore, setShowMore] = useState(false);

  const visibleAreas = showMore ? areas : areas.slice(0, 4);

  const [activeTab, setActiveTab] = useState("PORTFOLIO");

  const portfolioImages = [
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
    "https://i.pinimg.com/474x/b7/19/b5/b719b5c1c5eb21895452e3cb051c07de.jpg",
  ];

  const photoImages = [
    "https://i.pinimg.com/474x/09/67/11/09671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/09/67/11/09671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/09/67/11/09671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/09/67/11/09671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/09/67/11/09671103d8f4d5dbe819e4c50c7e1c1b.jpg",
  ];

  const videoThumbnails = [
    "https://i.pinimg.com/474x/09/67/11/09671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/20/67/11/20671103d8f4d5dbe819e4c50c7e1c1b.jpg",
    "https://i.pinimg.com/474x/20/67/11/20671103d8f4d5dbe819e4c50c7e1c1b.jpg",
  ];

  const getImages = () => {
    if (activeTab === "PORTFOLIO") return portfolioImages;
    if (activeTab === "PHOTOS") return photoImages;
    if (activeTab === "VIDEOS") return videoThumbnails;
    return [];
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full min-h-[100vh] bg-gray-100 px-1 md:px-5 py-1 lg:pt-2 ">
      <div className=" grid w-full grid-cols-1 lg:grid-cols-2 h-fit  gap-2 ">
        <div className="flex flex-col items-start justify-between gap-3 h-fit  w-full ">
          <div className="flex flex-col w-full h-fit rounded relative  ">
            <div className="w-full h-fit bg-[rgb(255,255,255)] rounded ">
              <div style={{ maxWidth: "100%", margin: "auto" }}>
                <AliceCarousel
                  items={items}
                  autoPlay={items.length > 1}
                  infinite
                  animationDuration={3000}
                  disableDotsControls={true}
                  disableButtonsControls={true}
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-between bg-[rgb(255,255,255)] w-full  h-60  rounded  shadow-md   ">
              <div className=" flex  items-center justify-between w-full h-fit py-2  px-4 ">
                <h1 className="flex w-full  text-[16px] lg:text-[18px]  font-semibold text-slate-600 ">
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
              <div className=" flex  items-center justify-between w-full  h-fit py-2  px-4 ">
                <p className=" text-[12px] md:text-[14px] lg:text-[16px] text-gray-600  ">
                  ( Formly known for its better decoration )
                </p>
                <p className="text-gray-500 font-semibold text-right w-fit  text-[12px] sm:text-[13px] md:text- [14px] lg:text-[16px]   ">
                  20 Reviews
                </p>
              </div>
              <div className=" flex flex-col items-start justify-between w-full h-fit py-2 pb-4 px-4 gap-3">
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
          </div>

          <div className="w-full p-4  rounded shadow-lg bg-white  ">
            <h2 className="text-lg text-left w-full border-b pb-2 text-gray-600 font-semibold mb-4">
              Areas Available ({areas.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visibleAreas.map((area, index) => (
                <div key={index} className="flex gap-5 items-start  ">
                  <div className="text-gray-400">
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
                    <p className="text-sm font-semibold">{area.seating}</p>
                    <p className="text-gray-500 text-xs">{area.type}</p>
                    <p className="text-gray-700 text-sm">{area.name}</p>
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
        </div>

        <div className=" flex flex-col w-full h-fit gap-1 lg:gap-3 ">
          <div className=" flex flex-col w-full rounded bg-white shadow-md h-fit divide-y divide-gray-300 border border-gray-100   ">
            <div className="  flex items-center justify-between w-full px-2 lg:px-5 py-3 text-lg font-semibold text-slate-600 ">
              <p className="  text-[15px] lg:text-[18px] "> Price Details</p>
              <p
                className="  text-[13px] lg:text-[16px] border px-1 rounded text-[#FF512F]  cursor-pointer"
                onClick={handlePriceDivExpend}
              >
                View {open ? "Less" : "More"}{" "}
                {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
              </p>
            </div>

            {open && (
              <div className="  flex flex-col md:flex-row items-start md:items-center justify-between w-full px-5 py-2 text-lg font-semibold text-slate-600 bg-[rgb(255,255,255)] h-fit gap-5 ">
                {packagePlan.map((d, i) => (
                  <div
                    key={i}
                    className=" w-1/2 flex flex-col  items-start  justify-center gap-2 h-full "
                  >
                    <h1 className="text-[14px] lg:text-[16px]  text-slate-700 ">
                      {d.package}
                    </h1>
                    <p className="text-[12px] lg:text-[14px]  text-slate-500 ">
                      {d.include}{" "}
                    </p>
                    <p className="text-[12px] lg:text-[14px]  text-[rgba(239,76,149,0.8)] ">
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
                  <span className=" text-[12px] md:text-[15px] text-slate-400 ml-2">
                    ( taxes extra )
                  </span>
                </p>
                <p className=" font-semibold text-[12px] md:text-[15px] text-slate-500 ">
                  {data.type}
                </p>
              </div>
            ))}
          </div>
          <div className=" flex flex-col w-full rounded bg-[#ecfaf9] shadow-md h-fit divide-y divide-gray-300 border border-gray-100  text-left ">
            <div className="  flex w-full px-2 lg:px-5 py-2 lg:py-3 text-md font-semibold text-slate-600 ">
              Destination Package
            </div>
            <div className="  flex  items-center justify-between  w-full  px-2 lg:px-5 py-3  ">
              <p className=" text-md lg:text-xl text-[#FF512F] font-semibold">
                ₹ 45 Lakh
              </p>
              <div className=" flex flex-col items-start justify-between h-full ">
                <p className=" text-[12px] md:text-[15px] font-semibold text-slate-600  ">
                  /day for 30 rooms
                </p>
                <p className="text-[12px] md:text-[15px] text-slate-500 ">
                  ( Incl. rooms + 3 Meals + Venue )
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start gap-5 w-full h-full bg-white  shadow-md rounded border border-gray-100 px-5 py-3 ">
            <div className=" w-full flex items-center justify-between lg:justify-start  gap-3 ">
              <div className=" flex items-center justify-center h-fit w-fit bg-blue-500 px-2 lg:px-3 py-2  rounded-full text-white text-md font-semibold  ">
                <EmailIcon sx={{ fontSize: "18px" }} />
                <span className=" ml-2 text-nowrap text-[12px]  md:text-[12px] lg:text-[14px] ">
                  Send Message
                </span>
              </div>
              <div className=" flex items-center justify-center h-fit w-fit bg-yellow-600  px-2 lg:px-3 py-2  rounded-full text-white text-md font-semibold ">
                <PhoneIcon sx={{ fontSize: "18px" }} />
                <span className=" ml-2 text-nowrap text-[12px]  md:text-[12px] lg:text-[14px]">
                  View Contact
                </span>
              </div>
            </div>

            <h1 className=" w-full text-left font-semibold text-md text-gray-600">
              Hi, Venue Name{" "}
            </h1>
            <div className=" flex flex-col items-start w-full justify-start  text-left gap-6">
              <div className=" flex flex-col md:flex-row w-full gap-5  ">
                <TextField
                  fullWidth
                  placeholder="Fullname *"
                  variant="standard"
                  required
                  InputProps={{ disableUnderline: false }}
                  sx={{
                    input: {
                      fontSize: "15px",
                      paddingY: "8px",
                      "::placeholder": {
                        fontSize: "14px",
                        color: "#999",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Contact *  "
                  variant="standard"
                  required
                  InputProps={{ disableUnderline: false }}
                  sx={{
                    input: {
                      fontSize: "15px",
                      paddingY: "8px",
                      "::placeholder": {
                        fontSize: "14px",
                        color: "#999",
                      },
                    },
                  }}
                />
              </div>
              <div className=" flex flex-col md:flex-row w-full gap-5   ">
                <TextField
                  fullWidth
                  placeholder="Email Address *"
                  variant="standard"
                  required
                  InputProps={{ disableUnderline: false }}
                  sx={{
                    input: {
                      fontSize: "15px",
                      paddingY: "8px",
                      "::placeholder": {
                        fontSize: "14px",
                        color: "#999",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  placeholder="Function Date *  "
                  variant="standard"
                  required
                  type="date"
                  InputProps={{ disableUnderline: false }}
                  sx={{
                    input: {
                      fontSize: "15px",
                      paddingY: "8px",
                      "::placeholder": {
                        fontSize: "14px",
                        color: "#999",
                      },
                    },
                  }}
                />
              </div>
              <div className=" flex w-full gap-5 flex-col md:flex-row  ">
                <TextField
                  multiline
                  fullWidth
                  placeholder="Full details about function *"
                  variant="standard"
                  required
                  InputProps={{ disableUnderline: false }}
                  sx={{
                    input: {
                      fontSize: "15px",
                      paddingY: "8px",
                      "::placeholder": {
                        fontSize: "14px",
                        color: "#999",
                      },
                    },
                  }}
                />
              </div>
              <div className=" flex max-md:flex-col flex-row items-start max:md:items-center justify-between w-full gap-5">
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ fontWeight: "600", fontSize: "15px" }}
                  >
                    Function Type
                  </FormLabel>
                  <RadioGroup
                    defaultValue="prewedding"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="prewedding"
                      control={
                        <Radio
                          sx={{
                            color: "#FF512F",
                            "&.Mui-checked": {
                              color: "#FF512F",
                            },
                          }}
                        />
                      }
                      label="Pre-Wedding"
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                      }}
                    />
                    <FormControlLabel
                      value="wedding"
                      control={
                        <Radio
                          sx={{
                            color: "#FF512F",
                            "&.Mui-checked": {
                              color: "#FF512F",
                            },
                          }}
                        />
                      }
                      label="Wedding"
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ fontWeight: "600", fontSize: "15px" }}
                  >
                    Function Time
                  </FormLabel>
                  <RadioGroup
                    defaultValue="evening"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="evening"
                  >
                    <FormControlLabel
                      value="evening"
                      control={
                        <Radio
                          sx={{
                            color: "#FF512F",
                            "&.Mui-checked": {
                              color: "#FF512F",
                            },
                          }}
                        />
                      }
                      label="Evening"
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                      }}
                    />
                    <FormControlLabel
                      value="day"
                      control={
                        <Radio
                          sx={{
                            color: "#FF512F",
                            "&.Mui-checked": {
                              color: "#FF512F",
                            },
                          }}
                        />
                      }
                      label="Day"
                      name="day"
                      sx={{
                        "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className=" flex w-full  items-center  justify-start  gap-10 ">
                <p className="font-semibold text-md text-gray-600">
                  Notify me on Whatsapp
                </p>
                <Switch {...label} defaultChecked />
              </div>
            </div>

            <div className="flex items-center justify-center w-full  font-semibold text-md text-gray-600">
              <Button
                fullWidth
                variant="contained"
                className="btn-grad"
                sx={{
                  backgroundColor: "#e53935",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "15px",
                  paddingY: "10px",
                }}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-fit mt-3 rounded px-5 py-2">
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
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full gap-5   ">
          {getImages().map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-full h-20 md:h-40 lg:h-60 rounded"
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

      <div className=" grid grid-cols-1  lg:grid-cols-2  w-full gap-3 shadow-md h-fit min-h-50 my-3  ">
        <div className="flex flex-col w-full  bg-white p-4 rounded shadow-md gap-4">
         
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-800">Rating Distribution</p>
            <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded">
              <span className="text-sm font-bold">4.8</span>
            </div>
          </div>

          <p className="text-sm text-gray-600">53 reviews</p>

          <div className="flex flex-col gap-3">
            {[
              { stars: 5, percent: 85, reviews: 48, color: "bg-green-500" },
              { stars: 4, percent: 6, reviews: 3, color: "bg-green-400" },
              { stars: 3, percent: 2, reviews: 1, color: "bg-yellow-400" },
              { stars: 2, percent: 2, reviews: 1, color: "bg-orange-400" },
              { stars: 1, percent: 0, reviews: 0, color: "bg-gray-300" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />
                <div className="flex items-center gap-1 w-10">
                  <span className="text-sm font-semibold">{item.stars}</span>*
                </div>
                <div className="flex-1 bg-gray-200 h-2 rounded relative overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 w-12 text-right">
                  {item.reviews} review{item.reviews !== 1 && "s"}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 italic mt-2">
            Last Review Updated on 28 Nov 2024
          </p>
        </div>

        <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-fit min-h-50  rounded p-5 ">
          <div className=" flex w-full  items-center justify-start  text-xs  md:text-sm lg:text-md border-b-2 border-slate-300 h-fit pb-2">
            <h1 className=" text-amber-700 font-semibold ">WRITE A REVIEW </h1>
          </div>
          <div className=" flex flex-col items-start justify-start gap-3 text-left">
            <h1 className=" text-sm  font-semibold text-slate-600  ">
              Review Hotel Name
            </h1>
            <form className=" w-full"  >
            <div className=" flex flex-col items-start justify-start gap-5 text-left w-full">
              <h1 className=" text-sm  font-semibold text-slate-600  ">
                Rate Vendor
              </h1>
              <div className=" flex items-center justify-start gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div className=" flex border border-slate-300 w-5 h-5 cursor-pointer hover:border-amber-600 rounded items-center justify-center text-xs  hover:text-amber-600 ">
                    {i}
                  </div>
                ))}
              </div>
              <textarea
                className="w-full p-2 border border-slate-400 rounded focus:outline-0  "
                rows={5}
                placeholder="Write something positive....."
              ></textarea>
                <Button variant="contained " fullWidth  className=" btn-grad" >Submit</Button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
