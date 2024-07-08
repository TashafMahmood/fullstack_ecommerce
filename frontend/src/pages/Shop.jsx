import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/Item";
import { IoIosArrowDown } from "react-icons/io";


const Shop = ({ category, banner }) => {
  const { newCollectionsData } = useContext(ShopContext);
  return (
    <div>
      <div>
        <img src={banner} alt="" className="w-full" />
        <div className="px-6 mt-16">
          <div className="max-w-[1400px] mx-auto mb-4 flex items-center justify-between">
            <div><span>Showing 1-12</span> out of 36 products</div>
            <button className="flex items-center justify-between border-2 rounded-full px-3 py-2">Sort by <IoIosArrowDown /></button>
          </div>
          <div className="mx-auto w-full bg-white flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-[1400px] ">
              {newCollectionsData?.map((item, id) =>
                item.category == category ? <Item data={item} /> : null
                // <Item data={item} /> 
              )}
            </div>
          </div>
        </div>
        <div className="my-20 mx-4 mx-auto  text-center">
          <button className="bg-gray-200 px-6 py-3 text-gray-500  rounded-full">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
