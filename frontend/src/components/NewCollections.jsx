import React from "react";
import { newCollectionsData } from "../data";
import Item from "./Item";

const NewCollections = ({data}) => {
  return (
    <div className="py-20 px-4">
      <div className="mb-12 px-10 text-center text-[36px] font-semibold">
        New Collections
      </div>
      <div className="mx-auto w-full bg-white flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-[1400px] ">
          {data?.map((item, id) => (
            item?.isNew && <Item data={item} key={item?._id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
