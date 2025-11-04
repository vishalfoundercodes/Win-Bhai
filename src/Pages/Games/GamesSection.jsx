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

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apis from "../../utils/apis";
import { toast } from "react-toastify";
import Loader from "../resuable_component/Loader/Loader";
import { useProfile } from "../../Context/ProfileContext";

const GameSection = ({ title, games, icon }) => {
   const { profileDetails, setprofileDetails } = useProfile();
 
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [loading,setloading]=useState(false)

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
  const rowSize = 12; // how many items per row
  const firstRow = filteredGames.slice(0, rowSize);
  const secondRow = filteredGames.slice(rowSize, rowSize * 2);

  const renderRow = (rowId, items, isSecondRow = false) => (
    <div
      id={rowId}
      className={`transition-all duration-500 ease-in-out ${
        isSecondRow && !expanded ? "mt-4" : ""
      } hide-scrollbar ${
        expanded
          ? "" // No specific class for expanded state, items will flow naturally
          : "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth hide-scrollbar max-h-[180px]"
      }`}
    >
      {items.map((game) => (
        <div
          key={game.id}
          className="min-w-[80px] h-[100px] xsm3:min-w-[105px] xsm3:h-[125px] lg2:min-w-[135px] lg2:min-h-[150px] rounded-[12px] overflow-hidden cursor-pointer"
          onClick={() => {
            navigate(game.route || "#");
            handleGameOpen(game.gameID);
          }}
        >
          {game.image || game.imgUrl || game.game_img ? (
            <>
              <img
                src={game.image || game.imgUrl || game.game_img}
                alt={game.name}
                className="w-full h-full object-cover rounded-[8px] border-3 border-red"
              />
            </>
          ) : (
            <div className="w-full h-full bg-[#D9D9D9] flex items-center justify-center rounded-[12px]" />
          )}
        </div>
      ))}
    </div>
  );

  //  useEffect(() => {
  //    console.log("games jilli:", games);
  //  },[]);

   const handleGameOpen=async(id)=>{
   const userId = localStorage.getItem("userId");
     if (!userId) {
       toast.error("Please login first.");
       return; // stop further execution
     }
    try{
      setloading(true)
      const userId= localStorage.getItem("userId");
      const payload = {
        user_id: userId,
        amount: profileDetails?.wallet || 0,
        game_id: id,
      };
      console.log("payload",payload)
      const res = await axios.post(apis.openGame, payload);
      console.log("game launch:",res?.data)
      if(res?.data?.status===200){
        // setloading(false)
        // const res2 =await axios.get(res?.data?.gameUrl);

        window.open(res?.data?.apiResponse?.data?.url, "_blank");
      }
      else{
        toast.error("Something went wrong to play the game.")
      }
    }catch(error){
      console.error(error)
      toast.error(error?.response?.data?.message);
    }finally{
      setloading(false)
    }
   }

   
     if (loading)
       return (
         <div className="text-center py-6 text-gray-500 min-h-screen">
           <Loader />
         </div>
       );
  return (
    <div className="w-full px-4 py-3 rounded-[25px] bg-white mt-4">
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
            {expanded ? "See Less" : "See All"}
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
          {expanded && (
            <>
              <button
                onClick={() => scrollRow(`${title}-row-1`, "left")}
                className="p-1 border border-gray rounded-[8px] shadow text-gray"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollRow(`${title}-row-1`, "right")}
                className="p-1 border border-gray rounded-[8px] shadow text-gray"
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
              className="min-w-[85px] h-[115px] xsm3:min-w-[100px] xsm3:h-[125px] rounded-[12px] overflow-hidden cursor-pointer"
              onClick={() => {
                navigate(game.route || "#");
                handleGameOpen(game.gameID);
              }}
            >
              {game.image || game.imgUrl || game.game_img ? (
                <img
                  src={game.image || game.imgUrl || game.game_img}
                  alt={game.name}
                  className="w-full h-full object-cover rounded-[8px] border-3 border-red"
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
