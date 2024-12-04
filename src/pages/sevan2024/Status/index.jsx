import "./styles.css";
import React from "react";

const statsData = [
  { number: "50+", text: "COUNTRIES" },
  { number: "250+", text: "STARTUPS" },
  { number: "10,000+", text: "PARTICIPANTS" },
  { number: "50+", text: "VCS & INVESTORS" },
  { number: "US $200K+", text: "INVESTMENTS" },
];

const Stats = () => {
  return (
      <div className="container wb-statBlock sevan2024Stat">
        <div className={"statsWrapper"}>
          <div className={"statsTitle"}>
            Sevan Startup Summit 2024 in numbers
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
