import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonSlider from "../../Components/Sliders/SliderComponent/CommonSlider";
import { vendorCategory } from "../../Components/Store/DataStore";
import CommonVendorCard from "./CommonVendorCard";
import StoreIcon from "@mui/icons-material/Store";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import VendorsDetailsSection from "../../Components/Navigation/Components/VendorsDetailsSection";

const CityWiseDetails = () => {
  const [currentCity, setCurrentCity] = useState("Aarambhs");
  const location = useLocation();
  const city = location.pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (city) {
      setCurrentCity(city);
    }
  }, [city]);

  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 },
  };

  const data = vendorCategory.slice(0, 8).map((data, i) => (
    <div key={i} className="w-full p-2 ">
      <CommonVendorCard data={data} city={currentCity} />
    </div>
  ));

  // popular categories data

  const popularCategory = [
    {
      name: "Banquet",
      image:
        "https://i.pinimg.com/736x/0c/96/bd/0c96bd781be32d186e2a9b407b60bd22.jpg",
    },
    {
      name: "Hotel",
      image:
        "https://i.pinimg.com/736x/ea/20/8b/ea208b5d72982107ddad83ae7a1634a9.jpg",
    },
    {
      name: "Party Hall",
      image:
        "https://i.pinimg.com/736x/89/c8/3a/89c83a762fe2c59d0659fec9703e49fb.jpg",
    },
    {
      name: "Marriage Home",
      image:
        "https://i.pinimg.com/736x/69/6d/92/696d924a5c649caa726db7a496410d90.jpg",
    },
  ];

  const otherCategory = [
    {
      name: "Mehndi Artist",
      image:
        "https://i.pinimg.com/474x/db/cd/6a/dbcd6a632b10ada57c6b0e86b74a541e.jpg",
    },
    {
      name: "Bridal Makeup",
      image:
        "https://i.pinimg.com/474x/b7/a5/a4/b7a5a4340d172ed6f8bc51a3aabfffdd.jpg",
    },
    {
      name: "Catering Service ",
      image:
        "https://i.pinimg.com/474x/65/01/39/6501399a193855b2273e22f37264fe73.jpg",
    },
    {
      name: "Wedding Planner ",
      image:
        "https://i.pinimg.com/736x/3e/1c/58/3e1c580ca4c87e46cedc3834056188a3.jpg",
    },
  ];

  const handleVendorsSearch =()=> {
    setIsOpen(!isOpen)
  }

  return (
    <div className=" flex flex-col max-w-[1440px] w-full min-h-50  items-center  bg-white ">
      <div className=" relative flex items-center justify-center w-full h-[60vw] md:h-[45vw] lg:h-[30vw]">
        <div className=" flex items-center justify-center w-full h-full ">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/17/55/atoll-1854069_1280.jpg"
            alt="detaiImage"
            className="w-full h-full object-cover object-center   "
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent text-white  max-md:gap-3 gap-5 overflow-visible pb-5 "></div>

        <div className="flex flex-col items-center  justify-end absolute max-md:-bottom-5 bottom-10 left-0 w-full h-full  max-md:gap-3 gap-5 overflow-y-visible " >
          <h1 className="max-sm:text-2xl text-white lg:text-3xl  xl:text-5xl font-semibold ">
            Plan your wedding in <span>{currentCity}</span>
          </h1>

          <div className="flex items-center justify-start max-md:w-[80vw] max-lg:w-[60vw] w-[45vw] h-12 bg-white rounded-md  max-md:shadow-md cursor-pointer  relative "  onClick={handleVendorsSearch}  >

            <div className="flex items-center justify-center bg-[#FA812F] h-full w-12   rounded-tl-md rounded-bl-md ">
              <StoreIcon
                sx={{
                  color: "white",
                  fontSize: {
                    xs: 30,
                    sm: 32,
                    md: 34,
                    lg: 36,
                    xl: 38,
                  },
                }}
              />
            </div>
            <div className=" flex items-center justify-between px-3   h-full w-[90%] ">
              <p className=" text-[#FA812F] font-semibold  max-md:text-base text-lg">
                Find Vendors{" "}
              </p>
              <KeyboardDoubleArrowRightIcon sx={{ color: "#FA812F" }} />

            </div>
            
            {
              isOpen  && 
                <div className="flex w-full rounded-bl-md rounded-br-md bg-white min-h-30 h-fit absolute top-13 z-50 left-0 shadow-md " >
                  
                 <VendorsDetailsSection/>

                </div>
            }
         

          </div>
        
          
        </div>
       
      </div>

      <div className="flex w-full h-fit flex-col items-start max-w-[1280px] max-md:pt-10 pt-5">
        <h1 className=" w-full text-left px-3  max-md:text-base max-lg:text-lg text-2xl font-semibold text-[#FA812F]">
          View By Category
        </h1>
        <div className="flex flex-col w-full max-w-7xl mx-auto max-md:px-1 px-4 py-4 ">
          <CommonSlider
            data={data}
            responsive={responsive}
            getItemsPerPage={null}
          />
        </div>
      </div>

      {/* popular hotel in this city  */}

      <div className="flex flex-col w-full h-fit items-start justify-center max-w-[1280px] gap-5   ">
        <h1 className=" w-full text-left px-3 text-[#FA812F] max-md:text-base max-lg:text-lg text-2xl font-semibold ">
          Popular Categories
        </h1>
        <div className=" grid max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 w-full px-3 gap-2">
          {popularCategory.map((d, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-between max-md:h-45 max-lg:h-50 h-70 rounded-md  border border-gray-300  w-full relative cursor-pointer  hover:shadow-md "
            >
              <div className="flex items-center justify-center w-full h-full rounded-md">
                <img
                  src={d.image}
                  alt="hotel-image"
                  className="w-full h-full object-cover object-top rounded-md  "
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center rounded-md">
                <div className=" flex items-start justify-center w-full h-15 px-2">
                  <h1 className=" text-white font-semibold  max-md:text-base  max-lg:text-lg text-xl w-full ">
                    {d.name} in {currentCity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  other categories */}
      <div className="flex flex-col w-full h-fit items-start justify-center max-w-[1280px] py-5 gap-5">
        <h1 className=" w-full text-left px-3  max-md:text-base max-lg:text-lg text-2xl font-semibold text-[#FA812F]">
          Other Categories
        </h1>
        <div className=" grid max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 w-full px-3 gap-2">
          {otherCategory.map((d, idx) => (
            <div
              key={idx}
              className=" flex flex-col items-center justify-between max-md:h-45 max-lg:h-50 h-70 rounded-md  border border-gray-300  w-full relative cursor-pointer  hover:shadow-md group "
            >
              <div className="flex items-center justify-center w-full h-full rounded-md">
                <img
                  src={d.image}
                  alt="hotel-image"
                  className="w-full h-full object-cover object-top rounded-md  "
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center rounded-md">
                <div className=" flex items-start justify-center w-full h-15 px-2 ">
                  <h1 className=" text-white font-semibold  max-md:text-base  max-lg:text-lg text-xl w-full ">
                    {d.name} in {currentCity}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityWiseDetails;
