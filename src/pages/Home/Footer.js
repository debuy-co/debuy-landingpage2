import React from "react";
import fullLogoHigh from "../../assets/logo/full_transparent_high.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        srcSet={fullLogoHigh}
        alt="fullLogo"
        className="footer__logo"
        src={fullLogoHigh} //this one we use just in case "srcSet" is not supported by the browser you are using
      ></img>
      <p className="copyright">Made in China &copy;</p>
    </footer>
  );
}

export default Footer;
