import React from 'react'

const CommonVendorCard = ({data, city}) => {
  return (
    <div className='border border-red flex flex-col  w-full max-md:h-[200px] max-lg:h-[200px] xl:h-[280px] rounded-md border-gray-300 ' >
       <div className='flex items-center justify-center rounded-tl-md rounded-tr-md w-full h-[80%] ' >
         <img src={data.image} alt="vendor_image" className=' w-full h-full object-cover object-center  rounded-tl-md rounded-tr-md '   />
       </div>
       <div className=' flex w-full h-[20%] p-1 justify-center items-center' >
           <p  className='max-md:text-sm max-lg:text-base xl:text-md ' >Find {data.type} in {city} </p>
       </div>

    </div>
  )
}

export default CommonVendorCard