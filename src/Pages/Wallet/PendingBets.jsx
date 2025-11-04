// import React, { useState, useRef, useEffect } from "react";
// import SlidingTabs from '../Home/HomeComponents/SlidingTabs';
// import calender from "../../assets/Wallet/calender.png";
// import "./DateInput.css";
// import BettingTable from "./BetTable";
// import CalendarModal from "../ReusableComponent/Calender";
// import ProfitLossTable from "./ProfitLossTable";

// import { ChevronDown, ChevronUp } from "lucide-react";
// import PendingBetsTable from "./PendingBetsTable";
// import axios from "axios";
// import apis from "../../utils/apis";
// import Loader from "../resuable_component/Loader/Loader";

// export default function PendingBets() {
//       const startRef = useRef(null);
//       const endRef = useRef(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//       const [openModal, setOpenModal] = useState(null); // "start" | "end" | null
//   // helper to format yyyy-mm-dd -> mm/dd/yyyy
// const formatDate = (value) => {
//   if (!value) return "";

//   // If it's a Date object
//   if (value instanceof Date) {
//     const year = value.getFullYear();
//     const month = String(value.getMonth() + 1).padStart(2, "0");
//     const day = String(value.getDate()).padStart(2, "0");
//     return `${month}/${day}/${year}`;
//   }

//   // If it's already a string (yyyy-mm-dd)
//   if (typeof value === "string") {
//     const [year, month, day] = value.split("-");
//     return `${month}/${day}/${year}`;
//   }

//   return "";
// };

// const [isOpen, setIsOpen] = useState(false);
// const [selected, setSelected] = useState("All");

// const options = [
//   "All",
//   "Aviator",
//   "Wingo",
//   "Chicken Road",
// ]

// const handleSelect = (option) => {
//   setSelected(option);
//   setIsOpen(false);
// };

//   const [loading, setloading] = useState(false);
//     const [pendingBets, setPendingBets] = useState(null);
//   const fetchData = async () => {
//     try {
//       setloading(true);
//       const payload = {
//         user_id: localStorage.getItem("userId"),
//       };
//       const res = await axios.post(apis.pendingBets_winbhai, payload);
//       console.log(res?.data?.data);
//       // API returns data like: { aviator_bet, bets, chicken_bets }
//       setPendingBets(res.data?.data || {});
//       setloading(false);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setloading(false);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="py-2 ">
//         <SlidingTabs />
//       </div>
//       <div
//         className="w-full bg-red text-white py-2 px-5 font-medium text-sm"
//         style={{
//           fontFamily: "Roboto",
//           fontWeight: "400",
//           fontStyle: "Regular",
//           fontSize: "16px",
//         }}
//       >
//         <h2> Pending Bets</h2>
//       </div>

//       <div className="p-2 px-4">
//         {/* Date Filter */}
//         <div className="mb-3">
//           <div className="relative w-full">
//             {/* Selected box */}
//             <div
//               className="bg-white rounded-md px-3 py-2 flex items-center justify-between cursor-pointer text-black font-semibold text-ssm"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <span>{selected}</span>
//               {isOpen ? (
//                 <ChevronUp className="w-4 h-4 text-gray-500" />
//               ) : (
//                 <ChevronDown className="w-4 h-4 text-gray-500" />
//               )}
//             </div>

//             {/* Dropdown menu */}
//             {isOpen && (
//               <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg max-h-100 overflow-y-auto z-50 hide-scrollbar text-black font-semibold text-ssm ">
//                 {options.map((option) => (
//                   <div
//                     key={option}
//                     onClick={() => handleSelect(option)}
//                     className={`px-3 py-2 cursor-pointer hover:bg-gray-100  border-b border-[#E5E7EB] ${
//                       selected === option ? "bg-gray-50 font-medium" : ""
//                     }`}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="flex justify-between mb-3 gap-2">
//             {/* Start Date */}
//             <div className="relative">
//               <label className="text-black text-[12px] font-medium">
//                 From Date
//               </label>
//               <input
//                 type="text"
//                 value={startDate}
//                 readOnly
//                 placeholder="mm/dd/yyyy"
//                 className="custom-date-input p-2 text-ssm w-full bg-white rounded-[8px] shadow pr-10"
//                 onClick={() => setOpenModal("start")}
//               />
//               <img
//                 src={calender}
//                 alt="calendar"
//                 className="w-5 h-5 absolute right-3 top-9 cursor-pointer"
//                 onClick={() => setOpenModal("start")}
//               />
//             </div>

