import React from "react";
import "./home.css";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeOrder from "../../components/HomeOrder/HomeOrder";
import About from "../../components/About/About";
import HomeOwner from "../../components/HomeOwner/HomeOwner";
import HomeImages from "../../components/HomeImages/HomeImages";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <HomeHero />
        <About /> 
        <HomeOwner />
        <HomeOrder />
        <HomeImages />
      </div>
    </div>
  );
};

export default Home;
