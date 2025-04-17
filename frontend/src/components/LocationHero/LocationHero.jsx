import React from 'react';
import "./locationHero.css";

const LocationHero = ({ image, name }) => {
  return (
    <div className="locationHero">
        <div className="locationHeroContainer">
            {/* Image Container */}
            <div className="locationHeroContainerImage">
                <div className="locationHeroContainerImageContainer">
                    <img src={image} alt="" className='locationHeroContainerImageContainerImage' />
                </div>
            </div>

            {/* Restaurant Name Container */}
            <div className="locationHeroContainerName">
                <div className="locationHeroContainerNameContainer">
                    <p className="locationHeroContainerNameContainerText kanit">
                        {name}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationHero