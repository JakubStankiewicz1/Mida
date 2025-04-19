import React from 'react';
import './apizza.css';
import CateringHero from '../../components/CateringHero/CateringHero';
import assets from '../../assets/assets';
import Fotter from '../../components/Fotter/Fotter';

const Apizza = () => {
  return (
    <div className="apizza">
        <CateringHero image={assets.apizzaImgOne} title={"APIZZA"} />
        
        <div className="apizzaContainer">
            {/* First Part */}
            <div className="apizzaContainerFirst">
                <div className="apizzaContainerFirstContainer">
                    <div className="apizzaContainerFirstContainerOne">
                        <div className="apizzaContainerFirstContainerOneContainer">
                            <div className="apizzaContainerFirstContainerOneContainerBtn">
                                <p className="apizzaContainerFirstContainerOneContainerBtnText">
                                    Order Online
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="apizzaContainerFirstContainerOne">
                        <div className="apizzaContainerFirstContainerOneContainer">
                            <p className="apizzaContainerFirstContainerOneContainerText">
                                or click the logo to visit our website
                            </p>
                        </div>
                    </div>

                    <div className="apizzaContainerFirstContainerThree">
                        <div className="apizzaContainerFirstContainerOneContainer">
                            <img src={assets.apizzaImgTwo} alt="" className='apizzaContainerFirstContainerOneContainerImage' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Hr Part */}
            <div className="apizzaContainerHr">
                <div className="apizzaContainerHrContainer">
                    <div className='apizzaContainerHrContainerDiv' />
                </div>
            </div>

            {/* Second Part */}
            <div className="apizzaContainerSecond">
                <div className="apizzaContainerSecondContainer">
                    {/* Top Part */}
                    <div className="apizzaContainerSecondContainerTop">
                        <div className="apizzaContainerSecondContainerTopContainer">
                            <p className="apizzaContainerSecondContainerTopContainerText">
                                Hours & Location
                            </p>
                        </div>
                    </div>

                    {/* Bottom Part */}
                    <div className="apizzaContainerSecondContainerBottomContainer">
                        {/* Left Part */}
                        <div className="apizzaContainerSecondContainerBottomContainerLeft">
                            <div className="apizzaContainerSecondContainerBottomContainerLeftContainer">
                                <div className="apizzaContainerSecondContainerBottomContainerLeftContainerOne">
                                    <p className="apizzaContainerSecondContainerBottomContainerLeftContainerOneTextOne">
                                        Sunday – Thursday – 10:30 AM – 9 PM
                                    </p>

                                    <p className="apizzaContainerSecondContainerBottomContainerLeftContainerOneTextTwo">
                                        Friday – Saturday – 10:30 AM – 10 PM
                                    </p>
                                </div>

                                <div className="apizzaContainerSecondContainerBottomContainerLeftContainerTwo">
                                    <div className="apizzaContainerSecondContainerBottomContainerLeftContainerTwoContainer">
                                        <p className="apizzaContainerSecondContainerBottomContainerLeftContainerTwoContainerTextOne">
                                            The Hub On Causeway
                                        </p>

                                        <p className="apizzaContainerSecondContainerBottomContainerLeftContainerTwoContainerTextTwo">
                                            80 Causeway Street
                                        </p>

                                        <p className="apizzaContainerSecondContainerBottomContainerLeftContainerTwoContainerTextThree">
                                            Boston, MA, 02114
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="apizzaContainerSecondContainerBottomContainerRight">
                            <div className="apizzaContainerSecondContainerBottomContainerRightContainer">
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

            {/* Hr Part */}
            <div className="apizzaContainerHr">
                <div className="apizzaContainerHrContainer">
                    <div className='apizzaContainerHrContainerDiv' />
                </div>
            </div>

            {/* Third Part */}
            <div className="apizzaContainerThird">
                <div className="apizzaContainerThirdContainer">
                    <div className="apizzaContainerThirdContainerTop">
                        <div className="apizzaContainerThirdContainerTopContainer">
                            <p className="apizzaContainerThirdContainerTopContainerText">
                                Additional Contact 
                            </p>
                        </div>
                    </div>

                    <div className="apizzaContainerThirdContainerBottom">
                        <div className="apizzaContainerThirdContainerBottomContainer">
                            <p className="apizzaContainerThirdContainerBottomContainerText">
                            General Inquiries: <span className='apizzaContainerThirdContainerBottomContainerTextSpan'>info@midaboston.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>

        <Fotter />
    </div>
  )
}

export default Apizza