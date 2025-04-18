import React from 'react';
import './midaCatering.css';
import CateringHero from '../../components/CateringHero/CateringHero';
import assets from '../../assets/assets';

const MidaCatering = () => {
  return (
    <div className="midaCatering">
        {/* <CateringHero /> */}
        <CateringHero image={assets.cateringImgOne} title={"Mida Catering"} />
    </div>
  )
}

export default MidaCatering