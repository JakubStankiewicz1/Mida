import React from 'react';
import "./locationReservation.css";

const LocationReservation = () => {
  return (
    <div className='locationReservation'>
        <div className="locationReservationContainer">
             {/* Top Part */}
             <div className="locationReservationContainerTop">
                <div className="locationReservationContainerTopContainer">
                    <div className="locationReservationContainerTopContainerBtn">
                        <p className="locationReservationContainerTopContainerBtnText">
                            Order Online
                        </p>
                    </div>
                </div>
             </div>

             {/* Bottom Part */}
             <div className="locationReservationContainerBottom"></div>
        </div>
    </div>
  )
}

export default LocationReservation