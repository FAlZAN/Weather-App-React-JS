import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
          width="72px"
          height="auto"
        />
      </a>
    </footer>
  );
};

export default Footer;
