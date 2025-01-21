/* -------------------------------------------------------------------------- */
/*                   JavaScript file for building the navbar                  */
/* -------------------------------------------------------------------------- */

import "./css/Nav.css";
import logoText from "./assets/logo-text.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="">
          <img className="logo" src={logoText} alt="RamaLama Logo"></img>
        </a>
      </div>
      <div className="navbar-middle"></div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="#install">Install</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
