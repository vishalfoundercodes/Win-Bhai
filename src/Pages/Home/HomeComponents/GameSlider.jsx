/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import sidebarImage1 from "../../../assets/GameIcons/cricket.png";
import sidebarImage2 from "../../../assets/GameIcons/politics.png";
import sidebarImage3 from "../../../assets/GameIcons/tennis.png";
import sidebarImage4 from "../../../assets/GameIcons/football.png";
import sidebarImage5 from "../../../assets/GameIcons/horseRacing.png";
import sidebarImage6 from "../../../assets/GameIcons/cardGames.png";
import sidebarImage7 from "../../../assets/GameIcons/sports.png";
import sidebarImage8 from "../../../assets/GameIcons/live cassino.png";
import sidebarImage9 from "../../../assets/GameIcons/aviator.png";
import sidebarImage10 from "../../../assets/GameIcons/slotGames.png";

export default function GameSlider({ isOpen, onClose }) {
  const games = [
    { id: 1, name: "Cricket", image: sidebarImage1 },
    { id: 2, name: "Aviator", image: sidebarImage2 },
    { id: 3, name: "Card Games", image: sidebarImage3 },
    { id: 4, name: "Live Casino", image: sidebarImage4 },
    { id: 5, name: "Trending Games", image: sidebarImage5 },
    { id: 6, name: "Football", image: sidebarImage6 },
    { id: 7, name: "Tennis", image: sidebarImage7 },
    { id: 8, name: "Slot Games", image: sidebarImage8 },
    { id: 9, name: "Affiliate", image: sidebarImage9 },
    { id: 10, name: "Profile", image: sidebarImage10 },
    { id: 11, name: "Language Change", image: sidebarImage1 },
    { id: 12, name: "Download APK", image: sidebarImage1 },
    { id: 13, name: "Logout", image: sidebarImage3 },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-start transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Sidebar */}
      <div
        className={`relative bg-white w-[60%] md:w-[50%] lg:w-[23%] h-full shadow-lg overflow-y-auto z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[linear-gradient(91.93deg,#C10932_0.39%,#5B0418_99.61%)] flex justify-between items-center px-4 py-3 text-white sticky top-0">
          <h2 className="font-bold text-lg">WINBHAI</h2>
          <button onClick={onClose} className="text-xl">
            <FaTimes />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#A21518] text-white font-bold">
            V
          </div>
          <span className="text-gray-800 font-medium">Vikas Sharma</span>
        </div>

        {/* Games List */}
        <ul>
          {games.map((game) => (
            <li
              key={game.id}
              className="flex items-center gap-3 px-4 py-3 border-b cursor-pointer hover:bg-gray-100"
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-8 h-8 bg-[#A21518] p-1 rounded-full"
              />
              <span className="text-sm font-medium">{game.name}</span>
            </li>
          ))}
        </ul>

        {/* Contact Section */}
        <div className="mt-4 bg-[#E7E7E7] px-4 py-3 rounded-t-[15px]">
          <p className="text-sm font-semibold text-[#A21518] mb-2">
            Contact with us :
          </p>
          <div className="flex flex-col gap-2">
            <button className="flex items-center rounded-2xl overflow-hidden shadow border-b border-green-700">
              {/* Left Icon Section with Gradient */}
              <div className="bg-[linear-gradient(134.08deg,#18B95E_0.78%,#235313_99.22%)] p-5 flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0013 2.6665C23.3653 2.6665 29.3347 8.63584 29.3347 15.9998C29.3347 23.3638 23.3653 29.3332 16.0013 29.3332C13.645 29.3372 11.3301 28.7136 9.29466 27.5265L2.67332 29.3332L4.47599 22.7092C3.28793 20.6731 2.66386 18.3572 2.66799 15.9998C2.66799 8.63584 8.63732 2.6665 16.0013 2.6665ZM11.4573 9.73317L11.1907 9.74384C11.0182 9.75572 10.8498 9.801 10.6947 9.87717C10.5501 9.95919 10.4181 10.0616 10.3027 10.1812C10.1427 10.3318 10.052 10.4625 9.95466 10.5892C9.46148 11.2304 9.19595 12.0176 9.19999 12.8265C9.20266 13.4798 9.37332 14.1158 9.63999 14.7105C10.1853 15.9132 11.0827 17.1865 12.2667 18.3665C12.552 18.6505 12.832 18.9358 13.1333 19.2012C14.6046 20.4964 16.3577 21.4305 18.2533 21.9292L19.0107 22.0452C19.2573 22.0585 19.504 22.0398 19.752 22.0278C20.1402 22.0074 20.5193 21.9022 20.8627 21.7198C21.0371 21.6296 21.2075 21.5318 21.3733 21.4265C21.3733 21.4265 21.4298 21.3883 21.54 21.3065C21.72 21.1732 21.8307 21.0785 21.98 20.9225C22.092 20.8069 22.1853 20.6727 22.26 20.5198C22.364 20.3025 22.468 19.8878 22.5107 19.5425C22.5427 19.2785 22.5333 19.1345 22.5293 19.0452C22.524 18.9025 22.4053 18.7545 22.276 18.6918L21.5 18.3438C21.5 18.3438 20.34 17.8385 19.6307 17.5158C19.5564 17.4835 19.4769 17.465 19.396 17.4612C19.3048 17.4516 19.2125 17.4618 19.1256 17.491C19.0386 17.5202 18.959 17.5678 18.892 17.6305C18.8853 17.6278 18.796 17.7038 17.832 18.8718C17.7767 18.9462 17.7004 19.0024 17.6131 19.0332C17.5257 19.0641 17.4311 19.0683 17.3413 19.0452C17.2544 19.022 17.1693 18.9926 17.0867 18.9572C16.9213 18.8878 16.864 18.8612 16.7507 18.8132C15.9852 18.4797 15.2766 18.0285 14.6507 17.4758C14.4827 17.3292 14.3267 17.1692 14.1667 17.0145C13.6421 16.5121 13.185 15.9438 12.8067 15.3238L12.728 15.1972C12.6723 15.1116 12.6267 15.0199 12.592 14.9238C12.5413 14.7278 12.6733 14.5705 12.6733 14.5705C12.6733 14.5705 12.9973 14.2158 13.148 14.0238C13.2947 13.8372 13.4187 13.6558 13.4987 13.5265C13.656 13.2732 13.7053 13.0132 13.6227 12.8118C13.2493 11.8998 12.8635 10.9927 12.4653 10.0905C12.3867 9.91184 12.1533 9.78384 11.9413 9.7585C11.8693 9.74961 11.7973 9.7425 11.7253 9.73717C11.5463 9.7269 11.3668 9.72868 11.188 9.7425L11.4573 9.73317Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Right Text Section */}
              <div className="relative bg-gray-200 text-black px-1 py-3 text-sm font-medium  whitespace-nowrap ">
                <span>@Whatsapp now</span>

                {/* Gradient underline effect */}
                {/* <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[linear-gradient(134.08deg,#18B95E_0.78%,#235313_99.22%)]"></span> */}
              </div>
            </button>

            <button className="flex items-center rounded-2xl overflow-hidden shadow border-b border-sky-900">
              {/* Left side with gradient + icon */}
              <div className="bg-[linear-gradient(134.66deg,#4286F6_0.29%,#274E90_99.71%)] p-5 flex items-center justify-center">
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_telegram)">
                      <path
                        d="M16 0.5C7.437 0.5 0.5 7.438 0.5 16C0.5 24.562 7.438 31.5 16 31.5C24.562 31.5 31.5 24.562 31.5 16C31.5 7.438 24.562 0.5 16 0.5ZM22.95 10.419L20.775 21.263C20.606 22.107 20.125 22.3 19.438 21.9L15.938 19.819L14.263 21.419C14.075 21.607 13.919 21.763 13.575 21.763L13.813 18.144L20.225 12.763C20.513 12.525 20.163 12.388 19.781 12.625L11.263 17.7L7.713 16.588C6.95 16.344 6.931 15.8 7.9 15.394L22.063 9.819C22.725 9.575 23.281 9.975 22.95 10.419Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_telegram">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>

              {/* Right side with text + bottom gradient border */}
              <div className="relative bg-gray-200 text-black px-1 py-3 text-sm font-medium whitespace-nowrap">
                <span>@Follow now</span>
                {/* <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#4286F6] to-transparent"></span> */}
              </div>
            </button>

            <button className="flex items-center rounded-2xl overflow-hidden shadow border-b border-pink-700">
              {/* Left side with Instagram gradient + icon */}
              <div className="bg-[linear-gradient(211.64deg,#515BD4_7.32%,#8034B0_37.69%,#DD2A7B_63.13%,#F48529_77.91%,#FDDA76_90.22%)] p-5 flex items-center justify-center">
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34 4H14C8.477 4 4 8.477 4 14v20c0 5.523 4.477 10 10 10h20c5.523 0 10-4.477 10-10V14c0-5.523-4.477-10-10-10zm-10 30a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm11-18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="white"
                    />
                    <circle cx="24" cy="24" r="6" fill="white" />
                  </svg>
                </span>
              </div>

              {/* Right side with text + bottom gradient border */}
              <div className="relative bg-gray-200 text-black px-1 py-4 text-sm font-medium whitespace-nowrap">
                <span>@Follow now</span>
                {/* <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 via-orange-400 to-transparent"></span> */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
