import React from "react";
import "../styles/DetailCard.css";
const DetailCard = ({ title, value }) => {
  return (
    <div className="DetailCard">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DetailCard;
