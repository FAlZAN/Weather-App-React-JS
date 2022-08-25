import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import AutoComplete from "../component/AutoComplete";
import "../styles/SearchCity.css";
//global state
import { useCities, useCurrentCity } from "../Store/Store";

function SearchCity() {
  const [cityName, setCityName] = useState("");
  const [autoCompleteList, setAutoCompleteList] = useState([]);
  //global state
  const { ADDCITIES } = useCities();
  const { UPDATECURRENTCITY } = useCurrentCity();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }

  function onAutoCompleteClick(name) {
    console.log("autocomplete city clicked.");
    ADDCITIES({ name: name });
    UPDATECURRENTCITY(name);
  }

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/search.json?key=28cdbbc87cca4226ac604055221606&q=${cityName}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let alteredData = [];

        for (let chunk = 0; chunk < data.length; chunk++) {
          let { id, name, region, country } = data[chunk];
          alteredData.push({
            id: id,
            name: name,
            region: region,
            country: country,
          });
        }

        setAutoCompleteList(alteredData);
      });
  }, [cityName]);

  return (
    <div className="SearchCity">
      <div className="header">
        <Link to="/cities">
          <ChevronLeft className="chevronLeft" size={20} />
        </Link>
        <span>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Input the city name"
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </form>
        </span>
      </div>

      <div className="autoCompleteWrapper">
        {autoCompleteList.map((city) => (
          <Link className="routerLink" to="/">
            <AutoComplete
              key={city.id}
              name={city.name}
              region={city.region}
              country={city.country}
              onClick={() => onAutoCompleteClick(city.name)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchCity;
