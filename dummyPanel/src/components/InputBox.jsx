import React from "react";

const InputBox = ({ title, type, onChange, onBlur, name, value}) => {
  return (
    <div className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 font-[sans-serif] text-[#333] mt-2">
      <div>
        <label className="mb-2 text-sm block">{title}</label>
        <input
          type={type}
          className="px-3 py-1.5 text-sm rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputBox;
