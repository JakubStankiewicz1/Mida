import React, { useState } from 'react';
import "./navbarDarkFixed.css";
import { NavLink } from 'react-router-dom';

const NavbarDarkFixed = () => {
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [cateringDropdown, setCateringDropdown] = useState(false);
  const [eventsDropdown, setEventsDropdown] = useState(false);

  return (
    <div className="navbarDarkFixed">
        <div className="navbarDarkFixedContainer">



            {/* Left Part */}
            <div className="navbarDarkFixedContainerLeft">

                {/* NavLink Element */}
                <NavLink className="navbarDarkFixedContainerNavLink">
                    <div className="navbarDarkFixedContainerNavLinkContainer">
                        <p className="navbarDarkFixedContainerNavLinkContainerText">
                            Home
                        </p>
                    </div>
                </NavLink>

                {/* NavLink with Dropdown */}
                <div 
                className={`navbarDarkFixedContainerNavLinkOne ${locationsDropdown ? 'open' : ''}`} 
                onMouseEnter={() => setLocationsDropdown(true)} 
                onMouseLeave={() => setLocationsDropdown(false)}
                >
                    <div className="navbarDarkFixedContainerNavLinkContainer">
                        <p className="navbarDarkFixedContainerNavLinkContainerText">
                            Locations/menus
                        </p>
                    </div>
                    <div className={`navbarDarkFixedDropdownMenuOne ${locationsDropdown ? 'visible' : ''}`}>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida East Boston</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida Newton</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida South End</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida Fenway</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">APIZZA</NavLink>
                    </div>
                </div>

                {/* NavLink with Dropdown */}
                <div 
                className={`navbarDarkFixedContainerNavLinkTwo ${cateringDropdown ? 'open' : ''}`} 
                onMouseEnter={() => setCateringDropdown(true)} 
                onMouseLeave={() => setCateringDropdown(false)}
                >
                    <div className="navbarDarkFixedContainerNavLinkContainer">
                        <p className="navbarDarkFixedContainerNavLinkContainerText">
                            Catering
                        </p>
                    </div>
                    <div className={`navbarDarkFixedDropdownMenuTwo ${cateringDropdown ? 'visible' : ''}`}>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida Catering</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">APIZZA Catering</NavLink>
                    </div>
                </div>
            </div>





            {/* Right Part */}
            <div className="navbarDarkFixedContainerRight">

                {/* NavLink with Dropdown for Events */}
                <div 
                className={`navbarDarkFixedContainerNavLinkThree ${eventsDropdown ? 'open' : ''}`} 
                onMouseEnter={() => setEventsDropdown(true)} 
                onMouseLeave={() => setEventsDropdown(false)}
                >
                    <div className="navbarDarkFixedContainerNavLinkContainer">
                        <p className="navbarDarkFixedContainerNavLinkContainerText">
                            Events
                        </p>
                    </div>
                    <div className={`navbarDarkFixedDropdownMenuThree ${eventsDropdown ? 'visible' : ''}`}>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida East Boston Events</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida Newton Events</NavLink>
                        <NavLink className="navbarDarkFixedDropdownMenuItem">Mida South End Events</NavLink>
                    </div>
                </div>

                {/* Other NavLink Elements */}
                <NavLink className="navbarDarkFixedContainerNavLink">
                    <div className="navbarDarkFixedContainerNavLinkContainer">
                        <p className="navbarDarkFixedContainerNavLinkContainerText">
                            Work here
                        </p>
                    </div>
                </NavLink>

                <NavLink className="navbarDarkFixedContainerNavLink">
                    <div className="navbarDarkFixedContainerNavLinkContainer">
                        <p className="navbarDarkFixedContainerNavLinkContainerText">
                            Gift cards
                        </p>
                    </div>
                </NavLink>
            </div>

        </div>
    </div>
  )
}

export default NavbarDarkFixed;