import React from "react";
import { blogData } from "../Store/DataStore";
import BlogCard from "./BlogCard";

const Recommonded = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-lg lg:text-2xl xl:text-2xl  font-bold text-slate-600 mb-4 text-left">
        Latest Top Blogs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogData?.map((data, idx) => (
          <BlogCard  data={data}  idx={idx}   />
        ))}
      </div>
    </div>
  );
};

export default Recommonded;
