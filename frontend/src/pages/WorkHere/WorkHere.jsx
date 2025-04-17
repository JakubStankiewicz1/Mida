import React from 'react';
import './workHere.css';
import NavbarDarkFixed from '../../components/NavbarDarkFixed/NavbarDarkFixed';
import WorkHereHero from '../../components/WorkHereHero/WorkHereHero';
import WorkHereForm from '../../components/WorkHereForm/WorkHereForm';

import Fotter from '../../components/Fotter/Fotter';

const WorkHere = () => {
  return (
    <div className="workHere">
        <div className="workHereContainer">
            <NavbarDarkFixed />

            <div className="workHereContainerMain">
                <WorkHereHero />
                <WorkHereForm />
                <Fotter />
            </div>
        </div>
    </div>
  )
}

export default WorkHere
