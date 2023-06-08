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

const data = [
  {
    front: {
      img: img1,
      text: "GRAND ENTRY",
    },
    back: {
      title: "GRAND ENTRY",
      description:
        "This Volunteer team assists with grand entry procedures, requirements and activities. Volunteers help participants with passes and escort them to the event grounds. They also are responsible for shuttle services.\n",
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
        "The team is responsible for organizing the meet and greet of the international guests, speakers and special attendees, escorting them from airport and/or other transportation hubs to the venue and/or hotels.",
    },
  },
  {
    front: {
      img: img3,
      text: "CONTENT RELATED SERVICES",
    },
    back: {
      title: "CONTENT RELATED SERVICES",
      description:
        "Content team volunteers are responsible for the technical management of the auditoriums and campfires. They support speakers, mentors, startuppers and judges by guiding through the agenda and providing content-related information.",
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
        "These volunteers are responsible for assisting attendees with information and directions around the event grounds. They run the lost-and-found room, distribute the visitors’ guides and agendas and help participants navigate around the camp.",
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
        "The media team is responsible for the content writing during the talks, workshops, and masterclasses. They are also responsible for interviewing various participants, such as startuppers, speakers, and special guests.",
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
        "These volunteers are responsible for photo and video shooting of various activities during the event. They must follow the agenda and prepare materials, covering each activity.",
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
        "The technical team conducts various technical operations, such as warehouse management, parking zone control, beach maintenance. These volunteers also act as a quick response team.",
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
        "These volunteers work under direct supervision of the entertainment Teamlead and are responsible for the organization of various sport, art and gaming events and contests. They also provide support to the DJs and professional entertainers.",
    },
  },
];

function Volunteering(props) {
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
    <div className="wb-volunteeringBlock">
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
    </div>
  );
}

export default Volunteering;
