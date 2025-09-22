import React, { useState, useRef } from "react";
import SlidingTabs from '../Home/HomeComponents/SlidingTabs';
import calender from "../../assets/Wallet/calender.png";
import "./DateInput.css";
import BettingTable from "./BetTable";
import CalendarModal from "../ReusableComponent/Calender";
import ProfitLossTable from "./ProfitLossTable";

import { ChevronDown, ChevronUp } from "lucide-react";
export default function ProfitLoss() {
      const startRef = useRef(null);
      const endRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
      const [openModal, setOpenModal] = useState(null); // "start" | "end" | null
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

const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState("Casino Vivo");

const options = [
  "All",
  "Cricket",
  "Football",
  "Tennis",
  "Horse Racing",
  "Greyhound Racing",
  "Kabaddi",
  "Binary",
  "Politics",
  "Live Casino",
  "Int Casino",
  "Casino Vivo",
  "iCasino",
];

const handleSelect = (option) => {
  setSelected(option);
  setIsOpen(false);
};

  return (
    <div>
      <div className="py-2 ">
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
        <h2> Profit Loss</h2>
      </div>

      <div className="p-2 px-4">
        {/* Date Filter */}
        <div className="mb-3">
          <div className="relative w-full">
            {/* Selected box */}
            <div
              className="bg-white rounded-md px-3 py-2 flex items-center justify-between cursor-pointer text-black font-semibold text-ssm"
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
              <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg max-h-100 overflow-y-auto z-50 hide-scrollbar text-black font-semibold text-ssm ">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-3 py-2 cursor-pointer hover:bg-gray-100  border-b border-[#E5E7EB] ${
                      selected === option ? "bg-gray-50 font-medium" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

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
          <button className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm">
            Search
          </button>
        </div>
      </div>
      <div className="px-4">
        {" "}
        <ProfitLossTable />
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
