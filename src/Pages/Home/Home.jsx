// import React from 'react'
// import ActionButtons from './HomeComponents/ActionButtons';
// import SlidingTabs from './HomeComponents/SlidingTabs';
// import GameHeader from './HomeComponents/GameHeader';
// import GameCategories from './HomeComponents/GameCategories';
// import GameCategories2 from './HomeComponents/GameCategories2';
// import SlidingCompany from './HomeComponents/SlidingCompany';
// import GameSection from '../Games/GamesSection';
// import aviator1 from "../../assets/GameIcons/aviator1.jpg";
// import aviaFly from "../../assets/GameIcons/aviaFly.png";
// import GameCategory2 from './HomeComponents/GameCategories2';
// import slotGames from "../../assets/Images/slot games.png";
// import aura from "../../assets/Images/aura.png";
// import finishingGames from "../../assets/Images/finishing games.png";
// import gameshow from "../../assets/Images/game show.jpg";

// import slotGamesIcon from "../../assets/Images/slot game icon.png";
// import auraIcon from "../../assets/Images/aura icon.png";
// import fishingIcon from "../../assets/Images/fishing icon.png";
// import gameshowIcon from "../../assets/Images/game show icon.png";
// export default function Home() {
//   const games = [
//     { id: 1, name: "AviaFly", image: aviaFly },
//     { id: 2, name: "Aviator", image: aviator1 },
//     { id: 3, name: "AviaFly", image: aviaFly },
//     { id: 4, name: "Aviator", image: aviator1 },
//   ];
// const games2 = [
//   {
//     id: 1,
//     name: "Slot Games",
//     image: slotGames,
//     icon: slotGamesIcon,
//     bg: "bg-gradient-to-r from-[#A21518] via-[#880100] to-[#4B0102]",
//   },
//   {
//     id: 2,
//     name: "Aura",
//     image: aura,
//     icon: auraIcon,
//     bg: "bg-gradient-to-r from-[#B980CA] via-[#86429C] to-[#631877]",
//   },
//   {
//     id: 3,
//     name: "Fishing Games",
//     image: finishingGames,
//     icon: fishingIcon,
//     bg: "bg-gradient-to-r from-[#5DF3ED] via-[#00C0F3] to-[#0F9AC3]",
//   },
//   {
//     id: 4,
//     name: "Game Show",
//     image: gameshow,
//     icon: gameshowIcon,
//     bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
//   },
// ];

//   return (
//     <>
//       <div className="flex flex-col justify-center bg-grayBg p-2">
//         <div className="xsm:hidden pb-2">
//           <ActionButtons />
//           <SlidingTabs />
//         </div>
//         <div className="md:px-24">
//           <GameHeader />
//           <div className="md:hidden">
//             <GameCategories />
//           </div>
//           <div className="hidden md:block lg:hidden">
//             <GameCategory2
//               bgColor="bg-[#00BFFF]"
//               games={games2}
//             />
//           </div>

//           <SlidingCompany />
//           <div className="py-2 space-y-4">
//             <GameSection
//               title="Hot Games"
//               games={games}
              // icon={
              //   <svg
              //     width="27"
              //     height="26"
              //     viewBox="0 0 27 26"
              //     fill="none"
              //     xmlns="http://www.w3.org/2000/svg"
              //   >
              //     <path
              //       d="M10.1784 18.2479L13.5046 16.2417L16.8308 18.2743L15.9597 14.473L18.8899 11.9388L15.0357 11.5956L13.5046 8.0054L11.9735 11.5692L8.11938 11.9124L11.0496 14.473L10.1784 18.2479ZM6.98425 22.6565L8.70014 15.2385L2.94531 10.2493L10.548 9.5893L13.5046 2.59375L16.4612 9.5893L24.064 10.2493L18.3091 15.2385L20.025 22.6565L13.5046 18.7231L6.98425 22.6565Z"
              //       fill="#C10932"
              //     />
              //   </svg>
              // }
