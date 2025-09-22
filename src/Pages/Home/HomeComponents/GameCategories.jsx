// /* GamesGrid.jsx */
// import { Gamepad2, Crown, Layers} from "lucide-react";
// import casinoImage from "../../../assets/Home/casinoImage.png";
// /* eslint-disable react/prop-types */
// const categories = [
//   {
//     name: "Crash Games",
//     icon: "🎮", // replace with SVG icon
//     image: casinoImage,
//     gradient: "from-red-800/90 to-red-600/60",
//   },
//   {
//     name: "Live Casinos",
//     icon: "👑",
//     image: casinoImage,
//     gradient: "from-purple-800/90 to-purple-600/60",
//   },
//   {
//     name: "Evolution",
//     icon: "🍃",
//     image: casinoImage,
//     gradient: "from-yellow-900/90 to-yellow-600/60",
//   },
//   {
//     name: "Card Games",
//     icon: "🃏",
//     image: casinoImage,
//     gradient: "from-teal-800/90 to-teal-600/60",
//   },
//   {
//     name: "Live Casinos",
//     icon: "👑",
//     image: casinoImage,
//     gradient: "from-purple-800/90 to-purple-600/60",
//   },
//   {
//     name: "Evolution",
//     icon: "🍃",
//     image: casinoImage,
//     gradient: "from-yellow-900/90 to-yellow-600/60",
//   },
//   {
//     name: "Live Casinos",
//     icon: "👑",
//     image: casinoImage,
//     gradient: "from-purple-800/90 to-purple-600/60",
//   },
//   {
//     name: "Evolution",
//     icon: "🍃",
//     image: casinoImage,
//     gradient: "from-yellow-900/90 to-yellow-600/60",
//   },
// ];

// export default function GameCategories() {
//   return (
//     <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 p-2">
//       {categories.map((cat, i) => (
//         <div
//           key={i}
//           className="relative rounded-xl overflow-hidden shadow-lg h-12 group"
//         >
//           {/* Background image */}
//           <img
//             src={cat.image}
//             alt={cat.name}
//             className="w-full h-full object-fit"
//           />

//           {/* Left gradient overlay */}
//           <div
//             // className={`absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r ${cat.gradient} flex items-center px-4`}
//             className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[rgba(0,0,0,1)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-center px-4`}
//           >
//             <div className="flex items-center space-x-2 text-white font-semibold text-lg">
//               <span className="text-2xl ">{cat.icon}</span>
//               <span className="whitespace-nowrap">{cat.name}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

/* GamesGrid.jsx */
import casinoImage from "../../../assets/Home/Games/live cassino.png";
import cardGames from "../../../assets/Home/Games/card games.png"
import crashGames from "../../../assets/Home/Games/carsh games.png"
import evolution from "../../../assets/Home/Games/evolution.png"
const categories = [
  { name: "Crash Games", icon: "🎮", image: casinoImage },
  { name: "Live Casinos", icon: "👑", image: cardGames },
  { name: "Evolution", icon: "🍃", image: crashGames },
  { name: "Card Games", icon: "🃏", image: evolution },
  // { name: "Live Casinos", icon: "👑", image: casinoImage },
  // { name: "Evolution", icon: "🍃", image: casinoImage },
  // { name: "Live Casinos", icon: "👑", image: casinoImage },
  // { name: "Evolution", icon: "🍃", image: casinoImage },
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
          className="relative rounded-[5px] overflow-hidden shadow-lg h-8 w-44 xxs:w-48  flex-shrink-0"
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

