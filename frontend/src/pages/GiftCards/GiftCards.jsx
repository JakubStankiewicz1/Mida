import React from 'react';
import "./giftCards.css";
import assets from '../../assets/assets';

import { NavLink } from 'react-router-dom';

const GiftCards = () => {
  return (
    <div className="giftCards">
        <div className="giftCardsContainer">
            {/* First Part */}
            <div className="giftCardsContainerFirst">
                <NavLink to="/" className="giftCardsContainerFirstContainer">
                    <img src={assets.giftCardsLogo} alt="" className='giftCardsContainerFirstContainerImage' />
                </NavLink>
            </div>

            {/* Second Part */}
            <div className="giftCardsContainerSecond">
                <div className="giftCardsContainerSecondContainer">
                    <img src={assets.giftCardsOne} alt="" className='giftCardsContainerSecondContainerImage' />
                </div>
            </div>



            {/* Third Part */}
            <div className="giftCardsContainerThird">
                <div className="giftCardsContainerThirdContainer">
                    {/* First Part */}
                    <div className="giftCardsContainerThirdContainerFirst">
                        <div className="giftCardsContainerThirdContainerFirstContainer">
                            <div className="giftCardsContainerThirdContainerFirstContainerOne">
                                <div className="giftCardsContainerThirdContainerFirstContainerOneContainer">
                                    <p className="giftCardsContainerThirdContainerFirstContainerOneContainerText">
                                        MIDA GIFT CARDS
                                    </p>
                                </div>
                            </div>

                            <div className="giftCardsContainerThirdContainerFirstContainerTwo">
                                <div className="giftCardsContainerThirdContainerFirstContainerTwoContainer">
                                    <p className="giftCardsContainerThirdContainerFirstContainerTwoContainerText">
                                        Order Now
                                    </p>
                                </div>
                            </div>

                            <div className="giftCardsContainerThirdContainerFirstContainerThree">
                                <div className="giftCardsContainerThirdContainerFirstContainerThreeContainer">
                                    <p className="giftCardsContainerThirdContainerFirstContainerThreeContainerText">
                                        Follow the steps below
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* Second Part */}
                    <div className="giftCardsContainerThirdContainerSecond">
                        <div className="giftCardsContainerThirdContainerSecondContainer">
                            {/* Left Part */}
                            <div className="giftCardsContainerThirdContainerSecondContainerLeft">
                                <div className="giftCardsContainerThirdContainerSecondContainerLeftContainer">

                                    
                                    {/* First Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFirst">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFirstContainer">
                                            <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerFirstContainerText">
                                                CHECK GIFT CARD BALANCE
                                            </p>
                                        </div>
                                    </div>

                                    {/* Second Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerSecond">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerSecondContainer">
                                            <img src={assets.giftCardsThree} alt="" />
                                        </div>
                                    </div>

                                    {/* Third Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThird">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainer">
                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTop">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTopText">
                                                    eGIFT CARD
                                                </p>
                                            </div>

                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTwo">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTwoText">
                                                    Give the gift of MIDA
                                                </p>
                                            </div>

                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerThree">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerThreeText">
                                                You can send an e-gift card immediate or schedule one to send at a later date. E-Gifts can be sent via email, SMS, or Facebook.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fourth Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourth">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourthContainer">
                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourthContainerBtn">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourthContainerBtnText">
                                                    Buy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Part */}
                            <div className="giftCardsContainerThirdContainerSecondContainerRight">
                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainer">
                                    {/* First Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFirst">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFirstContainer">
                                            <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerFirstContainerText">
                                                CHECK GIFT CARD BALANCE
                                            </p>
                                        </div>
                                    </div>

                                    {/* Second Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerSecond">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerSecondContainer">
                                            <img src={assets.giftCardsThree} alt="" />
                                        </div>
                                    </div>

                                    {/* Third Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThird">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainer">
                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTop">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTopText">
                                                    eGIFT CARD
                                                </p>
                                            </div>

                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTwo">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerTwoText">
                                                    Give the gift of MIDA
                                                </p>
                                            </div>

                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerThree">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerThirdContainerThreeText">
                                                You can send an e-gift card immediate or schedule one to send at a later date. E-Gifts can be sent via email, SMS, or Facebook.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fourth Part */}
                                    <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourth">
                                        <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourthContainer">
                                            <div className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourthContainerBtn">
                                                <p className="giftCardsContainerThirdContainerSecondContainerLeftContainerFourthContainerBtnText">
                                                    Buy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



            {/* Fourth Part */}
            {/* <div className="giftCardsContainerFourth"></div> */}

        </div>
    </div>
  )
}

export default GiftCards