import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex flex-col w-full min-h-10 h-fit gap-3 pb-2">
      <div className=" flex items-start justify-start w-full h-fit gap-5">
        <div className=" flex items-center justify-center h-15 w-15 rounded-full  ">
          <img
            src="https://i.pinimg.com/474x/b7/82/71/b7827196e9d11e9bee87adfcce985d0e.jpg"
            alt="user_image"
            className=" w-full h-full object-center object-cover rounded-full "
          />
        </div>
        <div className="flex flex-col items-start justify-start ">
          <h1 className=" text-md lg:text-xl xl:text-lg text-left font-semibold text-slate-700 ">
            Mr. Krishna Sharma
          </h1>
          <p className=" text-xs md:text-sm lg:text-base font-normal font-sans  ">
            22 April, 2025 | 04:22 PM{" "}
          </p>
        </div>
      </div>
      <div className=" flex items-start justify-start w-full text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laborum in consectetur cumque odio, facere similique dolor sapiente
          totam ab minus deleniti corporis nisi fugiat officia odit deserunt
          error itaque.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
