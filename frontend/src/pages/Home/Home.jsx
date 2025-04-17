import React, { useEffect, useState } from "react";
import "./home.css";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeOrder from "../../components/HomeOrder/HomeOrder";
import About from "../../components/About/About";
import HomeOwner from "../../components/HomeOwner/HomeOwner";
import HomeImages from "../../components/HomeImages/HomeImages";
import Fotter from "../../components/Fotter/Fotter";
import Navbar from "../../components/Navbar/Navbar";
import NavbarDark from "../../components/NavbarDark/NavbarDark";

const Home = () => {
  const [showNavbarDark, setShowNavbarDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbarDark(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="home">
      <div className="homeContainer">
        <div className={`homeContainerNavbarDark ${showNavbarDark ? 'show' : ''}`}>
          <NavbarDark />
        </div>
        <Navbar />
        <HomeHero />
        <About /> 
        <HomeOwner />
        <HomeOrder />
        <HomeImages />
        <Fotter />
      </div>
    </div>
  );
};

export default Home;
