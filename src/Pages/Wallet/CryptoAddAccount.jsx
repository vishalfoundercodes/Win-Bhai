import React, { useState, useRef, useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function CryptoAddAccount() {
  const location = useLocation();
  const mode = location.state?.mode || "update"; // default update
  const [selectedPayment, setSelectedPayment] = useState(null);
  const headingText = mode === "add" ? "Add Account" : "Update Account";
  const [language, setLanguage] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // track which dropdown is open
  const ref = useRef(null);

  const categories = ["All", "Math", "Science", "History", "Programming"];
  const Crypto = ["USDT (Tron)", "USDT BEP20"];
  return (
    <div
      className="min-h-screen  p-6 rounded-md "
      style={{
        fontFamily: "Roboto",
      }}
    >
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-center mb-6 text-gray-800">
        {headingText}
      </h2>

      <form className="space-y-4">
        {/* select currecny  */}
        <div className="w-full relative">
          <label className="block text-red text-lg font-medium mb-2">
            Select Currency
          </label>

          <div
            className="flex justify-between w-full  bg-white cursor-pointer border border-[#ADADAD] rounded-md px-3 py-2 items-center "
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <div
              className={` ${
                openDropdown === "language" ? "ring-none" : ""
              } text-[#969696]`}
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "400px",
              }}
            >
              {language || "Select crypto"}
            </div>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.66 0.433036L13.72 1.49404L7.943 7.27304C7.85043 7.36619 7.74036 7.44012 7.61911 7.49057C7.49786 7.54101 7.36783 7.56699 7.2365 7.56699C7.10517 7.56699 6.97514 7.54101 6.85389 7.49057C6.73264 7.44012 6.62257 7.36619 6.53 7.27304L0.75 1.49404L1.81 0.434036L7.235 5.85804L12.66 0.433036Z"
                fill="#969696"
              />
            </svg>
          </div>
          {openDropdown === "language" && (
            <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10">
              {Crypto.map((lang, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                    i !== Crypto.length - 1 ? "border-b border-[#E5E7EB]" : ""
                  }`}
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400, // px hata diya, px mat use karo
                  }}
                  onClick={() => {
                    setLanguage(lang);
                    setOpenDropdown(null);
                  }}
                >
                  {/* Text */}
                  <span>{lang}</span>

                  {/* Circle indicator */}
                  <span
                    className={`w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center`}
                  >
                    {language === lang && (
                      <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bank Account Number */}
        <div>
          <label className="block text-sm font-medium text-red mb-1">
            Wallet Address
          </label>
          <input
            type="text"
            placeholder="Enter wallet address"
            className="w-full border bg-white text-lightGray placeholder:text-sm rounded-md px-3 py-2 text-sm "
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
            }}
          />
        </div>

        {/* Confirm Bank Account Number */}
        <div>
          <label className="block text-sm font-medium text-red mb-1">
            Phone number
          </label>
          <div
            className="flex gap-2"
            style={{
              fontFamily: "Roboto",
            }}
          >
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border bg-white text-lightGray rounded-md px-3 py-2 text-sm "
            />
            <button className="bg-red text-white whitespace-nowrap px-2 rounded-md text-sm">
              
              Send OTP
            </button>
          </div>
        </div>

        {/* IFSC Code */}
        <div>
          <label className="block text-sm font-medium text-red mb-1 uppercase">
            Otp
          </label>
          <input
            type="number"
            placeholder="Enter OTP"
            className="w-full border bg-white text-lightGray rounded-md px-3 py-2 text-sm  placeholder:text-sm "
            style={{
              fontFamily: "Roboto",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red text-white font-medium py-3 rounded-md "
          style={{
            fontFamily: "Roboto",
            fontSize: "13.5px",
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
