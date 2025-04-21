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
    <div className='flex items-center justify-between bg-white w-full xl:w-4/5 h-fit shadow-md border border-gray-200 rounded gap-5'  >
      <div className='flex flex-col items-center justify-between w-[70%] h-full gap-3 p-5' >
        <h1 className='w-full text-left font-semibold text-black border-b-2 border-blue-500 pb-2 text-2xl' >Book Your Special Flight Today</h1>
        <div className=' flex items-center justify-between  w-full h-30 relative' >
          <div className='flex items-center justify-center border border-gray-300 rounded-tl-sm rounded-bl-sm w-1/2 h-full gap-10'  >

            <div className='flex items-center justify-center w-20 h-20 rounded-full shadow-md shadow-blue-400  ' >
              <img src="https://i.pinimg.com/736x/3e/8c/3d/3e8c3ddadc8226e36c8c279351b58dde.jpg" alt="departure" className=' w-full h-full object-center object-cover rounded-full ' />
            </div>
            <h1 className=' text-4xl font-bold text-blue-500'  >Mumbai </h1>
          </div>
          <div className='flex items-center justify-center border w-1/2 h-full   border-gray-300 rounded-tr-sm rounded-br-sm border-l-0 gap-10'  >
            <div className='flex items-center justify-center w-20 h-20 rounded-full   shadow-md shadow-blue-400  ' >
              <img src="https://i.pinimg.com/736x/d4/df/95/d4df9549777d027d88fe8937aa7a8a00.jpg" alt="destination" className=' w-full h-full object-center object-cover rounded-full ' />

            </div>
            <h1 className=' text-4xl font-bold text-blue-500'  >Delhi </h1>
          </div>
          <div className='absolute  top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 rounded-full  shadow-md p-3 h-15 w-15 bg-white '  >
            <img src="/arro.jpg" alt="exchanger" className='w-full h-full object-center object-cover rounded-full' />
          </div>
        </div>
        <div className=' flex items-center justify-between w-full h-15 text-md font-semibold' >

          <div className=' flex items-center justify-center w-1/4'  >
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
          <h1  className='text-sm xl:text-xl' >Price : <span className=' text-blue-500'  >$ 30.00</span></h1>
          <h1   className='text-sm xl:text-xl' >Departure : <span  className=' text-blue-500'  >07:00 AM</span></h1>
          <h1  className='text-sm xl:text-xl' >Arrival : <span className=' text-blue-500'   >09:00 AM</span></h1>
          <Button  variant='contained' >Book Now</Button>


        </div>

      </div>
      <div className=' flex items-center justify-center h-70 w-[30%] '  >
        <img src="/aero1.jpg" alt="aeroplane" className='w-full h-full object-center object-cover rounded ' />

      </div>
    </div>
  )
}

export default BookFlightAds