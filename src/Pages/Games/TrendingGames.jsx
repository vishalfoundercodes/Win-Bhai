// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// const TrendingGames = ({ title, games, icon }) => {
//   const navigate = useNavigate();
//   const [expanded, setExpanded] = useState(false);

//   const scrollRow = (rowId, direction) => {
//     const container = document.getElementById(rowId);
//     if (container) {
//       const scrollAmount = 300;
//       container.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Split the games into two rows
//   const totalVisible = 12;
//   const paddedGames = [...games];

//   // Add empty placeholders if less than 12
//   while (paddedGames.length < totalVisible) {
//     paddedGames.push({ id: `empty-${paddedGames.length}`, empty: true });
//   }

//   // First 6 items
//   const firstRowGames = paddedGames.slice(0, 6);
//   // Next 6 items
//   const secondRowGames = paddedGames.slice(6, 12);

//   return (
//     <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-2">
//       {/* Header */}
//       <div className="flex justify-between items-center px-3 py-2 bg-[#F4F4F4] rounded-[8px] shadow-md mb-3">
//         <div className="flex items-center gap-2">
//           {<span className="w-6 h-6">{icon || "ff"}</span>}
//           <h2 className="text-sm font-semibold">{title || "dcdhb"}</h2>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-red font-medium text-ssm"
//           >
//             {expanded ? "Collapse" : "See All"}
//           </button>

//           {!expanded && (
//             <>
//               <button
//                 onClick={() => scrollRow(title + "-row", "left")}
//                 className="p-1 border border-red rounded-[8px] shadow text-red"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <button
//                 onClick={() => scrollRow(title + "-row", "right")}
//                 className="p-1 border border-red rounded-[8px] shadow text-red"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div
//         id={title + "-row"}
//         className={`transition-all duration-500 ease-in-out hide-scrollbar ${
//           expanded
//             ? "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[2000px] overflow-y-auto"
//             : "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
//         }`}
//       >
//         {games.map((game) => (
//           <div
//             key={game.id}
//             className={`${
//               expanded ? "w-[100px] h-[76px]" : "w-[100px] h-[76px] "
//             } rounded-[10px] overflow-hidden cursor-pointer`}
//             onClick={() => navigate(game.route || "#")}
//           >
//             {game.image ? (
//               <img
//                 src={game.image}
//                 alt={game.name}
//                 className="w-[100px] h-[76px] object-fit rounded-[2px]"
//               />
//             ) : (
//               // Placeholder box when no image
//               <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]">
//                 <span className="text-gray-400 text-sm font-medium">
//                   {/* {game.name} */}
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div
//         id={title + "-row"}
//         className={`transition-all duration-500 ease-in-out mt-4 hide-scrollbar ${
//           expanded
//             ? "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[2000px] overflow-y-auto"
//             : "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
//         }`}
//       >
//         {games.map((game) => (
//           <div
//             key={game.id}
//             className={`${
//               expanded ? "w-[100px] h-[76px] " : "w-[100px] h-[76px]  "
//             } rounded-[12px] overflow-hidden cursor-pointer`}
//             onClick={() => navigate(game.route || "#")}
//           >
//             {game.image ? (
//               <img
//                 src={game.image}
//                 alt={game.name}
//                 className="w-[100px] h-[76px] object-fit rounded-[8px]"
//               />
//             ) : (
//               // Placeholder box when no image
//               <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]">
//                 <span className="text-gray-400 text-sm font-medium">
//                   {/* {game.name} */}
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrendingGames;

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrendingGames = ({ title, games, icon }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const scrollRow = (rowId, direction) => {
    const container = document.getElementById(rowId);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Split the games into two rows
  const totalVisible = 3;
  const paddedGames = [...games];

  // Add empty placeholders if less than 12
  while (paddedGames.length < totalVisible) {
    paddedGames.push({ id: `empty-${paddedGames.length}`, empty: true });
  }

  // First 6 items
  const firstRowGames = paddedGames.slice(0, 6);
  // Next 6 items
  const secondRowGames = paddedGames.slice(6, 12);

  // ✅ Move this OUTSIDE the return
  const renderRow = (rowId, gameList) => (
    <div
      id={rowId}
      className={`transition-all duration-500 ease-in-out mt-4 hide-scrollbar ${
        expanded
          ? "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[2000px] overflow-y-auto"
          : "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
      }`}
    >
      {gameList.map((game, index) => (
        <div
          key={game.id || index}
          className={`min-w-[80px] xsm3:min-w-[105px] min-h-[76px] rounded-[12px] overflow-hidden cursor-pointer`}
          onClick={() => {
            if (!game.empty) navigate(game.route || "#");
          }}
        >
          {!game.empty ? (
            game.image ? (
              <img
                src={game.image}
                alt={game.name}
                className="w-[350px] h-[76px] object-cover rounded-[8px]"
              />
            ) : (
              <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]">
                <span className="text-gray-400 text-sm font-medium"></span>
              </div>
            )
          ) : (
            <div className="w-full h-full bg-[#D9D9D9] rounded-[12px]"></div>
          )}
        </div>
      ))}
    </div>
  );

  // ✅ Then call it here:
  return (
    <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-2">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-2 bg-[#F4F4F4] rounded-[8px] shadow-md mb-3">
        <div className={`flex items-center gap-1 xsm3:gap-2`}>
          <span className="w-6 h-6">{icon || "🎮"}</span>
          <h2 className="text-ssm xsm3:text-sm font-semibold">{title || "Trending Games"}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-red font-medium text-ssm"
          >
            {expanded ? "See Less" : "See All"}
          </button>

          {!expanded && (
            <>
              <button
                onClick={() => scrollRow(title + "-row-1", "left")}
                className="p-1 border border-red rounded-[8px] shadow text-red"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollRow(title + "-row-1", "right")}
                className="p-1 border border-red rounded-[8px] shadow text-red"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
          {expanded && (
            <>
              <button
                onClick={() => scrollRow(title + "-row-1", "left")}
                className="p-1 border border-gray rounded-[8px] shadow text-gray"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollRow(title + "-row-1", "right")}
                className="p-1 border border-gray rounded-[8px] shadow text-gray"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Rows */}
      {renderRow(`${title}-row-1`, firstRowGames)}
      {renderRow(`${title}-row-2`, secondRowGames)}
    </div>
  );
};

export default TrendingGames;
