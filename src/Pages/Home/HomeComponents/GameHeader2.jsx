import React from 'react'
import Aviator from "../../../assets/Home/Aviator2.png";
export default function GameHeader2() {
  return (
    <div className='p-2 lg:p-0 flex justify-center lg:justify-start'>
      <img src={Aviator} alt="" className='rounded-[8px] lg2:w-[100%] h-[195px] xsm:h-full w-full lg2:h-[500px]' />
    </div>
  );
}
