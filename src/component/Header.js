import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Cities from "../asset/cities.svg";

const Header = ({ location }) => {
  return (
    <header className="Header">
      <div>
        <h3>{location}</h3>
      </div>
      <div>
        <Link to="/cities">
          <img className="citiesIcon" src={Cities} alt="cities icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
