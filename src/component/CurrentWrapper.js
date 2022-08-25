import React from "react";
import "../styles/default.css";
import "../styles/CurrentWrapper.css";
import ArrowUp from "../asset/arrow-up.svg";
import ArrowDown from "../asset/arrow-down.svg";
import Realfeel from "../asset/realfeel.svg";

const CurrentWrapper = ({ currentData }) => {
  return (
    <div className="CurrentWrapper">
      <span>
        <p>{currentData.temp}&deg;</p>
        <span>
          <img src={Realfeel} alt="realfeel icon" />
          <p>{currentData.realFeel}&deg;</p>
        </span>
      </span>
      <p>{currentData.condition}</p>
      <span>
        <p>
          <img src={ArrowUp} alt="high possible" /> {currentData.dayHigh}&deg;
        </p>
        <p>
          <img src={ArrowDown} alt="low possible" /> {currentData.dayLow}&deg;
        </p>
      </span>
    </div>
  );
};

export default CurrentWrapper;
