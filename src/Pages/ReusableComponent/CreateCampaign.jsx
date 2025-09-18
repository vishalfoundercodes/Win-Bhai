import { div } from "framer-motion/client";
import React,{useState} from "react";
import AffiliateModal from "./AddAffiliation";

const CreateCampaign = () => {
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4 space-y-4 min-h-screen">
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
      <div className="w-full space-y-1.5">
        <h1 className="text-ssm font-semibold">Featured</h1>
        <div className="w-full max-w-s bg-white rounded-lg shadow">
          <div className="p-3 flex items-center justify-between">
            {/* Left side - Avatar + Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">S</span>
              </div>
              <span className="text-gray-800 font-medium">shivamtrakwin</span>
            </div>

            {/* Right arrow */}
            <span className="text-gray-400 text-lg">{">"}</span>
          </div>
        </div>
        <div className="w-full max-w-s bg-white rounded-lg shadow ">
          <div className="p-3 flex items-center justify-between">
            {/* Left side - Avatar + Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">S</span>
              </div>
              <span className="text-gray-800 font-medium">shivamtrakwin</span>
            </div>

            {/* Right arrow */}
            <span className="text-gray-400 text-lg">{">"}</span>
          </div>
        </div>
        <div className="w-full max-w-s bg-white rounded-lg shadow ">
          <div className="p-3 flex items-center justify-between">
            {/* Left side - Avatar + Name */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <span className="text-pink-600 font-semibold">S</span>
              </div>
              <span className="text-gray-800 font-medium">shivamtrakwin</span>
            </div>

            {/* Right arrow */}
            <span className="text-gray-400 text-lg">{">"}</span>
          </div>
        </div>
      </div>
      {/* Modal Component */}
      <AffiliateModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default CreateCampaign;
