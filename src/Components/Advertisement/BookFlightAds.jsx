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
    <div className='flex items-center justify-between bg-white w-full  h-fit shadow-md border border-gray-200 rounded gap-5'  >
      <div className='flex flex-col items-center justify-between w-full md:w-[70%] h-fit  gap-3 p-5' >
        <h1 className='w-full text-left font-semibold text-black border-b-2 border-blue-500 pb-2 text-md lg:text-2xl' >Book Your Special Flight Today</h1>
        <div className=' flex items-center justify-between  w-full h-fit sm:h-30 relative' >
          <div className='flex flex-col sm:flex-row items-center justify-center border border-gray-300 rounded-tl-sm rounded-bl-sm w-1/2 h-full gap-5 sm:gap-10 p-2'  >

            <div className='flex items-center justify-center w-20 h-20 rounded-full shadow-md shadow-blue-400  ' >
              <img src="https://i.pinimg.com/736x/3e/8c/3d/3e8c3ddadc8226e36c8c279351b58dde.jpg" alt="departure" className=' w-full h-full object-center object-cover rounded-full ' />
            </div>
            <h1 className='text-md md:text-3xl lg:text-4xl font-bold text-blue-500'  >Mumbai </h1>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center border w-1/2 h-full   border-gray-300 rounded-tr-sm rounded-br-sm border-l-0  gap-5 sm:gap-10 p-2'  >
            <div className='flex items-center justify-center w-20 h-20 rounded-full   shadow-md shadow-blue-400  ' >
              <img src="https://i.pinimg.com/736x/d4/df/95/d4df9549777d027d88fe8937aa7a8a00.jpg" alt="destination" className=' w-full h-full object-center object-cover rounded-full ' />

            </div>
            <h1 className=' text-md md:text-3xl lg:text-4xl font-bold text-blue-500'  >Delhi </h1>
          </div>
          <div className='absolute  top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 rounded-full  shadow-md p-3 h-10 md:h-15 w-10 md:w-15 bg-white '  >
            <img src="/arro.jpg" alt="exchanger" className='w-full h-full object-center object-cover rounded-full' />
          </div>
        </div>
        <div className=' flex flex-col md:flex-row items-center justify-between w-full h-fit text-md font-semibold  gap-3' >

          <div className=' flex items-center justify-center w-full md:w-1/4 '  >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={flight}
                label="Flight"
                onChange={handleChange}
              >
                <MenuItem value={"indigo"}>Indigo</MenuItem>
                <MenuItem value={"airindia"}>Air India</MenuItem>
                <MenuItem value={"Spicejet"}>Spice Jet</MenuItem>
              </Select>
            </FormControl>
          </div>
         <div className='flex text-sm   items-center justify-between p-5 w-full  lg:w-1/2 '  >
         <h1  className='text-sm xl:text-lg' >Price <br/> <span className=' text-blue-500'  >$ 30.00</span></h1>
          <h1   className='text-sm xl:text-lg' >Departure <br/> <span  className=' text-blue-500'  >07:00 AM</span></h1>
          <h1  className='text-sm xl:text-lg' >Arrival <br/> <span className=' text-blue-500'   >09:00 AM</span></h1>
         </div>
          <div className='w-full lg:w-1/4  h-full flex items-center justify-center  ' >
          <Button  variant='contained' fullWidth  className='order-1' style={{ background: "linear-gradient(to right, #ff512f, #dd2476)" }}  >Book Now</Button>
          </div>

        </div>

      </div>
      <div className='hidden md:flex items-center justify-center h-70 w-[30%] '  >
        <img src="/aero1.jpg" alt="aeroplane" className='w-full h-full object-center object-cover rounded ' />

      </div>
    </div>
  )
}

export default BookFlightAds