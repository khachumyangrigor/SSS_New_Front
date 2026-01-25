import "./styles.css";
import React from "react";

const statsData = [
  { number: "20+", text: "COUNTRIES" },
  { number: "100+", text: "STARTUPS" },
  { number: "1,000+", text: "PARTICIPANTS" },
  { number: "100+", text: "SPEAKERS & MENTORS" },
  { number: "50+", text: "VC & Investors" },
];

const Stats = () => {
  return (
      <div className="container wb-statBlock sevan2024Stat">
        <div className={"statsWrapper"}>
          <div className={"statsTitle"}>
              Rajasthan Startup Summit 2026 in numbers
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
