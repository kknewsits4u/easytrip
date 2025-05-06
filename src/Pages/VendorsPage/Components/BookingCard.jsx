import React from 'react';

const BookingCard = () => {
  return (
    <div className="w-full bg-white rounded shadow p-2 flex flex-col md:flex-row justify-between items-end  transition-all duration-300 hover:shadow-xl">
      
      <div className="flex flex-col text-left  gap-2 w-full md:w-2/3 text-gray-700">
        <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1">Booking Details</h2>
        <p className='text-sm md:text-base lg:text-lg'  ><span className="font-semibold text-slate-600">Client Name:</span> Krishna Kant</p>
        <p className='text-sm md:text-base lg:text-lg'><span className="font-semibold text-slate-600">Contact No.:</span> +91-7852463981</p>
        <p className='text-sm md:text-base lg:text-lg' ><span className="font-semibold text-slate-600">Address:</span> Agra, Uttar Pradesh - 282106</p>
        <p className='text-sm md:text-base lg:text-lg'><span className="font-semibold text-slate-600">Booking Date:</span> 12 June 2025</p>
        <p className='text-sm md:text-base lg:text-lg'>
          <span className="font-semibold text-slate-600">Status:</span>
          <span className="ml-2 inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            Pending
          </span>
        </p>
      </div>


      <div className="flex  items-center h-full justify-start mt-5 gap-3 w-full md:w-auto ">
        <button className="px-3 py-1 bg-orange-400 text-white font-semibold rounded hover:bg-green-600 transition  text-nowrap ">
          Confirm Booking
        </button>
        <button className="px-3 py-1 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
