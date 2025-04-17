import React, { useState } from 'react';
import "./locationReservation.css";
import { FaRegUser } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";

const LocationReservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

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
             <div className="locationReservationContainerBottom">
              <div className="locationReservationContainerBottomContainer">
                {/* Top Part */}
                <div className="locationReservationContainerBottomContainerTop">
                  <div className="locationReservationContainerBottomContainerTopContainer">
                    <p className="locationReservationContainerBottomContainerTopContainerText">
                      Make a reservation
                    </p>
                  </div>
                </div>

                {/* Middle Part */}
                <div className="locationReservationContainerBottomContainerMiddle">
                  <div className="locationReservationContainerBottomContainerMiddleContainer">

                    {/* Number of People */}
                    <div className="locationReservationPeopleWrapper">
                      <FaRegUser className="locationReservationIconLeft" />
                      <select>
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                        <option value="">3 people</option>
                        <option value="">4 people</option>
                        <option value="">5 people</option>
                        <option value="">6 people</option>
                        <option value="">7 people</option>
                        <option value="">8 people</option>
                        <option value="">9 people</option>
                        <option value="">10 people</option>
                      </select>
                      <IoIosArrowDown className="locationReservationIcon" />
                    </div>

                    {/* Date Picker */}
                    <div className="locationReservationDateWrapper" onClick={() => setShowDatePicker(!showDatePicker)}>
                      <FaRegCalendarAlt className="locationReservationIconLeft" />
                      <p className="locationReservationDateText">
                        {selectedDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <IoIosArrowDown className="locationReservationIcon" />
                    </div>
                    {/* {showDatePicker && (
                      <DatePicker
                        selected={selectedDate}
                        className="locationReservationDatePicker"
                        onChange={(date) => {
                          setSelectedDate(date);
                          setShowDatePicker(false);
                        }}
                        inline
                      />
                    )} */}

                    {/* Time Picker */}
                    <div className="locationReservationTimeWrapper">
                      <LuClock className="locationReservationIconLeft" />
                      <select>
                        <option value="">1:30 PM</option>
                        <option value="">2:00 PM</option>
                        <option value="">2:30 PM</option>
                        <option value="">3:00 PM</option>
                        <option value="">3:30 PM</option>
                        <option value="">4:00 PM</option>
                        <option value="">4:30 PM</option>
                        <option value="">5:00 PM</option>
                        <option value="">5:30 PM</option>
                        <option value="">6:00 PM</option>
                        <option value="">6:30 PM</option>
                        <option value="">7:00 PM</option>
                        <option value="">7:30 PM</option>
                        <option value="">8:00 PM</option>
                        <option value="">8:30 PM</option>
                        <option value="">9:00 PM</option>
                        <option value="">9:30 PM</option>
                        <option value="">10:00 PM</option>
                        <option value="">10:30 PM</option>
                        <option value="">11:00 PM</option>
                        <option value="">11:30 PM</option>
                      </select>
                      <IoIosArrowDown className="locationReservationIcon" />
                    </div>

                    
                  </div>

                  {showDatePicker && (
                      <DatePicker
                        selected={selectedDate}
                        className="locationReservationDatePicker"
                        onChange={(date) => {
                          setSelectedDate(date);
                          setShowDatePicker(false);
                        }}
                        inline
                      />
                    )}

                </div>

                {/* Bottom Part */}
                <div className="locationReservationContainerBottomContainerBottom">
                  <div className="locationReservationContainerBottomContainerBottomContainer">
                    <div className="locationReservationContainerBottomContainerBottomContainerBtn">
                      <p className="locationReservationContainerBottomContainerBottomContainerBtnText">
                        Find a Table
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
        </div>
    </div>
  )
}

export default LocationReservation;