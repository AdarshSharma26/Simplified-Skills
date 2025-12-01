import React from "react";
import "./bubbleContainer.scss";
function BubbleContainer({ text, secondText, thirdText, bgColor }) {
  return (
    <div
      className="bubble-color  md:w-64 sm:w-64 lg:w-48 xl:w-64 "
      style={{ background: bgColor }}
    >
      <p className="firstText">{text}</p>
      <p className="secondText">{secondText}</p>
      <p className="thirdText">{thirdText}</p>
    </div>
  );
}

export default BubbleContainer;
