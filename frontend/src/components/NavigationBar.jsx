import React from "react";
import logo from "../../public/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center px-6 py-4 shadow-md sticky top-0 z-10 bg-white">
      <div className="flex-1 cursor-pointer">
        <img src={logo} alt="" />
      </div>
      <div className="flex-1 text-center flex gap-4 justify-center">
        <Link to="/">Shop</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="flex-1 text-right flex items-center justify-end gap-4">
        <button
          className="border-2 px-6 py-1 rounded-full bg-white border-gray-700"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <div className="relative cursor-pointer">
          <AiOutlineShoppingCart
            size={28}
            onClick={() => navigate("/cart")}
          />
          <div className="absolute bg-red-600 w-4 h-4 text-[10px] text-white flex items-center justify-center -top-1 -right-1 rounded-full">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
