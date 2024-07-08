import React, { useState } from "react";
import Upload from "../components/Upload";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const Main = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("File selected:", file);
      // Handle file upload logic here
    } else {
      console.log("No file selected");
    }
  };
  return (
    <div className="bg-pink-200 h-lvh flex items-center justify-center">
      <div className="w-[500px] mx-10">
        <Upload />
        <InputBox title={"Product Name"} type={"text"} />
        <InputBox title={"Product Description"} type={"text"} />
        <InputBox title={"Product Price"} type={"number"} />
        <InputBox title={"Product MRP"} type={"number"} />
        <Button title={"Add Product"} />
      </div>
    </div>
  );
};

export default Main;
