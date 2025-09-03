// src/components/Header.jsx

import { useState } from "react";
import { FaBars, FaSearch, FaUser, FaFilter } from "react-icons/fa";
import Sidebar from "../Pages/Wallet/SideBar";
import GameSlider from "../Pages/Home/HomeComponents/GameSlider";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate()
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };

  return (
    <>
      <header className="bg-[#c8102e] text-white px-2 py-2 flex items-center justify-between md:px-16 sm:px-28 lg:px-44 3xl:px-60 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <button
            className="text-red text-xl bg-[#e0e0e0] rounded-full px-2 py-2 border border-inputBorder "
            // onClick={toggleSidebar}
            onClick={toggleLeftSidebar}
          >
            <FaBars />
          </button>

          <span
            className="font-bold text-sm md:text-md"
            onClick={() => navigate("/")}
          >
            WINBHAI
          </span>
        </div>

        <div className="flex-0.5 flex justify-center ">
          <div className="flex items-center gap-2 md:hidden bg-[#e0e0e0] rounded-full px-2 py-2 text-[#525252]">
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
          </div>

          <div className="hidden md:flex items-center bg-[#e0e0e0] rounded-full px-3 py-1  w-[248px] lg:w-[348px]">
            <FaSearch className="text-[#525252] mr-2" />

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-black w-full text-sm"
            />
          </div>

          <div className="hidden md:block ml-2 p-0 bg-[#F2F2F2] rounded-full">
            {/* <FaFilter className="text-white bg-black  p-1 rounded-full w-7 h-7" /> */}
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" m-2"
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

        <div className="flex items-center gap-2">
          <button
            className="bg-white text-red text-[14px] font-medium px-3 py-1 rounded-full md:hidden"
            onClick={()=>navigate("/deposit")}
          >
            Deposit
          </button>

          <div
            className="flex items-center bg-[linear-gradient(104.41deg,#4EB92B_4.93%,#235313_95.07%)] text-white px-4 py-1 rounded-full gap-3"
            onClick={toggleSidebar}
          >
            <span className="text-sm">₹ 0</span>
            <FaUser />
          </div>
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      <GameSlider isOpen={leftSidebarOpen} onClose={toggleLeftSidebar} />
    </>
  );
};

export default Header;
