import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import SlidingTabs from '../Home/HomeComponents/SlidingTabs';
import calender from "../../assets/Wallet/calender.png";
import "./DateInput.css";
import BettingTable from "./BetTable";
import CalendarModal from "../ReusableComponent/Calender";
import ProfitLossTable from "./ProfitLossTable";
import AccountStatementTable from "./AccountStatementTable";
export default function AccountStatement() {
      const startRef = useRef(null);
      const endRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
      const [openModal, setOpenModal] = useState(null); // "start" | "end" | null
const [dropdownModal, setDropdownModal] = useState(null); // "report" | "range" | null

const [reportType, setReportType] = useState("All");
const [dateRange, setDateRange] = useState("Today");

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


  const sampleData = [
  {
    date: "2025-09-06 23:36:18",
    credit: 0,
    debit: 10,
    balance: 0.27,
    description: "Withdraw................",
    round: "02",
  },
  {
    date: "2025-09-06 23:36:18",
    credit: 0,
    debit: -8,
    balance: 0.27,
    description: "Withdraw................",
    round: "02",
  }]

  return (
    <div className="min-h-screen">
      <div className="py-2">
        <SlidingTabs />
      </div>
      <div
        className="w-full bg-red text-white py-2 px-5 font-medium text-sm"
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontStyle: "Regular",
          fontSize: "16px",
        }}
      >
        <h2>Account Statement</h2>
      </div>

      <div className="p-2 px-4">
        {/* Date Filter */}
        <div className="mb-3">
          {/* <div className=" p-0 rounded-md ">
            <label className="block text-gray-600 text-ssm mb-1">Sport:</label>
            <div className="bg-white  rounded-md px-3 py-2 text-gray-900">
              Casino Vivo
            </div>
          </div> */}

          <div className="flex justify-between mb-3 gap-2">
            {/* Start Date */}
            <div className="relative">
              <label className="text-black text-[12px] font-medium">
                From Date
              </label>
              <input
                type="text"
                value={startDate}
                readOnly
                placeholder="mm/dd/yyyy"
                className="custom-date-input p-2 text-ssm w-full bg-white rounded-[8px] shadow pr-10"
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
            <div className="relative">
              <label className="text-black text-[12px] font-medium">
                To Date
              </label>
              <input
                type="text"
                value={endDate}
                readOnly
                placeholder="mm/dd/yyyy"
                className="custom-date-input p-2 text-ssm w-full bg-white rounded-[8px] shadow pr-10"
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
          {/* Dropdown Filters */}
          <div className="flex justify-between mb-3 gap-2">
            {/* First Dropdown: Report Type */}
            <div className="relative w-full">
              <label className="text-black text-[12px] font-medium">Type</label>
              <button
                className="w-full flex items-center justify-between rounded-xl px-3 py-2 bg-white shadow-sm text-ssm font-medium"
                onClick={() =>
                  setDropdownModal(dropdownModal === "report" ? null : "report")
                }
              >
                <span>{reportType}</span>
                <ChevronDown size={18} />
              </button>

              {dropdownModal === "report" && (
                <div className="absolute mt-1 w-full bg-white rounded-xl shadow-lg z-10">
                  {["All", "Deposit/Withdraw Report", "Game Report"].map(
                    (option, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 text-[12px] font-medium"
                        onClick={() => {
                          setReportType(option);
                          setDropdownModal(null);
                        }}
                      >
                        <span>{option}</span>
                        <input
                          type="radio"
                          checked={reportType === option}
                          readOnly
                          className="text-red-600 focus:ring-0"
                        />
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Second Dropdown: Date Range */}
            <div className="relative w-full">
              <label className="text-black text-[12px] font-medium">Type</label>
              <button
                className="w-full flex items-center justify-between rounded-xl px-3 py-2 bg-white shadow-sm text-ssm font-medium"
                onClick={() =>
                  setDropdownModal(dropdownModal === "range" ? null : "range")
                }
              >
                <span>{dateRange}</span>
                <ChevronDown size={18} />
              </button>

              {dropdownModal === "range" && (
                <div className="absolute mt-1 w-full bg-white rounded-xl shadow-lg z-10 text-[12px] font-medium">
                  {["Today", "Yesterday", "Last 7 Days", "Last 30 Days"].map(
                    (option, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 text-[12px] font-medium"
                        onClick={() => {
                          setDateRange(option);
                          setDropdownModal(null);
                        }}
                      >
                        <span>{option}</span>
                        <input
                          type="radio"
                          checked={dateRange === option}
                          readOnly
                          className="text-red-600 focus:ring-0"
                        />
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          <button className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm">
            Submit
          </button>
        </div>
      </div>
      <div className="pl-4">
        {" "}
        {/* Account statment table  */}
        <AccountStatementTable data={sampleData} />
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
