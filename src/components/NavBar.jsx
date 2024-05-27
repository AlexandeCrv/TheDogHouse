import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import cao from "./cao.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        {" "}
        <Link className="link" to={"/"}>
          The Dog House <img src={cao} alt="" />
        </Link>
      </h2>
      <div className="ladodireito">
        <ul>
          <li>
            <Link className="new" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/new"} className="new">
              New breed
            </Link>
          </li>
          <li>
            <Link className="new" to={"/Dogs"}>
              Dogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