//               onSeeAll={() => alert("See All clicked")}
//             />
//             <GameSection
//               title="Trending Games"
              // icon={
              //   <svg
              //     width="27"
              //     height="26"
              //     viewBox="0 0 27 26"
              //     fill="none"
              //     xmlns="http://www.w3.org/2000/svg"
              //   >
              //     <path
              //       d="M14.3829 23.5018C17.6837 22.8407 21.9518 20.4659 21.9518 14.3257C21.9518 8.73876 17.8622 5.01766 14.9214 3.3081C14.2678 2.92797 13.5044 3.42742 13.5044 4.18242V6.11266C13.5044 7.63531 12.8645 10.4145 11.0863 11.5708C10.1782 12.161 9.19616 11.2772 9.08635 10.2002L8.99554 9.3153C8.88994 8.28682 7.84246 7.66277 7.02094 8.28999C5.54369 9.41456 4.00098 11.3892 4.00098 14.3246C4.00098 21.8334 9.5858 23.7119 12.3777 23.7119C12.541 23.7119 12.7114 23.7066 12.8888 23.696C11.5097 23.5788 9.28064 22.7235 9.28064 19.957C9.28064 17.7923 10.8593 16.3299 12.0588 15.6171C12.3819 15.427 12.7589 15.6752 12.7589 16.05V16.673C12.7589 17.1482 12.9437 17.8926 13.3819 18.4016C13.8782 18.9781 14.6057 18.3741 14.6638 17.616C14.6828 17.3773 14.9235 17.2253 15.1305 17.3457C15.8074 17.7416 16.6722 18.5864 16.6722 19.957C16.6722 22.1195 15.48 23.1142 14.3829 23.5018Z"
              //       fill="#C10932"
              //     />
              //   </svg>
              // }
//               games={games}
//               onSeeAll={() => alert("See All clicked")}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import ActionButtons from "./HomeComponents/ActionButtons";
import SlidingTabs from "./HomeComponents/SlidingTabs";
import SlidingTabs2 from "./HomeComponents/SlidingTabs2";
import GameHeader from "./HomeComponents/GameHeader";
import GameCategories from "./HomeComponents/GameCategories";
import GameCategory2 from "./HomeComponents/GameCategories2";
import SlidingCompany from "./HomeComponents/SlidingCompany";
import GameSection from "../Games/GamesSection";

import aviator1 from "../../assets/GameIcons/aviator1.jpg";
import aviaFly from "../../assets/GameIcons/aviaFly.png";

import slotGames from "../../assets/Images/slot games.png";
import aura from "../../assets/Images/aura.png";
import finishingGames from "../../assets/Images/finishing games.png";
import gameshow from "../../assets/Images/game show.jpg";

import slotGamesIcon from "../../assets/Images/slot game icon.png";
import auraIcon from "../../assets/Images/aura icon.png";
import fishingIcon from "../../assets/Images/fishing icon.png";
import gameshowIcon from "../../assets/Images/game show icon.png";

import sidebarImage1 from "../../assets/GameIcons/cricket.png"
import sidebarImage2 from "../../assets/GameIcons/politics.png"
import sidebarImage3 from "../../assets/GameIcons/tennis.png"
import sidebarImage4 from "../../assets/GameIcons/football.png"
import sidebarImage5 from "../../assets/GameIcons/horseRacing.png"
import sidebarImage6 from "../../assets/GameIcons/cardGames.png";
import sidebarImage7 from "../../assets/GameIcons/sports.png"
import sidebarImage8 from "../../assets/GameIcons/live cassino.png"
import sidebarImage9 from "../../assets/GameIcons/aviator.png"
import sidebarImage10 from "../../assets/GameIcons/slotGames.png"
import Footer2 from "../../Component/Footer2";

