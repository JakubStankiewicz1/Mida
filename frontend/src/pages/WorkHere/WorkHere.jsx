import React from 'react';
import './workHere.css';
import NavbarDarkFixed from '../../components/NavbarDarkFixed/NavbarDarkFixed';
import WorkHereHero from '../../components/WorkHereHero/WorkHereHero';
import WorkHereForm from '../../components/WorkHereForm/WorkHereForm';

const WorkHere = () => {
  return (
    <div className="workHere">
        <div className="workHereContainer">
            <NavbarDarkFixed />

            <div className="workHereContainerMain">
                <WorkHereHero />
                <WorkHereForm />
            </div>
        </div>
    </div>
  )
}

export default WorkHere
