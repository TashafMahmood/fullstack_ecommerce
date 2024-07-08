import React from "react";

const Button = ({ title }) => {
  return (
    <div className="text-center mt-6">
      <button className="bg-pink-600 p-2 w-1/2 rounded-md text-white hover:bg-pink-700">
        {title}
      </button>
    </div>
  );
};

export default Button;
