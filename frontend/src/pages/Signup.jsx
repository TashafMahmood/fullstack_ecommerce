import React from "react";
import bg from "../assets/images/login.png";
import { Link } from "react-router-dom";
import home from '../../public/home.svg'


const Signup = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      className="h-lvh w-full flex items-center justify-center relative"
    >
      <Link to={"/"}>
        <div className="absolute top-0 left-0 m-6">
          <img src={home} alt="" width={36} />
        </div>
      </Link>
      <div className="bg-white p-4 rounded-md shadow-lg w-[400px] mx-4">
        <div className="text-[42px] text-center font-semibold ">Sign Up</div>
        <div className="font-semibold text-xl">Username</div>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full border-2 border-gray-600 outline-none px-3 py-2 rounded-md mt-2"
        />
        <div className="font-semibold text-xl mt-4">Email</div>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full border-2 border-gray-600 outline-none px-3 py-2 rounded-md mt-2"
        />
        <div className="font-semibold text-xl mt-4">Password</div>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full border-2 border-gray-600 outline-none px-3 py-2 rounded-md mt-2"
        />
        <div className="font-semibold text-xl mt-4">Confirm Password</div>
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border-2 border-gray-600 outline-none px-3 py-2 rounded-md mt-2"
        />
        <div className="mt-4 flex items-center text-sm gap-2 text-gray-500">
          <input type="checkbox" name="" id="" className="cursor-pointer"/>
          By continuing, I agree to the terms and policy.
        </div>
        <button className="mt-6 bg-pink-400 text-white py-2 rounded-md shadow-md text-xl font-[400] w-full hover:bg-pink-500">
          Register
        </button>
        <div className="text-center mt-4 text-[14px] ">
          Already have account?{" "}
          <Link to={"/login"}>
            <span className="font-semibold cursor-pointer text-blue-600 underline">
              Login now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
