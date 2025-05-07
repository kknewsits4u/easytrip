import React, { useState } from "react";

const categoryData = [
  {
    title: "Venues",
    description: "Banquet Halls, Marriage Garden / Lawns",
    image:
      "https://i.pinimg.com/474x/7f/10/0d/7f100d8aa7875f9fcf4bc5aa4fddfde9.jpg",
    subcategories: [
      "View All Venues",
      "Banquet Halls",
      "Marriage Garden / Lawns",
      "Wedding Resorts",
      "Small Function / Party Halls",
      "Destination Wedding Venues",
      "Kalyana Mandapams",
      "4 Star & Above Wedding Hotels",
    ],
    color: "bg-indigo-100",
  },
  {
    title: "Photographers",
    description: "Photographers",
    image:
      "https://i.pinimg.com/474x/ac/7a/8b/ac7a8b92f43677947e46d32f50ab7b99.jpg",
    subcategories: ["Candid", "Traditional", "Pre Wedding"],
    color: "bg-[#B4EBE6]",
  },
  {
    title: "Makeup",
    description: "Bridal Makeup, Family Makeup",
    image:
      "https://i.pinimg.com/474x/b7/a5/a4/b7a5a4340d172ed6f8bc51a3aabfffdd.jpg",
    subcategories: ["Bridal Makeup", "Party Makeup", "Airbrush Makeup"],
    color: "bg-red-100",
  },
  {
    title: "Pre Wedding Shoot",
    description: "Pre Wedding Shoot Locations",
    image:
      "https://i.pinimg.com/474x/84/73/62/8473621a18546874b771bacb821b3681.jpg",
    subcategories: ["Locations", "Ideas", "Packages"],
    color: "bg-indigo-100",
  },
  {
    title: "Planning & Decor",
    description: "Wedding Planners, Decorators",
    image:
      "https://i.pinimg.com/474x/94/e1/66/94e166571b45f16ff2553f1df6a06b45.jpg",
    subcategories: ["Planners", "Event Designers", "Decor Services"],
    color: "bg-yellow-100",
  },
  {
    title: "Bridal Wear",
    description: "Bridal Lehengas,Silk Sarees",
    image:
      "https://i.pinimg.com/474x/c7/87/c3/c787c3a68d6010b7b6b80e19a9cf0d80.jpg",
    subcategories: ["Lehengas", "Sarees", "Gowns"],
    color: "bg-[#F6F1DE]",
  },
];

const WeddingCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(index === activeCategory ? null : index);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-3  ">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md lg:text-xl xl:text-2xl text-left font-bold text-slate-700 mb-3 lg:mb-5">
          Wedding Categories
        </h2>
     
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.map((cat, index) => (
          <div key={index} className="w-full ">
            <div
              className={`rounded-lg p-4 ${cat.color} cursor-pointer flex justify-between items-center  text-left    overflow-hidden relative hover:shadow-lg shadow-orange-100  `}
              onClick={() => toggleCategory(index)}
            >
              <div>
                <h3 className="font-semibold  text-md text-slate-900 ">
                  {cat.title} <span className="text-sm">▾</span>
                </h3>
                <p className="text-[10px] md:text-[12px] lg:text-[15px] text-gray-700">{cat.description}</p>
              </div>
              <img
                src={cat.image}
                alt={cat.title}
                className="w-25 h-30 object-cover ml-2 rounded-full absolute right-[-15px] top-[-10px] "
              />
            </div>

            {activeCategory === index && (
              <div className="relative">
                <div className="absolute top-[-5px] left-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

                <div className="bg-white  p-4 rounded   text-left shadow-md">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2  text-sm">
                    {cat.subcategories.map((item, i) => (
                      <li
                        key={i}
                        className=" text-slate-800 hover:text-orange-500 hover:font-medium cursor-pointer "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCategories;
