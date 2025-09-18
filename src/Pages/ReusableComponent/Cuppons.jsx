import React from "react";
import { useNavigate } from "react-router-dom";

export default function CouponPage() {
  const navigate = useNavigate();

  const coupons = [
    {
      id: 1,
      title: "Flat 20% off",
      desc: "Casino",
      details: "Lorem ipsum diot",
    },
    {
      id: 2,
      title: "Flat 20% off",
      desc: "Casino",
      details: "Lorem ipsum diot",
    },
    {
      id: 3,
      title: "Flat 20% off",
      desc: "Casino",
      details: "Lorem ipsum diot",
    },
    {
      id: 4,
      title: "Flat 20% off",
      desc: "Casino",
      details: "Lorem ipsum diot",
    },
    {
      id: 5,
      title: "Flat 20% off",
      desc: "Casino",
      details: "Lorem ipsum diot",
    },
    {
      id: 6,
      title: "Flat 20% off",
      desc: "Casino",
      details: "Lorem ipsum diot",
    },
  ];

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      {/* Coupon Code Input */}
      <div className="p-4 bg-white">
        {/* <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="flex-1 px-3 py-2 outline-none text-sm"
          />
          <button className="bg-gray-200 px-4 py-2 text-sm font-semibold">
            APPLY
          </button>
        </div> */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="w-full px-4 py-2 pr-28 border-1 border-red rounded-xl text-[18px] font-medium focus:outline-none bg-white text-inputText"
            style={{ fontFamily: "Roboto, sans-serif" }}
          />
          <button
            type="button"
            className="absolute top-1/2 right-1.5 -translate-y-1/2  text-white px-2 py-1 text-[10px] rounded bg-red hover:bg-red-600"
          >
            APPLY
          </button>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto">
        {coupons.map((coupon) => (
          <div key={coupon.id} className=" text-center overflow-hidden">
            {/* Top header with side cuts */}
            <div className="relative bg-red-700 text-white py-5 rounded-t-2xl border-none">
              <h3 className="text-lg font-bold">{coupon.title}</h3>

              {/* Side cuts */}
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></span>
              <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></span>
            </div>

            {/* Coupon content */}
            <div className="px-6 py-2 space-y-1 bg-white shadow-sm text-left">
              <p className="text-red-700 font-bold text-sm">{coupon.desc}</p>
              <p className="text-gray-700 text-xs">{coupon.details}</p>
            </div>

            {/* Apply Code section */}
            <div className="border-t text-gray-600 text-xs py-2 bg-white rounded-b-2xl">
              Apply Code
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
