import React from "react";
import logo from "../assets/logo.png";

class Header extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <a href="/#hero" className="logo-link">
          <img src={logo} alt="logo" className="logo" id="logo" />
        </a>
        <ul>
          <li>
            <a href="/#öppettider" id="oppettiderHover">
              Öppettider
            </a>
          </li>
          <li>
            <a href="/#priser" id="priserHover">
              Priser
            </a>
          </li>
          <li>
            <a href="/#uthyrning" id="uthyrningHover">
              Uthyrning
            </a>
          </li>
          <li>
            <a href="/#lär-dig" id="larDigHover">
              Lär dig åka
            </a>
          </li>
          <li>
            <a href="/#pistkarta" id="pistkartaHover">
              Pistkarta
            </a>
          </li>
          <li>
            <a href="kassa.html">
              <img
                src="images/kassa.png"
                alt="kassa"
                className="kassa"
                id="kassa"
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
