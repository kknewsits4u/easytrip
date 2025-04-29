import React from 'react'

const BlogCard = ({data, idx}) => {
  return (
    <div
    key={idx}
    className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer text-left"
  >
    <div className="w-full h-40 md:h-60 lg:h-60 overflow-hidden rounded-t-xl">
      <img
        src={data.image}
        alt="Blog"
        className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
      />
    </div>

    <div className=" p-2  lg:px-4  flex flex-col gap-2">
      <h2 className="text-base font-semibold text-gray-800 truncate">
        {data.heading}
      </h2>
      <p className="text-gray-600 text-xs line-clamp-2">
        {data.description}
      </p>
      <span className="text-xs text-gray-700 font-medium">
        {data.date}
      </span>
    </div>
  </div>
  )
}

export default BlogCard