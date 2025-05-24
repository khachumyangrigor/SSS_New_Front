import "./styles.css";
import React from "react";

const statsData = [
  { number: "50+", text: "COUNTRIES" },
  { number: "200+", text: "STARTUPS" },
  { number: "15,000+", text: "PARTICIPANTS" },
  { number: "300+", text: "SPEAKERS & MENTORS" },
  { number: "$100K+", text: "PRIZE FUND" },
];

const Stats = () => {
  return (
      <div className="container wb-statBlock sevan2024Stat">
        <div className={"statsWrapper"}>
          <div className={"statsTitle"}>
            Sevan Startup Summit 2025 in numbers
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
