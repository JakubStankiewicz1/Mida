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
    
              <CateringHero image={assets.midaSouthEndImgOne} title={"Mida South End"} />
    
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
                  Patio reservations are available on a same-day, first-come basis only. Please call the restaurant the day of to secure patio seating. In case of inclement weather, patio reservations should call the restaurant directly to confirm indoor availability. Patio will be closed after October.

</p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  For parties of 5-8 guests, reservations can be made between 4:00pm - 6:00pm or after 8:00pm by calling the restaurant directly. A credit card is required at the time of booking to secure a reservation.

</p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  Being an intimate 54 seat restaurant, parties of 9 or more people are considered a large group event.  

</p>
    
                  <p className="locationsMenusContainerMainTextContainerText">
                  If you are interested in having a large party here at MIDA, please click on the Event Inquiry button below, or on our Events page and fill out an inquiry form.

</p>
    
                  {/* <p className="locationsMenusContainerMainTextContainerText">
                  Patio reservations are available on a same-day first-come basis only. Please call the restaurant the day of your reservation to secure patio seating. Requests for patio tables made through Open Table are not guaranteed. Patio availability is subject to change due to inclement weather.
    
    </p> */}
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
                              Sunday – Thursday 4 pm – 10 pm

                              </p>

                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                              Friday – Saturday 4 pm – 11 pm


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
                              Saturday – Sunday  10:30 am – 3:30 pm

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
                              Monday – Friday 4 pm - 9:30pm

</p>

                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                              Saturday - Sunday 11 am - 9:00 pm

</p>
                            </div>
                          </div>
    
                          {/* Element Two */}
                          {/* <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwo">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementTwoContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerTextTitle">
                                Takeout
                              </p>
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementContainerText">
                                Monday – Sunday – 11 AM – 9 PM
                              </p>
                            </div>
                          </div> */}
    
                          {/* Element Address */}
                          <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddress">
                            <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainer">
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainerText">
                              782 Tremont  St.

                              </p>
    
                              <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementAddressContainerText">
                              Boston, MA 02118


                              </p>
                            </div>
                          </div>
    
                          {/* Element Parkign & Directions: */}
                      <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirections">
                        <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainer">
                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerTextTitle">
                          PARKING:

                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                          The closest garage parking available is at the Stanhope Garage located at 277 Northampton St. (between Tremont St. and Columbus Ave) just a block from the restaurant. We are also lucky that two hour street parking is abundant on the side streets surrounding the restaurant.  


                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                          Please call us for assistance with direction or parking.


                          </p>
{/* 
                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                            The restaurant is a two-minute walk from the
                            Maverick Blue Line T stop.
                          </p>

                          <p className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerText">
                            The restaurant is also accessible by public ferryj
                            from several locations Monday - Sunday from 11 AM -
                            11 PM weather permitting:
                          </p> */}

                          {/* <div className="locationsMenusContainerMainHomeLocationContainerBottomContainerLeftContainerElementParkingDirectionsContainerList">
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
                          </div> */}
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
