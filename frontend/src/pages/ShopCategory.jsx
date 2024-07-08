import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return <div>ShopCategory</div>;
};

export default ShopCategory;