//             {/* End Date */}
//             <div className="relative">
//               <label className="text-black text-[12px] font-medium">
//                 To Date
//               </label>
//               <input
//                 type="text"
//                 value={endDate}
//                 readOnly
//                 placeholder="mm/dd/yyyy"
//                 className="custom-date-input p-2 text-ssm w-full bg-white rounded-[8px] shadow pr-10"
//                 onClick={() => setOpenModal("end")}
//               />
//               <img
//                 src={calender}
//                 alt="calendar"
//                 className="w-5 h-5 absolute right-3 top-9 cursor-pointer"
//                 onClick={() => setOpenModal("end")}
//               />
//             </div>
//           </div>
//           <button className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm">
//             Apply Filter
//           </button>
//         </div>
//       </div>
//       <div className="">
//         {" "}
//         {/* <ProfitLossTable /> */}
//         <PendingBetsTable data={pendingBets} />
//       </div>

//       {/* Calendar Modal */}
//       <CalendarModal
//         isOpen={openModal !== null}
//         onClose={() => setOpenModal(null)}
//         onSelect={(date) => {
//           if (openModal === "start") setStartDate(formatDate(date));
//           if (openModal === "end") setEndDate(formatDate(date));
//         }}
//       />
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// import SlidingTabs from "../Home/HomeComponents/SlidingTabs";
// import calender from "../../assets/Wallet/calender.png";
// import "./DateInput.css";
// import BettingTable from "./BetTable";
// import CalendarModal from "../ReusableComponent/Calender";
// import ProfitLossTable from "./ProfitLossTable";

// import { ChevronDown, ChevronUp } from "lucide-react";
// import PendingBetsTable from "./PendingBetsTable";
// import axios from "axios";
// import apis from "../../utils/apis";
// import Loader from "../resuable_component/Loader/Loader";

// export default function PendingBets() {
//   const startRef = useRef(null);
//   const endRef = useRef(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [openModal, setOpenModal] = useState(null); // "start" | "end" | null
//   const [filteredData, setFilteredData] = useState([]);

//   // helper to format yyyy-mm-dd -> mm/dd/yyyy
//   const formatDate = (value) => {
//     if (!value) return "";

//     // If it's a Date object
//     if (value instanceof Date) {
//       const year = value.getFullYear();
//       const month = String(value.getMonth() + 1).padStart(2, "0");
//       const day = String(value.getDate()).padStart(2, "0");
//       return `${month}/${day}/${year}`;
//     }

//     // If it's already a string (yyyy-mm-dd)
//     if (typeof value === "string") {
//       const [year, month, day] = value.split("-");
//       return `${month}/${day}/${year}`;
//     }

//     return "";
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState("All");

//   const options = ["All", "Aviator", "Wingo", "Chicken Road"];

//   const handleSelect = (option) => {
//     setSelected(option);
//     setIsOpen(false);
//   };

//   const [loading, setloading] = useState(false);
//   const [pendingBets, setPendingBets] = useState(null);

//   const fetchData = async () => {
//     try {
//       setloading(true);
//       const payload = {
//         user_id: localStorage.getItem("userId"),
//       };
//       const res = await axios.post(apis.pendingBets_winbhai, payload);
//       console.log("📥 API Response:", res?.data?.data);
//       // API returns data like: { aviator_bet, bets, chicken_bets }
//       setPendingBets(res.data?.data || {});
//     } catch (error) {
//       console.log("❌ Error fetching data:", error);
//     } finally {
//       setloading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // 👇 Filter data whenever user selects an option or data changes
//   useEffect(() => {
//     console.log("🔄 Filter Effect Running...");
//     console.log("pendingBets:", pendingBets);
//     console.log("selected:", selected);

//     if (!pendingBets) {
//       console.log("⚠️ No pending bets data");
//       setFilteredData([]);
//       return;
//     }

//     // Combine all bets from different sources
//     const combinedData = [
//       ...(Array.isArray(pendingBets?.aviator_bet)
//         ? pendingBets.aviator_bet
//         : []),
//       ...(Array.isArray(pendingBets?.bets) ? pendingBets.bets : []),
//       ...(Array.isArray(pendingBets?.chicken_bets)
//         ? pendingBets.chicken_bets
//         : []),
//     ];

//     console.log("🔍 All Combined Data:", combinedData);
//     console.log("🔍 Total Items:", combinedData.length);
//     console.log("🎯 Selected Filter:", selected);

//     // Filter based on selection (case-insensitive comparison)
//     let filtered;
//     if (selected === "All") {
//       filtered = combinedData;
//       console.log("📊 Showing all data (no filter)");
//     } else {
//       filtered = combinedData.filter((item) => {
//         const gameName = item.game_name?.trim().toLowerCase();
//         const selectedGame = selected.trim().toLowerCase();
//         const matches = gameName === selectedGame;
//         if (matches) {
//           console.log(`✓ Match found: "${gameName}" === "${selectedGame}"`);
//         }
//         return matches;
//       });
//     }

