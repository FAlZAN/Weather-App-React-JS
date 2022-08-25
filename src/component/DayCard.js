import React from "react";
import "../styles/DayCard.css";
import dayIcons from "../asset/dayIcons";
import nightIcons from "../asset/nightIcons";

const DayCard = ({ day, condition, icon }) => {
  let isDay = icon.split("/")[5] === "day" ? true : false;
  let iconCode = icon.split("/")[icon.split("/").length - 1].split(".")[0];

  //weekday
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //getting current day weekday
  const currentWeekDay = days[new Date().getDay()];
  //getting current year to add with incomplete day recieved through api
  const year = new Date().getFullYear();
  //concating year with api recieved date
  const dayAlter = `${day} ${year}`;
  //converting created date string to actual date
  const dateSort = new Date(dayAlter);
  //getting weekday
  const weekDay = days[dateSort.getDay()];

  return (
    <div className="DayCard">
      <p>{currentWeekDay === weekDay ? "Today" : weekDay}</p>
      <p>{day}</p>
      <img
        src={isDay ? dayIcons[iconCode] : nightIcons[iconCode]}
        alt="icon"
        width="56px"
        height="auto"
      />
      {/* <p>{condition}</p> */}
      <marquee scrollamount="4" width="80px">
        {condition}
      </marquee>
    </div>
  );
};

export default DayCard;
