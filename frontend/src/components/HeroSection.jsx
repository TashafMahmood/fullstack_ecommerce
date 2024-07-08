import React from "react";
import heroImg from '../../public/shopping.png'

const HeroSection = () => {
  return (
    <div className="flex  items-center mx-auto h-screen-height-nav bg-yellow-50">
      <div className="flex-1 p-36">
        <div className="text-[36px]">New Arrivals Only</div>
        <div className="text-[72px] font-extrabold">New collections <br /> for everyone</div>
        <button className="bg-red-600 px-6 mt-10 py-3 rounded-full text-xl text-white font-semibold cursor-pointer hover:bg-red-700">Latest collection</button>
      </div>
      <div className="flex-1  items-center justify-end">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
