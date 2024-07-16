import React from "react";
import { useNavigate } from "react-router-dom";
import { getPercentage } from "../utils/functions";

const Item = ({ data, noredirect }) => {
  const navigate = useNavigate();

  const openProduct = (id) =>{
    navigate(`/product/${id}`);
    window.scrollTo(0,0)
  }

  return (
    <div
      className="shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer relative"
      onClick={() => noredirect ? null : openProduct(data?._id)}
    >
      <div className="relative">
        <img src={data?.product_image} alt="" className="h-[325px] w-full object-contain" />
        <div className="bg-pink-600 absolute top-4 left-0 px-2 py-1 text-white rounded-tr-md">
          {getPercentage(data?.price, data?.mrp)} off
        </div>
      </div>
      <div className="p-4">
        <div className="text-md mb-2">{data?.product_name}</div>
        <div>
          Rs.{data?.price} <s className="text-red-600 ml-2">Rs.{data?.mrp}</s>
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
