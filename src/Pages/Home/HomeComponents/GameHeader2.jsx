// import React, { useState,useEffect } from 'react'
// import Aviator from "../../../assets/Home/Aviator2.png";
// import axios from 'axios';
// import apis from '../../../utils/apis';
// import Loader from '../../resuable_component/Loader/Loader';

// export default function GameHeader2() {
//   const [loading, setLoading] = useState(false)
//   const [images, setimages] = useState(null)
//   const image=async()=>{
//     try{
//       setLoading(true)
//       const res=await axios.get(apis.bannerImage)
//       console.log("ress banner",res?.data)
//     }catch(error){
//       console.log(error)
//     }finally{
//       setLoading(false)
//     }
//   }

//   useEffect(()=>{
//     image()
//   },[])
//   if(loading){
//         return (
//           <div className="text-center py-6 text-gray-500 min-h-screen">
//             <Loader />
//           </div>
//         );
//   }
//   return (
//     <div className='p-2 lg:p-0 flex justify-center lg:justify-start'>
//       <img src={Aviator} alt="" className='rounded-[8px] lg2:w-[100%] h-[195px] xsm:h-full w-full lg2:h-[500px]' />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import apis from "../../../utils/apis";

const GameHeader2 = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  const image = async () => {
    try {
      setLoading(true);
      const res = await axios.get(apis.bannerImage);
      console.log("ress banner", res?.data);
      if (res?.data?.data?.length > 0) {
        setBanners(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    image();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (banners.length === 0) {
    return null;
  }

  // ✅ If only one image — show as is
  if (banners.length === 1) {
    return (
      <div className="p-2 lg:p-0 flex justify-center lg:justify-start">
        <img
          src={banners[0].image}
          alt="banner"
          className="rounded-[8px] lg2:w-[100%] h-[195px] xsm:h-full w-full lg2:h-[500px]"
        />
      </div>
    );
  }

  // ✅ If multiple images — show Swiper slider
  return (
    <div className="p-2 lg:p-0 flex justify-center lg:justify-start">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-[8px] lg2:w-[100%] h-[195px] xsm:h-full w-full lg2:h-[500px]"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`banner-${index}`}
              className="rounded-[8px] lg2:w-[100%] h-[195px] xsm:h-full w-full lg2:h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GameHeader2;
