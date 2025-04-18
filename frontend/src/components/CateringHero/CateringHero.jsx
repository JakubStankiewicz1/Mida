import React from 'react';
import './cateringHero.css';
// import Navbar from '../Navbar/Navbar';
import CateringNavbar from '../CateringNavbar/CateringNavbar';

const CateringHero = ({ image, title }) => {
  return (
    <div className='cateringHero'>
        <div className="cateringHeroContainer">
            <CateringNavbar />
        </div>
    </div>
  )
}

export default CateringHero