import { div } from "framer-motion/client";
import React from "react";

const AffiliateModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-1 flex items-center justify-center z-50">
      <div className="bg-white w-full  mx-2 p-4 rounded-xl shadow-lg relative">
        <div className="">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Add Affiliate
          </h2>

          <div className="space-y-4">
            {/* Campaign Name */}
            <div>
              <label className="block text-sm font-medium text-red-600">
                Campaign name
              </label>
              <input
                type="text"
                placeholder="Enter campaign ID"
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 outline-none"
              />
            </div>

            {/* Unique Code */}
            <div>
              <label className="block text-sm font-medium text-red-600">
                Unique code
              </label>
              <input
                type="text"
                placeholder="Enter unique code"
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 outline-none"
              />
            </div>

            {/* Referral Link */}
            <div>
              <label className="block text-sm font-medium text-red-600">
                Referral link
              </label>
              <input
                type="text"
                disabled
                value="www.winbhai.com/register?campaign="
                className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <button className="w-full bg-gray-400 text-white py-2 rounded-md">
                Reset
              </button>
              <button className="w-full bg-red-700 text-white py-2 rounded-md">
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
