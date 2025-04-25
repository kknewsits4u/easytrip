import React from "react";
import { blogData } from "../Store/DataStore";

const Recommonded = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-lg lg:text-2xl xl:text-2xl  font-bold text-slate-600 mb-4 text-left">
        Latest Top Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogData?.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer text-left"
          >
            <div className="w-full h-52 md:h-60 lg:h-64 overflow-hidden rounded-t-xl">
              <img
                src={data.image}
                alt="Blog"
                className="w-full h-full object-cover object-center hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {data.heading}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                {data.description}
              </p>
              <span className="text-xs text-gray-500 font-medium">
                {data.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommonded;
