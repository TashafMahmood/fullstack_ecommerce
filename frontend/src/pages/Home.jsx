import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await axios.get(`/api/v1/get-products`);
      setProducts(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <Popular data={products} />
      <Offers />
      <NewCollections data={products}/>
      <NewsLetter />
    </>
  );
};

export default Home;
