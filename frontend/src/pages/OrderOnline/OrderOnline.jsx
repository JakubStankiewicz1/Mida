import React from 'react';
import './orderOnline.css';
import assets from '../../assets/assets';
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineAim } from "react-icons/ai";

const OrderOnline = () => {
  return (
    <div className="orderOnline">

        <div className="orderOnlineContainer">
            {/* Top Part */}
            <div className="orderOnlineContainerTop">
                <div className="orderOnlineContainerTopContainer">
                    <div className="orderOnlineContainerTopContainerTitle">
                        <img src={assets.mainLogo} alt="" className='orderOnlineContainerTopContainerTitleImg' />
                        {/* dsfa */}
                    </div>
                </div>
            </div>




            {/* Bottom Part */}
            <div className="orderOnlineContainerBottom">
                <div className="orderOnlineContainerBottomContainer">
                    {/* Left Part */}
                    <div className="orderOnlineContainerBottomContainerLeft">
                        <div className="orderOnlineContainerBottomContainerLeftContainer">

                            {/* Top Select Element */}
                            <div className="orderOnlineContainerBottomContainerLeftContainerTopSelect">
                                <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainer">
                                    {/* Left Part */}
                                    <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerLeft">
                                        <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerLeftContainer">
                                            <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerLeftContainerButton">
                                                <p className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerLeftContainerButtonText">
                                                    Pickup
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Part */}
                                    <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerRight">
                                        <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerRightContainer">
                                            <div className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerRightContainerButton">
                                                <p className="orderOnlineContainerBottomContainerLeftContainerTopSelectContainerRightContainerButtonText">
                                                    Delivery
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* First Part */}
                            <div className="orderOnlineContainerBottomContainerLeftContainerFirst">
                                <div className="orderOnlineContainerBottomContainerLeftContainerFirstContainer">
                                    <div className="orderOnlineContainerBottomContainerLeftContainerFirstContainerTitle">
                                        <p className="orderOnlineContainerBottomContainerLeftContainerFirstContainerTitleText">
                                            Find stores nerbay
                                        </p>
                                    </div>

                                    <div className="orderOnlineContainerBottomContainerLeftContainerFirstContainerInput">
                                        <div className="orderOnlineContainerBottomContainerLeftContainerFirstContainerInputContainer">
                                            <HiOutlineSearch className="orderOnlineContainerBottomContainerLeftContainerFirstContainerInputContainerIconSearch" />
                                            <input type="text" placeholder='Find a store near you by city or ZIP ...' className='orderOnlineContainerBottomContainerLeftContainerFirstContainerInputContainerInput' />
                                            <AiOutlineAim className='orderOnlineContainerBottomContainerLeftContainerFirstContainerInputContainerIconAim' />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Second Part */}
                            <div className="orderOnlineContainerBottomContainerLeftContainerSecond">
                                <div className="orderOnlineContainerBottomContainerLeftContainerSecondContainer">
                                    <p className="orderOnlineContainerBottomContainerLeftContainerSecondContainerText">
                                        4 total stores
                                    </p>
                                </div>
                            </div>

                            {/* Third Part */}
                            <div className="orderOnlineContainerBottomContainerLeftContainerThird"></div>

                            {/* Fourth Part */}
                            <div className="orderOnlineContainerBottomContainerLeftContainerFourth"></div>

                            {/* Fifth Part */}
                            <div className="orderOnlineContainerBottomContainerLeftContainerFifth"></div>
                            
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="orderOnlineContainerBottomContainerRight">fdsafas</div>
                </div>
            </div>



        </div>

    </div>
  )
}

export default OrderOnline