//     console.log("✅ Filtered Data Count:", filtered.length);
//     console.log("✅ Filtered Data:", filtered);

//     // Force state update
//     setFilteredData([...filtered]);
//   }, [selected, pendingBets]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="py-2">
//         <SlidingTabs />
//       </div>
//       <div
//         className="w-full bg-red text-white py-2 px-5 font-medium text-sm"
//         style={{
//           fontFamily: "Roboto",
//           fontWeight: "400",
//           fontStyle: "Regular",
//           fontSize: "16px",
//         }}
//       >
//         <h2>Pending Bets</h2>
//       </div>

//       <div className="p-2 px-4">
//         {/* Game Filter Dropdown */}
//         <div className="mb-3">
//           <div className="relative w-full">
//             {/* Selected box */}
//             <div
//               className="bg-white rounded-md px-3 py-2 flex items-center justify-between cursor-pointer text-black font-semibold text-ssm"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <span>{selected}</span>
//               {isOpen ? (
//                 <ChevronUp className="w-4 h-4 text-gray-500" />
//               ) : (
//                 <ChevronDown className="w-4 h-4 text-gray-500" />
//               )}
//             </div>

//             {/* Dropdown menu */}
//             {isOpen && (
//               <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg max-h-100 overflow-y-auto z-50 hide-scrollbar text-black font-semibold text-ssm">
//                 {options.map((option) => (
//                   <div
//                     key={option}
//                     onClick={() => handleSelect(option)}
//                     className={`px-3 py-2 cursor-pointer hover:bg-gray-100 border-b border-[#E5E7EB] ${
//                       selected === option ? "bg-gray-50 font-medium" : ""
//                     }`}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Date Range Filter */}
//           <div className="flex justify-between mb-3 gap-2 mt-3">
//             {/* Start Date */}
//             <div className="relative flex-1">
//               <label className="text-black text-[12px] font-medium">
//                 From Date
//               </label>
//               <input
//                 type="text"
//                 value={startDate}
//                 readOnly
//                 placeholder="mm/dd/yyyy"
//                 className="custom-date-input p-2 text-ssm w-full bg-white rounded-[8px] shadow pr-10"
//                 onClick={() => setOpenModal("start")}
//               />
//               <img
//                 src={calender}
//                 alt="calendar"
//                 className="w-5 h-5 absolute right-3 top-9 cursor-pointer"
//                 onClick={() => setOpenModal("start")}
//               />
//             </div>

//             {/* End Date */}
//             <div className="relative flex-1">
//               <label className="text-black text-[12px] font-medium">
//                 To Date
//               </label>
//               <input
//                 type="text"
//                 value={endDate}
//                 readOnly
//                 placeholder="mm/dd/yyyy"
//                 className="custom-date-input p-2 text-ssm w-full bg-white rounded-[8px] shadow pr-10"
//                 onClick={() => setOpenModal("end")}
//               />
//               <img
//                 src={calender}
//                 alt="calendar"
//                 className="w-5 h-5 absolute right-3 top-9 cursor-pointer"
//                 onClick={() => setOpenModal("end")}
//               />
//             </div>
//           </div>
//           <button className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm">
//             Apply Filter
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="mt-4">
//         {console.log("🎯 Passing to PendingBetsTable:", filteredData)}
//         <PendingBetsTable data={filteredData} />
//         {filteredData.length === 0 && (
//           <p className="text-center text-gray-500 mt-4">
//             No pending bets found
//           </p>
//         )}
//       </div>

