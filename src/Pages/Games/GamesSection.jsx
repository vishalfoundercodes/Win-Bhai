// /* eslint-disable react/prop-types */
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const GameSection = ({ title, games, onSeeAll, icon }) => {
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

//   return (
//     <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-2">
//       {/* Header */}
//       <div className="flex justify-between items-center px-3 py-2 bg-white rounded-[15px] shadow-md mb-3">
//         <div className="flex items-center gap-2">
//           {/* Icon passed as prop */}
//           {icon && (
//             <span className="w-6 h-6 flex items-center justify-center">
//               {icon}
//             </span>
//           )}
//           <h2 className="text-lg font-semibold">{title}</h2>
//         </div>
//         <div className="flex items-center gap-2">
//           <button onClick={onSeeAll} className="text-red font-medium text-sm">
//             See All
//           </button>
//           <button
//             onClick={() => scrollRow(title + "-row1", "left")}
//             className="p-1 bg-grayBg rounded-full shadow text-red"
//           >
//             <ChevronLeft size={18} />
//           </button>
//           <button
//             onClick={() => scrollRow(title + "-row1", "right")}
//             className="p-1 bg-grayBg rounded-full shadow text-red"
//           >
//             <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       {/* Two scrollable rows */}
//       <div className="space-y-3 py-4">
//         {/* Row 1 */}
//         <div
//           id={title + "-row1"}
//           className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar"
//         >
//           {games.map((game) => (
//             <div
//               key={game.id}
//               className="min-w-[120px] h-[150px] bg-white rounded-lg shadow overflow-hidden"
//             >
//               <img
//                 src={game.image}
//                 alt={game.name}
//                 className="w-full h-full object-cover rounded-[15px]"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Row 2 */}
//         <div
//           id={title + "-row2"}
//           className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar lg:hidden"
//         >
//           {games.map((game) => (
//             <div
//               key={game.id + "-row2"}
//               className="min-w-[120px] h-[150px] bg-white rounded-lg shadow overflow-hidden"
//             >
//               <img
//                 src={game.image}
//                 alt={game.name}
//                 className="w-full h-full object-cover rounded-[15px]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GameSection;

/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// const GameSection = ({ title, games, icon }) => {
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
//               expanded ? "min-w-[100px] h-[125px]" : "min-w-[100px] h-[125px] "
//             } rounded-[10px] overflow-hidden cursor-pointer`}
//             onClick={() => navigate(game.route || "#")}
//           >
//             {game.image ? (
//               <img
//                 src={game.image}
//                 alt={game.name}
//                 className="w-full h-full object-fit rounded-[2px]"
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
//               expanded
//                 ? "min-w-[100px] h-[125px] "
//                 : "min-w-[100px] h-[125px]  "
//             } rounded-[12px] overflow-hidden cursor-pointer`}
//             onClick={() => navigate(game.route || "#")}
//           >
//             {game.image ? (
//               <img
//                 src={game.image}
//                 alt={game.name}
//                 className="w-full h-full object-fit rounded-[8px]"
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

// export default GameSection;

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const GameSection = ({ title, games, icon }) => {
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

//   // ✅ Filter games by allowed providers
//  const allowedProviders = ["Macc88"]; // lowercase me likho

//  const filteredGames = games.filter((game) =>
//    allowedProviders.includes(game.provider?.toLowerCase())
//  );

//   // ✅ Slice into two rows
//   const rowSize = 3; // how many items per row
//   const firstRow = filteredGames.slice(0, rowSize);
//   const secondRow = filteredGames.slice(rowSize, rowSize * 2);

//   const renderRow = (rowId, items) => (
//     <div
//       id={rowId}
//       className={`transition-all duration-500 ease-in-out mt-2 hide-scrollbar ${
//         expanded
//           ? "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[2000px] overflow-y-auto"
//           : "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
//       }`}
//     >
//       {games.map((game) => (
//         <div
//           key={game.id}
//           className="min-w-[100px] h-[125px] rounded-[12px] overflow-hidden cursor-pointer"
//           onClick={() => navigate(game.route || "#")}
//         >
//           {game.image ? (
//             <img
//               src={game.image}
//               alt={game.name}
//               className="w-full h-full object-cover rounded-[8px]"
//             />
//           ) : (
//             <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]" />
//           )}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-2">
//       {/* Header */}
//       <div className="flex justify-between items-center px-3 py-2 bg-[#F4F4F4] rounded-[8px] shadow-md mb-3">
//         <div className="flex items-center gap-2">
//           <span className="w-6 h-6">{icon || "🎮"}</span>
//           <h2 className="text-sm font-semibold">{title || "Games"}</h2>
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
//                 onClick={() => scrollRow(`${title}-row-1`, "left")}
//                 className="p-1 border border-red rounded-[8px] shadow text-red"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <button
//                 onClick={() => scrollRow(`${title}-row-1`, "right")}
//                 className="p-1 border border-red rounded-[8px] shadow text-red"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* First and second rows (continuous items) */}
//       {renderRow(`${title}-row-1`, firstRow)}
//       {/* {allowedProviders &&(renderRow(`${title}-row-2`, secondRow))} */}
//       {secondRow.length > 0 &&
//         !allowedProviders.includes(filteredGames[0]?.provider?.toLowerCase()) &&
//         renderRow(`${title}-row-2`, secondRow)}
//     </div>
//   );
// };

// export default GameSection;

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GameSection = ({ title, games, icon }) => {
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

  // ✅ Use all games passed as props - no filtering needed
  const filteredGames = games;

  // ✅ Check if current title should NOT show second row
  const noSecondRowTitles = [
    "Macc88",
    "Jili",
    "Spribe",
    "Evolution",
    "Ezugi",
    "Turbo games",
  ];
  const shouldShowSecondRow = !noSecondRowTitles.includes(title);

  // ✅ Slice into two rows
  const rowSize = 4; // how many items per row
  const firstRow = filteredGames.slice(0, rowSize);
  const secondRow = filteredGames.slice(rowSize, rowSize * 2);

  const renderRow = (rowId, items, isSecondRow = false) => (
    <div
      id={rowId}
      className={`transition-all duration-500 ease-in-out ${
        isSecondRow && !expanded ? "mt-2" : ""
      } hide-scrollbar ${
        expanded
          ? "" // No specific class for expanded state, items will flow naturally
          : "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
      }`}
    >
      {items.map((game) => (
        <div
          key={game.id}
          className="min-w-[100px] h-[125px] rounded-[12px] overflow-hidden cursor-pointer"
          onClick={() => navigate(game.route || "#")}
        >
          {game.image ? (
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover rounded-[8px]"
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-2">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-2 bg-[#F4F4F4] rounded-[8px] shadow-md mb-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6">{icon || "🎮"}</span>
          <h2 className="text-sm font-semibold">{title || "Games"}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-red font-medium text-ssm"
          >
            {expanded ? "Collapse" : "See All"}
          </button>

          {!expanded && (
            <>
              <button
                onClick={() => scrollRow(`${title}-row-1`, "left")}
                className="p-1 border border-red rounded-[8px] shadow text-red"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollRow(`${title}-row-1`, "right")}
                className="p-1 border border-red rounded-[8px] shadow text-red"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Games Container */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          expanded
            ? "grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[2000px] overflow-y-auto"
            : ""
        }`}
      >
        {expanded ? (
          // When expanded, show all games in grid format
          filteredGames.map((game) => (
            <div
              key={game.id}
              className="min-w-[100px] h-[125px] rounded-[12px] overflow-hidden cursor-pointer"
              onClick={() => navigate(game.route || "#")}
            >
              {game.image ? (
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              ) : (
                <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]" />
              )}
            </div>
          ))
        ) : (
          // When collapsed, show rows
          <>
            {renderRow(`${title}-row-1`, firstRow)}
            {shouldShowSecondRow &&
              secondRow.length > 0 &&
              renderRow(`${title}-row-2`, secondRow, true)}
          </>
        )}
      </div>
    </div>
  );
};

export default GameSection;
