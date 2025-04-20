import React from 'react';
import './midaSouthEnd.css';
import NavbarDarkFixed from "../../components/NavbarDarkFixed/NavbarDarkFixed";
import LocationHero from "../../components/LocationHero/LocationHero";
import HomeOrder from "../../components/HomeOrder/HomeOrder";
import assets from "../../assets/assets";
import LocationReservation from "../../components/LocationReservation/LocationReservation";
import Menu from "../../components/Menu/Menu";
import Fotter from "../../components/Fotter/Fotter";
import { FaPrint } from "react-icons/fa";
import CateringHero from '../../components/CateringHero/CateringHero';




const MidaSouthEnd = () => {
    return (
        <div className="locationsMenus">
          <div className="locationsMenusContainer">
            {/* <NavbarDarkFixed />
            <HomeOrder /> */}
    
            <div className="locationsMenusContainerMain">
              {/* <LocationHero image={assets.midaFenwayImgOne} name={"MIDA FENWAY"} /> */}
              {/* <LocationReservation /> */}
    
              <CateringHero image={assets.midaFenwayImgOne} title={"MIDA FENWAY"} />
    
            <HomeOrder />
    
    
    
    
            {/* <LocationHero image={assets.locationOne} name={"Mida East Boston"} /> */}
              <LocationReservation />
    
              {/* Text Section */}
              <div className="locationsMenusContainerMainText">
                <div className="locationsMenusContainerMainTextContainer">
                  <p className="locationsMenusContainerMainTextContainerText">
                  Reservations can be made in advance through OpenTable or by phone. 
                  </p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  Parking:
                  </p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  We currently offer validation for the adjoining Fenway Triangle Garage (Fenway Triangle Trilogy, 180 Brookline Ave., Boston , MA 02215). It’s a $12 flat rate for up to 2 hours, a $15 flat rate for up to 3 hours, and then posted rates. 
                  </p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  Street parking is also available in the general vicinity.
                  </p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  Parties larger than 6 guests should call the restaurant directly to book a table. 
                  </p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  Patio reservations are available on a same-day first-come basis only. Please call the restaurant the day of your reservation to secure patio seating. Requests for patio tables made through Open Table are not guaranteed. Patio availability is subject to change due to inclement weather.
    
    </p>
                </div>
              </div>
    
    
              {/* Hr Element */}
              <div className="locationsMenusContainerMainHr">
                <div className="locationsMenusContainerMainHrContainer">
                  <div className="locationsMenusContainerMainHrContainerDiv" />
                </div>
              </div>
    
              {/* Text Section Two */}
              <div className="locationsMenusContainerMainTextTwo">
                <div className="locationsMenusContainerMainTextTwoContainer">
                  <p className="locationsMenusContainerMainTextTwoContainerTextOne">
                    <p className="locationsMenusContainerMainTextTwoContainerTextOneText">
                      Parties of 9 or more people are considered a large party dinner/event at MIDA Fenway. 
                    </p>
                  </p>
    
                  <p className="locationsMenusContainerMainTextTwoContainerTextTwo">
                    <p className="locationsMenusContainerMainTextTwoContainerTextTwoText">
                      If you are interested in having a large party here, please click on the Event Inquiry button below, or our Events page and fill out an inquiry form.
                    </p>
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
                  <div className="locationsMenusContainerMainHrContainerDiv" />
                </div>
              </div>
    
              {/* Home & Location */}
              <div className="locationsMenusContainerMainHomeLocation">
                <div className="locationsMenusContainerMainHomeLocationContainer">
                  {/* Top Part */}
                  <div className="locationsMenusContainerMainHomeLocationContainerTop">
                    <div className="locationsMenusContainerMainHomeLocationContainerTopContainer">
                      <p className="locationsMenusContainerMainHomeLocationContainerTopContainerText">
                        Hours & Location
                      </p>
                    </div>
                  </div>
    
                  {/* Bottom Part */}
                  <div className="locationsMenusContainerMainHomeLocationContainerBottom">
                    <div className="locationsMenusContainerMainHomeLocationContainerBottomContainer">
                      {/* Left Part */}
                      <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeft">
                        <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainer">
                          {/* Element */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElement">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerTextTitle">
                                Lunch
                              </p>
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                                Monday – Friday – 11 AM – 4 PM
                              </p>
                              
                            </div>
                          </div>
    
                          {/* Element Two */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwo">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwoContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerTextTitle">
                                Dinner
                              </p>
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                                Monday – Sunday – 4 PM – 10 PM
                              </p>
                            </div>
                          </div>
    
                          {/* Element Two */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwo">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwoContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerTextTitle">
                                Brunch
                              </p>
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                                Saturday – Sunday – 11 AM – 4 PM
                              </p>
                            </div>
                          </div>
    
                          {/* Element Two */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwo">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwoContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerTextTitle">
                                Takeout
                              </p>
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                                Monday – Sunday – 11 AM – 9 PM
                              </p>
                            </div>
                          </div>
    
                          {/* Element Address */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddress">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainerText">
                                1391 Boylston Street, 
                              </p>
    
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainerText">
                                Boston, MA 02215
                              </p>
                            </div>
                          </div>
    
                          {/* Element Parkign & Directions: */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirections">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                                Please call us for additional assistance with
                                directions or parking.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
    
                      {/* Right Part */}
                      <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerRight">
                        <iframe
                          className="locationsMenusMap"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10060.238793871129!2d17.062937830355935!3d51.10341432272593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc283c40d3b4b%3A0x30d3f22df99c2b61!2sHotel%20Wodnik!5e1!3m2!1sen!2spl!4v1744909113935!5m2!1sen!2spl"
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Hr Element */}
              <div className="locationsMenusContainerMainHr">
                <div className="locationsMenusContainerMainHrContainer">
                  <div className="locationsMenusContainerMainHrContainerDiv" />
                </div>
              </div>
    
              <div className="locationsMenusContainerMainMenu">
                <div className="locationsMenusContainerMainMenuContainer">
                  <Menu />
                </div>
              </div>
    
              {/* <Menu /> */}
    
              {/* Part Top */}
              <div className="locationsMenusContainerMainTop">
                <div className="locationsMenusContainerMainTopContainer">
                  <div className="locationsMenusContainerMainTopContainerOne">
                    <div className="locationsMenusContainerMainTopContainerOneContainer">
                      <p className="locationsMenusContainerMainTopContainerOneContainerText">
                        Last updated on April 4, 2025
                      </p>
                    </div>
                  </div>
    
                  <div className="locationsMenusContainerMainTopContainerTwo">
                    <div className="locationsMenusContainerMainTopContainerTwoContainer">
                      <p className="locationsMenusContainerMainTopContainerTwoContainerText">
                        <span className="locationsMenusContainerMainTopContainerTwoContainerTextTxt">
                          Disclaimer
                        </span>
                        pricing and availability subject to change.
                      </p>
                    </div>
                  </div>
    
                  <div className="locationsMenusContainerMainTopContainerThree">
                    <div className="locationsMenusContainerMainTopContainerThreeContainer">
                      <div className="locationsMenusContainerMainTopContainerThreeContainerBtn">
                        <p className="locationsMenusContainerMainTopContainerThreeContainerBtnText">
                          Print Menu
                        </p>
                        <FaPrint className="locationsMenusContainerMainTopContainerThreeContainerBtnIcon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Hr Part */}
              <div className="locationsMenusContainerMainHrBottomHr">
                <div className="locationsMenusContainerMainHrBottomHrContainer">
                  <div className="locationsMenusContainerMainHrBottomHrContainerDiv" />
                </div>
              </div>
    
    
    
    
    
              {/* Bottom Part */}
              <div className="locationsMenusContainerMainHrBottom">
                <div className="locationsMenusContainerMainHrBottomContainer">
                  <div className="locationsMenusContainerMainHrBottomContainerOne">
                    <p className="locationsMenusContainerMainHrBottomContainerOneText">
                      Additional Contact 
                    </p>
                  </div>
    
                  <div className="locationsMenusContainerMainHrBottomContainerTwo">
                    <p className="locationsMenusContainerMainHrBottomContainerTwoText">
                      GENERAL INQUIRIES : 
                    </p>
                  </div>
    
                  <div className="locationsMenusContainerMainHrBottomContainerThree">
                    <p className="locationsMenusContainerMainHrBottomContainerThreeText">
                      info@midaboston.com
                    </p>
                  </div>
                </div>
              </div>
    
              
    
    
    
            </div>
          </div>
          <Fotter />
        </div>
      );
}

export default MidaSouthEnd
