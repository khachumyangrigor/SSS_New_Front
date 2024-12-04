import React from "react";

// css
import "./styles.css";


const Stats = ({statsData, statsTitle = 'title'}) => {
    return (
        <div className="container wb-statBlock sevan2024Stat">
            <div className={"statsWrapper"}>
                <div className={"statsTitle"}>
                    {statsTitle}
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
