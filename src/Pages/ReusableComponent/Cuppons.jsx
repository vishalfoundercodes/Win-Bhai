// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import apis from "../../utils/apis";
// import { useScroll } from "framer-motion";

// export default function CouponPage() {
//   const navigate = useNavigate();
//   const [data,setData]=useState(null)

//   const coupons = [
//     {
//       id: 1,
//       title: "FIRST 5",
//       desc: "Get 5% bonus",
//       details: "On first deposit",
//     },
//     {
//       id: 2,
//       title: "FIRST 5",
//       desc: "Get 5% bonus",
//       details: "On first deposit",
//     },
//     {
//       id: 3,
//       title: "FIRST 5",
//       desc: "Get 5% bonus",
//       details: "On first deposit",
//     },
//     {
//       id: 4,
//       title: "FIRST 5",
//       desc: "Get 5% bonus",
//       details: "On first deposit",
//     },
//     {
//       id: 5,
//       title: "FIRST 5",
//       desc: "Get 5% bonus",
//       details: "On first deposit",
//     },
//     {
//       id: 6,
//       title: "FIRST 5",
//       desc: "Get 5% bonus",
//       details: "On first deposit",
//     },
//   ];

//   const fetchData=async()=>{
//     try {
//       const res = await axios.get(apis.coupon_show);
//       console.log(res?.data?.data)
//       setData(res?.data?.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(()=>{
//     fetchData()
//   },[])

//   return (
//     <div className="h-screen w-full bg-[#E7E7E7] flex flex-col px-4 py-2">
//       {/* Coupon Code Input */}
//       <div className=" px-4 py-2">
//         {/* <div className="flex border border-gray-300 rounded-md overflow-hidden">
//           <input
//             type="text"
//             placeholder="Enter Coupon Code"
//             className="flex-1 px-3 py-2 outline-none text-sm"
//           />
//           <button className="bg-gray-200 px-4 py-2 text-sm font-semibold">
//             APPLY
//           </button>
//         </div> */}
//         <div className=" flex mt-4 bg-white rounded-xl shadow p-4 gap-3">
//           <input
//             type="text"
//             placeholder="Enter Coupon Code"
//             className="w-full border border-red placeholder:text-red rounded-md px-2 py-2 text-sm focus:outline-none text-ssm "
//           />
//           <button className="w-full  bg-red hover:bg-red-600 text-white px-2 py-1 rounded-md text-ssm font-semibold flex-1">
//             APPLY
//           </button>
//         </div>
//       </div>

//       {/* Coupons Grid */}
//       <div
//         className="p-4 grid grid-cols-2 gap-4 overflow-y-auto"
//         style={{
//           fontFamily: "Roboto",
//         }}
//       >
//         {coupons.map((coupon) => (
//           <div key={coupon.id} className=" text-center">
//             {/* Top header with side cuts */}
//             <div className="relative bg-red-700 text-white py-5 rounded-t-2xl border-none">
//               <h3 className="text-[27px] xsm3:text-[32px] font-bold">
//                 {coupon.title}
//               </h3>

//               {/* Side cuts */}
//               <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E7E7E7] rounded-full"></span>
//               <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E7E7E7] rounded-full"></span>
//             </div>

//             {/* Coupon content */}
//             <div className="px-6 py-2 space-y-1 bg-white shadow-sm text-left">
//               <p className="text-red-700 font-bold text-xs xsm3:text-sm">
//                 {coupon.desc}
//               </p>
//               <p className="text-[#000000] text-xs">{coupon.details}</p>
//             </div>

//             {/* Apply Code section */}
//             <div className="border-t text-[#000000] text-xs py-2 bg-white rounded-b-2xl">
//               Apply Code
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../utils/apis";
import Loader from "../resuable_component/Loader/Loader"

export default function CouponPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // This will store the API response

  // Fetch coupons data from the API
  const fetchData = async () => {
    try {
      const res = await axios.get(apis.coupon_show);
      console.log(res?.data?.data); // Log the data for debugging
      setData(res?.data?.data); // Set the response data to the state
    } catch (error) {
      console.log(error); // Handle any errors
    }
  };

  // Call fetchData when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen w-full bg-[#E7E7E7] flex flex-col px-4 py-2 lg2:py-0">
      {/* Coupon Code Input */}
      <div
        className="hidden lg2:block mb-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="8" fill="#C10932" />
          <path
            d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="bg-red lg2:rounded-t-2xl p-2 px-4 hidden lg:block">
        <h2 className="text-white text-sm font-semibold">Redeem</h2>
      </div>
      <div className="px-4 py-2 lg2:pt-0 lg2:px-0 ">
        {/* <div className="flex mt-4 lg2:mt-0 bg-white rounded-xl lg2:rounded-t-none shadow p-4 gap-3">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="w-full  border border-red placeholder:text-red rounded-md px-2 py-2 text-sm focus:outline-none text-ssm "
          />
          <button className="w-full   bg-red hover:bg-red-600 text-white px-2 py-1 rounded-md text-ssm font-semibold flex-1">
            APPLY
          </button>
        </div> */}
        <div className="flex mt-4 lg2:mt-0 bg-white rounded-xl lg2:rounded-t-none shadow p-4 gap-3 lg2:items-center lg2:justify-start">
          <div className="flex w-full lg2:w-auto items-center gap-2">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="w-full lg2:w-[220px] border border-[#C8102E] placeholder:text-[#C8102E] rounded-md px-3 py-2 text-sm focus:outline-none text-ssm"
            />
            <button className="bg-[#C8102E] hover:bg-[#a60d25] text-white px-4 py-2 lg2:px-8 rounded-md text-ssm font-semibold">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Coupons Grid */}
      <div
        className="p-4 lg2:px-6 grid grid-cols-2 lg2:grid-cols-5 gap-4 overflow-y-auto lg2:bg-white rounded-2xl"
        style={{
          fontFamily: "Roboto",
        }}
      >
        {/* Check if data is loaded */}
        {data ? (
          data.map((coupon) => (
            <div key={coupon.id} className="text-center">
              {/* Top header with side cuts */}
              <div className="relative bg-red-700 text-white py-5 rounded-t-2xl border-none">
                <h3 className="text-[27px] xsm3:text-[32px] font-bold">
                  {coupon.title}
                </h3>

                {/* Side cuts */}
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E7E7E7] lg2:bg-white rounded-full"></span>
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E7E7E7] lg2:bg-white rounded-full"></span>
              </div>

              {/* Coupon content */}
              <div className="px-6 py-2 space-y-1 bg-white lg2:bg-lgGray shadow-sm text-left">
                <p className="text-red-700 font-bold text-xs xsm3:text-sm">
                  {coupon.description}
                </p>
                <p className="text-[#000000] text-xs">{coupon.details}</p>
              </div>

              {/* Apply Code section */}
              <div className="border-t text-[#000000] text-xs py-2 bg-white lg2:bg-lgGray rounded-b-2xl">
                Apply Code
              </div>
            </div>
          ))
        ) : (
          <div>
            <Loader />
          </div> // Show loading state while data is being fetched
        )}
      </div>
    </div>
  );
}
