import React, { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import AllProducts from "../components/AllProducts";
import EditProduct from "../components/EditProduct";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default Main;
