/* GamesGrid.jsx */
import casinoImage from "../../../assets/Home/Games/live cassino.png";
import cardGames from "../../../assets/Home/Games/card games.png"
import crashGames from "../../../assets/Home/Games/carsh games.png"
import evolution from "../../../assets/Home/Games/evolution.png"
import BG1 from "../../../assets/JPEG/Background+Shadow-1.jpg";
import BG2 from "../../../assets/JPEG/Background+Shadow-2.jpg";
import BG3 from "../../../assets/JPEG/Background+Shadow-3.jpg";
import BG4 from "../../../assets/JPEG/Background+Shadow-4.jpg";
import BG5 from "../../../assets/JPEG/Background+Shadow-5.jpg";
import BG6 from "../../../assets/JPEG/Background+Shadow-6.jpg";
import BG7 from "../../../assets/JPEG/Background+Shadow-7.jpg";
import BG8 from "../../../assets/JPEG/Background+Shadow-8.jpg";
import BG9 from "../../../assets/JPEG/Background+Shadow-9.jpg";
import BG10 from "../../../assets/JPEG/Background+Shadow-10.jpg";
import BG11 from "../../../assets/JPEG/Background+Shadow-11.jpg";
import BG12 from "../../../assets/JPEG/Background+Shadow-12.jpg";
import BG13 from "../../../assets/JPEG/Background+Shadow-13.jpg";
import BG14 from "../../../assets/JPEG/Background+Shadow-14.jpg";
import BG15 from "../../../assets/JPEG/Background+Shadow-15.jpg";
import BG16 from "../../../assets/JPEG/Background+Shadow-16.jpg";
import BG17 from "../../../assets/JPEG/Background+Shadow-17.jpg";
import BG18 from "../../../assets/JPEG/Background+Shadow-18.jpg";
import BG19 from "../../../assets/JPEG/Background+Shadow-19.jpg";
import BG20 from "../../../assets/JPEG/Background+Shadow-20.jpg";
import BG from "../../../assets/JPEG/Background+Shadow.jpg";
const categories = [
  { name: "Crash Games", icon: "🎮", image: BG },
  { name: "Crash Games", icon: "🎮", image: BG1 },
  { name: "Crash Games", icon: "🎮", image: BG2 },
  { name: "Crash Games", icon: "🎮", image: BG3 },
  { name: "Crash Games", icon: "🎮", image: BG4 },
  { name: "Crash Games", icon: "🎮", image: BG5 },
  { name: "Crash Games", icon: "🎮", image: BG6 },
  { name: "Crash Games", icon: "🎮", image: BG7 },
  { name: "Crash Games", icon: "🎮", image: BG8 },
  { name: "Crash Games", icon: "🎮", image: BG9 },
  { name: "Crash Games", icon: "🎮", image: BG10 },
  { name: "Crash Games", icon: "🎮", image: BG11 },
  { name: "Crash Games", icon: "🎮", image: BG12 },
  { name: "Crash Games", icon: "🎮", image: BG13 },
  { name: "Crash Games", icon: "🎮", image: BG14 },
  { name: "Crash Games", icon: "🎮", image: BG15 },
  { name: "Crash Games", icon: "🎮", image: BG16 },
  { name: "Crash Games", icon: "🎮", image: BG17 },
  { name: "Crash Games", icon: "🎮", image: BG18 },
  { name: "Crash Games", icon: "🎮", image: BG19 },
  { name: "Crash Games", icon: "🎮", image: BG20 },
  // { name: "Live Casinos", icon: "👑", image: cardGames },
  // { name: "Evolution", icon: "🍃", image: crashGames },
  // { name: "Card Games", icon: "🃏", image: evolution },
];

export default function GameCategories() {
  // 2 rows banane ke liye split karenge
  const firstRow = categories.filter((_, i) => i % 2 === 0);
  const secondRow = categories.filter((_, i) => i % 2 !== 0);

  const renderRow = (row) => (
    <div className="flex space-x-2">
      {row.map((cat, i) => (
        <div
          key={i}
          className="relative rounded-[5px] overflow-hidden shadow-lg h-8 w-38 xsm4:w-40 xsm3:w-42 xxs:w-48  flex-shrink-0"
        >
          {/* Background image */}
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover rounded-[8px]"
          />

          {/* Left gradient overlay */}
          {/* <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-center px-2">
            <div className="flex items-center space-x-2 text-white font-semibold text-sm">
              <span className="text-xl">{cat.icon}</span>
              <span className="whitespace-nowrap">{cat.name}</span>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-x-auto hide-scrollbar">
      <div className="flex flex-col space-y-2 min-w-max px-4 pr-4 py-2">
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </div>
    </div>
  );
}

