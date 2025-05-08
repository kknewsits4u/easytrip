import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {

  const iconsData = [
    {
      icon: "/icons/facebook (1).png",
      url: ""
    },
    {
      icon: "/icons/instagram.png",
      url: ""
    },
    {
      icon: "/icons/whatsapp.png",
      url: ""
    },
    {
      icon: "/icons/youtube.png",
      url: ""
    },
  ]

  const categoriesData =[
    {
      city:"Delhi",
      list:[
        {
          text:"Banquet / Party Halls",
          link:"",
        },
        {
          text:"Wedding Planner",
          link:"",
        },
        {
          text:"Photographers",
          link:"",
        },
        {
          text:"Mehndi Artist",
          link:"",
        },
        {
          text:"Resorts",
          link:"",
        },
      ]
    },
    {
      city:"Banglore",
      list:[
        {
          text:"Entertainmenters",
          link:"",
        },
        {
          text:"Makeup Artist",
          link:"",
        },
        {
          text:"Mehndi Artist",
          link:"",
        },
        {
          text:"Wedding Planner",
          link:"",
        },
        {
          text:"Jwellery On Rent",
          link:"",
        },
      ]
    },
    {
      city:"Kolkata",
      list:[
        {
          text:"Photographers",
          link:"",
        },
        {
          text:"Decorators",
          link:"",
        },
        {
          text:"Wedding Planner",
          link:"",
        },
        {
          text:"Banquet / Party Halls",
          link:"",
        },
        {
          text:"Hotels",
          link:"",
        },
      ]
    },
    {
      city:"Mumbai",
      list:[
        {
          text:"Hotels",
          link:"",
        },
        {
          text:"Mehndi Artists",
          link:"",
        },
        {
          text:"Makeup Artist",
          link:"",
        },
        {
          text:"Wedding Planner",
          link:"",
        },
        {
          text:"Catering Service",
          link:"",
        },
      ]
    },
    {
      city:"Grurugram",
      list:[
        {
          text:"Wedding Planner",
          link:"",
        },
        {
          text:"Makeup Artists",
          link:"",
        },
        {
          text:"Decorators",
          link:"",
        },
        {
          text:"Hotels",
          link:"",
        },
        {
          text:"Party Hall",
          link:"",
        },
      ]
    },
    {
      city:"Chennai",
      list:[
        {
          text:"Wedding Planner",
          link:"",
        },
        {
          text:"Makeup Artists",
          link:"",
        },
        {
          text:"Decorators",
          link:"",
        },
        {
          text:"Sangeet Coreographers",
          link:"",
        },
        {
          text:"Catering Service",
          link:"",
        },
      ]
    },
  ]


  return (
    <div className="w-full flex flex-col  items-center justify-between bg-black h-fit shadow-md shadow-gray-300 rounded-sm pt-5 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center justify-between w-full max-w-[1280px]  h-fit min-h-60  border-b border-gray-800 gap-5 pb-3">
      {
        categoriesData.map((data, index)=>
          <div key={index} className=" flex flex-col h-fit items-center md:items-start  text-gray-400 text-md gap-2">
          <h1 className=" text-gray-200 text-xl mb-2 ">{data.city}</h1>
           {
            data.list.map((d , idx)=>
             <a href={d.link}  ><p  className=" hover:underline hover:text-white hover:font-medium" >{d.text}</p></a>
            )
           }
        </div>
        )
      }

      </div>

      <div className=" flex flex-col md:flex-row items-start justify-between h-fit bg-black w-full border-b border-gray-800 gap-5 py-3 max-w-[1280px] max-md:divide-y divide-slate-800">

        <div className="  flex flex-col w-full md:w-auto items-center md:items-start justify-start gap-2 max-md:pb-4 ">
          <div className=" flex items-center justify-start gap-5 ">
            <a href="/"><h1 className=" text-white text-3xl ">Aarambh<span className=" text-red-500 ">s</span>.in  </h1></a>
          </div>
          <p className=" text-white opacity-70 text-sm">
            Call our 24-hour helpline
          </p>
          <h1 className="text-white text-sm">
            <span className=" mr-2">
              <LocalPhoneIcon />
            </span>
            +91-78459 62545
          </h1>
          <h1 className="text-white text-sm">
            <span className=" mr-2">
              <EmailIcon />
            </span>
            info.aarambhs.in@help.com
          </h1>
        </div>

        <div className=" flex items-start  justify-center flex-col h-fit gap-10  w-full md:w-auto max-md:pb-4">
          <div className=" flex flex-col h-fit gap-5 w-full max-md:items-center items-start  justify-between">
            <h1 className=" text-white text-lg">Connect</h1>
            <div className=" flex items-end justify-center gap-5 ">

              {
                iconsData.map((data, index) =>
                  <div  key={index} className=" flex items-center justify-center w-10  h-10  rounded-full">
                    <a href={data.url} >
                      <img
                      src={data.icon}
                      alt="social icon"
                      className="w-full h-full object-cover object-center rounded-full "
                       />
                    </a>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        
        <div className=" flex items-start  justify-center flex-col h-fit gap-10  w-full md:w-auto ">
          <div className=" flex flex-col h-fit gap-3 w-full max-md:items-center items-start justify-between">
            <h1 className=" text-white text-lg">Subscribe </h1>
            <div className=" flex items-end justify-center rounded-md w-full h-8 md:h-10 border border-orange-400 ">
              <input type="email" placeholder="Enter email" className=" h-full w-7/10 items-center px-3 focus:outline-0  bg-white text-gray-800  font-medium text-base rounded-tl-md rounded-bl-md"  />
              <button  type="button" className=" h-full w-3/10 bg-orange-400 text-white rounded-tr-md rounded-br-md text-sm  md:text-base font-medium   "  >SUBCRIBE</button>
            </div>
            <p className=" text-sm text-gray-200" >Register for get updates from <a href="/">Aarambh<span className=" text-red-500 " >s</span>.in</a> </p>
          </div>
        </div>
         

      </div>

    <div className=" flex items-center justify-center h-fit bg-black w-full rounded-bl-md  rounded-br-md p-5">
        <p className=" w-full text-white text-md ">
          @Aarambh<span className=" text-red-500 ">s</span>.in 2025, All Rights
          Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
