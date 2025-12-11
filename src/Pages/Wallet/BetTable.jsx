import React, { useState, useMemo, useEffect } from "react";
import Pagination from "../ReusableComponent/Pagination";
import { div } from "framer-motion/client";

export default function BettingTable({data}) {
useEffect(()=>{
  console.log("data",data);
},[data])

  const combinedData = useMemo(() => {
    if (!data) return [];
    const aviator = data.aviator_bets || [];
    const chicken = data.chicken_bets || [];
    const bets = data.bets || [];
    const jili_bets = data.jili_bets || [];
    return [...aviator, ...bets, ...chicken, ...jili_bets];
  }, [data]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const totalPages = Math.ceil(data.length / rowsPerPage);

   const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(10);
   const totalPages = Math.ceil(combinedData.length / rowsPerPage);

  const paginatedData = combinedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div>
      <div className="w-full overflow-x-auto  border-darkGray rounded-t-[8px] hide-scrollbar">
        <table className="min-w-[800px] w-full border-collapse ">
          {/* Header */}
          <thead>
            <tr
              className="bg-red text-white font-normal text-ssm whitespace-nowrap border-grayBorder "
              style={{
                fontFamily: "Roboto",
                fontStyle: "SemiBold",
                fontSize: "12.16px",
              }}
            >
              <th className="px-3 py-2 text-left">BET ID</th>
              <th className="px-3 py-2 text-left">TITLE</th>
              <th className="px-3 py-2 text-left">RATE</th>
              <th className="px-3 py-2 text-left">STAKE</th>
              <th className="px-3 py-2 text-left">PROFIT LOSS</th>
              <th className="px-3 py-2 text-left">RESULT</th>
              <th className="px-3 py-2 text-left">PLACED TIME</th>
              <th className="px-3 py-2 text-left">SETTLE TIME</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-ssm bg-white">
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-grayBorder last:border-none whitespace-nowrap text-darkGray"
              >
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.game_sr_num || row.games_no || row.user_id || row.bet_id}
                </td>
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.title}
                </td>
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.rate}
                </td>
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.stake}
                </td>
                <td
                  className={`px-3 py-2 border-r border-b border-lightBorder  font-medium ${
                    row.win_status === "Loss"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {row.profit_loss}
                </td>
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.result}
                </td>
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.placed_at}
                </td>
                <td className="px-3 py-2 border-r border-b border-lightBorder">
                  {row.settled_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(num) => {
          setRowsPerPage(num);
          setCurrentPage(1); // reset page
        }}
      />
    </div>
  );
}
