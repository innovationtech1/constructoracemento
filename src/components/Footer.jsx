import "../styles/Footer.css";

import { NavLink } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import { BsBricks } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <br />
        <br />
        <div className="iconContainer">
          <i>
            <AiFillSetting />
          </i>
          <i>
            <BsBricks />
          </i>
          <i>
            <BsTruck />
          </i>
        </div>
        <div className="iconContainer">
          <i>
            <NavLink to="/constructoracemento/proyectos">PROYECTOS</NavLink>
          </i>
          <i>
            <NavLink to="/constructoracemento/material" >
              MATERIAL
            </NavLink>
          </i>
          <i>
            <NavLink to="/constructoracemento/transporte"  >
              TRANSPORTE
            </NavLink>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
