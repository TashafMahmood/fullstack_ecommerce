import React from "react";

const CustomInput = ({ type, value, onChange, title, name }) => {
  return (
    <>
      <div>{title}</div>
      <input
        type={type}
        className=" border-2 h-10 px-3 py-1 rounded-md"
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default CustomInput;
