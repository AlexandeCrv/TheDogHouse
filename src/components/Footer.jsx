import React from "react";
import "./Footer.css";
import final from "./finals.png";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <img className="final" src={final} alt="" />© Feito por mim
      </footer>
    </div>
  );
}

export default Footer;
