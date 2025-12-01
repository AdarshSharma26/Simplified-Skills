import React from "react";
import "./DetailsCard.scss";

function DetailsCard({ image, title, description }) {
  return (
    <div className="details-card">
      <div>
        <img src={image} />
      </div>
      <div className="details-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DetailsCard;
