import React,{useState} from "react";
import signupbg from "../assets/Images/signup-bg.jpg";
import logo from "../assets/logo/logo-b.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate=useNavigate()
    const [showNewPassword, setShowNewPassword] = useState(false);
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${signupbg})` }}
    >
      {/* Background overlay with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Form Container */}
      <div className="relative z-10 w-80 sm:w-96 max-w-[448px] bg-white rounded-xl shadow-lg p-6 pt-12 sm:pt-14">
        {/* Logo */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-0">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
        </div>

        {/* Form Content */}
        <form className="space-y-4">
          {/* Login with + User ID */}
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            {/* Login With */}
            <div className="sm:w-1/3">
              <label
                htmlFor="loginWith"
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                Login with
              </label>
              <select
                id="loginWith"
                className="w-full px-1 py-2 rounded border border-gray-300 bg-white text-gray-900 text-xsm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                defaultValue="username"
              >
                <option value="username">Username</option>
                <option value="Id">Id</option>
                {/* Add other options if needed */}
              </select>
            </div>

            {/* User ID */}
            <div className="sm:w-2/3 mt-4 sm:mt-0">
              <label
                htmlFor="userId"
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                User ID
              </label>
              <input
                id="userId"
                type="text"
                placeholder="Enter Username"
                className="w-full px-4 py-2 border rounded-md bg-inputBoxBg text-inputText border-inputBorder text-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                // type="password"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-md bg-inputBoxBg text-inputText border-inputBorder text-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
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
                    className="h-5 w-5"
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
                    className="h-5 w-5"
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

          {/* Forgot Password/Username Link */}
          <div>
            <a
              href="#"
              className="text-red-600 text-sm font-medium hover:underline"
              style={{ fontFamily: "Roboto, sans-serif" }}
              onClick={() => navigate("/forgetPassword")}
            >
              Forgot Password/Username
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            Login
          </button>

          {/* Demo Login Button */}
          <button
            type="button"
            className="w-full bg-buttonRed text-white py-2 rounded-md hover:bg-red-700 transition"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
            }}
          >
            Demo Login
          </button>

          {/* New User Link */}
          <p
            className="text-center text-gray-600 text-sm"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
            }}
            onClick={() => navigate("/signup")}
          >
            New User?{" "}
            <a
              href="#"
              className="text-red-600 font-medium hover:underline"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Create an account
            </a>
          </p>

          {/* WhatsApp Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-green-500 text-green-600 py-2 rounded-md hover:bg-green-50 text-sm font-medium transition"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48C18.36 1.3 15.27 0 12 0 5.37 0 0 5.37 0 12c0 2.4.67 4.64 1.84 6.56L0 24l5.65-1.79A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.27-1.3-6.36-3.48-8.52zM12 22c-2.05 0-4.01-.61-5.69-1.73l-.41-.27-3.35 1.06 1.06-3.35-.27-.41A9.942 9.942 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
              <path d="M17.5 14.5c-.28-.14-1.64-.8-1.9-.9-.25-.1-.44-.14-.62.14-.18.28-.72.9-.88 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.52-.44-.44-.62-.44H7.9c-.18 0-.46.06-.7.28-.24.22-.9.88-.9 2.14s.92 2.48 1.04 2.66c.14.18 1.8 2.76 4.36 3.87 2.56 1.1 2.56.74 3.02.7.46-.04 1.48-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.26-.16-.54-.3z" />
            </svg>
            WHATSAPP FOR HELP
          </button>
        </form>
      </div>
    </div>
  );
}
