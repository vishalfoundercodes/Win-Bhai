// import React, { useState } from "react";
// import { RefreshCcw } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import calender from "../../assets/Wallet/calender.png";

// export default function DepositHistory() {
//       const [startDate, setStartDate] = useState(null);
//       const [endDate, setEndDate] = useState(null);
//   const [deposits] = useState([
//     {
//       id: "ORD12345675",
//       date: "20 Jun 2023, 9:22 AM",
//       amount: 1000,
//       status: "Failed",
//     },
//     {
//       id: "ORD12345675",
//       date: "20 Jun 2023, 9:22 AM",
//       amount: 1000,
//       status: "Processing",
//     },
//   ]);

//   return (
//     <div className="w-full max-w-m mx-auto  min-h-screen p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center pb-0 mb-0">
//         <h1 className="text-lg font-semibold">Deposits</h1>
//         <button className="p-2 rounded-full hover:bg-gray-200">
//           <RefreshCcw size={20} />
//         </button>
//       </div>

//       {/* Date Filter */}
//       <div className=" mb-3">
//         <div className="flex justify-between mb-3 gap-2">
//           <div>
//             <label className="text-vsm font-medium text-black">
//               Start Date
//             </label>
//             <input
//               type="date"
//               className="p-2 text-ssm w-full bg-white rounded-[8px] shadow"
//               placeholder="mm/dd/yyyy"
//             />
//           </div>
//           <div>
//             {" "}
//             <label className="text-vsm font-medium text-black">End Date</label>
//             <input
//               type="date"
//               className="  p-2 text-ssm w-full bg-white rounded-[8px] shadow"
//               placeholder="mm/dd/yyyy"
//             />
//           </div>
//         </div>
//         <button className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm">
//           Apply Filter
//         </button>
//       </div>

//       {/* Deposit List */}
//       <div className="space-y-3">
//         {deposits.map((deposit, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
//           >
//             <div>
//               <p className="text-sm font-semibold">{deposit.id}</p>
//               <p className="text-xs text-gray-500">{deposit.date}</p>
//             </div>
//             <div className="text-right">
//               {/* Status Badge */}
//               <span
//                 className={`px-2 py-1 text-xs rounded-lg font-medium inline-block mb-1 ${
//                   deposit.status === "Failed"
//                     ? "bg-red-100 text-red-600"
//                     : deposit.status === "Processing"
//                     ? "bg-green-100 text-green-600"
//                     : "bg-gray-100 text-gray-600"
//                 }`}
//               >
//                 {deposit.status}
//               </span>
//               <p className="text-red-600 font-bold">
//                 ₹{deposit.amount.toLocaleString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";
import { RefreshCcw } from "lucide-react";
import calender from "../../assets/Wallet/calender.png";
import "./DateInput.css";
import CalendarModal from "../ReusableComponent/Calender";


