import React from "react";
import { useNavigate } from "react-router-dom";
import { getPercentage } from "../utils/functions";

const Item = ({ data, redirect }) => {
  const navigate = useNavigate();

  return (
    <div
      className="shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer relative"
      onClick={() => (!redirect ? null : navigate(`/product/${data?.id}`))}
    >
      <div className="relative">
        <img src={data?.image} alt="" />
        <div className="bg-pink-600 absolute top-4 left-0 px-2 py-1 text-white rounded-tr-md">
          {getPercentage(data?.price, data?.mrp)} off
        </div>
      </div>
      <div className="p-4">
        <div className="text-md mb-2">{data?.description}</div>
        <div>
          Rs.{data?.price} <s className="text-red-600">Rs.{data?.mrp}</s>
        </div>
        <div
          className="absolute bottom-0 right-0 w-10 h-10 bg-pink-600 text-3xl flex items-center justify-center text-white shadow-xl rounded-tl-lg"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/cart");
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Item;
