import React from 'react';
import './midaFenway.css';
import NavbarDarkFixed from "../../components/NavbarDarkFixed/NavbarDarkFixed";
import LocationHero from "../../components/LocationHero/LocationHero";
import HomeOrder from "../../components/HomeOrder/HomeOrder";
import assets from "../../assets/assets";
import LocationReservation from "../../components/LocationReservation/LocationReservation";
import Menu from "../../components/Menu/Menu";
import Fotter from "../../components/Fotter/Fotter";
import { FaPrint } from "react-icons/fa";
import CateringHero from '../../components/CateringHero/CateringHero';


const MidaFenway = () => {
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
                Parties of 9 or more people are considered a large group event.
              </p>

              <p className="locationsMenusContainerMainTextContainerText">
              Street parking is also available in the general vicinity.
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
                            Dinner
                          </p>
                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                            Sunday – Thursday – 4 PM – 9 PM
                          </p>
                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                            Friday – Saturday – 4 PM – 10 PM
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
                            Saturday – Sunday – 10:30 AM – 4:00 PM
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
                            Monday - Friday 4pm - 10:00pm
                          </p>
                        </div>
                      </div>

                      {/* Element Address */}
                      <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddress">
                        <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainer">
                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainerText">
                            65 Lewis Street
                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainerText">
                            East Boston, MA 02128
                          </p>
                        </div>
                      </div>

                      {/* Element Parkign & Directions: */}
                      <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirections">
                        <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainer">
                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerTextTitle">
                            PARKING & DIRECTIONS:
                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                            Please call us for additional assistance with
                            directions or parking.
                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                            Limited 2-hour parking is available on surrounding
                            streets (Lewis St., Marginal St., S. Bremen St.,
                            Sumner St., Orleans St.)
                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                            The restaurant is a two-minute walk from the
                            Maverick Blue Line T stop.
                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                            The restaurant is also accessible by public ferry
                            from several locations Monday - Sunday from 11 AM -
                            11 PM weather permitting:
                          </p>

                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerList">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainer">
                              <ul className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUl">
                                <li className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLi">
                                  <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLiText">
                                    Charlestown Marina (1 8th st. Charlestown)
                                  </p>
                                </li>

                                <li className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLi">
                                  <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLiText">
                                    New St. East Boston Docks (6 New Street)
                                  </p>
                                </li>

                                <li className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLi">
                                  <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLiText">
                                    Lewis Wharf (1 East Pier Drive, East Boston)
                                  </p>
                                </li>

                                <li className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLi">
                                  <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerListContainerUlLiText">
                                    Fan Pier (10 Waterside Ave, Boston's
                                    Seaport)
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
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

          <Menu />

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
                  Contact
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

export default MidaFenway