export default function DepositHistory() {
  const [deposits] = useState([
    {
      id: "ORD12345675",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Failed",
    },
    {
      id: "ORD16789012",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Processing",
    },
    {
      id: "ORD16789012",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Completed",
    },
    {
      id: "ORD12345675",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Failed",
    },
    {
      id: "ORD16789012",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Processing",
    },
    {
      id: "ORD16789012",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Completed",
    },
    {
      id: "ORD12345675",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Failed",
    },
    {
      id: "ORD16789012",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Processing",
    },
    {
      id: "ORD16789012",
      date: "20 Jun 2023, 9:22 AM",
      amount: 1000,
      status: "Completed",
    },
  ]);
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Failed", "Processing", "Success"];

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const startRef = useRef(null);
  const endRef = useRef(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [openModal, setOpenModal] = useState(null); // "start" | "end" | null

    const formatDate = (date) => {
      if (!date) return "";
      return new Date(date).toLocaleDateString("en-US");
    };

  // helper to format yyyy-mm-dd -> mm/dd/yyyy
  // const formatDate = (value) => {
  //   if (!value) return "";
  //   const [year, month, day] = value.split("-");
  //   return `${month}/${day}/${year}`;
  // };

const [copiedId, setCopiedId] = useState(null);

const handleCopy = (id) => {
  navigator.clipboard.writeText(id);
  setCopiedId(id);
//   console.log("hii1")
  setTimeout(() => {setCopiedId(null)}, 2000);
};

  return (
    <div
      className="w-full max-w-m mx-auto min-h-screen px-4 py-2"
      style={{
        fontFamily: "Inter",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center pb-0 mb-0">
        <h1 className="text-[20px] font-bold">Deposits</h1>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <RefreshCcw size={20} />
        </button>
      </div>

      {/* Date Filter */}
      <div className="mb-3">
        <div className="flex justify-between mb-3 gap-2">
          {/* Start Date */}
          <div className="relative">
            <label className="text-black text-[12px] font-medium">
              Form Date
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
        <div className="flex justify-between gap-2 mb-2">
          <button className="w-full bg-lightGray text-white py-2 rounded-[8px] font-medium text-ssm">
            Just For Today
          </button>
          <button className="w-full bg-lightGray text-white py-2 rounded-[8px] font-medium text-ssm">
            From Yesterday
          </button>
        </div>
        <button className="w-full bg-red text-white py-2 rounded-[8px] font-medium text-ssm">
          Apply Filter
        </button>
      </div>

      {/* tabs */}
      <div className="flex gap-2 mb-3 pl-1 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-0 py-1 text-ssm font-normal rounded-md border 
            ${
              activeTab === tab
                ? "bg-red-700 text-white border-red-700"
                : "bg-white text-lightGray border-grayBorder"
            }`}
          >
            <span className="px-5">{tab}</span>
          </button>
        ))}
      </div>
      {/* Deposit List */}
      <div className="space-y-3">
        {deposits.map((deposit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
          >
            <div>
              <div className="flex items-center gap-2 relative">
                <p className="text-ssm font-semibold">{deposit.id}</p>
                <svg
                  //   onClick={() => navigator.clipboard.writeText(deposit.id)}
                  onClick={() => handleCopy(deposit.id)}
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_913_1604)">
                    <path
                      d="M13.056 5.84033H6.54612C5.82706 5.84033 5.24414 6.42325 5.24414 7.14231V13.6522C5.24414 14.3712 5.82706 14.9542 6.54612 14.9542H13.056C13.7751 14.9542 14.358 14.3712 14.358 13.6522V7.14231C14.358 6.42325 13.7751 5.84033 13.056 5.84033Z"
                      stroke="#9CA3AF"
                      stroke-width="2.23195"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.63987 11.0484C1.92378 11.0484 1.33789 10.4625 1.33789 9.74643V3.23655C1.33789 2.52046 1.92378 1.93457 2.63987 1.93457H9.14975C9.86583 1.93457 10.4517 2.52046 10.4517 3.23655"
                      stroke="#9CA3AF"
                      stroke-width="2.23195"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_913_1604">
                      <rect
                        width="15.6237"
                        height="15.6237"
                        fill="white"
                        transform="translate(0.0351562 0.632812)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                {/* Tooltip */}

                {(copiedId == deposit.id || null) && (
                  <span className="absolute top-[-25px] left-0 bg-black text-white text-xs px-2 py-1 rounded-md shadow">
                    Copied!
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">{deposit.date}</p>
            </div>
            <div className="text-right">
              <span
                className={`px-2 py-1 text-xs rounded-2xl font-medium inline-block mb-1 ${
                  deposit.status === "Failed"
                    ? "bg-red-100 text-red-600"
                    : deposit.status === "Processing"
                    ? "bg-green-100 text-green-600"
                    : "bg-[#DBEAFE] text-[#2563EB]"
                }`}
              >
                {deposit.status}
              </span>
              <p className="text-black2 font-bold">
                <span className="text-red">₹</span>{" "}
                {deposit.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
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



