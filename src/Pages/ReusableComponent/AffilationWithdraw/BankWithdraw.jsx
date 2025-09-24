import React, { useState } from 'react'
import { Trash2, Pencil } from "lucide-react";
import { Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../../../assets/Account/image1.png";
import image2 from "../../../assets/Account/image2.png";
import image3 from "../../../assets/Account/image3.png";
import { useNavigate } from 'react-router-dom';
export default function BankWithdraw() {
      const navigate = useNavigate();
       const [amount, setAmount] = useState("");
      const cards = [
        {
          ifsc: "SBIN0030089",
          account: "39227182111",
          name: "Vikas Sharma",
          image: image1,
        },
        {
          ifsc: "HDFC875422",
          account: "98765432100529637538",
          name: "Dummy User",
          image: image2,
        },
        {
          ifsc: "ICIC004421",
          account: "123456789012",
          name: "Rahul Singh",
          image: image3,
        },
      ];
        const quickAmounts = [500, 1000, 5000, 10000, 25000, 50000];
  return (
    <div className="min-h-screen px-4 py-2 space-y-4">
      {/* account detail manual */}
      <div className="text-black2 rounded-[8px] text-sm font-medium">
        <p>Bank Withdrawal :</p>
      </div>
      <container className="mb-2 ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          initialSlide={0}
          loop={false}
          grabCursor={true}
          touchEventsTarget="container"
          className="w-full"
          mousewheel={{ forceToAxis: true }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-32 rounded-xl overflow-hidden shadow">
                {/* Background image */}
                <img
                  src={card.image}
                  alt="Bank Card"
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 flex flex-col py-2 px-6 justify-center">
                  {/* Top row (IFSC + Buttons) */}
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-gray-800 ml-10">
                      {card.ifsc}
                    </p>
                    <div className="flex gap-2">
                      <button className="p-1 bg-white rounded shadow hover:bg-gray-100">
                        <Trash2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        className="p-1 bg-white rounded shadow hover:bg-gray-100"
                        onClick={() =>
                          navigate("/updateAccount", {
                            state: { mode: "update" },
                          })
                        }
                      >
                        <Pencil className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Account number */}
                  <p className="text-lg font-bold tracking-wide text-gray-900 mb-1 mx-auto">
                    {card.account}
                  </p>

                  {/* Name */}
                  <p className="font-medium text-gray-800 text-right mr-4">
                    {card.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </container>
      {/* add account */}
      <div className="flex items-center justify-between w-full p-4 bg-white rounded-[5px] shadow-sm mt-4">
        {/* Left Text */}
        <span className="text-gray-900 font-medium">Add Account</span>

        {/* Plus Button */}
        <button
          className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition"
          onClick={() => navigate("/updateAccount", { state: { mode: "add" } })}
        >
          <Plus className="w-5 h-5 text-red" />
        </button>
      </div>
      {/* amount */}
      <div className="rounded-[8px] shadow p-4 bg-white">
        <h2 className="text-black font-semibold mb-3">
          Amount<span className="text-red-500">*</span>
        </h2>
        <div className="flex items-center gap-2 border rounded-[8px] border-grayBorder px-3 py-1">
          <span className="text-gray-500">₹</span>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full outline-none text-gray-700 font-normal"
          />
          <span className="text-black font-medium">INR</span>
        </div>

        <p className="text-ssm text-lightGray mt-1 font-semibold">
          Min 200 - Max 1000000
        </p>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {quickAmounts.map((val, idx) => (
            <button
              key={idx}
              onClick={() => setAmount(val)}
              className="bg-red text-white rounded-[8px] py-2 font-semibold hover:bg-red-700"
            >
              +{val.toLocaleString()}
            </button>
          ))}
        </div>
      </div>
      {/* submit */}
      <div className="flex w-full items-center justify-center">
        <button
          type="submit"
          className="w-full bg-[#969696] text-white font-medium py-3 rounded-md "
          style={{
            fontFamily: "Roboto",
            fontSize: "13.5px",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
