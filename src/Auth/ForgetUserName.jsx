import React, { useState } from "react";
import signupbg from "../assets/Images/signup-bg.jpg";
import logo from "../assets/logo-winbhai.png";
import { useNavigate } from "react-router-dom";

export default function ForgetUserName() {
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
       const [countryCode, setCountryCode] = useState("+91");
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${signupbg})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-80 sm:w-96 max-w-[448px] bg-white rounded-2xl shadow-lg px-6 py-4 pt-3">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-red3 rounded-full shadow-md">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        <div className="absolute top-2 right-4 text-gray-400 hover:text-black cursor-pointer text-xl font-bold">
          ×
        </div>

        <form className="space-y-4 mt-4">
          {/* Phone Number */}
          <div>
            <label
              className="block mb-1 text-[16px] font-medium"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Phone Number
            </label>
            <div className="relative w-full">
              {/* Country Code Select */}
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent border-none text-[16px] font-medium text-gray-700 focus:outline-none pr-0 appearance-none cursor-pointer"
              >
                <option value="+91">+91</option>
                <option value="+880">+880</option>
                <option value="+977">+977</option>
              </select>

              {/* Input Field */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full pl-15 pr-15 py-2 border-2 border-inputBorder rounded-xl text-[18px] font-medium focus:outline-none bg-inputBoxBg text-inputText"
                style={{ fontFamily: "Roboto, sans-serif" }}
              />

              {/* OTP Button */}
              <button
                type="button"
                className="absolute top-1/2 right-1.5 -translate-y-1/2 bg-buttonRed text-white px-2 py-1 text-[10px] rounded hover:bg-red-600"
              >
                Get OTP
              </button>
            </div>
          </div>

          {/* OTP */}
          <div>
            <label className="block mb-1 text-[16px] font-semibold">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border rounded-xl text-sm bg-inputBoxBg text-inputText border-inputBorder focus:outline-none"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-1 text-[16px] font-semibold">
              New UserName
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="w-full px-4 py-2 border rounded-xl text-sm bg-inputBoxBg text-inputText border-inputBorder focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label="Toggle Password Visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showNewPassword ? (
                  // Eye off icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.79-4.246M6.15 6.144A9.964 9.964 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.969 9.969 0 01-4.393 5.206M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                ) : (
                  // Eye icon (show)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-[16px] font-semibold">
              Confirm Username
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-xl text-sm bg-inputBoxBg text-inputText border-inputBorder focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle Password Visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 012.79-4.246M6.15 6.144A9.964 9.964 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.969 9.969 0 01-4.393 5.206M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
