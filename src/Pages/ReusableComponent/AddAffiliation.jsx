import { div } from "framer-motion/client";
import React from "react";

const AffiliateModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      style={{
        fontFamily: "Roboto",
      }}
    >
      <div className="bg-white w-full  mx-2 p-4 rounded-xl shadow-lg relative">
        <div className="">
          {/* Close Button */}
          <button
            className="absolute top-2 right-4 text-[32px] text-black2"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <h2
            className="text-lg font-semibold text-gray-900 mb-4"
            style={{
              fontFamily: "Inter",
            }}
          >
            Add Affiliate
          </h2>
            
          <div className="space-y-4 border border-lightBorder p-4 rounded-[8px] m-2">
            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-medium text-red">
                Campaign name
              </label>
              <input
                type="text"
                placeholder="Enter campaign ID"
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 outline-none border-lightBorder text-grayBorder"
              />
            </div>

            {/* Unique Code */}
            <div>
              <label className="block text-sm font-medium text-red">
                Unique code
              </label>
              <input
                type="text"
                placeholder="Enter unique code"
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 outline-none border-lightBorder text-grayBorder"
              />
            </div>

            {/* Referral Link */}
            <div>
              <label className="block text-sm font-medium text-red">
                Referral link
              </label>
              <input
                type="text"
                disabled
                value="www.winbhai.com/register?campaign="
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed border-lightBorder text-grayBorder"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-gray-400 text-white py-2 rounded-md">
                Reset
              </button>
              <button className="w-full bg-red text-white py-2 rounded-md">
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateModal;
