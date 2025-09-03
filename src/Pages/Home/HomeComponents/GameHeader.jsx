import React from 'react'
import Aviator from "../../../assets/Home/Aviator.png";
export default function GameHeader() {
  return (
    <div className='p-2 lg:p-0 flex justify-center lg:justify-start'>
      <img src={Aviator} alt="" className='rounded-[15px] lg:w-[70%] ' />
    </div>
  );
}
