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
                <p className="navbarContainerLeftContainerNavbarContainerText">Home</p>
              </div>
            </NavLink>

            {/* Navbar Element */}
            <div className="navbarContainerLeftContainerEle">
              <NavLink className="navbarContainerLeftContainerNavbar">
                <div className="navbarContainerLeftContainerNavbarContainer">
                  <p className="navbarContainerLeftContainerNavbarContainerText">Locations/menus</p>
                </div>
              </NavLink>

              <div className="navbarContainerRightContainerEleDropdownMenuOne">
                <div className="navbarContainerRightContainerEleDropdownMenuContainerOne">
                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida East Boston</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida Newton</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida South End</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida Fenway</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">APIZZA</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Navbar Element */}
            <div className="navbarContainerLeftContainerEle">
              <NavLink className="navbarContainerLeftContainerNavbar">
                <div className="navbarContainerLeftContainerNavbarContainer">
                  <p className="navbarContainerLeftContainerNavbarContainerText">Catering</p>
                </div>
              </NavLink>

              <div className="navbarContainerRightContainerEleDropdownMenuOne">
                <div className="navbarContainerRightContainerEleDropdownMenuContainerOne">
                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida Catering</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">APIZZA Catering</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Part */}
        <div className="navbarContainerMiddle">
          <NavLink className="navbarContainerMiddleContainer">
            <img src={assets.mainLogo} alt="" className="navbarContainerMiddleContainerImage" />
          </NavLink>
        </div>

        {/* Right Part */}
        <div className="navbarContainerRight">
          <div className="navbarContainerRightContainer">
            <div className="navbarContainerRightContainerEle">
              {/* Navbar Element */}
              <NavLink className="navbarContainerLeftContainerNavbar">
                <div className="navbarContainerLeftContainerNavbarContainer">
                  <p className="navbarContainerLeftContainerNavbarContainerText">Events</p>
                </div>
              </NavLink>

              <div className="navbarContainerRightContainerEleDropdownMenuOne">
                <div className="navbarContainerRightContainerEleDropdownMenuContainerOne">
                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida East Boston Events</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida Newton Events</p>
                    </div>
                  </NavLink>

                  {/* NavLink Element */}
                  <NavLink className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkOne">
                    <div className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerOne">
                      <p className="navbarContainerRightContainerEleDropdownMenuContainerNavLinkContainerTextOne">Mida South End Events</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Navbar Element */}
            <NavLink className="navbarContainerRightContainerNavbar">
              <div className="navbarContainerRightContainerNavbarContainer">
                <p className="navbarContainerRightContainerNavbarContainerText">Work here</p>
              </div>
            </NavLink>

            {/* Navbar Element */}
            <NavLink className="navbarContainerRightContainerNavbar">
              <div className="navbarContainerRightContainerNavbarContainer">
                <p className="navbarContainerRightContainerNavbarContainerText">Gift cards</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
