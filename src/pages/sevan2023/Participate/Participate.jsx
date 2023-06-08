import React, { useState } from "react";
import img1 from "./images/1.svg";
import img2 from "./images/2.svg";
import img3 from "./images/3.svg";
import img4 from "./images/4.svg";
import img5 from "./images/5.svg";
import img6 from "./images/6.svg";
import arrow from "./images/icon.png";
import "./Participate.css";

const data = [
  {
    front: {
      img: img1,
      text: "Contacts and Networking",
    },
    back: {
      title: "Contacts and Networking",
      description:
        "Over the course of the Summit, you will have access to over 100 top speakers and mentors, 1.000 participants, 10.000 guests from over 50 countries. The high concentration of like-minded people, who are interested in innovation, is bound to help individuals and companies to strive for the greater.",
    },
  },
  {
    front: {
      img: img2,
      text: "Funding",
    },
    back: {
      title: "Funding",
      description:
        "The pitch battles that are organized during the Summit are judged by angel and institutional investors. Additionally, you will be introduced to numerous funding opportunities, among them Seaside Startup Summit’s in-house venture capital fund - Triple S Ventures.",
    },
  },
  {
    front: {
      img: img3,
      text: "New Skills and Knowledge",
    },
    back: {
      title: "New Skills and Knowledge",
      description:
        "Being a part of the world's leading micro-acceleration program, you will be able to meet numerous mentors and serial entrepreneurs from all over the globe, all industries and disciplines. They will be ready to hear your pitch and share their insights.",
    },
  },
  {
    front: {
      img: img4,
      text: "Live market experience",
    },
    back: {
      title: "Live market experience",
      description:
        "The Summit attracts representatives of over 200 leading local and regional companies, over 10.000 guests, from Armenia and abroad alike. You will have a unique chance to catch them all under the same “roof” and make an attempt to reach out to both B2B and B2C markets.",
    },
  },
  {
    front: {
      img: img5,
      text: "Additional Visibility",
    },
    back: {
      title: "Additional Visibility",
      description:
        "SSS is sure to attract attention from local and regional media, providing an opportunity for you to reach broader media streams. By leveraging this chance, you can effectively amplify your brand or cause, generating greater awareness and engagement with a wider audience.",
    },
  },
  {
    front: {
      img: img6,
      text: "Recruitment",
    },
    back: {
      title: "Recruitment",
      description:
        "Unlock a gateway to a vast pool of skilled and accomplished professionals, who are ready to share your ideas. You can benefit from their expertise and experience, which will enhance your project's success and help you achieve remarkable results.",
    },
  },
];

function Participate() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [toggled, setToggled] = useState(false);

  const nextOrPrev = (isNext) => {
    if (isNext) {
      setActiveCardIndex(activeCardIndex + 1);
    } else {
      setActiveCardIndex(activeCardIndex - 1);
    }
    setToggled(false);
  };

  return (
    <div id="participate" className="wb-participateBlock">
      <div className="wb-participateTitle">
        <h2>Why to Participate as a Startup</h2>
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
        <div className="wb-cardBlock">
          <div
            className={`arrowBlock ${
              activeCardIndex === 0 ? "displayNone" : ""
            }`}
            onClick={() => nextOrPrev(false)}>
            <img src={arrow} alt="Arrow" />
          </div>
          <div className="wb-container" onClick={() => setToggled(!toggled)}>
            <div className={`wb-flipper ${toggled ? "wb-flipper-rotate" : ""}`}>
              <div className="wb-front">
                <div className="wb-header">
                  <img src={data[activeCardIndex].front.img} alt="Logo" />
                </div>
                <p>{data[activeCardIndex].front.text}</p>
              </div>
              <div className="wb-back">
                <h3>{data[activeCardIndex].back.title}</h3>
                <p>{data[activeCardIndex].back.description}</p>
              </div>
            </div>
          </div>
          <div
            className={`arrowBlock ${
              activeCardIndex === data.length - 1 ? "displayNone" : ""
            }`}
            onClick={() => nextOrPrev(true)}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className="wb-applyButtonBlock">
        <a
          href="https://www.f6s.com/sevan-startup-summit-2023/apply"
          target="_blank"
          rel="noopener noreferrer">
          <button>Apply as a Startup</button>
        </a>
        <p>
          *The distribution into Starter and Booster is done by the SSS steering
          committee
        </p>
      </div>
    </div>
  );
}

export default Participate;
