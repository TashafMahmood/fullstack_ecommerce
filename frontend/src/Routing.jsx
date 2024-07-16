import { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NavigationBar from "./components/NavigationBar";
import PageNotFound from "./pages/404";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import mens_banner from '../public/mens.png'
import women_banner from '../public/women.png'
import kids_banner from '../public/kids.png'

const Routing = () => {
  const location = useLocation();
  const hideNavPaths = ["/login", "/signup"];
  const shouldShowNavBar = !hideNavPaths.includes(location.pathname);
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      {shouldShowNavBar && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Shop banner={mens_banner} category={"mens"} />} />
        <Route path="/women" element={<Shop banner={women_banner} category={"women"} />} />
        <Route path="/kids" element={<Shop banner={kids_banner} category={"kids"} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {shouldShowNavBar && <Footer />}
    </Suspense>
  );
};

export default Routing;
