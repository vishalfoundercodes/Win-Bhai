import React from 'react'
import { DollarSign, CreditCard } from "lucide-react";
import { useNavigate } from 'react-router-dom';
export default function WithdrawAffilation() {
    const navigate=useNavigate()
      const offers = [
        {
          id: 1,
          title: "Exclusive bonus unlocked!",
          tag: "promo",
          desc: "Your VIP status has earned you a special bonus. Don’t miss out on this limited-time offer!",
          time: "5:00 PM",
          action: "Claim Now",
          btnColor: "bg-red-600",
          border: "yes",
        },
        {
          id: 2,
          title: "Exclusive bonus unlocked!",
          tag: "promo",
          desc: "Your VIP status has earned you a special bonus. Don’t miss out on this limited-time offer!",
          time: "5:00 PM",
          action: "Deposit",
          btnColor: "bg-pink-600",
          border: "yes",
        },
        {
          id: 3,
          title: "Exclusive bonus unlocked!",
          tag: "promo",
          desc: "Your VIP status has earned you a special bonus. Don’t miss out on this limited-time offer!",
          time: "5:00 PM",
          action: "Claim Now",
          btnColor: "bg-red-600",
          border: "yes",
        },
        {
          id: 4,
          title: "Exclusive bonus unlocked!",
          tag: "promo",
          desc: "Your VIP status has earned you a special bonus. Don’t miss out on this limited-time offer!",
          time: "5:00 PM",
          action: "Bet Now",
          btnColor: "bg-red-600",
        },
        {
          id: 5,
          title: "Exclusive bonus unlocked!",
          tag: "promo",
          desc: "Your VIP status has earned you a special bonus. Don’t miss out on this limited-time offer!",
          time: "5:00 PM",
          action: "View Balance",
          btnColor: "bg-blue-600",
        },
      ];
  return (
    <div
      className="relative min-h-screen"
      style={{
        fontFamily: "Roboto",
      }}
    >
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="h-[32.5%] bg-[#c8102e]"></div>
        <div className="h-[67.5%] bg-grayBg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col justify-between mt-5 mb-6 gap-2">
          <h2
            className="text-white font-medium text-xsm px-2"
            style={{
              fontFamily: "Roboto",
            }}
          >
            Withdrawal
          </h2>
          <div className="flex items-center gap-2">
            {/* Dropdown */}
            <div className=" w-full ">
              {/* Offers List */}
              <div className="space-y-4 px-2 py-0">
                {/* Total Commission */}
                <div className="bg-white rounded-[8px] shadow p-4 border-l-5 border-red-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <DollarSign className="text-red w-5 h-5" />
                    </div>
                    <h3 className="text-gray-800 font-medium">
                      Total Commission
                    </h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mt-3">
                    $12,845.50
                  </p>
                  <p className="text-ssm text-gray-500">Lifetime earnings</p>
                </div>

                {/* Available to Withdraw */}
                <div className="bg-white rounded-[8px] shadow p-4 border-l-5 border-red">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <CreditCard className="text-red w-5 h-5" />
                    </div>
                    <h3 className="text-gray-800 font-medium">
                      Available to Withdraw
                    </h3>
                  </div>
                  <p className="text-2xl font-bold text-red mt-3">$8,320.75</p>
                  <p className="text-ssm text-gray-500">Ready for withdrawal</p>
                </div>

                {/* withdraw funds */}
                <div className="flex w-full items-center justify-center">
                  <button
                    className="px-10 py-4 bg-red text-white rounded-[8px] flex gap-2 items-center justify-center text-sm shadow-md"
                    onClick={() => navigate("/WithdrawFunds")}
                  >
                    <CreditCard className="text-white w-5 h-5" />
                    Withdraw funds
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}