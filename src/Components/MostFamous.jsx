import { Button } from '@mui/material'
import React from 'react'
import { hotelData } from './Store/HotelsData'

const MostFamous = () => {



  return (
    <div className='flex flex-col  items-center justify-between gap-5 w-full  h-fit bg-white shadow-md rounded-sm  shadow-gray-300  p-5' >

      <h1 className="text-md lg:text-2xl font-semibold w-full text-left py-2 "  >Most Famous Hotels</h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-fit gap-5' >

        {
          hotelData?.map((data, idx) =>
            <div key={idx} className=' w-full h-[25rem] flex flex-col border border-gray-300 rounded shadow-md' >
              <div className=' flex items-center justify-center rounded w-full  h-[50%]'  >
                <img src={data.image} alt="hotel image " className=' w-full h-full object-cover object-top rounded' />
              </div>
              <div className=' flex flex-col p-2 h-1/2 w-full items-start justify-between text-md text-left'>
                <h1 className='text-lg xl:text-xl font-semibold text-black' >{data.name}</h1>
                <p className=' text-sm xl:text-md'>Price : <span className=' text-green-700 font-semibold '>{data.price}</span></p>
                <p  className=' text-sm xl:text-md'>Location : <span className='text-green-700'>{data.location}</span></p>
                <p className=' text-left text-sm xl:text-md '  >{data.details}</p>
                <div className=' flex items-center justify-between w-full gap-2' >
                  <Button variant='outlined' className=' text-nowrap'  style={{ border: " 1px solid #dd2476", color: "#dd2476" }} >Get Details</Button>
                  <Button variant='contained'className=' text-nowrap text-sm'    style={{
                    background: "linear-gradient(to right, #ff512f, #dd2476)",
                  }} >Book Now </Button>
                </div>

              </div>
            </div>

          )
        }

      </div>
    </div>
  )
}

export default MostFamous

