import React from "react";
import "./style.css";

const FlipCard = ({ front, back, color = "transparent" }) => {
  return (
    <div className="flip-card">
      <div style={{ borderColor: color }} className="flip-content">
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
