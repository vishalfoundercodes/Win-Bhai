// import { useState,useEffect } from "react";

// export default function PendingBetsTable({data}) {
//   // const [bets, setBets] = useState([
//   //   { id: 1, date: "07/09/2025, 21:15", sequence: "Bet 1" },
//   //   { id: 2, date: "07/09/2025, 22:30", sequence: "Bet 2" },
//   //   { id: 3, date: "08/09/2025, 14:45", sequence: "Bet 3" },
//   //   { id: 4, date: "08/09/2025, 18:20", sequence: "Bet 1" },
//   //   { id: 5, date: "09/09/2025, 10:05", sequence: "Bet 2" },
//   // ]);

//   // const [selected, setSelected] = useState([]);

//   // const toggleSelect = (id) => {
//   //   setSelected((prev) =>
//   //     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//   //   );
//   // };

//     const [bets, setBets] = useState([]);
//     const [selected, setSelected] = useState([]);
    

//     useEffect(() => {
//       if (!data) return;

//       // Combine all bets into one list (with unique ids)
//       const combined = [
//         ...(data?.bets || []),
//         ...(data?.aviator_bet || []),
//         ...(data?.chicken_bets || []),
//       ].map((bet, index) => ({
//         id: bet.id || index,
//         date: bet.placed_date_time || bet.created_at || "N/A",
//         sequence:
//           bet.game_sr_num || bet.games_no || bet.bet_id || `Bet ${index + 1}`,
//         game_name: bet.game_name || "Unknown",
//       }));

//       setBets(combined);
//       console.log("🎯 Loaded bets into table:", combined);
//     }, [data]);

//     const toggleSelect = (id) => {
//       setSelected((prev) =>
//         prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//       );
//     };

//     if (!bets.length) {
//       return (
//         <div className="text-center py-6 text-gray-500 text-sm">
//           No pending bets found.
//         </div>
//       );
//     }

// return (
//   <div className="w-full mx-auto">
//     {/* Table */}
//     <div className="bg-gray-100 rounded-md p-4 mx-4">
//       <table className="w-full border-separate border-spacing-0">
//         <thead>
//           <tr className="bg-gray-100 text-red font-semibold text-ssm">
//             <th className="py-2 px-2 w-10"></th>
//             <th className="py-2 px-2 text-center">Placed Date & Time</th>
//             <th className="py-2 px-2 text-center">Bet Sequence</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bets.map((bet) => (
//             <tr
//               key={bet.id}
//               className="last:border-0 bg-white border-b border-gray-200"
//             >
//               <td className="py-2 px-2 text-center">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(bet.id)}
//                   onChange={() => toggleSelect(bet.id)}
//                   className="w-4 h-4 cursor-pointer"
//                 />
//               </td>
//               <td className="py-2 px-2 text-gray-700 text-ssm font-medium text-center">
//                 {bet.date}
//               </td>
//               <td className="py-2 px-2 text-gray-700 text-ssm font-medium text-center">
//                 {bet.sequence}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//     {/* Buttons */}
//     <div className="flex justify-between mt-4 mb-4 mx-4 text-ssm">
//       <button className="px-3 py-2 rounded-md border border-red text-red font-medium hover:bg-red-50">
//         Confirm Pending Bets
//       </button>
//       <button className="px-3 py-2 rounded-md bg-red text-white font-medium hover:bg-red">
//         Confirm Pending Bets
//       </button>
//     </div>
//   </div>
// );


// }


// import { useState, useEffect } from "react";

// export default function PendingBetsTable({ data }) {
//   const [bets, setBets] = useState([]);
//   const [selected, setSelected] = useState([]);

//   useEffect(() => {
//     console.log("🔍 PendingBetsTable received data:", data);
//     console.log("🔍 Is array?", Array.isArray(data));
//     console.log("🔍 Data length:", data?.length);

//     if (!data || !Array.isArray(data)) {
//       console.log("⚠️ Data is not a valid array");
//       setBets([]);
//       return;
//     }

//     // The data is already a flat array, so just transform it
//     const transformed = data.map((bet, index) => ({
//       id: bet.id || index,
//       date: bet.date || bet.placed_date_time || bet.created_at || "N/A",
//       sequence:
//         bet.sequence ||
//         bet.game_sr_num ||
//         bet.games_no ||
//         bet.bet_id ||
//         `Bet ${index + 1}`,
//       game_name: bet.game_name || "Unknown",
//     }));

