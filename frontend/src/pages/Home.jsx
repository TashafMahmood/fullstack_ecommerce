import React from "react";
import HeroSection from "../components/HeroSection";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Home;
