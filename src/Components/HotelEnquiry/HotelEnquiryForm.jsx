import { Button, Switch, TextField } from '@mui/material'
import React, { useState } from 'react'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DatePicker from "react-datepicker";




const label = { inputProps: { "aria-label": "Switch demo" } };
const HotelEnquiryForm = () => {
 
  const [selectedDate, setSelectedDate] = useState(null);



  return (
    <div className="flex flex-col items-center justify-start gap-5 w-full h-full bg-white  shadow-md rounded border border-gray-100 px-5 py-3 ">
    <div className=" w-full flex items-center justify-between lg:justify-start  gap-3 ">
      <div className=" flex items-center justify-center h-fit w-fit bg-blue-500 px-2 lg:px-3 py-2  rounded-full text-white text-md font-semibold  ">
        <EmailIcon sx={{ fontSize: "18px" }} />
        <span className=" ml-2 text-nowrap text-[12px]  md:text-[12px] lg:text-[14px] ">
          Send Message
        </span>
      </div>
      <div className=" flex items-center justify-center h-fit w-fit bg-yellow-600  px-2 lg:px-3 py-2  rounded-full text-white text-md font-semibold ">
        <PhoneIcon sx={{ fontSize: "18px" }} />
        <span className=" ml-2 text-nowrap text-[12px]  md:text-[12px] lg:text-[14px]">
          View Contact
        </span>
      </div>
    </div>

    <h1 className=" w-full text-left font-semibold text-md text-gray-600">
      Hi, Sanjay Marriage Home
    </h1>
    <div className=" flex flex-col items-start w-full justify-start  text-left gap-6">
      <div className=" flex flex-col md:flex-row w-full gap-5  ">
        <TextField
          fullWidth
          placeholder="Fullname *"
          variant="standard"
          required
          disableUnderline
          sx={{
            input: {
              fontSize: "15px",
              paddingY: "8px",
              "::placeholder": {
                fontSize: "14px",
                color: "black",
              },
            },
          }}
        />
        <TextField
          fullWidth
          placeholder="Contact *  "
          variant="standard"
          required
          disableUnderline
          sx={{
            input: {
              fontSize: "15px",
              paddingY: "8px",
              "::placeholder": {
                fontSize: "14px",
                color: "black",
              },
            },
          }}
        />
      </div>
      <div className=" flex flex-col md:flex-row w-full gap-5   ">
        <TextField
          fullWidth
          placeholder="Email Address *"
          variant="standard"
          required
          disableUnderline
          sx={{
            input: {
              fontSize: "15px",
              paddingY: "8px",
              "::placeholder": {
                fontSize: "14px",
                color: "black",
              },
            },
          }}
        />

        <div className="flex w-full lg:w-1/2"  >
          <DatePicker

            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border-b  p-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholderText="Choose Date"
          />
        </div>




      </div>
      <div className=" flex w-full gap-5 flex-col md:flex-row  ">
        <TextField
          multiline
          fullWidth
          placeholder="Full details about function *"
          variant="standard"
          required
          disableUnderline
          sx={{
            input: {
              fontSize: "15px",
              paddingY: "8px",
              "::placeholder": {
                fontSize: "14px",
                color: "black",
              },
            },
          }}
        />
      </div>
      <div className=" flex max-md:flex-col flex-row items-start max:md:items-center justify-between w-full gap-5">
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "600", fontSize: "15px" }}
          >
            Function Type
          </FormLabel>
          <RadioGroup
            defaultValue="prewedding"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="prewedding"
              control={
                <Radio
                  sx={{
                    color: "#FF512F",
                    "&.Mui-checked": {
                      color: "#FF512F",
                    },
                  }}
                />
              }
              label="Pre-Wedding"
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
              }}
            />
            <FormControlLabel
              value="wedding"
              control={
                <Radio
                  sx={{
                    color: "#FF512F",
                    "&.Mui-checked": {
                      color: "#FF512F",
                    },
                  }}
                />
              }
              label="Wedding"
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
              }}
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "600", fontSize: "15px" }}
          >
            Function Time
          </FormLabel>
          <RadioGroup
            defaultValue="evening"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="evening"
          >
            <FormControlLabel
              value="evening"
              control={
                <Radio
                  sx={{
                    color: "#FF512F",
                    "&.Mui-checked": {
                      color: "#FF512F",
                    },
                  }}
                />
              }
              label="Evening"
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
              }}
            />
            <FormControlLabel
              value="day"
              control={
                <Radio
                  sx={{
                    color: "#FF512F",
                    "&.Mui-checked": {
                      color: "#FF512F",
                    },
                  }}
                />
              }
              label="Day"
              name="day"
              sx={{
                "& .MuiFormControlLabel-label": { fontSize: "0.9rem" },
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className=" flex w-full  items-center  justify-start  gap-10 ">
        <p className="font-semibold text-nowrap text-md text-gray-600">
          Notify me on Whatsapp
        </p>
        <Switch {...label} defaultChecked />
      </div>
    </div>

    <div className="flex items-center justify-center w-full  font-semibold text-md text-gray-600">
      <Button
        fullWidth
        variant="contained"
        className="btn-grad"
        sx={{
          backgroundColor: "#e53935",
          color: "#fff",
          fontWeight: 700,
          fontSize: "15px",
          paddingY: "10px",

        }}
      >
        Make Enquiry
      </Button>
    </div>
  </div>
  )
}

export default HotelEnquiryForm