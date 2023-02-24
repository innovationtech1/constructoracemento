import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import '../styles/navegacion.css';

function Navegacion() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navContainer">
      <div className="titleContainer">
        <h1 className="innovationNav">
        
          ALL <span className="techNav">CONCRETO</span>
        </h1>
        <i className="menuBurge">
          <button onClick={handleClick} className="likesBtn">
            {showMenu ? "CLOSE" : "MENU"}
          </button>
        </i>
      </div>
      {showMenu && (
        <div className="menuContainer">
          <NavLink className="active" to="/constructoracemento/">
            <h4>Home</h4>
          </NavLink>
          <NavLink className="active" to="/constructoracemento/servicios">
            <h4>Servicios</h4>
          </NavLink>
          <NavLink className="active" to="/constructoracemento/informacion">
            <h4>Informacion</h4>
          </NavLink>
          <NavLink className="active" to="/constructoracemento/about">
            <h4>About</h4>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navegacion;