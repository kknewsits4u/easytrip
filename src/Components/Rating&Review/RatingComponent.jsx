import React from 'react'

const RatingComponent = () => {

 const ratingData = 
 [
  { stars: 5, percent: 85, reviews: 48, color: "bg-green-500" },
  { stars: 4, percent: 6, reviews: 3, color: "bg-green-400" },
  { stars: 3, percent: 2, reviews: 1, color: "bg-yellow-400" },
  { stars: 2, percent: 2, reviews: 1, color: "bg-orange-400" },
  { stars: 1, percent: 0, reviews: 0, color: "bg-gray-300" },
]


  return (
    
    <div className="flex flex-col w-full h-full bg-white p-4 rounded shadow-md gap-4">

    <div className="flex items-center justify-between">
      <p className="font-semibold max-md:text-lg max-lg:text-lg text-xl text-gray-800">Rating Distribution</p>
      <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded">
        <span className="text-sm font-bold">4.8</span>
      </div>
    </div>

    <p className="text-sm text-gray-600">53 reviews</p>

    <div className="flex flex-col gap-3">
      {ratingData.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <input type="checkbox" className="accent-green-500" />
          <div className="flex items-center gap-1 w-10">
            <span className="text-sm font-semibold">{item.stars}</span>*
          </div>
          <div className="flex-1 bg-gray-200 h-2 rounded relative overflow-hidden">
            <div
              className={`${item.color} h-full rounded`}
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-600 w-12 text-right">
            {item.reviews} review{item.reviews !== 1 && "s"}
          </span>
        </div>
      ))}
    </div>

    <p className="text-xs text-gray-500 italic mt-2">
      Last Review Updated on 28 Nov 2024
    </p>
  </div>
  )
}

export default RatingComponent