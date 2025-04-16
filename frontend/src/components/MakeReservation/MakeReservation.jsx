import React, { useState } from "react";
import "./makeReservation.css";
import { FaRegUser } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";

const MakeReservation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className="makeReservation">
      <div className="makeReservationContainer">
        {/* Top Part */}
        <div className="makeReservationTop">
          <div className="makeReservationTopContainer">
            <p className="makeReservationTopContainerText">Make a Reservation</p>
          </div>
        </div>

        {/* Middle Part */}
        <div className="makeReservationMiddle">
          <div className="makeReservationMiddleContainer">
            {/* First Part */}
            <div className="makeReservationMiddleContainerFirst">
              <div className="makeReservationMiddleContainerFirstContainer">
                <div className="customSelectWrapper">
                  <select name="" id="" className="makeReservationMiddleContainerFirstContainerSelect">
                    <option value="" className="makeReservationMiddleContainerFirstContainerSelectOpt">Select a restaurant</option>
                    <option value="">MIDA - Fenway</option>
                    <option value="">MIDA - Newton</option>
                    <option value="">MIDA - South End</option>
                    <option value="">MIDA - East Boston</option>
                    <option value="">The Babe</option>
                  </select>
                  <IoIosArrowDown className="customSelectIcon" />
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="makeReservationMiddleContainerDate">
              <div className="customSelectWrapper" onClick={() => setShowDatePicker(!showDatePicker)}>
                <FaRegCalendarAlt className="customSelectIconLeft" />
                <p className="makeReservationMiddleContainerDateText">
                  {selectedDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <IoIosArrowDown className="customSelectIcon" />
              </div>
              {showDatePicker && (
                <DatePicker
                    
                  selected={selectedDate}
                  className="datePicker"
                  onChange={(date) => {
                    setSelectedDate(date);
                    setShowDatePicker(false);
                  }}
                  inline
                />
              )}
            </div>

            {/* Second Part */}
            <div className="makeReservationMiddleContainerSecond">
              <div className="customSelectWrapper">
                <LuClock className="customSelectIconLeft" />
                <select name="" id="">
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
                <IoIosArrowDown className="customSelectIcon" />
              </div>
            </div>

            {/* Third Part */}
            <div className="makeReservationMiddleContainerThird">
              <div className="customSelectWrapper">
                <FaRegUser className="customSelectIconLeft" />
                <select name="" id="">
                  <option value="">1 person</option>
                  <option value="">2 person</option>
                  <option value="">3 person</option>
                  <option value="">4 person</option>
                  <option value="">5 person</option>
                  <option value="">6 person</option>
                  <option value="">7 person</option>
                  <option value="">8 person</option>
                  <option value="">9 person</option>
                  <option value="">10 person</option>
                  <option value="">11 person</option>
                  <option value="">12 person</option>
                  <option value="">13 person</option>
                  <option value="">14 person</option>
                  <option value="">15 person</option>
                  <option value="">16 person</option>
                  <option value="">17 person</option>
                  <option value="">18 person</option>
                  <option value="">19 person</option>
                  <option value="">20 person</option>
                </select>
                <IoIosArrowDown className="customSelectIcon" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="makeReservationBottom">
          <div className="makeReservationBottomContainer">
            <div className="makeReservationBottomContainerBtn">
              <p className="makeReservationBottomContainerBtnText">Find a Table</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeReservation;