import React from "react";

export default function ProfitLossTable() {
  const data = [
    { event: "Oval Invincibles v London Spirit", total: "-", info: "-" },
    {
      event: "Manchester Originals v Birmingham Phoenix",
      total: "-",
      info: "-",
    },
    {
      event: "Antigua And Barbuda Falcons v St. Kitts and Nevis",
      total: "-",
      info: "-",
    },
    { event: "Welsh Fire v Trent Rockets", total: "+81", info: "+" },
    {
      event: "Manchester Originals W v Birmingham Phoenix W",
      total: "-",
      info: "-",
    },
    { event: "Birmingham Phoenix v Welsh Fire", total: "-73", info: "-" },
    { event: "Australia v South Africa", total: "-", info: "-" },
    { event: "Hobart Hurricanes A v Nepal", total: "-", info: "-" },
    { event: "Southern Brave W v Oval Invincibles W", total: "-", info: "-" },
    {
      event: "Tungabhadra Warriors v Vijayawada Sunshiners",
      total: "-",
      info: "-",
    },
  ];

  return (
    <div className=" flex items-center justify-center">
      <div className="">
        {/* Header Row */}
        <div className="bg-white p-2 rounded-2xl text-ssm font-Inter font-semibold">
          {/* Header Row */}
          <div className="flex justify-between items-center text-gray-700 py-1 px-3 border-b">
            <div className="w-2/3">EVENT</div>
            <div className="w-1/3 flex justify-between">
              <div className="text-center w-1/2">TOTAL</div>
              <div className="text-center w-1/2">INFO</div>
            </div>
          </div>

          {/* Totals */}
          <div className="flex justify-between items-center p-3 ">
            <div className="w-2/3">Grand Total</div>
            <div className="w-1/3 flex justify-between">
              <div className="text-center w-1/2 text-red">-377</div>
              <div className="text-center w-1/2">-</div>
            </div>
          </div>
          <div className="flex justify-between items-center p-3 ">
            <div className="w-2/3">Page Total</div>
            <div className="w-1/3 flex justify-between">
              <div className="text-center w-1/2 text-red">-377</div>
              <div className="text-center w-1/2">-</div>
            </div>
          </div>
        </div>

        {/* Event Rows */}
        {/* Event Rows */}
        {data.map((row, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 text-ssm font-Inter last:border-0"
          >
            {/* Event Name */}
            <div className="w-2/3 text-gray-800">{row.event}</div>

            {/* TOTAL + INFO aligned together */}
            <div className="w-1/3 flex justify-between">
              <div
                className={`text-center w-1/2 ${
                  row.total.startsWith("+")
                    ? "text-green-600 font-semibold"
                    : row.total.startsWith("-")
                    ? "text-red-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {row.total}
              </div>
              <div className="text-center w-1/2 text-gray-600">{row.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
