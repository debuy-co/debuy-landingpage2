import React from "react";
import logo from "../../assets/logo/logo_transparent.png";
import logoName from "../../assets/logo/logoname_transparent.png";

function Header(props) {
  // function handleClick(e) {
  //   e.preventDefault(); //most probably need this one as the default behavior of an anchor is to refresh the page
  //   console.log("cliccato");
  // }

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
            Insigths
          </a>
        </li>
      </ul>

      <li className="header__login">
        <a
          href="#1"
          className="header__login-link"
          onClick={props.onLoginClick}
        >
          Login &rarr;
        </a>
      </li>
    </header>
  );
}

export default Header;
