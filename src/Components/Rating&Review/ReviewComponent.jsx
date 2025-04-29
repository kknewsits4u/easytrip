import { Button } from '@mui/material'
import React from 'react'

const ReviewComponent = () => {
  return (
    <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-fit min-h-50  rounded py-3 px-5 ">
             <div className=" flex w-full  items-center justify-start  text-xs  md:text-sm lg:text-md border-b-2 border-slate-300 h-fit pb-2">
               <h1 className="font-semibold text-lg text-gray-600">Write a Review </h1>
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
                       <div key={i} className=" flex border border-slate-300 w-5 h-5 cursor-pointer hover:border-amber-600 rounded items-center justify-center text-xs  hover:text-amber-600 ">
                         {i}
                       </div>
                     ))}
                   </div>
                   <textarea
                     className="w-full p-2 border border-slate-400 rounded focus:outline-0  "
                     rows={5}
                     placeholder="Write something positive....."
                   ></textarea>
                   <Button variant="contained " fullWidth className=" btn-grad" >Submit</Button>
                 </div>
               </form>
             </div>
           </div>
  )
}

export default ReviewComponent