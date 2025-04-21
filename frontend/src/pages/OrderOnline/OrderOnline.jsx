import React from 'react';
import './orderOnline.css';
import assets from '../../assets/assets';

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
            <div className="orderOnlineContainerBottom"></div>
        </div>

    </div>
  )
}

export default OrderOnline
