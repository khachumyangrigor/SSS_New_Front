import React, { useEffect, useState } from "react";
import { data } from "./data.js";

import arrow from "./images/icon.png";
import Popup from "../Popup/Popup.jsx";
import { buyTickets } from "../Navbar/NavButtons.jsx";
import "./Participate.css";

function Participate() {
  const [width, setWidth] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [popupStatus, setPopupStatus] = useState(false);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
  }, []);

  useEffect(() => {
    if (popupStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [popupStatus]);

  const nextOrPrev = (isNext) => {
    if (isNext) {
      setActiveCardIndex(activeCardIndex + 1);
    } else {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  return (
    <>
      <div id="participate" className="wb-participateBlock">
        <div className="wb-participateTitle">
          <h2>Why Participate as a Startup</h2>
        </div>
        <div className="wb-participateItemsBlock">
          {data.map((block, i) => {
            return (
              <div key={`participate-${i}`} className="wb-container">
                <div className="wb-flipper">
                  <div className="wb-front">
                    <div className="wb-header">
                      <img src={block.front.img} alt="Logo" />
                    </div>
                    <p>{block.front.text}</p>
                  </div>
                  <div className="wb-back">
                    <h3>{block.back.title}</h3>
                    <p>{block.back.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="wb-mobileVersion">
          <div
            className="wb-cardBlock"
            style={{
              height: "450px",
            }}
          >
            <div
              className={`arrowBlock ${
                activeCardIndex === 0 ? "displayNone" : ""
              }`}
              onClick={() => nextOrPrev(false)}
            >
              <img src={arrow} alt="Arrow" />
            </div>

            <div
              className="wb-container"
              style={{
                maxHeight: "450px",
              }}
            >
              <div className="wb-flipper" style={{ borderColor: "#428BEF" }}>
                <div className="wb-front">
                  <p
                    style={{
                      color: "#1F2C4D",
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
                  <p
                    style={{
                      fontFamily: "Source Sans Pro",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px !important",
                      lineFeight: "20px !important",
                      textAlign: "left",
                      color: "#000000",
                      letterSpacing: "normal",
                      textTransform: "none",
                    }}
                  >
                    {data[activeCardIndex].back.description}
                  </p>
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
        <div className="wb-applyButtonBlock">
          <a
            // href="https://www.f6s.com/sevan-startup-summit-2023/apply"
            onClick={() => setPopupStatus(true)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Apply as a Startup</button>
          </a>
          <p>
            *The distribution into Starter and Booster is done by the SSS
            steering committee
          </p>
        </div>
      </div>
      <Popup
        mobile={width < 1024 ? true : false}
        infoMode={null}
        status={popupStatus}
        setPopupStatus={setPopupStatus}
        buttons={buyTickets}
      />
    </>
  );
}

export default Participate;
