import React from "react";
import Item from "./Item";
import { popularData } from "../data";

const Popular = () => {
  return (
    <div className="py-20 px-4">
      <div className="mb-12 px-10 text-center text-[36px] font-semibold">Popular Products</div>
      <div className="mx-auto w-full bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[1400px] ">
          {popularData?.map((item, id) => (
            <Item data={item} noredirect={true}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
