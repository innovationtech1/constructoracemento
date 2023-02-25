import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import concrete from '../assets/logoconcreto2.png'

import '../styles/navegacion.css';

function Navegacion() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navContainer">
      <div className="titleContainer">
          <img className="imgLogo" src={concrete} alt="" />
        <h1 className="techNav ">
          ALL <span className="innovationNav">CONCRETE</span>
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
            <h4 className="titleNav">Home</h4>
          </NavLink>
          <NavLink className="active" to="/constructoracemento/servicios">
            <h4 className="titleNav"> Servicios</h4>
          </NavLink>
          <NavLink className="active" to="/constructoracemento/informacion">
            <h4 className="titleNav">Informacion</h4>
          </NavLink>
          <NavLink className="active" to="/constructoracemento/about">
            <h4 className="titleNav">About</h4>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navegacion;