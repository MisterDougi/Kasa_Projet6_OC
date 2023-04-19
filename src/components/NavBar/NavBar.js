import logo from "../../assets/logo.svg";
import * as React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <img src={logo} alt="logo-kasa" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="lienNav">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="lienNav">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
