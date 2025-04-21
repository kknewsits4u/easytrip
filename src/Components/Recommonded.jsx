import { Button } from '@mui/material'
import React from 'react'
import { hotelData } from './Store/HotelsData'

const Recommonded = () => {



  return (
    <div className='flex flex-col  items-center justify-between gap-5 w-full xl:w-[80%] h-fit bg-white shadow-md rounded-sm  shadow-gray-200 p-5 mt-5 ' >

      <h1 className=' text-2xl font-semibold w-full text-left py-2 border-b-2 border-blue-500'   >Recommonded Hotels </h1>
      <div className=' grid grid-cols-2 w-full h-fit gap-5' >

        {
          hotelData?.slice(0,4).map((data, idx) =>
            <div key={idx} className=' w-full h-[15rem] flex  border border-gray-300 rounded' >
              <div className=' flex items-center justify-center rounded  w-9/20 h-full'  >
                <img src={data.image} alt="hotel image " className=' w-full h-full object-cover object-center rounded' />
              </div>
              <div className=' flex flex-col text-left px-5 p-2 w-11/20 items-start justify-between  '>
                   <h1 className='text-md xl:text-xl font-semibold text-blue-500' >{data.name}</h1>
                   <p className='text-sm xl:text-lg' >Price : <span className=' text-green-500 font-semibold'>{data.price}</span></p>
                   <p className='text-sm xl:text-lg' >Location : <span className='text-blue-500' > {data.location}</span></p>
                   <p className=' text-left text-sm xl:text-lg '  >{data.details}</p>
                   <div className=' flex items-center justify-between w-full gap-5' >
                      <Button variant='outlined' className='text-nowrap' >Get Details</Button>
                      <Button variant='contained' className='text-nowrap' >Book Now </Button>
                   </div>

              </div>
            </div>

          )
        }

      </div>
    </div>
  )
}

export default Recommonded