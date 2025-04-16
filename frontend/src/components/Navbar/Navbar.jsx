import React, { useState } from "react";
import "./navbar.css";
import assets from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [eventsDropdownMenu, setEventsDropdownMenu] = useState(false);

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
            <div className="navbarContainerRightContainerEle">
              {/* Navbar Element */}
              <NavLink className="navbarContainerRightContainerNavbar">
                <div className="navbarContainerRightContainerNavbarContainer">
                  <p className="navbarContainerRightContainerNavbarContainerText">
                    Events
                  </p>
                </div>
              </NavLink>

              <div className="navbarContainerRightContainerEleDropdownMenu">
                <div className="navbarContainerRightContainerEleDropdownMenuContainer">
                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLink">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainer">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerText">
                        Mida East Boston Events
                      </p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLink">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainer">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerText">
                        Mida Newton Events
                      </p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLink">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainer">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerText">
                        Mida South End Events
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

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
