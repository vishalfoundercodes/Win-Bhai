import { div } from "framer-motion/client";
import React,{useState} from "react";
import AffiliateModal from "./AddAffiliation";

const CreateCampaign = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="p-4 space-y-4 min-h-screen"
      style={{
        fontFamily: "Roboto",
      }}
    >
      <div className="bg-red text-white rounded-lg p-3 flex items-center justify-between mx-auto">
        <div>
          <h2 className="text-lg font-bold">Refer & Earn</h2>
          <p className="mt-1 text-ssm">Invite friends and earn bonus rewards</p>
          <button className="mt-4 bg-[#4EB92B] text-white px-4 py-2 rounded-md text-ssm font-medium hover:bg-green-600">
            Join Now
          </button>
        </div>
        <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center text-2xl font-bold">
          %
        </div>
      </div>
      <div
        className=" border-2 border-black px-2 py-3 w-full rounded-[8px] text-center text-gray"
        onClick={() => setIsOpen(true)}
      >
        <button>Add New Affiliate</button>
      </div>
      <div className="w-full space-y-2">
        <h1 className="text-ssm font-semibold">Featured</h1>
        <div className="space-y-3">
          <div className="w-full max-w-s bg-white rounded-[8px]  shadow ">
            <div className="p-3 flex items-center justify-between">
              {/* Left side - Avatar + Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">S</span>
                </div>
                <span className="text-gray-800 font-medium">shivamtrakwin</span>
              </div>

              {/* Right arrow */}
              <span className="text-gray-400 text-lg">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.69922 11.8008L6.69922 6.80078L1.69922 1.80078"
                    stroke="#9CA3AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full max-w-s bg-white rounded-[8px] shadow ">
            <div className="p-3 flex items-center justify-between">
              {/* Left side - Avatar + Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">S</span>
                </div>
                <span className="text-gray-800 font-medium">shivamtrakwin</span>
              </div>

              {/* Right arrow */}
              <span className="text-gray-400 text-lg">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.69922 11.8008L6.69922 6.80078L1.69922 1.80078"
                    stroke="#9CA3AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full max-w-s bg-white rounded-[8px]  shadow ">
            <div className="p-3 flex items-center justify-between">
              {/* Left side - Avatar + Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-600 font-semibold">S</span>
                </div>
                <span className="text-gray-800 font-medium">shivamtrakwin</span>
              </div>

              {/* Right arrow */}
              <span className="text-gray-400 text-lg">
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.69922 11.8008L6.69922 6.80078L1.69922 1.80078"
                    stroke="#9CA3AF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Component */}
      <AffiliateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default CreateCampaign;
