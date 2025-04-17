import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavbarDark from "./components/NavbarDark/NavbarDark";
import LocationsMenus from "./pages/LocationsMenus/LocationsMenus";
import WorkHere from "./pages/WorkHere/WorkHere";

const App = () => {


  return (
    <div className="app">
      {/* {showNavbarDark && <NavbarDark />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationsMenus />} />
        <Route path="/work-here" element={<WorkHere />} />
      </Routes>
    </div>
  );
};

export default App;
