import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const BookFlightAds = () => {


  const [flight, setFlight] = React.useState('');

  const handleChange = (event) => {
    setFlight(event.target.value);
  };


  return (
    <div className='grid grid-cold-1 md:grid-cols-[2fr_1fr] w-full  h-fit   rounded gap-5'  >
      <div className='flex flex-col shadow-md  rounded-md bg-white items-center justify-between w-full h-fit lg:h-100 gap-3 p-5' >
        <h1 className='w-full text-left font-semibold text-black  pb-2 text-md lg:text-4xl' >Special Offers In Famous Cities</h1>
       
        <div className=' grid grid-cols-1 md:grid-cols-2 items-center justify-between  w-full h-fit relative  gap-3' >
           <div  className='relative flex items-center justify-center h-60 rounded-md w-full shadow-md shadow-gray-300'  >
                <img src="https://i.pinimg.com/474x/37/03/b6/3703b6d7a30877eb1ede0b93c90c966a.jpg" alt="image"  className=' flex w-full h-full object-cover object-top rounded-md' />
                <div className=" flex w-full h-full absolute top-0 left-0 rounded-md items-end justify-start  p-5"  style={{  backgroundColor:"rgba(0,0,0,0.05)" , backdropFilter:"blur(1px)" }}  >
                   <h1 className="text-white font-bold text-2xl" style={{    textShadow:" 2px 2px 8px rgba(0, 0, 0, 0.6)"  }} >Chennai</h1>
               </div>
           </div>
           <div  className='relative flex items-center justify-center h-60 rounded-md w-full shadow-md shadow-gray-300'  >
                <img src="https://i.pinimg.com/474x/67/63/b2/6763b2e72da8e4f263b5e3e8ef93386d.jpg" alt="image"  className=' flex w-full h-full object-cover object-top rounded-md' />
                <div className=" flex w-full h-full absolute top-0 left-0 rounded-md items-end justify-start  p-5"  style={{  backgroundColor:"rgba(0,0,0,0.05)" , backdropFilter:"blur(1px)" }}  >
                   <h1 className="text-white font-bold text-2xl" style={{    textShadow:" 2px 2px 8px rgba(0, 0, 0, 0.6)"  }} >Banglore</h1>
               </div>
           </div>
    
        
        </div>

      </div>
      <div className='hidden md:flex bg-white items-center justify-center  h-100 w-full '  >
        <img src="https://i.pinimg.com/474x/05/3c/30/053c307c9d887899adb15eee1a75bc2e.jpg" alt="aeroplane" className='w-full h-full object-top object-cover rounded ' />

      </div>
    </div>
  )
}

export default BookFlightAds