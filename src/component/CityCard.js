import React from "react";
import { Link } from "react-router-dom";
import "../styles/CityCard.css";
//global state
import { useCurrentCity } from "../Store/Store";

function CityCard({ name }) {
  const { UPDATECURRENTCITY } = useCurrentCity();

  function handleOnClick() {
    console.log("City Card Clicked.");
    UPDATECURRENTCITY(name);
  }
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="CityCard" onClick={handleOnClick}>
        <h3>{name}</h3>
        <p>28&deg;</p>
        <p>Haze</p>
      </div>
    </Link>
  );
}

export default CityCard;
