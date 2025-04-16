import React from "react";
import "./home.css";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeOrder from "../../components/HomeOrder/HomeOrder";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <HomeHero />
        <HomeOrder />
      </div>
    </div>
  );
};

export default Home;
