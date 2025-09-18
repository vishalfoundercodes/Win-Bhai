import React,{useState} from "react";
import Pagination from "../ReusableComponent/Pagination";
import { div } from "framer-motion/client";

export default function BettingTable() {
    const data = [
      {
        betId: 28687398,
        title: "Calicut Globstars V Kochi Blue Tigers/20 Over Run CG/100.00",
        rate: 230,
        stake: 200,
        profitLoss: 200,
        result: 249,
        placedTime: "2025-08-27 15:52:16",
        settleTime: "2025-08-27 16:25:42",
      },
      {
        betId: 28687398,
        title: "Calicut Globstars V Kochi Blue Tigers/20 Over Run CG/100.00",
        rate: 230,
        stake: 200,
        profitLoss: 200,
        result: 249,
        placedTime: "2025-08-27 15:52:16",
        settleTime: "2025-08-27 16:25:42",
      },
    ];
      const [currentPage, setCurrentPage] = useState(1);
      const [rowsPerPage, setRowsPerPage] = useState(10);
  
      const totalPages = Math.ceil(data.length / rowsPerPage);
  
      const paginatedData = data.slice(
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
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-grayBorder last:border-none whitespace-nowrap text-darkGray"
              >
                <td className="px-3 py-2">{row.betId}</td>
                <td className="px-3 py-2">{row.title}</td>
                <td className="px-3 py-2">{row.rate}</td>
                <td className="px-3 py-2">{row.stake}</td>
                <td className="px-3 py-2 text-green-600 font-medium">
                  {row.profitLoss.toFixed(3)}
                </td>
                <td className="px-3 py-2">{row.result}</td>
                <td className="px-3 py-2">{row.placedTime}</td>
                <td className="px-3 py-2">{row.settleTime}</td>
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
