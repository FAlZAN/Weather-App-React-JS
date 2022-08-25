import React from "react";
import "../styles/default.css";
import "../styles/DailyWrapper.css";
import DayCard from "./DayCard";

const DailyWrapper = ({ dailyData }) => {
  return (
    <div className="DailyWrapper card-wrapper">
      <h3>DAILY FORECAST</h3>
      <div className="DayCardWrapper">
        {dailyData.map((data, index) => (
          <DayCard
            key={index}
            day={data.day}
            condition={data.condition}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyWrapper;
