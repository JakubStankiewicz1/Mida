import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavbarDark from "./components/NavbarDark/NavbarDark";
import LocationsMenus from "./pages/LocationsMenus/LocationsMenus";
import WorkHere from "./pages/WorkHere/WorkHere";
import MidaEastBostonEvents from "./pages/MidaEastBostonEvents/MidaEastBostonEvents";
import MidaNewtonEvents from "./pages/MidaNewtonEvents/MidaNewtonEvents";
import MidaSouthEndEvents from "./pages/MidaSouthEndEvents/MidaSouthEndEvents";
import MidaFenwayEvents from "./pages/MidaSouthEndEvents/MidaFenwayEvents";
import GiftCards from "./pages/GiftCards/GiftCards";
import MidaCatering from "./pages/MidaCatering/MidaCatering";
import ApizzaCatering from "./pages/ApizzaCatering/ApizzaCatering";

const App = () => {


  return (
    <div className="app">
      {/* {showNavbarDark && <NavbarDark />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationsMenus />} />
        <Route path="/work-here" element={<WorkHere />} />
        <Route path="/mida-east-boston-events" element={<MidaEastBostonEvents />} />
        <Route path="/mida-newton-events" element={<MidaNewtonEvents />} />
        <Route path="/mida-south-end-events" element={<MidaSouthEndEvents />} />
        <Route path="/midafenway-events" element={<MidaFenwayEvents />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/mida-catering" element={<MidaCatering />} />
        <Route path="/apizza-catering" element={<ApizzaCatering />} />
      </Routes>
    </div>
  );
};

export default App;
