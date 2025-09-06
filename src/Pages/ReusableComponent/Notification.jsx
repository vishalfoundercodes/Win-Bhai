import React, { useState } from "react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Promo", "Sports", "Casino", "Account"];

  const notifications = [
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
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      {/* Tabs */}
      <div className="w-full bg-white pt-2">
        <div className="flex gap-3 mb-3 pl-3 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 text-ssm font-medium rounded-md border 
            ${
              activeTab === tab
                ? "bg-red-700 text-white border-red-700"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Unread Notification Bar */}
      <div className="w-full max-w-m items-center p-4">
        <div className="bg-[#FEE7EC] border border-red text-red text-ssm px-6 py-2 rounded-[8px] mb-3">
          You have 4 unread notifications
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`bg-white rounded-xl shadow overflow-hidden border-l-4 ${
                n.border ? "border-red" : "border-white"
              }`}
            >
              {/* Card Body */}
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {n.title}
                  </h3>
                  <span className="bg-red-100 text-red text-xs font-medium px-2 py-0.5 rounded-full">
                    {n.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">{n.desc}</p>

                {/* Action Button aligned to right bottom */}
                <div className="flex justify-between mt-2 -ml-5">
                  {/* Card Footer (time at bottom left) */}
                  <div className="px-4 py-2 text-xs text-gray-500 text-left font-medium">
                    {n.time}
                  </div>
                  <button
                    className={`px-4 py-2 text-xs font-semibold rounded-md text-white bg-red`}
                  >
                    {n.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

