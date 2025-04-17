import React from 'react';
import "./locationsMenus.css";
import NavbarDarkFixed from '../../components/NavbarDarkFixed/NavbarDarkFixed';
import LocationHero from '../../components/LocationHero/LocationHero';
import HomeOrder from '../../components/HomeOrder/HomeOrder';
import assets from "../../assets/assets";
import LocationReservation from '../../components/LocationReservation/LocationReservation';

const LocationsMenus = () => {
  return (
    <div className="locationsMenus">
        <div className="locationsMenusContainer">
          <NavbarDarkFixed />
          <HomeOrder />

          <div className="locationsMenusContainerMain">
            <LocationHero image={assets.locationOne} name={"Mida East Boston"} />
            <LocationReservation />

            {/* Text Section */}
            <div className="locationsMenusContainerMainText">
              <div className="locationsMenusContainerMainTextContainer">

                <p className="locationsMenusContainerMainTextContainerText">
                Reservations can be made in advance through OpenTable or by phone. We do not accept reservations via email or social media. We do not take reservations for the bar or patio. Reservations are recommended for parties of 6 or more. For parties of 10 or more, please contact us directly at
                </p>

                <p className="locationsMenusContainerMainTextContainerText">
                For parties of 5-8 guests, reservations can be made between 4:00pm - 6:00pm and at 8:00pm or later by calling the restaurant directly. A credit card is required at the time of booking to secure a reservation.


                </p>

                <p className="locationsMenusContainerMainTextContainerText">
                Patio reservations are available on a same-day first-come basis only. Please call the restaurant the day of to secure patio seating. Requests for patio tables made through Open Table are not guaranteed. Patio availability is subject to change due to inclement weather.


                </p>

                <p className="locationsMenusContainerMainTextContainerText">
                Parties of 9 or more people are considered a large group event.  


                </p>

                <p className="locationsMenusContainerMainTextContainerText">
                If you are interested in having a large party here at MIDA EAST BOSTON, please click on the Event Inquiry button below and fill out an inquiry form.  Please note that we do not have a private dining room, only semi-private areas.


                </p>

              </div>
            </div>

            {/* Button Event Inquiry */}
            <div className="locationsMenusContainerMainButton">
              <div className="locationsMenusContainerMainButtonContainer">
                <div className="locationsMenusContainerMainButtonContainerBtn">
                  <p className="locationsMenusContainerMainButtonContainerBtnText">
                    Event Inquiry
                  </p>
                </div>
              </div>
            </div>

            {/* Tel Number */}
            <div className="locationsMenusContainerMainTel">
              <div className="locationsMenusContainerMainTelContainer">
                <p className="locationsMenusContainerMainTelContainerText">
                  Tel: 617-996-1224
                </p>
              </div>
            </div>

            {/* Hr Element */}
            <div className="locationsMenusContainerMainHr">
              <div className="locationsMenusContainerMainHrContainer">
                <div className='locationsMenusContainerMainHrContainerDiv' />
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default LocationsMenus