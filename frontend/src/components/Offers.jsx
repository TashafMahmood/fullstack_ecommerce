import React from "react";

const Offers = () => {
  return (
    <div className="bg-purple-200 flex items-end justify-center">
      <div className="text-center p-12">
        <div className="text-[48px] ">Exclusive Offers For You!</div>
        <div className="text-2xl mt-6">Only on best selling products.</div>
        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white text-xl font-semibold mt-6">
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Offers;
