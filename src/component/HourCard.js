import React from "react";
import "../styles/HourCard.css";
import dayIcons from "../asset/dayIcons";
import nightIcons from "../asset/nightIcons";

const HourCard = ({ time, temp, icon }) => {
  let isDay = icon.split("/")[5] === "day" ? true : false;
  let iconCode = icon.split("/")[icon.split("/").length - 1].split(".")[0];

  return (
    <div className="HourCard">
      <p>{time}</p>
      <img
        src={isDay ? dayIcons[iconCode] : nightIcons[iconCode]}
        alt="icon"
        width="56px"
        height="auto"
      />
      <p>{temp}&deg;</p>
    </div>
  );
};

export default HourCard;
