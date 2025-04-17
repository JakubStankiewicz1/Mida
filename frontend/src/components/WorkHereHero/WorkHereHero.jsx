import React from 'react';
import './workHereHero.css';

const WorkHereHero = () => {
  return (
    <div className="workHereHero">
        <div className="workHereHeroContainer">
            {/* First Part */}
            <div className="workHereHeroContainerFirst">
                <div className="workHereHeroContainerFirstContainer">
                    <p className="workHereHeroContainerFirstContainerText">
                        Work at MIDA
                    </p>
                </div>
            </div>

            {/* Second Part */}
            <div className="workHereHeroContainerSecond">
                <div className="workHereHeroContainerSecondContainer">
                    <p className="workHereHeroContainerSecondContainerText">
                        We are looking for passionate individuals to join our team. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHereHero