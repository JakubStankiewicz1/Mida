import React from 'react';
import "./fotter.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Fotter = () => {
  return (
    <div className="fotter">
        <div className="fotterContainer">
            {/* First Part */}
            <div className="fotterContainerFirst">
                <div className="fotterContainerFirstContainer">

                    {/* Facebook */}
                    <div className="fotterContainerFirstContainerFacebook">
                        <a href="">
                            <FaFacebookF className='fotterContainerFirstContainerFacebookIcon' />
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="fotterContainerFirstContainerInstagram">
                        <a href="">
                            <FaInstagram className="fotterContainerFirstContainerInstagramIcon" />
                        </a>
                    </div>

                    {/* Twitter */}
                    <div className="fotterContainerFirstContainerTwitter">
                        <a href="">
                            <FaTwitter className="fotterContainerFirstContainerTwitterIcon" />
                        </a>
                    </div>
                    


                </div>
            </div>

            {/* Second Part */}
            <div className="fotterContainerSecond">
                <div className="fotterContainerSecondContainer">
                    <p className="fotterContainerSecondContainerTextOne arvo">
                        Reserve Your Place On Our Email List
                    </p>

                    <p className="fotterContainerSecondContainerTextTwo">
                        Sign up with your email address to receive news and updates from Mida.
                    </p>
                </div>
            </div>

            
            




            {/* Third Part */}
            <div className="fotterContainerThird">
                <div className="fotterContainerThirdContainer">

                    {/* Left Part */}
                    <div className="fotterContainerThirdContainerLeft">
                        <div className="fotterContainerThirdContainerLeftContainer">
                            <input type="text" className='fotterContainerThirdContainerLeftContainerInput' placeholder='Email Address' />
                        </div>
                    </div>


                    {/* Right Part */}
                    <div className="fotterContainerThirdContainerRight">
                        <div className="fotterContainerThirdContainerRightContainer">
                            <div className="fotterContainerThirdContainerRightContainerButton">
                                <p className="fotterContainerThirdContainerRightContainerButtonText">
                                    Sign up
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>






            {/* Fourth Part */}
            <div className="fotterContainerFourth">
                <div className="fotterContainerFourthContainer">
                    <p className="fotterContainerFourthContainerText">
                        We respect your privacy.
                    </p>
                </div>
            </div>

            {/* Fifth Part */}
            <div className="fotterContainerFifth">
                <div className="fotterContainerFifthContainer">
                    <a href="" className='fotterContainerFifthContainerLink'>
                        <p className="fotterContainerFifthContainerText">
                            Website Design and Build By Soda Creek Digital
                        </p>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Fotter