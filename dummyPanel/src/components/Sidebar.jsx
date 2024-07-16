import React from "react";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";


const Sidebar = () => {
  
  return (
    <div className="bg-purple-500 min-w-[200px] h-100vh p-3">
      <div className="mt-3">
        <ul>
          <Link to="/" className="bg-gray-100 flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer mb-4 hover:bg-white hover:shadow-lg">
            <MdDashboard />
            Dashboard
          </Link>
          <Link to={'/all-products'} className="bg-gray-100 flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer mb-4 hover:bg-white hover:shadow-lg">
            <BsBoxes />
            All Products
          </Link >
          <Link to={'/add-product'} className="bg-gray-100 flex items-center px-3 py-2 gap-3 rounded-md cursor-pointer mb-4 hover:bg-white hover:shadow-lg">
            <IoMdPersonAdd />
            Add Product
          </Link >
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
