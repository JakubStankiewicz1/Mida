import React from "react";
import "./homeHero.css";
import assets from "../../assets/assets";

const HomeHero = () => {
  return (
    <div className="homeHero">
      <div className="homeHeroContainer">
        <div className="homeHeroContainerDiv">
          <img src={assets.homeHero} alt="" className="homeHeroContainerImage" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