export default function Home() {
  const games = [
    { id: 1, name: "AviaFly", image: aviaFly },
    { id: 2, name: "Aviator", image: aviator1 },
    { id: 3, name: "AviaFly", image: aviaFly },
    { id: 4, name: "Aviator", image: aviator1 },
    { id: 5, name: "AviaFly", image: aviaFly },
    { id: 6, name: "Aviator", image: aviator1 },
    { id: 7, name: "AviaFly", image: aviaFly },
    { id: 8, name: "Aviator", image: aviator1 },
    { id: 9, name: "AviaFly", image: aviaFly },
    { id: 10, name: "Aviator", image: aviator1 },
  ];

const games2 = [
  {
    id: 1,
    name: "Slot Games",
    image: slotGames,
    icon: slotGamesIcon,
    bg: "bg-gradient-to-r from-[#A21518] via-[#880100] to-[#4B0102]",
  },
  {
    id: 2,
    name: "Aura",
    image: aura,
    icon: auraIcon,
    bg: "bg-gradient-to-r from-[#B980CA] via-[#86429C] to-[#631877]",
  },
  {
    id: 3,
    name: "Fishing Games",
    image: finishingGames,
    icon: fishingIcon,
    bg: "bg-gradient-to-r from-[#5DF3ED] via-[#00C0F3] to-[#0F9AC3]",
  },
  {
    id: 4,
    name: "Game Show",
    image: gameshow,
    icon: gameshowIcon,
    bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
  },
];

  const games3 = [
    {
      id: 1,
      name: "cricket",
      image: sidebarImage1,
      icon: sidebarImage1,
      bg: "bg-gradient-to-r from-[#A21518] via-[#880100] to-[#4B0102]",
    },
    {
      id: 2,
      name: "Politics",
      image: sidebarImage2,
      icon: sidebarImage2,
      bg: "bg-gradient-to-r from-[#B980CA] via-[#86429C] to-[#631877]",
    },
    {
      id: 3,
      name: "tennis",
      image: sidebarImage3,
      icon: sidebarImage3,
      bg: "bg-gradient-to-r from-[#5DF3ED] via-[#00C0F3] to-[#0F9AC3]",
    },
    {
      id: 4,
      name: "football",
      image: sidebarImage4,
      icon: sidebarImage4,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    },
    {
      id: 5,
      name: "Horse Racing",
      image: sidebarImage5,
      icon: sidebarImage5,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    },
    {
      id: 6,
      name: "Card Games",
      image: sidebarImage6,
      icon: sidebarImage6,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    },
    {
      id: 7,
      name: "Sports",
      image: sidebarImage7,
      icon: sidebarImage7,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    },
    {
      id: 8,
      name: "Live Cassino",
      image: sidebarImage8,
      icon: sidebarImage8,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    },
    {
      id: 9,
      name: "Aviator",
      image: sidebarImage9,
      icon: sidebarImage9,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    },
    {
      id: 10,
      name: "Slot Games",
      image: sidebarImage10,
      icon: sidebarImage10,
      bg: "bg-gradient-to-r from-[#025963] via-[#2894A1] to-[#277F8A]",
    }
  ];

  return (
    <div className="flex flex-col justify-center bg-grayBg">
      {/* ------------------ Mobile + Tablet ------------------ */}
      <div className="xsm:hidden pt-2 pb-2">
        <ActionButtons />
        <SlidingTabs />
      </div>

      <div className="md:px-24 lg:hidden">
        <GameHeader />
        <div className="md:hidden">
          <GameCategories />
        </div>
        <div className="hidden md:block lg:hidden">
          <GameCategory2 bgColor="bg-[#00BFFF]" games={games2} />
        </div>
        <SlidingCompany />
        <div className="py-2 space-y-4">
          <GameSection
            title="Hot Games"
            icon={
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1784 18.2479L13.5046 16.2417L16.8308 18.2743L15.9597 14.473L18.8899 11.9388L15.0357 11.5956L13.5046 8.0054L11.9735 11.5692L8.11938 11.9124L11.0496 14.473L10.1784 18.2479ZM6.98425 22.6565L8.70014 15.2385L2.94531 10.2493L10.548 9.5893L13.5046 2.59375L16.4612 9.5893L24.064 10.2493L18.3091 15.2385L20.025 22.6565L13.5046 18.7231L6.98425 22.6565Z"
                  fill="#C10932"
                />
              </svg>
            }
            games={games}
            onSeeAll={() => alert("See All clicked")}
          />
          <GameSection
            title="Trending Games"
            icon={
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3829 23.5018C17.6837 22.8407 21.9518 20.4659 21.9518 14.3257C21.9518 8.73876 17.8622 5.01766 14.9214 3.3081C14.2678 2.92797 13.5044 3.42742 13.5044 4.18242V6.11266C13.5044 7.63531 12.8645 10.4145 11.0863 11.5708C10.1782 12.161 9.19616 11.2772 9.08635 10.2002L8.99554 9.3153C8.88994 8.28682 7.84246 7.66277 7.02094 8.28999C5.54369 9.41456 4.00098 11.3892 4.00098 14.3246C4.00098 21.8334 9.5858 23.7119 12.3777 23.7119C12.541 23.7119 12.7114 23.7066 12.8888 23.696C11.5097 23.5788 9.28064 22.7235 9.28064 19.957C9.28064 17.7923 10.8593 16.3299 12.0588 15.6171C12.3819 15.427 12.7589 15.6752 12.7589 16.05V16.673C12.7589 17.1482 12.9437 17.8926 13.3819 18.4016C13.8782 18.9781 14.6057 18.3741 14.6638 17.616C14.6828 17.3773 14.9235 17.2253 15.1305 17.3457C15.8074 17.7416 16.6722 18.5864 16.6722 19.957C16.6722 22.1195 15.48 23.1142 14.3829 23.5018Z"
                  fill="#C10932"
                />
              </svg>
            }
            games={games}
            onSeeAll={() => alert("See All clicked")}
          />
        </div>
      </div>

      {/* ------------------ Laptop / Desktop ------------------ */}
      <div className="hidden lg:flex lg:justify-center lg:pt-4">
        <div className="max-w-[900px] w-full grid grid-cols-12 gap-1 px-4">
          {/* Sidebar - Game List */}
          <aside className="col-span-3 bg-white rounded-xl shadow p-4">
            <ul className="space-y-0">
              {games3.map((game) => (
                <li
                  key={game.id}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-8 h-8 bg-red rounded-full"
                  />
                  <span className="text-sm font-medium">{game.name}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="col-span-9 space-y-1">
            <div className="lg:hidden">
              <SlidingTabs />
            </div>
            <div className="hidden lg:block">
              <SlidingTabs2 />
            </div>

            <GameHeader />
            <div className="hidden lg:block">
              {/* <GameCategory2 bgColor="bg-[#00BFFF]" games={games2} /> */}
              <GameCategories />
            </div>
            <SlidingCompany />
          </main>
        </div>
      </div>
      {/* ------------------ Categories + Sections (Below Both) ------------------ */}
      <div className="hidden lg:block lg:max-w-4xl w-full mx-auto py-6 space-y-4 lg:justify-center">
        <GameSection
          title="Hot Games"
          icon={
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1784 18.2479L13.5046 16.2417L16.8308 18.2743L15.9597 14.473L18.8899 11.9388L15.0357 11.5956L13.5046 8.0054L11.9735 11.5692L8.11938 11.9124L11.0496 14.473L10.1784 18.2479ZM6.98425 22.6565L8.70014 15.2385L2.94531 10.2493L10.548 9.5893L13.5046 2.59375L16.4612 9.5893L24.064 10.2493L18.3091 15.2385L20.025 22.6565L13.5046 18.7231L6.98425 22.6565Z"
                fill="#C10932"
              />
            </svg>
          }
          games={games}
          onSeeAll={() => alert("See All clicked")}
        />

        <GameSection
          title="Trending Games"
          icon={
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3829 23.5018C17.6837 22.8407 21.9518 20.4659 21.9518 14.3257C21.9518 8.73876 17.8622 5.01766 14.9214 3.3081C14.2678 2.92797 13.5044 3.42742 13.5044 4.18242V6.11266C13.5044 7.63531 12.8645 10.4145 11.0863 11.5708C10.1782 12.161 9.19616 11.2772 9.08635 10.2002L8.99554 9.3153C8.88994 8.28682 7.84246 7.66277 7.02094 8.28999C5.54369 9.41456 4.00098 11.3892 4.00098 14.3246C4.00098 21.8334 9.5858 23.7119 12.3777 23.7119C12.541 23.7119 12.7114 23.7066 12.8888 23.696C11.5097 23.5788 9.28064 22.7235 9.28064 19.957C9.28064 17.7923 10.8593 16.3299 12.0588 15.6171C12.3819 15.427 12.7589 15.6752 12.7589 16.05V16.673C12.7589 17.1482 12.9437 17.8926 13.3819 18.4016C13.8782 18.9781 14.6057 18.3741 14.6638 17.616C14.6828 17.3773 14.9235 17.2253 15.1305 17.3457C15.8074 17.7416 16.6722 18.5864 16.6722 19.957C16.6722 22.1195 15.48 23.1142 14.3829 23.5018Z"
                fill="#C10932"
              />
            </svg>
          }
          games={games}
          onSeeAll={() => alert("See All clicked")}
        />
      </div>
    </div>
  );
}

