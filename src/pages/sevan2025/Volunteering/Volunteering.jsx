import React, { useState } from "react";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import arrow from "./images/icon.png";
import "../myStyles.css"

const data = [
  {
    front: {
      img: img1,
      text: "GRAND ENTRY",
    },
    back: {
      title: "GRAND ENTRY",
      description:
        "This team assists with grand entry procedures, requirements and activities. Volunteers help participants with passes and escort them to the event grounds. They also are responsible for shuttle services.",
    },
  },
  {
    front: {
      img: img2,
      text: "MEET AND GREET TEAM",
    },
    back: {
      title: "MEET AND GREET TEAM",
      description:
        "This team is responsible for organizing the meet and greet of the international guests, speakers and special attendees, escorting them from airport and/or other transportation hubs to the venue and/or hotels.",
    },
  },
  {
    front: {
      img: img3,
      text: "Educational support team",
    },
    back: {
      title: "Educational support team",
      description:
        "This team is responsible for guiding startup founders, speakers, mentors, and judges through the agenda, facilitating communication among them, and assisting the educational program team with various tasks.",
    },
  },
  {
    front: {
      img: img4,
      text: "DIRECTIONS & ASSISTANCE",
    },
    back: {
      title: "DIRECTIONS & ASSISTANCE",
      description:
        "This team is responsible for assisting attendees with information and directions around the event grounds. They run the lost-and-found room, distribute the visitors’ guides and agendas and help participants navigate around the camp.",
    },
  },
  {
    front: {
      img: img5,
      text: "MEDIA TEAM",
    },
    back: {
      title: "MEDIA TEAM",
      description:
        "This team's role includes writing engaging content for social media, tailored to each platform. They also draft press releases and maintain communication with media outlets. Additionally, they make Instagram stories, which will also involve conducting interviews with a range of participants, such as startup founders, speakers, and special guests.",
    },
  },
  {
    front: {
      img: img6,
      text: "Photo-Video Production",
    },
    back: {
      title: "Photo-Video Production",
      description:
        "This team is responsible for photo and video shooting of various activities during the event. They must follow the agenda and prepare materials, covering each activity.",
    },
  },
  {
    front: {
      img: img7,
      text: "Technical support",
    },
    back: {
      title: "Technical support",
      description:
        "This team conducts various technical operations, such as warehouse management, parking zone control, beach maintenance. These volunteers also act as a quick response team.",
    },
  },
  {
    front: {
      img: img8,
      text: "Entertainment",
    },
    back: {
      title: "Entertainment",
      description:
        "This team works under direct supervision of the entertainment Teamlead and is responsible for the organization of various sport, art and gaming events and contests. They also provide support to the DJs and professional entertainers.",
    },
  },
];

function Volunteering(props) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const nextOrPrev = (isNext) => {
    if (isNext) {
      setActiveCardIndex(activeCardIndex + 1);
    } else {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  return (
    <div className="wb-volunteeringBlock sevan24-volunteering">
      <div className="wb-volunteeringTitle">
        <h2>Main Types of Volunteering</h2>
      </div>
      <div className="wb-volunteeringItemsBlock">
        {data.map((block, i) => {
          return (
            <div key={`vol-${i}`} className="wb-container">
              <div className="wb-flipper">
                <div className="wb-front">
                  <div className="wb-header">
                    <img src={block.front.img} alt="Logo" />
                  </div>
                  <p className="sevan24-volunteering-card-title">{block.front.text}</p>
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
        <div className="wb-cardBlock" style={{height: "428px"}}>
          <div
            className={`arrowBlock ${
              activeCardIndex === 0 ? "displayNone" : ""
            }`}
            onClick={() => nextOrPrev(false)}>
            <img src={arrow} alt="Arrow" />
          </div>

          <div className="wb-container">
            <div className="wb-flipper" style={{borderColor: "#428BEF"}}>
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
                  <img src={data[activeCardIndex].front.img} alt="Logo"/>
                </div>
                <p
                  style={{
                    fontFamily: 'Source Sans Pro',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px !important",
                    lineFeight: "20px !important",
                    textAlign: "left",
                    color: "#1F2C4C",
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
            onClick={() => nextOrPrev(true)}>
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className="wb-applyButtonBlock">
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-WeH7au113WM0EBg0eKVvRPmb_6dGHvlhDcFB58mYeNL0xg/viewform"
            // onClick={() => setPopupStatus(true)}
            target="_blank"
            rel="noopener noreferrer">
          <button /*className="passiveBtn wb-comingPassiveBtn"*/>Apply as a Volunteer</button>
        </a>

      </div>
    </div>
  );
}

export default Volunteering;
