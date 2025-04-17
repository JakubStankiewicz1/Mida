import React, { useState } from 'react';
import "./navbarDark.css";
import { NavLink } from 'react-router-dom';

const NavbarDark = () => {
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [cateringDropdown, setCateringDropdown] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);

  return (
    <div className="navbarDark">
        <div className="navbarDarkContainer">

            {/* NavLink Element */}
            <NavLink className="navbarDarkContainerNavLink">
                <div className="navbarDarkContainerNavLinkContainer">
                    <p className="navbarDarkContainerNavLinkContainerText">
                        Home
                    </p>
                </div>
            </NavLink>








            {/* NavLink with Dropdown */}
            <div 
              className={`navbarDarkContainerNavLinkOne ${locationsDropdown ? 'open' : ''}`} 
              onMouseEnter={() => setLocationsDropdown(true)} 
              onMouseLeave={() => setLocationsDropdown(false)}
            >
                <div className="navbarDarkContainerNavLinkContainer">
                    <p className="navbarDarkContainerNavLinkContainerText">
                        Locations/menus
                    </p>
                </div>
                <div className={`navbarDarkDropdownMenuOne ${locationsDropdown ? 'visible' : ''}`}>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida East Boston</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida Newton</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida South End</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida Fenway</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">APIZZA</NavLink>
                </div>
            </div>







            {/* NavLink with Dropdown */}
            <div 
              className={`navbarDarkContainerNavLinkTwo ${cateringDropdown ? 'open' : ''}`} 
              onMouseEnter={() => setCateringDropdown(true)} 
              onMouseLeave={() => setCateringDropdown(false)}
            >
                <div className="navbarDarkContainerNavLinkContainer">
                    <p className="navbarDarkContainerNavLinkContainerText">
                        Catering
                    </p>
                </div>
                <div className={`navbarDarkDropdownMenuTwo ${cateringDropdown ? 'visible' : ''}`}>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida Catering</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">APIZZA Catering</NavLink>
                </div>
            </div>

            {/* NavLink with Dropdown for Events */}
            <div 
              className={`navbarDarkContainerNavLinkThree ${eventsDropdown ? 'open' : ''}`} 
              onMouseEnter={() => setEventsDropdown(true)} 
              onMouseLeave={() => setEventsDropdown(false)}
            >
                <div className="navbarDarkContainerNavLinkContainer">
                    <p className="navbarDarkContainerNavLinkContainerText">
                        Events
                    </p>
                </div>
                <div className={`navbarDarkDropdownMenuThree ${eventsDropdown ? 'visible' : ''}`}>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida East Boston Events</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida Newton Events</NavLink>
                    <NavLink className="navbarDarkDropdownMenuItem">Mida South End Events</NavLink>
                </div>
            </div>

            {/* Other NavLink Elements */}
            <NavLink className="navbarDarkContainerNavLink">
                <div className="navbarDarkContainerNavLinkContainer">
                    <p className="navbarDarkContainerNavLinkContainerText">
                        Work here
                    </p>
                </div>
            </NavLink>

            <NavLink className="navbarDarkContainerNavLink">
                <div className="navbarDarkContainerNavLinkContainer">
                    <p className="navbarDarkContainerNavLinkContainerText">
                        Gift cards
                    </p>
                </div>
            </NavLink>

        </div>
    </div>
  )
}

export default NavbarDark;