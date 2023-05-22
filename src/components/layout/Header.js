import React from "react";
import logo from "../../assets/logo/logo_transparent.png";
import logoName from "../../assets/logo/logoname_transparent.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo"></img>
        <img src={logoName} alt="LogoName" className="header__logo-name"></img>
      </div>

      <ul className="header__navigation">
        <li className="header__navigation-item">
          <a href="#1" className="header__navigation-link">
            Why using blockchain ?
          </a>
        </li>

        <li className="header__navigation-item">
          <a href="#1" className="header__navigation-link">
            Features
          </a>
        </li>

        <li className="header__navigation-item">
          <a href="#1" className="header__navigation-link">
            4th paragraph
          </a>
        </li>

        <li className="header__navigation-item">
          <a href="#1" className="header__navigation-link">
            5th paragraph
          </a>
        </li>
      </ul>

      <li className="header__login">
        <a href="#1" className="header__login-link">
          Login &rarr;
        </a>
      </li>
    </header>
  );
}

export default Header;
