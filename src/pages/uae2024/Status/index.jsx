import "./styles.css";
import React from "react";
import "../myStyles.css"

const statsData = [
  { number: "30+", text: "countries" },
  { number: "100+", text: "startups" },
  { number: "3,000+", text: "participants" },
  { number: "20+", text: "VC & investors" },
  { number: "US $100K+", text: "prize fund" },
];

const Stats = () => {
  return (
    <div className="container">
      <div className={"statsWrapper"}>
        <div className={"statsTitle"}>
          Seaside Startup Summit UAE 2024 in numbers
        </div>
        <div className={"statsBox"}>
          {statsData.map((data, index) => (
            <div className={"statItem"} key={index}>
              <span className="wb-statCount">{data.number}</span>
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
