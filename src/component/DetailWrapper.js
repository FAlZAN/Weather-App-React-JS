import React from "react";
import DetailCard from "./DetailCard";
import "../styles/DetailWrapper.css";

const DetailWrapper = ({ details }) => {
  return (
    <div className="DetailWrapper card-wrapper">
      <h3>DETAILS</h3>
      <div className="DetailCardWrapper">
        {details.map((detail, index) => (
          <DetailCard key={index} title={detail.title} value={detail.value} />
        ))}
      </div>
    </div>
  );
};

export default DetailWrapper;
