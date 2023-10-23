import React from "react";
import logo from "../assets/logo/logo_transparent.png";
import logoName from "../assets/logo/logoname_transparent.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"; //this component mark the place where the child route elements shall be rendered

function Header(props) {
  // function handleClick(e) {
  //   e.preventDefault(); //most probably need this one as the default behavior of an anchor is to refresh the page
  //   console.log("cliccato");
  // }

  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo"></img>
          <img
            src={logoName}
            alt="LogoName"
            className="header__logo-name"
          ></img>
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

          {/*added navigation with Link*/}
          <li className="header__navigation-item">
            <Link to="Insights" className="header__navigation-link">
              Insights
            </Link>
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
      <Outlet />
    </>
  );
}

export default Header;
