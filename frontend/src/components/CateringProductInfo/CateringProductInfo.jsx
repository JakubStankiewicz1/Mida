import React from 'react';
import './cateringProductInfo.css';

const CateringProductInfo = ({ name, description, price }) => {
  return (
    <div className='cateringProductInfo'>
        <div className="cateringProductInfoContainer">
            {/* Top Part */}
            <div className="cateringProductInfoContainerTop">
                <div className="cateringProductInfoContainerTopContainer">
                    <div className="cateringProductInfoContainerTopContainerLeft">
                        <p className="cateringProductInfoContainerTopContainerLeftText">
                            {name}
                        </p>
                    </div>

                    <div className="cateringProductInfoContainerTopContainerRight">
                        <p className="cateringProductInfoContainerTopContainerRightText">
                            {price}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="cateringProductInfoContainerBottom">
                <div className="cateringProductInfoContainerBottomContainer">
                    <p className="cateringProductInfoContainerBottomContainerText">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CateringProductInfo;