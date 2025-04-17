import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavbarDark from "./components/NavbarDark/NavbarDark";
import LocationsMenus from "./pages/LocationsMenus/LocationsMenus";

const App = () => {


  return (
    <div className="app">
      {/* {showNavbarDark && <NavbarDark />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationsMenus />} />
      </Routes>
    </div>
  );
};

export default App;
