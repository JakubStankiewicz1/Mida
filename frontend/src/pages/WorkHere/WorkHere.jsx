import React from 'react';
import './workHere.css';
import NavbarDarkFixed from '../../components/NavbarDarkFixed/NavbarDarkFixed';
import WorkHereHero from '../../components/WorkHereHero/WorkHereHero';

const WorkHere = () => {
  return (
    <div className="workHere">
        <div className="workHereContainer">
            <NavbarDarkFixed />
            
            <div className="workHereContainerMain">
                <WorkHereHero />
            </div>
        </div>
    </div>
  )
}

export default WorkHere
