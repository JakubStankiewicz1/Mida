import React from 'react';
import './cateringHero.css';
import CateringNavbar from '../CateringNavbar/CateringNavbar';

const CateringHero = ({ image, title }) => {
  return (
    <div className='cateringHero'>
        <CateringNavbar />
        <div className="cateringHeroContainer">
            <div className="cateringHeroContainerImage">
                <img src={image} alt="" className='cateringHeroContainerImageContainerImage' />
                <div className="cateringHeroOverlay" />
            </div>

            {/* Title */}
            <div className="cateringHeroContainerTitle">
                <p className="cateringHeroContainerTitleText">
                    {title}
                </p>
            </div>
        </div>
    </div>
  )
}

export default CateringHero;