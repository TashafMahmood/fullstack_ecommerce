import React from "react";
import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="px-4 py-12 flex flex-col items-center justify-center">
        <img src={logo} alt="" />
        <ul className="flex gap-6 mt-8">
          <Link to={"/"}>Company</Link>
          <Link to={"/"}>Products</Link>
          <Link to={"/"}>Offices</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
        </ul>
      </div>
      <div className="w-full text-center p-4 border-t-2 text-sm">
        Copyright @ 2024 - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
