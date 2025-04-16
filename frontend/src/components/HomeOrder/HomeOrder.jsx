import React from 'react';
import "./homeOrder.css";
import { NavLink } from 'react-router-dom';

const HomeOrder = () => {
  return (
    <div className='homeOrder'>
        <div className="homeOrderContainer">
            <NavLink className="homeOrderContainerButton">
                <p className="homeOrderContainerButtonText">
                    Order Online
                </p>
            </NavLink>
        </div>
    </div>
  )
}

export default HomeOrder