//       {/* Calendar Modal */}
//       <CalendarModal
//         isOpen={openModal !== null}
//         onClose={() => setOpenModal(null)}
//         onSelect={(date) => {
//           if (openModal === "start") setStartDate(formatDate(date));
//           if (openModal === "end") setEndDate(formatDate(date));
//         }}
//       />
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import SlidingTabs from "../Home/HomeComponents/SlidingTabs";
import calender from "../../assets/Wallet/calender.png";
import "./DateInput.css";
import CalendarModal from "../ReusableComponent/Calender";
import { ChevronDown, ChevronUp } from "lucide-react";
import PendingBetsTable from "./PendingBetsTable";
import axios from "axios";
import apis from "../../utils/apis";
import Loader from "../resuable_component/Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function PendingBets() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [openModal, setOpenModal] = useState(null); // "start" | "end" | null
  const [filteredData, setFilteredData] = useState([]);
  const [tempFilteredData, setTempFilteredData] = useState([]); // Store game-filtered data
    const navigate = useNavigate();

  // helper to format yyyy-mm-dd -> mm/dd/yyyy
  const formatDate = (value) => {
    if (!value) return "";

    // If it's a Date object
    if (value instanceof Date) {
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, "0");
      const day = String(value.getDate()).padStart(2, "0");
      return `${month}/${day}/${year}`;
    }

    // If it's already a string (yyyy-mm-dd)
    if (typeof value === "string") {
      const [year, month, day] = value.split("-");
      return `${month}/${day}/${year}`;
    }

    return "";
  };

  // Helper to parse date from API format: "01-10-2025 09:22:08 AM"
  const parseDate = (dateString) => {
    if (!dateString) return null;

    // Handle format: "dd-mm-yyyy HH:MM:SS AM/PM"
    const match = dateString.match(/(\d{2})-(\d{2})-(\d{4})/);
    if (match) {
      const [, day, month, year] = match;
      return new Date(`${year}-${month}-${day}`);
    }

    // Fallback: try to parse directly
    const parsed = new Date(dateString);
    return isNaN(parsed.getTime()) ? null : parsed;
  };

  // Helper to convert mm/dd/yyyy to Date object
  const parseFilterDate = (dateString) => {
    if (!dateString) return null;
    const [month, day, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  // Apply date filter
  const applyDateFilter = () => {
    console.log("🗓️ Applying date filter...");
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    // If no date is selected, show all game-filtered data
    if (!startDate && !endDate) {
      console.log("⚠️ No date range selected - showing all data");
      setFilteredData([...tempFilteredData]);
      return;
    }

    const startDateTime = startDate ? parseFilterDate(startDate) : null;
    const endDateTime = endDate ? parseFilterDate(endDate) : null;

    if (startDateTime) startDateTime.setHours(0, 0, 0, 0);
    if (endDateTime) endDateTime.setHours(23, 59, 59, 999);

    console.log("📅 Start DateTime:", startDateTime);
    console.log("📅 End DateTime:", endDateTime);

    const filtered = tempFilteredData.filter((item) => {
      const betDate = parseDate(
        item.placed_date_time || item.date || item.created_at
      );

      if (!betDate) {
        console.log("⚠️ Invalid date for item:", item);
        return false;
      }

      betDate.setHours(0, 0, 0, 0);

      const afterStart = !startDateTime || betDate >= startDateTime;
      const beforeEnd = !endDateTime || betDate <= endDateTime;

      const isInRange = afterStart && beforeEnd;

      if (isInRange) {
        console.log(`✓ Date match: ${item.placed_date_time || item.date}`);
      }

      return isInRange;
    });

    console.log("✅ Filtered by date count:", filtered.length);
    setFilteredData([...filtered]);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const options = ["All", "Aviator", "Wingo", "Chicken Road"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const [loading, setloading] = useState(false);
  const [pendingBets, setPendingBets] = useState(null);

  const fetchData = async () => {
    try {
      setloading(true);
      const payload = {
        user_id: localStorage.getItem("userId"),
      };
      const res = await axios.post(apis.pendingBets_winbhai, payload);
      console.log("📥 API Response:", res?.data?.data);
      setPendingBets(res.data?.data || {});
    } catch (error) {
      console.log("❌ Error fetching data:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 👇 Filter data by game type first (store in tempFilteredData)
  useEffect(() => {
    console.log("🔄 Filter Effect Running...");
    console.log("pendingBets:", pendingBets);
    console.log("selected:", selected);

    if (!pendingBets) {
      console.log("⚠️ No pending bets data");
      setTempFilteredData([]);
      setFilteredData([]);
      return;
    }

    // Combine all bets from different sources
    const combinedData = [
      ...(Array.isArray(pendingBets?.aviator_bet)
        ? pendingBets.aviator_bet
        : []),
      ...(Array.isArray(pendingBets?.bets) ? pendingBets.bets : []),
      ...(Array.isArray(pendingBets?.chicken_bets)
        ? pendingBets.chicken_bets
        : []),
    ];

    console.log("🔍 All Combined Data:", combinedData);
    console.log("🔍 Total Items:", combinedData.length);
    console.log("🎯 Selected Filter:", selected);

    // Filter based on game selection
    let filtered;
    if (selected === "All") {
      filtered = combinedData;
      console.log("📊 Showing all games (no game filter)");
    } else {
      filtered = combinedData.filter((item) => {
        const gameName = item.game_name?.trim().toLowerCase();
        const selectedGame = selected.trim().toLowerCase();
        const matches = gameName === selectedGame;
        if (matches) {
          console.log(`✓ Game Match: "${gameName}" === "${selectedGame}"`);
        }
        return matches;
      });
    }

    console.log("✅ Filtered by Game Count:", filtered.length);

    // Store in temp (this will be further filtered by date when "Apply Filter" is clicked)
    setTempFilteredData([...filtered]);

    // If no date filter is applied, show all game-filtered data
    if (!startDate && !endDate) {
      console.log("📊 No date filter - showing all game-filtered data");
      setFilteredData([...filtered]);
    } else {
      // Re-apply date filter if dates are already selected
      applyDateFilter();
    }
  }, [selected, pendingBets]);

  // Re-apply date filter when tempFilteredData changes and dates are selected
  useEffect(() => {
    if ((startDate || endDate) && tempFilteredData.length > 0) {
      applyDateFilter();
    }
  }, [tempFilteredData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="py-2 lg2:hidden">
        <SlidingTabs />
      </div>
      <div
        className="w-full bg-red text-white py-2 px-5 font-medium text-sm lg2:hidden"
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontStyle: "Regular",
          fontSize: "16px",
        }}
      >
        <h2>Pending Bets</h2>
      </div>

      <div
        className="hidden lg2:block mb-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="8" fill="#C10932" />
          <path
            d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="bg-red lg2:rounded-t-2xl p-2 px-4 hidden lg:block">
        <h2 className="text-white text-sm font-semibold">Pending Bets</h2>
      </div>
      <div className="lg2:bg-white w-full  lg2:rounded-b-2xl">
        <div className="py-6 hidden lg2:block">
          <SlidingTabs />
        </div>

        <div className="lg2:grid lg2:grid-cols-12 lg2:gap-4 lg2:bg-white lg2:rounded-b-2xl lg2:py-3 lg2:px-8">
          <div className="p-2 px-4 lg2:col-span-5">
            {/* Game Filter Dropdown */}
            <div className="mb-3 ">
              <div className="relative w-full">
                {/* Selected box */}
                <div
                  className="bg-white lg2:bg-lgGray rounded-md px-3 py-2 flex items-center justify-between cursor-pointer text-black font-semibold text-ssm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>{selected}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute mt-1 w-full bg-white lg2:bg-lgGray rounded-md shadow-lg max-h-100 overflow-y-auto z-50 hide-scrollbar text-black font-semibold text-ssm">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 border-b border-[#E5E7EB] ${
                          selected === option ? "bg-gray-50 font-medium" : ""
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Date Range Filter */}
              <div className="flex justify-between mb-3 gap-2 mt-3">
                {/* Start Date */}
                <div className="relative flex-1">
                  <label className="text-black text-[12px] font-medium">
                    From Date
                  </label>
                  <input
                    type="text"
                    value={startDate}
                    readOnly
                    placeholder="mm/dd/yyyy"
                    className="custom-date-input p-2 text-ssm w-full bg-white lg2:bg-lgGray rounded-[8px] shadow pr-10"
                    onClick={() => setOpenModal("start")}
                  />
                  <img
                    src={calender}
                    alt="calendar"
                    className="w-5 h-5 absolute right-3 top-9 cursor-pointer"
                    onClick={() => setOpenModal("start")}
                  />
                </div>

                {/* End Date */}
                <div className="relative flex-1">
                  <label className="text-black text-[12px] font-medium">
                    To Date
                  </label>
                  <input
                    type="text"
                    value={endDate}
                    readOnly
                    placeholder="mm/dd/yyyy"
                    className="custom-date-input p-2 text-ssm w-full bg-white lg2:bg-lgGray rounded-[8px] shadow pr-10"
                    onClick={() => setOpenModal("end")}
                  />
                  <img
                    src={calender}
                    alt="calendar"
                    className="w-5 h-5 absolute right-3 top-9 cursor-pointer"
                    onClick={() => setOpenModal("end")}
                  />
                </div>
              </div>
              <button
                className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm cursor-pointer"
                onClick={applyDateFilter}
              >
                Apply Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-4 lg2:col-span-7">
            {console.log("🎯 Passing to PendingBetsTable:", filteredData)}
            <PendingBetsTable data={filteredData} />
            {/* {filteredData.length === 0 && !loading && (
          <p className="text-center text-gray-500 mt-4">
            No pending bets found
          </p>
        )} */}
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={openModal !== null}
        onClose={() => setOpenModal(null)}
        onSelect={(date) => {
          if (openModal === "start") setStartDate(formatDate(date));
          if (openModal === "end") setEndDate(formatDate(date));
        }}
      />
    </div>
  );
}