import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/login" element={<div>Login</div>} />
    </Routes>
  );
};

export default Routing;
