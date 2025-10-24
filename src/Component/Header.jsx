// src/components/Header.jsx

import { useEffect, useState } from "react";
import { FaBars, FaSearch, FaUser, FaFilter } from "react-icons/fa";
import Sidebar from "../Pages/Wallet/SideBar";
import GameSlider from "../Pages/Home/HomeComponents/GameSlider";
import { useNavigate } from "react-router-dom";
import headerImage from "../assets/Home/headerImage.png";
import {useProfile}  from "../Context/ProfileContext";
const Header = () => {
  const { profileDetails, fetchProfile } = useProfile();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const userId = localStorage.getItem("userId");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };
  // console.log("profileDetails in header:", profileDetails);

  // 🔹 Load stored sidebar state on mount
  useEffect(() => {
    const storedSidebar = localStorage.getItem("sidebar");
    const storedLeftSidebar = localStorage.getItem("leftSidebar");

    if (storedSidebar === "true") setSidebarOpen(true);
    if (storedLeftSidebar === "true") setLeftSidebarOpen(true);
  }, []);

  // 🔹 Whenever sidebar state changes, store/remove it
  useEffect(() => {
    if (sidebarOpen) {
      localStorage.setItem("sidebar", "true");
    } else {
      localStorage.removeItem("sidebar");
    }
  }, [sidebarOpen]);

  useEffect(() => {
    if (leftSidebarOpen) {
      localStorage.setItem("sidebar", "true");
    } else {
      localStorage.removeItem("sidebar");
    }
  }, [leftSidebarOpen]);



  return (
    <>
      <header className="sticky top-0 z-50 bg-[#c8102e] text-white px-3 py-2 flex items-center justify-between md:px-16 sm:px-28 lg:px-44 3xl:px-60">
        {/* Left Section - Hamburger & Logo */}
        <div className="flex items-center gap-2 justify-center">
          <button
            className="text-red text-sm bg-[#e0e0e0] rounded-full p-2 border border-inputBorder w-8 h-8 flex items-center justify-center"
            onClick={toggleLeftSidebar}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
                fill="#C10932"
              />
            </svg>
          </button>

          <div
            className="font-bold text-sm md:text-md items-center justify-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={headerImage}
              alt="WINBHAI"
              className="w-24 xsm4:w-28 xsm3:w-32 xxs:w-40 -mt-1"
            />
          </div>
        </div>

        {!userId ? (
          /* WITHOUT LOGIN STATE */
          <div className="flex gap-2">
            <button
              className="border border-white px-4 xsm4:px-5 py-1 xsm3:px-5 xxs:px-6 rounded-[6px] bg-[linear-gradient(99.61deg,#C10932_0.52%,#5B0418_99.48%)] text-ssm font-medium whitespace-nowrap"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="bg-white text-red px-4 xsm4:px-5 py-1 xsm3:px-5 xxs:px-5 rounded-[6px] text-ssm font-medium whitespace-nowrap"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        ) : (
          /* WITH LOGIN STATE */
          <>
            <div className="flex items-center gap-2">
              {/* Mobile Search Icon - More spacing from logo */}
              {/* <div className="flex items-center bg-white rounded-full p-2 text-[#525252] w-8 h-8  justify-center md:hidden">
                <button onClick={() => setSearchOpen(!searchOpen)}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8873 9.59827C11.6163 8.6058 12.0469 7.38053 12.0469 6.05469C12.0469 2.74529 9.36408 0.0625 6.05469 0.0625C2.74529 0.0625 0.0625 2.74529 0.0625 6.05469C0.0625 9.36408 2.74529 12.0469 6.05469 12.0469C7.38088 12.0469 8.60645 11.616 9.59907 10.8867L9.59827 10.8873C9.62546 10.9242 9.65574 10.9595 9.68912 10.9928L13.2388 14.5425C13.5988 14.9025 14.1825 14.9025 14.5425 14.5425C14.9025 14.1825 14.9025 13.5988 14.5425 13.2388L10.9928 9.68912C10.9595 9.65574 10.9242 9.62546 10.8873 9.59827ZM11.125 6.05469C11.125 8.85495 8.85495 11.125 6.05469 11.125C3.25443 11.125 0.984375 8.85495 0.984375 6.05469C0.984375 3.25443 3.25443 0.984375 6.05469 0.984375C8.85495 0.984375 11.125 3.25443 11.125 6.05469Z"
                      fill="#525252"
                    />
                  </svg>
                </button>
              </div> */}

              {/* Desktop Search - Hidden on mobile */}
              <div className="hidden md:flex items-center bg-white rounded-full px-2 py-2 w-[248px] lg:w-[348px]">
                <FaSearch className="text-[#525252] mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-black w-full text-sm"
                />
              </div>

              {/* Desktop Filter - Hidden on mobile */}
              <div className="hidden md:block ml-2 p-0 bg-white rounded-full">
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-2"
                >
                  <path
                    d="M17.6514 5.78711H13.042C12.727 5.78711 12.4658 5.52591 12.4658 5.21094C12.4658 4.89596 12.727 4.63477 13.042 4.63477H17.6514C17.9663 4.63477 18.2275 4.89596 18.2275 5.21094C18.2275 5.52591 17.9663 5.78711 17.6514 5.78711Z"
                    fill="#525252"
                  />
                  <path
                    d="M5.35905 5.78711H2.28613C1.97116 5.78711 1.70996 5.52591 1.70996 5.21094C1.70996 4.89596 1.97116 4.63477 2.28613 4.63477H5.35905C5.67402 4.63477 5.93522 4.89596 5.93522 5.21094C5.93522 5.52591 5.67402 5.78711 5.35905 5.78711Z"
                    fill="#525252"
                  />
                  <path
                    d="M8.43197 8.47721C6.63431 8.47721 5.16699 7.0099 5.16699 5.21224C5.16699 3.41458 6.63431 1.94727 8.43197 1.94727C10.2296 1.94727 11.6969 3.41458 11.6969 5.21224C11.6969 7.0099 10.2296 8.47721 8.43197 8.47721ZM8.43197 3.09961C7.26426 3.09961 6.31934 4.04453 6.31934 5.21224C6.31934 6.37995 7.26426 7.32487 8.43197 7.32487C9.59968 7.32487 10.5446 6.37995 10.5446 5.21224C10.5446 4.04453 9.59968 3.09961 8.43197 3.09961Z"
                    fill="#525252"
                  />
                  <path
                    d="M17.651 14.2402H14.5781C14.2632 14.2402 14.002 13.979 14.002 13.6641C14.002 13.3491 14.2632 13.0879 14.5781 13.0879H17.651C17.966 13.0879 18.2272 13.3491 18.2272 13.6641C18.2272 13.979 17.966 14.2402 17.651 14.2402Z"
                    fill="#525252"
                  />
                  <path
                    d="M6.89551 14.2402H2.28613C1.97116 14.2402 1.70996 13.979 1.70996 13.6641C1.70996 13.3491 1.97116 13.0879 2.28613 13.0879H6.89551C7.21048 13.0879 7.47168 13.3491 7.47168 13.6641C7.47168 13.979 7.21048 14.2402 6.89551 14.2402Z"
                    fill="#525252"
                  />
                  <path
                    d="M11.5052 16.9264C9.70755 16.9264 8.24023 15.4591 8.24023 13.6615C8.24023 11.8638 9.70755 10.3965 11.5052 10.3965C13.3029 10.3965 14.7702 11.8638 14.7702 13.6615C14.7702 15.4591 13.3029 16.9264 11.5052 16.9264ZM11.5052 11.5488C10.3375 11.5488 9.39258 12.4938 9.39258 13.6615C9.39258 14.8292 10.3375 15.7741 11.5052 15.7741C12.6729 15.7741 13.6178 14.8292 13.6178 13.6615C13.6178 12.4938 12.6729 11.5488 11.5052 11.5488Z"
                    fill="#525252"
                  />
                </svg>
              </div>
            </div>

            {/* Right Section - Deposit Button & User Balance */}
            <div className="flex items-center gap-3">
              {/* Mobile Deposit Button - More spacing from search icon */}
              <button
                className="bg-white text-red text-xs font-medium px-3 py-2 rounded-full md:hidden whitespace-nowrap"
                onClick={() => navigate("/deposit")}
              >
                Deposit
              </button>

              {/* User Balance */}
              <div
                className="flex items-center bg-[linear-gradient(104.41deg,#4EB92B_4.93%,#235313_95.07%)] text-white px-1 py-2 rounded-full gap-1 cursor-pointer whitespace-nowrap"
                onClick={toggleSidebar}
              >
                <span className="text-[13px]">₹ {profileDetails?.wallet}</span>
                <FaUser className="text-ssm" />
              </div>
            </div>
          </>
        )}
      </header>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={toggleSidebar}
        profileDetails={profileDetails}
      />
      <GameSlider
        isOpen={leftSidebarOpen}
        onClose={toggleLeftSidebar}
        profileDetails={profileDetails}
      />
    </>
  );
};

export default Header;