//     console.log("✅ Transformed bets for table:", transformed);
//     setBets(transformed);
//   }, [data]);

//   const toggleSelect = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   if (!bets.length) {
//     return (
//       <div className="text-center py-6 text-gray-500 text-sm">
//         No pending bets found.
//       </div>
//     );
//   }

//   return (
//     <div className="w-full mx-auto">
//       {/* Table */}
//       <div className="bg-gray-100 rounded-md p-4 mx-4">
//         <table className="w-full border-separate border-spacing-0">
//           <thead>
//             <tr className="bg-gray-100 text-red font-semibold text-ssm">
//               <th className="py-2 px-2 w-10"></th>
//               <th className="py-2 px-2 text-center">Placed Date & Time</th>
//               <th className="py-2 px-2 text-center">Bet Sequence</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bets.map((bet) => (
//               <tr
//                 key={bet.id}
//                 className="last:border-0 bg-white border-b border-gray-200"
//               >
//                 <td className="py-2 px-2 text-center">
//                   <input
//                     type="checkbox"
//                     checked={selected.includes(bet.id)}
//                     onChange={() => toggleSelect(bet.id)}
//                     className="w-4 h-4 cursor-pointer"
//                   />
//                 </td>
//                 <td className="py-2 px-2 text-gray-700 text-ssm font-medium text-center">
//                   {bet.date}
//                 </td>
//                 <td className="py-2 px-2 text-gray-700 text-ssm font-medium text-center">
//                   {bet.sequence}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-between mt-4 mb-4 mx-4 text-ssm">
//         <button className="px-3 py-2 rounded-md border border-red text-red font-medium hover:bg-red-50">
//           Confirm Pending Bets
//         </button>
//         <button className="px-3 py-2 rounded-md bg-red text-white font-medium hover:bg-red">
//           Confirm Pending Bets
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function PendingBetsTable({ data }) {
  const [bets, setBets] = useState([]);
  const [selected, setSelected] = useState([]);


  useEffect(() => {
    console.log("🔍 PendingBetsTable received data:", data);
    console.log("🔍 Is array?", Array.isArray(data));
    console.log("🔍 Data length:", data?.length);

    if (!data || !Array.isArray(data)) {
      console.log("⚠️ Data is not a valid array");
      setBets([]);
      return;
    }

    // The data is already a flat array, so just transform it
    const transformed = data.map((bet, index) => ({
      id: bet.id || index,
      date: bet.placed_date_time || bet.date || bet.created_at || "N/A",
      sequence:
        bet.sequence ||
        bet.game_sr_num ||
        bet.games_no ||
        bet.bet_id ||
        `Bet ${index + 1}`,
      game_name: bet.game_name || "Unknown",
    }));

    console.log("✅ Transformed bets for table:", transformed);
    setBets(transformed);
  }, [data]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (!bets.length) {
    return (
      <div className="text-center py-6 text-gray-500 text-sm">
        No pending bets found.
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      {/* Table */}
      <div className="bg-gray-100 rounded-md p-4 mx-4">
        <table className="w-full border-separate border-spacing-0 ">
          <thead>
            <tr className="bg-gray-100 lg2:bg-red text-red lg2:text-white font-semibold text-ssm ">
              <th className="py-2 px-2 w-10"></th>
              <th className="py-2 px-2 text-center">Placed Date & Time</th>
              <th className="py-2 px-2 text-center">Bet Sequence</th>
            </tr>
          </thead>
          <tbody>
            {bets.map((bet) => (
              <tr
                key={bet.id}
                className="last:border-0 bg-white border-b border-gray-200"
              >
                <td className="py-2 px-2 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(bet.id)}
                    onChange={() => toggleSelect(bet.id)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </td>
                <td className="py-2 px-2 text-gray-700 text-ssm font-medium text-center">
                  {bet.date}
                </td>
                <td className="py-2 px-2 text-gray-700 text-ssm font-medium text-center">
                  {bet.sequence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-between lg2:justify-end lg2:gap-2 mt-4 mb-4 mx-4 text-ssm">
        <button className="px-3 py-2 rounded-md border border-red text-red font-medium hover:bg-red-50">
          Confirm Pending Bets
        </button>
        <button className="px-3 py-2 rounded-md bg-red text-white font-medium hover:bg-red">
          Confirm Pending Bets
        </button>
      </div>
    </div>
  );
}