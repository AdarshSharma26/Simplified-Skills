import React from "react";
import "./ModelDescription.scss";

function ModelDescription({ title, subTitle, description, bulletPoints, img }) {
  return (
    <div className="model-description">
      <div className="model-description__container">
        <div className="model-description__content">
          <div className="model-description__title">
            <h2>{title}</h2>
          </div>
          <div className="model-description__text">
            <p>{subTitle}</p>
          </div>
          <div className="model-description__description">
            <p>{description}</p>
          </div>
          <div className="model-description__bullets">
            <ul>
              {bulletPoints?.map((point, index) => (
                <li key={index}> &#x2022; &nbsp;{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img src={img} />
        </div>
      </div>
    </div>
  );
}

export default ModelDescription;
