import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoIosStar } from "react-icons/io";
import axios from "axios";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState([]) 

  const getProduct = async () => {
    try {
      const res = await axios.get(`/api/v1/get-product/${productId}`);
      setProduct(res?.data?.product)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mx-4 mt-6">
      <Breadcrumbs product={product} />
      <div className="mx-auto max-w-[1400px] flex items-center justify-center">
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 ">
          <div className="image_div flex gap-4 justify-end mr-10">
            <div className="images flex gap-3 flex-col">
              <img
                src={product?.product_image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
              <img
                src={product?.product_image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
              <img
                src={product?.product_image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
              <img
                src={product?.product_image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
            </div>
            <div className="main_img">
              <img
                src={product?.product_image}
                alt=""
                className="w-[420px] object-cover shadow-xl"
              />
            </div>
          </div>
          <div className="text_div">
            <div className="text-3xl">{product?.product_name}</div>
            <span className="flex mt-2">
              <IoIosStar color="#FFE234" />
              <IoIosStar color="#FFE234" />
              <IoIosStar color="#FFE234" />
              <IoIosStar color="#FFE234" />
              <IoIosStar color="grey" />
            </span>
            <div className="mt-4 text-xl">
              Rs.{product?.price}{" "}
              <s className="text-red-500 ml-3">Rs.{product?.mrp}</s>
            </div>
            <div className="mt-4 text-lg font-light text-justify">
              {product?.long_description}
            </div>
            <div className="mt-4 text-xl">
              <div>Select Size</div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 border hover:border-gray-600 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer">
                  S
                </div>
                <div className="w-12 h-12 border hover:border-gray-600 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer">
                  M
                </div>
                <div className="w-12 h-12 border hover:border-gray-600 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer">
                  L
                </div>
                <div className="w-12 h-12 border hover:border-gray-600 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer">
                  XL
                </div>
                <div className="w-12 h-12 border hover:border-gray-600 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer">
                  XXL
                </div>
              </div>
            </div>
            <button className="bg-red-500 px-4 py-2 mt-6 text-white hover:bg-red-600 text-lg">
              Add to cart
            </button>
            <div className="text-lg font-light mt-6">
              <span className="font-bold">Category:</span> {product?.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
