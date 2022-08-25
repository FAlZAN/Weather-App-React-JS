import React from "react";
import "../styles/HourlyWrapper.css";
import "../styles/default.css";
import HourCard from "./HourCard";

const HourlyWrapper = ({ hourlyData }) => {
  function hourTrim(hour) {
    const currentHour = new Date().toString().split(" ")[4].split(":")[0];
    const hourAlt = hour.time.split(" ")[1].split(":")[0];
    return currentHour === hourAlt
      ? "Now"
      : hourAlt > 12
      ? `${hourAlt - 12}pm`
      : hourAlt <= 12
      ? `${hourAlt === "00" ? 12 : Math.ceil(hourAlt)}am`
      : `${hourAlt}am`;
  }

  function tempFloor(temp) {
    return Math.ceil(temp);
  }

  return (
    <div className="HourlyWrapper card-wrapper">
      <h3>HOURLY FORECAST</h3>
      <div className="HourCardWrapper">
        {hourlyData.map((hour, index) => (
          <HourCard
            key={index}
            time={hourTrim(hour)}
            temp={tempFloor(hour.temp_c)}
            icon={hour.condition.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyWrapper;
