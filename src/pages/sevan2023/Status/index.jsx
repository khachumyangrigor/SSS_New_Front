import "./styles.css";
import React from "react";

const statsData = [
  { number: "50+", text: "countries" },
  { number: "150+", text: "startups" },
  { number: "10K+", text: "participants" },
  { number: "$100K+", text: "prizes" },
  { number: "$1mln", text: "investments" },
];

const Stats = () => {
  return (
    <div className="container">
      <div className={"statsWrapper"}>
        <div className={"statsTitle"}>
          Seaside Startup Summit shapes dreams of millions
        </div>
        <div className={"statsBox"}>
          {statsData.map((data, index) => (
            <div className={"statItem"} key={index}>
              <span>{data.number}</span>
              <span>{data.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
