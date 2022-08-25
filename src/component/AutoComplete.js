import React from "react";
import "../styles/AutoComplete.css";

function AutoComplete({ name, region, country, onClick }) {
  return (
    <div className="AutoComplete" onClick={onClick}>
      <p>{name}</p>
      <p>
        {region}, {country}
      </p>
    </div>
  );
}

export default AutoComplete;
