import React from "react";
import "./midaCatering.css";
import CateringHero from "../../components/CateringHero/CateringHero";
import assets from "../../assets/assets";
import CateringProductInfo from "../../components/CateringProductInfo/CateringProductInfo";
import Fotter from "../../components/Fotter/Fotter";

const MidaCatering = () => {
  return (
    <div className="midaCatering">
      <CateringHero image={assets.cateringImgOne} title={"Mida Catering"} />

      <div className="midaCateringContainer">
        {/* First Part */}
        <div className="midaCateringContainerFirst">
          <div className="midaCateringContainerFirstContainer">
            <div className="midaCateringContainerFirstContainerOne">
              <div className="midaCateringContainerFirstContainerOneContainer">
                <p className="midaCateringContainerFirstContainerOneContainerText">MIDA CATERING OPTIONS</p>
              </div>
            </div>

            <div className="midaCateringContainerFirstContainerTwo">
              <div className="midaCateringContainerFirstContainerTwoContainer">
                <p className="midaCateringContainerFirstContainerTwoContainerText">READY TO ORDER?</p>
              </div>
            </div>

            <div className="midaCateringContainerFirstContainerThree">
              <div className="midaCateringContainerFirstContainerThreeContainer">
                <p className="midaCateringContainerFirstContainerThreeContainerText">Click on the Button below to order:</p>
              </div>
            </div>

            <div className="midaCateringContainerFirstContainerFour">
              <div className="midaCateringContainerFirstContainerFourContainer">
                <div className="midaCateringContainerFirstContainerFourContainerBtn">
                  <p className="midaCateringContainerFirstContainerFourContainerBtnText">Order Online Catering Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Part */}
        <div className="midaCateringContainerSecond">
          <div className="midaCateringContainerSecondContainer">
            <div className="midaCateringContainerSecondContainerDiv" />
          </div>
        </div>

        {/* Third Part */}
        <div className="midaCateringContainerThird">
          <div className="midaCateringContainerFirstContainer">
            {/* <div className="midaCateringContainerFirstContainerOne">
                        <div className="midaCateringContainerFirstContainerOneContainer">
                            <p className="midaCateringContainerFirstContainerOneContainerText">
                            MIDA CATERING OPTIONS
                            </p>
                        </div>
                    </div> */}

            <div className="midaCateringContainerFirstContainerTwo">
              <div className="midaCateringContainerFirstContainerTwoContainer">
                <p className="midaCateringContainerFirstContainerTwoContainerText">STARTING TO PLAN?</p>
              </div>
            </div>

            {/* <div className="midaCateringContainerFirstContainerTwo">
                        <div className="midaCateringContainerFirstContainerTwoContainer">
                            <p className="midaCateringContainerFirstContainerTwoContainerText">
                            STARTING TO PLAN? 


                            </p>
                        </div>
                    </div> */}

            <div className="midaCateringContainerFirstContainerThree">
              <div className="midaCateringContainerFirstContainerThreeContainer">
                <p className="midaCateringContainerFirstContainerThreeContainerText">
                  If you are looking for an initial quote for your dinner or have questions,
                </p>
              </div>
            </div>

            <div className="midaCateringContainerFirstContainerThree">
              <div className="midaCateringContainerFirstContainerThreeContainer">
                <p className="midaCateringContainerFirstContainerThreeContainerText">
                  click on the button below to get in touch with our MIDA catering experts.
                </p>
              </div>
            </div>

            <div className="midaCateringContainerFirstContainerFour">
              <div className="midaCateringContainerFirstContainerFourContainer">
                <div className="midaCateringContainerFirstContainerFourContainerBtn">
                  <p className="midaCateringContainerFirstContainerFourContainerBtnText">CATERING INQUIRY FORM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="midaCateringContainerSecond">
          <div className="midaCateringContainerSecondContainer">
            <div className="midaCateringContainerSecondContainerDiv" />
          </div>
        </div>

        {/* Fourth Part */}
        <div className="midaCateringContainerFourth">
          <div className="midaCateringContainerFourthContainer">
            <div className="midaCateringContainerFourthContainerOne">
              <div className="midaCateringContainerFourthContainerOneContainer">
                <p className="midaCateringContainerFourthContainerOneContainerText">THE PRICING BELOW REFLECTS THE HALF/FULL TRAY AMOUNTS</p>
              </div>
            </div>

            <div className="midaCateringContainerFourthContainerTwo">
              <div className="midaCateringContainerFourthContainerTwoContainer">
                <p className="midaCateringContainerFourthContainerTwoContainerText">
                  OUR CRUDITE, CHEESE, AND ANITPASTI PLATTERS ARE ONE SIZE ONLY, AND FEED APPROXIMATELY 15-20 PEOPLE.
                </p>
              </div>
            </div>

            <div className="midaCateringContainerFourthContainerThree">
              <div className="midaCateringContainerFourthContainerThreeContainer">
                {/* Left Part */}
                <div className="midaCateringContainerFourthContainerThreeContainerLeft">
                  <div className="midaCateringContainerFourthContainerThreeContainerLeftContainer">
                    <div className="midaCateringContainerFourthContainerThreeContainerLeftContainerOne">
                      <p className="midaCateringContainerFourthContainerThreeContainerLeftContainerOneText">LITTLE FAMILY</p>
                    </div>
                    <div className="midaCateringContainerFourthContainerThreeContainerLeftContainerTwo">
                      <p className="midaCateringContainerFourthContainerThreeContainerLeftContainerTwoText">Half Tray</p>
                    </div>
                    <div className="midaCateringContainerFourthContainerThreeContainerLeftContainerThree">
                      <p className="midaCateringContainerFourthContainerThreeContainerLeftContainerThreeText">Feeds 10-12</p>
                    </div>
                  </div>
                </div>

                {/* Right Part */}
                <div className="midaCateringContainerFourthContainerThreeContainerRight">
                  <div className="midaCateringContainerFourthContainerThreeContainerLeftContainer">
                    <div className="midaCateringContainerFourthContainerThreeContainerLeftContainerOne">
                      <p className="midaCateringContainerFourthContainerThreeContainerLeftContainerOneText">BIG FAMILY</p>
                    </div>
                    <div className="midaCateringContainerFourthContainerThreeContainerLeftContainerTwo">
                      <p className="midaCateringContainerFourthContainerThreeContainerLeftContainerTwoText">Full Tray</p>
                    </div>
                    <div className="midaCateringContainerFourthContainerThreeContainerLeftContainerThree">
                      <p className="midaCateringContainerFourthContainerThreeContainerLeftContainerThreeText">Feeds 20-25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="midaCateringContainerFourthContainerFour">
              <div className="midaCateringContainerFourthContainerFourContainer">
                <div className="midaCateringContainerFourthContainerFourContainerOne">
                  <p className="midaCateringContainerFourthContainerFourContainerOneText">
                    For drop-off orders, delivery fees will be based on the distance from the selected restaurant.
                  </p>
                </div>

                <div className="midaCateringContainerFourthContainerFourContainerTwo">
                  <div className="midaCateringContainerFourthContainerFourContainerTwoContainer">
                    <p className="midaCateringContainerFourthContainerFourContainerTwoContainerText">
                      For pick-up orders, please come to your selected MIDA location for pick-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>



            



          </div>
        </div>

        <div className="midaCateringContainerSecond">
          <div className="midaCateringContainerSecondContainer">
            <div className="midaCateringContainerSecondContainerDiv" />
          </div>
        </div>





        {/* Fifth Part */}
        <div className="midaCateringContainerFourthContainerFifth">
                <div className="midaCateringContainerFourthContainerFifthContainer">

                    {/* First Part */}
                    <div className="midaCateringContainerFourthContainerFifthContainerFirst">
                        <div className="midaCateringContainerFourthContainerFifthContainerFirstContainer">
                            {/* Top */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTop">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainer">
                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerText">
                                        APPETIZERS
                                    </p>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottom">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottomContainer">
                                    <CateringProductInfo name={"ANTIPASTI"} description={"cured meats, golden raisin jam, dried fruit, crostini"} price={"$100"} />
                                    <CateringProductInfo name={"CRUDITE"} description={"seasonal vegetables, green goddess, spicy tomato aioli, romesco"} price={"$75"} />
                                    <CateringProductInfo name={"MEATBALLS"} description={"berkshire pork, san marzano tomato, grana padano, parsley"} price={"$90 / $180"} />
                                    <CateringProductInfo name={"ARANCINI"} description={"crispy rice fritters, san marzano tomato, fontina cheese"} price={"$65 / $120"} />
                                    <CateringProductInfo name={"INSALATA MISTA"} description={"red wine vinaigrette, pistachios, grana padano, pangrattato"} price={"$50 / $95"} />
                                    <CateringProductInfo name={"CAESAR SALAD"} description={"crisp romaine hearts, caesar dressing, crostini, grana padano"} price={"$50 / $95"} />
                                    <CateringProductInfo name={"CHEESE"} description={"house condiments and crostini"} price={"$100"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className="midaCateringContainerFourthContainerFifth">
                <div className="midaCateringContainerFourthContainerFifthContainer">

                    {/* First Part */}
                    <div className="midaCateringContainerFourthContainerFifthContainerFirst">
                        <div className="midaCateringContainerFourthContainerFifthContainerFirstContainer">
                            {/* Top */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTop">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainer">
                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerText">
                                        Pasta
                                    </p>

                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerTextNoteText">
                                    Gluten Free pasta available upon request
                                    </p>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottom">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottomContainer">
                                    <CateringProductInfo name={"BUCATINI OR PACCHERI"} description={"choice of sauce:"} price={"$85 / $165"} />
                                    <CateringProductInfo name={"ALL' AMATRICIANA"} description={"san marzano tomato, guanciale, pecorino"} price={""} />
                                    <CateringProductInfo name={"BOLOGNESE"} description={"pork sugo, broccoli rabe, pangrattato"} price={""} />
                                    <CateringProductInfo name={"ALLA MARINARA"} description={"san marzano tomato, garlic, grana padano"} price={""} />
                                    <CateringProductInfo name={"AL PESTO"} description={"rustic tomato pesto, fresh basil, calabrian chili"} price={""} />
                                    <CateringProductInfo name={"VEGAN CASARECCE"} description={"mushroom, san marzano tomato, broccoli rabe"} price={"$85 / $165"} />
                                    <CateringProductInfo name={"ALLA VODKA"} description={"cream-tomato sauce, grana padano, basil"} price={""} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            <div className="midaCateringContainerFourthContainerFifth">
                <div className="midaCateringContainerFourthContainerFifthContainer">

                    {/* First Part */}
                    <div className="midaCateringContainerFourthContainerFifthContainerFirst">
                        <div className="midaCateringContainerFourthContainerFifthContainerFirstContainer">
                            {/* Top */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTop">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainer">
                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerText">
                                    SIDES
                                    </p>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottom">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottomContainer">
                                    <CateringProductInfo name={"CHARRED CAULIFLOWER"} description={"romesco sauce"} price={"$60 / $98"} />
                                    <CateringProductInfo name={"ROASTED POTATOES"} description={"brunch-style"} price={"$40 / $75"} />
                                    <CateringProductInfo name={"SAUTEED BROCCOLI RABE"} description={"fresh garlic"} price={"$45 / $80"} />
                                    <CateringProductInfo name={"FOCACCIA"} description={"grana padano, garlic butter"} price={"$40 / $80"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="midaCateringContainerFourthContainerFifth">
                <div className="midaCateringContainerFourthContainerFifthContainer">

                    {/* First Part */}
                    <div className="midaCateringContainerFourthContainerFifthContainerFirst">
                        <div className="midaCateringContainerFourthContainerFifthContainerFirstContainer">
                            {/* Top */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTop">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainer">
                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerText">
                                    ENTREES
                                    </p>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottom">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottomContainer">
                                    <CateringProductInfo name={"SALMON PICCATA"} description={""} price={"$150 / $290"} />
                                    <CateringProductInfo name={"EGGPLANT PARMESAN"} description={"fried eggplant, san marzano tomato, mozzarella, basil"} price={"$95 / $185"} />
                                    <CateringProductInfo name={"ROASTED HALF CHICKEN"} description={"MIDA chimichurri marinate"} price={"$135 / $260"} />
                                    <CateringProductInfo name={"CHICKEN PARMESAN"} description={"san marzano tomato, mozzarella"} price={"$144 / $256"} />
                                    <CateringProductInfo name={"SHORT RIB LASAGNA"} description={"beef short rib, ricotta, san marzano tomato"} price={"$140 / $270"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            




            <div className="midaCateringContainerFourthContainerFifth">
                <div className="midaCateringContainerFourthContainerFifthContainer">

                    {/* First Part */}
                    <div className="midaCateringContainerFourthContainerFifthContainerFirst">
                        <div className="midaCateringContainerFourthContainerFifthContainerFirstContainer">
                            {/* Top */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTop">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainer">
                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerText">
                                    PIZZA (14")
                                    </p>

                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerTextNoteText">
                                        Available at Newton, East Boston, and Fenway locations
                                    </p>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottom">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottomContainer">
                                    <CateringProductInfo name={"TOMATO PIE"} description={"san marzano tomato, pecorino"} price={"$15"} />
                                    <CateringProductInfo name={"CLASSIC PEPPERONI"} description={"san marzano tomato, pepperoni, mozzarella"} price={"$19"} />
                                    <CateringProductInfo name={"SPICY SAUSAGE"} description={"crushed tomato, hots, onions mozzarella"} price={"$18"} />
                                    <CateringProductInfo name={"CHEESE PIZZA"} description={"san marzano tomato, pecorino, mozzarella"} price={"$16"} />
                                    <CateringProductInfo name={"PIZZA BIANCA"} description={"white sauce, shaved onion & mushroom, ricotta, basil"} price={"$18"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className="midaCateringContainerFourthContainerFifth">
                <div className="midaCateringContainerFourthContainerFifthContainer">

                    {/* First Part */}
                    <div className="midaCateringContainerFourthContainerFifthContainerFirst">
                        <div className="midaCateringContainerFourthContainerFifthContainerFirstContainer">
                            {/* Top */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTop">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainer">
                                    <p className="midaCateringContainerFourthContainerFifthContainerFirstContainerTopContainerText">
                                    DOLCI
                                    </p>
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottom">
                                <div className="midaCateringContainerFourthContainerFifthContainerFirstContainerBottomContainer">
                                    <CateringProductInfo name={"CHOCOLATE CHIP COOKIE PLATTER"} description={""} price={"$45 / two-dozen"} />
                                    <CateringProductInfo name={"TIRAMISU"} description={"lady fingers, mascarpone, espresso"} price={"$45 / $90"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* Sixth Part */}
            <div className="midaCateringContainerFourthContainerSixth">
                <div className="midaCateringContainerFourthContainerSixthContainer">
                    <div className="midaCateringContainerFourthContainerSixthContainerOne">
                        <p className="midaCateringContainerFourthContainerSixthContainerOneText">
                            EXTRAS
                        </p>
                    </div>

                    <div className="midaCateringContainerFourthContainerSixthContainerTwo">
                        <div className="midaCateringContainerFourthContainerSixthContainerTwoContainer">
                            <p className="midaCateringContainerFourthContainerSixthContainerTwoContainerText">
                                Paper plates, utensils, serving utensils and napkins can be added on for an additional $1 per person.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Seventh Part */}
            <div className="midaCateringContainerFourthContainerSeventh">
                <div className="midaCateringContainerFourthContainerSeventhContainer">
                    {/* Top Part */}
                    <div className="midaCateringContainerFourthContainerSeventhContainerTop">
                        <div className="midaCateringContainerFourthContainerSeventhContainerTopContainer">
                            <p className="midaCateringContainerFourthContainerSeventhContainerTopContainerText">
                                CATERING TERMS & CONDITIONS 
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="midaCateringContainerFourthContainerSeventhContainerBottom">
                        <div className="midaCateringContainerFourthContainerSeventhContainerBottomContainer">
                            <ul>
                                <li className="midaCateringContainerFourthContainerSeventhContainerBottomContainerText">All Food is subject to a 7% tax, 6 % taxable administrative fee, an optional 2% kitchen appreciation fee,  and a delivery charge when applicable

</li>
                                <li className="midaCateringContainerFourthContainerSeventhContainerBottomContainerText">There is no minimum order requirement.

</li>
                                <li className="midaCateringContainerFourthContainerSeventhContainerBottomContainerText">We request a minimum of 48-hour notice for all orders with exceptions when possible. If notice is not given in the specified windows, certain items may not be available.  Please email directly if your catering request is within 48 hours of the pick-up or delivery day.

</li>
                                <li className="midaCateringContainerFourthContainerSeventhContainerBottomContainerText">Cancellations within 48 hours are subject to 50% of the proposed cost 

</li>
                                <li className="midaCateringContainerFourthContainerSeventhContainerBottomContainerText">All delivery items require a 15-minute allowance for drop-off scheduling purposes.  Delivery instructions and parking information are required for prompt drop-off service 

</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            {/* Eight Part */}
            <div className="midaCateringContainerFourthContainerEight">
                <div className="midaCateringContainerFourthContainerEightContainer">
                    <img src={assets.midaCateringImg} alt="" className="midaCateringContainerFourthContainerEightContainerImage" />
                </div>
            </div>



            {/* Nine Part */}
            <div className="midaCateringContainerFourthContainerNine">
                <div className="midaCateringContainerFourthContainerNineContainer">
                    <p className="midaCateringContainerFourthContainerNineContainerText">
                        For specific catering questions, email   <span className="midaCateringContainerFourthContainerNineContainerTextSpan">melissa@midaboston.com</span>
                    </p>
                </div>
            </div>







      </div>

      <Fotter />
    </div>
  );
};

export default MidaCatering;
