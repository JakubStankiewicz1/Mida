import React from 'react';
import "./locationsMenus.css";
import NavbarDarkFixed from '../../components/NavbarDarkFixed/NavbarDarkFixed';
import LocationHero from '../../components/LocationHero/LocationHero';
import HomeOrder from '../../components/HomeOrder/HomeOrder';
import assets from "../../assets/assets";

const LocationsMenus = () => {
  return (
    <div className="locationsMenus">
        <div className="locationsMenusContainer">
          <NavbarDarkFixed />
          <HomeOrder />

          <div className="locationsMenusContainerMain">
            <LocationHero image={assets.locationOne} name={"Mida East Boston"} />
          </div>
        </div>
    </div>
  )
}

export default LocationsMenus