import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoIosStar } from "react-icons/io";

const Product = () => {
  const { productId } = useParams();
  const { newCollectionsData } = useContext(ShopContext);

  const product = newCollectionsData.find(
    (item) => item.id === Number(productId)
  );

  return (
    <div className="mx-4 mt-6">
      <Breadcrumbs product={product} />
      <div className="mx-auto max-w-[1400px] flex items-center justify-center">
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 ">
          <div className="image_div flex gap-4 justify-end mr-10">
            <div className="images flex gap-3 flex-col">
              <img
                src={product.image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
              <img
                src={product.image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
              <img
                src={product.image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
              <img
                src={product.image}
                alt=""
                className="object-cover w-[80px] h-[90px] border-2 rounded-md p-0.5 cursor-pointer"
              />
            </div>
            <div className="main_img">
              <img
                src={product?.image}
                alt=""
                className="w-[420px] object-cover shadow-xl"
              />
            </div>
          </div>
          <div className="text_div">
            <div className="text-3xl">{product.description}</div>
            <span className="flex mt-2">
              <IoIosStar color="#FFE234"/>
              <IoIosStar color="#FFE234"/>
              <IoIosStar color="#FFE234"/>
              <IoIosStar color="#FFE234"/>
              <IoIosStar color="grey"/>
            </span >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
