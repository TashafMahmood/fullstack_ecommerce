import React, { Fragment } from "react";
import user from "../assets/images/user.png";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md ">
      <div className="flex items-center justify-between h-[60px] px-4">
        <div className="text-xl font-semibold">Admin Panel</div>
        <div>
          <img
            src={user}
            alt="no image"
            className="w-10 h=10 object-cover rounded-full border-2 border-white shadow-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
