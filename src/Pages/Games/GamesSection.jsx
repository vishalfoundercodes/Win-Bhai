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

  return (
    <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-2">
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-2 bg-[#F4F4F4] rounded-[8px] shadow-md mb-3">
        <div className="flex items-center gap-2">
          {<span className="w-6 h-6">{icon || "ff"}</span>}
          <h2 className="text-lg font-semibold">{title || "dcdhb"}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-red font-medium text-sm"
          >
            {expanded ? "Collapse" : "See All"}
          </button>

          {!expanded && (
            <>
              <button
                onClick={() => scrollRow(title + "-row", "left")}
                className="p-1 border border-red rounded-[8px] shadow text-red"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollRow(title + "-row", "right")}
                className="p-1 border border-red rounded-[8px] shadow text-red"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        id={title + "-row"}
        className={`transition-all duration-500 ease-in-out ${
          expanded
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[2000px] overflow-y-auto"
            : "flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
        }`}
      >
        {games.map((game) => (
          <div
            key={game.id}
            className={`${
              expanded ? "w-full h-[150px]" : "min-w-[120px] h-[150px]"
            } bg-re rounded-[8px] shadow overflow-hidden`}
            onClick={() => navigate(game.route)}
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-40 h-full object-cover rounded-[15px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSection;

