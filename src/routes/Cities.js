import React from "react";
import { Link } from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
import CityCard from "../component/CityCard";
import "../styles/Cities.css";
//global state
import { useCities } from "../Store/Store";

const Cities = () => {
  const { cities } = useCities();

  return (
    <div className="Cities">
      <div className="header">
        <Link to="/">
          <ChevronLeft className="chevronLeft" size={20} />
        </Link>

        <h3>Select city</h3>
      </div>

      <div>
        {cities.map((city, index) => (
          <CityCard key={index} name={city.name} />
        ))}
      </div>

      <div className="AddCity">
        <Link to="/search">
          <div className="AddBtn">
            <PlusLg className="plus" size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cities;
