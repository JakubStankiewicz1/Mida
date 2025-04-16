import React from "react";
import "./about.css";
import MakeReservation from "../MakeReservation/MakeReservation";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        {/* Top Part */}
        <div className="aboutContainerTop">
          <div className="aboutContainerTopContainer">
            {/* Main Title */}
            <div className="aboutContainerTopContainerTitle">
              <div className="aboutContainerTopContainerTitleContainer">
                <p className="aboutContainerTopContainerTitleContainerText">Hi, we're mida.</p>
              </div>
            </div>

            {/* Middle Text */}
            <div className="aboutContainerTopContainerMiddle">
              <div className="aboutContainerTopContainerMiddleContainer">
                <p className="aboutContainerTopContainerMiddleContainerTextOne">We are an inspired Italian neighborhood restaurant.</p>
                <p className="aboutContainerTopContainerMiddleContainerTextTwo">
                  We believe in being generous and thoughtful in the way we prepare our food and engage with our community. And like you, we know the
                  value of a good meal shared between friends.
                </p>
                <p className="aboutContainerTopContainerMiddleContainerTextThree">
                  MIDA. It means “he gives me.” And every meal we create is meant to be a gift just for you.
                </p>
                <p className="aboutContainerTopContainerMiddleContainerTextFour">We’re looking forward to seeing you soon.</p>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="aboutContainerTopContainerBottom">
              <div className="aboutContainerTopContainerBottomContainer">
                <p className="aboutContainerTopContainerBottomContainerText">-The MIDA Family</p>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Part */}
        <div className="aboutContainerBottom">
            <MakeReservation />
        </div>

      </div>
    </div>
  );
};

export default About;
