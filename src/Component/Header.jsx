// src/components/Header.jsx

import { useEffect, useState } from "react";
import { FaBars, FaSearch, FaUser, FaFilter, FaRegUser } from "react-icons/fa";
import Sidebar from "../Pages/Wallet/SideBar";
import GameSlider from "../Pages/Home/HomeComponents/GameSlider";
import { useNavigate } from "react-router-dom";
import headerImage from "../assets/Home/headerImage.png";
import {useProfile}  from "../Context/ProfileContext";
import ActionButtons from "../Pages/Home/HomeComponents/ActionButtons";
import axios from "axios";
import apis from "../utils/apis";
const Header = ({ profileDetails2}) => {
  const { profileDetails, fetchProfile } = useProfile();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
    const [apiNotifications, setApiNotifications] = useState(null);
  const userId = localStorage.getItem("userId");
    const isWingoPath = location.pathname === "/lottery/wingo";
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };
  // console.log("profileDetails in header:", profileDetails);

  const fetchNotification = async () => {
    try {
      const res = await axios.get(`${apis.notification}${userId}`);
      console.log("res:", res?.data);
      const notificationCount = res?.data?.data?.length;
      console.log("notification count:",notificationCount)
      setApiNotifications(res?.data?.data?.length);
    } catch (error) {
      console.error("error", error);
    }
  };

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
      fetchNotification()
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
      <header
        className={`sticky top-0 z-50 bg-[#c8102e] text-white px-3 py-2 flex items-center justify-between md:px-16 sm:px-28  3xl:px-60 ${
          isWingoPath ? "lg2:px-3" : "lg2:px-16"
        }`}
      >
        {/* Left Section - Hamburger & Logo */}
        <div className="flex items-center gap-2 justify-center">
          <button
            className="text-red text-sm bg-[#e0e0e0] rounded-full p-2 border border-inputBorder w-8 h-8 flex items-center justify-center lg2:hidden"
            onClick={toggleLeftSidebar}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
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
              className="border border-white px-4 xsm4:px-5 py-1 xsm3:px-5 xxs:px-6 rounded-[6px] bg-[linear-gradient(99.61deg,#C10932_0.52%,#5B0418_99.48%)] text-ssm font-medium whitespace-nowrap lg2:flex gap-2 lg2:px-4 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg2:block"
              >
                <path
                  d="M9 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 5C3 4.46957 3.21072 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3L9 3"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 7L9 12L14 17"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12L21 12"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="hidden lg2:block py-1">Log in</p>
              <p className="lg2:hidden">Login</p>
            </button>
            <button
              className="bg-white text-red px-4 xsm4:px-5 py-1 xsm3:px-5 xxs:px-5 rounded-[6px] text-ssm font-medium whitespace-nowrap lg2:flex gap-2 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg2:block"
              >
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="#C10932"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                  stroke="#C10932"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 8V14"
                  stroke="#C10932"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 11H17"
                  stroke="#C10932"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="hidden lg2:block text-black py-1">Sign Up</p>
              <p className="lg2:hidden">Signup</p>
            </button>
          </div>
        ) : (
          /* WITH LOGIN STATE */
          <>
            <div className="flex items-center gap-2">
              {/* Mobile Search Icon - More spacing from logo */}
              {/* <div className="items-center bg-white rounded-full p-2 text-[#525252] w-8 h-8  justify-center hidden lg2:block lg2:flex">
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
              {/* <div className="hidden md:flex items-center bg-white rounded-full px-2 py-2 w-[248px] lg:w-[348px]">
                <FaSearch className="text-[#525252] mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-black w-full text-sm"
                />
              </div> */}

              {/* Desktop Filter - Hidden on mobile */}
              {/* <div className="hidden md:block ml-2 p-0 bg-white rounded-full">
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
              </div> */}
            </div>

            {/* Right Section - Deposit Button & User Balance */}
            <div className="flex items-start gap-3 lg2:justify-end">
              {/* Mobile Deposit Button - More spacing from search icon */}
              {/* <div className="items-center bg-white rounded-full p-2 text-[#525252] w-8 h-8  justify-center hidden lg2:block lg2:flex">
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
                <span className="text-[13px]">
                  ₹ {profileDetails?.wallet || profileDetails2?.wallet || "0"}
                </span>
                <FaUser className="text-ssm" />
              </div>
              <div className="hidden lg2:block lg2:flex gap-2">
                {!isWingoPath && <ActionButtons />}
                {/* Account Button */}
                {/* <button className="flex items-center justify-center bg-red text-white border-2 border-white px-4 py-1 rounded-3xl hover:text-white transition-all ease-in-out gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                      fill="white"
                    />
                    <path
                      d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
                      fill="white"
                    />
                  </svg>
                  Account
                </button> */}
              </div>
            </div>
          </>
        )}
      </header>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={toggleSidebar}
        profileDetails={profileDetails}
        profileDetails2={profileDetails2}
        apiNotifications={apiNotifications}
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
