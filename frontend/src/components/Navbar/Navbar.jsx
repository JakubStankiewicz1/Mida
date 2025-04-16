import React from "react";
import "./navbar.css";
import assets from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        {/* Left Part */}
        <div className="navbarContainerLeft">
          <div className="navbarContainerLeftContainer">
            {/* Navbar Element */}
            <NavLink className="navbarContainerLeftContainerNavbar">
              <div className="navbarContainerLeftContainerNavbarContainer">
                <p className="navbarContainerLeftContainerNavbarContainerText">
                  Home
                </p>
              </div>
            </NavLink>

            {/* Navbar Element */}
            <NavLink className="navbarContainerLeftContainerNavbar">
              <div className="navbarContainerLeftContainerNavbarContainer">
                <p className="navbarContainerLeftContainerNavbarContainerText">
                  Locations/menus
                </p>
              </div>
            </NavLink>

            {/* Navbar Element */}
            <NavLink className="navbarContainerLeftContainerNavbar">
              <div className="navbarContainerLeftContainerNavbarContainer">
                <p className="navbarContainerLeftContainerNavbarContainerText">
                  Catering
                </p>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Middle Part */}
        <div className="navbarContainerMiddle">
          <NavLink className="navbarContainerMiddleContainer">
            <img
              src={assets.mainLogo}
              alt=""
              className="navbarContainerMiddleContainerImage"
            />
          </NavLink>
        </div>

        {/* Right Part */}
        <div className="navbarContainerRight">
          <div className="navbarContainerRightContainer">
            {/* Navbar Element */}
            <NavLink className="navbarContainerRightContainerNavbar">
              <div className="navbarContainerRightContainerNavbarContainer">
                <p className="navbarContainerRightContainerNavbarContainerText">
                  Events
                </p>
              </div>
            </NavLink>

            {/* Navbar Element */}
            <NavLink className="navbarContainerRightContainerNavbar">
              <div className="navbarContainerRightContainerNavbarContainer">
                <p className="navbarContainerRightContainerNavbarContainerText">
                  Work here
                </p>
              </div>
            </NavLink>

            {/* Navbar Element */}
            <NavLink className="navbarContainerRightContainerNavbar">
              <div className="navbarContainerRightContainerNavbarContainer">
                <p className="navbarContainerRightContainerNavbarContainerText">
                  Gift cards
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
