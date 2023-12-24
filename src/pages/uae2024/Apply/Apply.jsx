import React, {useEffect, useState} from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import arrow from "./images/arrow.svg";
import "./Apply.css";
import Popup from "../Popup/Popup.jsx"
import {buyTickets} from "../Navbar/NavButtons.jsx"

const data = [
  {
    img: img1,
    title: "— Communications —",
    description:
      "",
  },
  {
    img: img2,
    title: "— Organizational Support —",
    description:
      "This position is engaged both pre-event and on the grounds,  where the main requirements are strong organizational skills. The involvement requries full-time or at least part-time availability.",
  },
  {
    img: img3,
    title: "— Media Team —",
    description:
      "This posistion is more engaged on the grounds activities, where the main requirements are SMM knowledge, content writing, photo & video shooting and editing. ",
  },
  {
    img: img4,
    title: "— TeamLeads —",
    description:
      "This position is more engaged on the grounds activities, where they are mainly responsible for keeping communication with startups, and keeping track of program agenda.",
  },
];
const dataMobile = [
  {
    front: {
      img: img1,
      text: "Communications"
    },
    back: {
      title: "Communications",
      description: <p style={{textAlign: "left !important", fontSize: "15px"}}>This position is more engaged in <b>pre-event activities</b>, where the main requirements are well-developed language, and communication skills. The involvement requires at least part-time availability. </p>
    },
    color:"#428BEF"

  },
  {
    front: {
      img: img2,
      text: "Organizational Support"
    },
    back: {
      title: "Organizational Support",
      description: <p style={{textAlign: "left !important", fontSize: "15px"}}>This position is engaged both <b>pre-event and on the grounds</b>,  where the main requirements are strong organizational skills. The involvement requries full-time or at least part-time availability.</p>
    },
    color:"#428BEF"

  },
  {
    front: {
      img: img3,
      text: "Media Team"
    },
    back: {
      title: "Media Team",
      description: <p style={{textAlign: "left !important", fontSize: "15px"}}>This posistion is more engaged <b>on the grounds activities</b>, where the main requirements are SMM knowledge, content writing, photo & video shooting and editing. </p>
    },
    color:"#428BEF"

  },
  {
    front: {
      img: img4,
      text: "TeamLeads"
    },
    back: {
      title: "TeamLeads",
      description: <p style={{textAlign: "left !important", fontSize: "15px"}}>This position is more engaged <b>on the grounds activities</b>, where they are mainly responsible for keeping communication with startups, and keeping track of program agenda.</p>
    },
    color:"#428BEF"

  },
];

function Apply() {
  const [width, setWidth] = useState(0)
  const [popupStatus, setPopupStatus] = useState(false)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  const nextOrPrev = (isNext) => {
    if(isNext) {
      setActiveCardIndex(activeCardIndex + 1)
    } else {
      setActiveCardIndex(activeCardIndex - 1)
    }
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();

  }, []);
  useEffect(() => {
    if(popupStatus){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  },[popupStatus])

  return (
      <>
        <div className="wb-applyBlock wb-joinTeam">
          <div className="wb-applyTitle">
            <h2>Join our team</h2>
          </div>
          <div className="wb-applyItemsBlock wb-joinOurTeamDesktop">

            <div className="wb-itemWithArrowBlock">
              <div className="wb-itemBlock">
                <div className="wb-imageBlock">
                  <img src={data[0].img} alt="Icon" />
                </div>
                <div className="wb-contentBlock">
                  <div className="wb-titleBlock">
                    <h3>{data[0].title}</h3>
                  </div>
                  <div className="wb-description">
                    <p>
                      This position is more engaged in <strong>pre-event activities,</strong> where the main requirements are well-developed language, and communication skills. The involvement requires at least part-time availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="wb-itemWithArrowBlock">
              <div className="wb-itemBlock">
                <div className="wb-imageBlock">
                  <img src={data[1].img} alt="Icon" />
                </div>
                <div className="wb-contentBlock">
                  <div className="wb-titleBlock">
                    <h3>{data[1].title}</h3>
                  </div>
                  <div className="wb-description">
                    <p>
                      This position is engaged both <strong>pre-event and on the grounds,</strong> where the main requirements are strong organizational skills. The involvement requries full-time or at least part-time availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="wb-itemWithArrowBlock">
              <div className="wb-itemBlock">
                <div className="wb-imageBlock">
                  <img src={data[2].img} alt="Icon" />
                </div>
                <div className="wb-contentBlock">
                  <div className="wb-titleBlock">
                    <h3>{data[2].title}</h3>
                  </div>
                  <div className="wb-description">
                    <p>
                      This posistion is more engaged <strong>on the grounds activities,</strong> where the main requirements are SMM knowledge, content writing, photo & video shooting and editing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="wb-itemWithArrowBlock">
              <div className="wb-itemBlock">
                <div className="wb-imageBlock">
                  <img src={data[3].img} alt="Icon" />
                </div>
                <div className="wb-contentBlock">
                  <div className="wb-titleBlock">
                    <h3>{data[3].title}</h3>
                  </div>
                  <div className="wb-description">
                    <p>
                      This position is more engaged <strong>on the grounds activities,</strong> where they are mainly responsible for keeping communication with startups, and keeping track of program agenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wb-mobileVersion-credo-block wb-mobileVersion-joinOurTeam-block">
            <div className="wb-mobileVersion">
              <div className="wb-cardBlock">
                <div
                    className={`arrowBlock ${activeCardIndex === 0 ? "displayNone" : ""}`}
                    onClick={() => nextOrPrev(false)}
                >
                  <img width={16} src={arrow} alt="Arrow"/>
                </div>
                <div className="wb-container">
                  <div className="wb-flipper" style={{borderColor: "#428BEF"}}>
                    <div className="wb-front">
                      <p
                          style={{
                            color: "#1F2C4D",
                            fontWeight: "700",
                            fontSize: "20px !important",
                            lineHeight: "28px !important",
                            textAlign: "center",
                            letterSpacing: "0.7px",
                            textTransform: "uppercase",
                          }}
                      >
                        {dataMobile[activeCardIndex].front.text}
                      </p>
                      <div className="wb-header">
                        <img src={dataMobile[activeCardIndex].front.img} alt="Logo"/>
                      </div>

                      {dataMobile[activeCardIndex].back.description}
                    </div>
                  </div>
                </div>
                <div
                    className={`arrowBlock ${activeCardIndex === data.length-1 ? "displayNone" : ""}`}
                    onClick={() => nextOrPrev(true)}
                >
                  <img width={16} src={arrow} alt="Arrow"/>
                </div>
              </div>
            </div>
          </div>



          <div className="wb-applyButtonBlock wb-applyHereButtonBlock">
            <a
                href="https://forms.gle/UYUaL5DsLdqpsdu66"
                target="_blank"
                // onClick={() => setPopupStatus(true)}
                rel="noopener noreferrer">
              <button>Apply Here</button>
            </a>
          </div>
        </div>
         <Popup mobile={width < 1024 ? true : false} infoMode={null} status={popupStatus} buttons={buyTickets} setPopupStatus={setPopupStatus} />
      </>

  );
}

export default Apply;
