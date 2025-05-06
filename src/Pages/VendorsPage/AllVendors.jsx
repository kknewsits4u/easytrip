import React, { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DatePicker from "react-datepicker";
import ReviewComponent from '../../Components/Rating&Review/ReviewComponent';
import RatingComponent from '../../Components/Rating&Review/RatingComponent';
import BookingCard from './Components/BookingCard';
import AccordionTransition from './Components/FAQs';

const AllVendors = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Photos")

  const handleActiveTab = (tab) => {
    if (tab == "Photos") {
      setActiveTab("Photos")
    }
    else {
      setActiveTab("Videos")
    }
  }

  const iconsData = [
    {
      icon: "/fbicon.png",
    },
    {
      icon: "/whaicon.png",

    },
    {
      icon: "/instagramLogo.png",
    },
    {
      icon: "/xicon.png",
    },
  ]

  const handleAvailability = async () => {

    const formData = new FormData();

    formData.append('date', selectedDate)

    // await axios.post(`/${url}/api/checkavailability`, formData )

    if (isBooked) {
      setOpen(!open)
    }
  }

  const allPhotos = null || [
    "https://i.pinimg.com/736x/47/64/5b/47645b62d984e66ad9f781f73a550c30.jpg",
    "https://i.pinimg.com/736x/c7/de/72/c7de72c0fb14a2eb876114afbf1ee8f7.jpg",
    "https://i.pinimg.com/736x/a0/9c/a0/a09ca05b42473138d9166f74cb23170c.jpg",
    "https://i.pinimg.com/736x/98/72/a7/9872a78ce723285d76777ed72ae31dd7.jpg",
    "https://i.pinimg.com/736x/38/33/63/383363a8b0ab9e41ff3e5ccfc6831be3.jpg",
    "https://i.pinimg.com/736x/6f/f4/6c/6ff46c3c7597848a8711d989660ce172.jpg",
    "https://i.pinimg.com/736x/39/e3/7b/39e37b2d76f1b548cd10373171bc2447.jpg",
    "https://i.pinimg.com/736x/d7/23/80/d723805354053044819058463f1c60a0.jpg",
    "https://i.pinimg.com/736x/4a/0f/f6/4a0ff6fcf26fb04971d49a392aa3b1c3.jpg",
    "https://i.pinimg.com/736x/d9/55/c3/d955c3eb4744190d4c5a8da373b28a22.jpg",
    "https://i.pinimg.com/736x/df/4d/e0/df4de01e625e83a26444054680fdd696.jpg",
    "https://i.pinimg.com/736x/e8/19/98/e81998f29963c01c20dbff17bd6f2b02.jpg",
    "https://i.pinimg.com/736x/57/58/4e/57584ec187b82b6a4ce93d504ea9bf85.jpg"
  ]


  const allVideos = [
    "https://videos.pexels.com/video-files/2078587/2078587-sd_640_360_24fps.mp4",
    "https://videos.pexels.com/video-files/3122106/3122106-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/3150674/3150674-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/3936463/3936463-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/3122160/3122160-sd_640_360_25fps.mp4"
  ]


  return (
    <div className=' flex flex-col items-center  justify-start  max-w-[1440px] w-full min-h-[100vh] h-fit  max-md:px-3  px-5 gap-2 bg-white py-3'  >
      <div className='grid max-lg:grid-cols-1 grid-cols-[1fr_2fr] gap-3 max-md:gap-3  w-full  h-fit ' >

        <div className=" rounded-[2rem] rounded-tl-md h-fit rounded-tr-md overflow-hidden shadow-lg bg-white">

          <div className="relative bg-orange-400  max-md:h-30 h-50 rounded-b-[3rem]">

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px]">
              <img
                src="https://i.pinimg.com/736x/fb/34/ed/fb34ed0eb989a59138d6f6da81cab8f7.jpg"
                alt="Profile"
                className="w-30 h-30 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>

          <div className="mt-18 text-center px-6 pb-6">
            <h2 className="text-lg font-semibold text-gray-800">Prince Kumar</h2>
            <p className="text-sm text-gray-500">Photographer</p>
            <div className='flex items-center flex-col justify-start w-full mt-5 gap-5' >
              <h1 className=' text-orange-400 font-semibold max-md:text-base  text-lg' >Follow Us</h1>
              <div className=' flex items-center justify-center gap-5 ' >
                {
                  iconsData.map((data, idx) => (
                    <div key={idx} className=' flex items-center justify-center w-12 h-12 rounded-full shadow shadow-orange-400 cursor-pointer ' >
                      <img src={data.icon} alt="socilaIcons" className=' w-full h-full object-cover object-center rounded-full ' />
                    </div>
                  ))
                }
              </div>

            </div>

            <div className='max-lg:flex-col  flex  flex-row items-center justify-between w-full h-fit max-md:mt-5  mt-10 border-t border-gray-300 pt-5 gap-5'  >
              <p className=' text-slate-800 text-sm font-semibold' >Started Pricing : <span className='line-through text-gray-500 ml-3'  > ₹ 18,000 </span> <span className='ml-3 text-orange-400 font-semibold ' > ₹ 15,000</span></p>
              <div className=' flex items-center justify-center gap-3 max-lg:w-full w-auto' >
             
                <div className='max-lg:w-[80%] w-auto flex items-center justify-center px-3 py-1 text-[rgb(255,255,255)] border-2 border-orange-400 bg-orange-400 hover:bg-white hover:text-orange-400 rounded-md  ' onClick={handleAvailability} >
                  BOOK NOW
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className=' flex flex-col w-full  items-start justify-start gap-3'  >

          <div className=' flex flex-col items-start justify-start w-full px-3  py-1 gap-3 h-fit shadow-md rounded-md border border-gray-100 divide-y divide-gray-300 ' >
            <h1 className='w-full text-left pb-2 max-md:text-base max-lg:text-lg text-xl font-semibold text-slate-600  ' >Photography Categories </h1>
            <div className=' grid max-md:grid-cols-1 grid-cols-2 w-full h-fit gap-5'>
              <div className='relative flex items-center justify-center h-60 rounded-md  w-full  ' >
                <img src="https://i.pinimg.com/736x/0f/70/be/0f70bebd7d0752ea93e8a2e4625232c7.jpg" alt="pre-wedding image" className=' w-full h-full object-cover object-center rounded-md ' />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-md p-3 flex items-end justify-start "  >
                  <h1 className='text-white font-semibold max-md:text-base max-lg:text-lg text-xl' >Pre-Wedding Photography</h1>
                </div>

              </div>
              <div className='relative flex items-center justify-center  rounded-md  h-60 w-full' >
                <img src="https://i.pinimg.com/736x/89/56/95/8956955fb168a1c43870cd9ad7d84d66.jpg" alt="pre-wedding image" className=' w-full h-full object-cover object-center rounded-md ' />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-md p-3 flex items-end justify-start "  >  <h1 className='text-white font-semibold max-md:text-base max-lg:text-lg text-xl' >Wedding Photography</h1> </div>
              </div>
            </div>
          </div>

          <div className=' flex flex-col items-start justify-start w-full px-3  py-1 gap-3 max-md:min-h-fit min-h-60  shadow-md rounded-md border border-gray-100 divide-y divide-gray-300 '>
            <h1 className='w-full text-left pb-2 max-md:text-base max-lg:text-lg text-xl font-semibold text-slate-600 ' >Check Availability</h1>
            <div className=' flex w-full h-fit gap-5 py-2' >
              <div className=' flex items-center justify-between gap-3 h-10 border border-orange-400 w-full rounded-md cursor-pointer'  >
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="  p-2 w-full text-gray-700 outline-none focus:outline-none focus:ring-0"
                  placeholderText="Choose Date"
                />
              </div>
              <button type='button' className=' flex items-center justify-center text-white hover:text-orange-400 font-semibold bg-orange-400 hover:bg-white cursor-pointer px-3 rounded-md  border hover:border-orange-400 ' >Check</button>

            </div>
            {
              open && (
                <div className=' flex items-center justify-start w-full ' >

                  {isBooked == true ? <h1>Already booked on this date.....</h1>
                    :
                    <div className=' flex items-center justify-between w-full ' >
                      <p>Available... </p>
                      <div className='max-lg:w-[80%] w-auto flex items-center justify-center px-3 py-1 text-[rgb(255,255,255)] border-2 border-orange-400 bg-orange-400 hover:bg-white hover:text-orange-400 rounded-md ' >
                        BOOK NOW
                      </div>
                    </div>
                  }
                </div>
              )
            }


          </div>
        </div>

      </div>
     <div className='flex flex-col items-center justify-start w-full  h-fit  border border-gray-300  shadow rounded mt-3 bg-[rgb(250,250,250)] '  >
         <div className=' flex items-center  justify-start w-full px-4 py-3 font-semibold text-lg text-gray-600 border-b-2 border-gray-300 bg-white rounded-md'  >
             Latest Bookings 
         </div>
          <div className=' grid max-md:grid-cols-1 grid-cols-2 items-center gap-5 justify-start w-full max-md:px-2 px-4 py-3 '  >
               {
                [1,2].map((idx)=> 
                   <BookingCard  key={idx}  />
                )
               } 
         </div>
     </div>
     <div className='grid  max-md:grid-cols-1 grid-cols-2  items-start justify-start w-full gap-3 min-h-100 h-fit  py-2 '  >
         <div  className='flex flex-col w-full h-100  rounded-md border border-gray-300 shadow' >
            <RatingComponent/>
         </div>
         <div className='flex flex-col w-full  h-100   rounded-md border border-gray-300 shadow ' >
           <ReviewComponent/>
         </div>
     </div>
       
        
     {/*  gallery area code start here ............................. */}

        <div className=' flex flex-col items-start justify-start w-full gap-3 h-fit shadow-md rounded-md  bg-[rgb(255,255,255)] border border-gray-300 '>
          <div className=' flex items-center justify-start h-fit w-full max-md:gap-2 px-3  py-1  pb-3 gap-5 border-b border-gray-300' >
            <div className={`flex items-center justify-center text-nowrap  max-md:text-base max-lg:text-lg text-xl rounded-lg text-slate-500 py-2 px-5 font-semibold  ${activeTab == "Photos" ? " border-b-2 border-orange-400   " : "border-0 "}  max-md:w-1/2 w-auto cursor-pointer`}
              onClick={() => handleActiveTab("Photos")}  >Latest Photos</div>
            <div className={`flex items-center justify-center text-nowrap  max-md:text-base max-lg:text-lg text-xl font-semibold text-slate-500  max-md:w-1/2 w-auto focus:bg-orange-400 py-2 px-5 rounded-lg cursor-pointer ${activeTab == "Videos" ? "border-b-2 border-orange-400  " : "border-0 "} `} onClick={() => handleActiveTab("Videos")}  >Latest Videos</div>
          </div>
          <div className=' flex  item-start justify-start w-full  h-fit max-md:gap-2 gap-5 px-3 ' >

            {

              activeTab == "Photos" ?

                allPhotos == null ? <p className='w-full text-left mt-5' > Loading..... </p>
                  :
                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 w-full ">
                  {allPhotos.map((data, index) => (
                    <img
                      key={index}
                      src={data}
                      alt={`img-${index}`}
                      className="w-full rounded-lg mb-4 break-inside-avoid"
                    />
                  ))}
                </div>
                :
                allVideos.map((data, idx) => (
                  <div key={idx} className=' flex items-center justify-center w-full h-fit rounded-md border border-slate-500' >
                    <video src={data} autoPlay muted className=' h-full w-full rounded-md ' ></video>
                  </div>
                ))

                 }

          </div>

          <div>

          </div>
        </div>
      
       <div className=' flex flex-col  w-full  items-start justify-center border border-gray-300 rounded-md shadow  gap-3 '  >
        
          <div className=' flex items-center  justify-start w-full px-4 py-3 font-semibold text-lg text-gray-600 border-b-2 border-gray-300 bg-white rounded-md'  >
             Frequently Ask Questions
         </div>

        <div className='flex p-2 w-full  items-start justify-start' >

         <AccordionTransition/>
        </div>   
       


       </div>
  

    </div>
  )
}

export default AllVendors