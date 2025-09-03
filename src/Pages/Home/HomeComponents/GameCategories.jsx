/* GamesGrid.jsx */
import { Gamepad2, Crown, Layers} from "lucide-react";
import casinoImage from "../../../assets/Home/casinoImage.png";
/* eslint-disable react/prop-types */
const categories = [
  {
    name: "Crash Games",
    icon: "🎮", // replace with SVG icon
    image: casinoImage,
    gradient: "from-red-800/90 to-red-600/60",
  },
  {
    name: "Live Casinos",
    icon: "👑",
    image: casinoImage,
    gradient: "from-purple-800/90 to-purple-600/60",
  },
  {
    name: "Evolution",
    icon: "🍃",
    image: casinoImage,
    gradient: "from-yellow-900/90 to-yellow-600/60",
  },
  {
    name: "Card Games",
    icon: "🃏",
    image: casinoImage,
    gradient: "from-teal-800/90 to-teal-600/60",
  },
  {
    name: "Live Casinos",
    icon: "👑",
    image: casinoImage,
    gradient: "from-purple-800/90 to-purple-600/60",
  },
  {
    name: "Evolution",
    icon: "🍃",
    image: casinoImage,
    gradient: "from-yellow-900/90 to-yellow-600/60",
  },
  {
    name: "Live Casinos",
    icon: "👑",
    image: casinoImage,
    gradient: "from-purple-800/90 to-purple-600/60",
  },
  {
    name: "Evolution",
    icon: "🍃",
    image: casinoImage,
    gradient: "from-yellow-900/90 to-yellow-600/60",
  },
];

export default function GameCategories() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 p-2">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden shadow-lg h-12 group"
        >
          {/* Background image */}
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-fit"
          />

          {/* Left gradient overlay */}
          <div
            // className={`absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r ${cat.gradient} flex items-center px-4`}
            className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-center px-4`}
          >
            <div className="flex items-center space-x-2 text-white font-semibold text-lg">
              <span className="text-2xl ">{cat.icon}</span>
              <span className="whitespace-nowrap">{cat.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

