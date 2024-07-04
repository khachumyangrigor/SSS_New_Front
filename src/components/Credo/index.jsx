import React, { useState } from "react";
import { data } from "./data";

import "./credo.css";
import arrow from "./images/icon.png";
import ContainerWithHeader from "../../ui/containers/ContainerWithHeader.jsx";
import FlipCard from "../../ui/cards/FlipCard.jsx";

function Credo({ title = "title", description, children }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const nextOrPrev = (isNext) => {
    if (isNext) {
      setActiveCardIndex(activeCardIndex + 1);
    } else {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  return (
    <ContainerWithHeader title={title} description={description}>
      <div className="new-credo">
        {data.map((item) => (
          <FlipCard
            color={item.color}
            front={
              <div className="credo-front">
                <div>
                  <img src={item.front.img} alt="opportunities" />
                </div>
                <h4 style={{ color: item.color }}>{item.front.text}</h4>
              </div>
            }
            back={
              <div className="credo-back">
                <h4 style={{ color: item.color }}>{item.back.title}</h4>
                <ul>
                  {item.back.description.map((d) => (
                    <li>{d}</li>
                  ))}
                </ul>
              </div>
            }
          />
        ))}
      </div>

      <div className="wb-mobileVersion-new-credo-block">
        <div className="wb-mobileVersion">
          <div className="wb-cardBlock">
            <div
              className={`arrowBlock ${
                activeCardIndex === 0 ? "displayNone" : ""
              }`}
              onClick={() => nextOrPrev(false)}
            >
              <img src={arrow} alt="Arrow" />
            </div>
            <div className="wb-container">
              <div
                className="wb-flipper"
                style={{ borderColor: data[activeCardIndex].color }}
              >
                <div className="wb-front">
                  <p
                    style={{
                      color: data[activeCardIndex].color,
                      fontWeight: "700",
                      fontSize: "26px !important",
                      lineHeight: "24px !important",
                      textAlign: "center",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {data[activeCardIndex].front.text}
                  </p>
                  <div className="wb-header">
                    <img src={data[activeCardIndex].front.img} alt="Logo" />
                  </div>

                  <ul className={"slideCard" + data[activeCardIndex].id}>
                    {data[activeCardIndex].back.description.map((li, i) => {
                      return <li key={`new-credo-2024-${i}`}>{li}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`arrowBlock ${
                activeCardIndex === data.length - 1 ? "displayNone" : ""
              }`}
              onClick={() => nextOrPrev(true)}
            >
              <img src={arrow} alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </ContainerWithHeader>
  );
}

export default Credo;
