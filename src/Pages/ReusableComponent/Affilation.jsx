
import React from "react";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AffiliatePage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("For all time");
  const options = ["For all time", "Month", "Week", "Today"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <>
      <div
        className="hidden lg2:block mb-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="8" fill="#C10932" />
          <path
            d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="min-h-screen flex justify-center p-4 lg2:p-0 lg2:pr-4">
        <div className="w-full max-w-s  overflow-hidden ">
          {/* Profile Section */}
          <div className="w-full max-w-s bg-white rounded-lg shadow mb-5">
            <div className="p-3 flex items-center justify-between">
              {/* Left side - Avatar + Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">S</span>
                </div>
                <span className="text-gray-800 font-medium">shivamtrakwin</span>
              </div>

              {/* Right arrow */}
              {/* <span className="text-gray-400 text-lg">{">"}</span> */}
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.69922 11.8008L6.69922 6.80078L1.69922 1.80078"
                  stroke="#9CA3AF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-4 border-b bg-white rounded-t-2xl ">
            {/* Dropdown Header */}
            <div className="relative mb-3">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center focus:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-red" />
                  <span className="font-semibold text-black text-lg">
                    {selected}
                  </span>
                </div>
                {/* <ChevronDown
                className={`w-4 h-4 text-gray-600 transform transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              /> */}
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-6"
                >
                  <path
                    d="M0.166016 0.666016L5.99935 6.49935L11.8327 0.666016H0.166016Z"
                    fill="#222222"
                  />
                </svg>
              </button>

              {/* Red underline */}
              {open && <div className="h-0.5 bg-red w-50"></div>}

              {/* Dropdown Options */}
              {open && (
                <div className="absolute z-20 mt-1 w-50 bg-white rounded shadow">
                  {options.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelect(option)}
                      className={`px-3 py-2 text-sm cursor-pointer font-semibold ${
                        option === selected ? "text-black" : "text-gray-500"
                      } hover:bg-gray-100`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div
              className="space-y-2 text-vsm  text-[#525252] "
              style={{
                fontFamily: "Roboto",
                fontWeight: 600, // Should be a number or valid keyword like "normal" or "bold"
                fontSize: "16px",
                fontStyle: "normal", // Or "italic", "oblique", etc.
              }}
            >
              <div className="flex justify-between border-b pb-1 border-[#DBDBDB]">
                <span>Transition:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>Registration:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>First Deposits:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>Number Deposits:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>Link Clicks:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>Total Deposit:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>Total Withdrawal:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between border-b border-[#DBDBDB] pb-1">
                <span>Your Commission:</span>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Income Section */}
          <div className="p-4 bg-gradient-to-l from-[#C10932] to-[#5B0418] text-white text-center font-semibold rounded-b-2xl">
            Income: 0 $
          </div>

          {/* Filters Section */}
          <div className="py-4 px-0 space-y-3 text-ssm font-medium">
            {/* Date Range */}
            <div className="flex items-center justify-center rounded px-1 py-2 text-gray  bg-white ">
              <span>08/08/2025 - 08/09/2025</span>
              <Calendar className="w-4 h-4" />
            </div>

            {/* Dropdowns */}
            <select className="w-full rounded px-3 py-2  text-gray bg-white">
              <option>All sources</option>
            </select>

            <select className="w-full rounded px-3 py-2  text-gray bg-white">
              <option>All Links</option>
            </select>

            <select className="w-full rounded px-3 py-2  text-gray bg-white">
              <option>All Countries</option>
            </select>

            {/* Apply Button */}
            <button className="w-full bg-red text-white rounded py-2 font-medium ">
              Apply
            </button>
          </div>

          {/* Legend Section */}
          <div className="h-50 bg-white rounded-xl">
            <div className="p-4 flex flex-wrap gap-2 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <span className="flex items-center space-x-1 bg-lightgrayBg text-[#F2F2F2] py-1 px-4 rounded-2xl">
                  <span className="w-2 h-2 bg-black rounded-full border-2 border-white "></span>
                  <span>Referrals</span>
                </span>
                <span className="flex items-center space-x-1 bg-lightgrayBg text-[#F2F2F2] py-1 px-4 rounded-2xl">
                  <span className="w-2 h-2 bg-black rounded-full border-2 border-white "></span>
                  <span>Registrations</span>
                </span>
                <span className="flex items-center space-x-1 bg-lightgrayBg text-[#F2F2F2] py-1 px-4 rounded-2xl">
                  <span className="w-2 h-2 bg-blue rounded-full border-2 border-white"></span>
                  <span>Income</span>
                </span>
              </div>

              <div className="flex w-full justify-between">
                <span className="flex items-center space-x-1 bg-lightgrayBg text-[#F2F2F2] py-1 px-4 rounded-2xl">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full border-2 border-white"></span>
                  <span>First Deposits</span>
                </span>
                <span className="flex items-center space-x-1 bg-lightgrayBg text-[#F2F2F2] py-1 px-4 rounded-2xl">
                  <span className="w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
                  <span>Amount of Deposits</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
