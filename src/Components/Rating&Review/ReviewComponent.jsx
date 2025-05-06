import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Star } from 'lucide-react';



const StarRating = ({ rating, onRate }) => {
  return (
    <div className="flex space-x-1 cursor-pointer">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          fill={star <= rating ? '#facc15' : 'none'}
          stroke="#facc15"
          onClick={() => onRate(star)}
        />
      ))}
    </div>
  );
};


const ReviewComponent = () => {

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);


  return (
    <div className=" flex flex-col w-full gap-3 bg-white shadow-md h-full rounded py-3 px-5 ">
      <div className=" flex w-full  items-center justify-start  text-xs  md:text-sm lg:text-md border-b-2 border-slate-300 h-fit pb-2">
        <h1 className="font-semibold max-md:text-lg max-lg:text-lg text-xl text-gray-800">Write a Review </h1>
      </div>
      <div className=" flex flex-col items-start justify-start gap-3 text-left">
      
        <form className=" w-full"  >
          <div className=" flex flex-col items-start justify-start gap-5 text-left w-full">
            <h1 className=" text-sm  font-semibold text-slate-600  ">
              Rate Vendor
            </h1>
            <div className=" flex items-center justify-start gap-3">
              <div>
                <label className="block mb-1 font-medium">Your Rating:</label>
                <StarRating rating={rating} onRate={setRating} />
              </div>
            </div>
            <textarea
              className="w-full p-2 border border-slate-400 rounded focus:outline-0  "
              rows={5}
              placeholder="Write something positive....."
            ></textarea>
            <Button variant="contained " fullWidth  className=" btn-grad  " sx={{   color:"rgb(255,255,255)" }} >Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReviewComponent