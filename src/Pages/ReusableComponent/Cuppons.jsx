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
            className="absolute top-1/2 right-1.5 -translate-y-1/2  text-inputText px-2 py-1 text-[10px] rounded hover:bg-red-600"
          >
            APPLY
          </button>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="p-4 grid grid-cols-2 gap-3 overflow-y-auto">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="bg-white p-3 rounded-md shadow-sm  text-center"
          >
            <h3 className="text-red text-md font-bold">COUPON</h3>
            <div className="border-t border-dashed border-gray-400 my-2"></div>
            <p className="text-red font-semibold text-sm text-start">
              {coupon.title}
            </p>
            <p className="text-ssm text-bold text-gray-800 text-start">
              {coupon.desc}
            </p>
            <p className="text-xs text-bold text-gray-500 text-start">
              {coupon.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
