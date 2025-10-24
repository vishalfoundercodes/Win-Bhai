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
    <div className="h-screen w-full bg-[#E7E7E7] flex flex-col px-4 py-2">
      {/* Coupon Code Input */}
      <div className="px-4 py-2">
        <div className="flex mt-4 bg-white rounded-xl shadow p-4 gap-3">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="w-full border border-red placeholder:text-red rounded-md px-2 py-2 text-sm focus:outline-none text-ssm "
          />
          <button className="w-full bg-red hover:bg-red-600 text-white px-2 py-1 rounded-md text-ssm font-semibold flex-1">
            APPLY
          </button>
        </div>
      </div>

      {/* Coupons Grid */}
      <div
        className="p-4 grid grid-cols-2 gap-4 overflow-y-auto"
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
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E7E7E7] rounded-full"></span>
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E7E7E7] rounded-full"></span>
              </div>

              {/* Coupon content */}
              <div className="px-6 py-2 space-y-1 bg-white shadow-sm text-left">
                <p className="text-red-700 font-bold text-xs xsm3:text-sm">
                  {coupon.description}
                </p>
                <p className="text-[#000000] text-xs">{coupon.details}</p>
              </div>

              {/* Apply Code section */}
              <div className="border-t text-[#000000] text-xs py-2 bg-white rounded-b-2xl">
                Apply Code
              </div>
            </div>
          ))
        ) : (
          <div><Loader /></div> // Show loading state while data is being fetched
        )}
      </div>
    </div>
  );
}
